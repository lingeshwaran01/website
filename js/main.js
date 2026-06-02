/* =========================================================
   YIXIN ALLOY — Shared site script
   Injects header + footer, handles nav, scroll, reveal,
   accordion, forms, hero video mute.
   Each page sets: <body data-page="home"> (home|about|products|
   product|industries|quality|resources|blog|contact)
   ========================================================= */
(function () {
  'use strict';

  var PAGE = document.body.getAttribute('data-page') || '';

  /* ---------- Languages (baked-in translations) ---------- */
  var LANGS = [
    { code: 'en',    label: 'English', short: 'EN',  flag: 'gb' },
    { code: 'zh-CN', label: '中文',    short: '中文', flag: 'cn' },
    { code: 'es',    label: 'Español', short: 'ES',  flag: 'es' }
  ];
  var DICT = window.YIXIN_I18N || {};

  function currentLang() {
    var l = localStorage.getItem('yixinLang');
    return (l && DICT[l]) ? l : 'en';
  }
  function t(key) {
    var lang = currentLang();
    var table = DICT[lang] || {};
    if (table[key] != null) return table[key];
    var en = DICT['en'] || {};
    return (en[key] != null) ? en[key] : key;
  }
  function applyI18n() {
    var lang = currentLang();
    document.documentElement.setAttribute('lang', lang === 'zh-CN' ? 'zh' : lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
  }
  function setLang(code) {
    if (!DICT[code]) code = 'en';
    if (code === currentLang()) return;
    localStorage.setItem('yixinLang', code);
    // Smooth, in-place switch — no page reload (no jerk)
    var body = document.body;
    body.classList.add('lang-switching');
    setTimeout(function () {
      renderChrome();
      body.classList.remove('lang-switching');
    }, 120);
  }
  window.YIXIN_t = t;
  window.YIXIN_setLang = setLang;

  var NAV = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'about.html', label: 'About Us', key: 'about' },
    { href: 'products.html', label: 'Products', key: 'products' },
    { href: 'grades.html', label: 'Grades', key: 'grades' },
    { href: 'industries.html', label: 'Industries', key: 'industries' },
    { href: 'quality.html', label: 'Quality', key: 'quality' },
    { href: 'resources.html', label: 'Resources', key: 'resources' },
    { href: 'blog.html', label: 'Blog', key: 'blog' },
    { href: 'contact.html', label: 'Contact', key: 'contact' }
  ];

  /* ---------- Header ---------- */
  function buildHeader() {
    var links = NAV.map(function (n) {
      var active = (n.key === PAGE || (PAGE === 'product' && n.key === 'grades')) ? ' class="active"' : '';
      return '<a href="' + n.href + '"' + active + '>' + t('nav.' + n.key) + '</a>';
    }).join('');

    var active = currentLang();
    var langBtns = LANGS.map(function (l) {
      var on = (l.code === active) ? ' lang-opt--active' : '';
      return '<button type="button" class="lang-opt' + on + '" data-lang="' + l.code + '" title="' + l.label + '">' +
               '<img src="https://flagcdn.com/' + l.flag + '.svg" alt="" class="lang-opt__flag" />' +
               '<span class="lang-opt__txt">' + l.short + '</span>' +
             '</button>';
    }).join('');
    var langSwitcher =
      '<div class="lang-switch" id="langSwitch" aria-label="Select language">' + langBtns + '</div>';

    return '' +
      '<div class="topbar"><div class="container topbar__inner">' +
        '<span class="topbar__item">' + t('topbar.iso') + '</span>' +
        '<span class="topbar__item">' + t('topbar.standards') + '</span>' +
        '<span class="topbar__item">' + t('topbar.mtc') + '</span>' +
        '<span class="topbar__item topbar__item--right">📞 +86 137 0610 2297 &nbsp;|&nbsp; ✉ jinyunhj@163.com</span>' +
        langSwitcher +
      '</div></div>' +
      '<header class="header" id="siteHeader"><div class="container header__inner">' +
        '<a href="index.html" class="brand">' +
          '<span class="brand__mark">YA</span>' +
          '<span class="brand__text"><strong>Danyang Yixin Alloy</strong><small>Co., Ltd · Nickel Alloy Specialist</small></span>' +
        '</a>' +
        '<nav class="nav" id="nav">' +
          '<div class="nav__links">' + links + '</div>' +
          '<a href="contact.html" class="btn btn--accent btn--sm nav__cta">' + t('cta.quote') + '</a>' +
        '</nav>' +
        '<button class="nav-toggle" id="navToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>' +
      '</div></header>';
  }

  /* ---------- Footer ---------- */
  function buildFooter() {
    return '' +
      '<footer class="footer">' +
        '<div class="container footer__grid">' +
          '<div class="footer__col footer__brand">' +
            '<a href="index.html" class="brand brand--light">' +
              '<span class="brand__mark">YA</span>' +
              '<span class="brand__text"><strong>Danyang Yixin Alloy</strong><small>Co., Ltd · Nickel Alloy Specialist</small></span>' +
            '</a>' +
            '<p>' + t('footer.tagline') + '</p>' +
            '<div class="footer__std">ASTM · AMS · AWS · BSI · GB/T · DIN · JIS · GOST · SS</div>' +
            '<div class="footer__social">' +
              '<a href="#" aria-label="LinkedIn">in</a>' +
              '<a href="#" aria-label="YouTube">▶</a>' +
              '<a href="#" aria-label="WeChat">✆</a>' +
              '<a href="mailto:jinyunhj@163.com" aria-label="Email">✉</a>' +
            '</div>' +
          '</div>' +
          '<div class="footer__col"><h4>' + t('footer.products') + '</h4>' +
            '<a href="product.html?grade=nickel-200">Nickel 200 Wire</a>' +
            '<a href="product.html?grade=nickel-201">Nickel 201 Wire</a>' +
            '<a href="product.html?grade=inconel-625">Inconel 625 (ERNiCrMo-3)</a>' +
            '<a href="product.html?grade=inconel-82">Inconel 82 (ERNiCr-3)</a>' +
            '<a href="product.html?grade=monel-400">Monel 400 Wire</a>' +
            '<a href="products.html">' + t('footer.allProducts') + '</a>' +
          '</div>' +
          '<div class="footer__col"><h4>' + t('footer.company') + '</h4>' +
            '<a href="about.html">' + t('footer.aboutUs') + '</a>' +
            '<a href="industries.html">' + t('footer.industries') + '</a>' +
            '<a href="quality.html">' + t('footer.quality') + '</a>' +
            '<a href="resources.html">' + t('footer.resources') + '</a>' +
            '<a href="blog.html">' + t('footer.blog') + '</a>' +
          '</div>' +
          '<div class="footer__col"><h4>' + t('footer.contactUs') + '</h4>' +
            '<p>📞 +86 137 0610 2297</p>' +
            '<p>☎ +86 0511-86451987</p>' +
            '<p>✉ jinyunhj@163.com</p>' +
            '<p>📍 Xifu Village, Lucheng Town, Danyang City, Jiangsu, China</p>' +
            '<a href="contact.html" class="btn btn--accent btn--sm">' + t('cta.quote') + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer__bottom"><div class="container footer__bottom-inner">' +
          '<span>© <span id="year"></span> Danyang Yixin Alloy Co., Ltd. ' + t('footer.rights') + '</span>' +
          '<span>' + t('footer.seo') + '</span>' +
        '</div></div>' +
      '</footer>';
  }

  /* ---------- Inject + chrome bindings ---------- */
  var headerMount = document.getElementById('site-header');
  var footerMount = document.getElementById('site-footer');
  var header = null;

  function bindChrome() {
    /* Language flag buttons */
    document.querySelectorAll('.lang-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var code = btn.getAttribute('data-lang');
        if (code === currentLang()) return;
        setLang(code);
      });
    });

    /* Mobile nav */
    var navToggle = document.getElementById('navToggle');
    var nav = document.getElementById('nav');
    if (navToggle && nav) {
      navToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        navToggle.classList.toggle('active');
      });
      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('open');
          navToggle.classList.remove('active');
        });
      });
    }

    /* Year */
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* Sticky header reference (scroll listener bound once below) */
    header = document.getElementById('siteHeader');
    onScroll();
  }

  function renderChrome() {
    if (headerMount) headerMount.innerHTML = buildHeader();
    if (footerMount) footerMount.innerHTML = buildFooter();
    applyI18n();      // translate page body content
    bindChrome();     // (re)bind header/footer interactions
  }

  /* Sticky header shadow — bound once, reads current header element */
  var onScroll = function () { if (header) header.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });

  renderChrome();

  /* ---------- Reveal on scroll ---------- */
  var revealTargets = document.querySelectorAll(
    '.section__head, .card, .feature, .industry-card, .split__media, .split__content, ' +
    '.spec-table, .table-wrap, .stat-card, .cert-badge, .resource-item, .accordion__item, ' +
    '.sizes, .form-card, .contact-info-card, .map-embed, .pill-list'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          setTimeout(function () { el.classList.add('visible'); }, (i % 4) * 70);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Hero video mute toggle ---------- */
  var muteBtn = document.getElementById('heroMute');
  var heroVideo = document.getElementById('heroVideo');
  if (muteBtn && heroVideo) {
    muteBtn.addEventListener('click', function () {
      heroVideo.muted = !heroVideo.muted;
      muteBtn.textContent = heroVideo.muted ? '🔇' : '🔊';
      if (!heroVideo.muted) heroVideo.play();
    });
  }

  /* ---------- Accordions ---------- */
  document.querySelectorAll('.accordion__head').forEach(function (head) {
    head.addEventListener('click', function () {
      var item = head.closest('.accordion__item');
      var body = item.querySelector('.accordion__body');
      var open = item.classList.toggle('open');
      body.style.maxHeight = open ? body.scrollHeight + 'px' : null;
    });
  });

  /* ---------- Forms ---------- */
  document.querySelectorAll('form[data-quote]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var success = form.querySelector('.form-success');
      if (success) { success.hidden = false; success.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      form.reset();
    });
  });

  /* ---------- Catalog / datasheet generator (printable → save as PDF) ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/&amp;/g, '&'); }

  function catalogStyles() {
    return '<style>' +
      '*{box-sizing:border-box;margin:0;padding:0;font-family:Arial,Helvetica,sans-serif}' +
      'body{color:#0F172A;padding:32px 40px;font-size:12px}' +
      '.ch{display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #1E66D0;padding-bottom:14px;margin-bottom:18px}' +
      '.ch h1{font-size:20px;color:#0F172A}.ch p{font-size:11px;color:#475569}' +
      '.brand{font-weight:800;color:#1E66D0;font-size:22px;letter-spacing:1px}' +
      '.grade{page-break-inside:avoid;border:1px solid #E2E8F0;border-radius:8px;padding:16px 18px;margin-bottom:16px}' +
      '.grade h2{font-size:15px;color:#1E66D0;margin-bottom:2px}' +
      '.grade .meta{font-size:10px;color:#64748B;margin-bottom:8px}' +
      '.grade p.ov{font-size:11px;color:#334155;margin-bottom:10px}' +
      'table{width:100%;border-collapse:collapse;margin-bottom:8px}' +
      'th,td{border:1px solid #E2E8F0;padding:4px 8px;text-align:left;font-size:10.5px}' +
      'th{background:#F1F5F9;color:#0F172A;width:55%}' +
      '.cols{display:flex;gap:14px}.cols>div{flex:1}' +
      'h4{font-size:11px;color:#0F172A;margin:6px 0 4px;text-transform:uppercase;letter-spacing:.5px}' +
      '.ft{margin-top:18px;border-top:1px solid #E2E8F0;padding-top:10px;font-size:10px;color:#64748B;text-align:center}' +
      '@media print{body{padding:0 10px}}' +
      '</style>';
  }

  function gradeBlock(p) {
    function rows(arr) { return arr.map(function (r) { return '<tr><th>' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td></tr>'; }).join(''); }
    return '<div class="grade">' +
      '<h2>' + esc(p.name) + '</h2>' +
      '<div class="meta">' + esc(p.category) + ' &nbsp;·&nbsp; ' + esc(p.aws) + ' &nbsp;·&nbsp; ' + esc(p.uns) + '</div>' +
      '<p class="ov">' + esc(p.overview) + '</p>' +
      '<div class="cols">' +
        '<div><h4>Chemical Composition (%)</h4><table>' + rows(p.chemistry) + '</table></div>' +
        '<div><h4>Mechanical Properties</h4><table>' + rows(p.mechanical) + '</table></div>' +
      '</div>' +
      '<h4>Applications</h4><div style="font-size:10.5px;color:#334155">' + p.applications.map(esc).join(' · ') + '</div>' +
      '</div>';
  }

  function openCatalog(slug) {
    var P = window.YIXIN_PRODUCTS;
    if (!P) { window.location.href = 'products.html'; return; }
    var keys = slug && P[slug] ? [slug] : Object.keys(P);
    var title = slug && P[slug] ? (P[slug].name + ' — Datasheet') : 'Nickel Alloy Product Catalog';
    var html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>YIXIN Alloy — ' + esc(title) + '</title>' +
      catalogStyles() + '</head><body>' +
      '<div class="ch"><div><h1>' + esc(title) + '</h1>' +
        '<p>Danyang Yixin Alloy Co., Ltd · Professional Nickel Alloy Provider · ISO 9001:2015</p></div>' +
        '<div class="brand">Danyang Yixin Alloy</div></div>' +
      keys.map(function (k) { return gradeBlock(P[k]); }).join('') +
      '<div class="ft">+86 137 0610 2297 · jinyunhj@163.com · Xifu Village, Lucheng Town, Danyang City, Jiangsu, China &nbsp;|&nbsp; ' +
        'Values are nominal/typical per AWS A5.14 / ASTM. Mill Test Certificate supplied per shipment.</div>' +
      '<scr' + 'ipt>window.onload=function(){setTimeout(function(){window.print();},300);}</scr' + 'ipt>' +
      '</body></html>';
    var w = window.open('', '_blank');
    if (!w) { alert('Please allow pop-ups to download the catalog.'); return; }
    w.document.open(); w.document.write(html); w.document.close();
  }

  /* Wire catalog/datasheet/download buttons */
  document.querySelectorAll('[data-catalog]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); openCatalog(el.getAttribute('data-grade') || ''); });
  });
  /* Resource "Download" links that have no real target */
  document.querySelectorAll('.resource-item[href="#"], a[href="#"][data-download]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); openCatalog(''); });
  });
  window.YIXIN_openCatalog = openCatalog;

  /* ---------- Blog read-more (opens a readable article) ---------- */
  document.querySelectorAll('.blog-card a[href="#"], .post a[href="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var card = link.closest('article') || link.parentElement;
      var titleEl = card.querySelector('h3, h2');
      var metaEl = card.querySelector('.blog-card__meta');
      var excerptEl = card.querySelector('p');
      var imgEl = card.querySelector('img');
      var title = titleEl ? titleEl.textContent.trim() : 'Article';
      var meta = metaEl ? metaEl.textContent.trim() : 'YIXIN Alloy';
      var excerpt = excerptEl ? excerptEl.textContent.trim() : '';
      var img = imgEl ? imgEl.getAttribute('src') : '';
      var body = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + title + ' — YIXIN Alloy</title>' +
        '<meta name="viewport" content="width=device-width, initial-scale=1">' +
        '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">' +
        '<style>body{font-family:Inter,Arial,sans-serif;color:#0F172A;max-width:760px;margin:0 auto;padding:40px 24px;line-height:1.75}' +
        '.tag{display:inline-block;background:#EAF1FC;color:#1E66D0;font-weight:700;font-size:.78rem;padding:6px 14px;border-radius:50px}' +
        'h1{font-size:2rem;margin:14px 0 8px;font-weight:800}.by{color:#64748B;font-size:.9rem;margin-bottom:24px}' +
        'img{width:100%;border-radius:14px;margin:18px 0}p{margin:14px 0;color:#334155}' +
        '.cta{display:inline-block;margin-top:24px;background:#1E66D0;color:#fff;padding:12px 26px;border-radius:8px;text-decoration:none;font-weight:600}' +
        '.back{display:inline-flex;align-items:center;gap:8px;color:#1E66D0;text-decoration:none;font-weight:600;font-size:.92rem;margin-bottom:22px;cursor:pointer}' +
        '.back svg{width:18px;height:18px}' +
        '.brand{font-weight:800;color:#1E66D0;letter-spacing:1px;margin-bottom:24px}</style></head><body>' +
        '<a class="back" href="javascript:window.close()" onclick="try{window.close();}catch(e){}; if(!window.closed){location.href=\'blog.html\';} return false;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>Back to Articles</a>' +
        '<div class="brand">Danyang Yixin Alloy</div>' +
        '<span class="tag">' + meta + '</span><h1>' + title + '</h1>' +
        '<div class="by">By YIXIN Alloy Technical Team · Danyang Yixin Alloy Co., Ltd</div>' +
        (img ? '<img src="' + img + '" alt="' + title + '">' : '') +
        '<p>' + excerpt + '</p>' +
        '<p>Our metallurgical and welding engineers work alongside EPC contractors, fabricators and OEMs to ' +
        'match the right nickel alloy to each service environment. From sour-service oil &amp; gas piping to ' +
        'high-temperature gas-turbine hardware, correct filler-metal selection, joint design and procedure ' +
        'qualification are critical to a sound, corrosion-resistant weld.</p>' +
        '<p>Every grade we supply is produced under an ISO 9001:2015 quality system and shipped with a full ' +
        'EN 10204 3.1 Mill Test Certificate documenting chemistry, mechanical properties and dimensional ' +
        'conformance — giving your procurement and QA teams complete traceability.</p>' +
        '<p>Need application-specific guidance for this topic? Our team is happy to advise on grade selection, ' +
        'welding parameters and documentation requirements for your project.</p>' +
        '<a class="cta" href="contact.html">Talk to an Engineer →</a>' +
        '</body></html>';
      var w = window.open('', '_blank');
      if (!w) { window.location.href = 'contact.html'; return; }
      w.document.open(); w.document.write(body); w.document.close();
    });
  });
})();
