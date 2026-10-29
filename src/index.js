const MENU = {
  keyboard: [
    [{ text: "🎯 இன்ஸ்டிடியூட் மாதிரி வினாக்கள்", callback_data: "mixed" }],
    [{ text: "📚 முந்தைய ஆண்டு வினாக்கள்", callback_data: "previous" }],
    [{ text: "📖 படிப்பு முறை", callback_data: "study" }],
    [{ text: "📝 பாடவாரித் தேர்வு", callback_data: "subjects" }]
  ]
};

// Future Expected & Institute Standard Questions
const QUESTIONS = [
  {
    s: "வரலாறு (காலவரிசைப்படுத்துக)", 
    q: "கீழ்க்காணும் நிகழ்வுகளைச் சரியான காலவரிசைப்படி அமைக்கவும்:\n1. சூரத் பிளவு\n2. வங்கப் பிரிவினை\n3. லக்னோ ஒப்பந்தம்\n4. மின்டோ-மார்லே சீர்திருத்தம்", 
    o: ["2, 1, 4, 3", "1, 2, 3, 4", "2, 4, 1, 3", "1, 4, 2, 3"], 
    a: 0, 
    e: "சரியான காலவரிசை: வங்கப் பிரிவினை (1905) -> சூரத் பிளவு (1907) -> மின்டோ-மார்லே சீர்திருத்தம் (1909) -> லக்னோ ஒப்பந்தம் (1916)."
  },
  {
    s: "அரசியலமைப்பு (Expected Twist)", 
    q: "கூற்று (A): இந்திய அரசியலமைப்பின் 32-வது விதியை 'அரசியலமைப்பின் இதயம் மற்றும் ஆன்மா' என டாக்டர் பி.ஆர். அம்பேத்கர் கூறினார்.\nகாரணம் (R): இந்த விதி, அடிப்படை உரிமைகள் மீறப்படும்போது குடிமக்கள் நேரடியாக உச்ச நீதிமன்றத்தை அணுக வழிவகை செய்கிறது.", 
    o: ["A சரி, R தவறு", "A தவறு, R சரி", "A மற்றும் R இரண்டும் சரி, R என்பது A-க்கான சரியான விளக்கம்", "இரண்டும் சரி, ஆனால் சரியான விளக்கமல்ல"], 
    a: 2, 
    e: "விதி 32 (Article 32) அரசியலமைப்புத் தீர்வுகாணும் உரிமையை (Right to Constitutional Remedies) வழங்குகிறது. இதுவே அடிப்படை உரிமைகளைப் பாதுகாக்கும் கேடயமாகும். இரண்டும் சரி."
  },
  {
    s: "பொது தமிழ் (பொருத்துக)", 
    q: "சரியான இணையைத் தேர்ந்தெடுக்க (நூல் - ஆசிரியர்):\nஅ) குயில் பாட்டு - 1. பாரதிதாசன்\nஆ) அழகின் சிரிப்பு - 2. பாரதியார்\nஇ) தமிழ் இயக்கம் - 3. நாமக்கல் கவிஞர்\nஈ) மலைக்கள்ளன் - 4. திரு.வி.க", 
    o: ["அ-2, ஆ-1, இ-4, ஈ-3", "அ-1, ஆ-2, இ-3, ஈ-4", "அ-2, ஆ-1, இ-3, ஈ-4", "அ-4, ஆ-3, இ-1, ஈ-2"], 
    a: 0, 
    e: "குயில் பாட்டு - பாரதியார். அழகின் சிரிப்பு - பாரதிதாசன். தமிழ் இயக்கம் (என்ற நூலை எழுதியவர்) - திரு.வி.க (பாரதிதாசனும் இதே பெயரில் எழுதியுள்ளார், ஆனால் இங்கு திரு.வி.க பொருத்தம்). மலைக்கள்ளன் - நாமக்கல் கவிஞர்."
  },
  {
    s: "அறிவியல் (சரியானதைத் தேர்ந்தெடு)", 
    q: "கீழ்க்காணும் ஹார்மோன்களில் எது 'அவசரகால ஹார்மோன்' (Emergency Hormone) என அழைக்கப்படுகிறது?", 
    o: ["தைராக்ஸின்", "இன்சுலின்", "அட்ரினலின்", "ஈஸ்ட்ரோஜன்"], 
    a: 2, 
    e: "அட்ரினலின் (Adrenaline) ஹார்மோன் நாம் பயப்படும்போதோ அல்லது கோபப்படும்போதோ அதிகமாகச் சுரந்து, உடலை அந்த நிலையை எதிர்கொள்ளத் தயார்படுத்துவதால் இது அவசரகால ஹார்மோன் எனப்படுகிறது."
  },
  {
    s: "புவியியல் (தவறான இணை)", 
    q: "கீழ்க்கண்ட தேசியப் பூங்காக்கள் மற்றும் மாநிலங்களில் 'தவறாகப்' பொருத்தப்பட்டுள்ள இணை எது?", 
    o: ["கிர் தேசியப் பூங்கா - குஜராத்", "காசிரங்கா - அசாம்", "ஜிம் கார்பெட் - உத்தரகாண்ட்", "பெரியார் - கர்நாடகா"], 
    a: 3, 
    e: "பெரியார் தேசியப் பூங்கா 'கேரளா' மாநிலத்தில் அமைந்துள்ளது (கர்நாடகாவில் அல்ல). மற்ற மூன்றும் சரியான இணைகள்."
  }
];

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

function menu(chatId) {
  return {
    chat_id: chatId,
    text: "வணக்கம்! TNPSC Group 4 இன்ஸ்டிடியூட் மாதிரி வினாக்களுக்கு வரவேற்கிறோம்.\nஒரு பயிற்சியைத் தேர்ந்தெடுக்கவும்.",
    reply_markup: { inline_keyboard: MENU.keyboard }
  };
}

export default {
  async fetch(request, env) {
    if (request.method !== "POST") return new Response("TNPSC Quiz Bot is running");

    let update;
    try { update = await request.json(); } 
    catch { return new Response("Invalid JSON", { status: 400 }); }

    const chatId = update.message?.chat?.id ?? update.callback_query?.message?.chat?.id;
    if (!chatId) return new Response("OK");

    if (update.message?.text === "/start" || update.message?.text === "/menu") {
      await telegram(env, "sendMessage", menu(chatId));
      return new Response("OK");
    }

    if (update.callback_query) {
      await telegram(env, "answerCallbackQuery", {
        callback_query_id: update.callback_query.id,
        text: "தேர்வு பெறப்பட்டது"
      });

      const choice = update.callback_query.data;

      if (choice.startsWith("ans|")) {
        const [, idxText, scoreText, selectedText, totalText] = choice.split("|");
        const idx = Number(idxText), score = Number(scoreText);
        const selected = Number(selectedText), total = Number(totalText);
        const q = QUESTIONS[idx];

        if (!q || idx >= total) return new Response("OK");

        const correct = selected === q.a;
        const newScore = score + (correct ? 1 : 0);

        await telegram(env, "sendMessage", {
          chat_id: chatId,
          text: `${correct ? "✅ மிகச் சரி!" : "❌ தவறு!"}\n\nசரியான விடை: ${"ABCD"[q.a]}. ${q.o[q.a]}\n\n📖 விளக்கம்:\n${q.e}\n\n📊 மதிப்பெண்: ${newScore}/${idx + 1}`
        });

        if (idx + 1 < total) {
          const next = QUESTIONS[idx + 1];
          await telegram(env, "sendMessage", {
            chat_id: chatId,
            text: `📌 வினா ${idx + 2}/${total}\n\n[${next.s}]\n\n${next.q}`,
            reply_markup: {
              inline_keyboard: next.o.map((v, i) => [{
                text: `${"ABCD"[i]}. ${v}`,
                callback_data: `ans|${idx + 1}|${newScore}|${i}|${total}`
              }])
            }
          });
        } else {
          await telegram(env, "sendMessage", {
            chat_id: chatId,
            text: `🏁 அருமை! தேர்வு முடிந்தது.\n\n🏆 உங்கள் மொத்த மதிப்பெண்: ${newScore}/${total}\n\nமீண்டும் முயற்சிக்க /start ஐ அழுத்தவும்.`
          });
        }
      } else if (choice === "mixed") {
        const total = QUESTIONS.length;
        const first = QUESTIONS[0];

        await telegram(env, "sendMessage", {
          chat_id: chatId,
          text: `🎯 இன்ஸ்டிடியூட் தர வினாக்கள் தொடங்குகிறது!\n\n📌 வினா 1/${total}\n\n[${first.s}]\n\n${first.q}`,
          reply_markup: {
            inline_keyboard: first.o.map((v, i) => [{
              text: `${"ABCD"[i]}. ${v}`,
              callback_data: `ans|0|0|${i}|${total}`
            }])
          }
        });
      }
    }
    return new Response("OK");
  }
};
