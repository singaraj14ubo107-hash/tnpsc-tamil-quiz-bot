
const SUBJECTS = {
  tamil: "தமிழ்",
  history: "இந்திய வரலாறு",
  tn_history: "தமிழ்நாடு வரலாறு",
  polity: "அரசியலமைப்பு",
  geography: "புவியியல்",
  science: "அறிவியல்",
  economy: "பொருளாதாரம்",
  current: "பொது அறிவு"
};

const QUESTIONS = [
  {id:"T01",s:"tamil",q:"திருக்குறளில் மொத்தம் எத்தனை குறள்கள் உள்ளன?",o:["1330","1300","1200","1335"],a:0,e:"திருக்குறளில் 1330 குறள்கள் உள்ளன."},
  {id:"T02",s:"tamil",q:"தொல்காப்பியத்தின் மூன்று பிரிவுகள் எவை?",o:["அறம், பொருள், இன்பம்","எழுத்து, சொல், பொருள்","இயல், இசை, நாடகம்","அகம், புறம், பக்தி"],a:1,e:"எழுத்து, சொல், பொருள் ஆகியவை மூன்று பிரிவுகள்."},
  {id:"T03",s:"tamil",q:"சிலப்பதிகாரத்தின் ஆசிரியர் யார்?",o:["கம்பர்","இளங்கோ அடிகள்","சீத்தலைச் சாத்தனார்","திருத்தக்கதேவர்"],a:1,e:"சிலப்பதிகாரத்தை இயற்றியவர் இளங்கோ அடிகள்."},
  {id:"T04",s:"tamil",q:"மணிமேகலையை இயற்றியவர் யார்?",o:["கம்பர்","ஔவையார்","சீத்தலைச் சாத்தனார்","பாரதியார்"],a:2,e:"மணிமேகலையின் ஆசிரியர் சீத்தலைச் சாத்தனார்."},
  {id:"T05",s:"tamil",q:"ஆத்திசூடியை இயற்றியவர் யார்?",o:["ஔவையார்","கம்பர்","பாரதியார்","திருவள்ளுவர்"],a:0,e:"ஆத்திசூடியை இயற்றியவர் ஔவையார்."},
  {id:"T06",s:"tamil",q:"தமிழ்த்தாய் வாழ்த்தை இயற்றியவர் யார்?",o:["பாரதியார்","பாரதிதாசன்","மனோன்மணியம் சுந்தரனார்","கவிமணி"],a:2,e:"தமிழ்த்தாய் வாழ்த்தை இயற்றியவர் மனோன்மணியம் சுந்தரனார்."},

  {id:"H01",s:"history",q:"இந்திய தேசிய காங்கிரஸ் தொடங்கப்பட்ட ஆண்டு எது?",o:["1885","1905","1857","1947"],a:0,e:"இந்திய தேசிய காங்கிரஸ் 1885-ல் தொடங்கப்பட்டது."},
  {id:"H02",s:"history",q:"இந்திய தேசிய காங்கிரஸின் முதல் தலைவர் யார்?",o:["தாதாபாய் நௌரோஜி","ஏ.ஓ. ஹியூம்","டபிள்யூ.சி. பானர்ஜி","கோபால கிருஷ்ண கோகலே"],a:2,e:"முதல் மாநாட்டின் தலைவர் டபிள்யூ.சி. பானர்ஜி."},
  {id:"H03",s:"history",q:"வெள்ளையனே வெளியேறு இயக்கம் தொடங்கிய ஆண்டு எது?",o:["1930","1942","1920","1947"],a:1,e:"இந்த இயக்கம் 1942-ல் தொடங்கியது."},
  {id:"H04",s:"history",q:"தண்டி யாத்திரையை நடத்தியவர் யார்?",o:["நேரு","பகத் சிங்","மகாத்மா காந்தி","சுபாஷ் சந்திர போஸ்"],a:2,e:"மகாத்மா காந்தி 1930-ல் தண்டி யாத்திரை நடத்தினார்."},
  {id:"H05",s:"history",q:"வேலூர் சிப்பாய் கிளர்ச்சி நடந்த ஆண்டு எது?",o:["1757","1806","1857","1885"],a:1,e:"வேலூர் சிப்பாய் கிளர்ச்சி 1806-ல் நடைபெற்றது."},

  {id:"TN01",s:"tn_history",q:"கல்லணையைக் கட்டிய சோழ மன்னர் யார்?",o:["கரிகால சோழன்","ராஜராஜ சோழன்","ராஜேந்திர சோழன்","குலோத்துங்க சோழன்"],a:0,e:"கல்லணை கரிகால சோழனுடன் தொடர்புடையது."},
  {id:"TN02",s:"tn_history",q:"தஞ்சைப் பெரிய கோயிலைக் கட்டியவர் யார்?",o:["கரிகால சோழன்","முதலாம் ராஜராஜ சோழன்","ராஜேந்திர சோழன்","பராந்தக சோழன்"],a:1,e:"தஞ்சைப் பெரிய கோயிலைக் கட்டியவர் முதலாம் ராஜராஜ சோழன்."},
  {id:"TN03",s:"tn_history",q:"வீரபாண்டிய கட்டபொம்மன் எந்த இடத்துடன் தொடர்புடையவர்?",o:["பாஞ்சாலங்குறிச்சி","வேலூர்","சிவகங்கை","மதுரை"],a:0,e:"வீரபாண்டிய கட்டபொம்மன் பாஞ்சாலங்குறிச்சியுடன் தொடர்புடையவர்."},

  {id:"P01",s:"polity",q:"இந்திய அரசியலமைப்பு நடைமுறைக்கு வந்த நாள் எது?",o:["15 ஆகஸ்ட் 1947","26 ஜனவரி 1950","26 நவம்பர் 1949","2 அக்டோபர் 1950"],a:1,e:"அரசியலமைப்பு 26 ஜனவரி 1950 அன்று நடைமுறைக்கு வந்தது."},
  {id:"P02",s:"polity",q:"அரசியலமைப்பு வரைவுக் குழுவின் தலைவர் யார்?",o:["ஜவஹர்லால் நேரு","ராஜேந்திர பிரசாத்","டாக்டர் பி.ஆர். அம்பேத்கர்","சர்தார் படேல்"],a:2,e:"வரைவுக் குழுவின் தலைவர் டாக்டர் பி.ஆர். அம்பேத்கர்."},
  {id:"P03",s:"polity",q:"இந்தியாவில் வாக்களிக்கும் குறைந்தபட்ச வயது என்ன?",o:["16","18","21","25"],a:1,e:"வாக்களிக்கும் குறைந்தபட்ச வயது 18."},
  {id:"P04",s:"polity",q:"இந்திய நாடாளுமன்றத்தின் இரு அவைகள் எவை?",o:["சட்டமன்றம், சட்ட மேலவை","மக்களவை, மாநிலங்களவை","மக்களவை, உச்சநீதிமன்றம்","அமைச்சரவை, உச்சநீதிமன்றம்"],a:1,e:"மக்களவை மற்றும் மாநிலங்களவை நாடாளுமன்றத்தின் இரு அவைகள்."},

  {id:"G01",s:"geography",q:"மேட்டூர் அணை எந்த ஆற்றின் குறுக்கே கட்டப்பட்டுள்ளது?",o:["வைகை","பாலாறு","காவிரி","தாமிரபரணி"],a:2,e:"மேட்டூர் அணை காவிரி ஆற்றின் குறுக்கே கட்டப்பட்டுள்ளது."},
  {id:"G02",s:"geography",q:"தமிழ்நாட்டின் மிக உயரமான சிகரம் எது?",o:["ஆனைமுடி","தொட்டபெட்டா","அகத்தியமலை","மகேந்திரகிரி"],a:1,e:"தொட்டபெட்டா தமிழ்நாட்டின் மிக உயரமான சிகரம்."},
  {id:"G03",s:"geography",q:"கருப்பு மண் எந்தப் பயிருக்கு ஏற்றது?",o:["தேயிலை","பருத்தி","சணல்","காபி"],a:1,e:"கருப்பு மண் பருத்தி சாகுபடிக்கு ஏற்றது."},
  {id:"G04",s:"geography",q:"இந்திய நிலப்பரப்பின் தென்கோடி எது?",o:["கன்னியாகுமரி","இந்திரா பாயிண்ட்","ராமேஸ்வரம்","கொச்சி"],a:0,e:"இந்திய நிலப்பரப்பின் தென்கோடி கன்னியாகுமரி."},

  {id:"S01",s:"science",q:"வைட்டமின் C குறைபாட்டால் ஏற்படும் நோய் எது?",o:["ரிக்கெட்ஸ்","ஸ்கர்வி","பெரிபெரி","இரத்த சோகை"],a:1,e:"வைட்டமின் C குறைபாடு ஸ்கர்வி நோயை ஏற்படுத்தும்."},
  {id:"S02",s:"science",q:"நீரின் வேதியியல் வாய்ப்பாடு என்ன?",o:["CO2","O2","H2O","NaCl"],a:2,e:"நீரின் வேதியியல் வாய்ப்பாடு H₂O."},
  {id:"S03",s:"science",q:"ஒளிச்சேர்க்கையின்போது தாவரங்கள் வெளியிடும் வாயு எது?",o:["கார்பன் டை ஆக்சைடு","ஆக்சிஜன்","நைட்ரஜன்","ஹைட்ரஜன்"],a:1,e:"ஒளிச்சேர்க்கையின்போது ஆக்சிஜன் வெளியிடப்படுகிறது."},
  {id:"S04",s:"science",q:"மனித உடலின் மிகப்பெரிய உறுப்பு எது?",o:["கல்லீரல்","தோல்","இதயம்","நுரையீரல்"],a:1,e:"மனித உடலின் மிகப்பெரிய உறுப்பு தோல்."},

  {id:"E01",s:"economy",q:"இந்திய ரிசர்வ் வங்கி தொடங்கப்பட்ட ஆண்டு எது?",o:["1935","1947","1950","1969"],a:0,e:"இந்திய ரிசர்வ் வங்கி 1935-ல் தொடங்கப்பட்டது."},
  {id:"E02",s:"economy",q:"இந்தியாவில் GST நடைமுறைக்கு வந்த நாள் எது?",o:["1 ஜனவரி 2016","1 ஜூலை 2017","1 ஏப்ரல் 2018","15 ஆகஸ்ட் 2017"],a:1,e:"GST 1 ஜூலை 2017 அன்று நடைமுறைக்கு வந்தது."},
  {id:"E03",s:"economy",q:"NITI Aayog அமைக்கப்பட்ட ஆண்டு எது?",o:["2010","2012","2015","2017"],a:2,e:"NITI Aayog 2015-ல் அமைக்கப்பட்டது."},

  {id:"C01",s:"current",q:"தேசிய வாக்காளர் தினம் எப்போது?",o:["ஜனவரி 12","ஜனவரி 25","ஜனவரி 26","மார்ச் 8"],a:1,e:"தேசிய வாக்காளர் தினம் ஜனவரி 25 அன்று கடைப்பிடிக்கப்படுகிறது."},
  {id:"C02",s:"current",q:"இந்திய அரசியலமைப்பு தினம் எப்போது?",o:["ஜனவரி 26","ஆகஸ்ட் 15","நவம்பர் 26","அக்டோபர் 2"],a:2,e:"அரசியலமைப்பு தினம் நவம்பர் 26 அன்று கடைப்பிடிக்கப்படுகிறது."},
  {id:"C03",s:"current",q:"தேசிய அறிவியல் தினம் எப்போது?",o:["பிப்ரவரி 28","மார்ச் 8","செப்டம்பர் 5","நவம்பர் 14"],a:0,e:"தேசிய அறிவியல் தினம் பிப்ரவரி 28 அன்று கடைப்பிடிக்கப்படுகிறது."}
];

const MENU = {
  keyboard: [
    [{text:"🎯 கலப்பு தேர்வு (25)"}],
    [{text:"📚 முந்தைய ஆண்டு வினாக்கள்"}],
    [{text:"📖 படிப்பு முறை"}],
    [{text:"📝 பாடவாரித் தேர்வு"}],
    [{text:"🔄 தவறான வினாக்கள்"}],
    [{text:"⭐ சேமித்த வினாக்கள்"}],
    [{text:"📊 மதிப்பெண்கள்"}]
  ],
  resize_keyboard:true
};

async function api(env, method, body) {
  const r = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`,
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(body)
    }
  );
  return r.json();
}

async function say(env, chat, text, markup) {
  return api(env,"sendMessage",{
    chat_id:chat,
    text,
    ...(markup ? {reply_markup:markup} : {})
  });
}

function shuffle(array) {
  const a = [...array];
  for (let i=a.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

async function readJSON(env,key,fallback) {
  return await env.BOT_DATA.get(key,"json") || fallback;
}

async function writeJSON(env,key,value) {
  await env.BOT_DATA.put(key,JSON.stringify(value));
}

async function showSubjects(env,chat) {
  const keys=Object.keys(SUBJECTS);
  const rows=[];
  for(let i=0;i<keys.length;i+=2) {
    rows.push(keys.slice(i,i+2).map(k=>({
      text:SUBJECTS[k],
      callback_data:"subject|"+k
    })));
  }
  await say(env,chat,"📝 பாடத்தைத் தேர்வு செய்யுங்கள்:",{
    inline_keyboard:rows
  });
}

async function showCounts(env,chat,mode) {
  await say(env,chat,"எத்தனை கேள்விகள் வேண்டும்?",{
    inline_keyboard:[
      [{text:"10",callback_data:`count|${mode}|10`},
       {text:"25",callback_data:`count|${mode}|25`}],
      [{text:"🏠 Menu",callback_data:"menu"}]
    ]
  });
}

async function startQuiz(env,uid,chat,mode,count) {
  const history=await readJSON(env,"history",{});
  const now=Date.now();

  let pool=mode==="mixed"
    ? QUESTIONS
    : QUESTIONS.filter(q=>q.s===mode);

  pool=pool.filter(q=>
    !history[q.id] || now-history[q.id]>=3*24*60*60*1000
  );

  const selected=shuffle(pool).slice(0,count);

  if(!selected.length) {
    await say(env,chat,"கடந்த 3 நாட்களில் வந்த கேள்விகளைத் தவிர்த்த பிறகு புதிய கேள்விகள் இல்லை. புதிய கேள்விகளைத் தொகுப்பில் சேர்க்கவும்.",MENU);
    return;
  }

  const state={
    chat,
    questions:selected,
    index:0,
    score:0,
    waiting:null,
    wrong:[],
    answered:[]
  };

  await writeJSON(env,"quiz:"+uid,state);

  for(const q of selected) history[q.id]=now;
  await writeJSON(env,"history",history);

  await nextQuestion(env,uid);
}

async function nextQuestion(env,uid) {
  const s=await readJSON(env,"quiz:"+uid,null);
  if(!s)return;

  if(s.index>=s.questions.length) {
    const scores=await readJSON(env,"scores:"+uid,{correct:0,wrong:[]});
    scores.correct+=s.score;
    scores.wrong.push(...s.wrong);
    await writeJSON(env,"scores:"+uid,scores);
    await env.BOT_DATA.delete("quiz:"+uid);

    await say(
      env,s.chat,
      `🏁 தேர்வு முடிந்தது!\nமொத்த வினாக்கள்: ${s.questions.length}\nசரியான பதில்கள்: ${s.score}\nதவறான பதில்கள்: ${s.questions.length-s.score}`,
      MENU
    );
    return;
  }

  const q=s.questions[s.index];
  const options=shuffle(q.o.map((text,index)=>({text,index})));
  const correct=options.findIndex(x=>x.index===q.a);

  const result=await api(env,"sendPoll",{
    chat_id:s.chat,
    question:`வினா ${s.index+1}/${s.questions.length}\n${q.q}`,
    options:options.map(x=>x.text),
    type:"quiz",
    correct_option_id:correct,
    is_anonymous:false,
    explanation:q.e
  });

  if(!result.ok) {
    console.error("SEND_POLL_ERROR",JSON.stringify(result));
    await say(env,s.chat,"கேள்வியை அனுப்ப முடியவில்லை. Telegram Bot Token மற்றும் webhook அமைப்பைச் சரிபார்க்கவும்.",MENU);
    return;
  }

  s.waiting={
    pollId:result.result.poll.id,
    q:{...q,a:correct,o:options.map(x=>x.text)}
  };
  s.index++;
  await writeJSON(env,"quiz:"+uid,s);
}

async function handle(env,u) {
  if(u.message) {
    const m=u.message;
    const uid=String(m.from.id);
    const chat=m.chat.id;
    const text=(m.text||"").trim();

    if(text==="/start" || text==="/menu") {
      await env.BOT_DATA.put("daily_chat",String(chat));
      await say(env,chat,"வணக்கம்! TNPSC Group 4 தமிழ் பயிற்சிக்கு வரவேற்கிறோம்.",MENU);
    } else if(text==="/stop") {
      await env.BOT_DATA.delete("quiz:"+uid);
      await say(env,chat,"Quiz நிறுத்தப்பட்டது.",MENU);
    } else if(text.includes("கலப்பு தேர்வு")) {
      await startQuiz(env,uid,chat,"mixed",25);
    } else if(text.includes("பாடவாரித் தேர்வு") || text.includes("படிப்பு முறை")) {
      await showSubjects(env,chat);
    } else if(text.includes("முந்தைய ஆண்டு")) {
      await say(env,chat,"முந்தைய ஆண்டு வினாக்களுக்கான தனி சரிபார்க்கப்பட்ட தொகுப்பு இன்னும் சேர்க்கப்படவில்லை.",MENU);
    } else if(text.includes("தவறான வினாக்கள்")) {
      const scores=await readJSON(env,"scores:"+uid,{wrong:[]});
      if(!scores.wrong.length) {
        await say(env,chat,"தவறான வினாக்கள் இல்லை. முதலில் ஒரு தேர்வை முடிக்கவும்.",MENU);
      } else {
        await say(env,chat,"தவறான வினாக்களை மீண்டும் பயிற்சி செய்யும் வசதியை அடுத்ததாக இணைக்கலாம்.",MENU);
      }
    } else if(text.includes("சேமித்த வினாக்கள்")) {
      await say(env,chat,"சேமித்த வினாக்கள் வசதி அடுத்த பதிப்பில் சேர்க்கப்படும்.",MENU);
    } else if(text.includes("மதிப்பெண்கள்")) {
      const scores=await readJSON(env,"scores:"+uid,{correct:0,wrong:[]});
      await say(env,chat,`📊 மொத்த சரியான பதில்கள்: ${scores.correct}\nதவறான வினாக்கள்: ${scores.wrong.length}`,MENU);
    } else {
      await say(env,chat,"கீழே உள்ள Menu-வில் ஒன்றைத் தேர்வு செய்யுங்கள்.",MENU);
    }
    return;
  }

  if(u.callback_query) {
    const c=u.callback_query;
    const uid=String(c.from.id);
    const chat=c.message.chat.id;
    const data=c.data||"";

    await api(env,"answerCallbackQuery",{callback_query_id:c.id});

    if(data==="menu") {
      await say(env,chat,"முதன்மை Menu:",MENU);
    } else if(data.startsWith("subject|")) {
      const subject=data.split("|")[1];
      if(SUBJECTS[subject]) await showCounts(env,chat,subject);
    } else if(data.startsWith("count|")) {
      const [,mode,count]=data.split("|");
      await startQuiz(env,uid,chat,mode,Number(count));
    }
    return;
  }

  if(u.poll_answer) {
    const answer=u.poll_answer;
    const uid=String(answer.user.id);
    const s=await readJSON(env,"quiz:"+uid,null);

    if(!s || !s.waiting || s.waiting.pollId!==answer.poll_id) return;
    if(s.answered.includes(answer.poll_id)) return;

    s.answered.push(answer.poll_id);

    if(answer.option_ids && answer.option_ids[0]===s.waiting.q.a) {
      s.score++;
    } else {
      s.wrong.push(s.waiting.q);
    }

    s.waiting=null;
    await writeJSON(env,"quiz:"+uid,s);
    await nextQuestion(env,uid);
  }
}

async function dailyQuiz(env) {
  const chat=await env.BOT_DATA.get("daily_chat");
  if(!chat) {
    console.log("Daily chat not registered. Send /start to the bot first.");
    return;
  }
  await startQuiz(env,"daily:"+chat,Number(chat),"mixed",10);
}

export default {
  async fetch(request,env) {
    if(request.method!=="POST") {
      return new Response("TNPSC Tamil Quiz Bot is running.");
    }

    if(!env.TELEGRAM_BOT_TOKEN || !env.BOT_DATA) {
      return new Response("Missing TELEGRAM_BOT_TOKEN secret or BOT_DATA KV binding.",{status:500});
    }

    try {
      await handle(env,await request.json());
      return new Response("OK");
    } catch(error) {
      console.error("WEBHOOK_ERROR",error);
      return new Response("Internal error",{status:500});
    }
  },

  async scheduled(event,env,ctx) {
    ctx.waitUntil(dailyQuiz(env));
  }
};
