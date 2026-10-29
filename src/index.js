const MENU = {
  keyboard: [
    [{ text: "🧠 AI ஸ்மார்ட் தேர்வு (Auto Generate)", callback_data: "ai_quiz" }],
    [{ text: "📚 முந்தைய ஆண்டு வினாக்கள்", callback_data: "previous" }],
    [{ text: "📖 படிப்பு முறை", callback_data: "study" }]
  ]
};

async function telegram(env, method, body) {
  const response = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`, 
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }
  );
  return response.json();
}

async function getAIQuestion(env) {
  const prompt = `You are a TNPSC Group 4 exam expert. Generate ONE multiple-choice question in Tamil.
  Topics: Randomly choose from History, Polity, Geography, Tamil literature, or Science (strictly NO MATH).
  Difficulty: Hard (Statement/Reasoning, matching, or tricky options).
  Constraints:
  - Question length: strictly under 280 characters.
  - Options: exactly 4 options, each strictly under 90 characters.
  - Explanation: strictly under 190 characters in Tamil.
  Output ONLY a valid JSON object. No markdown formatting, no backticks.
  Format:
  {
    "q": "Question text here",
    "o": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "a": 2, // Integer index of the correct option (0 to 3)
    "e": "Short explanation here"
  }`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.8 }
      })
    });
    const data = await response.json();
    let text = data.candidates[0].content.parts[0].text;
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(text);
  } catch (error) {
    return {
      q: "மன்னிக்கவும், AI வினாவை உருவாக்குவதில் சிறு பிழை ஏற்பட்டுள்ளது. மீண்டும் முயற்சிக்கவும்.",
      o: ["சரி", "தவறு", "தெரியவில்லை", "மீண்டும் முயல்க"],
      a: 0,
      e: "Network or API format error."
    };
  }
}

function menu(chatId) {
  return {
    chat_id: chatId,
    text: "வணக்கம்! TNPSC AI Quiz Bot-க்கு வரவேற்கிறோம்.\nAI மூலம் புதிய வினாக்களை உருவாக்க கீழே கிளிக் செய்யவும்.",
    reply_markup: { inline_keyboard: MENU.keyboard }
  };
}

export default {
  async fetch(request, env) {
    if (request.method !== "POST") return new Response("Bot is running");

    let update;
    try { update = await request.json(); } catch { return new Response("OK"); }

    const chatId = update.message?.chat?.id ?? update.callback_query?.message?.chat?.id;
    if (!chatId) return new Response("OK");

    if (update.message?.text === "/start" || update.message?.text === "/menu") {
      await telegram(env, "sendMessage", menu(chatId));
      return new Response("OK");
    }

    if (update.callback_query) {
      const choice = update.callback_query.data;
      const callbackId = update.callback_query.id;

      if (choice === "ai_quiz") {
        await telegram(env, "answerCallbackQuery", {
          callback_query_id: callbackId,
          text: "AI வினாவை உருவாக்குகிறது... ⏳"
        });

        const loadingMsg = await telegram(env, "sendMessage", {
          chat_id: chatId,
          text: "🤖 *Gemini AI* உங்களுக்கான புதிய வினாவை உருவாக்குகிறது... காத்திருக்கவும் ⏳",
          parse_mode: "Markdown"
        });

        const aiData = await getAIQuestion(env);

        if (loadingMsg && loadingMsg.result) {
          await telegram(env, "deleteMessage", {
            chat_id: chatId,
            message_id: loadingMsg.result.message_id
          });
        }

        await telegram(env, "sendPoll", {
          chat_id: chatId,
          question: "🤖 AI வினா: " + aiData.q,
          options: aiData.o,
          type: "quiz",
          correct_option_id: aiData.a,
          explanation: aiData.e,
          is_anonymous: false,
          reply_markup: {
            inline_keyboard: [[{ text: "➡️ அடுத்த AI வினா", callback_data: "ai_quiz" }]]
          }
        });
      } else {
        await telegram(env, "answerCallbackQuery", {
          callback_query_id: callbackId,
          text: "மற்ற பகுதிகள் விரைவில் இணைக்கப்படும்."
        });
      }
    }
    return new Response("OK");
  }
};
