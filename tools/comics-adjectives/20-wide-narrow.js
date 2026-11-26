    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "위에서 본 공간 하나와 사람 점"과 "무엇이?" 칸이다 — 벽 사이가 얼마나 넓은가, 그리고 spacious · cramped(안의 공간) · confined(움직일 범위) · vast(규모)처럼 무엇의 넓이인가가 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'cramped', BASIC_B = '노트 장면';
    const FX = { wide: [.6, 500, 500, .1, .4], broad: [.6, 400, 400, .12, .4], spacious: [.8, 700, 700, .08, .4], vast: [1.2, 300, 260, .08, .4], narrow: [.3, 1200, 1200, .12, .4], cramped: [.4, 300, 300, .2, .4], confined: [.5, 200, 200, .2, .4] };
    const ORDER = MIX(['wide', 'broad', 'spacious', 'vast', 'narrow', 'cramped', 'confined']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const WD = { vast: 1, wide: .8, broad: .8, spacious: .75, narrow: .22, cramped: .3, confined: .35 };
    const WHAT = { broad: '폭 · 범위', spacious: '안의 공간이 넉넉', vast: '규모가 아주 큼', cramped: '비좁아 불편', confined: '움직일 범위 제한' };
    const TC = (v) => v > .5 ? GN : RD;
    const DOT = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="7" fill="' + MN + '" stroke="#222" stroke-width="2"/>';
    const TOP = (id) => { const v = WD[id], w = 16 + v * 92, x0 = 62 - w / 2;
      let s = id === 'vast' ? f('M8 50 h108 v150 h-108 z', '#f2d59a') + t(62, 64, 11, '끝이 저 멀리', '#888') : l('M' + x0 + ' 50 V200 M' + (x0 + w) + ' 50 V200', 6, '#555');
      if (id === 'spacious' || id === 'cramped' || id === 'confined') s = f('M' + x0 + ' 70 h' + w + ' v110 h-' + w + ' z', '#fff', 3);
      if (id === 'spacious') s += BOXG(x0 + 8, 160, 16, 12, '#c9a171');
      if (id === 'cramped') s += [[x0 + 4, 74], [x0 + w - 18, 74], [x0 + 4, 160], [x0 + w - 18, 156], [x0 + 4, 116]].map(([x, y]) => BOXG(x, y, 14, 18, '#c9a171')).join('');
      if (id === 'confined') s += l('M' + (x0 - 8) + ' 62 h' + (w + 16) + ' v126 h-' + (w + 16) + ' z', 2, RD) + t(62 + w / 2 + 16, 128, 14, '✕', RD);
      s += DOT(62, 128) + l('M' + (x0 + 4) + ' 214 h' + (w - 8), 2, TC(v)) + l('M' + (x0 + 4) + ' 210 v8 M' + (x0 + w - 4) + ' 210 v8', 2, TC(v));
      return s + t(62, 232, 12, '폭 ' + Math.round(v * 100), TC(v)); };
    const TP = (id, b, z) => { const c = TC(WD[id]);
      return DARK(280, '#f6f4ee') + TOP(id) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 15 : 18, WHAT[id], BL) : t(196, 128, 15, '왼쪽에서', '#888') + t(196, 150, 15, '오른쪽까지', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { wide: P('wide', '널찍'), broad: P('broad', '떡 벌어진'), spacious: P('spacious', '여유'), vast: P('vast', '끝없이'), narrow: P('narrow', '좁디좁은'), cramped: P('cramped', '꽉 끼어'), confined: P('confined', '갇힘') };
    // 작은 그림들
    const ROAD = (w) => f('M' + (75 - w / 2) + ' 238 L' + (75 - w / 6) + ' 60 h' + w / 3 + ' L' + (75 + w / 2) + ' 238 z', '#888') + l('M75 230 V70', 3, '#fff');
    const LIVING = (x, y) => BOXG(x, y, 120, 100, '#f2e8d4') + f('M' + (x + 10) + ' ' + (y + 70) + ' h50 v20 h-50 z', '#a84b40');
    const DESERT = () => f('M0 160 q40 -14 80 0 t80 0 V240 H0 z', '#f2d59a') + SUN(120, 50, 16);
    const ALLEY = () => BOXG(0, 20, 55, 218, '#c8ccd2') + BOXG(95, 20, 55, 218, '#c8ccd2') + f('M55 238 h40 V20 h-40 z', '#888');
    const SEATS = (x, y, n) => Array.from({ length: n }, (_, i) => f('M' + (x + i * 30) + ' ' + y + ' h24 v30 h-24 z', BL)).join('');
    const LEAF = (x, y, k) => g(x, y, 0, k || 1, f('M0 -30 q30 10 0 60 q-30 -50 0 -60', GN) + l('M0 -26 v52', 2, '#1a5a3a'));
    const BED = (x, y) => f('M' + (x - 50) + ' ' + y + ' h100 v20 h-100 z', '#fff') + f('M' + (x - 46) + ' ' + (y - 14) + ' h30 v14 h-30 z', '#cfe6f5');
    const C = {
      wide: { n: 'wide', past: 'wide', en: 'The road is wide.', ko: '길이 넓다.', feel: '<b>왼쪽에서 오른쪽까지가 멀다.</b>', t: .6,
        p: [[150, '새 도로', () => ROAD(150)], [280, '벽 사이가 멀다', () => W.wide()], [150, '차 네 대가 나란히', () => ROAD(150) + [30, 60, 90, 120].map((x) => CAR(x - 15, 220, .25)).join('')]] },
      broad: { n: 'broad', past: 'broad', en: 'He has broad shoulders.', ko: '그는 어깨가 떡 벌어졌다.', feel: '<b>폭이 넓다.</b> 범위가 넓을 때도. 어깨에는 보통 broad.', t: .6,
        p: [[150, '수영장 앞', () => f('M0 200 H150 V240 H0 z', '#8fd0ee') + A(75, BL, 'smile', 'M-20 -90 L-44 -80 M20 -90 L44 -80', .8)], [280, '폭 · 범위', () => W.broad(l('M160 140 h72', 8, BL) + l('M160 130 v20 M232 130 v20', 3, BL))], [150, '문보다 어깨가 넓다', () => BOXG(50, 60, 50, 178, '#c9a171') + A(75, BL, 'phew', 'M-20 -90 L-44 -80 M20 -90 L44 -80', .75)]] },
      spacious: { n: 'spacious', past: 'spacious', en: 'The living room is spacious.', ko: '거실이 넉넉하게 넓다.', feel: '<b>안에서 쓸 공간이 여유롭다.</b> 폭만의 이야기가 아니다.', t: .8,
        p: [[150, '새 집 거실', () => LIVING(15, 100)], [280, '안의 공간이 넉넉', () => W.spacious()], [150, '빙글빙글 춤', () => LIVING(15, 100) + g(75, 196, 20, .4, MAN(MN, 'smile', 'M-20 -90 L-40 -110 M20 -90 L40 -110'))]] },
      vast: { n: 'vast', past: 'vast', en: 'The desert is vast.', ko: '사막이 끝없이 넓다.', feel: '<b>규모가 아주 크다.</b> 사막 · 바다 · 지식에.', t: 1.2,
        p: [[150, '낙타 위에서', () => DESERT() + A(75, BR, 'shock', null, .4)], [280, '규모가 아주 큼', () => W.vast()], [150, '모래, 모래, 모래', () => DESERT() + f('M0 200 q40 -14 80 0 t80 0 V240 H0 z', '#e8c47a')]] },
      narrow: { n: 'narrow', past: 'narrow', en: 'The road is narrow.', ko: '길이 좁다.', feel: '<b>왼쪽에서 오른쪽까지가 가깝다.</b> 방이 작다는 말엔 잘 안 쓴다.', t: .3,
        p: [[150, '골목길', () => ALLEY()], [280, '벽 사이가 가깝다', () => W.narrow()], [150, '옆으로 비켜서기', () => ALLEY() + A(75, MN, 'phew', null, .45)]] },
      cramped: { n: 'cramped', past: 'cramped', en: 'This room feels cramped.', ko: '이 방은 비좁아 답답하다.', feel: '<b>공간이 모자라 불편하다.</b> 가로 폭만의 이야기가 아니다.', t: .4,
        p: [[150, '짐이 가득', () => BOXG(15, 80, 120, 158, '#f2e8d4') + [0, 1, 2].map((i) => PKG(40 + i * 35, 230 - (i % 2) * 30, .8)).join('')], [280, '비좁아 불편', () => W.cramped()], [150, '다리를 못 편다', () => BOXG(15, 80, 120, 158, '#f2e8d4') + g(75, 238, 0, .55, MAN(BL, 'sad', 'M-20 -90 L12 -70 M20 -90 L-12 -68', 'M-12 -42 L-24 -20 L-10 0 M12 -42 L24 -20 L10 0'))]] },
      confined: { n: 'confined', past: 'confined', en: 'We worked in a confined space.', ko: '우리는 갇힌 듯 좁은 곳에서 일했다.', feel: '<b>움직일 범위가 제한된다.</b>', t: .5,
        p: [[150, '배관 통로', () => DARK(150, '#5a5a62') + '<circle cx="75" cy="130" r="50" fill="#3a3a42" stroke="#888" stroke-width="6"/>'], [280, '움직일 범위 제한', () => W.confined()], [150, '기어서 이동', () => DARK(150, '#5a5a62') + '<circle cx="75" cy="130" r="50" fill="#3a3a42" stroke="#888" stroke-width="6"/>' + g(75, 160, 90, .35, MAN(OR, 'stern'))]] }
    };
    const MORE = {
      wide: [
        { b: '강', en: 'The river is wide here.', ko: '여기는 강폭이 넓다.', feel: '<b>이쪽에서 저쪽까지</b>가 멀다.', p: [[150, '강가', () => f('M0 120 H150 V200 H0 z', '#8fd0ee') + A(20, BL, 'calm', null, .3)], [280, '벽 사이가 멀다', () => W.wide()], [150, '건너편이 까마득', () => f('M0 100 H150 V220 H0 z', '#8fd0ee') + TREEC(120, .15)]] },
        { b: '미소', en: 'She gave a wide smile.', ko: '그녀는 함박웃음을 지었다.', feel: '웃음도 <b>양옆으로</b> 넓게.', p: [[150, '선물을 열었다', () => PKG(75, 200, 1.2)], [280, '웃음의 폭', () => W.wide(l('M166 136 q30 30 60 0', 5, RD))], [150, '활짝', () => g(75, 130, 0, 1.6, HEAD('smile'))]] }],
      broad: [
        { b: '잎', en: 'This tree has broad leaves.', ko: '이 나무는 잎이 넓적하다.', feel: '잎의 <b>폭이 넓다.</b>', p: [[150, '여름 숲', () => TREEC(75, .9)], [280, '폭', () => W.broad(LEAF(196, 140, 1.4))], [150, '잎 우산', () => LEAF(75, 80, 2) + A(75, OR, 'smile', null, .4)]] },
        { b: '관심사', en: 'She has broad interests.', ko: '그녀는 관심사가 폭넓다.', feel: '관심의 <b>범위가 넓다.</b>', p: [[150, '책장', () => BOXG(20, 40, 110, 190, '#a3743f') + [60, 110, 160].map((y) => [30, 50, 70, 90, 110].map((x, i) => BOXG(x, y, 14, 36, [RD, BL, GN, GD, OR][i])).join('')).join('')], [280, '범위', () => W.broad(t(196, 140, 22, '🎨 🔭 🎸', BL))], [150, '오늘은 천문학', () => DARK(150, '#2b3550') + t(110, 40, 16, '★', '#fff') + A(60, MN, 'smile', 'M18 -92 L36 -126', .6)]] }],
      spacious: [
        { b: '차', en: 'This car is spacious inside.', ko: '이 차는 안이 넉넉하다.', feel: '<b>안에 쓸 공간</b>이 여유롭다.', p: [[150, '여섯 식구', () => [20, 45, 70, 95, 120].map((x, i) => A(x, [BL, MN, OR, GN, BR][i], 'smile', null, .35)).join('')], [280, '안의 공간이 넉넉', () => W.spacious()], [150, '다 타고도 여유', () => CAR(5, 220, .9)]] },
        { b: '텐트', en: 'The tent is spacious for four people.', ko: '그 텐트는 네 명이 쓰기에 넉넉하다.', feel: '안이 <b>여유롭다.</b>', p: [[150, '캠핑장', () => f('M10 238 l65 -120 l65 120 z', OR)], [280, '안의 공간이 넉넉', () => W.spacious()], [150, '누워도 남는다', () => f('M10 238 l65 -120 l65 120 z', OR) + [40, 65, 90].map((x) => g(x, 226, 0, .3, HEAD('smile'))).join('')]] }],
      vast: [
        { b: '바다', en: 'The ocean is vast.', ko: '바다는 광대하다.', feel: '<b>규모가</b> 아주 크다.', p: [[150, '배 위에서', () => f('M0 120 H150 V240 H0 z', '#4a7fb5') + f('M50 120 l10 -14 h40 l10 14 z', '#c9a171')], [280, '규모가 아주 큼', () => W.vast()], [150, '사방이 물', () => f('M0 80 H150 V240 H0 z', '#4a7fb5') + l('M0 80 H150', 2, '#cfe6f5')]] },
        { b: '지식', en: 'He has vast knowledge of history.', ko: '그는 역사 지식이 방대하다.', feel: '지식의 <b>규모가</b> 어마어마하다.', p: [[150, '"그 왕은 말이야"', () => A(75, '#888', 'smile', 'M18 -92 L40 -120', .8)], [280, '지식의 규모', () => W.vast(BOOK(196, 140, .6))], [150, '모두 입이 떡', () => A(40, BL, 'shock', null, .55) + A(110, OR, 'shock', null, .5)]] }],
      narrow: [
        { b: '다리', en: 'The bridge is narrow.', ko: '다리가 좁다.', feel: '<b>폭이</b> 좁다.', p: [[150, '계곡 출렁다리', () => f('M0 238 V140 h20 l55 60 l55 -60 h20 V238 z', '#9ac47a') + l('M20 140 L130 140', 4, '#a3743f')], [280, '벽 사이가 가깝다', () => W.narrow()], [150, '한 줄로 건너기', () => l('M0 140 H150', 4, '#a3743f') + [40, 75, 110].map((x) => g(x, 140, 0, .3, MAN(BL, 'stern'))).join('')]] },
        { b: '간발', en: 'It was a narrow escape.', ko: '아슬아슬하게 피했다.', feel: '피할 틈이 <b>아주 좁았다.</b>', p: [[150, '자전거가 휙', () => BIKE(40, 210, .6) + A(110, MN, 'shock', null, .6)], [280, '틈의 폭', () => W.narrow(t(196, 140, 18, '1cm 차이', RD))], [150, '휴우', () => A(75, MN, 'phew', null, .8)]] }],
      cramped: [
        { b: '비행기', en: 'The airplane seats are cramped.', ko: '비행기 좌석이 비좁다.', feel: '자리가 <b>비좁아 불편하다.</b>', p: [[150, '이코노미석', () => SEATS(15, 140, 4)], [280, '비좁아 불편', () => W.cramped()], [150, '무릎이 앞좌석에', () => SEATS(30, 140, 3) + g(75, 200, 0, .5, MAN(BL, 'sad', null, 'M-12 -42 L-20 -70 L-14 0 M12 -42 L20 -70 L14 0'))]] },
        { b: '글씨', en: 'His handwriting is cramped.', ko: '그의 글씨는 비좁게 다닥다닥 붙어 있다.', feel: '글자들도 <b>비좁게</b> 끼어 있다.', p: [[150, '노트 한 장', () => DOC(75, 130, 1.6)], [280, '글자의 공간', () => W.cramped(t(196, 140, 11, 'abcdefghijklmnop', '#555'))], [150, '돋보기로 읽기', () => '<circle cx="75" cy="120" r="30" fill="#fff" stroke="#555" stroke-width="5"/>' + l('M96 142 l20 20', 6, '#555')]] }],
      confined: [
        { b: '엘리베이터', en: 'Being in a confined space makes me nervous.', ko: '좁고 갇힌 곳에 있으면 불안하다.', feel: '움직일 <b>범위가 막혀</b> 답답하다.', p: [[150, '멈춘 엘리베이터', () => BOXG(30, 40, 90, 198, '#c8ccd2') + t(75, 70, 14, '⚠', RD)], [280, '움직일 범위 제한', () => W.confined()], [150, '심장이 쿵쾅', () => BOXG(30, 40, 90, 198, '#c8ccd2') + A(75, BL, 'shock', null, .6)]] },
        { b: '침대', en: 'She was confined to bed with the flu.', ko: '그녀는 독감으로 침대에만 있어야 했다.', feel: '아파서 <b>움직일 범위가</b> 침대로 좁아졌다.', p: [[150, '열이 39도', () => t(75, 100, 30, '🤒')], [280, '움직일 범위 제한', () => W.confined(BED(196, 150))], [150, '창밖만 본다', () => BED(75, 210) + g(40, 200, 0, .45, HEAD('sad')) + BOXG(90, 40, 50, 50, '#cfe6f5')]] }]
    };
    const CORE = { wide: '<b>왼쪽에서 오른쪽까지가 멀다.</b>', broad: '<b>폭 · 범위가 넓다.</b>', spacious: '<b>안의 공간이 넉넉하다.</b>', vast: '<b>규모가 아주 크다.</b>', narrow: '<b>왼쪽에서 오른쪽까지가 가깝다.</b>', cramped: '<b>비좁아 불편하다.</b>', confined: '<b>움직일 범위가 제한된다.</b>' };
