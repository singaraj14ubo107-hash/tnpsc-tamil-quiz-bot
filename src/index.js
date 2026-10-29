
const QUESTIONS = [
  {id:1,subject:"தமிழ்",q:"திருக்குறளில் மொத்தம் எத்தனை குறள்கள் உள்ளன?",o:["1300","1330","1335","1200"],a:1,e:"திருக்குறளில் 133 அதிகாரங்கள்; ஒவ்வொன்றிலும் 10 குறள்கள் என மொத்தம் 1330 குறள்கள் உள்ளன."},
  {id:2,subject:"தமிழ்",q:"தொல்காப்பியம் எத்தனை அதிகாரங்களைக் கொண்டது?",o:["2","3","5","8"],a:1,e:"தொல்காப்பியம் எழுத்து, சொல், பொருள் என மூன்று அதிகாரங்களைக் கொண்டது."},
  {id:3,subject:"வரலாறு",q:"இந்திய தேசிய காங்கிரஸ் தொடங்கப்பட்ட ஆண்டு எது?",o:["1885","1887","1905","1919"],a:0,e:"இந்திய தேசிய காங்கிரஸ் 1885-ல் தொடங்கப்பட்டது."},
  {id:4,subject:"வரலாறு",q:"வெள்ளையனே வெளியேறு இயக்கம் தொடங்கிய ஆண்டு எது?",o:["1930","1942","1946","1920"],a:1,e:"வெள்ளையனே வெளியேறு இயக்கம் 1942-ல் தொடங்கியது."},
  {id:5,subject:"வரலாறு",q:"இந்திய தேசிய காங்கிரஸின் முதல் பெண் தலைவர் யார்?",o:["சரோஜினி நாயுடு","அன்னி பெசன்ட்","விஜயலட்சுமி பண்டிட்","கஸ்தூரிபாய்"],a:1,e:"அன்னி பெசன்ட் 1917-ல் காங்கிரஸின் முதல் பெண் தலைவரானார்."},
  {id:6,subject:"வரலாறு",q:"வேலூர் சிப்பாய்க் கலகம் நடைபெற்ற ஆண்டு எது?",o:["1757","1806","1857","1906"],a:1,e:"வேலூர் சிப்பாய்க் கலகம் 1806-ல் நடைபெற்றது."},
  {id:7,subject:"அரசியலமைப்பு",q:"இந்திய அரசியலமைப்புச் சட்டம் நடைமுறைக்கு வந்த நாள் எது?",o:["15 ஆகஸ்ட் 1947","26 நவம்பர் 1949","26 ஜனவரி 1950","2 அக்டோபர் 1950"],a:2,e:"இந்திய அரசியலமைப்பு 26 ஜனவரி 1950-ல் நடைமுறைக்கு வந்தது."},
  {id:8,subject:"அரசியலமைப்பு",q:"அடிப்படை உரிமைகள் எந்தப் பகுதியில் உள்ளன?",o:["பகுதி I","பகுதி II","பகுதி III","பகுதி IV"],a:2,e:"அடிப்படை உரிமைகள் பகுதி III-ல் உள்ளன."},
  {id:9,subject:"அரசியலமைப்பு",q:"இந்திய அரசியலமைப்பின் 21-வது பிரிவு எதைக் குறிக்கிறது?",o:["சமத்துவ உரிமை","வாழ்வுரிமை மற்றும் தனிநபர் சுதந்திரம்","மத சுதந்திரம்","சொத்துரிமை"],a:1,e:"பிரிவு 21 வாழ்வுரிமையையும் தனிநபர் சுதந்திரத்தையும் பாதுகாக்கிறது."},
  {id:10,subject:"அரசியலமைப்பு",q:"நிதி மசோதா முதலில் எந்த அவையில் அறிமுகப்படுத்தப்படுகிறது?",o:["மாநிலங்களவை","மக்களவை","இரு அவைகளிலும்","உச்சநீதிமன்றம்"],a:1,e:"நிதி மசோதா மக்களவையில் அறிமுகப்படுத்தப்படுகிறது."},
  {id:11,subject:"புவியியல்",q:"இந்தியத் திட்ட நேரத்தின் தீர்க்கரேகை எது?",o:["68°7′ கிழக்கு","75° கிழக்கு","82°30′ கிழக்கு","90° கிழக்கு"],a:2,e:"இந்தியத் திட்ட நேரம் 82°30′ கிழக்கு தீர்க்கரேகையை அடிப்படையாகக் கொண்டது."},
  {id:12,subject:"புவியியல்",q:"இந்தியாவிற்குள் முழுமையாகப் பாயும் மிக நீளமான ஆறு எது?",o:["கங்கை","கோதாவரி","நர்மதை","கிருஷ்ணா"],a:1,e:"கோதாவரி இந்தியாவிற்குள் முழுமையாகப் பாயும் மிக நீளமான ஆறு."},
  {id:13,subject:"புவியியல்",q:"கரிசல் மண் எந்தப் பயிருக்கு ஏற்றது?",o:["தேயிலை","பருத்தி","சணல்","குங்குமப்பூ"],a:1,e:"கரிசல் மண் பருத்தி சாகுபடிக்கு ஏற்றது."},
  {id:14,subject:"புவியியல்",q:"தென்மேற்குப் பருவமழை பொதுவாக முதலில் அடையும் மாநிலம் எது?",o:["தமிழ்நாடு","கேரளா","ஒடிசா","குஜராத்"],a:1,e:"தென்மேற்குப் பருவமழை பொதுவாக கேரளக் கடற்கரையை முதலில் அடைகிறது."},
  {id:15,subject:"அறிவியல்",q:"இரத்தத்தில் ஆக்சிஜனை எடுத்துச் செல்லும் புரதம் எது?",o:["இன்சுலின்","ஹீமோகுளோபின்","கொலாஜன்","கெராட்டின்"],a:1,e:"ஹீமோகுளோபின் ஆக்சிஜனை எடுத்துச் செல்கிறது."},
  {id:16,subject:"அறிவியல்",q:"வைட்டமின் B12 குறைபாட்டால் ஏற்படக்கூடியது எது?",o:["ஸ்கர்வி","ரிக்கெட்ஸ்","மெகாலோபிளாஸ்டிக் இரத்தசோகை","இரவு குருட்டுத்தன்மை"],a:2,e:"வைட்டமின் B12 குறைபாடு மெகாலோபிளாஸ்டிக் இரத்தசோகையை ஏற்படுத்தலாம்."},
  {id:17,subject:"அறிவியல்",q:"மின்தடையின் SI அலகு எது?",o:["வோல்ட்","ஆம்பியர்","ஓம்","வாட்"],a:2,e:"மின்தடையின் SI அலகு ஓம்."},
  {id:18,subject:"அறிவியல்",q:"ஒளிச்சேர்க்கையில் தாவரங்கள் பயன்படுத்தும் வாயு எது?",o:["ஆக்சிஜன்","நைட்ரஜன்","கார்பன் டைஆக்சைடு","ஹைட்ரஜன்"],a:2,e:"ஒளிச்சேர்க்கையில் கார்பன் டைஆக்சைடு பயன்படுத்தப்படுகிறது."},
  {id:19,subject:"பொருளாதாரம்",q:"இந்திய ரிசர்வ் வங்கி தேசியமயமாக்கப்பட்ட ஆண்டு எது?",o:["1935","1947","1949","1956"],a:2,e:"இந்திய ரிசர்வ் வங்கி 1949-ல் தேசியமயமாக்கப்பட்டது."},
  {id:20,subject:"பொருளாதாரம்",q:"இந்தியாவில் நுகர்வோர் விலைக் குறியீட்டுத் தரவுகளை வெளியிடும் அமைப்பு எது?",o:["தேர்தல் ஆணையம்","தேசிய புள்ளியியல் அலுவலகம்","நிதி ஆயோக்","உச்சநீதிமன்றம்"],a:1,e:"தேசிய புள்ளியியல் அலுவலகம் (NSO) CPI தரவுகளை வெளியிடுகிறது."},
  {id:21,subject:"தமிழ்நாடு",q:"தமிழ்நாட்டின் மாநில மரம் எது?",o:["வேம்பு","பனைமரம்","ஆலமரம்","தென்னை"],a:1,e:"பனைமரம் தமிழ்நாட்டின் மாநில மரமாகும்."},
  {id:22,subject:"தமிழ்நாடு",q:"கல்லணையைக் கட்டியதாகக் குறிப்பிடப்படும் சோழ மன்னர் யார்?",o:["ராஜராஜ சோழன்","கரிகால சோழன்","ராஜேந்திர சோழன்","குலோத்துங்க சோழன்"],a:1,e:"கல்லணை கரிகால சோழனுடன் தொடர்புபடுத்தப்படுகிறது."},
  {id:23,subject:"தமிழ்நாடு",q:"சுயமரியாதை இயக்கத்தைத் தொடங்கியவர் யார்?",o:["ராஜாஜி","பெரியார் ஈ.வெ. ராமசாமி","காமராசர்","திரு.வி.க."],a:1,e:"பெரியார் சுயமரியாதை இயக்கத்தைத் தொடங்கினார்."},
  {id:24,subject:"கணிதம்",q:"ஒரு எண்ணின் 20% என்பது 48 எனில், அந்த எண் எது?",o:["180","200","240","260"],a:2,e:"48 ÷ 0.20 = 240."},
  {id:25,subject:"கணிதம்",q:"12, 18, 20, 30 ஆகிய எண்களின் சராசரி என்ன?",o:["18","20","22","25"],a:1,e:"(12 + 18 + 20 + 30) ÷ 4 = 20."}
];

const MENU = {
  keyboard: [
    [{text:"📝 கலப்பு தேர்வு (25)"},{text:"📚 பாடவாரித் தேர்வு"}],
    [{text:"❌ தவறான வினாக்கள்"},{text:"⭐ சேமித்த வினாக்கள்"}],
    [{text:"📊 மதிப்பெண்கள்"},{text:"📅 தினசரி Quiz"}],
    [{text:"📖 படிப்பு முறை"},{text:"🏠 முதன்மை Menu"}]
  ],
  resize_keyboard:true
};

const SUBJECTS = {
  inline_keyboard:[
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

    try {
      const update = await request.json();
      if (update.message) await handleMessage(update.message, env);
      if (update.callback_query) await handleCallback(update.callback_query, env);
      if (update.poll_answer) await handlePollAnswer(update.poll_answer, env);
    } catch (err) {
      console.error("BOT_ERROR:", err?.stack || err?.message || String(err));
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
  if (!data.ok) console.error("TELEGRAM_API_ERROR:", method, JSON.stringify(data));
  return data;
}

async function say(env, chatId, text, extra={}) {
  return tg(env,"sendMessage",{chat_id:chatId,text,...extra});
}

async function handleMessage(msg, env) {
  const userId = String(msg.from.id);
  const chatId = String(msg.chat.id);
  const text = (msg.text || "").trim();

  if (text === "/start" || text === "/menu" || text === "🏠 முதன்மை Menu") {
    return say(env,chatId,"வணக்கம்! TNPSC Group 4 தமிழ் Quiz Bot.\n\nதேர்வைத் தேர்வு செய்யுங்கள்.",{reply_markup:MENU});
  }

  if (text === "📝 கலப்பு தேர்வு (25)" || text === "📅 தினசரி Quiz") {
    return startQuiz(env,userId,chatId,"all");
  }

  if (text === "📚 பாடவாரித் தேர்வு") {
    return say(env,chatId,"பாடத்தைத் தேர்வு செய்யுங்கள்.",{reply_markup:SUBJECTS});
  }

  if (text === "❌ தவறான வினாக்கள்") {
    const r = await env.DB.prepare(
      "SELECT question_id FROM saved_questions WHERE user_id=? ORDER BY created_at DESC"
    ).bind(userId).all();
    const ids = (r.results || []).map(x => Number(x.question_id));
    if (!ids.length) return say(env,chatId,"இன்னும் தவறான வினாக்கள் சேமிக்கப்படவில்லை.",{reply_markup:MENU});
    return startQuiz(env,userId,chatId,"wrong",ids);
  }

  if (text === "⭐ சேமித்த வினாக்கள்") {
    return say(env,chatId,"தவறாகப் பதிலளித்த வினாக்கள் தானாகச் சேமிக்கப்படும். அவற்றை மீண்டும் எழுத “❌ தவறான வினாக்கள்” என்பதைத் தேர்வு செய்யுங்கள்.",{reply_markup:MENU});
  }

  if (text === "📊 மதிப்பெண்கள்") {
    const r = await env.DB.prepare(
      "SELECT COUNT(*) AS total, COALESCE(SUM(correct),0) AS good FROM attempts WHERE user_id=?"
    ).bind(userId).first();
    const total = Number(r?.total || 0);
    const good = Number(r?.good || 0);
    return say(env,chatId,`📊 உங்கள் மதிப்பெண்கள்\n\nமொத்தப் பதில்கள்: ${total}\nசரியானவை: ${good}\nதவறானவை: ${total-good}`,{reply_markup:MENU});
  }

  if (text === "📖 படிப்பு முறை") {
    return say(env,chatId,"📖 படிப்பு முறை\n\n1. தினமும் தேர்வு எழுதுங்கள்.\n2. விளக்கங்களைப் படியுங்கள்.\n3. தவறான வினாக்களை மீண்டும் பயிற்சி செய்யுங்கள்.\n4. மதிப்பெண்கள் பகுதியில் முன்னேற்றத்தைப் பாருங்கள்.",{reply_markup:MENU});
  }

  return say(env,chatId,"Menu-வில் உள்ள தேர்வுகளில் ஒன்றைத் தேர்வு செய்யுங்கள்.",{reply_markup:MENU});
}

async function handleCallback(query, env) {
  await tg(env,"answerCallbackQuery",{callback_query_id:query.id});
  const userId = String(query.from.id);
  const chatId = String(query.message.chat.id);
  const data = query.data || "";
  if (data.startsWith("subject:")) {
    return startQuiz(env,userId,chatId,data.slice(8));
  }
}

async function startQuiz(env,userId,chatId,mode,specifiedIds=null) {
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
    return say(env,chatId,"இந்தத் தேர்வில் வினாக்கள் இல்லை.",{reply_markup:MENU});
  }

  const ids = questions.map(q => q.id);

  await env.DB.prepare(`
    INSERT INTO sessions
      (user_id,chat_id,mode,question_ids,question_index,score,current_poll_id,current_message_id,finished)
    VALUES (?,?,?,?,0,0,NULL,NULL,0)
    ON CONFLICT(user_id) DO UPDATE SET
      chat_id=excluded.chat_id,
      mode=excluded.mode,
      question_ids=excluded.question_ids,
      question_index=0,
      score=0,
      current_poll_id=NULL,
      current_message_id=NULL,
      finished=0
  `).bind(userId,chatId,mode,JSON.stringify(ids)).run();

  await say(env,chatId,`📝 தேர்வு தொடங்குகிறது!\nமொத்த வினாக்கள்: ${ids.length}\nஒவ்வொரு வினாவிற்கும் ஒரு பதிலைத் தேர்வு செய்யுங்கள்.`);
  return sendQuestion(env,userId);
}

async function sendQuestion(env,userId) {
  const s = await env.DB.prepare(
    "SELECT * FROM sessions WHERE user_id=?"
  ).bind(userId).first();

  if (!s || s.finished) return;

  const ids = JSON.parse(s.question_ids);

  if (s.question_index >= ids.length) {
    await env.DB.prepare(
      "UPDATE sessions SET finished=1,current_poll_id=NULL WHERE user_id=?"
    ).bind(userId).run();

    const total = await env.DB.prepare(
      "SELECT COUNT(*) AS n, COALESCE(SUM(correct),0) AS good FROM attempts WHERE user_id=? AND question_id IN (" + ids.map(() => "?").join(",") + ")"
    ).bind(userId,...ids).first();

    const answered = Number(total?.n || 0);
    const good = Number(total?.good || 0);
    return say(env,s.chat_id,
      `🏁 தேர்வு முடிந்தது!\n\nமொத்த வினாக்கள்: ${ids.length}\nபதிலளித்தவை: ${answered}\nசரியானவை: ${good}\nதவறானவை: ${answered-good}\n\nதவறான வினாக்களை மீண்டும் எழுத Menu-வில் தேர்வு செய்யுங்கள்.`,
      {reply_markup:MENU}
    );
  }

  const q = QUESTIONS.find(item => item.id === Number(ids[s.question_index]));
  if (!q) throw new Error("Question not found: " + ids[s.question_index]);

  const result = await tg(env,"sendPoll",{
    chat_id:s.chat_id,
    question:`வினா ${s.question_index+1}/${ids.length}\n${q.q}`,
    options:q.o,
    type:"quiz",
    correct_option_id:q.a,
    is_anonymous:false,
    explanation:q.e
  });

  if (!result.ok) {
    throw new Error("sendPoll failed: " + JSON.stringify(result));
  }

  await env.DB.prepare(
    "UPDATE sessions SET current_poll_id=?,current_message_id=? WHERE user_id=?"
  ).bind(result.result.poll.id,result.result.message_id,userId).run();
}

async function handlePollAnswer(answer,env) {
  if (!answer.user || !answer.option_ids || answer.option_ids.length === 0) return;

  const userId = String(answer.user.id);
  const s = await env.DB.prepare(
    "SELECT * FROM sessions WHERE user_id=?"
  ).bind(userId).first();

  if (!s || s.finished || s.current_poll_id !== answer.poll_id) return;

  const ids = JSON.parse(s.question_ids);
  const qid = Number(ids[s.question_index]);
  const q = QUESTIONS.find(item => item.id === qid);
  if (!q) throw new Error("Poll question not found: " + qid);

  const selected = answer.option_ids[0];
  const correct = selected === q.a ? 1 : 0;

  // Clear current poll first to ignore duplicate updates.
  await env.DB.prepare(
    "UPDATE sessions SET current_poll_id=NULL WHERE user_id=? AND current_poll_id=?"
  ).bind(userId,answer.poll_id).run();

  await env.DB.prepare(
    "INSERT INTO attempts (user_id,question_id,selected_option,correct) VALUES (?,?,?,?)"
  ).bind(userId,qid,selected,correct).run();

  if (!correct) {
    await env.DB.prepare(
      "INSERT OR IGNORE INTO saved_questions (user_id,question_id) VALUES (?,?)"
    ).bind(userId,qid).run();
  }

  const nextScore = Number(s.score) + correct;
  await env.DB.prepare(
    "UPDATE sessions SET score=?,question_index=question_index+1 WHERE user_id=?"
  ).bind(nextScore,userId).run();

  await tg(env,"stopPoll",{
    chat_id:s.chat_id,
    message_id:s.current_message_id
  });

  const feedback = correct
    ? "✅ சரியான பதில்!"
    : `❌ தவறான பதில்!\nசரியான பதில்: ${q.o[q.a]}`;

  await say(env,s.chat_id,
    `${feedback}\n\n📘 விளக்கம்: ${q.e}\n📊 மதிப்பெண்: ${nextScore}/${Number(s.question_index)+1}`
  );

  return sendQuestion(env,userId);
}
