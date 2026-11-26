    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "결과 저울"과 "무엇이?" 칸이다 — 저울에 올린 것이 얼마나 무겁게 기우나, 그리고 crucial(결과가 갈림) · essential(없으면 안 됨) · petty(옹졸함)처럼 무엇을 보는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'negligible', BASIC_B = '노트 장면';
    const FX = { important: [.4, 400, 500, .15, .4], crucial: [.5, 300, 700, .2, .4], essential: [.4, 500, 600, .15, .4], vital: [.6, 200, 400, .2, .4], trivial: [.2, 1600, 1600, .06, .4], minor: [.2, 1200, 1200, .08, .4], negligible: [.1, 2400, 2400, .03, .4], petty: [.3, 900, 700, .1, .4] };
    const ORDER = MIX(['important', 'crucial', 'essential', 'vital', 'trivial', 'minor', 'negligible', 'petty']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const WT8 = { vital: 1, crucial: .95, essential: .9, important: .75, minor: .3, petty: .2, trivial: .15, negligible: .03 };
    const WHAT = { important: '영향이 큼', crucial: '결과가 갈림', essential: '없으면 안 됨', vital: '생명 · 안전처럼 중대', trivial: '영향이 거의 없음', minor: '정도가 작음', negligible: '무시할 만큼', petty: '하찮은 일에 옹졸' };
    const TC = (v) => v > .5 ? RD : '#888';
    const SCALE = (id) => { const v = WT8[id], a = v * 22, s0 = 4 + v * 34;
      let s = f('M54 200 l8 -50 l8 50 z', '#888') + g(62, 150, -a, 1, l('M-48 0 h96', 5, '#555') + f('M-' + (34 + s0 / 2) + ' -' + s0 + ' h' + s0 + ' v' + s0 + ' h-' + s0 + ' z', v > .5 ? '#c96a4a' : '#cfe6f5') + l('M30 0 v-4', 2));
      if (id === 'crucial') s += l('M20 60 L62 34 L104 60', 3, OR) + t(20, 76, 12, 'A', BL) + t(104, 76, 12, 'B', BL);
      if (id === 'essential') s += '<path d="M90 80 h16 v16 h-16 z" fill="none" stroke="' + RD + '" stroke-width="2" stroke-dasharray="3 3"/>' + t(98, 74, 11, '없으면?', RD);
      if (id === 'vital') s += l('M14 70 h20 l6 -14 l8 26 l6 -12 h50', 3, RD);
      if (id === 'negligible') s += t(30, 110, 12, '≈ 0', '#888');
      if (id === 'petty') s += t(28, 100, 14, '흥', RD);
      return s + t(62, 216, 12, v > .5 ? '무겁게 기운다' : '거의 안 기운다', TC(v)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + SCALE(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 7 ? 14 : 17, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(WT8[id]));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { important: P('important', '중요!'), crucial: P('crucial', '여기서 갈린다'), essential: P('essential', '꼭 필요'), vital: P('vital', '목숨 걸림'), trivial: P('trivial', '사소'), minor: P('minor', '살짝'), negligible: P('negligible', '티도 안 남'), petty: P('petty', '쪼잔') };
    // 작은 그림들
    const ROOMM = () => f('M10 170 h130 v8 h-130 z', '#a3743f') + [30, 75, 120].map((x) => A(x, '#2b3550', 'stern', null, .4)).join('');
    const BOTTLE = (x, y, k) => g(x, y, 0, k || 1, f('M-10 -50 h20 v10 l6 8 v32 h-32 v-32 l6 -8 z', '#8fd0ee') + f('M-8 -56 h16 v6 h-16 z', BL));
    const PASSP = (x, y) => f('M' + (x - 22) + ' ' + (y - 30) + ' h44 v60 h-44 z', '#2b3550') + '<circle cx="' + x + '" cy="' + (y - 6) + '" r="8" fill="none" stroke="' + GD + '" stroke-width="2"/>';
    const SCRATCH = (x, y) => l('M' + (x - 14) + ' ' + y + ' l28 -6', 2, RD);
    const CARR = (x, y, k) => g(x, y, 0, k || 1, f('M-60 0 v-22 l16 -18 h58 l20 18 h26 v22 z', BL) + '<circle cx="-34" cy="2" r="10" fill="#333"/><circle cx="34" cy="2" r="10" fill="#333"/>');
    const COOKIE = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="#c98a4a" stroke="#222" stroke-width="2"/>';
    const GOAL = () => l('M20 160 V70 h110 v90', 5, '#888') + '<circle cx="75" cy="200" r="12" fill="#fff" stroke="#222" stroke-width="3"/>';
    const C = {
      important: { n: 'important', past: 'important', en: 'This meeting is important.', ko: '이 회의는 중요하다.', feel: '<b>영향이 크다.</b> 두루 쓴다.', t: .4,
        p: [[150, '회의실', () => ROOMM()], [280, '무겁게 기운다', () => W.important()], [150, '메모 또 메모', () => A(75, BL, 'stern', 'M18 -92 L40 -60', .8) + DOC(118, 160, .6)]] },
      crucial: { n: 'crucial', past: 'crucial', en: 'This meeting is crucial.', ko: '이 회의가 결과를 가른다.', feel: '<b>이것에 따라 결과가 갈린다.</b>', t: .5,
        p: [[150, '계약 직전', () => ROOMM() + DOC(75, 150, .7)], [280, '결과가 갈림', () => W.crucial()], [150, '모두 숨죽임', () => [30, 75, 120].map((x) => A(x, '#2b3550', 'shock', null, .45)).join('')]] },
      essential: { n: 'essential', past: 'essential', en: 'Water is essential for the trip.', ko: '여행에 물은 꼭 필요하다.', feel: '<b>없으면 목적을 못 이룬다.</b>', t: .4,
        p: [[150, '사막 여행 준비', () => f('M0 200 q40 -14 80 0 t80 0 V240 H0 z', '#f2d59a') + PKG(75, 180, 1)], [280, '없으면 안 됨', () => W.essential(BOTTLE(196, 170, 1))], [150, '물병부터 챙긴다', () => BOTTLE(110, 200, 1) + A(50, MN, 'stern', 'M18 -92 L46 -80', .7)]] },
      vital: { n: 'vital', past: 'vital', en: 'This information is vital.', ko: '이 정보는 매우 중대하다.', feel: '<b>생명 · 안전처럼 중대하다.</b>', t: .6,
        p: [[150, '구조 무전', () => A(75, OR, 'stern', 'M18 -92 L22 -126', .8) + t(124, 50, 14, '삐-', RD)], [280, '생명 · 안전', () => W.vital()], [150, '바로 출동', () => CARR(75, 220, .9) + t(75, 150, 16, '🚑')]] },
      trivial: { n: 'trivial', past: 'trivial', en: 'Don\'t worry about trivial things.', ko: '사소한 일은 걱정하지 마.', feel: '<b>영향이 거의 없다.</b>', t: .2,
        p: [[150, '"양말 짝이 안 맞아!"', () => A(75, OR, 'shock', null, .6) + f('M50 220 h12 v-20 h-12 z', RD) + f('M90 220 h12 v-20 h-12 z', BL)], [280, '거의 안 기운다', () => W.trivial()], [150, '"아무도 몰라"', () => A(45, MN, 'smile', null, .6) + A(110, OR, 'smile', null, .5)]] },
      minor: { n: 'minor', past: 'minor', en: 'It\'s a minor scratch.', ko: '살짝 긁힌 거야.', feel: '<b>정도가 작다.</b> 무시해도 된다는 뜻은 아니다.', t: .2,
        p: [[150, '주차장에서', () => CARR(75, 210, 1) + SCRATCH(60, 190)], [280, '정도가 작음', () => W.minor()], [150, '그래도 사진은 찍어 둔다', () => g(75, 130, 0, 2, PH) + A(130, BL, 'calm', null, .35)]] },
      negligible: { n: 'negligible', past: 'negligible', en: 'The difference is negligible.', ko: '차이는 무시해도 될 만큼 작다.', feel: '<b>수치 · 효과가 무시할 만큼.</b>', t: .1,
        p: [[150, '두 개의 우유', () => f('M40 120 h28 v80 h-28 z M86 120 h28 v80 h-28 z', '#fff', 2) + t(54, 160, 11, '₩1500', BL) + t(100, 160, 11, '₩1510', BL)], [280, '무시할 만큼', () => W.negligible()], [150, '아무거나 집는다', () => A(75, MN, 'calm', 'M18 -92 L46 -80', .8)]] },
      petty: { n: 'petty', past: 'petty', en: 'It\'s a petty argument.', ko: '그건 옹졸한 말다툼이다.', feel: '<b>하찮은 일에 매달리는</b> 옹졸함. 나쁜 평가.', t: .3,
        p: [[150, '"리모컨 내 거야!"', () => A(40, BL, 'stern', 'M18 -92 L40 -100', .55) + A(110, OR, 'stern', 'M-18 -92 L-40 -100', .55)], [280, '하찮은 일에 옹졸', () => W.petty()], [150, '엄마가 리모컨을 가져감', () => A(75, MN, 'stern', 'M18 -92 L36 -126', .8)]] }
    };
    const MORE = {
      important: [
        { b: '시험', en: 'Tomorrow\'s test is important.', ko: '내일 시험은 중요하다.', feel: '<b>영향이 크다.</b>', p: [[150, '책상 위 교과서', () => [0, 1, 2].map((i) => BOXG(30 + i * 30, 160, 26, 50, [RD, BL, GN][i])).join('')], [280, '무겁게 기운다', () => W.important()], [150, '밤늦게까지', () => DARK(150, '#2b3550') + A(75, BL, 'stern', null, .7)]] },
        { b: '가족', en: 'Family is important to me.', ko: '나에게는 가족이 중요하다.', feel: '마음에서 <b>무게가 크다.</b>', p: [[150, '저녁 식탁', () => f('M10 180 h130 v8 h-130 z', '#a3743f') + [30, 75, 120].map((x, i) => A(x, [BL, MN, OR][i], 'smile', null, .4)).join('')], [280, '마음의 무게', () => W.important(t(196, 146, 34, '♥', RD))], [150, '가족사진', () => BOXG(30, 50, 90, 80, GD) + BOXG(36, 56, 78, 68, '#fff')]] }],
      crucial: [
        { b: '승부차기', en: 'This penalty kick is crucial.', ko: '이 승부차기가 결과를 가른다.', feel: '<b>한 번에 결과가</b> 갈린다.', p: [[150, '골대 앞', () => GOAL()], [280, '결과가 갈림', () => W.crucial()], [150, '두 손 모아', () => [30, 75, 120].map((x) => A(x, BL, 'shock', 'M-20 -90 L0 -110 M20 -90 L0 -110', .45)).join('')]] },
        { b: '첫인상', en: 'First impressions are crucial.', ko: '첫인상이 결과를 가른다.', feel: '처음 몇 초가 <b>결과를 가른다.</b>', p: [[150, '면접장 문', () => BOXG(50, 60, 60, 178, '#c9a171')], [280, '결과가 갈림', () => W.crucial(CLK(196, 140, 22, RD))], [150, '밝게 인사', () => A(75, BL, 'smile', 'M18 -92 L36 -126', .8)]] }],
      essential: [
        { b: '여권', en: 'A passport is essential for travel abroad.', ko: '해외여행에는 여권이 꼭 필요하다.', feel: '<b>없으면</b> 못 간다.', p: [[150, '공항', () => BOXG(20, 60, 110, 80, '#cfe6f5') + t(75, 104, 14, '출국', BL)], [280, '없으면 안 됨', () => W.essential(PASSP(196, 140))], [150, '"여권 어디 있지?!"', () => A(75, MN, 'shock', 'M-20 -90 L-24 -50 M20 -90 L24 -50', .8)]] },
        { b: '잠', en: 'Sleep is essential for health.', ko: '건강에는 잠이 꼭 필요하다.', feel: '몸에 <b>없으면 안 되는</b> 것.', p: [[150, '밤 12시', () => DARK(150, '#2b3550') + MOON(110, 40, .5)], [280, '없으면 안 됨', () => W.essential(ZZ(180, 160))], [150, '푹 잔다', () => f('M10 200 q65 -40 130 0 v38 h-130 z', BL) + g(75, 176, 0, .5, HEAD('phew')) + ZZ(100, 110)]] }],
      vital: [
        { b: '산소', en: 'Oxygen is vital for life.', ko: '산소는 생명에 매우 중대하다.', feel: '<b>생명이</b> 달렸다.', p: [[150, '깊은 바다 잠수', () => DARK(150, '#2b5a8a') + g(75, 180, 0, .6, MAN(OR, 'calm'))], [280, '생명 · 안전', () => W.vital(t(196, 146, 24, 'O₂', BL))], [150, '산소통 확인', () => f('M60 100 h30 v90 h-30 z', GD) + t(75, 150, 14, '100%', GN)]] },
        { b: '역할', en: 'She plays a vital role in the team.', ko: '그녀는 팀에서 매우 중대한 역할을 한다.', feel: '없으면 팀이 <b>멈출 만큼</b> 중대하다.', p: [[150, '팀 회의', () => [30, 75, 120].map((x, i) => A(x, [BL, MN, OR][i], 'calm', null, .45)).join('')], [280, '매우 중대', () => W.vital()], [150, '모두 그녀를 본다', () => A(75, MN, 'smile', 'M18 -92 L36 -126', .7) + A(25, BL, 'smile', null, .4) + A(125, OR, 'smile', null, .4)]] }],
      trivial: [
        { b: '실수', en: 'It was a trivial mistake.', ko: '그건 사소한 실수였다.', feel: '영향이 <b>거의 없다.</b>', p: [[150, '오타 하나', () => DOC(75, 130, 1.6) + t(90, 120, 14, 'ㄱ', RD)], [280, '거의 안 기운다', () => W.trivial()], [150, '쓱 고친다', () => A(75, BL, 'smile', 'M18 -92 L40 -60', .8)]] },
        { b: '다툼', en: 'Don\'t fight over trivial matters.', ko: '사소한 일로 싸우지 마.', feel: '싸울 만한 <b>무게가 없다.</b>', p: [[150, '"빨대 색깔이…"', () => A(40, OR, 'stern', null, .5) + A(110, GN, 'stern', null, .5)], [280, '영향이 거의 없음', () => W.trivial()], [150, '화해', () => A(50, OR, 'smile', 'M20 -90 L40 -70', .5) + A(100, GN, 'smile', 'M-20 -90 L-40 -70', .5)]] }],
      minor: [
        { b: '수술', en: 'He had minor surgery.', ko: '그는 간단한 수술을 받았다.', feel: '정도가 <b>작다.</b>', p: [[150, '병원', () => BOXG(30, 60, 90, 178, '#e8eef2') + t(75, 110, 24, '✚', GN)], [280, '정도가 작음', () => W.minor()], [150, '다음 날 퇴원', () => A(75, BR, 'smile', 'M18 -92 L36 -126', .8)]] },
        { b: '변경', en: 'We made a few minor changes.', ko: '몇 군데 살짝 고쳤다.', feel: '바꾼 <b>정도가 작다.</b>', p: [[150, '설계도', () => BOXG(20, 50, 110, 110, '#cfe6f5') + l('M40 70 h70 v70 h-70 z', 2, BL)], [280, '정도가 작음', () => W.minor()], [150, '창문 하나만', () => BOXG(20, 50, 110, 110, '#cfe6f5') + l('M40 70 h70 v70 h-70 z', 2, BL) + f('M80 80 h20 v16 h-20 z', OR)]] }],
      negligible: [
        { b: '비용', en: 'The extra cost is negligible.', ko: '추가 비용은 무시해도 될 정도다.', feel: '돈이 <b>티도 안 날</b> 만큼.', p: [[150, '영수증', () => DOC(75, 130, 1.6) + t(75, 170, 14, '+₩10', BL)], [280, '무시할 만큼', () => W.negligible()], [150, '"신경 쓰지 마"', () => A(75, BR, 'smile', null, .8)]] },
        { b: '위험', en: 'The risk is negligible.', ko: '위험은 무시해도 될 정도다.', feel: '위험이 <b>거의 0.</b>', p: [[150, '튼튼한 다리', () => l('M0 160 H150', 8, '#888') + l('M30 160 v78 M120 160 v78', 6, '#555')], [280, '무시할 만큼', () => W.negligible()], [150, '편하게 건넌다', () => l('M0 200 H150', 8, '#888') + A(75, MN, 'smile', null, .4)]] }],
      petty: [
        { b: '과자', en: 'They had a petty fight over cookies.', ko: '그들은 과자 하나로 옹졸하게 싸웠다.', feel: '<b>하찮은 일</b>에 매달린다.', p: [[150, '마지막 과자', () => COOKIE(75, 160)], [280, '하찮은 일에 옹졸', () => W.petty(COOKIE(196, 140))], [150, '둘 다 삐짐', () => A(40, BL, 'stern', null, .55) + A(110, OR, 'stern', null, .55)]] },
        { b: '복수', en: 'Don\'t be petty.', ko: '쪼잔하게 굴지 마.', feel: '작은 일을 <b>옹졸하게</b> 갚지 마.', p: [[150, '"어제 나 안 불렀지?"', () => A(75, MN, 'stern', null, .8)], [280, '하찮은 일에 옹졸', () => W.petty(t(196, 140, 18, '"너도 안 불러"', RD))], [150, '"그냥 넘어가자"', () => A(45, BL, 'smile', 'M18 -92 L46 -100', .6) + A(110, MN, 'phew', null, .55)]] }]
    };
    const CORE = { important: '<b>영향이 크다.</b>', crucial: '<b>결과가 여기서 갈린다.</b>', essential: '<b>없으면 안 된다.</b>', vital: '<b>생명 · 안전처럼 중대하다.</b>', trivial: '<b>영향이 거의 없다.</b>', minor: '<b>정도가 작다.</b>', negligible: '<b>무시할 만큼 작다.</b>', petty: '<b>하찮은 일에 옹졸하다.</b>' };
