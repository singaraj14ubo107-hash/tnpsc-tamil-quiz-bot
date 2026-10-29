
const active = new Map();
const profiles = new Map();

const SUBJECTS = {
  tamil: "தமிழ்",
  history: "வரலாறு",
  polity: "அரசியலமைப்பு",
  geography: "புவியியல்",
  science: "அறிவியல்",
  economy: "பொருளாதாரம்",
  current: "நடப்பு நிகழ்வுகள்",
  maths: "திறனறிவு / கணிதம்"
};

const QUESTIONS = [
  {s:"tamil",q:"திருக்குறளில் எத்தனை குறள்கள் உள்ளன?",o:["1330","1300","1200","1335"],a:0,e:"திருக்குறளில் 1330 குறள்கள் உள்ளன."},
  {s:"tamil",q:"திருக்குறளில் எத்தனை அதிகாரங்கள் உள்ளன?",o:["100","108","133","150"],a:2,e:"திருக்குறளில் 133 அதிகாரங்கள் உள்ளன."},
  {s:"tamil",q:"தொல்காப்பியத்தின் மூன்று பிரிவுகள் எவை?",o:["அறம், பொருள், இன்பம்","எழுத்து, சொல், பொருள்","இயல், இசை, நாடகம்","அகம், புறம், பக்தி"],a:1,e:"எழுத்து, சொல், பொருள் ஆகியவை தொல்காப்பியத்தின் மூன்று பிரிவுகள்."},
  {s:"tamil",q:"சிலப்பதிகாரத்தின் ஆசிரியர் யார்?",o:["கம்பர்","இளங்கோ அடிகள்","சீத்தலைச் சாத்தனார்","திருத்தக்கதேவர்"],a:1,e:"சிலப்பதிகாரத்தின் ஆசிரியர் இளங்கோ அடிகள்."},
  {s:"tamil",q:"மணிமேகலையை இயற்றியவர் யார்?",o:["கம்பர்","ஔவையார்","சீத்தலைச் சாத்தனார்","பாரதியார்"],a:2,e:"மணிமேகலையின் ஆசிரியர் சீத்தலைச் சாத்தனார்."},
  {s:"tamil",q:"தமிழ்த்தாய் வாழ்த்தை இயற்றியவர் யார்?",o:["பாரதியார்","பாரதிதாசன்","மனோன்மணியம் சுந்தரனார்","கவிமணி"],a:2,e:"தமிழ்த்தாய் வாழ்த்தை இயற்றியவர் மனோன்மணியம் சுந்தரனார்."},
  {s:"tamil",q:"'யாதும் ஊரே யாவரும் கேளிர்' பாடியவர் யார்?",o:["கபிலர்","கணியன் பூங்குன்றனார்","நக்கீரர்","பரணர்"],a:1,e:"இந்தப் பாடலைப் பாடியவர் கணியன் பூங்குன்றனார்."},
  {s:"tamil",q:"திருக்குறளில் உள்ள முப்பால்கள் எவை?",o:["அகம், புறம், வீடு","அறத்துப்பால், பொருட்பால், காமத்துப்பால்","இயல், இசை, நாடகம்","குறிஞ்சி, முல்லை, மருதம்"],a:1,e:"திருக்குறள் அறம், பொருள், இன்பம் ஆகிய மூன்று பகுதிகளைக் கொண்டது."},

  {s:"history",q:"இந்திய தேசிய காங்கிரஸ் தொடங்கப்பட்ட ஆண்டு எது?",o:["1885","1905","1857","1947"],a:0,e:"இந்திய தேசிய காங்கிரஸ் 1885-ல் தொடங்கப்பட்டது."},
  {s:"history",q:"இந்திய தேசிய காங்கிரஸின் முதல் தலைவர் யார்?",o:["தாதாபாய் நௌரோஜி","ஏ.ஓ. ஹியூம்","டபிள்யூ.சி. பானர்ஜி","கோபால கிருஷ்ண கோகலே"],a:2,e:"முதல் மாநாட்டின் தலைவர் டபிள்யூ.சி. பானர்ஜி."},
  {s:"history",q:"வெள்ளையனே வெளியேறு இயக்கம் தொடங்கிய ஆண்டு எது?",o:["1930","1942","1920","1947"],a:1,e:"வெள்ளையனே வெளியேறு இயக்கம் 1942-ல் தொடங்கியது."},
  {s:"history",q:"தண்டி யாத்திரையை நடத்தியவர் யார்?",o:["நேரு","பகத் சிங்","மகாத்மா காந்தி","சுபாஷ் சந்திர போஸ்"],a:2,e:"மகாத்மா காந்தி 1930-ல் தண்டி யாத்திரை நடத்தினார்."},
  {s:"history",q:"வேலூர் சிப்பாய் கிளர்ச்சி நடந்த ஆண்டு எது?",o:["1757","1806","1857","1885"],a:1,e:"வேலூர் சிப்பாய் கிளர்ச்சி 1806-ல் நடைபெற்றது."},
  {s:"history",q:"இந்தியாவின் முதல் குடியரசுத் தலைவர் யார்?",o:["ஜவஹர்லால் நேரு","டாக்டர் ராஜேந்திர பிரசாத்","சர்தார் படேல்","டாக்டர் அம்பேத்கர்"],a:1,e:"இந்தியாவின் முதல் குடியரசுத் தலைவர் டாக்டர் ராஜேந்திர பிரசாத்."},

  {s:"polity",q:"இந்திய அரசியலமைப்பு நடைமுறைக்கு வந்த நாள் எது?",o:["15 ஆகஸ்ட் 1947","26 ஜனவரி 1950","26 நவம்பர் 1949","2 அக்டோபர் 1950"],a:1,e:"அரசியலமைப்பு 26 ஜனவரி 1950 அன்று நடைமுறைக்கு வந்தது."},
  {s:"polity",q:"அரசியலமைப்பு வரைவுக் குழுவின் தலைவர் யார்?",o:["ஜவஹர்லால் நேரு","ராஜேந்திர பிரசாத்","டாக்டர் பி.ஆர். அம்பேத்கர்","சர்தார் படேல்"],a:2,e:"வரைவுக் குழுவின் தலைவர் டாக்டர் பி.ஆர். அம்பேத்கர்."},
  {s:"polity",q:"இந்தியாவில் வாக்களிக்கும் குறைந்தபட்ச வயது என்ன?",o:["16","18","21","25"],a:1,e:"வாக்களிக்கும் குறைந்தபட்ச வயது 18."},
  {s:"polity",q:"இந்திய நாடாளுமன்றத்தின் இரு அவைகள் எவை?",o:["சட்டமன்றம், சட்ட மேலவை","மக்களவை, மாநிலங்களவை","மக்களவை, உச்சநீதிமன்றம்","அமைச்சரவை, உச்சநீதிமன்றம்"],a:1,e:"மக்களவை மற்றும் மாநிலங்களவை நாடாளுமன்றத்தின் இரு அவைகள்."},
  {s:"polity",q:"அடிப்படைக் கடமைகள் எந்தத் திருத்தத்தின் மூலம் சேர்க்கப்பட்டன?",o:["42-வது","44-வது","52-வது","61-வது"],a:0,e:"42-வது அரசியலமைப்புத் திருத்தம் மூலம் அடிப்படைக் கடமைகள் சேர்க்கப்பட்டன."},

  {s:"geography",q:"இந்தியாவில் மிக நீளமான நதி எனப் பொதுவாகக் குறிப்பிடப்படுவது எது?",o:["கோதாவரி","கங்கை","நர்மதை","கிருஷ்ணா"],a:1,e:"இந்தியாவில் மிக நீளமான நதியாக கங்கை பொதுவாகக் குறிப்பிடப்படுகிறது."},
  {s:"geography",q:"தமிழ்நாட்டின் மிக உயரமான சிகரம் எது?",o:["ஆனைமுடி","தொட்டபெட்டா","அகத்தியமலை","மகேந்திரகிரி"],a:1,e:"தொட்டபெட்டா தமிழ்நாட்டின் மிக உயரமான சிகரம்."},
  {s:"geography",q:"மேட்டூர் அணை எந்த ஆற்றின் குறுக்கே கட்டப்பட்டுள்ளது?",o:["வைகை","பாலாறு","காவிரி","தாமிரபரணி"],a:2,e:"மேட்டூர் அணை காவிரி ஆற்றின் குறுக்கே கட்டப்பட்டுள்ளது."},
  {s:"geography",q:"கருப்பு மண் எந்தப் பயிருக்கு ஏற்றது?",o:["தேயிலை","பருத்தி","சணல்","காபி"],a:1,e:"கருப்பு மண் பருத்தி சாகுபடிக்கு ஏற்றது."},

  {s:"science",q:"வைட்டமின் C குறைபாட்டால் ஏற்படும் நோய் எது?",o:["ரிக்கெட்ஸ்","ஸ்கர்வி","பெரிபெரி","இரத்த சோகை"],a:1,e:"வைட்டமின் C குறைபாடு ஸ்கர்வி நோயை ஏற்படுத்தும்."},
  {s:"science",q:"நீரின் வேதியியல் வாய்ப்பாடு என்ன?",o:["CO2","O2","H2O","NaCl"],a:2,e:"நீரின் வேதியியல் வாய்ப்பாடு H₂O."},
  {s:"science",q:"ஒளிச்சேர்க்கையின்போது தாவரங்கள் வெளியிடும் வாயு எது?",o:["கார்பன் டை ஆக்சைடு","ஆக்சிஜன்","நைட்ரஜன்","ஹைட்ரஜன்"],a:1,e:"ஒளிச்சேர்க்கையின் போது ஆக்சிஜன் வெளியிடப்படுகிறது."},
  {s:"science",q:"மனித உடலின் மிகப்பெரிய உறுப்பு எது?",o:["கல்லீரல்","தோல்","இதயம்","நுரையீரல்"],a:1,e:"மனித உடலின் மிகப்பெரிய உறுப்பு தோல்."},

  {s:"economy",q:"இந்திய ரிசர்வ் வங்கி தொடங்கப்பட்ட ஆண்டு எது?",o:["1935","1947","1950","1969"],a:0,e:"இந்திய ரிசர்வ் வங்கி 1935-ல் தொடங்கப்பட்டது."},
  {s:"economy",q:"இந்தியாவில் GST நடைமுறைக்கு வந்த நாள் எது?",o:["1 ஜனவரி 2016","1 ஜூலை 2017","1 ஏப்ரல் 2018","15 ஆகஸ்ட் 2017"],a:1,e:"GST 1 ஜூலை 2017 அன்று நடைமுறைக்கு வந்தது."},
  {s:"economy",q:"NITI Aayog அமைக்கப்பட்ட ஆண்டு எது?",o:["2010","2012","2015","2017"],a:2,e:"NITI Aayog 2015-ல் அமைக்கப்பட்டது."},

  {s:"current",q:"தேசிய வாக்காளர் தினம் எப்போது?",o:["ஜனவரி 12","ஜனவரி 25","ஜனவரி 26","மார்ச் 8"],a:1,e:"தேசிய வாக்காளர் தினம் ஜனவரி 25 அன்று கடைப்பிடிக்கப்படுகிறது."},
  {s:"current",q:"இந்திய அரசியலமைப்பு தினம் எப்போது?",o:["ஜனவரி 26","ஆகஸ்ட் 15","நவம்பர் 26","அக்டோபர் 2"],a:2,e:"அரசியலமைப்பு தினம் நவம்பர் 26 அன்று கடைப்பிடிக்கப்படுகிறது."},
  {s:"current",q:"தேசிய அறிவியல் தினம் எப்போது?",o:["பிப்ரவரி 28","மார்ச் 8","செப்டம்பர் 5","நவம்பர் 14"],a:0,e:"தேசிய அறிவியல் தினம் பிப்ரவரி 28 அன்று கடைப்பிடிக்கப்படுகிறது."},

  {s:"maths",q:"200-ன் 25% எவ்வளவு?",o:["25","40","50","75"],a:2,e:"200 × 25/100 = 50."},
  {s:"maths",q:"12, 18, 24 ஆகியவற்றின் மீ.சி.ம. என்ன?",o:["36","48","72","96"],a:2,e:"இந்த எண்களின் மீ.சி.ம. 72."},
  {s:"maths",q:"₹500-க்கு 10% தள்ளுபடி அளித்தால் விலை என்ன?",o:["₹400","₹450","₹475","₹490"],a:1,e:"₹500-ல் 10% என்பது ₹50. விற்பனை விலை ₹450."},
  {s:"maths",q:"ஒரு வாகனம் மணிக்கு 60 கி.மீ. வேகத்தில் 3 மணி நேரம் சென்றால் தூரம் என்ன?",o:["120 கி.மீ.","150 கி.மீ.","180 கி.மீ.","200 கி.மீ."],a:2,e:"தூரம் = வேகம் × நேரம் = 180 கி.மீ."},
  {s:"maths",q:"2, 4, 8, 16, அடுத்த எண் எது?",o:["18","24","30","32"],a:3,e:"ஒவ்வொரு எண்ணும் இரட்டிப்பாகிறது. அடுத்த எண் 32."}
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
  resize_keyboard: true
};

function inline(rows) {
  return {inline_keyboard: rows};
}

async function api(env, method, data) {
  const r = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`,
    {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    }
  );
  return r.json();
}

async function say(env, chat, text, markup) {
  return api(env, "sendMessage", {
    chat_id: chat,
    text,
    ...(markup ? {reply_markup:markup} : {})
  });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i=a.length-1; i>0; i--) {
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

async function showSubjects(env, chat) {
  const keys=Object.keys(SUBJECTS);
  const rows=[];
  for(let i=0;i<keys.length;i+=2) {
    rows.push(keys.slice(i,i+2).map(k=>({
      text:SUBJECTS[k],
      callback_data:"sub|"+k
    })));
  }
  await say(env,chat,"📝 பாடத்தைத் தேர்வு செய்யுங்கள்:",inline(rows));
}

async function showCounts(env, chat, mode) {
  await say(
    env,chat,
    "எத்தனை கேள்விகள் வேண்டும்?",
    inline([
      [{text:"10",callback_data:`num|${mode}|10`},{text:"25",callback_data:`num|${mode}|25`}],
      [{text:"50",callback_data:`num|${mode}|50`},{text:"100",callback_data:`num|${mode}|100`}],
      [{text:"🏠 Menu",callback_data:"menu"}]
    ])
  );
}

async function begin(env, uid, chat, mode, count) {
  let pool = QUESTIONS;

  if (mode === "pyq") {
    // இந்த code-ல் தனியாக உறுதிப்படுத்தப்பட்ட முந்தைய ஆண்டு வினா தரவுத்தொகுப்பு இல்லை.
    await say(env,chat,"முந்தைய ஆண்டு வினாக்களுக்கு உறுதிப்படுத்தப்பட்ட தனி வினாத்தொகுப்பு இன்னும் சேர்க்கப்படவில்லை. இப்போது Mixed Quiz தேர்வு செய்யலாம்.",MENU);
    return;
  }

  if (SUBJECTS[mode]) pool=QUESTIONS.filter(q=>q.s===mode);

  if (!pool.length) {
    await say(env,chat,"இந்தப் பாடத்தில் கேள்விகள் இல்லை.",MENU);
    return;
  }

  const selected=shuffle(pool).slice(0,Math.min(count,pool.length));

  const p=profiles.get(uid) || {score:0,correct:0,wrong:[],saved:[]};
  profiles.set(uid,p);

  active.set(uid,{
    chat,
    questions:selected,
    index:0,
    score:0,
    mode,
    waiting:null,
    wrong:[],
    answered:new Set()
  });

  if(selected.length<count) {
    await say(env,chat,`தற்போது ${pool.length} கேள்விகள் மட்டுமே உள்ளன. ${selected.length} கேள்விகள் தொடங்குகின்றன.`);
  }

  await next(env,uid);
}

async function next(env,uid) {
  const s=active.get(uid);
  if(!s)return;

  if(s.index>=s.questions.length) {
    const p=profiles.get(uid);
    p.score+=s.score;
    p.correct+=s.score;
    p.wrong.push(...s.wrong);

    active.delete(uid);

    await say(
      env,s.chat,
      `🏁 தேர்வு முடிந்தது!\n\nமொத்த வினாக்கள்: ${s.questions.length}\nசரியான பதில்கள்: ${s.score}\nதவறான பதில்கள்: ${s.questions.length-s.score}\nமதிப்பெண்: ${s.score}/${s.questions.length}`,
      MENU
    );
    return;
  }

  const q=s.questions[s.index];
  const opts=shuffle(q.o.map((text,i)=>({text,i})));
  const answer=opts.findIndex(x=>x.i===q.a);

  const r=await api(env,"sendPoll",{
    chat_id:s.chat,
    question:`வினா ${s.index+1}/${s.questions.length}\n${q.q}`,
    options:opts.map(x=>x.text),
    type:"quiz",
    correct_option_id:answer,
    is_anonymous:false,
    explanation:q.e
  });

  if(!r.ok) {
    console.error("POLL_ERROR",JSON.stringify(r));
    await say(env,s.chat,"வினாவை அனுப்ப முடியவில்லை. /start மூலம் மீண்டும் முயற்சி செய்யுங்கள்.",MENU);
    active.delete(uid);
    return;
  }

  s.waiting={
    pollId:r.result.poll.id,
    q:{...q,o:opts.map(x=>x.text),a:answer}
  };
  s.index++;
}

async function handle(env,u) {
  if(u.message) {
    const m=u.message;
    const uid=String(m.from.id);
    const chat=m.chat.id;
    const t=(m.text||"").trim();

    if(t==="/start" || t==="/menu") {
      await say(env,chat,"வணக்கம்! TNPSC Group 4 தமிழ் பயிற்சிக்கு வரவேற்கிறோம்.\nஒரு பயிற்சியைத் தேர்ந்தெடுக்கவும்.",MENU);
    } else if(t==="/stop") {
      active.delete(uid);
      await say(env,chat,"Quiz நிறுத்தப்பட்டது.",MENU);
    } else if(t.includes("கலப்பு தேர்வு")) {
      await begin(env,uid,chat,"mixed",25);
    } else if(t.includes("முந்தைய ஆண்டு")) {
      await begin(env,uid,chat,"pyq",25);
    } else if(t.includes("படிப்பு முறை")) {
      await say(env,chat,"📖 படிப்பு முறை: பாடவாரித் தேர்வைத் தேர்வு செய்து கேள்விகளைப் பயிற்சி செய்யுங்கள். ஒவ்வொரு வினாவிற்கும் விளக்கம் வழங்கப்படும்.",MENU);
      await showSubjects(env,chat);
    } else if(t.includes("பாடவாரித் தேர்வு")) {
      await showSubjects(env,chat);
    } else if(t.includes("தவறான வினாக்கள்")) {
      const p=profiles.get(uid);
      if(!p || !p.wrong.length) {
        await say(env,chat,"இன்னும் தவறான வினாக்கள் இல்லை. முதலில் ஒரு தேர்வை முடிக்கவும்.",MENU);
      } else {
        await beginWrong(env,uid,chat);
      }
    } else if(t.includes("சேமித்த வினாக்கள்")) {
      const p=profiles.get(uid);
      if(!p || !p.saved.length) {
        await say(env,chat,"சேமித்த வினாக்கள் இல்லை. Quiz முடிவில் கேள்விகளை சேமிக்கும் வசதியைத் தேர்வு செய்யலாம்.",MENU);
      } else {
        await say(env,chat,`⭐ சேமித்த வினாக்கள்: ${p.saved.length}\n${p.saved.map((q,i)=>`${i+1}. ${q.q}`).join("\n")}`,MENU);
      }
    } else if(t.includes("மதிப்பெண்கள்")) {
      const p=profiles.get(uid)||{score:0,correct:0,wrong:[]};
      await say(env,chat,`📊 மதிப்பெண் விவரம்\nமொத்த சரியான பதில்கள்: ${p.correct}\nசேமித்த தவறான வினாக்கள்: ${p.wrong.length}`,MENU);
    } else {
      await say(env,chat,"கீழே உள்ள menu-வில் ஒரு option-ஐத் தேர்வு செய்யுங்கள்.",MENU);
    }
    return;
  }

  if(u.callback_query) {
    const c=u.callback_query;
    const uid=String(c.from.id);
    const chat=c.message.chat.id;
    const d=c.data||"";

    await api(env,"answerCallbackQuery",{callback_query_id:c.id});

    if(d==="menu") {
      await say(env,chat,"முதன்மை மெனு:",MENU);
    } else if(d.startsWith("sub|")) {
      const subject=d.split("|")[1];
      if(SUBJECTS[subject]) await showCounts(env,chat,subject);
    } else if(d.startsWith("num|")) {
      const [,mode,n]=d.split("|");
      await begin(env,uid,chat,mode,Number(n));
    }
    return;
  }

  if(u.poll_answer) {
    const a=u.poll_answer;
    const uid=String(a.user.id);
    const s=active.get(uid);

    if(!s || !s.waiting || s.waiting.pollId!==a.poll_id) return;
    if(s.answered.has(a.poll_id)) return;
    s.answered.add(a.poll_id);

    if(a.option_ids && a.option_ids[0]===s.waiting.q.a) {
      s.score++;
    } else {
      s.wrong.push(s.waiting.q);
    }

    s.waiting=null;
    await next(env,uid);
  }
}

async function beginWrong(env,uid,chat) {
  const p=profiles.get(uid);
  const qs=shuffle(p.wrong);
  active.set(uid,{
    chat,
    questions:qs,
    index:0,
    score:0,
    mode:"wrong",
    waiting:null,
    wrong:[],
    answered:new Set()
  });
  await next(env,uid);
}

export default {
  async fetch(request,env) {
    if(request.method!=="POST") {
      return new Response("TNPSC Tamil Quiz Bot is running.");
    }

    if(!env.TELEGRAM_BOT_TOKEN) {
      return new Response("TELEGRAM_BOT_TOKEN secret missing",{status:500});
    }

    try {
      const update=await request.json();
      await handle(env,update);
      return new Response("OK");
    } catch(e) {
      console.error("WEBHOOK_ERROR",e);
      return new Response("Internal error",{status:500});
    }
  }
};
