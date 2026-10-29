
const active = new Map();

const SUBJECTS = {
  tamil: "தமிழ்",
  history: "வரலாறு",
  polity: "இந்திய அரசியலமைப்பு",
  geography: "புவியியல்",
  science: "பொது அறிவியல்",
  economy: "பொருளாதாரம்",
  current: "நடப்பு நிகழ்வுகள்",
  maths: "திறனறிவு மற்றும் கணிதம்"
};

const QUESTIONS = [
  // தமிழ்
  {s:"tamil",q:"திருக்குறளில் மொத்தம் எத்தனை குறள்கள் உள்ளன?",o:["1330","1300","1200","1335"],a:0,e:"திருக்குறளில் 133 அதிகாரங்கள்; ஒவ்வொரு அதிகாரத்திலும் 10 குறள்கள் உள்ளன."},
  {s:"tamil",q:"திருக்குறளில் உள்ள அதிகாரங்களின் எண்ணிக்கை என்ன?",o:["100","108","133","150"],a:2,e:"திருக்குறளில் 133 அதிகாரங்கள் உள்ளன."},
  {s:"tamil",q:"தொல்காப்பியத்தின் மூன்று அதிகாரப் பிரிவுகள் எவை?",o:["அறம், பொருள், இன்பம்","எழுத்து, சொல், பொருள்","இயல், இசை, நாடகம்","அகம், புறம், பக்தி"],a:1,e:"தொல்காப்பியம் எழுத்ததிகாரம், சொல்லதிகாரம், பொருளதிகாரம் எனப் பிரிக்கப்பட்டுள்ளது."},
  {s:"tamil",q:"சிலப்பதிகாரத்தின் ஆசிரியர் யார்?",o:["சீத்தலைச் சாத்தனார்","கம்பர்","இளங்கோ அடிகள்","திருத்தக்கதேவர்"],a:2,e:"சிலப்பதிகாரத்தை இயற்றியவர் இளங்கோ அடிகள்."},
  {s:"tamil",q:"மணிமேகலையின் ஆசிரியர் யார்?",o:["இளங்கோ அடிகள்","சீத்தலைச் சாத்தனார்","கம்பர்","ஔவையார்"],a:1,e:"மணிமேகலையின் ஆசிரியர் சீத்தலைச் சாத்தனார்."},
  {s:"tamil",q:"தமிழ்த்தாய் வாழ்த்தை இயற்றியவர் யார்?",o:["பாரதியார்","பாரதிதாசன்","மனோன்மணியம் சுந்தரனார்","கவிமணி"],a:2,e:"தமிழ்த்தாய் வாழ்த்தை இயற்றியவர் மனோன்மணியம் சுந்தரனார்."},
  {s:"tamil",q:"'யாதும் ஊரே யாவரும் கேளிர்' என்று பாடியவர் யார்?",o:["கபிலர்","கணியன் பூங்குன்றனார்","நக்கீரர்","பரணர்"],a:1,e:"புறநானூற்றில் கணியன் பூங்குன்றனார் இந்தப் பாடலைப் பாடியுள்ளார்."},

  // வரலாறு
  {s:"history",q:"இந்திய தேசிய காங்கிரஸ் தொடங்கப்பட்ட ஆண்டு எது?",o:["1885","1905","1857","1947"],a:0,e:"இந்திய தேசிய காங்கிரஸ் 1885-ல் தொடங்கப்பட்டது."},
  {s:"history",q:"இந்திய தேசிய காங்கிரஸின் முதல் தலைவர் யார்?",o:["தாதாபாய் நௌரோஜி","ஏ.ஓ. ஹியூம்","டபிள்யூ.சி. பானர்ஜி","கோபால கிருஷ்ண கோகலே"],a:2,e:"முதல் மாநாட்டிற்குத் தலைமை தாங்கியவர் டபிள்யூ.சி. பானர்ஜி."},
  {s:"history",q:"வெள்ளையனே வெளியேறு இயக்கம் தொடங்கிய ஆண்டு எது?",o:["1930","1942","1920","1947"],a:1,e:"வெள்ளையனே வெளியேறு இயக்கம் 1942-ல் தொடங்கியது."},
  {s:"history",q:"உப்பு சத்தியாகிரகத்தைத் தொடங்கியவர் யார்?",o:["சுபாஷ் சந்திர போஸ்","பகத் சிங்","மகாத்மா காந்தி","பால கங்காதர திலகர்"],a:2,e:"மகாத்மா காந்தி 1930-ல் தண்டி உப்பு சத்தியாகிரகத்தை நடத்தினார்."},
  {s:"history",q:"இந்தியாவின் முதல் சுதந்திரப் போர் எனப் பொதுவாகக் குறிப்பிடப்படுவது எது?",o:["வேலூர் கிளர்ச்சி 1806","சிப்பாய் கிளர்ச்சி 1857","ஒத்துழையாமை இயக்கம்","சுதேசி இயக்கம்"],a:1,e:"1857 சிப்பாய் கிளர்ச்சி முதல் சுதந்திரப் போர் எனப் பொதுவாகக் குறிப்பிடப்படுகிறது."},
  {s:"history",q:"வேலூர் சிப்பாய் கிளர்ச்சி நடந்த ஆண்டு எது?",o:["1757","1806","1857","1885"],a:1,e:"வேலூர் சிப்பாய் கிளர்ச்சி 1806-ல் நடைபெற்றது."},

  // அரசியலமைப்பு
  {s:"polity",q:"இந்திய அரசியலமைப்பு நடைமுறைக்கு வந்த நாள் எது?",o:["15 ஆகஸ்ட் 1947","26 ஜனவரி 1950","26 நவம்பர் 1949","2 அக்டோபர் 1950"],a:1,e:"இந்திய அரசியலமைப்பு 26 ஜனவரி 1950 அன்று நடைமுறைக்கு வந்தது."},
  {s:"polity",q:"அரசியலமைப்பு வரைவுக் குழுவின் தலைவர் யார்?",o:["ஜவஹர்லால் நேரு","டாக்டர் ராஜேந்திர பிரசாத்","டாக்டர் பி.ஆர். அம்பேத்கர்","சர்தார் வல்லபாய் படேல்"],a:2,e:"வரைவுக் குழுவின் தலைவராக டாக்டர் பி.ஆர். அம்பேத்கர் இருந்தார்."},
  {s:"polity",q:"இந்திய அரசியலமைப்பில் அடிப்படைக் கடமைகள் எந்தத் திருத்தத்தின் மூலம் சேர்க்கப்பட்டன?",o:["42-வது திருத்தம்","44-வது திருத்தம்","52-வது திருத்தம்","61-வது திருத்தம்"],a:0,e:"42-வது அரசியலமைப்புத் திருத்தம் 1976-ல் அடிப்படைக் கடமைகளைச் சேர்த்தது."},
  {s:"polity",q:"இந்தியாவில் வாக்களிக்கும் குறைந்தபட்ச வயது என்ன?",o:["16","18","21","25"],a:1,e:"வாக்களிக்கும் வயது 61-வது திருத்தத்தின் மூலம் 21-லிருந்து 18 ஆகக் குறைக்கப்பட்டது."},
  {s:"polity",q:"இந்திய நாடாளுமன்றத்தின் இரு அவைகள் எவை?",o:["சட்டமன்றம், சட்ட மேலவை","மக்களவை, மாநிலங்களவை","மக்களவை, உச்சநீதிமன்றம்","மாநிலங்களவை, அமைச்சரவை"],a:1,e:"நாடாளுமன்றத்தில் குடியரசுத் தலைவர் மற்றும் மக்களவை, மாநிலங்களவை ஆகியவை அடங்கும்."},
  {s:"polity",q:"இந்திய அரசியலமைப்பின் முகப்புரையில் 'சோசலிசம்' மற்றும் 'மதச்சார்பின்மை' சேர்க்கப்பட்ட திருத்தம் எது?",o:["24-வது","42-வது","44-வது","73-வது"],a:1,e:"42-வது திருத்தம் 1976-ல் இந்தச் சொற்களை முகப்புரையில் சேர்த்தது."},

  // புவியியல்
  {s:"geography",q:"இந்தியாவின் மிக நீளமான நதி எது?",o:["கோதாவரி","கங்கை","நர்மதை","கிருஷ்ணா"],a:1,e:"இந்தியாவின் மிக நீளமான நதியாக கங்கை பொதுவாகக் குறிப்பிடப்படுகிறது."},
  {s:"geography",q:"தமிழ்நாட்டின் மிக உயரமான சிகரம் எது?",o:["ஆனைமுடி","தொட்டபெட்டா","அகத்தியமலை","மகேந்திரகிரி"],a:1,e:"நீலகிரி மலைத்தொடரில் உள்ள தொட்டபெட்டா தமிழ்நாட்டின் மிக உயரமான சிகரமாகும்."},
  {s:"geography",q:"இந்தியாவின் தென்கோடி நிலப்பகுதி எது?",o:["கன்னியாகுமரி","இந்திரா பாயிண்ட்","ராமேஸ்வரம்","கொச்சி"],a:0,e:"இந்திய நிலப்பரப்பின் தென்கோடி கன்னியாகுமரி. இந்தியாவின் தென்கோடி புள்ளி இந்திரா பாயிண்ட்."},
  {s:"geography",q:"மேட்டூர் அணை எந்த நதியின் குறுக்கே கட்டப்பட்டுள்ளது?",o:["வைகை","பாலாறு","காவிரி","தாமிரபரணி"],a:2,e:"மேட்டூர் அணை காவிரி ஆற்றின் குறுக்கே கட்டப்பட்டுள்ளது."},
  {s:"geography",q:"கருப்பு மண் எந்தப் பயிருக்கு மிகவும் ஏற்றது?",o:["தேயிலை","பருத்தி","சணல்","காபி"],a:1,e:"கருப்பு மண் பருத்தி சாகுபடிக்கு ஏற்றது."},
  {s:"geography",q:"இந்தியாவில் தென்மேற்குப் பருவமழை பொதுவாக எந்த மாதங்களில் பெய்கிறது?",o:["ஜனவரி–மார்ச்","ஏப்ரல்–மே","ஜூன்–செப்டம்பர்","அக்டோபர்–டிசம்பர்"],a:2,e:"தென்மேற்குப் பருவமழை பொதுவாக ஜூன் முதல் செப்டம்பர் வரை பெய்கிறது."},

  // அறிவியல்
  {s:"science",q:"வைட்டமின் C குறைபாட்டால் ஏற்படும் நோய் எது?",o:["ரிக்கெட்ஸ்","ஸ்கர்வி","பெரிபெரி","இரத்த சோகை"],a:1,e:"வைட்டமின் C குறைபாடு ஸ்கர்வி நோயை ஏற்படுத்தும்."},
  {s:"science",q:"மனித உடலில் இரத்தத்தை வடிகட்டும் முக்கிய உறுப்பு எது?",o:["இதயம்","நுரையீரல்","சிறுநீரகம்","வயிறு"],a:2,e:"சிறுநீரகங்கள் இரத்தத்திலிருந்து கழிவுகளை வடிகட்டுகின்றன."},
  {s:"science",q:"ஒளிச்சேர்க்கையின் போது தாவரங்கள் எந்த வாயுவை வெளியிடுகின்றன?",o:["கார்பன் டை ஆக்சைடு","ஆக்சிஜன்","நைட்ரஜன்","ஹைட்ரஜன்"],a:1,e:"ஒளிச்சேர்க்கையின்போது தாவரங்கள் ஆக்சிஜனை வெளியிடுகின்றன."},
  {s:"science",q:"நீரின் வேதியியல் வாய்ப்பாடு என்ன?",o:["CO2","O2","H2O","NaCl"],a:2,e:"நீரின் வேதியியல் வாய்ப்பாடு H₂O."},
  {s:"science",q:"மனித உடலில் மிகப்பெரிய உறுப்பு எது?",o:["கல்லீரல்","தோல்","இதயம்","நுரையீரல்"],a:1,e:"மனித உடலின் மிகப்பெரிய உறுப்பு தோல்."},
  {s:"science",q:"ஒலியின் வேகம் அதிகமாக இருப்பது எந்த ஊடகத்தில்?",o:["வெற்றிடம்","வாயு","திரவம்","திடம்"],a:3,e:"பொதுவாக ஒலி திடப்பொருட்களில் மிக வேகமாகப் பரவுகிறது."},

  // பொருளாதாரம்
  {s:"economy",q:"இந்திய ரிசர்வ் வங்கி எந்த ஆண்டு தொடங்கப்பட்டது?",o:["1935","1947","1950","1969"],a:0,e:"இந்திய ரிசர்வ் வங்கி 1 ஏப்ரல் 1935 அன்று தொடங்கப்பட்டது."},
  {s:"economy",q:"இந்தியாவில் பணவியல் கொள்கையை வகுக்கும் முக்கிய நிறுவனம் எது?",o:["நிதி ஆயோக்","இந்திய ரிசர்வ் வங்கி","தேர்தல் ஆணையம்","நிதி ஆணையம்"],a:1,e:"இந்திய ரிசர்வ் வங்கி பணவியல் கொள்கையில் முக்கியப் பங்கு வகிக்கிறது."},
  {s:"economy",q:"GST இந்தியாவில் நடைமுறைக்கு வந்த நாள் எது?",o:["1 ஜனவரி 2016","1 ஜூலை 2017","1 ஏப்ரல் 2018","15 ஆகஸ்ட் 2017"],a:1,e:"சரக்கு மற்றும் சேவை வரி 1 ஜூலை 2017 அன்று நடைமுறைக்கு வந்தது."},
  {s:"economy",q:"NITI Aayog எந்த ஆண்டில் அமைக்கப்பட்டது?",o:["2010","2012","2015","2017"],a:2,e:"NITI Aayog 1 ஜனவரி 2015 அன்று அமைக்கப்பட்டது."},

  // நடப்பு நிகழ்வுகள் / நிலையான பொது அறிவு
  {s:"current",q:"இந்தியாவில் தேசிய வாக்காளர் தினம் எப்போது கடைப்பிடிக்கப்படுகிறது?",o:["ஜனவரி 12","ஜனவரி 25","ஜனவரி 26","மார்ச் 8"],a:1,e:"தேசிய வாக்காளர் தினம் ஒவ்வோர் ஆண்டும் ஜனவரி 25 அன்று கடைப்பிடிக்கப்படுகிறது."},
  {s:"current",q:"இந்தியாவில் அரசியலமைப்பு தினம் எப்போது கடைப்பிடிக்கப்படுகிறது?",o:["ஜனவரி 26","ஆகஸ்ட் 15","நவம்பர் 26","அக்டோபர் 2"],a:2,e:"அரசியலமைப்பு தினம் நவம்பர் 26 அன்று கடைப்பிடிக்கப்படுகிறது."},
  {s:"current",q:"உலக சுற்றுச்சூழல் தினம் எப்போது?",o:["ஜூன் 5","ஏப்ரல் 22","மார்ச் 21","ஜூலை 11"],a:0,e:"உலக சுற்றுச்சூழல் தினம் ஜூன் 5 அன்று கடைப்பிடிக்கப்படுகிறது."},
  {s:"current",q:"இந்தியாவின் தேசிய அறிவியல் தினம் எப்போது?",o:["பிப்ரவரி 28","மார்ச் 8","செப்டம்பர் 5","நவம்பர் 14"],a:0,e:"சி.வி. ராமன் விளைவைக் கண்டறிந்ததை நினைவுகூர்ந்து பிப்ரவரி 28 தேசிய அறிவியல் தினமாகக் கடைப்பிடிக்கப்படுகிறது."},

  // திறனறிவு / கணிதம்
  {s:"maths",q:"200-ன் 25% எவ்வளவு?",o:["25","40","50","75"],a:2,e:"200 × 25/100 = 50."},
  {s:"maths",q:"12, 18, 24 ஆகிய எண்களின் மீ.சி.ம. என்ன?",o:["36","48","72","96"],a:2,e:"12, 18, 24 ஆகியவற்றின் மீ.சி.ம. 72."},
  {s:"maths",q:"ஒரு பொருளின் விலை ₹500. 10% தள்ளுபடி என்றால் விற்பனை விலை என்ன?",o:["₹400","₹450","₹475","₹490"],a:1,e:"தள்ளுபடி ₹50; விற்பனை விலை ₹450."},
  {s:"maths",q:"ஒரு வாகனம் மணிக்கு 60 கி.மீ. வேகத்தில் 3 மணி நேரம் சென்றால் பயணித்த தூரம் என்ன?",o:["120 கி.மீ.","150 கி.மீ.","180 கி.மீ.","200 கி.மீ."],a:2,e:"தூரம் = வேகம் × நேரம் = 60 × 3 = 180 கி.மீ."},
  {s:"maths",q:"தொடர்: 2, 4, 8, 16, __. அடுத்த எண் எது?",o:["18","24","30","32"],a:3,e:"ஒவ்வொரு எண்ணும் 2-ஆல் பெருக்கப்படுகிறது; அடுத்த எண் 32."},
  {s:"maths",q:"ஒரு எண்ணின் 3/4 பங்கு 60 என்றால் அந்த எண் என்ன?",o:["45","75","80","90"],a:2,e:"எண் = 60 × 4/3 = 80."}
];

const MENU = {
  keyboard: [
    [{text:"🎯 Normal Mixed Quiz", callback_data:"mixed"}],
    [{text:"📚 Subject-wise Quiz", callback_data:"subjects"}]
  ],
  resize_keyboard: true
};

function inlineKeyboard(rows) {
  return { inline_keyboard: rows };
}

async function telegram(env, method, body) {
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

async function sendMessage(env, chatId, text, replyMarkup) {
  return telegram(env, "sendMessage", {
    chat_id: chatId,
    text,
    ...(replyMarkup ? {reply_markup: replyMarkup} : {})
  });
}

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

async function showCountMenu(env, chatId, subject) {
  const label = subject === "mixed" ? "Normal Mixed Quiz" : SUBJECTS[subject];
  await sendMessage(
    env,
    chatId,
    `📘 ${label}\nஎத்தனை கேள்விகள் வேண்டும்?`,
    inlineKeyboard([
      [
        {text:"10",callback_data:`count|${subject}|10`},
        {text:"25",callback_data:`count|${subject}|25`}
      ],
      [
        {text:"50",callback_data:`count|${subject}|50`},
        {text:"100",callback_data:`count|${subject}|100`}
      ],
      [{text:"🏠 Main Menu",callback_data:"home"}]
    ])
  );
}

async function showSubjects(env, chatId) {
  const keys = Object.keys(SUBJECTS);
  const rows = [];
  for (let i = 0; i < keys.length; i += 2) {
    rows.push(keys.slice(i, i + 2).map(key => ({
      text: SUBJECTS[key],
      callback_data: `subject|${key}`
    })));
  }
  rows.push([{text:"🏠 Main Menu",callback_data:"home"}]);
  await sendMessage(
    env,
    chatId,
    "📚 எந்தப் பாடத்தில் quiz வேண்டும்?",
    inlineKeyboard(rows)
  );
}

async function startQuiz(env, userId, chatId, subject, requestedCount) {
  const pool = subject === "mixed"
    ? QUESTIONS
    : QUESTIONS.filter(q => q.s === subject);

  if (!pool.length) {
    await sendMessage(env, chatId, "இந்தப் பாடத்தில் கேள்விகள் இல்லை.", MENU);
    return;
  }

  // Available question count-ஐ விட அதிகமாகத் தேர்ந்தெடுத்தால்,
  // இருக்கும் கேள்விகளை மீண்டும் பயன்படுத்தாமல் கிடைக்கும் எண்ணிக்கையே எடுக்கப்படும்.
  const count = Math.min(requestedCount, pool.length);
  const selected = shuffle(pool).slice(0, count);

  active.set(String(userId), {
    chatId,
    questions: selected,
    index: 0,
    score: 0,
    waiting: null,
    answeredPolls: new Set()
  });

  if (count < requestedCount) {
    await sendMessage(
      env,
      chatId,
      `இந்தத் தேர்வில் தற்போது ${pool.length} கேள்விகள் மட்டுமே உள்ளன. ${count} கேள்விகள் தொடங்குகின்றன.`
    );
  }

  await nextQuestion(env, String(userId));
}

async function nextQuestion(env, userId) {
  const state = active.get(String(userId));
  if (!state) return;

  if (state.index >= state.questions.length) {
    const total = state.questions.length;
    const score = state.score;
    active.delete(String(userId));

    await sendMessage(
      env,
      state.chatId,
      `🏁 Quiz முடிந்தது!\n\nமொத்தக் கேள்விகள்: ${total}\nசரியான பதில்கள்: ${score}\nதவறான பதில்கள்: ${total - score}\nமதிப்பெண்: ${score}/${total}`,
      MENU
    );
    return;
  }

  const question = state.questions[state.index];

  // பதில்களின் இடத்தை மாற்றி, சரியான பதிலின் புதிய இடத்தையும் கணக்கிடுகிறது.
  const shuffled = shuffle(
    question.o.map((text, originalIndex) => ({text, originalIndex}))
  );

  const options = shuffled.map(item => item.text);
  const correctOptionId = shuffled.findIndex(
    item => item.originalIndex === question.a
  );

  const result = await telegram(env, "sendPoll", {
    chat_id: state.chatId,
    question: `வினா ${state.index + 1}/${state.questions.length}\n${question.q}`,
    options,
    type: "quiz",
    correct_option_id: correctOptionId,
    is_anonymous: false,
    explanation: question.e
  });

  if (!result.ok) {
    console.error("SEND_POLL_ERROR", JSON.stringify(result));
    await sendMessage(env, state.chatId, "வினாவை அனுப்ப முடியவில்லை. /start மூலம் மீண்டும் தொடங்குங்கள்.", MENU);
    active.delete(String(userId));
    return;
  }

  state.waiting = {
    pollId: result.result.poll.id,
    question: {
      ...question,
      o: options,
      a: correctOptionId
    }
  };
  state.index += 1;
}

async function handleUpdate(env, update) {
  if (update.message) {
    const message = update.message;
    const chatId = message.chat.id;
    const userId = String(message.from.id);
    const text = (message.text || "").trim();

    if (text === "/start" || text === "/menu") {
      await sendMessage(
        env,
        chatId,
        "🎓 TNPSC Group 4 Tamil Quiz Bot\n\nஉங்களுக்கு வேண்டிய quiz-ஐத் தேர்வு செய்யுங்கள்.",
        MENU
      );
    } else if (text === "/stop") {
      active.delete(userId);
      await sendMessage(env, chatId, "Quiz நிறுத்தப்பட்டது.", MENU);
    } else {
      await sendMessage(env, chatId, "Quiz தொடங்க /start அழுத்துங்கள்.", MENU);
    }
    return;
  }

  if (update.callback_query) {
    const callback = update.callback_query;
    const data = callback.data || "";
    const chatId = callback.message.chat.id;
    const userId = String(callback.from.id);

    await telegram(env, "answerCallbackQuery", {
      callback_query_id: callback.id
    });

    if (data === "home") {
      await sendMessage(env, chatId, "முதன்மை மெனு:", MENU);
    } else if (data === "mixed") {
      await showCountMenu(env, chatId, "mixed");
    } else if (data === "subjects") {
      await showSubjects(env, chatId);
    } else if (data.startsWith("subject|")) {
      const subject = data.split("|")[1];
      if (SUBJECTS[subject]) {
        await showCountMenu(env, chatId, subject);
      }
    } else if (data.startsWith("count|")) {
      const [, subject, rawCount] = data.split("|");
      const count = Number(rawCount);
      if ((subject === "mixed" || SUBJECTS[subject]) &&
          [10, 25, 50, 100].includes(count)) {
        await startQuiz(env, userId, chatId, subject, count);
      }
    }
    return;
  }

  if (update.poll_answer) {
    const answer = update.poll_answer;
    const userId = String(answer.user.id);
    const state = active.get(userId);

    if (!state || !state.waiting) return;
    if (state.waiting.pollId !== answer.poll_id) return;
    if (state.answeredPolls.has(answer.poll_id)) return;

    state.answeredPolls.add(answer.poll_id);

    if (answer.option_ids && answer.option_ids[0] === state.waiting.question.a) {
      state.score += 1;
    }

    state.waiting = null;
    await nextQuestion(env, userId);
  }
}

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response(
        "TNPSC Tamil Quiz Bot is running.",
        {status: 200}
      );
    }

    if (!env.TELEGRAM_BOT_TOKEN) {
      return new Response("Missing TELEGRAM_BOT_TOKEN secret", {status: 500});
    }

    try {
      const update = await request.json();
      await handleUpdate(env, update);
      return new Response("OK");
    } catch (error) {
      console.error("WEBHOOK_ERROR", error);
      return new Response("Internal error", {status: 500});
    }
  }
};
