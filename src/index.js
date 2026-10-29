
const QUESTIONS = [
  {id:1,subject:"தமிழ்",q:"திருக்குறளில் மொத்தம் எத்தனை குறட்பாக்கள் உள்ளன?",o:["1300","1330","1335","1200"],a:1,e:"திருக்குறளில் 133 அதிகாரங்கள்; ஒவ்வொரு அதிகாரத்திலும் 10 குறள்கள் என மொத்தம் 1330 குறள்கள் உள்ளன."},
  {id:2,subject:"தமிழ்",q:"தொல்காப்பியம் எத்தனை அதிகாரங்களைக் கொண்டது?",o:["2","3","5","8"],a:1,e:"தொல்காப்பியம் எழுத்ததிகாரம், சொல்லதிகாரம், பொருளதிகாரம் என மூன்று அதிகாரங்களைக் கொண்டது."},
  {id:3,subject:"வரலாறு",q:"இந்திய தேசிய காங்கிரஸ் எந்த ஆண்டு தொடங்கப்பட்டது?",o:["1885","1887","1905","1919"],a:0,e:"இந்திய தேசிய காங்கிரஸ் 1885-ஆம் ஆண்டு தொடங்கப்பட்டது."},
  {id:4,subject:"வரலாறு",q:"வெள்ளையனே வெளியேறு இயக்கம் தொடங்கப்பட்ட ஆண்டு எது?",o:["1930","1942","1946","1920"],a:1,e:"வெள்ளையனே வெளியேறு இயக்கம் 1942-ஆம் ஆண்டு தொடங்கப்பட்டது."},
  {id:5,subject:"வரலாறு",q:"இந்திய தேசிய காங்கிரஸின் முதல் பெண் தலைவர் யார்?",o:["சரோஜினி நாயுடு","அன்னி பெசன்ட்","விஜயலட்சுமி பண்டிட்","கஸ்தூரிபாய்"],a:1,e:"அன்னி பெசன்ட் 1917-ஆம் ஆண்டு காங்கிரஸின் முதல் பெண் தலைவரானார்."},
  {id:6,subject:"வரலாறு",q:"வேலூர் சிப்பாய்க் கலகம் நடைபெற்ற ஆண்டு எது?",o:["1757","1806","1857","1906"],a:1,e:"வேலூர் சிப்பாய்க் கலகம் 1806-ஆம் ஆண்டு நடைபெற்றது."},
  {id:7,subject:"அரசியலமைப்பு",q:"இந்திய அரசியலமைப்புச் சட்டம் நடைமுறைக்கு வந்த நாள் எது?",o:["15 ஆகஸ்ட் 1947","26 நவம்பர் 1949","26 ஜனவரி 1950","2 அக்டோபர் 1950"],a:2,e:"இந்திய அரசியலமைப்பு 26 ஜனவரி 1950 அன்று நடைமுறைக்கு வந்தது."},
  {id:8,subject:"அரசியலமைப்பு",q:"இந்திய அரசியலமைப்பின் அடிப்படை உரிமைகள் எந்தப் பகுதியில் இடம்பெற்றுள்ளன?",o:["பகுதி I","பகுதி II","பகுதி III","பகுதி IV"],a:2,e:"அடிப்படை உரிமைகள் அரசியலமைப்பின் பகுதி III-ல் இடம்பெற்றுள்ளன."},
  {id:9,subject:"அரசியலமைப்பு",q:"இந்திய அரசியலமைப்பின் 21-வது பிரிவு எதனுடன் தொடர்புடையது?",o:["சமத்துவ உரிமை","வாழ்வுரிமை மற்றும் தனிநபர் சுதந்திரம்","மத சுதந்திரம்","கல்வி உரிமை மட்டும்"],a:1,e:"பிரிவு 21 வாழ்வுரிமையையும் தனிநபர் சுதந்திரத்தையும் பாதுகாக்கிறது."},
  {id:10,subject:"அரசியலமைப்பு",q:"இந்தியாவில் நிதி மசோதா முதலில் எந்த அவையில் அறிமுகப்படுத்தப்படுகிறது?",o:["மாநிலங்களவை","மக்களவை","இரு அவைகளிலும்","உச்சநீதிமன்றம்"],a:1,e:"நிதி மசோதா மக்களவையில் மட்டுமே அறிமுகப்படுத்தப்படுகிறது."},
  {id:11,subject:"புவியியல்",q:"இந்தியத் திட்ட நேரத்திற்கான தீர்க்கரேகை எது?",o:["68°7′ கிழக்கு","75° கிழக்கு","82°30′ கிழக்கு","90° கிழக்கு"],a:2,e:"இந்தியத் திட்ட நேரம் 82°30′ கிழக்கு தீர்க்கரேகையை அடிப்படையாகக் கொண்டது."},
  {id:12,subject:"புவியியல்",q:"இந்தியாவின் மிக நீளமான ஆறு எது?",o:["கோதாவரி","கங்கை","நர்மதை","கிருஷ்ணா"],a:1,e:"இந்தியாவுக்குள் பாயும் மிக நீளமான ஆறாக கங்கை பொதுவாகக் குறிப்பிடப்படுகிறது."},
  {id:13,subject:"புவியியல்",q:"கரிசல் மண் எந்தப் பயிருக்கு மிகவும் ஏற்றது?",o:["தேயிலை","பருத்தி","சணல்","குங்குமப்பூ"],a:1,e:"கரிசல் மண் ஈரத்தைத் தக்கவைக்கும் தன்மையால் பருத்தி சாகுபடிக்கு ஏற்றது."},
  {id:14,subject:"புவியியல்",q:"தென்மேற்குப் பருவமழை பொதுவாக இந்தியாவிற்குள் முதலில் நுழையும் மாநிலம் எது?",o:["தமிழ்நாடு","கேரளா","ஒடிசா","குஜராத்"],a:1,e:"தென்மேற்குப் பருவமழை பொதுவாக முதலில் கேரளக் கடற்கரையை அடைகிறது."},
  {id:15,subject:"அறிவியல்",q:"மனித இரத்தத்தில் ஆக்சிஜனை எடுத்துச் செல்லும் புரதம் எது?",o:["இன்சுலின்","ஹீமோகுளோபின்","கொலாஜன்","கெராட்டின்"],a:1,e:"சிவப்பு இரத்த அணுக்களில் உள்ள ஹீமோகுளோபின் ஆக்சிஜனை எடுத்துச் செல்கிறது."},
  {id:16,subject:"அறிவியல்",q:"வைட்டமின் B12 குறைபாடு எந்த நோயை ஏற்படுத்தலாம்?",o:["ஸ்கர்வி","ரிக்கெட்ஸ்","பெர்னீஷியஸ் அனீமியா","இரவு குருட்டுத்தன்மை"],a:2,e:"வைட்டமின் B12 குறைபாடு பெர்னீஷியஸ் அனீமியா உள்ளிட்ட மெகாலோபிளாஸ்டிக் இரத்தசோகையை ஏற்படுத்தலாம்."},
  {id:17,subject:"அறிவியல்",q:"மின்தடையின் SI அலகு எது?",o:["வோல்ட்","ஆம்பியர்","ஓம்","வாட்"],a:2,e:"மின்தடையின் SI அலகு ஓம்."},
  {id:18,subject:"அறிவியல்",q:"ஒளிச்சேர்க்கையில் தாவரங்கள் முக்கியமாக எடுத்துக்கொள்ளும் வாயு எது?",o:["ஆக்சிஜன்","நைட்ரஜன்","கார்பன் டைஆக்சைடு","ஹைட்ரஜன்"],a:2,e:"ஒளிச்சேர்க்கையின்போது தாவரங்கள் கார்பன் டைஆக்சைடைப் பயன்படுத்துகின்றன."},
  {id:19,subject:"பொருளாதாரம்",q:"இந்திய ரிசர்வ் வங்கி தேசியமயமாக்கப்பட்ட ஆண்டு எது?",o:["1935","1947","1949","1956"],a:2,e:"இந்திய ரிசர்வ் வங்கி 1949-ஆம் ஆண்டு தேசியமயமாக்கப்பட்டது."},
  {id:20,subject:"பொருளாதாரம்",q:"இந்தியாவில் நுகர்வோர் விலைக் குறியீட்டை (CPI) வெளியிடும் முக்கிய அமைப்பு எது?",o:["இந்திய ரிசர்வ் வங்கி மட்டும்","தேசிய புள்ளியியல் அலுவலகம்","தேர்தல் ஆணையம்","நிதி ஆயோக்"],a:1,e:"தேசிய புள்ளியியல் அலுவலகம் (NSO) நுகர்வோர் விலைக் குறியீட்டுத் தரவுகளை வெளியிடுகிறது."},
  {id:21,subject:"தமிழ்நாடு",q:"தமிழ்நாட்டின் மாநில மரம் எது?",o:["வேம்பு","பனைமரம்","ஆலமரம்","தென்னை"],a:1,e:"பனைமரம் தமிழ்நாட்டின் மாநில மரமாகும்."},
  {id:22,subject:"தமிழ்நாடு",q:"கல்லணையைக் கட்டியதாகப் பாரம்பரியமாகக் குறிப்பிடப்படும் சோழ மன்னர் யார்?",o:["ராஜராஜ சோழன்","கரிகால சோழன்","ராஜேந்திர சோழன்","குலோத்துங்க சோழன்"],a:1,e:"கல்லணை கரிகால சோழனுடன் தொடர்புபடுத்தப்படுகிறது."},
  {id:23,subject:"தமிழ்நாடு",q:"சுயமரியாதை இயக்கத்தைத் தொடங்கியவர் யார்?",o:["சி. ராஜகோபாலாச்சாரி","பெரியார் ஈ.வெ. ராமசாமி","காமராசர்","திரு.வி.க."],a:1,e:"பெரியார் ஈ.வெ. ராமசாமி 1925-ஆம் ஆண்டு சுயமரியாதை இயக்கத்தைத் தொடங்கினார்."},
  {id:24,subject:"கணிதம்",q:"ஒரு எண்ணின் 20% என்பது 48 எனில், அந்த எண் எது?",o:["180","200","240","260"],a:2,e:"எண் = 48 ÷ 0.20 = 240."},
  {id:25,subject:"கணிதம்",q:"12, 18, 20, 30 ஆகிய எண்களின் சராசரி என்ன?",o:["18","20","22","25"],a:1,e:"சராசரி = (12+18+20+30) ÷ 4 = 20."}
];

const MENU = {
  keyboard: [
    [{text:"📝 கலப்பு தேர்வு (25)"},{text:"📚 பாடவாரித் தேர்வு"}],
    [{text:"❌ தவறான வினாக்கள்"},{text:"⭐ சேமித்த வினாக்கள்"}],
    [{text:"📊 மதிப்பெண்கள்"},{text:"📅 தினசரி Quiz"}],
    [{text:"📖 படிப்பு முறை"},{text:"🏠 முதன்மை Menu"}]
  ],
  resize_keyboard: true
};

const SUBJECTS = {
  inline_keyboard: [
    [{text:"தமிழ்",callback_data:"subject:தமிழ்"},{text:"வரலாறு",callback_data:"subject:வரலாறு"}],
    [{text:"அரசியலமைப்பு",callback_data:"subject:அரசியலமைப்பு"},{text:"புவியியல்",callback_data:"subject:புவியியல்"}],
    [{text:"அறிவியல்",callback_data:"subject:அறிவியல்"},{text:"பொருளாதாரம்",callback_data:"subject:பொருளாதாரம்"}],
    [{text:"தமிழ்நாடு",callback_data:"subject:தமிழ்நாடு"},{text:"கணிதம்",callback_data:"subject:கணிதம்"}]
  ]
};

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("TNPSC Tamil Quiz Bot is running.");
    }

    let update;
    try {
      update = await request.json();
    } catch {
      return new Response("Bad JSON", {status:400});
    }

    try {
      if (update.message) await handleMessage(update.message, env);
      if (update.callback_query) await handleCallback(update.callback_query, env);
      if (update.poll_answer) await handlePollAnswer(update.poll_answer, env);
    } catch (err) {
      console.error("Bot error:", err);
    }
    return new Response("OK");
  }
};

async function tg(env, method, body) {
  const response = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`,
    {
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(body)
    }
  );
  const data = await response.json();
  if (!data.ok) console.error("Telegram API error:", method, data);
  return data;
}

async function say(env, chatId, text, extra={}) {
  return tg(env, "sendMessage", {
    chat_id:chatId,
    text,
    ...extra
  });
}

async function handleMessage(msg, env) {
  const userId = String(msg.from.id);
  const chatId = String(msg.chat.id);
  const text = (msg.text || "").trim();

  if (text === "/start" || text === "🏠 முதன்மை Menu" || text === "/menu") {
    return say(env, chatId,
      "வணக்கம்! TNPSC Group 4 தமிழ் Quiz Bot.\n\nதேர்வைத் தேர்வு செய்யுங்கள்.",
      {reply_markup:MENU}
    );
  }

  if (text === "📝 கலப்பு தேர்வு (25)" || text === "📅 தினசரி Quiz") {
    return startQuiz(env, userId, chatId, "all");
  }

  if (text === "📚 பாடவாரித் தேர்வு") {
    return say(env, chatId, "எந்தப் பாடத்தில் தேர்வு எழுத விரும்புகிறீர்கள்?", {
      reply_markup:SUBJECTS
    });
  }

  if (text === "❌ தவறான வினாக்கள்") {
    const rows = await env.DB.prepare(
      "SELECT question_id FROM saved_questions WHERE user_id=? ORDER BY created_at DESC"
    ).bind(userId).all();
    const ids = (rows.results || []).map(r => r.question_id);
    if (!ids.length) {
      return say(env, chatId, "இன்னும் தவறான வினாக்கள் சேமிக்கப்படவில்லை.", {reply_markup:MENU});
    }
    return startQuiz(env, userId, chatId, "wrong", ids);
  }

  if (text === "⭐ சேமித்த வினாக்கள்") {
    return say(env, chatId,
      "தவறாகப் பதிலளித்த வினாக்கள் தானாகவே சேமிக்கப்படும். அவற்றை மீண்டும் எழுத “❌ தவறான வினாக்கள்” என்பதைத் தேர்வு செய்யுங்கள்.",
      {reply_markup:MENU}
    );
  }

  if (text === "📊 மதிப்பெண்கள்") {
    const result = await env.DB.prepare(
      "SELECT COUNT(*) AS total, SUM(correct) AS correct_count FROM attempts WHERE user_id=?"
    ).bind(userId).first();
    const total = Number(result?.total || 0);
    const correct = Number(result?.correct_count || 0);
    return say(env, chatId,
      `📊 உங்கள் மதிப்பெண் விவரம்\n\nபதிலளித்த வினாக்கள்: ${total}\nசரியான பதில்கள்: ${correct}\nதவறான பதில்கள்: ${total-correct}`,
      {reply_markup:MENU}
    );
  }

  if (text === "📖 படிப்பு முறை") {
    return say(env, chatId,
      "📖 படிப்பு முறை\n\n1. ஒரு பாடத்தைத் தேர்வு செய்து வினாக்களைப் பயிற்சி செய்யுங்கள்.\n2. ஒவ்வொரு வினாவிற்கும் பதில் அளித்தவுடன் விளக்கத்தைப் படியுங்கள்.\n3. தவறான வினாக்களை மீண்டும் எழுதுங்கள்.\n4. மதிப்பெண்கள் பகுதியில் உங்கள் முன்னேற்றத்தைப் பாருங்கள்.",
      {reply_markup:MENU}
    );
  }

  return say(env, chatId, "Menu-வில் உள்ள தேர்வுகளில் ஒன்றைத் தேர்வு செய்யுங்கள்.", {
    reply_markup:MENU
  });
}

async function handleCallback(query, env) {
  await tg(env, "answerCallbackQuery", {callback_query_id:query.id});
  const userId = String(query.from.id);
  const chatId = String(query.message.chat.id);
  const data = query.data || "";

  if (data.startsWith("subject:")) {
    return startQuiz(env, userId, chatId, data.slice(8));
  }
}

async function startQuiz(env, userId, chatId, mode, specifiedIds=null) {
  let questions;

  if (specifiedIds) {
    const set = new Set(specifiedIds.map(Number));
    questions = QUESTIONS.filter(q => set.has(q.id));
  } else if (mode === "all") {
    questions = [...QUESTIONS];
  } else {
    questions = QUESTIONS.filter(q => q.subject === mode);
  }

  if (!questions.length) {
    return say(env, chatId, "இந்தத் தேர்வில் வினாக்கள் இல்லை.", {reply_markup:MENU});
  }

  const ids = questions.map(q => q.id);
  await env.DB.prepare(`
    INSERT INTO sessions
      (user_id, chat_id, mode, question_ids, question_index, score, current_poll_id, current_message_id, finished)
    VALUES (?, ?, ?, ?, 0, 0, NULL, NULL, 0)
    ON CONFLICT(user_id) DO UPDATE SET
      chat_id=excluded.chat_id,
      mode=excluded.mode,
      question_ids=excluded.question_ids,
      question_index=0,
      score=0,
      current_poll_id=NULL,
      current_message_id=NULL,
      finished=0
  `).bind(userId, chatId, mode, JSON.stringify(ids)).run();

  await say(env, chatId, `தேர்வு தொடங்குகிறது!\nமொத்த வினாக்கள்: ${ids.length}\n\nஒவ்வொரு வினாவிற்கும் ஒரு பதிலைத் தேர்வு செய்யுங்கள்.`);
  return sendQuestion(env, userId);
}

async function sendQuestion(env, userId) {
  const s = await env.DB.prepare(
    "SELECT * FROM sessions WHERE user_id=?"
  ).bind(userId).first();

  if (!s || s.finished) return;

  const ids = JSON.parse(s.question_ids);
  if (s.question_index >= ids.length) {
    await env.DB.prepare(
      "UPDATE sessions SET finished=1, current_poll_id=NULL WHERE user_id=?"
    ).bind(userId).run();

    const wrong = await env.DB.prepare(
      "SELECT COUNT(*) AS n FROM attempts WHERE user_id=? AND question_id IN (" +
      ids.map(() => "?").join(",") + ") AND correct=0"
    ).bind(userId, ...ids).first();

    return say(env, s.chat_id,
      `🏁 தேர்வு முடிந்தது!\n\nமொத்த வினாக்கள்: ${ids.length}\nசரியான பதில்கள்: ${s.score}\nதவறான பதில்கள்: ${Number(wrong?.n || 0)}\n\nதவறான வினாக்களை மீண்டும் எழுத Menu-வில் “❌ தவறான வினாக்கள்” என்பதைத் தேர்வு செய்யுங்கள்.`,
      {reply_markup:MENU}
    );
  }

  const q = QUESTIONS.find(item => item.id === ids[s.question_index]);
  if (!q) return;

  const result = await tg(env, "sendPoll", {
    chat_id:s.chat_id,
    question:`வினா ${s.question_index+1}/${ids.length}\n${q.q}`,
    options:q.o,
    type:"quiz",
    correct_option_id:q.a,
    is_anonymous:false,
    explanation:q.e,
    protect_content:false
  });

  if (!result.ok) {
    return say(env, s.chat_id, "வினாவை அனுப்ப முடியவில்லை. Bot token மற்றும் webhook அமைப்பைச் சரிபார்க்கவும்.");
  }

  await env.DB.prepare(
    "UPDATE sessions SET current_poll_id=?, current_message_id=? WHERE user_id=?"
  ).bind(result.result.poll.id, result.result.message_id, userId).run();
}

async function handlePollAnswer(answer, env) {
  if (!answer.user) return;

  const userId = String(answer.user.id);
  const pollId = answer.poll_id;
  const selected = answer.option_ids?.[0];

  if (selected === undefined) return;

  const s = await env.DB.prepare(
    "SELECT * FROM sessions WHERE user_id=?"
  ).bind(userId).first();

  if (!s || s.finished || s.current_poll_id !== pollId) return;

  const ids = JSON.parse(s.question_ids);
  const qid = ids[s.question_index];
  const q = QUESTIONS.find(item => item.id === qid);
  if (!q) return;

  // Clear current poll first to ignore duplicate poll_answer updates.
  await env.DB.prepare(
    "UPDATE sessions SET current_poll_id=NULL WHERE user_id=? AND current_poll_id=?"
  ).bind(userId, pollId).run();

  const correct = selected === q.a ? 1 : 0;

  await env.DB.prepare(
    "INSERT INTO attempts (user_id, question_id, selected_option, correct) VALUES (?, ?, ?, ?)"
  ).bind(userId, qid, selected, correct).run();

  if (!correct) {
    await env.DB.prepare(
      "INSERT OR IGNORE INTO saved_questions (user_id, question_id) VALUES (?, ?)"
    ).bind(userId, qid).run();
  }

  const newScore = Number(s.score) + correct;
  const nextIndex = Number(s.question_index) + 1;

  await env.DB.prepare(
    "UPDATE sessions SET score=?, question_index=? WHERE user_id=?"
  ).bind(newScore, nextIndex, userId).run();

  await tg(env, "stopPoll", {
    chat_id:s.chat_id,
    message_id:s.current_message_id
  });

  const answerText = correct
    ? "✅ சரியான பதில்!"
    : `❌ தவறான பதில்!\nசரியான பதில்: ${q.o[q.a]}`;

  await say(env, s.chat_id,
    `${answerText}\n\n📘 விளக்கம்: ${q.e}\n\n📊 மதிப்பெண்: ${newScore}/${nextIndex}`
  );

  return sendQuestion(env, userId);
}
