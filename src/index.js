
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
  { s: "புவியியல்", q: "இந்தியாவின் மிக நீளமான நதி அமைப்பு எது?", o: ["கங்கை", "காவிரி", "நர்மதை", "தபதி"], a: 0, e: "கங்கை நதி அமைப்பு இந்தியாவின் முக்கியமான மற்றும் மிக நீளமான நதி அமைப்புகளில் ஒன்று." },
  { s: "பொது தமிழ்", q: "திருக்குறளை இயற்றியவர் யார்?", o: ["கம்பர்", "திருவள்ளுவர்", "இளங்கோ அடிகள்", "அவ்வையார்"], a: 1, e: "திருக்குறளை இயற்றியவர் திருவள்ளுவர்." },
  { s: "வரலாறு", q: "இந்திய தேசிய காங்கிரஸ் தொடங்கப்பட்ட ஆண்டு எது?", o: ["1885", "1905", "1919", "1942"], a: 0, e: "இந்திய தேசிய காங்கிரஸ் 1885 ஆம் ஆண்டு தொடங்கப்பட்டது." },
  { s: "அரசியலமைப்பு", q: "இந்தியாவில் வாக்களிக்கும் குறைந்தபட்ச வயது எத்தனை?", o: ["16", "18", "21", "25"], a: 1, e: "வாக்களிக்கும் குறைந்தபட்ச வயது 18." },
  { s: "அறிவியல்", q: "வைட்டமின் C குறைபாட்டால் ஏற்படும் நோய் எது?", o: ["ரிக்கெட்ஸ்", "ஸ்கர்வி", "பெரிபெரி", "இரவு குருட்டுத்தன்மை"], a: 1, e: "வைட்டமின் C குறைபாட்டால் ஸ்கர்வி ஏற்படும்." },
  { s: "புவியியல்", q: "தமிழ்நாட்டின் தலைநகரம் எது?", o: ["மதுரை", "கோயம்புத்தூர்", "சென்னை", "திருச்சி"], a: 2, e: "தமிழ்நாட்டின் தலைநகரம் சென்னை." },
  { s: "பொது தமிழ்", q: "சிலப்பதிகாரத்தின் ஆசிரியர் யார்?", o: ["சீத்தலைச் சாத்தனார்", "இளங்கோ அடிகள்", "கம்பர்", "திருவள்ளுவர்"], a: 1, e: "சிலப்பதிகாரத்தை இயற்றியவர் இளங்கோ அடிகள்." },
  { s: "வரலாறு", q: "வெள்ளையனே வெளியேறு இயக்கம் தொடங்கப்பட்ட ஆண்டு எது?", o: ["1920", "1930", "1942", "1947"], a: 2, e: "வெள்ளையனே வெளியேறு இயக்கம் 1942 ஆம் ஆண்டு தொடங்கப்பட்டது." },
  { s: "அரசியலமைப்பு", q: "இந்தியக் குடியரசுத் தலைவரைத் தேர்ந்தெடுப்பவர்கள் யார்?", o: ["மக்கள் நேரடியாக", "தேர்ந்தெடுக்கப்பட்ட நாடாளுமன்ற மற்றும் மாநில சட்டமன்ற உறுப்பினர்கள்", "உச்ச நீதிமன்றம்", "பிரதமர் மட்டும்"], a: 1, e: "தேர்ந்தெடுக்கப்பட்ட நாடாளுமன்ற மற்றும் மாநில சட்டமன்ற உறுப்பினர்கள் கொண்ட தேர்தல் குழு குடியரசுத் தலைவரைத் தேர்ந்தெடுக்கிறது." },
  { s: "அறிவியல்", q: "நீரின் வேதியியல் வாய்ப்பாடு எது?", o: ["CO2", "O2", "H2O", "NaCl"], a: 2, e: "நீரின் வேதியியல் வாய்ப்பாடு H2O." },
  { s: "புவியியல்", q: "மேற்குத் தொடர்ச்சி மலைகள் இந்தியாவின் எந்தப் பகுதியில் உள்ளன?", o: ["மேற்கு", "கிழக்கு", "வடக்கு", "மத்திய"], a: 0, e: "மேற்குத் தொடர்ச்சி மலைகள் இந்தியாவின் மேற்குப் பகுதியில் உள்ளன." },
  { s: "பொது தமிழ்", q: "மணிமேகலை நூலின் ஆசிரியர் யார்?", o: ["சீத்தலைச் சாத்தனார்", "இளங்கோ அடிகள்", "கம்பர்", "பாரதியார்"], a: 0, e: "மணிமேகலையை இயற்றியவர் சீத்தலைச் சாத்தனார்." },
  { s: "வரலாறு", q: "ஜாலியன் வாலாபாக் படுகொலை நடந்த ஆண்டு எது?", o: ["1905", "1919", "1929", "1942"], a: 1, e: "ஜாலியன் வாலாபாக் நிகழ்வு 1919 ஆம் ஆண்டு நடந்தது." },
  { s: "அரசியலமைப்பு", q: "இந்திய அரசியலமைப்பின் அடிப்படை கடமைகள் எந்த விதியில் குறிப்பிடப்பட்டுள்ளன?", o: ["விதி 14", "விதி 21", "விதி 51A", "விதி 32"], a: 2, e: "அடிப்படை கடமைகள் விதி 51A-ல் குறிப்பிடப்பட்டுள்ளன." },
  { s: "அறிவியல்", q: "சூரிய ஒளியிலிருந்து உடலில் உருவாக உதவும் வைட்டமின் எது?", o: ["A", "B12", "C", "D"], a: 3, e: "சூரிய ஒளி வைட்டமின் D உருவாக உதவுகிறது." },
  { s: "புவியியல்", q: "இந்தியாவின் தென்முனையாகக் கருதப்படும் நிலப்பகுதி எது?", o: ["கன்னியாகுமரி", "இந்திரா பாயிண்ட்", "ராமேஸ்வரம்", "தனுஷ்கோடி"], a: 1, e: "இந்தியாவின் முழுமையான தென்முனை இந்திரா பாயிண்ட்; இந்திய நிலப்பரப்பின் தென்முனை கன்னியாகுமரி." },
  { s: "பொது தமிழ்", q: "தமிழ்த்தாய் வாழ்த்தை இயற்றியவர் யார்?", o: ["மனோன்மணியம் சுந்தரனார்", "பாரதியார்", "பாரதிதாசன்", "கம்பர்"], a: 0, e: "தமிழ்த்தாய் வாழ்த்து மனோன்மணியம் சுந்தரனார் எழுதிய பாடலிலிருந்து பெறப்பட்டது." }
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

function mainMenu(chatId) {
  return {
    chat_id: chatId,
    text: "வணக்கம்! TNPSC Group 4 தமிழ் பயிற்சிக்கு வரவேற்கிறோம்.\nஒரு பயிற்சியைத் தேர்ந்தெடுக்கவும்.",
    reply_markup: { inline_keyboard: MENU }
  };
}

async function sendMessage(env, chatId, text, keyboard) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text,
    ...(keyboard ? { reply_markup: { inline_keyboard: keyboard } } : {})
  });
}

function questionKeyboard(mode, idx, score, selectedList) {
  const q = QUESTIONS[selectedList[idx]];
  return q.o.map((option, i) => [{
    text: `${"ABCD"[i]}. ${option}`,
    callback_data: `ans|${mode}|${idx}|${score}|${i}`
  }]);
}

function getList(mode) {
  if (mode === "previous") return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (mode === "daily") return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (mode.startsWith("subject:")) {
    const subject = mode.slice(8);
    return QUESTIONS.map((q, i) => q.s === subject ? i : -1).filter(i => i !== -1);
  }
  return QUESTIONS.map((q, i) => i);
}

async function sendQuestion(env, chatId, mode, idx, score, list) {
  const q = QUESTIONS[list[idx]];
  if (!q) return;

  await sendMessage(
    env,
    chatId,
    `📌 வினா ${idx + 1}/${list.length}\n📚 ${q.s}\n\n${q.q}`,
    questionKeyboard(mode, idx, score, list)
  );
}

async function startQuiz(env, chatId, mode) {
  const list = getList(mode);
  if (!list.length) {
    await sendMessage(env, chatId, "இந்தப் பாடத்தில் வினாக்கள் இல்லை.");
    return;
  }
  await sendQuestion(env, chatId, mode, 0, 0, list);
}

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("TNPSC Tamil Quiz Bot is running");
    }

    let update;
    try {
      update = await request.json();
    } catch {
      return new Response("Invalid JSON", { status: 400 });
    }

    const chatId =
      update.message?.chat?.id ??
      update.callback_query?.message?.chat?.id;

    if (!chatId) return new Response("OK");

    if (update.message?.text === "/start" || update.message?.text === "/menu") {
      await telegram(env, "sendMessage", mainMenu(chatId));
      return new Response("OK");
    }

    if (!update.callback_query) return new Response("OK");

    const callback = update.callback_query;
    const choice = callback.data || "";

    await telegram(env, "answerCallbackQuery", {
      callback_query_id: callback.id
    });

    if (choice === "mixed" || choice === "previous" || choice === "daily") {
      await startQuiz(env, chatId, choice);
    } else if (choice === "subjects") {
      await sendMessage(env, chatId, "பாடத்தைத் தேர்ந்தெடுக்கவும்:", [
        [{ text: "📜 வரலாறு", callback_data: "subject:வரலாறு" }],
        [{ text: "🏛️ அரசியலமைப்பு", callback_data: "subject:அரசியலமைப்பு" }],
        [{ text: "🔤 பொது தமிழ்", callback_data: "subject:பொது தமிழ்" }],
        [{ text: "🔬 அறிவியல்", callback_data: "subject:அறிவியல்" }],
        [{ text: "🌍 புவியியல்", callback_data: "subject:புவியியல்" }]
      ]);
    } else if (choice === "study") {
      await sendMessage(
        env,
        chatId,
        "📖 படிப்பு முறை\n\n1. தினமும் பொது தமிழ் படிக்கவும்.\n2. அரசியலமைப்பு விதிகளைப் பயிலவும்.\n3. வரலாறு மற்றும் புவியியலைப் படிக்கவும்.\n4. தினமும் மாதிரி வினாக்களைப் பயிற்சி செய்யவும்.\n5. தவறான விடைகளை மீண்டும் படிக்கவும்.",
        [[{ text: "🎯 தேர்வு தொடங்கு", callback_data: "mixed" }], [{ text: "🏠 Menu", callback_data: "home" }]]
      );
    } else if (choice === "wrong") {
      await sendMessage(env, chatId, "🔄 தவறான வினாக்களை நிரந்தரமாகச் சேமிக்கும் வசதி இன்னும் இணைக்கப்படவில்லை. இப்போது கலப்பு தேர்வைத் தொடங்கலாம்.", [[{ text: "🎯 கலப்பு தேர்வு", callback_data: "mixed" }]]);
    } else if (choice === "saved") {
      await sendMessage(env, chatId, "⭐ சேமித்த வினாக்களை நிரந்தரமாகச் சேமிக்கும் வசதி இன்னும் இணைக்கப்படவில்லை.", [[{ text: "🎯 கலப்பு தேர்வு", callback_data: "mixed" }]]);
    } else if (choice === "score") {
      await sendMessage(env, chatId, "📊 ஒவ்வொரு தேர்வின் மதிப்பெண் திரையில் காட்டப்படும். வரலாற்று மதிப்பெண்களைச் சேமிக்க இன்னும் database தேவை.", [[{ text: "🎯 கலப்பு தேர்வு", callback_data: "mixed" }]]);
    } else if (choice === "home") {
      await telegram(env, "sendMessage", mainMenu(chatId));
    } else if (choice.startsWith("subject:")) {
      await startQuiz(env, chatId, choice);
    } else if (choice.startsWith("ans|")) {
      const [, mode, idxText, scoreText, selectedText] = choice.split("|");
      const idx = Number(idxText);
      const score = Number(scoreText);
      const selected = Number(selectedText);
      const list = getList(mode);
      const q = QUESTIONS[list[idx]];

      if (!q) return new Response("OK");

      const correct = selected === q.a;
      const newScore = score + (correct ? 1 : 0);

      await sendMessage(
        env,
        chatId,
        `${correct ? "✅ சரியான விடை!" : "❌ தவறான விடை!"}\n\nசரியான விடை: ${"ABCD"[q.a]}. ${q.o[q.a]}\n\n📖 விளக்கம்:\n${q.e}\n\n📊 மதிப்பெண்: ${newScore}/${idx + 1}`
      );

      if (idx + 1 < list.length) {
        await sendQuestion(env, chatId, mode, idx + 1, newScore, list);
      } else {
        await sendMessage(
          env,
          chatId,
          `🏁 தேர்வு முடிந்தது!\n\n🏆 மொத்த மதிப்பெண்: ${newScore}/${list.length}`,
          [[{ text: "🏠 முதன்மை Menu", callback_data: "home" }], [{ text: "🔁 மீண்டும் தேர்வு", callback_data: mode }]]
        );
      }
    }

    return new Response("OK");
  }
};
