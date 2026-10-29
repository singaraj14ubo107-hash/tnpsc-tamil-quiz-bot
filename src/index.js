
const QUESTIONS = [
  {s:"தமிழ்",q:"திருக்குறளில் மொத்தம் எத்தனை குறள்கள் உள்ளன?",o:["1300","1330","1335","1200"],a:1,e:"திருக்குறளில் 1330 குறள்கள் உள்ளன."},
  {s:"தமிழ்",q:"தொல்காப்பியம் எத்தனை அதிகாரங்களைக் கொண்டது?",o:["2","3","5","8"],a:1,e:"எழுத்து, சொல், பொருள் என மூன்று அதிகாரங்கள்."},
  {s:"தமிழ்",q:"திருக்குறளில் உள்ள அதிகாரங்களின் எண்ணிக்கை?",o:["108","130","133","150"],a:2,e:"திருக்குறளில் 133 அதிகாரங்கள் உள்ளன."},
  {s:"வரலாறு",q:"இந்திய தேசிய காங்கிரஸ் தொடங்கப்பட்ட ஆண்டு?",o:["1885","1905","1919","1942"],a:0,e:"1885-ஆம் ஆண்டு தொடங்கப்பட்டது."},
  {s:"வரலாறு",q:"வெள்ளையனே வெளியேறு இயக்கம் தொடங்கிய ஆண்டு?",o:["1930","1942","1946","1920"],a:1,e:"1942-ஆம் ஆண்டு தொடங்கியது."},
  {s:"வரலாறு",q:"வேலூர் சிப்பாய்க் கலகம் நடந்த ஆண்டு?",o:["1757","1806","1857","1906"],a:1,e:"1806-ஆம் ஆண்டு நடைபெற்றது."},
  {s:"வரலாறு",q:"இந்திய தேசிய காங்கிரஸின் முதல் பெண் தலைவர் யார்?",o:["சரோஜினி நாயுடு","அன்னி பெசன்ட்","கஸ்தூரிபாய்","விஜயலட்சுமி பண்டிட்"],a:1,e:"அன்னி பெசன்ட் 1917-ல் தலைவரானார்."},
  {s:"அரசியலமைப்பு",q:"இந்திய அரசியலமைப்பு நடைமுறைக்கு வந்த நாள்?",o:["15-08-1947","26-11-1949","26-01-1950","02-10-1950"],a:2,e:"26 ஜனவரி 1950."},
  {s:"அரசியலமைப்பு",q:"அடிப்படை உரிமைகள் எந்தப் பகுதியில் உள்ளன?",o:["பகுதி I","பகுதி II","பகுதி III","பகுதி IV"],a:2,e:"அரசியலமைப்பின் பகுதி III."},
  {s:"அரசியலமைப்பு",q:"அரசியலமைப்பின் 21-வது பிரிவு எதைக் குறிக்கிறது?",o:["சமத்துவம்","வாழ்வுரிமை மற்றும் தனிநபர் சுதந்திரம்","மத உரிமை","கல்வி மட்டும்"],a:1,e:"வாழ்வுரிமை மற்றும் தனிநபர் சுதந்திரம்."},
  {s:"அரசியலமைப்பு",q:"நிதி மசோதா முதலில் எந்த அவையில் அறிமுகப்படுத்தப்படுகிறது?",o:["மாநிலங்களவை","மக்களவை","இரு அவைகளிலும்","உச்சநீதிமன்றம்"],a:1,e:"மக்களவையில் அறிமுகப்படுத்தப்படுகிறது."},
  {s:"புவியியல்",q:"இந்தியத் திட்ட நேரத்தின் தீர்க்கரேகை எது?",o:["68°7′ கிழக்கு","75° கிழக்கு","82°30′ கிழக்கு","90° கிழக்கு"],a:2,e:"82°30′ கிழக்கு தீர்க்கரேகை."},
  {s:"புவியியல்",q:"இந்தியாவிற்குள் முழுமையாகப் பாயும் மிக நீளமான ஆறு?",o:["கங்கை","கோதாவரி","நர்மதை","கிருஷ்ணா"],a:1,e:"கோதாவரி."},
  {s:"புவியியல்",q:"கரிசல் மண் எந்தப் பயிருக்கு ஏற்றது?",o:["தேயிலை","பருத்தி","சணல்","குங்குமப்பூ"],a:1,e:"பருத்தி."},
  {s:"புவியியல்",q:"தென்மேற்குப் பருவமழை பொதுவாக முதலில் அடையும் மாநிலம்?",o:["தமிழ்நாடு","கேரளா","ஒடிசா","குஜராத்"],a:1,e:"கேரளக் கடற்கரை."},
  {s:"அறிவியல்",q:"இரத்தத்தில் ஆக்சிஜனை எடுத்துச் செல்லும் புரதம்?",o:["இன்சுலின்","ஹீமோகுளோபின்","கொலாஜன்","கெராட்டின்"],a:1,e:"ஹீமோகுளோபின்."},
  {s:"அறிவியல்",q:"மின்தடையின் SI அலகு எது?",o:["வோல்ட்","ஆம்பியர்","ஓம்","வாட்"],a:2,e:"ஓம்."},
  {s:"அறிவியல்",q:"ஒளிச்சேர்க்கையில் தாவரங்கள் பயன்படுத்தும் வாயு?",o:["ஆக்சிஜன்","நைட்ரஜன்","கார்பன் டைஆக்சைடு","ஹைட்ரஜன்"],a:2,e:"கார்பன் டைஆக்சைடு."},
  {s:"அறிவியல்",q:"வைட்டமின் C குறைபாட்டால் ஏற்படும் நோய்?",o:["ரிக்கெட்ஸ்","ஸ்கர்வி","பெரிபெரி","இரவு குருட்டுத்தன்மை"],a:1,e:"ஸ்கர்வி."},
  {s:"பொருளாதாரம்",q:"இந்திய ரிசர்வ் வங்கி தேசியமயமாக்கப்பட்ட ஆண்டு?",o:["1935","1947","1949","1956"],a:2,e:"1949."},
  {s:"தமிழ்நாடு",q:"தமிழ்நாட்டின் மாநில மரம் எது?",o:["வேம்பு","பனைமரம்","ஆலமரம்","தென்னை"],a:1,e:"பனைமரம்."},
  {s:"தமிழ்நாடு",q:"கல்லணையைக் கட்டியதாகக் குறிப்பிடப்படும் மன்னர்?",o:["ராஜராஜ சோழன்","கரிகால சோழன்","ராஜேந்திர சோழன்","குலோத்துங்க சோழன்"],a:1,e:"கரிகால சோழன்."},
  {s:"தமிழ்நாடு",q:"சுயமரியாதை இயக்கத்தைத் தொடங்கியவர்?",o:["ராஜாஜி","பெரியார்","காமராசர்","திரு.வி.க."],a:1,e:"பெரியார் ஈ.வெ. ராமசாமி."},
  {s:"கணிதம்",q:"ஒரு எண்ணின் 20% என்பது 48 எனில் அந்த எண்?",o:["180","200","240","260"],a:2,e:"48 ÷ 0.20 = 240."},
  {s:"கணிதம்",q:"12, 18, 20, 30 ஆகிய எண்களின் சராசரி?",o:["18","20","22","25"],a:1,e:"சராசரி 20."}
];

const MENU = {
  keyboard:[
    [{text:"📝 கலப்பு தேர்வு (25)"},{text:"📚 பாடவாரித் தேர்வு"}],
    [{text:"📊 மதிப்பெண்கள்"},{text:"📖 படிப்பு முறை"}],
    [{text:"🏠 முதன்மை Menu"}]
  ],
  resize_keyboard:true
};

const SUBJECTS = {
  inline_keyboard:[
    [{text:"தமிழ்",callback_data:"S:தமிழ்"},{text:"வரலாறு",callback_data:"S:வரலாறு"}],
    [{text:"அரசியலமைப்பு",callback_data:"S:அரசியலமைப்பு"},{text:"புவியியல்",callback_data:"S:புவியியல்"}],
    [{text:"அறிவியல்",callback_data:"S:அறிவியல்"},{text:"பொருளாதாரம்",callback_data:"S:பொருளாதாரம்"}],
    [{text:"தமிழ்நாடு",callback_data:"S:தமிழ்நாடு"},{text:"கணிதம்",callback_data:"S:கணிதம்"}]
  ]
};

// Database தேவையில்லை. தேர்வு நிலை Worker memory-ல் மட்டும் இருக்கும்.
const active = new Map();

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("TNPSC Quiz Bot is running");
    }
    try {
      const update = await request.json();
      if (update.message) await onMessage(update.message, env);
      if (update.callback_query) await onCallback(update.callback_query, env);
      if (update.poll_answer) await onPollAnswer(update.poll_answer, env);
    } catch (err) {
      console.error("BOT_ERROR:", err?.stack || err?.message || String(err));
    }
    return new Response("OK");
  }
};

async function api(env, method, body) {
  const r = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`,
    {
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(body)
    }
  );
  const data = await r.json();
  if (!data.ok) console.error("TELEGRAM_ERROR:", JSON.stringify(data));
  return data;
}

async function say(env, chat, text, extra={}) {
  return api(env, "sendMessage", {chat_id:chat,text,...extra});
}

async function onMessage(m, env) {
  const uid = String(m.from.id);
  const chat = String(m.chat.id);
  const t = (m.text || "").trim();

  if (t === "/start" || t === "/menu" || t === "🏠 முதன்மை Menu") {
    return say(env, chat, "வணக்கம்! TNPSC Group 4 Quiz.\nதேர்வைத் தேர்வு செய்யுங்கள்.", {reply_markup:MENU});
  }

  if (t === "📝 கலப்பு தேர்வு (25)") {
    return begin(env, uid, chat, QUESTIONS);
  }

  if (t === "📚 பாடவாரித் தேர்வு") {
    return say(env, chat, "பாடத்தைத் தேர்வு செய்யுங்கள்.", {reply_markup:SUBJECTS});
  }

  if (t === "📊 மதிப்பெண்கள்") {
    const s = active.get(uid);
    if (!s) return say(env, chat, "இப்போது செயலில் உள்ள தேர்வு இல்லை.", {reply_markup:MENU});
    return say(env, chat, `📊 மதிப்பெண்: ${s.score}/${s.index}`, {reply_markup:MENU});
  }

  if (t === "📖 படிப்பு முறை") {
    return say(env, chat, "ஒவ்வொரு வினாவிற்கும் பதில் தேர்வு செய்யுங்கள். உடனே விளக்கமும் அடுத்த வினாவும் வரும்.", {reply_markup:MENU});
  }

  return say(env, chat, "Menu-வில் உள்ள தேர்வைத் தேர்வு செய்யுங்கள்.", {reply_markup:MENU});
}

async function onCallback(q, env) {
  await api(env, "answerCallbackQuery", {callback_query_id:q.id});
  const data = q.data || "";
  if (!data.startsWith("S:")) return;
  const subject = data.slice(2);
  const questions = QUESTIONS.filter(x => x.s === subject);
  return begin(env, String(q.from.id), String(q.message.chat.id), questions);
}

async function begin(env, uid, chat, questions) {
  if (!questions.length) return say(env, chat, "இந்தப் பாடத்தில் வினாக்கள் இல்லை.", {reply_markup:MENU});
  active.set(uid, {chat,questions,index:0,score:0,waiting:null,answered:new Set()});
  await say(env, chat, `தேர்வு தொடங்குகிறது!\nமொத்த வினாக்கள்: ${questions.length}`);
  return nextQuestion(env, uid);
}

async function nextQuestion(env, uid) {
  const s = active.get(uid);
  if (!s) return;
  if (s.index >= s.questions.length) {
    const total = s.questions.length;
    const score = s.score;
    active.delete(uid);
    return say(env, s.chat, `🏁 தேர்வு முடிந்தது!\n\nமொத்த வினாக்கள்: ${total}\nசரியான பதில்கள்: ${score}\nதவறான பதில்கள்: ${total-score}`, {reply_markup:MENU});
  }

  const q = s.questions[s.index];
  const res = await api(env, "sendPoll", {
    chat_id:s.chat,
    question:`வினா ${s.index+1}/${s.questions.length}\n${q.q}`,
    options:q.o,
    type:"quiz",
    correct_option_id:q.a,
    is_anonymous:false,
    explanation:q.e
  });

  if (!res.ok) {
    return say(env, s.chat, "வினாவை அனுப்ப முடியவில்லை. Webhook அமைப்பைச் சரிபார்க்கவும்.", {reply_markup:MENU});
  }

  s.waiting = {
    pollId:res.result.poll.id,
    messageId:res.result.message_id,
    question:q
  };
}

async function onPollAnswer(a, env) {
  if (!a.user || !a.option_ids || !a.option_ids.length) return;
  const uid = String(a.user.id);
  const s = active.get(uid);
  if (!s || !s.waiting || s.waiting.pollId !== a.poll_id) return;

  const q = s.waiting.question;
  const selected = a.option_ids[0];
  const correct = selected === q.a;

  // Duplicate poll_answer update-களைத் தவிர்க்கவும்.
  if (s.answered.has(a.poll_id)) return;
  s.answered.add(a.poll_id);

  await api(env, "stopPoll", {chat_id:s.chat,message_id:s.waiting.messageId});
  if (correct) s.score++;

  s.index++;
  s.waiting = null;

  await say(env, s.chat,
    `${correct ? "✅ சரியான பதில்!" : `❌ தவறான பதில்!\nசரியான பதில்: ${q.o[q.a]}`}\n\n📘 விளக்கம்: ${q.e}\n📊 மதிப்பெண்: ${s.score}/${s.index}`
  );

  return nextQuestion(env, uid);
}
