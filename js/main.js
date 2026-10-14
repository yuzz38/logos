/* LOGOS — мини-отель в Аршане. Без зависимостей. */
(function () {
  'use strict';

  var PHONE_WA = '79339992888';

  /* ---------- ДАННЫЕ ---------- */
  var ROOMS = [
    {
      id: 'lux2',
      tag: '2 этаж · 2 номера',
      label: 'Двухместный номер',
      title: 'Двухместный Люкс с кроватью king-size и видом на горы',
      short: 'Двухместный Люкс king-size',
      price: 12000,
      guests: 'до 2 гостей',
      area: '26 м²',
      floor: '2 этаж',
      perks: ['2 балкона с видом на горы', 'Камин JOTUL', 'Мебель ручной работы'],
      desc: 'Люкс с кроватью размера king-size на втором этаже. Каждый номер — один этаж коттеджа с отдельным входом.',
      room: ['два балкона с видом на горы', 'норвежский дровяной камин JOTUL', 'гонконгская мебель ручной работы', 'двуспальная кровать king-size', 'две прикроватные тумбы', 'два барных стула, барный стол', 'кресло, шкаф', 'тёплые полы', 'телевизор', 'Wi-Fi', 'мини-холодильник', 'чайная станция', 'посуда', 'утюг по запросу'],
      bath: ['душевая кабина с тропическим душем', 'халаты, полотенца, тапочки', 'уходовая косметика', 'туалетная парфюмерия', 'фен'],
      imgs: ['r2-1', 'r2-4', 'r2-2', 'r2-3', 'robe']
    },
    {
      id: 'lux3',
      tag: '1 этаж · 2 номера',
      label: 'Трёхместный номер',
      title: 'Трёхместный двухкомнатный Люкс',
      short: 'Трёхместный двухкомнатный Люкс',
      price: 13200,
      guests: 'до 3 гостей (2+1)',
      area: '26 м²',
      floor: '1 этаж',
      perks: ['Две комнаты', 'Камин JOTUL', 'Диван-кровать'],
      desc: 'Двухкомнатный Люкс на первом этаже. 2 основных и 1 дополнительное место. Каждый номер — один этаж коттеджа с отдельным входом.',
      room: ['норвежский дровяной камин JOTUL', 'двуспальная кровать', 'диван-кровать', 'кресло, стол, шкаф', 'тёплые полы', 'TV', 'Wi-Fi', 'мини-холодильник', 'чайная станция', 'посуда', 'утюг по запросу'],
      bath: ['душевая кабина', 'халаты, полотенца, тапочки', 'уходовая косметика', 'туалетная парфюмерия', 'фен'],
      imgs: ['r3-1', 'r3-3', 'r3-2', 'r3-6', 'r3-5']
    },
    {
      id: 'lux4',
      tag: '2 этаж · Улучшенный',
      label: 'Четырёхместный номер',
      title: 'Четырёхместный Улучшенный Люкс с кроватью king-size',
      short: 'Четырёхместный Люкс king-size',
      price: 15200,
      guests: 'до 4 гостей (2+2)',
      area: '36 м²',
      floor: '2 этаж',
      perks: ['2 балкона с видом на Саяны', 'Мансардные окна', 'Камин JOTUL'],
      desc: 'Улучшенный Люкс на втором этаже с мансардными окнами над душем и кроватью. 2 основных и 2 дополнительных места. Каждый номер — один этаж коттеджа с отдельным входом.',
      room: ['2 балкона с видом на горы Саяны', 'мансардные окна над душем и кроватью', 'норвежский дровяной камин JOTUL', 'шкаф, лестница, двери ручной работы', 'малайзийский спальный гарнитур', 'двуспальная кровать king-size', 'две прикроватные тумбы', 'два дивана-кровати VICONT', 'итальянские кресла COSTA BELLA', 'стол', 'тёплые полы', 'телевизор', 'Wi-Fi', 'мини-холодильник', 'чайная станция', 'посуда', 'утюг по запросу'],
      bath: ['душевая кабина с тропическим душем', 'халаты, полотенца, тапочки', 'уходовая косметика', 'туалетная парфюмерия', 'фен'],
      imgs: ['r4-1', 'r4-2', 'r4-3', 'r3-4', 'r4-5']
    },
    {
      id: 'lux4t',
      tag: '1 этаж · Своя терраса',
      label: 'Четырёхместный номер',
      title: 'Четырёхместный Улучшенный Люкс с террасой',
      short: 'Четырёхместный Люкс с террасой',
      price: 15200,
      guests: 'до 4 гостей (2+2)',
      area: '36 м²',
      floor: '1 этаж',
      perks: ['Собственная терраса', 'Smart TV', 'Барная стойка'],
      desc: 'Двухкомнатный Улучшенный Люкс с террасой на первом этаже. 2 основных и 2 дополнительных места. Каждый номер — один этаж коттеджа с отдельным входом и собственной террасой.',
      room: ['собственная терраса', 'двуспальная кровать', 'диван-кровать', 'три кресла, стол, шкаф', 'тёплые полы', 'телевизор SMART TV', 'Wi-Fi', 'барная стойка', 'мини-холодильник', 'чайная станция', 'посуда', 'утюг по запросу'],
      bath: ['душевая кабина с тропическим душем', 'халаты, полотенца, тапочки', 'уходовая косметика', 'туалетная парфюмерия', 'фен'],
      imgs: ['r4-2', 'r4-1', 'r3-4', 'r4-3', 'r4-5']
    }
  ];

  var SERVICES = [
    {
      id: 'banya',
      label: 'Баня на дровах',
      title: 'Русская баня',
      text: 'Печь Tulikivi, 250 кг камня, идеальный пар и комната отдыха с чаепитием.',
      priceFrom: 'от 4 000 ₽', unit: '/ час',
      book: 'Баня',
      meta: ['Печь Tulikivi', '250 кг камня', 'Комната отдыха'],
      desc: [
        'Знакомьтесь, наша парная с банной дровяной печью финского бренда Tulikivi в эксклюзивной обработке камня. Благодаря облицовке из талькомагнезита натуральный камень излучает мягкое и полезное ИК-тепло и обеспечивает в парной идеальный микроклимат.',
        'В печь мы закладываем 250 кг камня. Как результат — идеальный пар. Идеальные ощущения. Идеальный релакс.',
        'Интерьер комнаты отдыха приятно удивит дизайнерскими решениями, романтичной и тёплой обстановкой. А приятным дополнением станет чаепитие после парения.'
      ],
      listTitle: 'Банный набор для каждого гостя',
      list: ['банный халат', 'полотенца', 'тапочки', 'простынь', 'гигиенические принадлежности', 'ароматный веник', 'банная шапка', 'верхонка', 'чаепитие после парения'],
      prices: [['10:00 — 14:00', '4 000 ₽ / час'], ['14:00 — 23:00', '5 000 ₽ / час']],
      imgs: ['sauna1', 'sauna3', 'relax', 'banya-ext', 'banya-shower', 'banya-wc', 'sauna2']
    },
    {
      id: 'kupel',
      label: 'Японская баня',
      title: 'Купель-фурако',
      text: 'Горячая вода 38°C под открытым небом, красивая подсветка и вид на горы.',
      priceFrom: 'от 2 500 ₽', unit: '/ час',
      book: 'Купель-фурако',
      meta: ['38°C', 'До 4 человек', 'Подсветка'],
      desc: [
        'Фурако простыми словами — это японская баня: купель, наполненная горячей водой 38°C. У купели очень красивая подсветка, а значит потрясающие фото вам обеспечены.',
        'Современная купель не только создаёт атмосферу уюта и расслабления, но и приносит пользу: снимает стресс, улучшает сон, укрепляет иммунитет и помогает мышцам восстановиться после активного дня.',
        'Главное преимущество — вы сами решаете, когда и сколько наслаждаться купелью. Никаких ограничений, только ваш комфорт и свобода.'
      ],
      listTitle: 'Что важно знать',
      list: ['температура воды 38°C', 'рассчитана до 4 человек', 'безопасная и нескользящая', 'красивая подсветка', 'шикарный вид на горы', 'гостям отеля — 1 час в подарок'],
      prices: [['10:00 — 14:00', '2 500 ₽ / час'], ['14:00 — 23:00', '3 000 ₽ / час']],
      imgs: ['kupel', 'kupel2', 'kupel3', 'view']
    },
    {
      id: 'bbq',
      label: 'Беседка',
      title: 'Беседка с барбекю',
      text: 'Жарить мясо, поднимать бокал и вести беседы о прекрасном с видом на горы.',
      priceFrom: 'Бесплатно', unit: 'для гостей',
      book: 'Проживание',
      meta: ['Для гостей отеля', 'Гриль и мангал', 'Вечерняя подсветка'],
      desc: [
        'У нас вы можете удобно устроиться в беседке с барбекю — жарить мясо, поднимать бокал и вести беседы о прекрасном в живописном месте с видом на горы.',
        'Мангальная зона оснащена всем необходимым, а вечером беседка утопает в тёплом свете гирлянд — очень романтично посидеть у огня.'
      ],
      listTitle: 'В беседке',
      list: ['мангал и гриль', 'большой стол со скамьями', 'гирлянды и подсветка', 'вид на горы и сосны'],
      prices: [],
      imgs: ['bbq2', 'bbq', 'view']
    }
  ];

  var REVIEWS = [
    { n: 'Виктория', d: 'июнь 2026', t: 'Самый красивый и комфортный отель в Аршане, шикарная архитектура, которая гармонирует с горным ландшафтом, потрясающий номер — рассматривали каждый уголок, очень интересный дизайн, всё продумано. Жили в двухместном номере на 2 этаже, в номере два видовых балкона, каждое утро проводили именно там с чашечкой кофе. В номере настоящий дровяной камин, вокруг лес, поют птички, слышно речку и все звуки природы — просто мёд для ушей. В стоимость проживания входила горячая купель, большая беседка с мангалом. С большим удовольствием возвращались в отель после прогулки, очень не хотелось уезжать!' },
    { n: 'Лилия Вертешонок', d: '30 августа 2026', t: 'Это лучшее место отдыха в Аршане! Теперь если в Аршан, то только в Логос. Тишина (мы особенно её ценим после городского шума и суеты), горы, гуси и баня. Номер уютный и продуманный до мелочей! Баня волшебная! Полный релакс! Мы были всего сутки, но ощущение такое, как будто полностью перезагрузились и обновились.' },
    { n: 'Евгения Гатапова', d: '16 июля 2026', t: 'Останавливались в отеле Logos — и остались в полном восторге! Вид из окна — отдельная любовь: прямо на горы! Каждое утро начиналось с этого потрясающего пейзажа — сразу хочется дышать глубже и радоваться жизни. Отель полностью оправдывает свою цену: всё сделано качественно и надёжно, чувствуется, что продумана каждая деталь. Обязательно вернёмся сюда снова!' },
    { n: 'Руфина Нитежук', d: '13 июля 2026', t: 'Приезжали двумя семьями, с детьми и младенцем. Отель понравился во всём, отлично отдохнули. Здесь тихий, спокойный отдых. В номерах есть всё необходимое, ванная укомплектована всем — от ушных палочек до фена, полотенца, халаты, тапочки. В нашем номере был атмосферный камин на дровах, для друзей предоставили детскую кроватку. На территории замечательная баня, всё продуманно до мелочей. Комплиментом от отеля нам была предоставлена купель на 2 часа. Всё идеально ухожено и очень чисто. Обязательно к вам вернёмся ещё!' },
    { n: 'Анастасия Тутунина', d: '26 апреля 2026', t: 'Прекрасное душевное место! Номер чистый, красивый, ухоженный. Есть всё необходимое: фен, посуда, маленький холодильник, чайник, чай и маленькие шоколадки в качестве комплимента. Особенно нам с детьми понравился камин — коротали вечер под треск костра, пока за окном шёл дождь. Классно было наблюдать за погодой в мансардные окна. Впечатлила также баня: красиво, чисто, качественно. Вкусный чай (молочный улун), вода и сушки.' },
    { n: 'Иван Меньшов', d: '13 июня 2026', t: 'Приезжаем уже не в первый раз: очень красивый дизайн домов, есть зоны отдыха, банька с купелями просто топ, каждая зона и дома в подсветке, вечером очень романтично посидеть у костра. Хорошее месторасположение — 10 минут пешком по живописной тропе вдоль Кынгарги до монгольского рынка. Одно из наших любимых мест для отдыха.' },
    { n: 'Наталья Морозова', d: '27 июня 2026', t: 'Отель оправдывает свою цену полностью. Прекрасно оформленные номера, потрясающие виды, балкончики, где можно пить чай, глядя на горы, ухоженная территория, продуманное наполнение — шкаф, халаты, тапочки, уходовая косметика, хорошее бельё. Легко рекомендую, уверена, что в следующий приезд остановлюсь снова здесь и гостей буду привозить сюда.' },
    { n: 'Евгений Таиров', d: '3 мая 2026', t: 'Замечательное уютное место с красивейшим видом на горы! Продуманная концепция, находящаяся в стадии дальнейшего развития. Максим с семьёй создали прекрасную атмосферу для спокойного отдыха от шума цивилизации! Номера полностью наполнены всем необходимым! Обязательно вернёмся и всем рекомендуем!' },
    { n: 'Андрей Карлин', d: '7 сентября 2026', t: 'Шикарное место на Земле. Комфорт и красота. Номера люкс. Баня, камин. Зона барбекю. Чай. Спасибо за гостеприимство!' },
    { n: 'Вячеслав Тихонов', d: '1 августа 2026', t: 'Очень хороший сервис, номера укомплектованы всем необходимым. Тишина, гости ценят уют и покой.' },
    { n: 'Зефир Play', d: '30 мая 2026 · 5 посещений', t: 'Отель понравился. Уютно, красиво. Обслуживание прекрасное. Рядом река. Вид на горы. Приедем снова.' },
    { n: 'Ольга Кондратьева', d: '23 июля 2026', t: 'Приятное место, замечательный номер, заботливый хозяин.' }
  ];

  /* ---------- УТИЛИТЫ ---------- */
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var ICON = {
    user: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
    area: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3zM3 9h18M9 21V9"/></svg>',
    floor: '<svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    prev: '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>',
    next: '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>'
  };
  function slidesHTML(imgs, alt) {
    return imgs.map(function (k, i) {
      return '<div class="slider__slide"><img src="img/' + k + '.jpg" alt="' + esc(alt) + ' — фото ' + (i + 1) + '" loading="lazy" draggable="false"></div>';
    }).join('');
  }

  /* ---------- СЛАЙДЕР (touch / mouse / клавиатура) ---------- */
  function Slider(root) {
    this.root = root;
    this.viewport = $('.slider__viewport', root);
    this.track = $('.slider__track', root);
    this.prevBtn = $('.slider__arrow--prev', root);
    this.nextBtn = $('.slider__arrow--next', root);
    this.dotsWrap = $('.slider__dots', root);
    var pv = (root.getAttribute('data-pv') || '1,1,1').split(',').map(Number);
    this.pvs = pv;
    this.gap = Number(root.getAttribute('data-gap') || 0);
    this.index = 0;
    this.bind();
    this.refresh();
  }
  Slider.prototype.perView = function () {
    var w = window.innerWidth;
    return w >= 1024 ? this.pvs[2] : (w >= 700 ? this.pvs[1] : this.pvs[0]);
  };
  Slider.prototype.refresh = function () {
    this.slides = $$('.slider__slide', this.track);
    this.pv = Math.min(this.perView(), this.slides.length || 1);
    this.max = Math.max(0, this.slides.length - this.pv);
    this.root.style.setProperty('--pv', this.pv);
    this.root.style.setProperty('--gap', this.gap + 'px');
    if (this.index > this.max) this.index = this.max;
    this.buildDots();
    this.go(this.index, true);
  };
  Slider.prototype.buildDots = function () {
    if (!this.dotsWrap) return;
    var html = '';
    for (var i = 0; i <= this.max; i++) html += '<button type="button" class="slider__dot" aria-label="Слайд ' + (i + 1) + '"></button>';
    this.dotsWrap.innerHTML = this.max > 0 ? html : '';
    var self = this;
    $$('.slider__dot', this.dotsWrap).forEach(function (d, i) {
      d.addEventListener('click', function (e) { e.stopPropagation(); self.go(i); });
    });
  };
  Slider.prototype.step = function () {
    var s = this.slides[0];
    return s ? s.getBoundingClientRect().width + this.gap : 0;
  };
  Slider.prototype.go = function (i, instant) {
    this.index = Math.max(0, Math.min(this.max, i));
    if (instant) this.track.classList.add('is-dragging');
    this.offset = -this.index * this.step();
    this.setX(this.offset);
    if (instant) { var t = this.track; t.offsetHeight; t.classList.remove('is-dragging'); }
    if (this.prevBtn) this.prevBtn.disabled = this.index === 0;
    if (this.nextBtn) this.nextBtn.disabled = this.index === this.max;
    var idx = this.index;
    if (this.dotsWrap) $$('.slider__dot', this.dotsWrap).forEach(function (d, k) { d.classList.toggle('is-active', k === idx); });
  };
  Slider.prototype.setX = function (x) {
    this.track.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
    this.track.style.transform = 'translate3d(' + x + 'px,0,0)';
  };
  Slider.prototype.bind = function () {
    var self = this;
    if (this.prevBtn) this.prevBtn.addEventListener('click', function (e) { e.stopPropagation(); self.go(self.index - 1); });
    if (this.nextBtn) this.nextBtn.addEventListener('click', function (e) { e.stopPropagation(); self.go(self.index + 1); });
    this.root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') self.go(self.index - 1);
      if (e.key === 'ArrowRight') self.go(self.index + 1);
    });

    var startX = 0, startY = 0, dx = 0, dragging = false, locked = null, moved = false;
    function start(x, y) { startX = x; startY = y; dx = 0; dragging = true; locked = null; moved = false; }
    function move(x, y, e) {
      if (!dragging) return;
      var mx = x - startX, my = y - startY;
      if (locked === null && (Math.abs(mx) > 6 || Math.abs(my) > 6)) locked = Math.abs(mx) > Math.abs(my) ? 'x' : 'y';
      if (locked !== 'x') return;
      if (e && e.cancelable) e.preventDefault();
      moved = true;
      dx = mx;
      if ((self.index === 0 && dx > 0) || (self.index === self.max && dx < 0)) dx = dx * 0.35;
      self.track.classList.add('is-dragging');
      self.setX(self.offset + dx);
    }
    function end() {
      if (!dragging) return;
      dragging = false;
      self.track.classList.remove('is-dragging');
      if (locked === 'x') {
        var th = Math.min(80, self.step() * 0.18);
        if (dx < -th) self.go(self.index + 1);
        else if (dx > th) self.go(self.index - 1);
        else self.go(self.index);
      }
    }
    // Touch (iOS/Android) — отдельно, чтобы preventDefault корректно блокировал скролл только при горизонтальном свайпе
    this.viewport.addEventListener('touchstart', function (e) { var t = e.touches[0]; start(t.clientX, t.clientY); }, { passive: true });
    this.viewport.addEventListener('touchmove', function (e) { var t = e.touches[0]; move(t.clientX, t.clientY, e); }, { passive: false });
    this.viewport.addEventListener('touchend', end);
    this.viewport.addEventListener('touchcancel', end);
    // Mouse
    this.viewport.addEventListener('mousedown', function (e) { if (e.button !== 0) return; e.preventDefault(); start(e.clientX, e.clientY); });
    window.addEventListener('mousemove', function (e) { if (dragging) move(e.clientX, e.clientY, null); });
    window.addEventListener('mouseup', end);
    // клик после перетаскивания не должен срабатывать
    this.viewport.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  };

  var sliders = [];
  function makeSlider(el) { var s = new Slider(el); sliders.push(s); return s; }

  /* ---------- РЕНДЕР: НОМЕРА ---------- */
  var roomsGrid = $('#roomsGrid');
  roomsGrid.innerHTML = ROOMS.map(function (r) {
    return '<article class="room reveal" data-room="' + r.id + '">' +
      '<div class="room__media"><span class="room__tag">' + r.tag + '</span>' +
        '<div class="slider" data-pv="1,1,1" data-gap="0">' +
          '<div class="slider__viewport"><div class="slider__track">' + slidesHTML(r.imgs, r.title) + '</div></div>' +
          '<button class="slider__arrow slider__arrow--prev slider__arrow--float" type="button" aria-label="Предыдущее фото">' + ICON.prev + '</button>' +
          '<button class="slider__arrow slider__arrow--next slider__arrow--float" type="button" aria-label="Следующее фото">' + ICON.next + '</button>' +
          '<div class="slider__dots slider__dots--float"></div>' +
        '</div></div>' +
      '<div class="room__body">' +
        '<h3 class="room__title">' + r.title + '</h3>' +
        '<div class="room__meta"><span>' + ICON.user + r.guests + '</span><span>' + ICON.area + r.area + '</span><span>' + ICON.floor + r.floor + '</span></div>' +
        '<ul class="room__perks">' + r.perks.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' +
        '<div class="room__foot">' +
          '<div class="room__price"><small>' + r.label + '</small>' + fmt(r.price) + ' ₽ <span>/ сутки</span></div>' +
          '<div class="room__btns"><button class="btn btn--line btn--sm js-room" type="button" data-id="' + r.id + '">Подробнее</button>' +
          '<button class="btn btn--dark btn--sm js-book" type="button" data-service="' + esc(r.short) + '">Бронь</button></div>' +
        '</div>' +
      '</div></article>';
  }).join('');
  $$('.room .slider').forEach(makeSlider);

  /* ---------- РЕНДЕР: УСЛУГИ ---------- */
  $('#servicesGrid').innerHTML = SERVICES.map(function (s) {
    return '<article class="service reveal">' +
      '<div class="service__img"><img src="img/' + s.imgs[0] + '.jpg" alt="' + esc(s.title) + '" loading="lazy"></div>' +
      '<div class="service__body">' +
        '<p class="service__label">' + s.label + '</p>' +
        '<h3 class="service__title">' + s.title + '</h3>' +
        '<p class="service__text">' + s.text + '</p>' +
        '<div class="service__foot"><div class="service__price">' + s.priceFrom + ' <span>' + s.unit + '</span></div>' +
        '<button class="service__more js-service" type="button" data-id="' + s.id + '">Подробнее ' + ICON.arrow + '</button></div>' +
      '</div></article>';
  }).join('');

  /* ---------- РЕНДЕР: ОТЗЫВЫ ---------- */
  var stars = '<div class="review__stars" aria-label="5 из 5">' + ICON.star + ICON.star + ICON.star + ICON.star + ICON.star + '</div>';
  $('#reviewsTrack').innerHTML = REVIEWS.map(function (r) {
    var ini = r.n.split(' ').map(function (w) { return w.charAt(0); }).slice(0, 2).join('').toUpperCase();
    return '<div class="slider__slide"><div class="review">' + stars +
      '<p class="review__text">' + esc(r.t) + '</p>' +
      '<button class="review__more" type="button">Читать полностью</button>' +
      '<div class="review__author"><span class="review__avatar">' + ini + '</span><div><div class="review__name">' + esc(r.n) + '</div><div class="review__date">' + r.d + '</div></div></div>' +
      '</div></div>';
  }).join('');
  var reviewsSlider = makeSlider($('#reviewsSlider'));
  function checkClamp() {
    $$('.review').forEach(function (rv) {
      var t = $('.review__text', rv), b = $('.review__more', rv);
      if (rv.classList.contains('is-open')) return;
      b.style.display = t.scrollHeight - t.clientHeight > 4 ? '' : 'none';
    });
  }
  $$('.review__more').forEach(function (b) {
    b.addEventListener('click', function () {
      var rv = b.closest('.review');
      var open = rv.classList.toggle('is-open');
      b.textContent = open ? 'Свернуть' : 'Читать полностью';
    });
  });

  /* ---------- МОДАЛКИ ---------- */
  var scrollY = 0, openModal = null, lastFocus = null;
  function lock() {
    scrollY = window.pageYOffset;
    document.body.style.top = -scrollY + 'px';
    document.body.classList.add('is-locked');
  }
  function unlock() {
    document.body.classList.remove('is-locked');
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
  }
  function showModal(m) {
    if (openModal) hideModal(openModal, true);
    lastFocus = document.activeElement;
    m.hidden = false;
    if (!$('.nav.is-open')) lock();
    requestAnimationFrame(function () { requestAnimationFrame(function () { m.classList.add('is-open'); }); });
    openModal = m;
    setTimeout(function () { var c = $('.modal__close', m); if (c) c.focus({ preventScroll: true }); }, 60);
  }
  function hideModal(m, quick) {
    m.classList.remove('is-open');
    openModal = null;
    var done = function () { m.hidden = true; };
    if (quick) done(); else setTimeout(done, 380);
    if (!quick) { unlock(); if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true }); }
  }
  $$('.modal').forEach(function (m) {
    m.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) hideModal(m); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && openModal) hideModal(openModal); });

  var detailModal = $('#detailModal');
  var detailSliderEl = $('#detailSlider');
  var detailSlider = null;
  function list(items) { return '<ul class="detail__list">' + items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>'; }
  function openDetail(item, kind) {
    $('.slider__track', detailSliderEl).innerHTML = slidesHTML(item.imgs, item.title);
    var html = '<p class="detail__label">' + item.label + '</p><h3 class="detail__title" id="detailTitle">' + item.title + '</h3>';
    if (kind === 'room') {
      html += '<div class="detail__meta"><span>' + item.guests + '</span><span>' + item.area + '</span><span>' + item.floor + '</span><span>Отдельный вход</span></div>' +
        '<p class="detail__desc">' + item.desc + '</p>' +
        '<h4 class="detail__h">В номере</h4>' + list(item.room) +
        '<h4 class="detail__h">В ванной комнате</h4>' + list(item.bath) +
        '<div class="detail__foot"><div class="detail__price"><small>за сутки</small>' + fmt(item.price) + ' ₽</div>' +
        '<button class="btn btn--gold js-book" type="button" data-service="' + esc(item.short) + '">Забронировать</button></div>';
    } else {
      html += '<div class="detail__meta">' + item.meta.map(function (m) { return '<span>' + m + '</span>'; }).join('') + '</div>' +
        item.desc.map(function (p) { return '<p class="detail__desc">' + p + '</p>'; }).join('') +
        '<h4 class="detail__h">' + item.listTitle + '</h4>' + list(item.list);
      if (item.prices.length) {
        html += '<h4 class="detail__h">Стоимость</h4>' + item.prices.map(function (p) {
          return '<div class="price__row"><span>' + p[0] + '</span><i></i><b style="font-size:22px">' + p[1] + '</b></div>';
        }).join('');
      }
      html += '<div class="detail__foot"><div class="detail__price"><small>' + item.unit.replace('/ ', 'за ') + '</small>' + item.priceFrom + '</div>' +
        '<button class="btn btn--gold js-book" type="button" data-service="' + esc(item.book) + '">Забронировать</button></div>';
    }
    $('#detailBody').innerHTML = html;
    $('#detailBody').scrollTop = 0;
    showModal(detailModal);
    requestAnimationFrame(function () {
      if (!detailSlider) detailSlider = makeSlider(detailSliderEl);
      detailSlider.index = 0;
      detailSlider.refresh();
    });
  }

  /* ---------- БРОНИРОВАНИЕ ---------- */
  var bookModal = $('#bookModal');
  var bookForm = $('#bookForm');
  var today = new Date();
  function iso(d) { var m = d.getMonth() + 1, day = d.getDate(); return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day; }
  bookForm.elements['in'].min = iso(today);
  bookForm.elements.out.min = iso(today);
  bookForm.elements['in'].addEventListener('change', function () {
    bookForm.elements.out.min = this.value;
    if (bookForm.elements.out.value && bookForm.elements.out.value <= this.value) bookForm.elements.out.value = '';
  });
  function openBook(service) {
    var sel = $('#bookService');
    if (service) {
      for (var i = 0; i < sel.options.length; i++) if (sel.options[i].text === service) sel.selectedIndex = i;
    }
    $('#bookError').textContent = '';
    showModal(bookModal);
  }
  // маска телефона
  var phone = bookForm.elements.phone;
  phone.addEventListener('input', function () {
    var d = phone.value.replace(/\D/g, '');
    if (!d) { phone.value = ''; return; }
    if (d[0] === '8') d = '7' + d.slice(1);
    if (d[0] !== '7') d = '7' + d;
    d = d.slice(0, 11);
    var r = '+7';
    if (d.length > 1) r += ' (' + d.slice(1, 4);
    if (d.length >= 4) r += ') ' + d.slice(4, 7);
    if (d.length >= 7) r += '-' + d.slice(7, 9);
    if (d.length >= 9) r += '-' + d.slice(9, 11);
    phone.value = r;
  });
  function rus(d) { if (!d) return ''; var p = d.split('-'); return p[2] + '.' + p[1] + '.' + p[0]; }
  bookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = bookForm.elements, err = $('#bookError');
    $$('.field', bookForm).forEach(function (x) { x.classList.remove('is-error'); });
    if (!f.name.value.trim()) { f.name.closest('.field').classList.add('is-error'); err.textContent = 'Укажите, пожалуйста, имя'; f.name.focus(); return; }
    if (f.phone.value.replace(/\D/g, '').length < 11) { f.phone.closest('.field').classList.add('is-error'); err.textContent = 'Проверьте номер телефона'; f.phone.focus(); return; }
    if (!f.agree.checked) { err.textContent = 'Нужно согласие на обработку данных'; return; }
    var lines = [
      'Здравствуйте! Хочу забронировать в Logos.',
      'Услуга: ' + f.service.value,
      f['in'].value ? 'Заезд: ' + rus(f['in'].value) : '',
      f.out.value ? 'Выезд: ' + rus(f.out.value) : '',
      'Гостей: ' + f.guests.value,
      'Имя: ' + f.name.value.trim(),
      'Телефон: ' + f.phone.value
    ].filter(Boolean).join('\n');
    var url = 'https://wa.me/' + PHONE_WA + '?text=' + encodeURIComponent(lines);
    var w = window.open(url, '_blank');
    if (!w) window.location.href = url;
    err.textContent = '';
    hideModal(bookModal);
  });

  /* ---------- ДЕЛЕГИРОВАНИЕ КЛИКОВ ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.js-book');
    if (b) { e.preventDefault(); closeMenu(); openBook(b.getAttribute('data-service')); return; }
    var r = e.target.closest('.js-room');
    if (r) { var room = ROOMS.filter(function (x) { return x.id === r.getAttribute('data-id'); })[0]; if (room) openDetail(room, 'room'); return; }
    var s = e.target.closest('.js-service');
    if (s) { var sv = SERVICES.filter(function (x) { return x.id === s.getAttribute('data-id'); })[0]; if (sv) openDetail(sv, 'service'); return; }
    // клик по фото номера тоже открывает детали
    var media = e.target.closest('.room__media .slider__viewport');
    if (media) { var id = media.closest('.room').getAttribute('data-room'); var rm = ROOMS.filter(function (x) { return x.id === id; })[0]; if (rm) openDetail(rm, 'room'); }
  });

  /* ---------- ШАПКА И БУРГЕР ---------- */
  var header = $('#header'), burger = $('#burger'), nav = $('#nav'), mobileBar = $('#mobileBar');
  function onScroll() {
    var y = window.pageYOffset;
    header.classList.toggle('is-scrolled', y > 40);
    mobileBar.classList.toggle('is-visible', y > window.innerHeight * 0.7);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  function closeMenu() {
    if (!nav.classList.contains('is-open')) return;
    nav.classList.remove('is-open');
    header.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
    unlock();
  }
  burger.addEventListener('click', function () {
    if (nav.classList.contains('is-open')) { closeMenu(); return; }
    lock();
    nav.classList.add('is-open');
    header.classList.add('menu-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Закрыть меню');
  });
  // плавный переход по якорям (учитывает блокировку прокрутки)
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2 && id !== '#') return;
      var target = id === '#top' || id === '#' ? document.body : $(id);
      if (!target) return;
      e.preventDefault();
      var wasOpen = nav.classList.contains('is-open');
      closeMenu();
      var go = function () {
        var top = id === '#top' ? 0 : target.getBoundingClientRect().top + window.pageYOffset - (header.offsetHeight - 4);
        window.scrollTo({ top: top, behavior: 'smooth' });
      };
      wasOpen ? setTimeout(go, 30) : go();
    });
  });
  window.addEventListener('resize', function () { if (window.innerWidth > 1024) closeMenu(); });

  /* ---------- ВИДЕО ---------- */
  var video = $('#banyaVideo'), soundBtn = $('#videoSound');
  if (video) {
    video.muted = true;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        en.forEach(function (x) {
          if (x.isIntersecting) { var p = video.play(); if (p && p.catch) p.catch(function () {}); }
          else video.pause();
        });
      }, { threshold: 0.35 }).observe(video);
    } else { video.play(); }
    soundBtn.addEventListener('click', function () {
      video.muted = !video.muted;
      soundBtn.classList.toggle('is-on', !video.muted);
      soundBtn.setAttribute('aria-label', video.muted ? 'Включить звук' : 'Выключить звук');
      var p = video.play(); if (p && p.catch) p.catch(function () {});
    });
  }

  /* ---------- ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ ---------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        if (x.isIntersecting) {
          var el = x.target, sib = el.parentNode ? $$('.reveal', el.parentNode).indexOf(el) : 0;
          el.style.transitionDelay = Math.min(sib, 5) * 70 + 'ms';
          el.classList.add('is-visible');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- RESIZE ---------- */
  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { sliders.forEach(function (s) { s.refresh(); }); checkClamp(); }, 150);
  });
  window.addEventListener('load', function () { sliders.forEach(function (s) { s.refresh(); }); checkClamp(); });
  checkClamp();

  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
