/* A layered, lightweight spring ecosystem. All artwork is native SVG. */
(() => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const svg = (body, view = '0 0 100 100') => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+view+'" aria-hidden="true">'+body+'</svg>';
  const wings = '<g class="spring-wings"><path d="M48 48C0 0 3 72 45 59C15 98 54 101 50 61M52 48C100 0 97 72 55 59C85 98 46 101 50 61" fill="var(--wing)" stroke="#456454" stroke-width="1.4"/><path d="M12 30L46 52M88 30L54 52M29 81L47 60M71 81L53 60" fill="none" stroke="#fff7cc" stroke-width="3"/></g><path d="M50 43v24m0-24l-9-11m9 11l9-11" stroke="#375343" stroke-width="3" stroke-linecap="round"/>';
  const insects = {
    butterfly: svg(wings),
    bee: svg('<g class="spring-wings" fill="#f4ffff" stroke="#71aaa0" stroke-width="1.4"><ellipse cx="38" cy="31" rx="14" ry="22" transform="rotate(-30 38 31)"/><ellipse cx="61" cy="31" rx="14" ry="22" transform="rotate(30 61 31)"/></g><ellipse cx="50" cy="57" rx="21" ry="29" fill="#f8c84e" stroke="#575137" stroke-width="2"/><path d="M31 48h38M30 62h40M36 75h28" stroke="#575137" stroke-width="7"/><circle cx="50" cy="29" r="12" fill="#575137"/><path d="M43 22l-6-10m20 10l6-10" stroke="#575137" stroke-width="2"/>'),
    dragonfly: svg('<g class="spring-wings" fill="#e5ffed" fill-opacity=".82" stroke="#508f8e" stroke-width="1.3"><ellipse cx="27" cy="34" rx="25" ry="8" transform="rotate(22 27 34)"/><ellipse cx="73" cy="34" rx="25" ry="8" transform="rotate(-22 73 34)"/><ellipse cx="28" cy="51" rx="24" ry="7" transform="rotate(-10 28 51)"/><ellipse cx="72" cy="51" rx="24" ry="7" transform="rotate(10 72 51)"/></g><path d="M50 29v59" stroke="#368d99" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="24" r="7" fill="#275d65"/>'),
    ladybird: svg('<path d="M29 40L17 29m13 28H12m22 14L20 84m51-44l12-11M70 57h18M66 71l14 13" stroke="#34493b" stroke-width="3"/><ellipse cx="50" cy="52" rx="28" ry="34" fill="#f07751" stroke="#34493b" stroke-width="2"/><path d="M50 20v65" stroke="#34493b" stroke-width="2"/><g fill="#34493b"><circle cx="50" cy="21" r="13"/><circle cx="36" cy="43" r="5"/><circle cx="63" cy="44" r="5"/><circle cx="37" cy="65" r="5"/><circle cx="64" cy="65" r="5"/></g>'),
    beetle: svg('<path d="M32 38L15 27m17 25L11 56m23 13L19 87m49-49l17-11M68 52l21 4M66 69l15 18M42 26L32 7m26 19L68 7" fill="none" stroke="#405746" stroke-width="3"/><ellipse cx="50" cy="57" rx="24" ry="32" fill="#5faaa0" stroke="#315c51" stroke-width="2"/><path d="M50 28v60" stroke="#d5e578" stroke-width="3"/><ellipse cx="50" cy="29" rx="16" ry="12" fill="#407b6d"/>')
  };
  const scene = document.createElement('div');
  scene.className = 'spring-scene';
  scene.setAttribute('aria-hidden', 'true');
  scene.innerHTML = '<div class="spring-sun"></div><div class="spring-rays"></div><div class="spring-cloud cloud-a"></div><div class="spring-cloud cloud-b"></div>' +
    svg('<path d="M0 230Q210 110 410 245T870 225T1440 200V700H0Z" fill="#b7dcb3"/><path d="M0 380Q280 180 600 320T1100 300T1440 350V700H0Z" fill="#91c7a0"/><path d="M0 480Q240 340 580 460T1100 395T1440 430V700H0Z" fill="#70b885"/><path d="M0 585Q400 425 760 555T1440 510V700H0Z" fill="#519c70"/><path d="M800 700Q720 550 880 465Q990 405 1065 396Q980 455 953 491Q849 570 1110 700" fill="#e1e9a4" opacity=".55"/>','0 0 1440 700');
  scene.querySelector('svg').classList.add('spring-hills');
  for (let i=0;i<30;i++) {
    const plant=document.createElement('div');
    plant.className='spring-plant';
    plant.style.cssText='left:'+(i*3.5-2)+'%;height:'+(90+(i*37)%130)+'px;--sway:'+(3+i%5)+'s;--delay:-'+i*.7+'s;--petal:'+['#fff9de','#f6b7ad','#ffe49a','#ccb5ec'][i%4];
    plant.innerHTML=svg('<path d="M50 110Q40 70 50 27" fill="none" stroke="#357351" stroke-width="3"/><path d="M48 80Q10 75 22 54Q44 58 48 80M48 66Q79 65 81 43Q57 45 48 66" fill="#65a567"/><g fill="var(--petal)"><ellipse cx="50" cy="13" rx="8" ry="14"/><ellipse cx="50" cy="39" rx="8" ry="14"/><ellipse cx="37" cy="26" rx="14" ry="8"/><ellipse cx="63" cy="26" rx="14" ry="8"/><circle cx="40" cy="16" r="9"/><circle cx="61" cy="36" r="9"/></g><circle cx="50" cy="26" r="7" fill="#eab745"/>','0 0 100 110');
    scene.append(plant);
  }
  const population=['butterfly','dragonfly','bee','butterfly','ladybird','butterfly','bee','dragonfly','beetle','butterfly','bee','butterfly','dragonfly','ladybird','butterfly','bee','beetle','butterfly'];
  population.forEach((kind,i)=>{
    const bug=document.createElement('div');
    bug.className='spring-bug spring-'+kind+(i>9?' spring-extra':'');
    const grounded=kind==='ladybird'||kind==='beetle';
    bug.style.cssText='left:'+(grounded?12+i*4:43+(i*17)%52)+'%;top:'+(grounded?82+i%3*4:15+(i*13)%53)+'%;--wing:'+['#f5bb68','#7fc5d7','#eca6b1','#e1c46e'][i%4]+';--flight:'+(12+i%6*3)+'s;--delay:-'+i*2.3+'s;--size:'+(kind==='dragonfly'?100:48+(i*11)%36)+'px;--direction:'+(i%2?'reverse':'normal');
    bug.innerHTML=insects[kind];scene.append(bug);
  });
  for(let i=0;i<16;i++){
    const seed=document.createElement('i');seed.className='spring-pollen';
    seed.style.cssText='left:'+(i*7%100)+'%;top:'+(12+i*11%80)+'%;--delay:-'+i+'s';
    scene.append(seed);
  }
  hero.prepend(scene);
  const intro=document.querySelector('#introScreen');
  if(intro) {
    intro.prepend(scene.cloneNode(true));
    const caption=intro.querySelector('.intro-caption');
    if(caption)caption.textContent='迎著陽光，讓每個聲音自在飛翔。';
  }
  const pause=document.createElement('button');
  pause.type='button';pause.className='spring-pause';pause.setAttribute('aria-pressed','false');
  pause.textContent='暫停自然動畫';
  pause.addEventListener('click',()=>{
    const paused=hero.classList.toggle('spring-paused');
    pause.setAttribute('aria-pressed',String(paused));
    pause.textContent=paused?'播放自然動畫':'暫停自然動畫';
  });
  hero.append(pause);
  if('IntersectionObserver' in window)new IntersectionObserver(entries=>{
    hero.classList.toggle('spring-offscreen',!entries[0].isIntersecting);
  }).observe(hero);
})();
