    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "날 끝 확대"와 "무엇이?" 칸이다 — 날 끝이 얼마나 뾰족한가(뭉툭한가), 그리고 keen · piercing · faded처럼 무엇을 보고 하는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'blunt', BASIC_B = '노트 장면';
    const FX = { sharp: [.12, 2400, 2800, .2, .4], keen: [.3, 1600, 2000, .1, .4], piercing: [.5, 3000, 3200, .15, .4], 'razor-sharp': [.08, 3200, 3600, .2, .4], dull: [.5, 300, 250, .12, .5], blunt: [.2, 200, 160, .3, .4], faded: [1, 600, 300, .06, .5] };
    const ORDER = MIX(['sharp', 'keen', 'piercing', 'razor-sharp', 'dull', 'blunt', 'faded']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5';
    const SH = { 'razor-sharp': 1, sharp: .85, piercing: .8, keen: .75, faded: .25, dull: .2, blunt: .08 };
    const WHAT = { keen: '눈 · 감각', piercing: '소리 · 추위 · 눈빛', 'razor-sharp': '아주아주 예리', faded: '색 · 기억' };
    const TC = (v) => v > .5 ? RD : BR;
    const EDGEP = (v) => { const r = (1 - v) * 18, w = 22 + (1 - v) * 10;
      return f('M' + (62 - w) + ' 40 L' + (62 - r) + ' ' + (176 - r) + ' Q62 ' + (176 + r * .6) + ' ' + (62 + r) + ' ' + (176 - r) + ' L' + (62 + w) + ' 40 z', '#d8dde4') + l('M' + (62 - w + 6) + ' 52 L' + (62 - r) + ' ' + (170 - r), 2, '#fff') +
        (v > .5 ? t(84, 184, 16, '✦', RD) : '') + t(62, 222, 13, v > .5 ? '끝이 뾰족' : '끝이 뭉툭', TC(v)); };
    const TP = (id, b, z) => { const c = TC(SH[id]);
      return DARK(280, '#f6f4ee') + EDGEP(SH[id]) + t(62, 30, 12, '날 끝 확대', '#888') + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 14 : 18, WHAT[id], BL) : t(196, 128, 15, '칼 · 통증 ·', '#888') + t(196, 150, 15, '말 두루', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { sharp: P('sharp', '싹둑'), keen: P('keen', '번뜩'), piercing: P('piercing', '찌잉'), 'razor-sharp': P('razor-sharp', '스윽'), dull: P('dull', '뭉개뭉개'), blunt: P('blunt', '뭉툭'), faded: P('faded', '희끄무레') };
    // 작은 그림들
    const KNIFE = (x, y, r, k) => g(x, y, r || 0, k || 1, f('M-50 -6 h70 q20 0 30 6 q-10 6 -30 6 h-70 z', '#d8dde4') + f('M-80 -7 h30 v14 h-30 z', '#3a2a1a'));
    const TOMATO = (x, y, cut) => cut ? f('M' + (x - 24) + ' ' + y + ' a24 22 0 0 1 22 -22 v22 z M' + (x + 4) + ' ' + y + ' v-22 a24 22 0 0 1 22 22 z', RD) : '<circle cx="' + x + '" cy="' + (y - 20) + '" r="22" fill="' + RD + '" stroke="#222" stroke-width="3"/>';
    const SQUASH = (x, y) => f('M' + (x - 30) + ' ' + y + ' q30 -18 60 0 q0 10 -30 12 q-30 -2 -30 -12 z', RD) + t(x, y - 20, 13, '뭉개짐', '#888');
    const SCISS = (x, y, k) => g(x, y, 0, k || 1, l('M-30 -16 L30 10 M-30 16 L30 -10', 5, '#999') + '<circle cx="-38" cy="-20" r="9" fill="none" stroke="' + RD + '" stroke-width="4"/><circle cx="-38" cy="20" r="9" fill="none" stroke="' + RD + '" stroke-width="4"/>');
    const PENCIL = (x, y, k, blunt) => g(x, y, 0, k || 1, f('M-40 -8 h60 v16 h-60 z', '#f2b632') + f(blunt ? 'M20 -8 l14 4 v8 l-14 4 z' : 'M20 -8 l24 8 l-24 8 z', '#e9c99a') + (blunt ? '' : f('M38 -2 l6 2 l-6 2 z', '#333', 0)));
    const PHOTO = (x, y, c, k) => g(x, y, 0, k || 1, f('M-34 -26 h68 v52 h-68 z', '#fff') + f('M-28 -20 h56 v34 h-56 z', c || '#cfe6f5') + '<circle cx="-10" cy="-2" r="7" fill="' + (c === '#eee' ? '#ddd' : '#f2b632') + '"/>');
    const EAGLE = (x, y, k) => g(x, y, 0, k || 1, f('M-40 0 q20 -20 40 -8 q20 -12 40 8 q-20 -6 -40 6 q-20 -12 -40 -6 z', BR) + '<circle cx="0" cy="-12" r="8" fill="#fff" stroke="#222" stroke-width="2"/>' + f('M6 -12 l8 3 l-8 3 z', '#f2b632'));
    const CAT = (x, y, k) => g(x, y, 0, k || 1, '<ellipse cy="-20" rx="34" ry="20" fill="#888" stroke="#222" stroke-width="3"/><circle cx="28" cy="-42" r="16" fill="#888" stroke="#222" stroke-width="3"/>' + l('M-20 -4 l-4 8 M-12 -4 l-2 8 M-4 -4 v8', 2.5, '#222'));
    const C = {
      sharp: { n: 'sharp', past: 'sharp', en: 'The knife is sharp.', ko: '칼이 잘 든다.', feel: '<b>끝이 뾰족해 잘 베인다.</b> 통증 · 말 · 화면에도 쓴다.', t: .12,
        p: [[150, '새 칼', () => KNIFE(85, 100, -10, 1)], [280, '끝이 뾰족', () => W.sharp()], [150, '토마토가 싹둑', () => TOMATO(75, 200, true) + t(75, 120, 18, '싹둑', RD)]] },
      keen: { n: 'keen', past: 'keen', en: 'She has a keen eye for detail.', ko: '그녀는 작은 것까지 보는 예리한 눈이 있다.', feel: '<b>감각이 날카롭다.</b> 진짜 칼날이 아니다.', t: .3,
        p: [[150, '틀린 그림 찾기', () => BOXG(20, 40, 50, 60, '#cfe6f5') + BOXG(80, 40, 50, 60, '#cfe6f5') + '<circle cx="112" cy="62" r="5" fill="' + RD + '"/>'], [280, '눈 · 감각', () => W.keen()], [150, '"여기 다르다!"', () => A(75, MN, 'shock', 'M18 -92 L46 -120', .8) + t(110, 60, 18, '찾았다', RD)]] },
      piercing: { n: 'piercing', past: 'piercing', en: 'I heard a piercing scream.', ko: '귀를 찌르는 비명을 들었다.', feel: '<b>감각을 찌르듯 강하다.</b> 소리 · 추위 · 눈빛에.', t: .5,
        p: [[150, '조용한 밤', () => DARK(150, '#2b3550') + MOON(110, 40, .5)], [280, '소리 · 추위 · 눈빛', () => W.piercing()], [150, '귀를 막는다', () => A(75, BL, 'shock', 'M-20 -90 L-28 -130 M20 -90 L28 -130', .8) + t(124, 60, 18, '꺄악', RD)]] },
      'razor-sharp': { n: 'razor-sharp', past: 'razor-sharp', en: 'This blade is razor-sharp.', ko: '이 칼날은 면도날처럼 예리하다.', feel: '<b>아주아주 예리하다.</b> 기억력에도 쓴다.', t: .08,
        p: [[150, '전문가 칼', () => KNIFE(85, 100, 0, 1) + t(30, 70, 16, '✦', RD)], [280, '아주아주 예리', () => W['razor-sharp']()], [150, '종이가 스윽', () => f('M20 80 l40 0 l0 120 l-40 0 z M70 84 l40 0 l0 120 l-40 0 z', '#fff') + t(75, 60, 16, '스윽', RD)]] },
      dull: { n: 'dull', past: 'dull', en: 'The knife is dull.', ko: '칼이 무디다.', feel: '<b>날카로움이 없다.</b> 지루하다 · 흐리다는 뜻도 있다.', t: .5,
        p: [[150, '오래된 칼', () => KNIFE(85, 100, -10, 1) + t(40, 60, 14, '녹', BR)], [280, '끝이 뭉툭', () => W.dull()], [150, '토마토가 뭉개짐', () => SQUASH(75, 200)]] },
      blunt: { n: 'blunt', past: 'blunt', en: 'This knife is blunt. I need to sharpen it.', ko: '이 칼은 날이 무디다. 갈아야겠다.', feel: '<b>날 · 끝이 뭉툭하다.</b> 칼 · 가위 · 연필에.', t: .2,
        p: [[150, '빵이 안 잘린다', () => f('M30 200 q45 -50 90 0 z', '#e9b86a') + KNIFE(90, 140, 20, .8)], [280, '끝이 뭉툭', () => W.blunt()], [150, '숫돌에 쓱쓱', () => BOXG(30, 200, 90, 20, '#888') + KNIFE(90, 190, -10, .8) + t(75, 100, 16, '쓱쓱', '#888')]] },
      faded: { n: 'faded', past: 'faded', en: 'The colors in this photo are faded.', ko: '이 사진은 색이 바랬다.', feel: '<b>선명함이 옅어졌다.</b> 색 · 기억에 쓴다.', t: 1,
        p: [[150, '서랍 속 사진', () => PHOTO(75, 140, '#e9e4da', 1.6)], [280, '색 · 기억', () => W.faded(PHOTO(196, 140, '#eee', 1.2))], [150, '"이게 누구지?"', () => A(75, BL, 'calm', null, .8) + t(124, 60, 20, '?', '#888')]] }
    };
    const MORE = {
      sharp: [
        { b: '가위', en: 'These scissors are sharp.', ko: '이 가위는 잘 든다.', feel: '<b>끝이 뾰족해</b> 잘 잘린다.', p: [[150, '포장지 자르기', () => f('M20 150 h110 v60 h-110 z', '#f4c6d0') + SCISS(75, 110, 1)], [280, '끝이 뾰족', () => W.sharp(SCISS(196, 140, 1))], [150, '깔끔하게 쓱', () => f('M20 150 h50 v60 h-50 z M80 150 h50 v60 h-50 z', '#f4c6d0') + t(75, 110, 16, '쓱', RD)]] },
        { b: '통증', en: 'I felt a sharp pain in my side.', ko: '옆구리가 찌르듯 아팠다.', feel: '아픔도 <b>뾰족하게</b> 찌른다.', p: [[150, '달리기 중', () => A(75, BL, 'calm', null, .8, 'M-10 -42 L-24 0 M10 -42 L22 0')], [280, '통증의 끝', () => W.sharp(t(196, 146, 40, '⚡', RD))], [150, '옆구리를 잡는다', () => A(75, BL, 'sad', 'M20 -90 L22 -60', .8) + t(124, 60, 18, '윽', RD)]] }],
      keen: [
        { b: '독수리', en: 'Eagles have keen eyes.', ko: '독수리는 눈이 예리하다.', feel: '눈이 <b>아주 작은 것도</b> 잡는다.', p: [[150, '하늘 높이', () => DARK(150, '#cfe6f5') + EAGLE(75, 60, 1)], [280, '눈 · 감각', () => W.keen(EYE(196, 140, .6))], [150, '저 아래 쥐 한 마리', () => f('M0 220 H150 V240 H0 z', GN) + '<circle cx="110" cy="214" r="6" fill="#888"/>' + t(110, 196, 12, '!', RD)]] },
        { b: '머리', en: 'She has a keen mind.', ko: '그녀는 머리가 예리하다.', feel: '생각도 <b>날이 서 있다.</b>', p: [[150, '어려운 퍼즐', () => BOXG(30, 60, 90, 90, '#fff') + l('M60 60 v90 M90 60 v90 M30 90 h90 M30 120 h90', 2)], [280, '생각의 날', () => W.keen(BULB(196, 140, .6))], [150, '단숨에 풀었다', () => A(75, MN, 'smile', 'M18 -92 L36 -126', .8) + t(124, 60, 18, '끝!', GN)]] }],
      piercing: [
        { b: '바람', en: 'A piercing wind blew off the sea.', ko: '바다에서 살을 에는 바람이 불었다.', feel: '추위가 <b>찌르듯</b> 들어온다.', p: [[150, '겨울 바다', () => f('M0 190 q20 -8 40 0 t40 0 t40 0 t40 0 V240 H0 z', '#8fd0ee') + l('M20 80 h60 q10 0 8 -8 M30 96 h70', 3, WT)], [280, '추위의 끝', () => W.piercing(l('M150 120 h70 l20 10 l-20 10 h-70', 3, WT))], [150, '목도리를 감는다', () => A(75, MN, 'sad', 'M-20 -90 L12 -70 M20 -90 L-12 -68', .8) + g(75, 240, 0, .8, f('M-24 -112 h48 v12 h-48 z', RD))]] },
        { b: '눈빛', en: 'He gave me a piercing look.', ko: '그가 꿰뚫어 보는 눈빛으로 나를 봤다.', feel: '눈빛이 <b>속까지 찌른다.</b>', p: [[150, '"숙제 했니?"', () => A(75, BR, 'stern', null, .8)], [280, '눈빛의 끝', () => W.piercing(BEYE(186, 136, .5) + l('M216 136 h36', 3, RD))], [150, '뜨끔', () => A(75, OR, 'shock', null, .6) + t(124, 60, 18, '뜨끔', RD)]] }],
      'razor-sharp': [
        { b: '발톱', en: 'The cat\'s claws are razor-sharp.', ko: '고양이 발톱이 면도날 같다.', feel: '<b>아주아주</b> 예리하다.', p: [[150, '장난치는 고양이', () => CAT(75, 220, 1.2)], [280, '아주아주 예리', () => W['razor-sharp'](l('M170 110 q10 30 0 50 M196 110 q10 30 0 50 M222 110 q10 30 0 50', 4, '#555'))], [150, '소파가 너덜너덜', () => f('M20 160 h110 v60 h-110 z', '#a84b40') + l('M40 170 v40 M60 170 v40 M80 170 v40', 3, '#fff')]] },
        { b: '기억', en: 'Grandma\'s memory is razor-sharp.', ko: '할머니 기억력은 면도날 같다.', feel: '기억도 <b>아주 또렷하게</b> 베어 낸다.', p: [[150, '"50년 전 그날"', () => A(75, '#888', 'smile', null, .8)], [280, '기억의 날', () => W['razor-sharp'](t(196, 140, 18, '1975.3.2', BL))], [150, '"우와, 다 기억하세요?"', () => A(75, OR, 'shock', null, .6) + t(110, 60, 18, '우와', OR)]] }],
      dull: [
        { b: '색', en: 'The colors look dull in this light.', ko: '이 불빛에선 색이 칙칙해 보인다.', feel: '색도 <b>또렷한 날이 없다.</b>', p: [[150, '흐린 형광등', () => BOXG(30, 20, 90, 10, '#ccc') + f('M30 120 h40 v80 h-40 z', '#9a8f86') + f('M80 120 h40 v80 h-40 z', '#8f9a92')], [280, '흐릿함', () => W.dull()], [150, '창가로 가져간다', () => BOXG(80, 30, 60, 80, '#fff6c0') + A(40, MN, 'calm', 'M18 -92 L40 -100', .6)]] },
        { b: '수업', en: 'The lecture was dull.', ko: '강의가 지루했다.', feel: '이야기에 <b>날이 없다</b> — 지루하다.', p: [[150, '두 시간째', () => CLK(110, 50, 22) + A(60, BR, 'calm', null, .7)], [280, '이야기의 날', () => W.dull(DOC(196, 136, 1.1))], [150, '꾸벅꾸벅', () => A(60, BL, 'down', null, .8) + ZZ(84, 90)]] }],
      blunt: [
        { b: '연필', en: 'My pencil is blunt.', ko: '연필 끝이 뭉툭하다.', feel: '<b>끝이 뭉툭하다.</b>', p: [[150, '시험 시작', () => DOC(75, 130, 1.4)], [280, '끝이 뭉툭', () => W.blunt(PENCIL(190, 140, 1, true))], [150, '깎는다', () => PENCIL(70, 120, 1, false) + t(75, 180, 16, '사각사각', '#888')]] },
        { b: '말', en: 'She gave a blunt answer.', ko: '그녀는 돌려 말하지 않고 대답했다.', feel: '말을 <b>다듬지 않고</b> 뭉툭하게 툭.', p: [[150, '"내 그림 어때?"', () => A(75, OR, 'smile', null, .6) + BOXG(100, 120, 40, 50, '#fff')], [280, '말의 끝', () => W.blunt(t(196, 140, 20, '"별로야."', BR))], [150, '머쓱', () => A(75, OR, 'down', null, .6) + t(110, 60, 18, '…', '#888')]] }],
      faded: [
        { b: '청바지', en: 'His jeans are faded.', ko: '그의 청바지는 색이 바랬다.', feel: '색이 <b>옅어졌다.</b>', p: [[150, '빨래 백 번', () => f('M40 80 h70 l6 120 h-30 l-6 -80 l-6 80 h-30 z', '#9ab8d8')], [280, '색 · 기억', () => W.faded(f('M176 104 h40 l4 70 h-18 l-4 -46 l-4 46 h-18 z', '#9ab8d8'))], [150, '"그래도 편해"', () => A(75, BR, 'smile', null, .8)]] },
        { b: '기억', en: 'My memories of that day are faded.', ko: '그날의 기억이 희미하다.', feel: '기억도 <b>색이 바랜다.</b>', p: [[150, '어릴 적 바닷가', () => DARK(150, '#f2f0ea') + f('M0 190 q20 -8 40 0 t40 0 t40 0 t40 0 V240 H0 z', '#cfdde6')], [280, '기억의 색', () => W.faded(PHOTO(196, 140, '#eee', 1.1))], [150, '"뭐 했더라…"', () => A(75, MN, 'calm', null, .8) + t(124, 60, 16, '음…', '#888')]] }]
    };
    const CORE = { sharp: '<b>끝이 뾰족해 잘 베인다.</b>', keen: '<b>감각이 예리하다.</b>', piercing: '<b>찌르듯 강하다.</b>', 'razor-sharp': '<b>아주아주 예리하다.</b>', dull: '<b>날카로움이 없다.</b>', blunt: '<b>날 · 끝이 뭉툭하다.</b>', faded: '<b>선명함이 옅어졌다.</b>' };
