    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(premature 장면 2는 일찍 태어난 아기). 이 장은 두 무리라 가운데 칸이 둘이다 — early · premature · late · overdue는 "약속 시각 깃발과 도착 점"(때), fast · swift · rapid · slow · gradual · sluggish는 "속도 바늘"(빠르기). 빠른 것과 이른 것이 다르다는 점을 칸 모양으로 갈랐다.
    const WORD = '형용사', BASE = '', FIRST = 'gradual', BASIC_B = '노트 장면';
    const FX = { early: [.2, 1400, 1600, .1, .4], premature: [.3, 1600, 1200, .1, .4], late: [.6, 500, 300, .12, .5], overdue: [.8, 400, 260, .12, .5], fast: [.15, 1800, 2600, .2, .3], swift: [.12, 2200, 2800, .18, .3], rapid: [.3, 1200, 2600, .15, .3], slow: [1, 400, 400, .08, .5], gradual: [1.2, 500, 900, .06, .5], sluggish: [1.2, 260, 200, .1, .5] };
    const ORDER = MIX(['early', 'premature', 'late', 'overdue', 'fast', 'swift', 'rapid', 'slow', 'gradual', 'sluggish']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const TM = { early: -.6, premature: -.9, late: .6, overdue: .9 };
    const SP = { fast: .85, swift: .9, rapid: .8, slow: .15, gradual: .3, sluggish: .1 };
    const WHAT = { early: '정한 때보다 먼저', premature: '준비 전에 너무 일찍', late: '정한 때보다 나중', overdue: '기한을 넘김', fast: '움직임이 빠름', swift: '대응이 지체 없이', rapid: '변화 · 증가가 빠름', slow: '움직임이 느림', gradual: '조금씩 변함', sluggish: '반응이 둔함' };
    const TC = (id) => id in TM ? (TM[id] < 0 ? BL : RD) : (SP[id] > .5 ? OR : WT);
    const WHEN = (id) => { const v = TM[id], x = 62 + v * 44;
      return l('M14 130 h96', 4, '#999') + l('M62 130 v-50', 3, '#222') + f('M62 80 h24 l-6 7 l6 7 h-24 z', RD) + t(62, 150, 11, '약속', '#888') +
        '<circle cx="' + x + '" cy="130" r="9" fill="' + TC(id) + '" stroke="#222" stroke-width="2"/>' + (id === 'premature' ? t(x, 110, 11, '준비 전', BL) : '') + (id === 'overdue' ? t(x, 110, 11, '기한 지남', RD) : '') +
        t(62, 226, 12, v < 0 ? '먼저 옴 (때)' : '나중에 옴 (때)', TC(id)); };
    const HOW = (id) => { const v = SP[id], a = Math.PI * (1 - v), x = 62 + 40 * Math.cos(a), y = 160 - 40 * Math.sin(a);
      let s = '<path d="M14 160 A48 48 0 0 1 110 160" fill="none" stroke="#ddd" stroke-width="12"/>' + l('M62 160 L' + x + ' ' + y, 4, TC(id)) + '<circle cx="62" cy="160" r="5" fill="#222"/>';
      if (id === 'gradual') s += [0, 1, 2, 3].map((i) => f('M' + (24 + i * 20) + ' ' + (200 - i * 6) + ' h16 v' + (6 + i * 6) + ' h-16 z', GN)).join('');
      if (id === 'rapid') s += l('M24 210 l20 -6 l20 -14 l24 -26', 3, RD);
      if (id === 'sluggish') s += t(98, 120, 14, 'zz', '#888');
      if (id === 'swift') s += t(98, 112, 14, '⚡', GD);
      return s + t(62, 226, 12, v > .5 ? '바늘 오른쪽 (빠르기)' : '바늘 왼쪽 (빠르기)', TC(id)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + (id in TM ? WHEN(id) : HOW(id)) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 8 ? 13 : 16, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(id));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { early: P('early', '일찌감치'), premature: P('premature', '아직 일러'), late: P('late', '헐레벌떡'), overdue: P('overdue', '기한 초과'), fast: P('fast', '쌩'), swift: P('swift', '재빨리'), rapid: P('rapid', '쑥쑥'), slow: P('slow', '느릿느릿'), gradual: P('gradual', '차근차근'), sluggish: P('sluggish', '굼뜬') };
    // 작은 그림들
    const DOORC = (x) => BOXG(x, 80, 50, 158, '#c9a171') + '<circle cx="' + (x + 40) + '" cy="164" r="4"/>';
    const BOOKL = (x, y) => f('M' + (x - 22) + ' ' + (y - 30) + ' h44 v60 h-44 z', BL) + f('M' + (x - 16) + ' ' + (y - 20) + ' h32 v12 h-32 z', '#fff') + t(x, y - 11, 8, '반납일', RD);
    const CARF = (x, y, k, c) => g(x, y, 0, k || 1, f('M-60 0 v-22 l16 -18 h58 l20 18 h26 v22 z', c || RD) + '<circle cx="-34" cy="2" r="10" fill="#333"/><circle cx="34" cy="2" r="10" fill="#333"/>');
    const TURTLE = (x, y, k) => g(x, y, 0, k || 1, '<ellipse cy="-14" rx="26" ry="16" fill="' + GN + '" stroke="#222" stroke-width="3"/><circle cx="30" cy="-10" r="8" fill="#9ac47a" stroke="#222" stroke-width="2"/>');
    const CITY = (n) => Array.from({ length: n }, (_, i) => BOXG(10 + i * 18, 238 - 40 - (i % 3) * 30, 16, 40 + (i % 3) * 30, '#9aa8b8')).join('');
    const HAWK = (x, y) => f('M' + (x - 30) + ' ' + y + ' q20 -20 30 -6 q10 -14 30 6 q-20 -6 -30 6 q-10 -12 -30 -6 z', BR);
    const BABYB = (x, y) => f('M' + (x - 40) + ' ' + y + ' h80 v-30 h-80 z', '#cfe6f5', 2) + g(x, y - 10, 0, .35, HEAD('phew'));
    const C = {
      early: { n: 'early', past: 'early', en: 'You\'re early.', ko: '일찍 왔네.', feel: '<b>정한 때보다 먼저.</b> 빠르기가 아니다.', t: .2,
        p: [[150, '약속은 3시', () => CLK(75, 100, 34) + t(75, 170, 14, '2:40', BL)], [280, '약속보다 먼저', () => W.early()], [150, '"벌써 왔어?"', () => DOORC(90) + A(45, BL, 'smile', null, .6)]] },
      premature: { n: 'premature', past: 'premature', en: 'It\'s premature to celebrate.', ko: '축하하기엔 아직 이르다.', feel: '그냥 이른 게 아니라 <b>근거 · 준비가 갖춰지기 전</b>.', t: .3,
        p: [[150, '전반전 1 : 0', () => BOXG(20, 40, 110, 60, '#222') + t(75, 78, 20, '1 : 0', '#fff')], [280, '준비 전에 너무 일찍', () => W.premature()], [150, '"아직 몰라"', () => A(45, OR, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .55) + A(110, BL, 'stern', 'M-18 -92 L-40 -100', .55)]] },
      late: { n: 'late', past: 'late', en: 'You\'re late.', ko: '늦었네.', feel: '<b>정한 때보다 나중.</b> lately는 "요즘".', t: .6,
        p: [[150, '약속은 3시', () => CLK(75, 100, 34) + t(75, 170, 14, '3:30', RD)], [280, '약속보다 나중', () => W.late()], [150, '헐레벌떡', () => A(75, BL, 'phew', null, .8, 'M-10 -42 L-24 0 M10 -42 L22 0')]] },
      overdue: { n: 'overdue', past: 'overdue', en: 'The book is overdue.', ko: '그 책은 반납 기한이 지났다.', feel: '<b>기한을 넘겼다.</b> 느리다는 뜻이 아니다.', t: .8,
        p: [[150, '책상 위 도서관 책', () => BOOKL(75, 160)], [280, '기한을 넘김', () => W.overdue()], [150, '연체 문자', () => g(75, 130, 0, 2, PH) + t(75, 200, 12, '연체 3일', RD)]] },
      fast: { n: 'fast', past: 'fast', en: 'This car is fast.', ko: '이 차는 빠르다.', feel: '<b>움직임이 빠르다.</b> 부사도 fast.', t: .15,
        p: [[150, '경주장', () => l('M0 220 H150', 4, '#888') + CARF(75, 214, .9)], [280, '바늘 오른쪽', () => W.fast()], [150, '쌩', () => CARF(120, 214, .8) + l('M10 190 h40 M20 204 h40', 3, '#888')]] },
      swift: { n: 'swift', past: 'swift', en: 'The staff took swift action.', ko: '직원들이 재빨리 대응했다.', feel: '<b>행동 · 대응이 지체 없이.</b>', t: .12,
        p: [[150, '물이 샌다!', () => l('M75 40 v40', 4, WT) + '<ellipse cx="75" cy="200" rx="40" ry="10" fill="#8fd0ee"/>'], [280, '대응이 지체 없이', () => W.swift()], [150, '바로 막는다', () => A(45, BL, 'stern', 'M18 -92 L46 -100', .6) + A(105, OR, 'stern', 'M-18 -92 L-46 -100', .6)]] },
      rapid: { n: 'rapid', past: 'rapid', en: 'The city saw rapid growth.', ko: '그 도시는 빠르게 성장했다.', feel: '<b>변화 · 증가가 빠르다.</b>', t: .3,
        p: [[150, '10년 전', () => CITY(3)], [280, '변화가 빠름', () => W.rapid()], [150, '지금', () => CITY(8)]] },
      slow: { n: 'slow', past: 'slow', en: 'This car is slow.', ko: '이 차는 느리다.', feel: '<b>움직임이 느리다.</b> 늦게 온 것과 다르다.', t: 1,
        p: [[150, '오래된 차', () => l('M0 220 H150', 4, '#888') + CARF(75, 214, .9, '#9a8a7a')], [280, '바늘 왼쪽', () => W.slow()], [150, '자전거가 앞지른다', () => CARF(40, 214, .6, '#9a8a7a') + BIKE(110, 214, .5)]] },
      gradual: { n: 'gradual', past: 'gradual', en: 'Her progress was gradual.', ko: '그녀의 실력은 조금씩 늘었다.', feel: '<b>단계적으로 서서히.</b> 나쁜 느림이 아니다.', t: 1.2,
        p: [[150, '피아노 첫 달', () => f('M20 160 h110 v20 h-110 z', '#222') + A(75, MN, 'stern', null, .5)], [280, '조금씩 변함', () => W.gradual()], [150, '일 년 뒤 연주회', () => DARK(150, '#2b1d26') + A(75, MN, 'smile', null, .7) + t(124, 50, 18, '♪', GD)]] },
      sluggish: { n: 'sluggish', past: 'sluggish', en: 'My laptop feels sluggish.', ko: '내 노트북이 굼뜨다.', feel: '<b>반응이 기대보다 둔하다.</b> 몸 · 시장에도.', t: 1.2,
        p: [[150, '클릭!', () => f('M30 100 h90 v60 h-90 z', '#555') + f('M36 106 h78 v48 h-78 z', '#8fd0ee') + '<circle cx="75" cy="130" r="10" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="10 6"/>'], [280, '반응이 둔함', () => W.sluggish()], [150, '…아직도 로딩', () => CLK(110, 50, 20) + A(60, BL, 'down', null, .7)]] }
    };
    const MORE = {
      early: [
        { b: '기차', en: 'I took an early train.', ko: '이른 기차를 탔다.', feel: '하루 중 <b>이른 때.</b>', p: [[150, '새벽 역', () => DARK(150, '#2b3550') + MOON(110, 40, .5)], [280, '먼저', () => W.early()], [150, '텅 빈 객차', () => BOXG(20, 100, 110, 80, '#cfe6f5') + A(75, BL, 'phew', null, .4)]] },
        { b: '봄', en: 'It\'s early spring.', ko: '이른 봄이다.', feel: '계절의 <b>앞부분.</b>', p: [[150, '녹는 눈', () => f('M0 200 H150 V240 H0 z', '#fff') + l('M40 200 v-14 M80 200 v-10', 3, GN)], [280, '앞부분', () => W.early()], [150, '첫 꽃', () => l('M75 238 v-30', 3, GN) + '<circle cx="75" cy="204" r="8" fill="#f4c6d0"/>' + A(30, MN, 'smile', null, .4)]] }],
      premature: [
        { b: '아기', en: 'The baby was premature.', ko: '아기는 일찍 태어났다.', feel: '<b>준비가 다 되기 전에</b> 나왔다.', p: [[150, '예정일 한 달 전', () => CLK(75, 100, 34) + t(75, 170, 14, '-30일', RD)], [280, '준비 전에 일찍', () => W.premature(BABYB(196, 170))], [150, '건강하게 자란다', () => BABYB(75, 210) + t(75, 140, 18, '♥', RD)]] },
        { b: '판단', en: 'It\'s premature to judge him.', ko: '그를 판단하기엔 아직 이르다.', feel: '근거가 <b>모이기 전에</b> 너무 일찍.', p: [[150, '첫 출근 실수', () => A(75, BR, 'phew', null, .8)], [280, '근거 모이기 전', () => W.premature()], [150, '"좀 더 지켜보자"', () => A(75, '#888', 'calm', 'M18 -92 L40 -110', .8)]] }],
      late: [
        { b: '버스', en: 'The bus is late.', ko: '버스가 늦다.', feel: '<b>정한 때보다 나중.</b>', p: [[150, '정류장', () => f('M60 120 h30 v100 h-30 z', '#cfe6f5') + A(110, MN, 'calm', null, .5)], [280, '나중', () => W.late()], [150, '20분 뒤 도착', () => BUS(-10, 220, .6) + CLK(120, 40, 18)]] },
        { b: '밤', en: 'It\'s late. Let\'s go home.', ko: '늦었어. 집에 가자.', feel: '하루의 <b>뒷부분.</b>', p: [[150, '자정', () => DARK(150, '#1b1d26') + MOON(110, 40, .5) + CLK(50, 60, 20)], [280, '나중', () => W.late()], [150, '집으로', () => DARK(150, '#1b1d26') + A(50, MN, 'down', null, .55) + A(100, BL, 'down', null, .55)]] }],
      overdue: [
        { b: '월세', en: 'The rent is overdue.', ko: '월세가 밀렸다.', feel: '<b>기한</b>을 넘겼다.', p: [[150, '달력의 빨간 동그라미', () => BOXG(30, 40, 90, 90, '#fff') + '<circle cx="90" cy="80" r="10" fill="none" stroke="' + RD + '" stroke-width="3"/>'], [280, '기한을 넘김', () => W.overdue()], [150, '집주인 노크', () => DOORC(90) + t(60, 60, 16, '똑똑', '#888')]] },
        { b: '사과', en: 'An apology is long overdue.', ko: '사과는 진작 했어야 했다.', feel: '해야 할 말도 <b>기한을 넘겼다.</b>', p: [[150, '1년 전 다툼', () => A(40, BL, 'stern', null, .55) + A(110, OR, 'stern', null, .55)], [280, '기한을 넘김', () => W.overdue(t(196, 146, 18, '"미안해"', BL))], [150, '드디어 악수', () => A(50, BL, 'smile', 'M20 -90 L40 -70', .6) + A(100, OR, 'smile', 'M-20 -90 L-40 -70', .6)]] }],
      fast: [
        { b: '인터넷', en: 'The internet is fast here.', ko: '여긴 인터넷이 빠르다.', feel: '움직임이 <b>빠르다.</b>', p: [[150, '영상 재생', () => g(75, 130, 0, 2, PH)], [280, '바늘 오른쪽', () => W.fast()], [150, '바로 재생', () => A(75, MN, 'smile', 'M18 -92 L22 -126', .8)]] },
        { b: '배움', en: 'She is a fast learner.', ko: '그녀는 빨리 배운다.', feel: '배우는 속도가 <b>빠르다.</b>', p: [[150, '첫 체스 수업', () => BOXG(30, 80, 90, 90, '#e9e0c8')], [280, '바늘 오른쪽', () => W.fast()], [150, '선생님을 이겼다', () => A(45, MN, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .55) + A(110, BR, 'shock', null, .55)]] }],
      swift: [
        { b: '답장', en: 'Thanks for your swift reply.', ko: '재빠른 답장 고마워요.', feel: '대응이 <b>지체 없다.</b>', p: [[150, '메일 보냄', () => ENV(75, 120, 1.4)], [280, '대응이 지체 없이', () => W.swift()], [150, '1분 뒤 답장', () => ENV(75, 120, 1.4) + t(75, 190, 14, '1분', GN)]] },
        { b: '매', en: 'The hawk made a swift dive.', ko: '매가 재빠르게 내리꽂았다.', feel: '움직임이 <b>순식간</b>이다.', p: [[150, '하늘 높이', () => DARK(150, '#cfe6f5') + HAWK(75, 60)], [280, '지체 없이', () => W.swift(HAWK(196, 140))], [150, '쉭', () => DARK(150, '#cfe6f5') + g(75, 180, 60, 1, HAWK(0, 0)) + l('M40 60 l30 80', 2, '#888')]] }],
      rapid: [
        { b: '물살', en: 'The river has rapid currents.', ko: '그 강은 물살이 빠르다.', feel: '흐름이 <b>빠르다.</b>', p: [[150, '계곡', () => f('M0 160 q20 -10 40 0 t40 0 t40 0 t40 0 V240 H0 z', '#4a7fb5')], [280, '흐름이 빠름', () => W.rapid()], [150, '"들어가지 마"', () => f('M0 180 q20 -10 40 0 t40 0 t40 0 t40 0 V240 H0 z', '#4a7fb5') + A(75, MN, 'stern', 'M18 -92 L46 -100', .5)]] },
        { b: '기술', en: 'Technology changes at a rapid pace.', ko: '기술은 빠르게 변한다.', feel: '<b>변화가</b> 빠르다.', p: [[150, '10년 전 폰', () => f('M60 100 h30 v60 h-30 z', '#555')], [280, '변화가 빠름', () => W.rapid()], [150, '지금 폰', () => g(75, 130, 0, 2, PH)]] }],
      slow: [
        { b: '거북', en: 'The turtle is slow.', ko: '거북이는 느리다.', feel: '움직임이 <b>느리다.</b>', p: [[150, '모래사장', () => f('M0 200 H150 V240 H0 z', '#f2d59a') + TURTLE(75, 200, 1.2)], [280, '바늘 왼쪽', () => W.slow()], [150, '한 시간 뒤 그 자리', () => f('M0 200 H150 V240 H0 z', '#f2d59a') + TURTLE(85, 200, 1.2) + CLK(30, 50, 16)]] },
        { b: '장사', en: 'Business is slow today.', ko: '오늘은 장사가 한산하다.', feel: '손님이 오는 흐름이 <b>느리다.</b>', p: [[150, '빈 가게', () => BOXG(20, 80, 110, 158, '#f2d59a')], [280, '흐름이 느림', () => W.slow()], [150, '하품', () => A(75, BR, 'down', null, .8) + ZZ(100, 90)]] }],
      gradual: [
        { b: '해돋이', en: 'The sunrise was gradual.', ko: '해가 천천히 떠올랐다.', feel: '<b>조금씩</b> 밝아진다.', p: [[150, '새벽 바다', () => DARK(150, '#2b3550') + f('M0 180 H150 V240 H0 z', '#4a7fb5')], [280, '조금씩 변함', () => W.gradual()], [150, '하늘이 물든다', () => DARK(150, '#f6c8a8') + SUN(75, 180, 20) + f('M0 180 H150 V240 H0 z', '#4a7fb5')]] },
        { b: '회복', en: 'His recovery was gradual.', ko: '그의 회복은 조금씩 이루어졌다.', feel: '몸이 <b>단계적으로</b> 나아진다.', p: [[150, '병원 침대', () => f('M10 180 h130 v14 h-130 z', '#fff') + g(40, 176, 0, .45, HEAD('down'))], [280, '조금씩 변함', () => W.gradual()], [150, '다시 걷는다', () => A(75, BR, 'smile', null, .8, 'M-10 -42 L-24 0 M10 -42 L22 0')]] }],
      sluggish: [
        { b: '아침', en: 'I feel sluggish in the morning.', ko: '아침엔 몸이 굼뜨다.', feel: '몸의 반응이 <b>둔하다.</b>', p: [[150, '알람 다섯 번', () => CLK(75, 100, 34) + t(75, 170, 14, '×5', RD)], [280, '반응이 둔함', () => W.sluggish()], [150, '비틀비틀 세수', () => A(75, BL, 'down', null, .8) + ZZ(100, 90)]] },
        { b: '경제', en: 'The economy is sluggish.', ko: '경기가 굼뜨다.', feel: '시장의 반응이 <b>둔하다.</b>', p: [[150, '뉴스', () => BOXG(20, 40, 110, 70, '#cfe6f5') + l('M30 90 l20 -4 l20 2 l20 -2 l20 0', 3, OR)], [280, '반응이 둔함', () => W.sluggish()], [150, '한산한 거리', () => CITY(5) + A(75, BR, 'calm', null, .35)]] }]
    };
    const CORE = { early: '<b>정한 때보다 먼저.</b>', premature: '<b>준비 · 근거 전에 너무 일찍.</b>', late: '<b>정한 때보다 나중.</b>', overdue: '<b>기한을 넘겼다.</b>', fast: '<b>움직임이 빠르다.</b>', swift: '<b>대응이 지체 없다.</b>', rapid: '<b>변화 · 증가가 빠르다.</b>', slow: '<b>움직임이 느리다.</b>', gradual: '<b>조금씩 서서히 변한다.</b>', sluggish: '<b>반응이 둔하다.</b>' };
