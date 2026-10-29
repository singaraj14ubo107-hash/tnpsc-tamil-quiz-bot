const MENU = {
  keyboard: [
    [{ text: "🎯 கலப்பு தேர்வு (25)", callback_data: "mixed" }],
    [{ text: "📚 முந்தைய ஆண்டு வினாக்கள்", callback_data: "previous" }],
    [{ text: "📖 படிப்பு முறை", callback_data: "study" }],
    [{ text: "📝 பாடவாரித் தேர்வு", callback_data: "subjects" }],
    [{ text: "🔁 தவறான வினாக்கள்", callback_data: "wrong" }],
    [{ text: "⭐ சேமித்த வினாக்கள்", callback_data: "saved" }],
    [{ text: "📊 மதிப்பெண்கள்", callback_data: "score" }],
    [{ text: "🌅 தினசரி Quiz", callback_data: "daily" }]
  ]
};

const QUESTIONS = [
  {s:"பொது தமிழ்",q:"தமிழ்த்தாய் வாழ்த்து இயற்றியவர் யார்?",o:["பாரதியார்","மனோன்மணியம் சுந்தரனார்","பாரதிதாசன்","திருவள்ளுவர்"],a:1,e:"மனோன்மணியம் சுந்தரனார் தமிழ்த்தாய் வாழ்த்தை இயற்றினார்."},
  {s:"பொது தமிழ்",q:"திருக்குறளில் உள்ள அதிகாரங்கள் எத்தனை?",o:["108","120","133","150"],a:2,e:"திருக்குறளில் 133 அதிகாரங்கள் உள்ளன."},
  {s:"பொது தமிழ்",q:"திருக்குறளில் உள்ள குறட்பாக்கள் எத்தனை?",o:["1200","1330","1300","1333"],a:1,e:"திருக்குறளில் 133 அதிகாரங்களில் 1330 குறட்பாக்கள் உள்ளன."},
  {s:"பொது தமிழ்",q:"சிலப்பதிகாரத்தின் ஆசிரியர் யார்?",o:["சீத்தலைச் சாத்தனார்","இளங்கோவடிகள்","கம்பர்","சேக்கிழார்"],a:1,e:"சிலப்பதிகாரத்தை இயற்றியவர் இளங்கோவடிகள்."},
  {s:"பொது தமிழ்",q:"நாலடியார் எந்த வகை நூல்?",o:["காப்பியம்","அறநூல்","இலக்கண நூல்","பக்தி நூல்"],a:1,e:"நாலடியார் பதினெண்கீழ்க்கணக்கு நூல்களில் ஒன்றாகும்."},
  {s:"வரலாறு",q:"இந்தியாவின் முதல் குடியரசுத் தலைவர் யார்?",o:["ஜவஹர்லால் நேரு","டாக்டர் ராஜேந்திர பிரசாத்","சர்தார் படேல்","டாக்டர் ராதாகிருஷ்ணன்"],a:1,e:"டாக்டர் ராஜேந்திர பிரசாத் இந்தியாவின் முதல் குடியரசுத் தலைவர்."},
  {s:"வரலாறு",q:"இந்திய தேசிய காங்கிரஸ் தொடங்கப்பட்ட ஆண்டு எது?",o:["1857","1885","1905","1947"],a:1,e:"இந்திய தேசிய காங்கிரஸ் 1885-ல் தொடங்கப்பட்டது."},
  {s:"வரலாறு",q:"வெள்ளையனே வெளியேறு இயக்கம் தொடங்கிய ஆண்டு எது?",o:["1920","1930","1942","1947"],a:2,e:"வெள்ளையனே வெளியேறு இயக்கம் 1942-ல் தொடங்கப்பட்டது."},
  {s:"வரலாறு",q:"வேதாரண்யம் உப்பு சத்தியாகிரகத்தை வழிநடத்தியவர் யார்?",o:["ராஜாஜி","காமராஜர்","பெரியார்","வ.உ.சிதம்பரனார்"],a:0,e:"ராஜாஜி வேதாரண்யம் உப்பு சத்தியாகிரகத்தை வழிநடத்தினார்."},
  {s:"அரசியலமைப்பு",q:"இந்திய அரசியலமைப்பு நடைமுறைக்கு வந்த நாள் எது?",o:["15.08.1947","26.11.1949","26.01.1950","02.10.1950"],a:2,e:"இந்திய அரசியலமைப்பு 26 ஜனவரி 1950 அன்று நடைமுறைக்கு வந்தது."},
  {s:"அரசியலமைப்பு",q:"இந்தியாவில் அடிப்படை உரிமைகள் எந்தப் பகுதியில் உள்ளன?",o:["பகுதி I","பகுதி II","பகுதி III","பகுதி IV"],a:2,e:"அடிப்படை உரிமைகள் அரசியலமைப்பின் பகுதி III-ல் உள்ளன."},
  {s:"அரசியலமைப்பு",q:"இந்திய நாடாளுமன்றத்தின் மேலவை எது?",o:["மக்களவை","மாநிலங்களவை","சட்டமன்றம்","கிராமசபை"],a:1,e:"மாநிலங்களவை நாடாளுமன்றத்தின் மேலவையாகும்."},
  {s:"புவியியல்",q:"இந்தியாவில் பரப்பளவில் மிகப்பெரிய மாநிலம் எது?",o:["தமிழ்நாடு","மத்தியப் பிரதேசம்","ராஜஸ்தான்","மகாராஷ்டிரா"],a:2,e:"ராஜஸ்தான் பரப்பளவில் மிகப்பெரிய இந்திய மாநிலம்."},
  {s:"புவியியல்",q:"தமிழ்நாட்டின் மிக உயரமான சிகரம் எது?",o:["ஆனைமுடி","தொட்டபெட்டா","அகத்தியமலை","மகேந்திரகிரி"],a:1,e:"தொட்டபெட்டா நீலகிரி மலைத்தொடரில் அமைந்துள்ளது."},
  {s:"அறிவியல்",q:"வைட்டமின் C குறைபாட்டால் ஏற்படும் நோய் எது?",o:["ரிக்கெட்ஸ்","ஸ்கர்வி","பெரிபெரி","இரத்தசோகை"],a:1,e:"வைட்டமின் C குறைபாட்டால் ஸ்கர்வி ஏற்படலாம்."},
  {s:"அறிவியல்",q:"ஒளிச்சேர்க்கைக்கு தாவரங்களில் உதவும் நிறமி எது?",o:["ஹீமோகுளோபின்","குளோரோபில்","மெலனின்","கெராட்டின்"],a:1,e:"குளோரோபில் ஒளியை உறிஞ்ச உதவுகிறது."},
  {s:"அறிவியல்",q:"நீரின் வேதியியல் வாய்ப்பாடு எது?",o:["CO₂","O₂","H₂O","NaCl"],a:2,e:"நீரின் வேதியியல் வாய்ப்பாடு H₂O."},
  {s:"கணிதம்",q:"200-ன் 15% எவ்வளவு?",o:["15","20","30","35"],a:2,e:"200 × 15 / 100 = 30."},
  {s:"கணிதம்",q:"12 மற்றும் 18-ன் மீச்சிறு பொது மடங்கு எது?",o:["6","24","36","72"],a:2,e:"12 மற்றும் 18-ன் மீச்சிறு பொது மடங்கு 36."},
  {s:"கணிதம்",q:"ஒரு பொருளின் விலை ₹800. 10% தள்ளுபடிக்குப் பின் விலை என்ன?",o:["₹700","₹720","₹740","₹780"],a:1,e:"தள்ளுபடி ₹80; இறுதி விலை ₹720."},
  {s:"பொது அறிவு",q:"இந்திய ரிசர்வ் வங்கியின் தலைமையகம் எங்கு உள்ளது?",o:["சென்னை","புதுடெல்லி","மும்பை","கொல்கத்தா"],a:2,e:"இந்திய ரிசர்வ் வங்கியின் தலைமையகம் மும்பையில் உள்ளது."},
  {s:"பொது அறிவு",q:"இந்தியாவின் தேசிய விலங்கு எது?",o:["சிங்கம்","புலி","யானை","சிறுத்தை"],a:1,e:"இந்தியாவின் தேசிய விலங்கு புலி."},
  {s:"அறிவியல்",q:"மனித இதயத்தில் எத்தனை அறைகள் உள்ளன?",o:["2","3","4","5"],a:2,e:"மனித இதயத்தில் நான்கு அறைகள் உள்ளன."},
  {s:"வரலாறு",q:"இந்தியாவின் முதல் பிரதமர் யார்?",o:["லால் பகதூர் சாஸ்திரி","ஜவஹர்லால் நேரு","சர்தார் படேல்","ராஜேந்திர பிரசாத்"],a:1,e:"ஜவஹர்லால் நேரு இந்தியாவின் முதல் பிரதமர்."},
  {s:"புவியியல்",q:"இந்தியாவின் தென்கோடியில் அமைந்துள்ள மாநிலம் எது?",o:["கேரளா","கர்நாடகா","தமிழ்நாடு","ஆந்திரப் பிரதேசம்"],a:2,e:"இந்தியத் தீபகற்பத்தின் தென்கோடியில் தமிழ்நாடு அமைந்துள்ளது."}
];

async function telegram(env, method, body) {
  const response = await fetch(
    `https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`, 
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
    text: "வணக்கம்! TNPSC Group 4 தமிழ் பயிற்சிக்கு வரவேற்கிறோம்.\nஒரு பயிற்சியைத் தேர்ந்தெடுக்கவும்.",
    reply_markup: { inline_keyboard: MENU.keyboard }
  };
}

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("TNPSC Quiz Bot is running");
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

    if (update.message?.text === "/start" ||
        update.message?.text === "/menu") {
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
        const [, idxText, scoreText, selectedText, totalText] =
          choice.split("|");
        const idx = Number(idxText);
        const score = Number(scoreText);
        const selected = Number(selectedText);
        const total = Number(totalText);
        const q = QUESTIONS[idx];

        if (!q || idx >= total) return new Response("OK");

        const correct = selected === q.a;
        const newScore = score + (correct ? 1 : 0);

        await telegram(env, "sendMessage", {
          chat_id: chatId,
          text:
            `${correct ? "✅ சரியான பதில்!" : "❌ தவறான பதில்!"}\n\n` +
            `சரியான பதில்: ${"ABCD"[q.a]}. ${q.o[q.a]}\n` +
            `📖 விளக்கம்: ${q.e}\n` +
            `📊 மதிப்பெண்: ${newScore}/${idx + 1}`
        });

        if (idx + 1 < total) {
          const next = QUESTIONS[idx + 1];
          await telegram(env, "sendMessage", {
            chat_id: chatId,
            text: `வினா ${idx + 2}/${total}\n\n${next.s}\n${next.q}`,
            reply_markup: {
              inline_keyboard: next.o.map((v, i) => [{
                text: `${"ABCD"[i]}. ${v}`,
                callback_data:
                  `ans|${idx + 1}|${newScore}|${i}|${total}`
              }])
            }
          });
        } else {
          await telegram(env, "sendMessage", {
            chat_id: chatId,
            text: `🏁 தேர்வு முடிந்தது!\n\nமதிப்பெண்: ${newScore}/${total}`
          });
        }
      } else if (
        choice === "mixed" ||
        choice === "daily" ||
        choice === "study"
      ) {
        const total = choice === "daily" ? 10 : 25;
        const first = QUESTIONS[0];

        await telegram(env, "sendMessage", {
          chat_id: chatId,
          text: `🎯 தேர்வு தொடங்குகிறது!\n\nவினா 1/${total}\n\n${first.s}\n${first.q}`,
          reply_markup: {
            inline_keyboard: first.o.map((v, i) => [{
              text: `${"ABCD"[i]}. ${v}`,
              callback_data: `ans|0|0|${i}|${total}`
            }])
          }
        });
      } else if (choice === "home") {
        await telegram(env, "sendMessage", menu(chatId));
      } else if (choice === "previous") {
        await telegram(env, "sendMessage", {
          chat_id: chatId,
          text: "சரிபார்க்கப்பட்ட முந்தைய ஆண்டு வினாக்கள் இன்னும் சேர்க்கப்படவில்லை."
        });
      } else {
        await telegram(env, "sendMessage", {
          chat_id: chatId,
          text: "இந்த வசதி அடுத்த கட்டத்தில் இணைக்கப்படும்."
        });
      }

    }

    return new Response("OK");
  }
};

export { QUESTIONS };
