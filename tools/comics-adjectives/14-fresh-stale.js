    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "사과 하나와 시간 줄"과 "무엇이?" 칸이다 — 만든 · 딴 지 얼마나 지났나, 그리고 crisp(질감) · raw(조리 여부)처럼 시간이 아닌 것을 보는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'stale', BASIC_B = '노트 장면';
    const FX = { fresh: [.2, 1600, 2000, .12, .4], crisp: [.08, 3000, 3000, .25, .4], raw: [.3, 600, 600, .1, .4], stale: [.5, 400, 300, .08, .5], spoiled: [.6, 300, 200, .1, .5], rotten: [.8, 160, 100, .15, .5], decayed: [1, 200, 120, .1, .5] };
    const ORDER = MIX(['fresh', 'crisp', 'raw', 'stale', 'spoiled', 'rotten', 'decayed']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const AGE = { fresh: .02, crisp: .05, raw: .05, stale: .45, spoiled: .7, rotten: .88, decayed: 1 };
    const WHAT = { crisp: '질감 (아삭 · 바삭)', raw: '조리 안 함', spoiled: '음식이 상함', rotten: '썩음', decayed: '오래 삭아 약해짐' };
    const TC = (v) => v < .3 ? GN : v < .6 ? OR : BR;
    const APL = (v, id) => { const c = v < .3 ? RD : v < .6 ? '#c96a4a' : v < .8 ? '#8a6a4a' : '#5a4a3a';
      return '<circle cx="62" cy="' + (110 + v * 14) + '" r="' + (34 - v * 8) + '" fill="' + c + '" stroke="#222" stroke-width="3"/>' + l('M62 ' + (78 + v * 14) + ' v-14', 4, BR) + f('M64 ' + (70 + v * 14) + ' q12 -10 20 -2 q-10 8 -20 2', v < .5 ? GN : '#888', 2) +
        (v > .4 ? l('M44 108 q4 4 8 0 M66 128 q4 4 8 0', 2, '#333') : '') + (v > .6 ? '<circle cx="50" cy="124" r="6" fill="#9aa86a"/><circle cx="74" cy="112" r="5" fill="#9aa86a"/>' : '') +
        (v > .8 ? t(96, 80, 14, '·°', '#555') + t(30, 90, 14, '°·', '#555') : '') + (id === 'crisp' ? t(96, 96, 14, '아삭', OR) : '') + (id === 'raw' ? t(62, 170, 12, '불 안 씀', '#888') : '') + (v < .1 && id === 'fresh' ? t(96, 90, 16, '✦', GD) : ''); };
    const LINE = (v) => l('M18 196 h92', 4, '#ccc') + l('M18 196 h' + 92 * v, 4, TC(v)) + '<circle cx="' + (18 + 92 * v) + '" cy="196" r="6" fill="' + TC(v) + '" stroke="#222" stroke-width="2"/>' + t(18, 214, 10, '갓', '#888') + t(110, 214, 10, '오래', '#888');
    const TP = (id, b, z) => { const v = AGE[id], c = TC(v);
      return DARK(280, '#f6f4ee') + APL(v, id) + LINE(v) + t(62, 232, 12, '만든 · 딴 지', '#888') + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 14 : 18, WHAT[id], BL) : t(196, 128, 15, '빵 · 공기 ·', '#888') + t(196, 150, 15, '생각 두루', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { fresh: P('fresh', '방금!'), crisp: P('crisp', '아삭바삭'), raw: P('raw', '날것'), stale: P('stale', '푸석'), spoiled: P('spoiled', '쉬었다'), rotten: P('rotten', '으웩'), decayed: P('decayed', '푸스스') };
    // 작은 그림들
    const BREAD = (x, y, k, old) => g(x, y, 0, k || 1, f('M-40 0 q-4 -36 40 -36 q44 0 40 36 z', old ? '#c9b48a' : '#e9b86a') + (old ? l('M-20 -14 l8 6 M10 -20 l6 8', 2, '#8a6a3a') : l('M-14 -26 q4 -6 8 0 M6 -28 q4 -6 8 0', 2, '#a3743f')) + (old ? '' : l('M-10 -44 q-4 -8 0 -14 M10 -44 q-4 -8 0 -14', 2.5, '#bbb')));
    const LETTUCE = (x, y, k) => g(x, y, 0, k || 1, f('M-30 0 q-10 -30 10 -44 q20 -14 40 0 q20 14 10 44 z', '#7ac46a') + l('M0 0 v-36 M0 -16 l-12 -10 M0 -24 l12 -10', 2, '#3a8a3a'));
    const CARROT = (x, y, r) => g(x, y, r || 0, 1, f('M-6 -30 l12 0 l-6 50 z', OR) + l('M0 -30 l-6 -12 M0 -30 l6 -12', 3, GN));
    const MILK = (x, y, k) => g(x, y, 0, k || 1, f('M-18 -60 h36 v60 h-36 z', '#fff') + f('M-18 -60 l18 -14 l18 14 z', BL) + t(0, -24, 10, 'MILK', BL));
    const FLIES = (x, y) => t(x, y, 14, '·°', '#555') + t(x + 20, y - 14, 14, '°·', '#555');
    const PLANK = (x, y, old) => f('M' + (x - 50) + ' ' + (y - 12) + ' h100 v24 h-100 z', old ? '#9a8a6a' : '#c9a171') + (old ? l('M' + (x - 30) + ' ' + (y - 8) + ' l10 12 M' + (x + 10) + ' ' + (y - 10) + ' l-6 14 M' + (x + 30) + ' ' + y + ' h12', 2, '#5a4a3a') : '');
    const CHIPS = (x, y, k) => g(x, y, 0, k || 1, f('M-26 -50 h52 l-4 50 h-44 z', RD) + t(0, -20, 11, 'CHIPS', '#fff'));
    const FISH = (x, y, k) => g(x, y, 0, k || 1, f('M-30 0 q20 -20 50 0 l14 -12 v24 l-14 -12 q-30 20 -50 0 z', '#f4a08a') + '<circle cx="-18" cy="-2" r="3"/>');
    const COOK = (x, y, k) => g(x, y, 0, k || 1, f('M-20 -30 h40 v26 h-40 z', '#e9c99a') + l('M-12 -30 l-6 -10 M0 -30 v-10', 3, '#888'));
    const EGG = (x, y, k, bad) => g(x, y, 0, k || 1, '<ellipse cy="-16" rx="14" ry="18" fill="' + (bad ? '#d8d0a0' : '#fff6e8') + '" stroke="#222" stroke-width="3"/>');
    const TOOTH = (x, y, k, bad) => g(x, y, 0, k || 1, f('M-16 -30 q16 -10 32 0 q4 20 -4 30 l-4 18 l-4 -14 h-4 l-4 14 l-4 -18 q-8 -10 -4 -30 z', '#fff') + (bad ? '<circle cx="4" cy="-14" r="6" fill="#5a4a3a"/>' : ''));
    const HOUSES = (x, y, old) => [0, 1, 2].map((i) => f('M' + (x + i * 40) + ' ' + y + ' v-40 l16 -14 l16 14 v40 z', old ? '#9a9088' : '#e9e0c8') + (old ? l('M' + (x + i * 40 + 6) + ' ' + (y - 30) + ' l8 10', 2, '#5a4a3a') : '')).join('');
    const C = {
      fresh: { n: 'fresh', past: 'fresh', en: 'The bread is fresh.', ko: '빵이 갓 구워졌다.', feel: '<b>만든 · 딴 지 얼마 안 됐다.</b> 새 공기 · 생각에도.', t: .2,
        p: [[150, '빵집 오븐', () => BOXG(20, 80, 110, 90, '#555') + f('M30 100 h90 v50 h-90 z', '#f2722b')], [280, '시간 줄 맨 앞', () => W.fresh()], [150, '김이 모락모락', () => BREAD(75, 200, 1.4)]] },
      crisp: { n: 'crisp', past: 'crisp', en: 'The lettuce is crisp.', ko: '상추가 아삭하다.', feel: '<b>경쾌한 질감.</b> 갓 딴 것과는 다른 이야기.', t: .08,
        p: [[150, '샐러드 그릇', () => LETTUCE(75, 200, 1.4)], [280, '질감', () => W.crisp(LETTUCE(196, 170, .9))], [150, '아삭!', () => A(75, MN, 'smile', 'M18 -92 L22 -126', .8) + t(124, 60, 18, '아삭', GN)]] },
      raw: { n: 'raw', past: 'raw', en: 'I added raw carrots to the salad.', ko: '샐러드에 날당근을 넣었다.', feel: '<b>조리하지 않았다.</b> 신선한지는 따로다.', t: .3,
        p: [[150, '당근을 썬다', () => CARROT(75, 140, 70) + f('M20 200 h110 v10 h-110 z', '#c9a171')], [280, '조리 안 함', () => W.raw(CARROT(196, 140, 0))], [150, '그대로 쏙', () => LETTUCE(75, 210, 1.2) + CARROT(60, 160, 30) + CARROT(90, 160, -30)]] },
      stale: { n: 'stale', past: 'stale', en: 'The bread is stale.', ko: '빵이 오래돼서 퍼석하다.', feel: '<b>마르고 맛이 떨어졌다.</b> 썩은 건 아니다.', t: .5,
        p: [[150, '사흘 지난 빵', () => BREAD(75, 200, 1.4, true) + t(75, 80, 14, '3일 전', '#888')], [280, '시간 줄 중간', () => W.stale()], [150, '딱딱해서 꾸역꾸역', () => A(75, BL, 'sad', 'M18 -92 L22 -126', .8)]] },
      spoiled: { n: 'spoiled', past: 'spoiled', en: 'The milk seems spoiled.', ko: '우유가 상한 것 같다.', feel: '<b>음식이 변질됐다.</b> 계획 · 버릇없는 아이에도.', t: .6,
        p: [[150, '냉장고 구석', () => MILK(75, 200, 1.4) + t(75, 90, 12, '유통기한 지남', RD)], [280, '음식이 상함', () => W.spoiled(MILK(196, 176, .9))], [150, '킁킁… 윽', () => A(75, MN, 'sad', 'M18 -92 L22 -122', .8) + t(124, 60, 16, '윽', RD)]] },
      rotten: { n: 'rotten', past: 'rotten', en: 'The fruit smells rotten.', ko: '과일에서 썩은 냄새가 난다.', feel: '<b>썩었다.</b> 과일 · 나무 같은 것이.', t: .8,
        p: [[150, '과일 바구니', () => f('M20 180 h110 l-10 40 h-90 z', '#c9a171') + '<circle cx="60" cy="172" r="16" fill="#5a4a3a"/><circle cx="92" cy="172" r="16" fill="' + RD + '"/>' + FLIES(56, 140)], [280, '썩음', () => W.rotten()], [150, '코를 막는다', () => A(75, BL, 'sad', 'M18 -92 L4 -118', .8) + t(124, 60, 16, '으웩', BR)]] },
      decayed: { n: 'decayed', past: 'decayed', en: 'The wood is decayed.', ko: '나무가 삭았다.', feel: '<b>오랜 시간에 걸쳐 약해졌다.</b> 나무 · 이 · 건물에.', t: 1,
        p: [[150, '오래된 다리 판자', () => PLANK(75, 160, true)], [280, '오래 삭아 약해짐', () => W.decayed(PLANK(196, 140, true))], [150, '밟으니 푸스스', () => PLANK(75, 200, true) + A(75, MN, 'shock', null, .6) + t(124, 60, 14, '푸스스', BR)]] }
    };
    const MORE = {
      fresh: [
        { b: '공기', en: 'Let\'s get some fresh air.', ko: '바람 좀 쐬자.', feel: '공기도 <b>방금 들어온</b> 새것.', p: [[150, '답답한 방', () => DARK(150, '#c8ccd2') + A(75, BL, 'phew', null, .8)], [280, '시간 줄 맨 앞', () => W.fresh(l('M150 130 h60 q10 0 8 -8 M160 148 h70', 3, WT))], [150, '창을 연다', () => BOXG(30, 50, 90, 80, '#cfe6f5') + A(75, BL, 'smile', 'M-20 -90 L-36 -126 M20 -90 L36 -126', .5)]] },
        { b: '출발', en: 'Let\'s make a fresh start.', ko: '새로 시작하자.', feel: '시작도 <b>갓 만든</b> 것처럼 새로.', p: [[150, '망친 그림', () => BOXG(30, 50, 90, 110, '#fff') + l('M40 60 l70 90 M110 60 l-70 90', 4, '#888')], [280, '시간 줄 맨 앞', () => W.fresh(f('M166 104 h60 v60 h-60 z', '#fff'))], [150, '새 도화지', () => BOXG(30, 50, 90, 110, '#fff') + A(120, MN, 'smile', null, .45)]] }],
      crisp: [
        { b: '감자칩', en: 'These chips are crisp.', ko: '이 감자칩은 바삭하다.', feel: '<b>경쾌한</b> 질감.', p: [[150, '새 봉지', () => CHIPS(75, 200, 1.4)], [280, '질감', () => W.crisp(CHIPS(196, 176, .9))], [150, '바삭!', () => A(75, OR, 'smile', 'M18 -92 L22 -126', .6) + t(110, 60, 18, '바삭', OR)]] },
        { b: '대답', en: 'She gave a crisp answer.', ko: '그녀는 시원시원하게 대답했다.', feel: '말도 <b>군더더기 없이 경쾌하다.</b>', p: [[150, '"할 수 있어요?"', () => A(75, '#888', 'calm', null, .8)], [280, '말의 질감', () => W.crisp(t(196, 140, 24, '"네."', GN))], [150, '"좋아요"', () => A(75, MN, 'smile', null, .8)]] }],
      raw: [
        { b: '생선', en: 'Sushi uses raw fish.', ko: '초밥은 날생선을 쓴다.', feel: '<b>불을 안 썼다.</b>', p: [[150, '초밥집', () => FISH(75, 140, 1.4)], [280, '조리 안 함', () => W.raw(FISH(196, 140, 1))], [150, '냠', () => A(75, BL, 'smile', 'M18 -92 L22 -126', .8)]] },
        { b: '마음', en: 'His feelings were still raw.', ko: '그의 마음은 아직 아물지 않았다.', feel: '마음이 <b>아직 날것</b> — 다치기 쉽다.', p: [[150, '헤어진 다음 날', () => A(75, BR, 'down', null, .8)], [280, '마음의 상태', () => W.raw(t(196, 150, 40, '♥', '#f4a0b0') + l('M190 118 l8 10 l-6 8', 2, RD))], [150, '그 노래만 들어도', () => A(75, BR, 'sad', null, .8) + t(124, 60, 18, '♪', BL)]] }],
      stale: [
        { b: '과자', en: 'These cookies are stale.', ko: '이 과자는 눅눅하게 김이 빠졌다.', feel: '오래돼 <b>맛이 떨어졌다.</b>', p: [[150, '열어 둔 봉지', () => CHIPS(75, 200, 1.2) + t(75, 80, 14, '일주일', '#888')], [280, '시간 줄 중간', () => W.stale()], [150, '"맛이 왜 이래"', () => A(75, OR, 'sad', null, .6)]] },
        { b: '농담', en: 'That joke is stale.', ko: '그 농담은 김빠졌다.', feel: '말도 <b>오래되면</b> 맛이 없다.', p: [[150, '아빠의 농담', () => A(75, BR, 'smile', 'M18 -92 L40 -120', .8)], [280, '말의 시간', () => W.stale(t(196, 140, 15, '"100번째 듣는 중"', '#888'))], [150, '아무도 안 웃는다', () => A(40, MN, 'calm', null, .55) + A(110, OR, 'calm', null, .5)]] }],
      spoiled: [
        { b: '고기', en: 'The meat is spoiled. Throw it out.', ko: '고기가 상했어. 버려.', feel: '음식이 <b>변질됐다.</b>', p: [[150, '여름 부엌', () => SUN(120, 30, 14) + f('M30 170 q45 -30 90 0 q-45 20 -90 0 z', '#9a7a6a')], [280, '음식이 상함', () => W.spoiled()], [150, '쓰레기통으로', () => f('M50 140 h50 l-6 98 h-38 z', '#888') + A(120, MN, 'sad', null, .5)]] },
        { b: '아이', en: 'He is a spoiled child.', ko: '그는 버릇없는 아이다.', feel: '너무 받기만 해서 <b>버릇이 상했다.</b>', p: [[150, '장난감 가게', () => BOXG(20, 60, 110, 120, '#f2d59a') + A(75, OR, 'stern', null, .45)], [280, '버릇이 상함', () => W.spoiled(t(196, 146, 22, '"사 줘!!"', RD))], [150, '바닥에 드러눕는다', () => g(75, 230, -80, .45, MAN(OR, 'sad')) + t(110, 100, 16, '앙앙', RD)]] }],
      rotten: [
        { b: '달걀', en: 'This egg is rotten.', ko: '이 달걀은 썩었다.', feel: '<b>썩었다.</b>', p: [[150, '오래된 달걀', () => EGG(75, 200, 1.6, true) + FLIES(90, 120)], [280, '썩음', () => W.rotten(EGG(196, 170, 1.4, true))], [150, '창문 활짝', () => BOXG(30, 50, 90, 80, '#cfe6f5') + A(75, MN, 'sad', 'M18 -92 L4 -118', .5)]] },
        { b: '하루', en: 'I had a rotten day.', ko: '오늘은 최악의 하루였다.', feel: '하루가 <b>썩은 듯</b> 엉망이다.', p: [[150, '비 · 지각 · 넘어짐', () => t(30, 50, 20, '☂', BL) + CLK(110, 50, 20) + A(75, BL, 'sad', null, .6)], [280, '하루의 상태', () => W.rotten(t(196, 146, 34, '😫'))], [150, '이불 속으로', () => f('M10 200 q65 -40 130 0 v38 h-130 z', BL) + g(75, 176, 0, .5, HEAD('down'))]] }],
      decayed: [
        { b: '이', en: 'The dentist found a decayed tooth.', ko: '치과 의사가 썩은 이를 찾았다.', feel: '이가 <b>오래 걸쳐</b> 삭았다.', p: [[150, '치과 의자', () => f('M20 180 h110 v12 h-110 z', '#cfe6f5') + g(40, 176, 0, .45, HEAD('shock'))], [280, '오래 삭아 약해짐', () => W.decayed(TOOTH(196, 150, 1.2, true))], [150, '"사탕 줄이자"', () => A(75, '#fff', 'stern', null, .8)]] },
        { b: '마을', en: 'The old town has decayed over the years.', ko: '옛 마을은 세월이 지나며 쇠락했다.', feel: '마을도 <b>천천히 삭는다.</b>', p: [[150, '50년 전 사진', () => HOUSES(15, 200, false)], [280, '오래 삭아 약해짐', () => W.decayed(g(150, 0, 0, .8, HOUSES(0, 210, true)))], [150, '지금', () => HOUSES(15, 200, true) + t(75, 80, 14, '빈집', '#888')]] }]
    };
    const CORE = { fresh: '<b>만든 · 딴 지 얼마 안 됐다.</b>', crisp: '<b>경쾌한 질감 (아삭 · 바삭).</b>', raw: '<b>조리하지 않았다.</b>', stale: '<b>마르고 맛이 떨어졌다.</b>', spoiled: '<b>음식이 변질됐다.</b>', rotten: '<b>썩었다.</b>', decayed: '<b>오래 걸쳐 삭았다.</b>' };
