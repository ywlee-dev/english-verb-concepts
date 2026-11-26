    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(wet 장면 2는 문장이 Wet으로 시작해 그 장면만 대문자로 맞힌다). 가운데 칸은 늘 같은 물기 통과 "무엇이?" 칸이다 — 물이 얼마나 찼나, 그리고 soggy · parched · arid · dehydrated처럼 무엇에 붙는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'damp', BASIC_B = '노트 장면';
    const FX = { wet: [.3, 700, 500, .15, .4], damp: [.4, 500, 450, .1, .5], soggy: [.5, 300, 250, .15, .5], soaked: [.5, 400, 300, .2, .4], drenched: [.7, 600, 200, .25, .3], dry: [.2, 1200, 1300, .12, .4], parched: [.4, 900, 700, .15, .5], arid: [.8, 400, 380, .1, .5], dehydrated: [.6, 500, 300, .12, .5] };
    const ORDER = MIX(['wet', 'damp', 'soggy', 'soaked', 'drenched', 'dry', 'parched', 'arid', 'dehydrated']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', SD = '#e2c48a';
    const LV = { drenched: 1, soaked: .84, soggy: .6, wet: .55, damp: .26, dehydrated: .12, dry: .06, arid: .03, parched: .02 };
    const WHAT = { soggy: '질감 (물러짐)', parched: '목 · 땅', arid: '땅 · 기후', dehydrated: '몸 · 식품' };
    const TANK = (v) => { const y = 196 - 150 * v;
      return f('M30 44 h64 v152 h-64 z', '#fff') + (v > .1 ? f('M33 ' + y + ' h58 V193 h-58 z', '#8fd0ee', 0) + l('M33 ' + y + ' q14 -5 29 0 t29 0', 2, WT)
        : f('M33 178 h58 V193 h-58 z', SD, 0) + l('M42 186 l8 -5 l6 6 M66 184 l8 6 l6 -5', 2, BR)) + t(62, 220, 13, v > .1 ? '물기 ' + Math.round(v * 100) + '%' : '물기 없음', v > .1 ? WT : BR); };
    const TP = (id, b, z) => { const c = LV[id] > .1 ? WT : BR;
      return DARK(280, '#f6f4ee') + TANK(LV[id]) + BOXG(120, 56, 146, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(193, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(193, 136, 18, WHAT[id], BL) : t(193, 128, 15, '옷 · 물건 ·', '#888') + t(193, 150, 15, '사람 두루', '#888'))) + sfx(193, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { wet: P('wet', '촉촉'), damp: P('damp', '축축'), soggy: P('soggy', '흐물흐물'), soaked: P('soaked', '흠뻑'), drenched: P('drenched', '쫄딱'), dry: P('dry', '보송'), parched: P('parched', '바싹'), arid: P('arid', '쩍쩍'), dehydrated: P('dehydrated', '쭈글') };
    // 작은 그림들
    const RAIN = (w, n) => Array.from({ length: n || 6 }, (_, i) => l('M' + (14 + i * w / (n || 6)) + ' ' + (20 + (i % 2) * 30) + ' l-6 22', 3, WT)).join('');
    const TOWEL = (x, y, c) => f('M' + (x - 26) + ' ' + y + ' h52 v60 h-52 z', c || '#f4c6d0') + l('M' + (x - 34) + ' ' + y + ' h68', 4, '#888');
    const DRIP = (x, y) => f('M' + x + ' ' + y + ' q-5 8 0 11 q5 -3 0 -11', '#8fd0ee', 2);
    const BOWL = (x, y, k) => g(x, y, 0, k || 1, f('M-34 -20 h68 q-4 26 -34 26 q-30 0 -34 -26 z', '#fff') + f('M-28 -22 q28 -10 56 0', '#f2d59a', 2));
    const SOCK = (x, y) => f('M' + x + ' ' + y + ' h18 v34 l16 8 v14 h-34 z', '#fff');
    const SHIRT = (x, y, c) => g(x, y, 0, 1, f('M-26 -30 l14 -8 h24 l14 8 l10 16 l-12 6 v40 h-48 v-40 l-12 -6 z', c || BL));
    const CACT = (x, y, k) => g(x, y, 0, k || 1, f('M-8 0 v-60 a8 8 0 0 1 16 0 v60 z', GN) + f('M8 -34 h10 v-14 a5 5 0 0 1 10 0 v20 h-20 z', GN));
    const CRACK = (w) => f('M0 210 H' + w + ' V240 H0 z', SD) + l('M20 218 l12 8 l-4 10 M70 214 l-8 12 l10 8 M120 220 l10 6', 2, BR);
    const PLANT = (x, droop) => BOXG(x - 16, 200, 32, 38, '#c9a171') + l(droop ? 'M' + x + ' 200 q2 -30 -16 -40 M' + x + ' 200 q4 -26 18 -34' : 'M' + x + ' 200 v-40 M' + x + ' 180 q-14 -10 -20 -24 M' + x + ' 176 q14 -10 20 -24', 4, GN);
    const C = {
      wet: { n: 'wet', past: 'wet', en: 'The towel is wet.', ko: '수건이 젖었다.', feel: '<b>물기가 있다.</b> 얼마나인지는 말하지 않는다.', t: .3,
        p: [[150, '씻고 나왔다', () => TOWEL(75, 60) + DRIP(60, 132) + DRIP(88, 140)], [280, '물기가 절반', () => W.wet()], [150, '널어 둔다', () => l('M0 70 H150', 2) + TOWEL(75, 72) + SUN(126, 30, 14)]] },
      damp: { n: 'damp', past: 'damp', en: 'The shirt is still damp.', ko: '셔츠가 아직 축축하다.', feel: '<b>약간, 겉에</b> 물기가 남았다.', t: .4,
        p: [[150, '빨래를 걷는다', () => l('M0 60 H150', 2) + SHIRT(75, 110, '#cfe6f5')], [280, '물기 조금', () => W.damp()], [150, '"아직이네"', () => A(75, MN, 'calm', 'M18 -92 L40 -100', .8) + t(124, 60, 16, '축축', WT)]] },
      soggy: { n: 'soggy', past: 'soggy', en: 'The cereal is soggy.', ko: '시리얼이 눅눅하게 불었다.', feel: '물기보다 <b>질감이 물러졌다.</b>', t: .5,
        p: [[150, '우유를 붓고 깜빡', () => BOWL(75, 170, 1.4) + CLK(110, 50, 22)], [280, '질감이 물러짐', () => W.soggy()], [150, '"윽, 흐물흐물"', () => A(75, MN, 'sad', 'M18 -92 L30 -116', .8)]] },
      soaked: { n: 'soaked', past: 'soaked', en: 'My socks are soaked.', ko: '양말이 흠뻑 젖었다.', feel: '물이 <b>속까지 스며들었다.</b>', t: .5,
        p: [[150, '웅덩이를 밟았다', () => f('M10 220 q65 -18 130 0 v18 h-130 z', '#8fd0ee') + t(75, 120, 22, '첨벙', WT)], [280, '물기 가득', () => W.soaked(SOCK(176, 110) + DRIP(186, 170) + DRIP(206, 176))], [150, '질척질척', () => A(75, MN, 'sad', null, .8) + t(124, 70, 14, '질척', WT)]] },
      drenched: { n: 'drenched', past: 'drenched', en: 'We got drenched in the rain.', ko: '우리는 비에 쫄딱 젖었다.', feel: '<b>머리부터 발끝까지.</b> 물을 뒤집어썼다.', t: .7,
        p: [[150, '갑자기 소나기', () => DARK(150, '#9aa4b0') + RAIN(150, 8)], [280, '통이 넘친다', () => W.drenched()], [150, '둘 다 쫄딱', () => RAIN(150, 6) + A(48, MN, 'sad', null, .6) + A(106, BL, 'phew', null, .6)]] },
      dry: { n: 'dry', past: 'dry', en: 'The towel is dry now.', ko: '이제 수건이 말랐다.', feel: '<b>물기가 없다.</b>', t: .2,
        p: [[150, '햇볕에 널었다', () => l('M0 70 H150', 2) + TOWEL(75, 72) + SUN(126, 30, 14)], [280, '물기 없음', () => W.dry()], [150, '보송보송', () => TOWEL(75, 100) + A(40, MN, 'smile', 'M18 -92 L36 -110', .5)]] },
      parched: { n: 'parched', past: 'parched', en: 'I\'m parched. Can I have some water?', ko: '목이 바싹 탄다. 물 좀 줄래?', feel: '<b>몹시 목마르다.</b> 목이나 땅이 바싹 말랐다.', t: .4,
        p: [[150, '운동장 열 바퀴', () => SUN(120, 36, 18) + A(70, BL, 'phew', null, .8)], [280, '목 · 땅', () => W.parched()], [150, '벌컥벌컥', () => A(75, BL, 'smile', 'M18 -92 L22 -126', .8) + f('M86 46 h16 v24 h-16 z', '#cfe6f5')]] },
      arid: { n: 'arid', past: 'arid', en: 'This region has an arid climate.', ko: '이 지역은 기후가 메마르다.', feel: '<b>비가 적은 곳.</b> 수건에는 안 쓴다.', t: .8,
        p: [[150, '지도 위 사막', () => BOXG(20, 40, 110, 110, '#f2d59a') + SUN(100, 70, 14)], [280, '땅 · 기후', () => W.arid()], [150, '갈라진 땅', () => CRACK(150) + CACT(75, 210, .9)]] },
      dehydrated: { n: 'dehydrated', past: 'dehydrated', en: 'I feel dehydrated after the long run.', ko: '오래 달렸더니 몸에 물이 모자란 느낌이다.', feel: '<b>필요한 수분이 부족하다.</b> 몸 · 식품에 쓴다.', t: .6,
        p: [[150, '마라톤 끝', () => t(75, 50, 18, 'FINISH', OR) + A(75, BL, 'phew', null, .75)], [280, '몸 · 식품', () => W.dehydrated()], [150, '물 · 이온음료', () => f('M40 120 h24 v100 h-24 z', '#cfe6f5') + f('M84 130 h24 v90 h-24 z', '#8fd0ee')]] }
    };
    const MORE = {
      wet: [
        { b: '페인트', en: 'Wet paint. Don\'t touch.', w: 'Wet', ko: '칠 주의. 만지지 마세요.', feel: '아직 <b>물기</b>가 안 말랐다.', p: [[150, '새로 칠한 의자', () => f('M30 150 h90 v10 h-90 z M36 160 v60 M114 160 v60 M30 150 v-60 h10 v60', GN)], [280, '물기 절반', () => W.wet(PAPER(193, 130))], [150, '손에 묻었다', () => g(75, 140, 0, 1.4, HND(0, 0, 1, SK)) + '<circle cx="75" cy="134" r="12" fill="' + GN + '"/>']] },
        { b: '풋내기', en: 'He\'s still wet behind the ears.', ko: '그는 아직 풋내기다.', feel: '갓 태어나 <b>물기가 덜 마른</b> — 아직 서툴다.', p: [[150, '입사 첫날', () => A(75, BL, 'shock', null, .8) + t(124, 50, 14, '첫날', OR)], [280, '귀 뒤가 아직', () => W.wet(EAR(186, 132, .6) + DRIP(214, 150))], [150, '복사기 앞에서', () => BOXG(20, 140, 70, 98, '#ddd') + A(115, BL, 'sad', null, .55) + t(55, 120, 22, '?', '#888')]] }],
      damp: [
        { b: '지하실', en: 'The basement feels damp.', ko: '지하실이 눅눅하다.', feel: '공기 · 벽에 <b>물기가 조금</b> 배었다.', p: [[150, '계단 아래', () => DARK(150, '#5a5a62') + l('M0 60 h40 v30 h40 v30 h40 v30', 4, '#888')], [280, '물기 조금', () => W.damp(l('M150 90 v80 M236 90 v80', 2, '#888') + DRIP(170, 110) + DRIP(214, 130))], [150, '킁킁, 곰팡이 냄새', () => A(75, MN, 'sad', null, .8) + t(124, 60, 16, '킁킁', '#888')]] },
        { b: '눈물', en: 'Her eyes were damp with tears.', ko: '그녀의 눈가가 눈물로 촉촉했다.', feel: '울 듯 말 듯 — 눈가가 <b>살짝</b> 젖었다.', p: [[150, '졸업식', () => A(75, MN, 'smile', null, .8) + t(124, 50, 16, '🎓')], [280, '눈가에 조금', () => W.damp(BEYE(193, 128, .6) + DRIP(200, 150))], [150, '"고마웠어"', () => A(50, MN, 'phew', null, .65) + A(110, '#888', 'smile', null, .65)]] }],
      soggy: [
        { b: '샌드위치', en: 'My sandwich got soggy in the bag.', ko: '가방 속 샌드위치가 눅눅해졌다.', feel: '빵이 <b>물러져</b> 힘이 없다.', p: [[150, '아침에 싸 둔 것', () => PKG(75, 150, 1)], [280, '질감이 물러짐', () => W.soggy(f('M154 150 q39 -26 78 0 q-39 14 -78 0', '#f2d59a'))], [150, '점심시간, 축 늘어짐', () => A(75, MN, 'sad', 'M18 -92 L46 -90', .8) + l('M110 140 q10 20 0 40', 6, '#f2d59a')]] },
        { b: '머리', en: 'My brain feels soggy today.', ko: '오늘은 머리가 흐물흐물하다.', feel: '생각도 <b>물러져</b> 힘이 없다.', p: [[150, '밤을 샜다', () => DARK(150, '#2b3550') + MOON(110, 40, .5) + A(60, BL, 'down', null, .7)], [280, '생각의 질감', () => W.soggy(g(193, 140, 0, .7, HEAD('down')) + l('M160 104 q8 -8 16 0 t16 0 t16 0 t16 0', 3, WT))], [150, '숫자가 안 들어온다', () => DOC(75, 120, 1.2) + t(120, 60, 18, '...', '#888')]] }],
      soaked: [
        { b: '땀', en: 'My shirt was soaked with sweat.', ko: '셔츠가 땀에 흠뻑 젖었다.', feel: '땀이 <b>속까지 스며</b>들었다.', p: [[150, '축구 한 판', () => '<circle cx="110" cy="210" r="18" fill="#fff" stroke="#222" stroke-width="3"/>' + A(60, BL, 'phew', null, .75)], [280, '물기 가득', () => W.soaked(SHIRT(193, 132, BL) + DRIP(180, 170) + DRIP(206, 176))], [150, '쭉 짠다', () => SHIRT(75, 120, BL) + DRIP(70, 170) + DRIP(80, 186)]] },
        { b: '슬픔', en: 'The song is soaked in sadness.', ko: '그 노래에는 슬픔이 흠뻑 배어 있다.', feel: '슬픔이 <b>깊이 스며</b> 있다.', p: [[150, '노래가 나온다', () => t(60, 80, 28, '♪', BL) + t(100, 120, 24, '♫', BL)], [280, '마음에 가득', () => W.soaked(t(193, 136, 34, '💧', WT))], [150, '조용히 듣는다', () => A(75, MN, 'sad', null, .8)]] }],
      drenched: [
        { b: '물풍선', en: 'I got drenched by a water balloon.', ko: '물풍선을 맞고 쫄딱 젖었다.', feel: '물을 <b>통째로 뒤집어썼다.</b>', p: [[150, '날아오는 풍선', () => '<circle cx="110" cy="60" r="16" fill="#8fd0ee" stroke="#222" stroke-width="3"/>' + A(50, MN, 'shock', null, .7)], [280, '통이 넘친다', () => W.drenched(t(193, 136, 26, '퍽!', WT))], [150, '깔깔깔', () => A(50, MN, 'phew', null, .65) + A(110, BL, 'smile', null, .6)]] },
        { b: '햇살', en: 'The room was drenched in sunlight.', ko: '방이 햇살로 흠뻑 젖었다.', feel: '빛도 <b>온통 뒤덮는다.</b>', p: [[150, '커튼을 연다', () => BOXG(30, 30, 90, 110, '#cfe6f5') + SUN(75, 80, 18)], [280, '빛이 가득', () => W.drenched(SUN(193, 130, 22))], [150, '온 방이 환하다', () => DARK(150, '#fff2c4') + A(75, MN, 'smile', null, .8)]] }],
      dry: [
        { b: '빨래', en: 'The clothes are dry. Let\'s fold them.', ko: '빨래가 말랐다. 개자.', feel: '<b>물기가 없다.</b> 다음 일로 간다.', p: [[150, '빨랫줄', () => l('M0 60 H150', 2) + SHIRT(45, 110, '#f4c6d0') + SHIRT(110, 110, '#cfe6f5')], [280, '물기 없음', () => W.dry()], [150, '착착 갠다', () => BOXG(10, 200, 80, 14, '#f4c6d0') + BOXG(10, 186, 80, 14, '#cfe6f5') + A(122, MN, 'smile', null, .5)]] },
        { b: '유머', en: 'He has a dry sense of humor.', ko: '그는 무덤덤하게 웃긴다.', feel: '말에 <b>감정 물기가 없다</b> — 덤덤하게 웃긴다.', p: [[150, '무표정으로 한마디', () => A(75, BR, 'calm', null, .8)], [280, '말의 물기', () => W.dry(t(193, 136, 18, '"그렇군."', BR))], [150, '다들 빵 터짐', () => A(40, MN, 'smile', null, .55) + A(110, BL, 'smile', null, .55) + t(75, 60, 18, 'ㅋㅋㅋ', OR)]] }],
      parched: [
        { b: '밭', en: 'The fields were parched after the long summer.', ko: '긴 여름 끝에 밭이 바싹 말랐다.', feel: '땅이 <b>바싹 탔다.</b>', p: [[150, '비가 안 온다', () => SUN(110, 40, 20) + t(50, 60, 14, '30일째', RD)], [280, '목 · 땅', () => W.parched(f('M140 160 h112 v20 h-112 z', SD) + l('M160 166 l10 6 M210 164 l-8 8', 2, BR))], [150, '시든 작물', () => CRACK(150) + PLANT(75, true)]] },
        { b: '마음', en: 'She was parched for kind words.', ko: '그녀는 다정한 말에 목말라 있었다.', feel: '마음도 <b>목이 탄다.</b>', p: [[150, '혼자 야근', () => DARK(150, '#2b3550') + A(75, MN, 'down', null, .8)], [280, '마음의 목', () => W.parched(t(193, 140, 34, '♡', RD))], [150, '"수고했어"', () => BUB(75, 30, 120, '수고했어', 16) + A(75, MN, 'smile', null, .6)]] }],
      arid: [
        { b: '선인장', en: 'Cactuses grow in arid places.', ko: '선인장은 메마른 곳에서 자란다.', feel: '<b>비가 적은 땅</b>에 맞는다.', p: [[150, '사막', () => CRACK(150) + SUN(110, 40, 18)], [280, '땅 · 기후', () => W.arid(CACT(193, 176, .8))], [150, '꽃이 핀다', () => CACT(75, 238, 1.2) + '<circle cx="75" cy="170" r="7" fill="#f4c6d0"/>']] },
        { b: '강의', en: 'The lecture was long and arid.', ko: '강의가 길고 무미건조했다.', feel: '재미라는 <b>비가 안 온다.</b>', p: [[150, '두 시간째', () => CLK(110, 50, 22) + A(60, BR, 'calm', null, .7)], [280, '말의 땅', () => W.arid(DOC(193, 130, 1))], [150, '꾸벅꾸벅', () => A(75, BL, 'down', null, .8) + ZZ(84, 80)]] }],
      dehydrated: [
        { b: '식품', en: 'We packed dehydrated fruit for the hike.', ko: '등산 가려고 말린 과일을 챙겼다.', feel: '일부러 <b>수분을 뺐다.</b>', p: [[150, '등산 가방', () => BOXG(40, 100, 70, 100, OR)], [280, '몸 · 식품', () => W.dehydrated(['#f2b632', RD, OR].map((c, i) => '<circle cx="' + (166 + i * 26) + '" cy="140" r="10" fill="' + c + '" stroke="#222" stroke-width="2"/>').join(''))], [150, '정상에서 냠냠', () => l('M0 238 L75 120 L150 238', 3) + A(75, MN, 'smile', null, .4)]] },
        { b: '화분', en: 'The plant looks dehydrated.', ko: '화분 식물이 물이 모자라 보인다.', feel: '식물도 <b>필요한 물이 모자라면</b> 축 처진다.', p: [[150, '여행 다녀왔다', () => PKG(60, 200, .8) + A(110, MN, 'calm', null, .6)], [280, '물이 모자람', () => W.dehydrated()], [150, '축 처진 잎', () => PLANT(75, true) + t(120, 120, 16, '물...', '#888')]] }]
    };
    const PAPER = (x, y) => f('M' + (x - 34) + ' ' + (y - 24) + ' h68 v40 h-68 z', '#fff') + t(x, y + 2, 13, '칠 주의', RD);
    const CORE = { wet: '<b>물기가 있다.</b>', damp: '<b>약간, 겉에 축축.</b>', soggy: '<b>물을 먹어 물러짐.</b>', soaked: '<b>속까지 흠뻑.</b>', drenched: '<b>물을 뒤집어씀.</b>', dry: '<b>물기가 없다.</b>', parched: '<b>바싹 목마름.</b>', arid: '<b>비가 적은 땅.</b>', dehydrated: '<b>필요한 수분 부족.</b>' };
