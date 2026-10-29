
const API = "https://api.telegram.org/bot";

async function telegram(env, method, body) {
  const response = await fetch(
    `${API}${env.TELEGRAM_BOT_TOKEN}/${method}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }
  );

  const data = await response.json();

  if (!data.ok) {
    console.log("Telegram API error:", data.description);
  }

  return data;
}

async function getAIQuestion(env) {
  const prompt = `
Create ONE original TNPSC Group 4 exam practice question
in Tamil. Topic: Tamil Nadu general knowledge, Tamil,
Indian polity, history, geography, or science.

Return only valid JSON in this format:
{
  "question": "தமிழில் கேள்வி",
  "options": ["விடை A", "விடை B", "விடை C", "விடை D"],
  "answer": 0,
  "explanation": "சுருக்கமான தமிழ் விளக்கம்"
}

Rules:
- Exactly four options.
- answer must be 0, 1, 2, or 3.
- Only one option is correct.
- Keep the question and options concise.
- Do not invent facts.
`;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": env.GEMINI_API_KEY
      },
      body: JSON.stringify({
        contents: [
          { parts: [{ text: prompt }] }
        ],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.7
        }
      })
    }
  );

  if (!response.ok) {
    console.log("Gemini API error:", await response.text());
    return null;
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) return null;

  try {
    const q = JSON.parse(text);

    if (
      typeof q.question !== "string" ||
      !Array.isArray(q.options) ||
      q.options.length !== 4 ||
      !Number.isInteger(q.answer) ||
      q.answer < 0 ||
      q.answer > 3
    ) {
      return null;
    }

    return q;
  } catch (error) {
    console.log("Question JSON error:", String(error));
    return null;
  }
}

async function sendQuiz(env, chatId) {
  const q = await getAIQuestion(env);

  if (!q) {
    await telegram(env, "sendMessage", {
      chat_id: chatId,
      text: "மன்னிக்கவும்! AI கேள்வியை உருவாக்க முடியவில்லை. சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்."
    });
    return;
  }

  await telegram(env, "sendPoll", {
    chat_id: chatId,
    question: q.question,
    options: q.options,
    type: "quiz",
    correct_option_id: q.answer,
    explanation: q.explanation || "சரியான விடையைப் பாருங்கள்.",
    is_anonymous: false
  });

  await telegram(env, "sendMessage", {
    chat_id: chatId,
    text: "அடுத்த புதிய AI கேள்விக்கு கீழே அழுத்துங்கள்.",
    reply_markup: {
      inline_keyboard: [
        [{ text: "🧠 அடுத்த AI கேள்வி", callback_data: "next_ai" }],
        [{ text: "🏠 முதன்மை Menu", callback_data: "home" }]
      ]
    }
  });
}

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("TNPSC Tamil Quiz Bot is running.");
    }

    try {
      const update = await request.json();

      if (update.message) {
        const chatId = update.message.chat.id;
        const message = (update.message.text || "").trim();

        if (message === "/start" || message === "/menu") {
          await telegram(env, "sendMessage", {
            chat_id: chatId,
            text: "வணக்கம்! TNPSC Group 4 தமிழ் AI Quiz Bot-க்கு வரவேற்கிறேன்.",
            reply_markup: {
              inline_keyboard: [
                [{ text: "🧠 AI Quiz தொடங்கு", callback_data: "ai_quiz" }]
              ]
            }
          });
        } else {
          await telegram(env, "sendMessage", {
            chat_id: chatId,
            text: "Quiz தொடங்க /start அனுப்புங்கள்."
          });
        }
      }

      if (update.callback_query) {
        const callback = update.callback_query;
        const chatId = callback.message.chat.id;

        await telegram(env, "answerCallbackQuery", {
          callback_query_id: callback.id
        });

        if (
          callback.data === "ai_quiz" ||
          callback.data === "next_ai"
        ) {
          await sendQuiz(env, chatId);
        } else if (callback.data === "home") {
          await telegram(env, "sendMessage", {
            chat_id: chatId,
            text: "மீண்டும் AI Quiz தொடங்குங்கள்.",
            reply_markup: {
              inline_keyboard: [
                [{ text: "🧠 AI Quiz தொடங்கு", callback_data: "ai_quiz" }]
              ]
            }
          });
        }
      }

      return new Response("OK");
    } catch (error) {
      console.log("Worker error:", String(error));
      return new Response("OK");
    }
  }
};
