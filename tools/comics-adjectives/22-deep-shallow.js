    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "물 단면 — 겉에서 바닥까지"와 "무엇이?" 칸이다 — 바닥이 얼마나 먼가, 그리고 profound · superficial · surface처럼 물이 아닌 생각 · 이해 · 흠의 깊이인가가 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'profound', BASIC_B = '노트 장면';
    const FX = { deep: [.8, 200, 150, .15, .4], bottomless: [1.2, 160, 60, .15, .4], profound: [1, 400, 300, .08, .5], shallow: [.2, 1200, 1300, .1, .4], superficial: [.3, 900, 1000, .08, .4], surface: [.1, 1800, 1800, .08, .4] };
    const ORDER = MIX(['deep', 'bottomless', 'profound', 'shallow', 'superficial', 'surface']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const DP = { bottomless: 1, deep: .85, profound: .8, shallow: .2, superficial: .14, surface: .02 };
    const WHAT = { bottomless: '바닥이 안 보임', profound: '생각 · 마음의 깊이', superficial: '이해 · 관계가 겉에만', surface: '흠이 겉에만' };
    const TC = (v) => v > .5 ? BL : OR;
    const WATER = (id) => { const v = DP[id], y = 66 + v * 130;
      let s = id === 'bottomless' ? '<defs><linearGradient id="bl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd0ee"/><stop offset="1" stop-color="#0b1a2e"/></linearGradient></defs>' + f('M14 60 h96 v150 h-96 z', 'url(#bl)', 0) + t(62, 196, 18, '?', '#fff')
        : f('M14 60 h96 v' + (y - 60) + ' h-96 z', id === 'profound' ? '#b8a8e0' : '#8fd0ee', 0) + f('M14 ' + y + ' h96 v6 h-96 z', '#c9a171', 0);
      s += l('M14 60 h96', 3, WT) + l('M14 60 V210 M110 60 V210', 2, '#999');
      if (id !== 'bottomless') s += l('M100 64 V' + (y - 2), 2, TC(v)) + l('M96 68 l4 -6 l4 6 M96 ' + (y - 6) + ' l4 6 l4 -6', 2, TC(v));
      if (id === 'surface') s += l('M30 58 l10 4 l8 -4 l10 4', 3, RD);
      if (id === 'profound') s += t(50, 140, 22, '💭');
      return s + t(62, 230, 12, id === 'bottomless' ? '깊이 ?' : '깊이 ' + Math.round(v * 100), TC(v)); };
    const TP = (id, b, z) => { const c = TC(DP[id]);
      return DARK(280, '#f6f4ee') + WATER(id) + t(62, 48, 11, '겉', WT) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 14 : 17, WHAT[id], BL) : t(196, 128, 15, '겉에서', '#888') + t(196, 150, 15, '바닥까지', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { deep: P('deep', '깊디깊은'), bottomless: P('bottomless', '끝이 없다'), profound: P('profound', '울림'), shallow: P('shallow', '찰방'), superficial: P('superficial', '겉핥기'), surface: P('surface', '살짝 긁힘') };
    // 작은 그림들
    const POOLC = (h) => f('M0 ' + (238 - h) + ' H150 V240 H0 z', '#8fd0ee') + l('M0 ' + (238 - h) + ' H150', 3, WT);
    const PIT = () => f('M20 238 V120 q55 -16 110 0 V238 z', '#0b1a2e') + f('M0 120 h20 v118 h-20 z M130 120 h20 v118 h-20 z', '#9ac47a');
    const DISH = (x, y, deep) => f('M' + (x - 40) + ' ' + (y - (deep ? 30 : 10)) + ' h80 q-4 ' + (deep ? 34 : 14) + ' -40 ' + (deep ? 34 : 14) + ' q-36 0 -40 -' + (deep ? 34 : 14) + ' z', '#fff');
    const CUP = (x, y, k) => g(x, y, 0, k || 1, f('M-16 -30 h32 l-3 30 h-26 z', '#fff') + f('M-13 -26 h26 v6 h-26 z', '#6a4a2a', 0) + l('M16 -22 q12 2 0 14', 3));
    const CARR = (x, y, k) => g(x, y, 0, k || 1, f('M-60 0 v-22 l16 -18 h58 l20 18 h26 v22 z', RD) + '<circle cx="-34" cy="2" r="10" fill="#333"/><circle cx="34" cy="2" r="10" fill="#333"/>');
    const BOOKO = (x, y) => f('M' + (x - 36) + ' ' + y + ' q18 -10 36 0 q18 -10 36 0 v-44 q-18 -10 -36 0 q-18 -10 -36 0 z', '#fff') + l('M' + x + ' ' + y + ' v-44', 2);
    const C = {
      deep: { n: 'deep', past: 'deep', en: 'The water is deep.', ko: '물이 깊다.', feel: '<b>겉에서 바닥까지 멀다.</b> 잠 · 목소리 · 생각에도.', t: .8,
        p: [[150, '다이빙대', () => POOLC(140) + f('M10 60 h40 v6 h-40 z', '#888') + g(30, 60, 0, .35, MAN(BL, 'smile'))], [280, '바닥이 멀다', () => W.deep()], [150, '발이 안 닿는다', () => POOLC(160) + g(75, 150, 0, .5, HEAD('shock'))]] },
      bottomless: { n: 'bottomless', past: 'bottomless', en: 'The pit looked bottomless.', ko: '그 구덩이는 바닥이 없어 보였다.', feel: '<b>끝이 없어 보인다.</b> 정말 없다는 말은 아니다.', t: 1.2,
        p: [[150, '숲속 구덩이', () => PIT()], [280, '바닥이 안 보임', () => W.bottomless()], [150, '돌을 던져 본다', () => PIT() + '<circle cx="75" cy="150" r="5" fill="#888"/>' + t(75, 100, 14, '…소리 없음', '#888')]] },
      profound: { n: 'profound', past: 'profound', en: 'That was a profound insight.', ko: '그건 깊이 있는 통찰이었다.', feel: '<b>생각 · 마음을 깊이 건드린다.</b> 어렵다는 뜻이 아니다. 물에는 안 쓴다.', t: 1,
        p: [[150, '할머니의 한마디', () => A(75, '#888', 'smile', null, .8) + BUB(75, 34, 136, '"천천히 가도 돼"', 13)], [280, '생각 · 마음의 깊이', () => W.profound()], [150, '오래 생각한다', () => A(75, MN, 'calm', null, .8) + t(124, 60, 20, '…', '#888')]] },
      shallow: { n: 'shallow', past: 'shallow', en: 'The water is shallow.', ko: '물이 얕다.', feel: '<b>겉에서 바닥까지 가깝다.</b> 사람 · 생각에 쓰면 흉.', t: .2,
        p: [[150, '개울', () => POOLC(20) + [30, 70, 110].map((x) => '<circle cx="' + x + '" cy="232" r="6" fill="#999"/>').join('')], [280, '바닥이 가깝다', () => W.shallow()], [150, '발목까지만', () => POOLC(24) + A(75, OR, 'smile', null, .7)]] },
      superficial: { n: 'superficial', past: 'superficial', en: 'My understanding is still superficial.', ko: '내 이해는 아직 겉핥기다.', feel: '<b>이해가 겉에만 머문다.</b> 짧다고 다 그런 건 아니다.', t: .3,
        p: [[150, '책 첫 장만', () => BOOKO(75, 160)], [280, '이해가 겉에만', () => W.superficial()], [150, '질문에 막힌다', () => A(75, BL, 'phew', null, .8) + t(124, 50, 20, '?', RD)]] },
      surface: { n: 'surface', past: 'surface', en: 'It\'s only surface damage.', ko: '겉만 조금 상했을 뿐이다.', feel: '<b>흠이 겉에만 있다.</b> 명사 앞에 쓴다.', t: .1,
        p: [[150, '주차장 쿵', () => CARR(75, 200, 1) + t(75, 100, 16, '쿵', RD)], [280, '흠이 겉에만', () => W.surface()], [150, '"닦으면 되겠네"', () => CARR(75, 220, .8) + l('M40 196 l10 2 l8 -2', 2, RD) + A(130, BL, 'smile', null, .4)]] }
    };
    const MORE = {
      deep: [
        { b: '잠', en: 'He fell into a deep sleep.', ko: '그는 깊은 잠에 빠졌다.', feel: '잠도 <b>바닥까지</b> 깊다.', p: [[150, '이불 속', () => f('M10 200 q65 -40 130 0 v38 h-130 z', BL) + g(75, 176, 0, .5, HEAD('phew'))], [280, '잠의 깊이', () => W.deep(ZZ(180, 150))], [150, '알람도 못 듣는다', () => CLK(110, 50, 22) + t(110, 90, 14, '따르릉', RD) + f('M10 200 q65 -40 130 0 v38 h-130 z', BL)]] },
        { b: '목소리', en: 'He has a deep voice.', ko: '그는 목소리가 굵고 낮다.', feel: '소리도 <b>깊은 곳</b>에서 울린다.', p: [[150, '"안녕하세요"', () => A(75, BR, 'calm', null, .8)], [280, '소리의 깊이', () => W.deep(l('M150 150 q20 -20 40 0 t40 0 t20 0', 6, BR))], [150, '모두 돌아본다', () => A(40, MN, 'shock', null, .55) + A(110, OR, 'shock', null, .5)]] }],
      bottomless: [
        { b: '커피', en: 'The cafe has bottomless coffee.', ko: '그 카페는 커피가 무한 리필이다.', feel: '잔에 <b>끝이 없는</b> 것처럼 계속 채워 준다.', p: [[150, '카페', () => CUP(75, 200, 1.6)], [280, '끝이 없어 보임', () => W.bottomless(CUP(196, 160, 1.2) + t(226, 120, 18, '∞', OR))], [150, '세 잔째', () => A(75, BL, 'smile', 'M18 -92 L22 -126', .8) + t(124, 60, 16, '×3', OR)]] },
        { b: '배', en: 'My son has a bottomless stomach.', ko: '우리 아들은 배가 끝이 없다.', feel: '먹어도 먹어도 <b>바닥이 안 보인다.</b>', p: [[150, '저녁 두 그릇', () => DISH(50, 200, true) + DISH(105, 200, true)], [280, '끝이 없어 보임', () => W.bottomless(t(196, 146, 30, '🍚🍚🍚'))], [150, '"간식은?"', () => A(75, OR, 'smile', null, .6) + t(110, 60, 16, '간식?', OR)]] }],
      profound: [
        { b: '책', en: 'The book had a profound effect on me.', ko: '그 책은 내게 깊은 영향을 주었다.', feel: '마음 <b>깊은 곳까지</b> 닿았다.', p: [[150, '밤에 읽은 책', () => DARK(150, '#2b3550') + BOOKO(75, 160)], [280, '마음의 깊이', () => W.profound(t(196, 146, 34, '♥', MN))], [150, '다음 날부터 달라짐', () => A(75, MN, 'smile', 'M18 -92 L36 -126', .8) + SUN(120, 40, 14)]] },
        { b: '침묵', en: 'There was a profound silence.', ko: '깊은 침묵이 흘렀다.', feel: '조용함이 <b>깊이</b> 가라앉았다.', p: [[150, '추모의 순간', () => [30, 75, 120].map((x) => A(x, '#555', 'down', null, .45)).join('')], [280, '침묵의 깊이', () => W.profound(t(196, 140, 22, '……', '#555'))], [150, '촛불 하나', () => DARK(150, '#2b3550') + f('M70 160 h10 v40 h-10 z', '#fff') + FIRE(75, 150, .2)]] }],
      shallow: [
        { b: '접시', en: 'Use a shallow dish.', ko: '얕은 접시를 쓰세요.', feel: '그릇도 <b>바닥이 가깝다.</b>', p: [[150, '요리책', () => BOOKO(75, 160)], [280, '바닥이 가깝다', () => W.shallow(DISH(196, 160, false))], [150, '파스타 담기', () => DISH(75, 200, false) + l('M50 180 q25 -10 50 0', 4, GD)]] },
        { b: '사람', en: 'He seems shallow.', ko: '그는 생각이 얕아 보인다.', feel: '사람에게 쓰면 <b>속이 얕다</b>는 흉.', p: [[150, '"차가 뭐야?"', () => A(75, BR, 'smile', 'M18 -92 L40 -120', .8) + CARR(120, 220, .3)], [280, '생각의 깊이', () => W.shallow(g(196, 146, 0, .7, HEAD('smile')))], [150, '대화가 끊긴다', () => A(40, MN, 'calm', null, .55) + A(110, BR, 'smile', null, .55) + t(75, 50, 16, '…', '#888')]] }],
      superficial: [
        { b: '상처', en: 'It\'s just a superficial cut.', ko: '그냥 살짝 긁힌 상처야.', feel: '상처가 <b>겉에만</b> 났다.', p: [[150, '종이에 베였다', () => g(75, 130, 0, 1.4, HND(0, 0, .5, SK)) + l('M70 126 l14 -4', 2, RD)], [280, '겉에만', () => W.superficial()], [150, '밴드 하나', () => f('M50 120 h50 v16 h-50 z', '#f2d59a') + A(120, MN, 'smile', null, .45)]] },
        { b: '대화', en: 'We only had superficial talk.', ko: '우리는 겉도는 얘기만 했다.', feel: '대화가 <b>겉에만</b> 맴돌았다.', p: [[150, '첫 모임', () => A(40, MN, 'smile', null, .55) + A(110, BL, 'smile', null, .55)], [280, '관계가 겉에만', () => W.superficial(t(196, 140, 15, '"날씨 좋네요"', BL))], [150, '집에 와서 허전', () => A(75, MN, 'calm', null, .8)]] }],
      surface: [
        { b: '긁힘', en: 'The car has surface scratches.', ko: '차에 겉만 긁힌 자국이 있다.', feel: '흠이 <b>겉에만</b> 있다.', p: [[150, '골목 주차', () => CARR(75, 200, 1) + l('M30 186 l40 -4', 2, RD)], [280, '흠이 겉에만', () => W.surface()], [150, '광택제로 쓱쓱', () => CARR(75, 220, .8) + A(130, BL, 'smile', 'M-18 -92 L-40 -60', .45)]] },
        { b: '문제', en: 'Those are just surface problems.', ko: '그건 겉으로 드러난 문제일 뿐이다.', feel: '보이는 건 <b>겉면</b>, 진짜 문제는 아래에.', p: [[150, '빙산', () => f('M0 120 H150 V240 H0 z', '#4a7fb5') + f('M60 120 l15 -30 l15 30 z', '#fff') + f('M30 120 l45 100 l45 -100 z', 'rgba(255,255,255,.4)')], [280, '겉면만', () => W.surface(f('M180 140 l16 -30 l16 30 z', '#fff'))], [150, '"더 깊이 보자"', () => A(75, BL, 'stern', 'M18 -92 L40 -60', .8)]] }]
    };
    const CORE = { deep: '<b>겉에서 바닥까지 멀다.</b>', bottomless: '<b>바닥이 없어 보인다.</b>', profound: '<b>생각 · 마음을 깊이 건드린다.</b>', shallow: '<b>겉에서 바닥까지 가깝다.</b>', superficial: '<b>이해 · 관계가 겉에만.</b>', surface: '<b>흠이 겉에만 있다.</b>' };
