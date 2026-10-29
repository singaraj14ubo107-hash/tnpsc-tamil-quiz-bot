
const QUESTIONS = [
  {id:"T001",s:"தமிழ்",q:"திருக்குறளில் மொத்தம் எத்தனை குறள்கள் உள்ளன?",o:["1330","1300","1200","1335"],a:0,e:"திருக்குறளில் 1330 குறள்கள் உள்ளன."},
  {id:"T002",s:"தமிழ்",q:"தொல்காப்பியத்தின் மூன்று பிரிவுகள் எவை?",o:["அறம், பொருள், இன்பம்","எழுத்து, சொல், பொருள்","இயல், இசை, நாடகம்","அகம், புறம், பக்தி"],a:1,e:"எழுத்து, சொல், பொருள் ஆகியவை மூன்று பிரிவுகள்."},
  {id:"H001",s:"வரலாறு",q:"இந்திய தேசிய காங்கிரஸ் தொடங்கப்பட்ட ஆண்டு எது?",o:["1885","1905","1857","1947"],a:0,e:"இந்திய தேசிய காங்கிரஸ் 1885-ல் தொடங்கப்பட்டது."},
  {id:"P001",s:"அரசியலமைப்பு",q:"இந்திய அரசியலமைப்பு நடைமுறைக்கு வந்த நாள் எது?",o:["15 ஆகஸ்ட் 1947","26 ஜனவரி 1950","26 நவம்பர் 1949","2 அக்டோபர் 1950"],a:1,e:"அரசியலமைப்பு 26 ஜனவரி 1950 அன்று நடைமுறைக்கு வந்தது."},
  {id:"G001",s:"புவியியல்",q:"மேட்டூர் அணை எந்த ஆற்றின் குறுக்கே கட்டப்பட்டுள்ளது?",o:["வைகை","பாலாறு","காவிரி","தாமிரபரணி"],a:2,e:"மேட்டூர் அணை காவிரி ஆற்றின் குறுக்கே உள்ளது."},
  {id:"S001",s:"அறிவியல்",q:"நீரின் வேதியியல் வாய்ப்பாடு என்ன?",o:["CO2","O2","H2O","NaCl"],a:2,e:"நீரின் வேதியியல் வாய்ப்பாடு H₂O."},
  {id:"E001",s:"பொருளாதாரம்",q:"இந்திய ரிசர்வ் வங்கி தொடங்கப்பட்ட ஆண்டு எது?",o:["1935","1947","1950","1969"],a:0,e:"இந்திய ரிசர்வ் வங்கி 1935-ல் தொடங்கப்பட்டது."},
  {id:"C001",s:"பொது அறிவு",q:"தேசிய அறிவியல் தினம் எப்போது?",o:["பிப்ரவரி 28","மார்ச் 8","செப்டம்பர் 5","நவம்பர் 14"],a:0,e:"தேசிய அறிவியல் தினம் பிப்ரவரி 28 அன்று கடைப்பிடிக்கப்படுகிறது."}
];

const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;

async function getHistory(env) {
  return await env.BOT_DATA.get("question_history", "json") || {};
}

async function chooseFreshQuestions(env, count = 10) {
  const history = await getHistory(env);
  const now = Date.now();

  const available = QUESTIONS.filter(q =>
    !history[q.id] || now - history[q.id] >= THREE_DAYS
  );

  // சமீபத்தில் வந்த கேள்விகளைத் தவிர்த்து shuffle செய்கிறது
  for (let i = available.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [available[i], available[j]] = [available[j], available[i]];
  }

  const selected = available.slice(0, count);

  for (const q of selected) {
    history[q.id] = now;
  }

  await env.BOT_DATA.put("question_history", JSON.stringify(history));
  return selected;
}

async function sendDailyQuiz(env, chatId) {
  const selected = await chooseFreshQuestions(env, 10);

  if (!selected.length) {
    await sendTelegram(env, "sendMessage", {
      chat_id: chatId,
      text: "இன்று 3 நாள் இடைவெளி விதிப்படி புதிய கேள்விகள் இல்லை. புதிய கேள்விகள் சேர்க்கவும்."
    });
    return;
  }

  for (let i = 0; i < selected.length; i++) {
    const q = selected[i];

    const options = q.o.map((text, index) => ({
      text,
      index
    }));

    for (let j = options.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [options[j], options[k]] = [options[k], options[j]];
    }

    await sendTelegram(env, "sendPoll", {
      chat_id: chatId,
      question: `காலை TNPSC Quiz ${i + 1}/${selected.length}\n${q.q}`,
      options: options.map(x => x.text),
      type: "quiz",
      correct_option_id: options.findIndex(x => x.index === q.a),
      is_anonymous: false,
      explanation: q.e
    });
  }
}

async function sendTelegram(env, method, body) {
  const response = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`,
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    }
  );

  return response.json();
}

export default {
  async fetch(request, env) {
    return new Response(
      "Repeat-prevention helper ready. Integrate with your existing bot handler."
    );
  },

  async scheduled(event, env, ctx) {
    // DAILY_CHAT_ID-ஐ Cloudflare Worker secret/variable-ல் அமைக்க வேண்டும்.
    const chatId = env.DAILY_CHAT_ID;

    if (!chatId) {
      console.error("DAILY_CHAT_ID is missing");
      return;
    }

    ctx.waitUntil(sendDailyQuiz(env, chatId));
  }
};
