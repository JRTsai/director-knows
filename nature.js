(() => {
 const hero=document.querySelector('.hero');if(!hero)return;
 const scene=document.createElement('div');scene.className='spring-scene';scene.setAttribute('aria-hidden','true');
 scene.innerHTML='<div class="nature-photo"></div><div class="nature-light"></div>';
 for(let i=0;i<12;i++){
 const bug=document.createElement('span');bug.className='nature-flight';bug.style.cssText=`--x:${48+(i*19)%47}%;--y:${18+(i*13)%60}%;--mobile-y:${60+i*2}%;--size:${i%3===1?25:38+(i*7)%29}px;--duration:${18+i*2}s;--delay:-${i*3.7}s;--sprite:${[0,50,100][i%3]}%;`;bug.innerHTML='<i class="nature-insect"></i>';scene.append(bug);
 }
 for(let i=0;i<10;i++){const p=document.createElement('i');p.className='nature-pollen';p.style.cssText=`left:${i*17%100}%;top:${20+i*7}%;animation-delay:-${i*2}s`;scene.append(p);}
 hero.prepend(scene);const intro=document.getElementById('introScreen');if(intro){intro.prepend(scene.cloneNode(true));const c=intro.querySelector('.intro-caption');if(c)c.textContent='迎著陽光，讓每個聲音自在飛翔。';}
 const b=document.createElement('button');b.type='button';b.className='spring-pause';b.setAttribute('aria-pressed','false');hero.append(b);
 const label=()=>{const p=hero.classList.contains('spring-paused');b.textContent=document.documentElement.lang==='en'?(p?'Play nature animation':'Pause nature animation'):(p?'播放自然動畫':'暫停自然動畫');};
 b.addEventListener('click',()=>{b.setAttribute('aria-pressed',String(hero.classList.toggle('spring-paused')));label();});label();new MutationObserver(label).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 if('IntersectionObserver' in window)new IntersectionObserver(([e])=>hero.classList.toggle('spring-offscreen',!e.isIntersecting)).observe(hero);
})();
