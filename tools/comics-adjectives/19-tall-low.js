    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "바닥 줄과 높이 눈금"과 "무엇이?" 칸이다 — tall은 아래부터 위까지 긴 막대, high는 바닥에서 떨어진 자리, sunken · low-lying은 바닥 줄 아래처럼, 무엇의 높낮이인가가 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'high', BASIC_B = '노트 장면';
    const FX = { tall: [.5, 500, 900, .12, .4], high: [.3, 1200, 1400, .12, .4], towering: [.8, 200, 400, .25, .4], soaring: [.8, 800, 2400, .12, .4], elevated: [.3, 700, 900, .1, .4], low: [.4, 300, 250, .12, .4], sunken: [.8, 400, 120, .15, .4], 'low-lying': [.8, 200, 180, .1, .5] };
    const ORDER = MIX(['tall', 'high', 'towering', 'soaring', 'elevated', 'low', 'sunken', 'low-lying']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const WHAT = { tall: '아래부터 위까지', high: '바닥에서 먼 자리', towering: '압도하는 높이', soaring: '위로 오르는 움직임', elevated: '기준보다 올림', low: '바닥에 가까움', sunken: '원래보다 아래로', 'low-lying': '땅 자체가 낮음' };
    const UP = ['tall', 'high', 'towering', 'soaring', 'elevated'];
    const TC = (id) => UP.includes(id) ? OR : BL;
    const GAUGE = (id) => { let s = [40, 80, 120, 160].map((y) => l('M8 ' + y + ' h6', 2, '#bbb')).join('');
      const fl = id === 'low-lying' ? 'M4 200 H40 V220 H116' : 'M4 200 H116';
      s += l(fl, 3, '#555');
      if (id === 'tall') s += f('M54 200 v-150 h16 v150 z', OR) + t(92, 120, 14, '↕', OR);
      if (id === 'towering') s += f('M44 200 v-170 h36 v170 z', OR) + g(100, 200, 0, .22, MAN('#888', 'shock'));
      if (id === 'high') s += f('M50 50 h24 v18 h-24 z', OR) + '<path d="M62 68 V198" stroke="#aaa" stroke-width="2" stroke-dasharray="4 4"/>' + t(92, 130, 14, '↕', OR);
      if (id === 'soaring') s += BIRD(62, 60, .6, OR) + l('M62 180 V90', 3, OR) + f('M54 96 l8 -14 l8 14 z', OR);
      if (id === 'elevated') s += f('M30 200 v-40 h64 v40 z', '#c9a171') + f('M50 142 h24 v18 h-24 z', OR) + t(104, 186, 12, '기준↑', OR);
      if (id === 'low') s += f('M50 182 h24 v18 h-24 z', BL);
      if (id === 'sunken') s += f('M20 200 v20 h84 v-20 z', '#8fd0ee') + g(62, 216, 20, .8, f('M-24 0 l6 -12 h36 l6 12 z', BR)) + t(62, 188, 12, '원래 자리', '#aaa');
      if (id === 'low-lying') s += f('M40 220 h76 v6 h-76 z', '#cfe6f5') + BOXG(64, 204, 20, 16, BL) + t(22, 190, 11, '주변', '#888');
      return s + t(62, 236, 12, UP.includes(id) ? '위쪽' : '아래쪽', TC(id)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + GAUGE(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 7 ? 14 : 17, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(id));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { tall: P('tall', '쭉'), high: P('high', '저 위'), towering: P('towering', '우뚝'), soaring: P('soaring', '휘이익'), elevated: P('elevated', '살짝 위'), low: P('low', '나지막'), sunken: P('sunken', '꼬르륵'), 'low-lying': P('low-lying', '푹 꺼진 땅') };
    // 작은 그림들
    const SHELF = (x, y, w) => f('M' + (x - w / 2) + ' ' + y + ' h' + w + ' v8 h-' + w + ' z', '#a3743f') + f('M' + (x - 14) + ' ' + (y - 20) + ' h28 v20 h-28 z', RD);
    const TOWER = (x, k) => g(x, 238, 0, k, f('M-26 0 V-200 h52 V0 z', '#9aa8b8') + [0, 1, 2, 3, 4, 5].map((i) => f('M-16 ' + (-180 + i * 30) + ' h10 v14 h-10 z M6 ' + (-180 + i * 30) + ' h10 v14 h-10 z', '#fff6c0')).join(''));
    const KITE = (x, y, k) => g(x, y, 0, k || 1, f('M0 -20 l14 20 l-14 20 l-14 -20 z', RD) + l('M0 20 q6 20 -4 40', 2));
    const SHIP = (x, y, k) => g(x, y, 20, k || 1, f('M-40 0 l10 -16 h60 l10 16 z', BR) + l('M0 -16 v-30', 4, BR));
    const STAGE = (x, w) => f('M' + (x - w / 2) + ' 238 v-40 h' + w + ' v40 z', '#a3743f');
    const CHAIR = (x, h) => f('M' + (x - 20) + ' ' + (238 - h) + ' h40 v8 h-40 z', BL) + l('M' + (x - 16) + ' ' + (246 - h) + ' V238 M' + (x + 16) + ' ' + (246 - h) + ' V238', 4, BL);
    const BATT = (x, y, v) => f('M' + (x - 22) + ' ' + (y - 12) + ' h44 v24 h-44 z', '#fff', 3) + f('M' + (x - 18) + ' ' + (y - 8) + ' h' + 36 * v + ' v16 h-' + 36 * v + ' z', v < .3 ? RD : GN, 0) + f('M' + (x + 22) + ' ' + (y - 5) + ' h4 v10 h-4 z', '#222');
    const FIELD = (w, low) => f('M0 ' + (low ? 220 : 200) + ' H' + w + ' V240 H0 z', '#9ac47a');
    const C = {
      tall: { n: 'tall', past: 'tall', en: 'That tree is tall.', ko: '저 나무는 키가 크다.', feel: '<b>아래부터 위까지가 길다.</b> 사람 · 나무 · 건물.', t: .5,
        p: [[150, '공원 나무', () => TREEC(75, 1.1)], [280, '아래부터 위까지', () => W.tall()], [150, '올려다본다', () => TREEC(110, .9) + A(35, MN, 'shock', null, .45)]] },
      high: { n: 'high', past: 'high', en: 'The shelf is high.', ko: '선반이 높이 달려 있다.', feel: '<b>바닥에서 떨어진 자리가 위다.</b> 값 · 온도에도.', t: .3,
        p: [[150, '부엌 선반', () => SHELF(75, 50, 100)], [280, '바닥에서 먼 자리', () => W.high()], [150, '까치발', () => SHELF(90, 50, 100) + A(60, OR, 'phew', 'M18 -92 L30 -134', .6, 'M-8 -42 L-6 -6 M8 -42 L10 -6')]] },
      towering: { n: 'towering', past: 'towering', en: 'A towering building stood ahead.', ko: '앞에 우뚝 솟은 건물이 서 있었다.', feel: '<b>압도하는 높이.</b> 움직이는 것이 아니다.', t: .8,
        p: [[150, '도시 한복판', () => TOWER(75, 1.1)], [280, '압도하는 높이', () => W.towering()], [150, '개미만 한 나', () => TOWER(100, 1.1) + A(30, BL, 'shock', null, .3)]] },
      soaring: { n: 'soaring', past: 'soaring', en: 'A bird was soaring above us.', ko: '새 한 마리가 우리 위로 날아올랐다.', feel: '<b>위로 올라가는 움직임.</b> 가격이 치솟을 때도.', t: .8,
        p: [[150, '들판', () => FIELD(150) + BIRD(75, 150, .6, BR)], [280, '오르는 움직임', () => W.soaring()], [150, '하늘 높이', () => DARK(150, '#cfe6f5') + BIRD(100, 50, .6, BR) + A(40, MN, 'smile', 'M18 -92 L30 -134', .4)]] },
      elevated: { n: 'elevated', past: 'elevated', en: 'We walked on an elevated path.', ko: '우리는 높여 만든 길 위를 걸었다.', feel: '<b>기준보다 올려 놓았다.</b> 엄청 높을 필요는 없다.', t: .3,
        p: [[150, '습지', () => f('M0 210 H150 V240 H0 z', '#8fd0ee') + TREEC(120, .3)], [280, '기준보다 올림', () => W.elevated()], [150, '나무 데크 위', () => f('M0 210 H150 V240 H0 z', '#8fd0ee') + f('M0 180 h150 v8 h-150 z', '#a3743f') + l('M30 188 v40 M120 188 v40', 5, '#7a5a3a') + g(75, 180, 0, .5, MAN(MN, 'smile'))]] },
      low: { n: 'low', past: 'low', en: 'The shelf is low.', ko: '선반이 낮게 달려 있다.', feel: '<b>바닥에서 가깝다.</b> 값 · 소리 · 배터리에도.', t: .4,
        p: [[150, '아이 방 선반', () => SHELF(75, 190, 100)], [280, '바닥에 가까움', () => W.low()], [150, '아이 손이 닿는다', () => SHELF(90, 190, 100) + A(50, OR, 'smile', 'M18 -92 L36 -60', .45)]] },
      sunken: { n: 'sunken', past: 'sunken', en: 'We found a sunken ship.', ko: '우리는 가라앉은 배를 찾았다.', feel: '<b>원래보다 아래로 내려갔다.</b> 움푹 들어간 눈에도.', t: .8,
        p: [[150, '잠수', () => DARK(150, '#2b5a8a') + g(60, 120, 0, .5, MAN(BL, 'shock'))], [280, '원래보다 아래로', () => W.sunken()], [150, '바다 밑 배', () => DARK(150, '#2b5a8a') + f('M0 220 H150 V240 H0 z', '#d9c9a8') + SHIP(75, 216, 1)]] },
      'low-lying': { n: 'low-lying', past: 'low-lying', en: 'This is a low-lying area.', ko: '이곳은 지대가 낮은 지역이다.', feel: '<b>땅 자체가 원래 낮다.</b> 가라앉은 사건이 아니다.', t: .8,
        p: [[150, '지도', () => BOXG(20, 40, 110, 110, '#e9f0d8') + f('M50 90 q25 -20 50 0 q-25 20 -50 0 z', '#8fd0ee')], [280, '땅 자체가 낮음', () => W['low-lying']()], [150, '비 오면 물이 고인다', () => f('M0 160 H40 V200 H110 V160 H150 V240 H0 z', '#9ac47a') + f('M40 186 h70 v14 h-70 z', '#8fd0ee') + l('M20 40 l-6 20 M70 30 l-6 20 M120 40 l-6 20', 3, WT)]] }
    };
    const MORE = {
      tall: [
        { b: '형', en: 'My brother is tall.', ko: '우리 형은 키가 크다.', feel: '<b>아래부터 위까지</b>가 길다.', p: [[150, '문틀', () => BOXG(30, 40, 90, 198, '#f2e8d4')], [280, '아래부터 위까지', () => W.tall()], [150, '머리를 숙인다', () => BOXG(30, 60, 90, 178, '#c9a171') + g(75, 240, 16, .95, MAN(BL, 'smile'))]] },
        { b: '무리한 부탁', en: 'That\'s a tall order.', ko: '그건 무리한 요구다.', feel: '해야 할 일이 <b>키만큼</b> 높이 쌓였다.', p: [[150, '"내일까지 다 해 줘"', () => A(75, BR, 'stern', 'M18 -92 L40 -120', .8)], [280, '일의 높이', () => W.tall([0, 1, 2, 3, 4].map((i) => DOC(196, 176 - i * 14, .7)).join(''))], [150, '"그건 좀…"', () => A(75, BL, 'phew', null, .8)]] }],
      high: [
        { b: '산', en: 'The mountain is high.', ko: '그 산은 높다.', feel: '꼭대기 <b>자리가</b> 바닥에서 멀다.', p: [[150, '산 아래 마을', () => f('M0 238 L75 40 L150 238 z', '#9ac47a') + f('M60 78 L75 40 L90 78 z', '#fff')], [280, '바닥에서 먼 자리', () => W.high()], [150, '헉헉', () => l('M0 238 L150 120', 4, '#888') + A(75, BL, 'phew', null, .55)]] },
        { b: '가격', en: 'Prices are high this year.', ko: '올해는 물가가 높다.', feel: '값의 <b>자리</b>도 위에 있다.', p: [[150, '마트', () => BOXG(20, 80, 110, 100, '#f2d59a') + t(75, 136, 16, '₩₩₩', RD)], [280, '값의 자리', () => W.high(t(196, 140, 22, '₩ ↑', RD))], [150, '장바구니가 가볍다', () => A(75, MN, 'sad', 'M18 -92 L30 -50', .8)]] }],
      towering: [
        { b: '나무', en: 'We walked among towering trees.', ko: '우리는 우뚝 솟은 나무들 사이를 걸었다.', feel: '<b>압도하는 높이.</b>', p: [[150, '숲 입구', () => TREEC(40, 1.2) + TREEC(110, 1.2)], [280, '압도하는 높이', () => W.towering()], [150, '작아진 우리', () => TREEC(30, 1.2) + TREEC(120, 1.2) + A(75, MN, 'shock', null, .3)]] },
        { b: '인물', en: 'He was a towering figure in science.', ko: '그는 과학계의 우뚝 솟은 인물이었다.', feel: '사람의 존재감이 <b>압도적으로 높다.</b>', p: [[150, '교과서 한 쪽', () => BOOK(75, 140, .8)], [280, '존재감의 높이', () => W.towering(g(196, 180, 0, .5, MAN(BR, 'smile')))], [150, '모두가 배운다', () => A(30, BL, 'calm', null, .4) + A(75, MN, 'calm', null, .4) + A(120, OR, 'calm', null, .4)]] }],
      soaring: [
        { b: '연', en: 'The kite is soaring in the sky.', ko: '연이 하늘로 날아오른다.', feel: '<b>위로 오르는</b> 움직임.', p: [[150, '바람 부는 언덕', () => FIELD(150) + A(40, OR, 'smile', 'M18 -92 L40 -120', .5)], [280, '오르는 움직임', () => W.soaring(KITE(196, 120, .9))], [150, '높이높이', () => DARK(150, '#cfe6f5') + KITE(110, 50, .8) + l('M100 92 L20 230', 1.5)]] },
        { b: '물가', en: 'Everyone worries about soaring prices.', ko: '모두 치솟는 물가를 걱정한다.', feel: '값이 <b>날아오르듯</b> 치솟는다.', p: [[150, '지난달 영수증', () => DOC(75, 130, 1.6)], [280, '값의 움직임', () => W.soaring(l('M150 176 l30 -10 l30 -30 l30 -40', 4, RD) + f('M240 92 l8 -4 l-2 10 z', RD))], [150, '한숨', () => A(40, BL, 'sad', null, .55) + A(110, MN, 'sad', null, .55)]] }],
      elevated: [
        { b: '무대', en: 'The singer stood on an elevated stage.', ko: '가수가 높여 만든 무대 위에 섰다.', feel: '<b>기준보다</b> 올려 놓았다.', p: [[150, '콘서트장', () => [20, 50, 80, 110, 135].map((x) => g(x, 236, 0, .25, HEAD('smile'))).join('')], [280, '기준보다 올림', () => W.elevated()], [150, '무대 위', () => STAGE(75, 140) + g(75, 198, 0, .6, MAN(MN, 'smile', 'M18 -92 L30 -126'))]] },
        { b: '혈압', en: 'His blood pressure is elevated.', ko: '그의 혈압이 높아져 있다.', feel: '수치가 <b>기준보다 위로</b> 올라갔다.', p: [[150, '건강 검진', () => A(75, BR, 'calm', null, .8)], [280, '수치를 올림', () => W.elevated(t(196, 140, 20, '150 / 95', RD))], [150, '"짠 음식 줄이세요"', () => A(75, '#fff', 'stern', null, .8)]] }],
      low: [
        { b: '의자', en: 'This chair is low.', ko: '이 의자는 낮다.', feel: '<b>바닥에 가깝다.</b>', p: [[150, '아이 의자', () => CHAIR(75, 40)], [280, '바닥에 가까움', () => W.low()], [150, '무릎이 턱까지', () => CHAIR(75, 40) + g(75, 198, 0, .55, MAN(BL, 'phew', null, 'M-12 -42 L-20 -70 L-14 0 M12 -42 L20 -70 L14 0'))]] },
        { b: '기분', en: 'I feel low today.', ko: '오늘은 기분이 가라앉는다.', feel: '마음도 <b>바닥 가까이</b> 내려왔다.', p: [[150, '비 오는 오후', () => l('M20 30 l-6 20 M70 40 l-6 20 M120 30 l-6 20', 3, WT) + A(75, MN, 'down', null, .7)], [280, '마음의 높이', () => W.low(BATT(196, 140, .15))], [150, '따뜻한 코코아', () => f('M60 160 h30 l-4 40 h-22 z', BR) + A(120, MN, 'smile', null, .5)]] }],
      sunken: [
        { b: '정원', en: 'They have a sunken garden.', ko: '그 집엔 움푹 낮춘 정원이 있다.', feel: '바닥보다 <b>아래로</b> 내려 만들었다.', p: [[150, '마당', () => FIELD(150) + l('M30 200 v20 h90 v-20', 3, '#7a5a3a')], [280, '원래보다 아래로', () => W.sunken(l('M150 150 h20 v20 h60 v-20 h20', 3, '#7a5a3a'))], [150, '계단 내려가 꽃밭', () => f('M0 180 H30 V210 H120 V180 H150 V240 H0 z', '#9ac47a') + '<circle cx="60" cy="200" r="6" fill="#f4a0b0"/><circle cx="90" cy="202" r="6" fill="' + GD + '"/>']] },
        { b: '눈', en: 'He had sunken eyes after the long trip.', ko: '긴 여행 끝에 그는 눈이 움푹 꺼졌다.', feel: '눈도 <b>안으로 꺼진다.</b>', p: [[150, '밤샘 기차', () => DARK(150, '#2b3550') + A(75, BR, 'down', null, .7)], [280, '원래보다 안으로', () => W.sunken(g(196, 146, 0, .8, HEAD('down')) + '<circle cx="188" cy="144" r="6" fill="#999" opacity=".5"/><circle cx="204" cy="144" r="6" fill="#999" opacity=".5"/>')], [150, '푹 자야겠다', () => f('M10 200 q65 -40 130 0 v38 h-130 z', BL) + g(75, 176, 0, .5, HEAD('down')) + ZZ(100, 110)]] }],
      'low-lying': [
        { b: '마을', en: 'The flood hit low-lying villages.', ko: '홍수가 지대 낮은 마을들을 덮쳤다.', feel: '땅이 <b>원래 낮아서</b> 물이 모인다.', p: [[150, '장마', () => DARK(150, '#9aa4b0') + l('M20 30 l-6 20 M70 40 l-6 20 M120 30 l-6 20', 3, '#fff')], [280, '땅 자체가 낮음', () => W['low-lying']()], [150, '지붕까지 물', () => f('M0 160 H150 V240 H0 z', '#8fd0ee') + f('M50 160 l25 -24 l25 24 z', RD)]] },
        { b: '안개', en: 'We saw low-lying fog over the field.', ko: '들판 위에 낮게 깔린 안개를 보았다.', feel: '안개가 <b>땅에 낮게</b> 깔렸다.', p: [[150, '새벽 들판', () => FIELD(150) + SUN(120, 60, 12)], [280, '낮게 깔림', () => W['low-lying'](f('M140 160 q20 -10 40 0 t40 0 t40 0 v14 h-120 z', '#eee'))], [150, '발목까지 하얗다', () => FIELD(150) + A(75, MN, 'smile', null, .7) + f('M0 200 q20 -14 40 0 t40 0 t40 0 t40 0 V240 H0 z', '#fff')]] }]
    };
    const CORE = { tall: '<b>아래부터 위까지가 길다.</b>', high: '<b>바닥에서 떨어진 자리가 위.</b>', towering: '<b>압도하는 높이.</b>', soaring: '<b>위로 오르는 움직임.</b>', elevated: '<b>기준보다 올려 놓았다.</b>', low: '<b>바닥에 가깝다.</b>', sunken: '<b>원래보다 아래로.</b>', 'low-lying': '<b>땅 자체가 낮다.</b>' };
