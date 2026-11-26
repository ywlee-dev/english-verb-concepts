    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "손가락으로 꾹 누르기"와 "무엇이?" 칸이다 — 얼마나 들어가나, 그리고 solid · rigid · pliable · tender처럼 무엇을 보고 하는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'firm', BASIC_B = '노트 장면';
    const FX = { hard: [.1, 900, 900, .35, .4], solid: [.15, 300, 300, .35, .4], rigid: [.1, 1400, 1400, .3, .4], firm: [.15, 600, 600, .25, .4], soft: [.4, 400, 300, .08, .5], fluffy: [.6, 700, 500, .06, .5], pliable: [.5, 500, 700, .1, .5], tender: [.3, 500, 400, .08, .5] };
    const ORDER = MIX(['hard', 'solid', 'rigid', 'firm', 'soft', 'fluffy', 'pliable', 'tender']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5';
    const HD = { rigid: 1, hard: .92, solid: .88, firm: .7, tender: .38, pliable: .32, soft: .22, fluffy: .08 };
    const WHAT = { solid: '속이 꽉 참', rigid: '모양이 그대로', firm: '버티는 느낌', fluffy: '공기를 머금음', pliable: '휘어도 안 부러짐', tender: '고기 · 채소' };
    const TC = (h) => h > .6 ? BL : OR;
    const PRESS = (h) => { const d = (1 - h) * 44, c = h > .6 ? '#b9b9c4' : '#f4c6d0';
      return f('M20 128 H40 q24 ' + d * 2 + ' 48 0 H104 V200 H20 z', c) + g(64, 112 + d, 0, 1, f('M-9 -84 v76 q0 10 9 10 q9 0 9 -10 v-76 z', SK)) +
        t(62, 226, 13, '들어감 ' + Math.round((1 - h) * 100), TC(h)); };
    const TP = (id, b, z) => { const c = TC(HD[id]);
      return DARK(280, '#f6f4ee') + PRESS(HD[id]) + BOXG(120, 56, 146, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(193, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(193, 136, WHAT[id].length > 7 ? 15 : 18, WHAT[id], BL) : t(193, 128, 15, '그냥', '#888') + t(193, 150, 15, '단단함', '#888'))) + sfx(193, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { hard: P('hard', '딱딱'), solid: P('solid', '꽉꽉'), rigid: P('rigid', '빳빳'), firm: P('firm', '탱탱'), soft: P('soft', '말랑'), fluffy: P('fluffy', '폭신'), pliable: P('pliable', '낭창'), tender: P('tender', '보들') };
    // 작은 그림들
    const BED = (x, y, k, c) => g(x, y, 0, k || 1, f('M-60 -20 h120 v20 h-120 z', c || '#fff') + l('M-60 0 v16 M60 0 v16', 6, '#8a6a3a') + f('M-56 -34 h30 v14 h-30 z', '#cfe6f5'));
    const TABLE = (x, y, k) => g(x, y, 0, k || 1, f('M-50 -60 h100 v12 h-100 z', '#a3743f') + l('M-40 -48 v48 M40 -48 v48', 8, '#7a5a3a'));
    const PEACH = (x, y, k) => g(x, y, 0, k || 1, '<circle r="24" fill="#f7a98a" stroke="#222" stroke-width="3"/>' + l('M0 -24 q-6 12 0 24', 2, '#d8735a') + f('M2 -24 q10 -10 18 -4 q-8 8 -18 4', GN, 2));
    const PILLOW = (x, y, k) => g(x, y, 0, k || 1, f('M-44 -20 q44 -16 88 0 q8 20 0 40 q-44 12 -88 0 q-8 -20 0 -40 z', '#fff'));
    const STEAK = (x, y, k) => g(x, y, 0, k || 1, '<ellipse rx="56" ry="10" fill="#fff" stroke="#222" stroke-width="3"/>' + f('M-34 -6 q34 -26 68 0 q-34 14 -68 0 z', '#b5523a'));
    const RULER = (x, y, r, bend) => g(x, y, r || 0, 1, bend ? l('M-50 0 q50 -40 100 0', 10, '#bbb') : f('M-50 -5 h100 v10 h-100 z', '#bbb'));
    const CLAY = (x, y, k, c) => g(x, y, 0, k || 1, f('M-30 0 q-6 -30 14 -34 q16 -14 30 4 q20 6 16 30 z', c || '#d8735a'));
    const CLOUD = (x, y, k) => g(x, y, 0, k || 1, f('M-40 10 q-14 -22 10 -26 q6 -22 30 -14 q20 -14 34 8 q22 2 14 32 z', '#fff'));
    const CARROT = (x, y, r) => g(x, y, r || 0, 1, f('M-6 -30 l12 0 l-6 50 z', OR) + l('M0 -30 l-6 -12 M0 -30 l6 -12', 3, GN));
    const POT = (x, y) => f('M' + (x - 40) + ' ' + (y - 40) + ' h80 v40 q-40 14 -80 0 z', '#666') + l('M' + (x - 50) + ' ' + (y - 34) + ' h10 M' + (x + 40) + ' ' + (y - 34) + ' h10', 5, '#333');
    const KITTEN = (x, y, k) => g(x, y, 0, k || 1, '<ellipse cy="-18" rx="34" ry="20" fill="#f2b632" stroke="#222" stroke-width="3"/><circle cx="26" cy="-40" r="16" fill="#f2b632" stroke="#222" stroke-width="3"/>' + f('M16 -52 l4 -12 l6 10 M30 -54 l6 -10 l2 12', '#f2b632', 2));
    const PANCAKE = (x, y, k) => g(x, y, 0, k || 1, [0, 1, 2].map((i) => '<ellipse cy="' + (-i * 14) + '" rx="40" ry="10" fill="#e9b86a" stroke="#222" stroke-width="3"/>').join('') + f('M-8 -34 h16 v8 h-16 z', '#f2d34a'));
    const C = {
      hard: { n: 'hard', past: 'hard', en: 'The bed is hard.', ko: '침대가 딱딱하다.', feel: '<b>눌러도 안 들어간다.</b> "어려운"이라는 다른 뜻도 있다.', t: .1,
        p: [[150, '호텔 침대', () => BED(75, 200, 1, '#ddd')], [280, '거의 안 들어감', () => W.hard()], [150, '허리가 아프다', () => A(75, BL, 'sad', 'M-20 -90 L-30 -60 M20 -90 L26 -50', .8)]] },
      solid: { n: 'solid', past: 'solid', en: 'This table feels solid.', ko: '이 탁자는 튼튼하다.', feel: '<b>속이 꽉 차고 튼튼하다.</b> 흔들림이 없다.', t: .15,
        p: [[150, '새 탁자', () => TABLE(75, 230, 1.1)], [280, '속이 꽉 참', () => W.solid()], [150, '올라가도 끄떡없다', () => TABLE(75, 238, 1.1) + g(75, 172, 0, .5, MAN(MN, 'smile', 'M-20 -90 L-36 -120 M20 -90 L36 -120'))]] },
      rigid: { n: 'rigid', past: 'rigid', en: 'The panel is rigid.', ko: '그 판은 휘지 않는다.', feel: '<b>구부려도 모양이 그대로다.</b> 규칙에도 쓴다.', t: .1,
        p: [[150, '판을 들고', () => BOXG(20, 100, 110, 16, '#bbb')], [280, '모양이 그대로', () => W.rigid(RULER(193, 136, 0))], [150, '"안 휘네"', () => A(75, BL, 'stern', 'M-20 -90 L-40 -110 M20 -90 L40 -110', .8) + BOXG(10, 96, 130, 10, '#bbb')]] },
      firm: { n: 'firm', past: 'firm', en: 'The peach is still firm.', ko: '복숭아가 아직 단단하다.', feel: '<b>눌러 보면 버틴다.</b> 나쁜 말이 아니다.', t: .15,
        p: [[150, '과일 가게', () => PEACH(50, 200) + PEACH(100, 200) + PEACH(75, 170)], [280, '버티는 느낌', () => W.firm(PEACH(193, 140, 1.4))], [150, '"이틀 뒤에 먹자"', () => A(75, MN, 'calm', null, .8) + t(108, 60, 16, '이틀 뒤', OR)]] },
      soft: { n: 'soft', past: 'soft', en: 'The bed is soft.', ko: '침대가 푹신하다.', feel: '<b>누르면 쉽게 들어간다.</b> 소리 · 빛에도 쓴다.', t: .4,
        p: [[150, '새 침대', () => BED(75, 200, 1, '#fff')], [280, '쑥 들어감', () => W.soft()], [150, '풀썩', () => BED(75, 220, 1, '#fff') + g(70, 196, -70, .5, MAN(MN, 'smile')) + ZZ(84, 100)]] },
      fluffy: { n: 'fluffy', past: 'fluffy', en: 'This pillow is fluffy.', ko: '이 베개는 폭신하다.', feel: '<b>공기를 머금어 부풀었다.</b>', t: .6,
        p: [[150, '새 베개', () => PILLOW(75, 160, 1.4)], [280, '공기를 머금음', () => W.fluffy(PILLOW(193, 140, 1))], [150, '얼굴을 묻는다', () => PILLOW(75, 180, 1.5) + g(75, 150, 0, .5, HEAD('smile'))]] },
      pliable: { n: 'pliable', past: 'pliable', en: 'The leather is pliable.', ko: '그 가죽은 잘 휜다.', feel: '<b>부러지지 않고 모양이 바뀐다.</b>', t: .5,
        p: [[150, '가죽 한 장', () => f('M20 110 h110 v40 h-110 z', BR)], [280, '휘어도 안 부러짐', () => W.pliable(l('M150 150 q43 -50 86 0', 10, BR))], [150, '지갑이 됐다', () => f('M30 120 h90 v60 h-90 z', BR) + l('M30 140 h90', 3, '#5a3a1a')]] },
      tender: { n: 'tender', past: 'tender', en: 'The meat is tender.', ko: '고기가 연하다.', feel: '<b>쉽게 잘리고 씹힌다.</b> "다정한 · 아픈"이라는 뜻도 있다.', t: .3,
        p: [[150, '오래 익힌 고기', () => STEAK(75, 190, 1.1)], [280, '고기 · 채소', () => W.tender(STEAK(193, 146, .9))], [150, '스르르 잘린다', () => A(75, MN, 'smile', 'M18 -92 L30 -116', .8) + t(124, 60, 16, '스르르', OR)]] }
    };
    const MORE = {
      hard: [
        { b: '사탕', en: 'This candy is hard.', ko: '이 사탕은 딱딱하다.', feel: '<b>눌러도</b> 안 들어간다.', p: [[150, '사탕 한 알', () => '<circle cx="75" cy="140" r="22" fill="' + RD + '" stroke="#222" stroke-width="3"/>' + f('M53 140 l-20 -12 v24 z M97 140 l20 -12 v24 z', RD)], [280, '거의 안 들어감', () => W.hard()], [150, '깨물다 아야', () => A(75, BL, 'sad', 'M18 -92 L26 -122', .8) + t(124, 60, 18, '아야', RD)]] },
        { b: '눈빛', en: 'She gave him a hard look.', ko: '그녀는 그를 굳은 눈빛으로 봤다.', feel: '표정이 <b>단단하게</b> 굳었다.', p: [[150, '"또 늦었어?"', () => A(75, MN, 'stern', null, .8)], [280, '굳은 표정', () => W.hard(g(193, 144, 0, .7, HEAD('stern')))], [150, '움찔', () => A(75, BL, 'shock', null, .8) + t(124, 60, 18, '헉', RD)]] }],
      solid: [
        { b: '벽', en: 'The wall is solid stone.', ko: '그 벽은 통 돌이다.', feel: '<b>속까지 꽉</b> 차 있다.', p: [[150, '옛 성', () => CASTLE(75, 236, .9, RD)], [280, '속이 꽉 참', () => W.solid(BOXG(156, 100, 74, 70, '#bbb') + l('M156 124 h74 M156 148 h74 M190 100 v24 M176 124 v24 M206 148 v22', 2))], [150, '두드려도 탁탁', () => BOXG(80, 40, 70, 198, '#bbb') + A(40, BL, 'calm', 'M18 -92 L46 -100', .7) + t(60, 60, 14, '탁탁', '#888')]] },
        { b: '계획', en: 'We have a solid plan.', ko: '우리에겐 탄탄한 계획이 있다.', feel: '계획도 <b>빈틈없이 꽉</b> 찼다.', p: [[150, '회의실', () => A(40, BL, 'calm', null, .55) + A(110, MN, 'calm', null, .55) + BOXG(30, 30, 90, 50, '#fff')], [280, '빈틈없음', () => W.solid(DOC(193, 136, 1.2) + t(222, 168, 18, '✔', GN))], [150, '"좋아, 가자"', () => A(75, MN, 'smile', 'M18 -92 L36 -126', .8)]] }],
      rigid: [
        { b: '자', en: 'A metal ruler is rigid.', ko: '쇠자는 휘지 않는다.', feel: '<b>모양이 그대로</b> 있다.', p: [[150, '필통에서', () => RULER(75, 120, -10)], [280, '모양이 그대로', () => W.rigid(RULER(193, 136, 0))], [150, '곧은 선 긋기', () => DOC(75, 130, 1.6) + l('M50 140 h50', 3, RD)]] },
        { b: '규칙', en: 'The school has rigid rules.', ko: '그 학교는 규칙이 엄격하다.', feel: '규칙도 <b>휘지 않는다.</b>', p: [[150, '교문 앞', () => A(75, '#888', 'stern', null, .8) + t(124, 60, 16, '8:00', RD)], [280, '규칙이 그대로', () => W.rigid(DOC(193, 136, 1.2))], [150, '1분 늦어도 안 됨', () => A(75, BL, 'sad', null, .8) + t(124, 60, 16, '8:01', RD)]] }],
      firm: [
        { b: '악수', en: 'He has a firm handshake.', ko: '그는 악수를 힘 있게 한다.', feel: '손이 <b>버틴다</b> — 믿음직하다.', p: [[150, '첫 만남', () => A(40, BL, 'smile', 'M20 -90 L46 -70', .6) + A(110, BR, 'smile', 'M-20 -90 L-46 -70', .6)], [280, '버티는 느낌', () => W.firm(t(193, 146, 40, '🤝'))], [150, '"믿음직하다"', () => A(75, BL, 'smile', null, .8) + t(124, 60, 18, '👍')]] },
        { b: '대답', en: 'Her answer was a firm no.', ko: '그녀의 대답은 단호한 거절이었다.', feel: '마음도 <b>눌러도 안 밀린다.</b>', p: [[150, '"한 번만 더?"', () => A(75, BL, 'sad', null, .8) + BUB(75, 30, 120, '한 번만?', 14)], [280, '안 밀리는 마음', () => W.firm(t(193, 144, 26, '"안 돼."', RD))], [150, '팔짱', () => A(75, MN, 'stern', 'M-20 -90 L12 -70 M20 -90 L-12 -68', .8)]] }],
      soft: [
        { b: '고양이', en: 'The kitten is soft.', ko: '아기 고양이가 보드랍다.', feel: '<b>쓰다듬으면 들어간다.</b>', p: [[150, '아기 고양이', () => KITTEN(70, 220, 1.2)], [280, '쑥 들어감', () => W.soft(KITTEN(186, 170, .9))], [150, '쓰담쓰담', () => KITTEN(90, 238, .9) + A(40, MN, 'smile', 'M20 -90 L50 -46', .6)]] },
        { b: '목소리', en: 'She spoke in a soft voice.', ko: '그녀가 부드러운 목소리로 말했다.', feel: '소리도 <b>모서리가 없다.</b>', p: [[150, '울던 아이', () => A(75, OR, 'sad', null, .55)], [280, '소리의 결', () => W.soft(l('M150 140 q10 -10 20 0 t20 0 t20 0 t20 0', 3, OR))], [150, '"괜찮아"', () => A(50, MN, 'smile', null, .7) + A(110, OR, 'smile', null, .5)]] }],
      fluffy: [
        { b: '팬케이크', en: 'The pancakes are fluffy.', ko: '팬케이크가 폭신하다.', feel: '<b>공기를 머금어</b> 부풀었다.', p: [[150, '아침 식탁', () => PANCAKE(75, 190, 1.1)], [280, '공기를 머금음', () => W.fluffy(PANCAKE(193, 160, .8))], [150, '포크가 쑥', () => A(75, MN, 'smile', 'M18 -92 L30 -116', .8)]] },
        { b: '영화', en: 'It was a light, fluffy movie.', ko: '가볍고 말랑한 영화였다.', feel: '내용도 <b>가볍고 폭신하다</b> — 무겁지 않다.', p: [[150, '금요일 밤', () => BOXG(20, 50, 110, 70, '#222') + t(75, 94, 16, '♥ 영화 ♥', '#f4c6d0')], [280, '내용의 결', () => W.fluffy(CLOUD(193, 136, 1.1))], [150, '웃으며 잠든다', () => DARK(150, '#2b3550') + g(75, 200, 0, .6, HEAD('smile')) + ZZ(100, 120)]] }],
      pliable: [
        { b: '점토', en: 'Warm clay is pliable.', ko: '따뜻한 점토는 잘 휜다.', feel: '<b>부러지지 않고</b> 모양이 바뀐다.', p: [[150, '점토 덩어리', () => CLAY(75, 190, 1.4)], [280, '휘어도 안 부러짐', () => W.pliable(CLAY(193, 160, 1))], [150, '토끼가 됐다', () => CLAY(75, 210, 1) + f('M70 176 v-30 h8 v30 M86 176 v-30 h8 v30', '#d8735a')]] },
        { b: '생각', en: 'Young minds are pliable.', ko: '어린 마음은 유연하다.', feel: '생각도 <b>부러지지 않고</b> 바뀐다.', p: [[150, '처음 보는 것', () => A(75, OR, 'shock', null, .55) + t(124, 60, 22, '?', '#888')], [280, '생각의 결', () => W.pliable(g(193, 146, 0, .6, HEAD('smile')) + l('M160 104 q33 -20 66 0', 4, OR))], [150, '"아, 그렇구나!"', () => A(75, OR, 'smile', 'M18 -92 L34 -126', .55) + BULB(110, 60, .5)]] }],
      tender: [
        { b: '당근', en: 'Cook the carrots until tender.', ko: '당근이 연해질 때까지 익혀라.', feel: '채소도 <b>쉽게 들어간다.</b>', p: [[150, '냄비에 당근', () => POT(75, 220) + FIRE(75, 236, .3) + CARROT(60, 160, -20) + CARROT(90, 160, 20)], [280, '고기 · 채소', () => W.tender(CARROT(193, 140, 0))], [150, '포크가 쑥', () => POT(75, 220) + l('M110 60 L80 170', 4, '#888')]] },
        { b: '마음', en: 'She has a tender heart.', ko: '그녀는 마음이 여리다.', feel: '마음도 <b>쉽게 눌린다</b> — 여리고 다정하다.', p: [[150, '다친 새', () => BIRD(75, 200, .8, '#888')], [280, '마음의 결', () => W.tender(HRT(193, 150))], [150, '조심조심 품는다', () => A(75, MN, 'sad', 'M-20 -90 L0 -60 M20 -90 L0 -60', .8)]] }]
    };
    const HRT = (x, y) => t(x, y, 40, '♥', '#f4a0b0');
    const CORE = { hard: '<b>눌러도 안 들어간다.</b>', solid: '<b>속이 차고 튼튼.</b>', rigid: '<b>모양이 그대로 — 안 휜다.</b>', firm: '<b>눌러 보면 버틴다.</b>', soft: '<b>쉽게 들어간다.</b>', fluffy: '<b>공기를 머금어 폭신.</b>', pliable: '<b>부러지지 않고 휜다.</b>', tender: '<b>쉽게 잘리고 씹힌다.</b>' };
