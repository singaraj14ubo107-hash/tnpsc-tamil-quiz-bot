
const MENU = [
  [{ text: "🎯 கலப்பு தேர்வு (25)", callback_data: "mixed" }],
  [{ text: "📚 முந்தைய ஆண்டு வினாக்கள்", callback_data: "previous" }],
  [{ text: "📖 படிப்பு முறை", callback_data: "study" }],
  [{ text: "📝 பாடவாரித் தேர்வு", callback_data: "subjects" }],
  [{ text: "🔄 தவறான வினாக்கள்", callback_data: "wrong" }],
  [{ text: "⭐ சேமித்த வினாக்கள்", callback_data: "saved" }],
  [{ text: "📊 மதிப்பெண்கள்", callback_data: "score" }],
  [{ text: "🌅 தினசரி Quiz", callback_data: "daily" }]
];

const QUESTIONS = [
  { s: "வரலாறு", q: "வங்கப் பிரிவினை நடைபெற்ற ஆண்டு எது?", o: ["1905", "1907", "1909", "1911"], a: 0, e: "வங்கப் பிரிவினை 1905 ஆம் ஆண்டு நடைபெற்றது." },
  { s: "அரசியலமைப்பு", q: "இந்திய அரசியலமைப்பின் 32-வது விதி எதனுடன் தொடர்புடையது?", o: ["சமத்துவ உரிமை", "அரசியலமைப்புத் தீர்வுகாணும் உரிமை", "கல்வி உரிமை", "மத உரிமை"], a: 1, e: "விதி 32 அடிப்படை உரிமைகளைப் பாதுகாக்க உச்ச நீதிமன்றத்தை அணுகும் உரிமையை வழங்குகிறது." },
  { s: "பொது தமிழ்", q: "குயில் பாட்டு நூலை எழுதியவர் யார்?", o: ["பாரதியார்", "பாரதிதாசன்", "திரு.வி.க.", "நாமக்கல் கவிஞர்"], a: 0, e: "குயில் பாட்டு பாரதியார் எழுதிய படைப்பு." },
  { s: "அறிவியல்", q: "அவசரகால ஹார்மோன் என்று அழைக்கப்படுவது எது?", o: ["தைராக்ஸின்", "இன்சுலின்", "அட்ரினலின்", "ஈஸ்ட்ரோஜன்"], a: 2, e: "அட்ரினலின் உடலை அவசர நிலையை எதிர்கொள்ளத் தயார்படுத்துகிறது." },
  { s: "புவியியல்", q: "பெரியார் தேசியப் பூங்கா அமைந்துள்ள மாநிலம் எது?", o: ["தமிழ்நாடு", "கர்நாடகா", "கேரளா", "ஆந்திரப் பிரதேசம்"], a: 2, e: "பெரியார் தேசியப் பூங்கா கேரளாவில் அமைந்துள்ளது." },
  { s: "வரலாறு", q: "சூரத் பிளவு நடைபெற்ற ஆண்டு எது?", o: ["1905", "1906", "1907", "1909"], a: 2, e: "சூரத் பிளவு 1907 ஆம் ஆண்டு ஏற்பட்டது." },
  { s: "அரசியலமைப்பு", q: "இந்திய அரசியலமைப்பு நடைமுறைக்கு வந்த நாள் எது?", o: ["15 ஆகஸ்ட் 1947", "26 ஜனவரி 1950", "26 நவம்பர் 1949", "2 அக்டோபர் 1950"], a: 1, e: "அரசியலமைப்பு 26 ஜனவரி 1950 அன்று நடைமுறைக்கு வந்தது." },
  { s: "அறிவியல்", q: "ஒளிச்சேர்க்கையில் தாவரங்கள் பயன்படுத்தும் வாயு எது?", o: ["ஆக்சிஜன்", "நைட்ரஜன்", "கார்பன் டைஆக்சைடு", "ஹைட்ரஜன்"], a: 2, e: "தாவரங்கள் ஒளிச்சேர்க்கையில் கார்பன் டைஆக்சைடைப் பயன்படுத்துகின்றன." },
  { s: "புவியியல்", q: "தமிழ்நாட்டின் தலைநகரம் எது?", o: ["மதுரை", "கோயம்புத்தூர்", "சென்னை", "திருச்சி"], a: 2, e: "தமிழ்நாட்டின் தலைநகரம் சென்னை." },
  { s: "பொது தமிழ்", q: "திருக்குறளை இயற்றியவர் யார்?", o: ["கம்பர்", "திருவள்ளுவர்", "இளங்கோ அடிகள்", "அவ்வையார்"], a: 1, e: "திருக்குறளை இயற்றியவர் திருவள்ளுவர்." }
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

  const data = await response.json();
  if (!data.ok) console.log("Telegram API error:", data.description);
  return data;
}

async function sendMessage(env, chatId, text, keyboard) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text,
    ...(keyboard ? { reply_markup: { inline_keyboard: keyboard } } : {})
  });
}

async function sendQuizPoll(env, chatId, mode, index, score, list) {
  const q = QUESTIONS[list[index]];
  if (!q) return;

  const result = await telegram(env, "sendPoll", {
    chat_id: chatId,
    question: `வினா ${index + 1}/${list.length}\n${q.s}\n\n${q.q}`,
    options: q.o,
    type: "quiz",
    correct_option_id: q.a,
    explanation: q.e,
    is_anonymous: false
  });

  if (!result.ok) {
    await sendMessage(env, chatId, "வினாவை அனுப்ப முடியவில்லை. மீண்டும் /start அனுப்புங்கள்.");
    return;
  }

  await sendMessage(
    env,
    chatId,
    `வினா ${index + 1}/${list.length} அனுப்பப்பட்டது.\nஅடுத்த வினாவுக்குத் தயாரா?`,
    [
      [{
        text: index + 1 < list.length ? "➡️ அடுத்த வினா" : "🏁 தேர்வு முடி",
        callback_data: index + 1 < list.length
          ? `next|${mode}|${index + 1}|${score}|${list.join(",")}`
          : `finish|${mode}|${index + 1}|${score}|${list.join(",")}`
      }],
      [{ text: "🏠 முதன்மை Menu", callback_data: "home" }]
    ]
  );
}

function getList(mode) {
  if (mode === "daily" || mode === "previous") {
    return QUESTIONS.map((_, i) => i).slice(0, 10);
  }
  return QUESTIONS.map((_, i) => i);
}

async function startQuiz(env, chatId, mode) {
  const list = getList(mode);
  await sendMessage(env, chatId, "🎯 தேர்வு தொடங்குகிறது! ஒவ்வொரு Poll-லும் சரியான விடையைத் தேர்ந்தெடுக்கவும்.");
  await sendQuizPoll(env, chatId, mode, 0, 0, list);
}

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("TNPSC Quiz Bot is running");
    }

    try {
      const update = await request.json();
      const chatId = update.message?.chat?.id ?? update.callback_query?.message?.chat?.id;
      if (!chatId) return new Response("OK");

      if (update.message?.text === "/start" || update.message?.text === "/menu") {
        await sendMessage(
          env,
          chatId,
          "வணக்கம்! TNPSC Group 4 Quiz-க்கு வரவேற்கிறோம்.\nஒரு தேர்வைத் தேர்ந்தெடுக்கவும்.",
          MENU
        );
      }

      if (update.callback_query) {
        const cb = update.callback_query;
        const data = cb.data || "";

        await telegram(env, "answerCallbackQuery", {
          callback_query_id: cb.id
        });

        if (["mixed", "previous", "daily"].includes(data)) {
          await startQuiz(env, chatId, data);
        } else if (data === "subjects") {
          await sendMessage(env, chatId, "பாடத்தைத் தேர்ந்தெடுக்கவும்:", [
            [{ text: "📜 வரலாறு", callback_data: "subject:வரலாறு" }],
            [{ text: "🏛️ அரசியலமைப்பு", callback_data: "subject:அரசியலமைப்பு" }],
            [{ text: "🔤 பொது தமிழ்", callback_data: "subject:பொது தமிழ்" }],
            [{ text: "🔬 அறிவியல்", callback_data: "subject:அறிவியல்" }],
            [{ text: "🌍 புவியியல்", callback_data: "subject:புவியியல்" }]
          ]);
        } else if (data.startsWith("subject:")) {
          const subject = data.slice(8);
          const list = QUESTIONS.map((q, i) => q.s === subject ? i : -1).filter(i => i >= 0);
          if (list.length) {
            await sendQuizPoll(env, chatId, data, 0, 0, list);
          } else {
            await sendMessage(env, chatId, "இந்தப் பாடத்தில் வினாக்கள் இல்லை.");
          }
        } else if (data === "study") {
          await sendMessage(env, chatId, "📖 தினமும் பொது தமிழ், வரலாறு, அரசியலமைப்பு, அறிவியல், புவியியல் ஆகியவற்றைப் படித்து மாதிரி வினாக்களைப் பயிற்சி செய்யுங்கள்.", [
            [{ text: "🎯 தேர்வு தொடங்கு", callback_data: "mixed" }],
            [{ text: "🏠 Menu", callback_data: "home" }]
          ]);
        } else if (data === "wrong" || data === "saved" || data === "score") {
          const messages = {
            wrong: "🔄 தவறான வினாக்களைச் சேமிக்கும் வசதிக்கு database இணைக்க வேண்டும்.",
            saved: "⭐ சேமித்த வினாக்களுக்கான வசதிக்கு database இணைக்க வேண்டும்.",
            score: "📊 Telegram Poll-ல் ஒவ்வொரு வினாவிற்கும் உங்கள் பதிலைப் பார்க்கலாம். மொத்த மதிப்பெண் வரலாற்றைச் சேமிக்க database தேவை."
          };
          await sendMessage(env, chatId, messages[data], [[{ text: "🏠 முதன்மை Menu", callback_data: "home" }]]);
        } else if (data === "home") {
          await sendMessage(env, chatId, "முதன்மை Menu:", MENU);
        } else if (data.startsWith("next|") || data.startsWith("finish|")) {
          const [action, mode, indexText, scoreText, listText] = data.split("|");
          const index = Number(indexText);
          const score = Number(scoreText);
          const list = listText.split(",").map(Number);

          if (action === "finish" || index >= list.length) {
            await sendMessage(env, chatId, `🏁 தேர்வு முடிந்தது!\nமொத்த வினாக்கள்: ${list.length}\nTelegram Poll முடிவுகளைப் பார்த்து உங்கள் பதில்களை மதிப்பாய்வு செய்யுங்கள்.`, [
              [{ text: "🔁 மீண்டும் தேர்வு", callback_data: mode }],
              [{ text: "🏠 முதன்மை Menu", callback_data: "home" }]
            ]);
          } else {
            await sendQuizPoll(env, chatId, mode, index, score, list);
          }
        }
      }

      return new Response("OK");
    } catch (error) {
      console.log("Worker error:", String(error));
      return new Response("OK");
    }
  }
};
