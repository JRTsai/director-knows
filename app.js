const classes = ["統資一甲","統資一乙","統資二甲","統資二乙","統資三甲","統資三乙","統資四甲","統資四乙","碩研一","碩研二","碩專一","碩專二"];
const topics = ["課程學習","空間設備","系務活動","生涯發展","其他"];
const classInsects = {
  "統資一甲":{icon:"🐞",zh:"瓢蟲",en:"Ladybird"},
  "統資一乙":{icon:"🌈🪲",zh:"虹彩叩頭蟲",en:"Iridescent click beetle"},
  "統資二甲":{icon:"✨🪲",zh:"螢火蟲",en:"Firefly"},
  "統資二乙":{icon:"🪽𓆦",zh:"蜻蜓",en:"Dragonfly"},
  "統資三甲":{icon:"🦋",zh:"鳳蝶",en:"Swallowtail"},
  "統資三乙":{icon:"🌿𓆣",zh:"竹節蟲",en:"Stick insect"},
  "統資四甲":{icon:"📡🪲",zh:"天牛",en:"Longhorn beetle"},
  "統資四乙":{icon:"🍃⬡",zh:"椿象",en:"Stink bug"},
  "碩研一":{icon:"🎶🪲",zh:"蟬",en:"Cicada"},
  "碩研二":{icon:"🦗",zh:"蟋蟀",en:"Cricket"},
  "碩專一":{icon:"🦏🪲",zh:"獨角仙",en:"Rhinoceros beetle"},
  "碩專二":{icon:"🦌🪲",zh:"鍬形蟲",en:"Stag beetle"}
};
const seedVoices = [
  {id:1,className:"統資一甲",topic:"課程學習",title:"想要更多程式實作的時間",content:"如果每個統計概念都能搭配一個小型資料分析任務，應該會更容易知道方法何時派得上用場。",author:"匿名同學",date:"2026.09.11",likes:28},
  {id:2,className:"統資四乙",topic:"生涯發展",title:"能不能邀請不同產業的系友回來？",content:"除了科技業，也想認識在醫療、金融和政府部門工作的學長姐，了解不同職涯的真實樣貌。",author:"匿名同學",date:"2026.09.10",likes:45},
  {id:3,className:"碩研一",topic:"空間設備",title:"研究室需要一面可以討論的白板牆",content:"平常討論模型時大家會找空教室，如果有可自由使用的大型白板，合作會方便很多。",author:"DataMoth",date:"2026.09.09",likes:19},
  {id:4,className:"統資二甲",topic:"系務活動",title:"希望有跨年級的小型資料松",content:"可以用一天的時間組隊解一個校園資料問題，讓不同年級交流，也累積作品集。",author:"匿名同學",date:"2026.09.08",likes:52},
  {id:5,className:"統資三乙",topic:"課程學習",title:"課程地圖如果有修課路徑會更清楚",content:"希望依照資料科學、精算或研究所方向，提供不同的選課組合與先備能力建議。",author:"匿名同學",date:"2026.09.07",likes:34},
  {id:6,className:"統資一乙",topic:"其他",title:"謝謝助教願意留下來回答問題",content:"第一次學寫程式有點挫折，但每次下課都有人願意多解釋一次，真的幫助很大。",author:"一隻小瓢蟲",date:"2026.09.05",likes:61},
  {id:7,className:"碩研二",topic:"生涯發展",title:"希望論文寫作工作坊可以固定舉辦",content:"從文獻整理、圖表呈現到口頭報告，如果能分階段舉行，對準備投稿很有幫助。",author:"匿名同學",date:"2026.09.03",likes:23},
  {id:8,className:"統資三甲",topic:"空間設備",title:"系館公共空間可以增加插座",content:"分組討論時筆電很快沒電，桌邊若有安全的充電位置會方便許多。",author:"匿名同學",date:"2026.09.01",likes:39},
  {id:9,className:"統資二乙",topic:"系務活動",title:"期末成果可以辦成公開海報展",content:"讓低年級也能看到學長姐做過哪些題目，或許能找到未來的研究方向。",author:"匿名同學",date:"2026.08.28",likes:31},
  {id:10,className:"統資四甲",topic:"生涯發展",title:"實習資訊希望能集中整理",content:"目前資訊散落在不同群組，如果有固定頁面依產業與申請時間分類會更好找。",author:"匿名同學",date:"2026.08.25",likes:47}
];
const i18n = {
  zh:{brand:"主任，知道嗎！！",navVoices:"大家在說什麼",navClasses:"班級地圖",navAbout:"關於計畫",submitShort:"我要投稿",eyebrow:"統計資訊學系｜學生聲音計畫",heroLine1:"主任，",heroLine2:"知道嗎！！",heroLead:"每一個微小的聲音，都可能讓校園長出新的方向。留下觀察、分享故事，或提出一個值得實現的想法。",heroCta:"說出你的想法",browseCta:"先看看大家怎麼說",specimen:"COLLECTIVE VOICE",opinions:"則意見，仍在增加",listen:"傾聽",manifesto1:"一隻螢火蟲的光很小，",manifesto2:"但當許多光聚在一起，",manifesto3:"方向就會出現。",manifestoNote:"這裡不是單向公告欄，而是一處讓每個年級都能被聽見的公共空間。",voicesLabel:"聲音",voicesTitle:"大家在說什麼",live:"即時累積",entries:"則",byClass:"依班級",byTopic:"依主題",keywordTitle:"留言關鍵字文字雲",keywordLead:"關鍵字隨機排列成心型；依目前篩選的留言即時計數，文字越大代表出現越多次。",keywordEmpty:"目前沒有足夠的關鍵字可呈現。",empty:"這個分類還沒有留言，成為第一個投稿的人吧！",loadMore:"看更多聲音",ecosystem:"生態系",classesTitle:"十二個班級，一個共同棲地",classesLead:"點選班級，看見每一群人的關心與提案。",ctaEyebrow:"你的觀察，值得被看見",ctaTitle:"下一個改變，<br>也許就從一句話開始。",submitNow:"現在投稿",privacy:"可匿名投稿｜送出前可預覽｜請保持尊重與友善",footerText:"由統資系共同維護的學生聲音平台",guidelines:"社群守則",formTitle:"留下你的聲音",formClass:"你的班級",formTopic:"投稿主題",formTitleLabel:"一句話標題",formContent:"想說的話",anonymous:"匿名顯示",nickname:"顯示名稱",send:"送出投稿",all:"全部",voicesUnit:" 則聲音",thanks:"投稿已送出，謝謝你的聲音！",anonymousName:"匿名同學"},
  en:{brand:"Director, Did You Know?",navVoices:"What We Say",navClasses:"Class Map",navAbout:"About",submitShort:"Contribute",eyebrow:"STATISTICS & INFORMATION SCIENCE · STUDENT VOICES",heroLine1:"Director,",heroLine2:"Did You Know?",heroLead:"Every small voice can help our campus grow in a new direction. Share an observation, a story, or an idea worth bringing to life.",heroCta:"Share your idea",browseCta:"Explore student voices",specimen:"COLLECTIVE VOICE",opinions:"voices and counting",listen:"LISTEN",manifesto1:"One firefly casts a tiny light.",manifesto2:"When many lights gather,",manifesto3:"a direction appears.",manifestoNote:"This is more than a noticeboard. It is a shared space where every cohort can be heard.",voicesLabel:"VOICES",voicesTitle:"What everyone is saying",live:"Live total",entries:"voices",byClass:"Class",byTopic:"Topic",keywordTitle:"Comment keyword cloud",keywordLead:"Keywords are randomly arranged in a heart; larger words appear more often in the comments currently in view.",keywordEmpty:"There are not enough keywords to display yet.",empty:"No voice here yet. Be the first to contribute!",loadMore:"Explore more voices",ecosystem:"ECOSYSTEM",classesTitle:"Twelve classes, one shared habitat",classesLead:"Choose a class to discover what each community cares about.",ctaEyebrow:"YOUR OBSERVATION MATTERS",ctaTitle:"The next change<br>may begin with one sentence.",submitNow:"Contribute now",privacy:"Anonymous option · Preview before sending · Stay kind and respectful",footerText:"A student voice platform maintained by our department community",guidelines:"Community guide",formTitle:"Share your voice",formClass:"Your class",formTopic:"Topic",formTitleLabel:"A short headline",formContent:"What would you like to say?",anonymous:"Post anonymously",nickname:"Display name",send:"Send contribution",all:"All",voicesUnit:" voices",thanks:"Thank you — your voice has been added!",anonymousName:"Anonymous student"}
};
let state={lang:localStorage.getItem("director-lang")||"zh",className:"全部",topic:"全部",limit:6};
let userVoices=JSON.parse(localStorage.getItem("director-voices")||"[]");
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const allVoices=()=>[...userVoices,...seedVoices];
function renderFilters(){
  const make=(items,type)=>items.map(item=>`<button class="filter-chip ${state[type]===item?'active':''}" data-type="${type}" data-value="${item}">${item==="全部"?i18n[state.lang].all:item}</button>`).join("");
  $("#classFilters").innerHTML=make(["全部",...classes],"className");
  $("#topicFilters").innerHTML=make(["全部",...topics],"topic");
  $$(".filter-chip").forEach(btn=>btn.addEventListener("click",()=>{state[btn.dataset.type]=btn.dataset.value;state.limit=6;renderFilters();renderCards()}));
}
const stopWords=new Set("如果 每個 都能 一個 應該 更容 容易 知道 何時 用場 除了 也想 在 和 的 了解 不同 真實 目前 大家 可以 時間 讓 或 有 未來 對 很 需要 平常 自由 很多 使用 願意 一次 真的 從 到 分階段 舉行 準備 若 安全 位置 或許 如果 固定 依 與 更好 這個 那個 我們 你們 他們 自己 以及 因為 所以 但是 就是 還是 已經 沒有 希望 能夠 進行 提供 增加 學生 同學 老師 系上 主任 留言 投稿 問題 建議 事情 覺得 比較 一些 一下 這裡 那裡".split(" "));
function filteredVoices(){return allVoices().filter(v=>(state.className==="全部"||v.className===state.className)&&(state.topic==="全部"||v.topic===state.topic))}
function extractKeywords(voices){
  const text=voices.map(v=>`${v.title} ${v.content}`).join(" ").normalize("NFKC");
  let segments=[];
  if(Intl.Segmenter){segments=[...new Intl.Segmenter("zh-Hant",{granularity:"word"}).segment(text)].filter(s=>s.isWordLike).map(s=>s.segment)}
  else{segments=text.match(/[\p{Script=Han}]{2,6}|[A-Za-z]{2,}/gu)||[]}
  const counts=new Map();
  segments.map(w=>w.toLowerCase().trim()).filter(w=>w.length>1&&!stopWords.has(w)&&!/^[0-9]+$/.test(w)).forEach(w=>counts.set(w,(counts.get(w)||0)+1));
  return [...counts].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],"zh-Hant")).slice(0,20);
}
function shuffleWords(words){
  const shuffled=[...words];
  for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]]}
  return shuffled;
}
const heartSlots=[
  [29,17],[40,14],[60,14],[71,17],
  [20,29],[37,28],[63,28],[80,29],
  [18,43],[38,42],[62,42],[82,43],
  [25,56],[50,55],[75,56],
  [34,69],[66,69],
  [42,80],[58,80],[50,91]
];
function renderWordCloud(){
  const ranked=extractKeywords(filteredVoices()),cloud=$("#wordCloud"),empty=$("#wordCloudEmpty");cloud.innerHTML="";cloud.classList.remove("sis-cloud");cloud.classList.add("heart-cloud");empty.hidden=ranked.length>0;
  if(!ranked.length)return;
  const max=Math.max(...ranked.map(([,count])=>count)),min=Math.min(...ranked.map(([,count])=>count)),slots=shuffleWords(heartSlots);
  shuffleWords(ranked).forEach(([word,count],i)=>{const item=document.createElement("span"),ratio=max===min?.45:(count-min)/(max-min),slot=slots[i%slots.length];item.className="cloud-word";item.style.setProperty("--weight",(.85+ratio*1.65).toFixed(2));item.style.setProperty("--cloud-color",`var(--cloud-${i%5})`);item.style.setProperty("--x",`${slot[0]}%`);item.style.setProperty("--y",`${slot[1]}%`);item.textContent=word;const n=document.createElement("sup");n.textContent=count;item.append(n);item.title=`${word}：${count}`;item.setAttribute("aria-label",`${word}，出現 ${count} 次`);cloud.append(item)})
}
function renderCards(){
  const filtered=filteredVoices();
  const grid=$("#cardsGrid");grid.innerHTML="";
  filtered.slice(0,state.limit).forEach(v=>{
    const card=$("#cardTemplate").content.cloneNode(true);const article=card.querySelector("article");
    article.dataset.id=v.id;card.querySelector(".class-tag").textContent=`${classInsects[v.className].icon} ${v.className}`;card.querySelector(".topic-tag").textContent=v.topic;
    card.querySelector("h3").textContent=v.title;card.querySelector(".card-content").textContent=v.content;card.querySelector(".author").textContent=v.author;card.querySelector("time").textContent=v.date;
    const like=card.querySelector(".like-button"), liked=localStorage.getItem(`liked-${v.id}`)==="1";like.classList.toggle("liked",liked);like.firstChild.textContent=liked?"♥ ":"♡ ";like.querySelector("span").textContent=v.likes+(liked?1:0);
    like.addEventListener("click",()=>{const isLiked=like.classList.toggle("liked");localStorage.setItem(`liked-${v.id}`,isLiked?"1":"0");like.firstChild.textContent=isLiked?"♥ ":"♡ ";like.querySelector("span").textContent=v.likes+(isLiked?1:0)});grid.append(card);
  });
  $("#emptyState").hidden=filtered.length>0;$("#loadMore").hidden=state.limit>=filtered.length;renderWordCloud();
}
function renderHabitat(){
  $("#classHabitat").innerHTML=classes.map((c,i)=>{const bug=classInsects[c],name=bug[state.lang];return `<button class="class-cell" data-class="${c}"><em>${String(i+1).padStart(2,"0")}</em><b class="class-insect" aria-hidden="true">${bug.icon}</b><strong>${c}</strong><span class="insect-name">${name}</span><span>${allVoices().filter(v=>v.className===c).length}${i18n[state.lang].voicesUnit}</span><i aria-hidden="true"></i></button>`}).join("");
  $$(".class-cell").forEach(b=>b.addEventListener("click",()=>{state.className=b.dataset.class;state.topic="全部";renderFilters();renderCards();$("#voices").scrollIntoView()}));
}
function updateCount(){const n=seedVoices.length+userVoices.length;$("#heroCount").textContent=n;$("#voiceCount").textContent=n}
function applyLanguage(){
  document.documentElement.lang=state.lang==="zh"?"zh-Hant":"en";$("#langToggle").textContent=state.lang==="zh"?"EN":"中";
  $$('[data-i18n]').forEach(el=>{const value=i18n[state.lang][el.dataset.i18n];if(value!==undefined)el.innerHTML=value});
  localStorage.setItem("director-lang",state.lang);renderFilters();renderCards();renderHabitat();populateSelects();
}
function populateSelects(){
  const keepClass=$("#classSelect").value,keepTopic=$("#topicSelect").value;
  $("#classSelect").innerHTML=`<option value="">—</option>`+classes.map(c=>`<option>${c}</option>`).join("");
  $("#topicSelect").innerHTML=`<option value="">—</option>`+topics.map(c=>`<option>${c}</option>`).join("");
  $("#classSelect").value=keepClass;$("#topicSelect").value=keepTopic;
}
const dialog=$("#submitDialog");
$$('.open-submit').forEach(b=>b.addEventListener("click",()=>dialog.showModal()));
$("#closeDialog").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
$("#langToggle").addEventListener("click",()=>{state.lang=state.lang==="zh"?"en":"zh";applyLanguage()});
$("#menuToggle").addEventListener("click",e=>{const open=$(".site-header").classList.toggle("menu-open");e.currentTarget.setAttribute("aria-expanded",open)});
$("#loadMore").addEventListener("click",()=>{state.limit+=6;renderCards()});
$("textarea").addEventListener("input",e=>$("#charCount").textContent=e.target.value.length);
$("[name=anonymous]").addEventListener("change",e=>$("#nameField").hidden=e.target.checked);
$("#submissionForm").addEventListener("submit",e=>{
  e.preventDefault();const fd=new FormData(e.currentTarget);const now=new Date();
  userVoices.unshift({id:`u${Date.now()}`,className:fd.get("className"),topic:fd.get("topic"),title:fd.get("title").trim(),content:fd.get("content").trim(),author:fd.get("anonymous")?i18n[state.lang].anonymousName:(fd.get("author").trim()||i18n[state.lang].anonymousName),date:now.toLocaleDateString("zh-TW").replaceAll("/","."),likes:0});
  localStorage.setItem("director-voices",JSON.stringify(userVoices));$("#formMessage").textContent=i18n[state.lang].thanks;updateCount();renderCards();renderHabitat();
  setTimeout(()=>{dialog.close();e.currentTarget.reset();$("#nameField").hidden=true;$("#charCount").textContent="0";$("#formMessage").textContent=""},900);
});
applyLanguage();updateCount();
