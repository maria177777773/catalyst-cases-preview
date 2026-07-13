/* ===== Общая обвязка: шапка / футер / видео / тулбар ===== */
const TG_SVG='<svg viewBox="0 0 24 24" fill="none"><path d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9L18 6.3c.4-.3-.1-.5-.6-.2L7.3 12.7l-4.6-1.4c-1-.3-1-1 .2-1.5l17.9-6.9c.8-.3 1.5.2 1.1 1.4Z" fill="#229ED9"/></svg>';
const MAX_SVG='<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="7" fill="#111"/><path d="M6.6 16V8h2l2 3.2L12.6 8h2v8h-1.9v-4.8L10.9 14h-.6l-1.8-2.8V16H6.6Z" fill="#fff"/><circle cx="17.6" cy="7.4" r="2.1" fill="#0aba59"/></svg>';

function header(theme){
  const dark = theme==='dark';
  const logo = dark ? 'assets/logo-white.png' : 'assets/logo-black.png';
  return `<header class="hdr" style="${dark?'background:rgba(17,18,20,.85);border-color:#2a2c30':''}">
    <div class="container">
      <a href="index.html"><img class="logo" src="${logo}" alt="Каталист"></a>
      <nav class="nav" style="${dark?'color:#e7e9ec':''}">
        <a href="#">Тимбилдинги</a><a href="#">Корпоративные ивенты</a>
        <a href="#" style="color:var(--green)">Кейсы</a><a href="#">О нас</a><a href="#">Контакты</a>
      </nav>
      <div class="hdr-cta">
        <a class="msgr" href="#" title="Telegram">${TG_SVG}</a>
        <a class="msgr" href="#" title="Max">${MAX_SVG}</a>
        <a class="btn btn-green" href="#">Обсудить ивент</a>
      </div>
    </div>
  </header>`;
}

function footer(){
  return `<footer class="ftr"><div class="container">
    <div><img class="logo" src="assets/logo-white.png" alt="Каталист">
      <p style="max-width:320px;color:#9aa0a6">Ивент-агентство Каталист. Тимбилдинги и корпоративные ивенты, которые команды вспоминают годами.</p>
      <div style="display:flex;gap:12px;margin-top:16px">
        <a class="msgr" href="#" style="background:#1c1e22;border-color:#2a2c30">${TG_SVG}</a>
        <a class="msgr" href="#" style="background:#1c1e22;border-color:#2a2c30">${MAX_SVG}</a>
      </div>
    </div>
    <div><h4>Программы</h4><a href="#">Тимбилдинги</a><a href="#">Корпоративные ивенты</a><a href="#">AI-тимбилдинг</a><a href="#">Все кейсы</a></div>
    <div><h4>Контакты</h4><a href="#">+7 495 000-00-00</a><a href="#">hello@catalystrussia.ru</a><a href="#">Москва, Берсеневская наб.</a></div>
    <div class="fbot"><span>© Каталист, 2026</span><span>Более 4800 проектов · 16 наград</span></div>
  </div></footer>`;
}

/* видео: постер + play → воспроизведение с контролами */
function initVideos(root=document){
  root.querySelectorAll('.vframe').forEach(fr=>{
    const v=fr.querySelector('video'); if(!v) return;
    if(fr.dataset.hover!==undefined){ // превью-карточка: hover = muted loop
      v.muted=true; v.loop=true; v.playsInline=true; v.preload='none';
      fr.addEventListener('mouseenter',()=>{ if(!v.src && v.dataset.src){v.src=v.dataset.src;} v.play().catch(()=>{}); });
      fr.addEventListener('mouseleave',()=>{ v.pause(); });
      return;
    }
    fr.addEventListener('click',()=>{
      if(!v.src && v.dataset.src) v.src=v.dataset.src;
      v.controls=true; v.play().catch(()=>{});
      fr.querySelector('.play')?.style.setProperty('display','none');
    });
  });
}

/* тулбар публикации + крестик */
function toolbar(n){
  const key='case-variant-'+n;
  if(localStorage.getItem(key)==='deleted'){document.body.style.opacity='.25';}
  const bar=document.createElement('div');bar.className='vbar';
  bar.innerHTML=`<button class="vdel" title="Убрать из сравнения">✕ Скрыть</button>
                 <button class="vpub">🚀 Опубликовать V${n}</button>`;
  document.body.appendChild(bar);
  const toast=document.createElement('div');toast.className='toast';document.body.appendChild(toast);
  const show=t=>{toast.textContent=t;toast.classList.add('on');setTimeout(()=>toast.classList.remove('on'),1800);};
  bar.querySelector('.vpub').onclick=()=>{navigator.clipboard.writeText('Утверждаю V'+n+': кейс Гонки на плотах / InWave').then(()=>show('Скопировано: Утверждаю V'+n+' → вставь в чат (Cmd+V)'));};
  bar.querySelector('.vdel').onclick=()=>{localStorage.setItem(key,'deleted');show('Вариант V'+n+' скрыт');document.body.style.opacity='.25';};
}
document.addEventListener('DOMContentLoaded',()=>{
  const h=document.querySelector('[data-header]'); if(h) h.outerHTML=header(h.dataset.header);
  const f=document.querySelector('[data-footer]'); if(f) f.outerHTML=footer();
  initVideos();
  const n=document.body.dataset.variant; if(n) toolbar(n);
});
