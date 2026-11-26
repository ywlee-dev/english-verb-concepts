    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 용수철 저울과 "무엇이?" 칸이다 — 저울이 얼마나 늘어나나, 그리고 hefty · massive · burdensome · weightless처럼 무엇을 보고 하는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'hefty', BASIC_B = '노트 장면';
    const FX = { heavy: [.5, 220, 160, .25, .4], hefty: [.4, 260, 200, .25, .4], massive: [.9, 120, 80, .35, .4], burdensome: [.8, 200, 140, .2, .5], light: [.2, 1200, 1300, .12, .4], featherlight: [.4, 1800, 2200, .08, .4], weightless: [1, 900, 1400, .08, .5] };
    const ORDER = MIX(['heavy', 'hefty', 'massive', 'burdensome', 'light', 'featherlight', 'weightless']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5';
    const LV = { weightless: 0, featherlight: .06, light: .22, heavy: .68, hefty: .78, burdensome: .84, massive: .96 };
    const WHAT = { hefty: '들어 본 느낌', massive: '덩치 · 규모', burdensome: '일 · 부담', featherlight: '놀랄 만큼', weightless: '떠 있는 상태' };
    const TC = (v) => v < .4 ? WT : v < .9 ? OR : RD;
    const SPRING = (v) => { const c = TC(v);
      if (!v) return l('M62 20 v14', 4) + l('M62 34 q8 6 0 12 q-8 6 0 12', 3, '#999') + g(62, 120, -8, 1, BOXG(-26, -20, 52, 40, '#f2d59a')) + t(24, 96, 16, '~', WT) + t(100, 140, 16, '~', WT) + t(62, 220, 13, '무게 0', WT);
      const yE = 50 + 120 * v, n = 6, h = (yE - 34) / n;
      return l('M62 20 v14', 4) + l('M62 34 ' + Array.from({ length: n }, (_, i) => 'l' + (i % 2 ? -12 : 12) + ' ' + h / 2 + ' l' + (i % 2 ? 12 : -12) + ' ' + h / 2).join(' '), 3, '#666') +
        BOXG(62 - 18 - 20 * v, yE, 36 + 40 * v, 22 + 18 * v, c === RD ? '#c9a171' : '#f2d59a') + t(62, 220, 13, '무게 ' + Math.round(v * 100), c); };
    const TP = (id, b, z) => { const c = TC(LV[id]);
      return DARK(280, '#f6f4ee') + SPRING(LV[id]) + BOXG(120, 56, 146, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(193, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(193, 136, 18, WHAT[id], BL) : t(193, 128, 15, '그냥', '#888') + t(193, 150, 15, '무게', '#888'))) + sfx(193, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { heavy: P('heavy', '끄응'), hefty: P('hefty', '묵직'), massive: P('massive', '어마어마'), burdensome: P('burdensome', '휴우…'), light: P('light', '번쩍'), featherlight: P('featherlight', '사뿐'), weightless: P('weightless', '둥실') };
    // 작은 그림들
    const LIFT = 'M-20 -90 L-30 -50 M20 -90 L30 -50';
    const UP = 'M-20 -90 L-36 -130 M20 -90 L36 -130';
    const BX = (x, y, w, h, c) => BOXG(x - w / 2, y - h, w, h, c || '#c9a171') + l('M' + (x - w / 2) + ' ' + (y - h / 2) + ' h' + w, 2, '#8a6a3a');
    const SWT = (x, y) => f('M' + x + ' ' + y + ' q-5 8 0 11 q5 -3 0 -11', '#9fd3f0', 2);
    const FEATHER = (x, y, r) => g(x, y, r || 0, 1, f('M0 -24 q14 12 0 48 q-14 -36 0 -48', '#fff') + l('M0 -20 v44', 2));
    const BOOK2 = (x, y, k) => g(x, y, 0, k || 1, f('M-26 -36 h52 v36 h-52 z', BL) + l('M-22 -6 h44', 3, '#fff'));
    const STATUE = (x, k) => g(x, 238, 0, k, BOXG(-40, -30, 80, 30, '#bbb') + f('M-22 -30 v-90 h44 v90 z', '#ccc') + '<circle cy="-140" r="22" fill="#ccc" stroke="#222" stroke-width="3"/>');
    const WHALE = (x, y, k) => g(x, y, 0, k, f('M-60 0 q10 -40 70 -36 q40 2 50 30 l26 -18 l-6 30 l6 30 l-26 -18 q-30 30 -90 22 q-30 -4 -30 -40 z', BL) + '<circle cx="-34" cy="-6" r="4"/>');
    const BILL = (x, y, v) => f('M' + (x - 30) + ' ' + (y - 40) + ' h60 v80 h-60 z', '#fff') + t(x, y + 4, 15, v, RD) + l('M' + (x - 20) + ' ' + (y - 24) + ' h40', 2, '#bbb');
    const POOL = (w) => f('M0 140 H' + w + ' V240 H0 z', '#8fd0ee') + l('M10 140 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0', 2, WT);
    const LAPTOP = (x, y) => f('M' + (x - 28) + ' ' + (y - 34) + ' h56 v30 h-56 z', '#888') + f('M' + (x - 36) + ' ' + (y - 4) + ' h72 v6 h-72 z', '#555');
    const HRT = (x, y, z, c) => t(x, y, z || 30, '♥', c || RD);
    const C = {
      heavy: { n: 'heavy', past: 'heavy', en: 'This box is heavy.', ko: '이 상자는 무겁다.', feel: '<b>무게가 많이 나간다.</b> 가장 기본이 되는 말.', t: .5,
        p: [[150, '이삿날', () => BX(75, 238, 70, 60) + BX(75, 178, 60, 40)], [280, '저울이 쭉', () => W.heavy()], [150, '끙끙', () => BX(75, 214, 60, 44) + A(75, MN, 'phew', LIFT, .8) + SWT(110, 100)]] },
      hefty: { n: 'hefty', past: 'hefty', en: 'This box is hefty.', ko: '이 상자 묵직하다.', feel: '<b>들어 보니 상당하다.</b> 손에 느껴지는 무게.', t: .4,
        p: [[150, '작은데…', () => BX(75, 238, 40, 34)], [280, '들어 본 느낌', () => W.hefty()], [150, '"어, 묵직한데?"', () => A(75, BL, 'shock', LIFT, .8) + BX(75, 214, 40, 30) + t(124, 60, 18, '어?', OR)]] },
      massive: { n: 'massive', past: 'massive', en: 'That statue is massive.', ko: '저 조각상은 거대하다.', feel: '<b>덩치 · 규모가 크다.</b> 무게보다 크기가 먼저.', t: .9,
        p: [[150, '광장에 도착', () => STATUE(75, .9)], [280, '덩치 · 규모', () => W.massive()], [150, '올려다본다', () => A(40, MN, 'shock', null, .35) + g(110, 238, 0, .9, f('M-30 0 V-200 h60 V0 z', '#ccc'))]] },
      burdensome: { n: 'burdensome', past: 'burdensome', en: 'These extra tasks are burdensome.', ko: '이 추가 업무들이 짐스럽다.', feel: '<b>감당해야 할 부담.</b> 몸의 짐 말고 일 · 규칙에도.', t: .8,
        p: [[150, '"이것도 해 줘"', () => DOC(50, 120, 1.1) + DOC(70, 130, 1.1) + DOC(90, 140, 1.1)], [280, '일 · 부담', () => W.burdensome([0, 1, 2, 3].map((i) => DOC(193, 156 - i * 14, .8)).join(''))], [150, '어깨가 처진다', () => A(75, BL, 'down', null, .8) + BX(75, 100, 50, 24, '#ddd')]] },
      light: { n: 'light', past: 'light', en: 'This box is light.', ko: '이 상자는 가볍다.', feel: '<b>무게가 적다.</b> "빛 · 밝은"이라는 다른 뜻도 있다.', t: .2,
        p: [[150, '큰 상자인데', () => BX(75, 238, 80, 70, '#f2d59a')], [280, '저울이 조금', () => W.light()], [150, '번쩍', () => A(75, MN, 'smile', UP, .8) + BX(75, 96, 60, 40, '#f2d59a')]] },
      featherlight: { n: 'featherlight', past: 'featherlight', en: 'This jacket is featherlight.', ko: '이 재킷은 깃털처럼 가볍다.', feel: '<b>놀랄 만큼 가볍다.</b> 있는 줄도 모르겠다.', t: .4,
        p: [[150, '새 재킷', () => f('M75 60 l-40 20 v80 h80 v-80 z', GN)], [280, '놀랄 만큼', () => W.featherlight(FEATHER(193, 136, 20))], [150, '입은 줄도 모름', () => A(75, MN, 'smile', null, .8) + FEATHER(120, 70, 30)]] },
      weightless: { n: 'weightless', past: 'weightless', en: 'The pen seems weightless in the spacecraft.', ko: '우주선 안에서는 펜이 무게가 없는 것 같다.', feel: '<b>무게가 안 느껴진다.</b> 떠 있다. 질량이 사라진 건 아니다.', t: 1,
        p: [[150, '우주선 안', () => DARK(150, '#1b1d26') + STAR(30, 40, 6, '#fff') + STAR(120, 60, 5, '#fff') + BOXG(40, 100, 70, 50, '#cfe6f5')], [280, '떠 있는 상태', () => W.weightless(g(193, 136, -30, 1, l('M-30 0 h60', 6, BL)))], [150, '둥둥 떠다닌다', () => DARK(150, '#1b1d26') + g(75, 200, -20, .7, MAN(BL, 'smile', UP)) + g(120, 60, 40, 1, l('M-16 0 h32', 5, OR))]] }
    };
    const MORE = {
      heavy: [
        { b: '장바구니', en: 'My shopping bags are heavy.', ko: '장바구니가 무겁다.', feel: '<b>무게가 많이</b> 나간다.', p: [[150, '마트에서 잔뜩', () => BX(40, 238, 40, 50, '#f2d59a') + BX(100, 238, 40, 60, '#f2d59a')], [280, '저울이 쭉', () => W.heavy()], [150, '손가락이 빨개짐', () => A(75, MN, 'sad', LIFT, .8) + BX(45, 212, 26, 40, '#f2d59a') + BX(105, 212, 26, 40, '#f2d59a')]] },
        { b: '마음', en: 'I have a heavy heart today.', ko: '오늘은 마음이 무겁다.', feel: '마음에도 <b>무게가 실린다.</b>', p: [[150, '친구가 이사 간다', () => BUS(-20, 220, .6) + A(120, MN, 'sad', null, .5)], [280, '마음의 무게', () => W.heavy(HRT(193, 150, 40, '#888'))], [150, '창밖만 본다', () => BOXG(30, 40, 70, 60, '#cfe6f5') + A(100, MN, 'down', null, .7)]] }],
      hefty: [
        { b: '사전', en: 'That dictionary is hefty.', ko: '그 사전은 묵직하다.', feel: '들어 보니 <b>상당하다.</b>', p: [[150, '도서관 책장', () => BOXG(20, 40, 110, 190, '#c9a171') + BOOK2(75, 120, 1) + BOOK2(75, 200, 1)], [280, '들어 본 느낌', () => W.hefty(BOOK2(193, 160, 1.4))], [150, '두 손으로', () => A(75, BL, 'phew', LIFT, .8) + BOOK2(75, 220, 1.1)]] },
        { b: '요금', en: 'We got a hefty bill.', ko: '요금이 묵직하게 나왔다.', feel: '금액도 <b>묵직하다.</b>', p: [[150, '전기를 펑펑', () => BULB(45, 80, .6) + BULB(105, 80, .6)], [280, '금액의 무게', () => W.hefty(BILL(193, 130, '₩₩₩'))], [150, '헉', () => A(75, MN, 'shock', null, .8) + t(124, 60, 18, '헉', RD)]] }],
      massive: [
        { b: '고래', en: 'A blue whale is massive.', ko: '흰긴수염고래는 거대하다.', feel: '<b>덩치가</b> 어마어마하다.', p: [[150, '배 위에서', () => f('M0 200 H150 V240 H0 z', '#8fd0ee') + f('M30 200 l10 -20 h70 l10 20 z', '#c9a171')], [280, '덩치 · 규모', () => W.massive(WHALE(190, 140, .55))], [150, '배보다 크다', () => f('M0 180 H150 V240 H0 z', '#8fd0ee') + WHALE(80, 190, 1)]] },
        { b: '성공', en: 'The show was a massive hit.', ko: '그 공연은 엄청난 성공이었다.', feel: '성공도 <b>규모가 크다.</b>', p: [[150, '첫 공연', () => BOXG(20, 50, 110, 80, '#222') + t(75, 98, 16, '★ 공연 ★', '#f2b632')], [280, '성공의 규모', () => W.massive(t(193, 140, 30, '★★★', '#f2b632'))], [150, '관객이 꽉', () => [20, 50, 80, 110, 140].map((x, i) => g(x, 222, 0, .3, HEAD(i % 2 ? 'smile' : 'shock'))).join('') + t(75, 60, 18, '짝짝짝', OR)]] }],
      burdensome: [
        { b: '외투', en: 'The heavy coat felt burdensome on the trip.', ko: '여행 내내 두꺼운 외투가 짐스러웠다.', feel: '들고 다니기 <b>부담</b>이다.', p: [[150, '따뜻한 여행지', () => SUN(110, 40, 20) + A(60, MN, 'phew', null, .7)], [280, '짐의 부담', () => W.burdensome(f('M193 100 l-30 14 v56 h60 v-56 z', BR))], [150, '팔에 걸고 낑낑', () => A(75, MN, 'down', 'M18 -92 L30 -60', .8) + f('M96 160 h24 v50 h-24 z', BR)]] },
        { b: '비밀', en: 'Keeping the secret was burdensome.', ko: '비밀을 지키는 게 짐스러웠다.', feel: '마음에 <b>짐</b>이 얹혔다.', p: [[150, '"아무한테도 말 마"', () => A(50, OR, 'stern', null, .6) + A(110, BL, 'shock', null, .6)], [280, '마음의 부담', () => W.burdensome(t(193, 146, 40, '🤐'))], [150, '밤새 뒤척', () => DARK(150, '#2b3550') + f('M10 200 q65 -40 130 0 v38 h-130 z', BL) + g(75, 170, 0, .6, HEAD('sad'))]] }],
      light: [
        { b: '노트북', en: 'My new laptop is light.', ko: '새 노트북이 가볍다.', feel: '<b>무게가 적다.</b>', p: [[150, '택배 도착', () => PKG(75, 190, 1.2)], [280, '저울이 조금', () => W.light(LAPTOP(193, 150))], [150, '한 손으로', () => A(75, BL, 'smile', 'M18 -92 L40 -120', .8) + LAPTOP(118, 78)]] },
        { b: '마음', en: 'I feel light after the exam.', ko: '시험이 끝나니 마음이 가볍다.', feel: '마음도 <b>무게가 빠졌다.</b>', p: [[150, '마지막 시험', () => DOC(75, 120, 1.4) + CLK(120, 40, 18)], [280, '마음의 무게', () => W.light(HRT(193, 146, 36, OR))], [150, '깡충', () => g(75, 220, 0, .8, MAN(MN, 'smile', UP)) + t(124, 50, 18, '끝!', OR)]] }],
      featherlight: [
        { b: '공', en: 'The beach ball is featherlight.', ko: '비치볼은 깃털처럼 가볍다.', feel: '<b>거의 안 느껴진다.</b>', p: [[150, '바닷가', () => f('M0 200 H150 V240 H0 z', '#f2d59a') + SUN(120, 40, 16)], [280, '놀랄 만큼', () => W.featherlight('<circle cx="193" cy="136" r="30" fill="#fff" stroke="#222" stroke-width="3"/>' + l('M163 136 h60', 3, RD))], [150, '휙 날아간다', () => '<circle cx="110" cy="50" r="18" fill="#fff" stroke="#222" stroke-width="3"/>' + A(50, BL, 'shock', UP, .7)]] },
        { b: '손길', en: 'She gave a featherlight touch.', ko: '그녀가 깃털처럼 살짝 손을 댔다.', feel: '손길이 <b>거의 안 느껴질 만큼</b> 가볍다.', p: [[150, '잠든 아기', () => f('M20 200 q55 -40 110 0 v30 h-110 z', '#f4c6d0') + g(75, 176, 0, .5, HEAD('calm'))], [280, '손길의 무게', () => W.featherlight(FEATHER(193, 136, -30))], [150, '안 깼다', () => f('M20 200 q55 -40 110 0 v30 h-110 z', '#f4c6d0') + g(75, 176, 0, .5, HEAD('smile')) + ZZ(100, 110)]] }],
      weightless: [
        { b: '수영장', en: 'I feel weightless in the pool.', ko: '수영장에서는 몸이 무게가 없는 것 같다.', feel: '<b>떠 있는</b> 느낌.', p: [[150, '물에 들어간다', () => POOL(150) + A(75, MN, 'smile', null, .6)], [280, '떠 있는 상태', () => W.weightless()], [150, '둥실', () => POOL(150) + g(130, 150, -80, .6, MAN(MN, 'smile', UP))]] },
        { b: '음악', en: 'The music made me feel weightless.', ko: '음악을 들으니 몸이 둥실 뜨는 것 같았다.', feel: '마음까지 <b>떠오른다.</b>', p: [[150, '이어폰을 꽂는다', () => A(75, MN, 'calm', null, .8) + t(124, 60, 22, '♪', BL)], [280, '마음이 떠 있다', () => W.weightless(t(176, 130, 26, '♪', BL) + t(214, 150, 22, '♫', BL))], [150, '눈을 감고 둥실', () => g(75, 200, 10, .7, MAN(MN, 'phew', UP)) + t(124, 50, 22, '♫', BL)]] }]
    };
    const CORE = { heavy: '<b>무게가 많이 나간다.</b>', hefty: '<b>들어 보니 상당하다.</b>', massive: '<b>덩치 · 규모가 크다.</b>', burdensome: '<b>감당할 부담.</b>', light: '<b>무게가 적다.</b>', featherlight: '<b>놀랄 만큼 가볍다.</b>', weightless: '<b>무게가 안 느껴지는 상태.</b>' };
