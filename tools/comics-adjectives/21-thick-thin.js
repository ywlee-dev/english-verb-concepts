    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(chunky · sheer · skinny는 마음 쪽 쓰임이 드물어 장면 3도 물건으로 지었다). 가운데 칸은 늘 같은 "옆에서 본 판 하나"와 "무엇이?" 칸이다 — 판이 얼마나 두꺼운가, 그리고 dense(촘촘함) · sheer(비침) · chunky(덩어리)처럼 무엇을 보는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'sheer', BASIC_B = '노트 장면';
    const FX = { thick: [.4, 200, 200, .25, .4], chunky: [.4, 300, 260, .2, .4], dense: [.6, 250, 250, .2, .4], thin: [.2, 1600, 1600, .1, .4], slim: [.3, 1400, 1800, .1, .4], sheer: [.5, 2400, 2400, .05, .4], skinny: [.2, 2000, 2000, .1, .4] };
    const ORDER = MIX(['thick', 'chunky', 'dense', 'thin', 'slim', 'sheer', 'skinny']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const TH = { thick: .9, chunky: .8, dense: .6, thin: .12, slim: .16, sheer: .08, skinny: .1 };
    const WHAT = { chunky: '굵고 덩어리진', dense: '촘촘하게 들어참', slim: '날렵하게 가늚', sheer: '천이 비침', skinny: '가는 실루엣' };
    const TC = (v) => v > .4 ? BR : WT;
    const SLAB = (id) => { const v = TH[id], w = 4 + v * 84, x0 = 62 - w / 2;
      let s = id === 'sheer' ? '<circle cx="62" cy="120" r="22" fill="' + GD + '"/>' + f('M' + x0 + ' 50 h' + w + ' v140 h-' + w + ' z', 'rgba(244,198,208,.45)', 2) : '';
      if (id !== 'sheer') s += f('M' + x0 + ' 50 h' + w + ' v140 h-' + w + ' z', id === 'dense' ? '#e9e0c8' : v > .4 ? '#c9a171' : '#cfe6f5');
      if (id === 'chunky') s += [70, 100, 130, 160].map((y) => [x0 + 14, x0 + 36, x0 + 58].map((x) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="none" stroke="#8a6a3a" stroke-width="3"/>').join('')).join('');
      if (id === 'dense') s += Array.from({ length: 60 }, (_, i) => '<circle cx="' + (x0 + 6 + (i % 6) * 8.5) + '" cy="' + (58 + Math.floor(i / 6) * 13) + '" r="3" fill="' + GN + '"/>').join('');
      if (id === 'slim') s += l('M' + (x0 + 2) + ' 60 v120', 2, '#fff');
      s += l('M' + x0 + ' 204 h' + w, 2, TC(v)) + l('M' + x0 + ' 198 v12 M' + (x0 + w) + ' 198 v12', 2, TC(v));
      return s + t(62, 228, 12, '두께 ' + Math.round(v * 100), TC(v)); };
    const TP = (id, b, z) => { const c = TC(TH[id]);
      return DARK(280, '#f6f4ee') + SLAB(id) + t(62, 38, 11, '옆에서 본 모습', '#888') + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 15 : 18, WHAT[id], BL) : t(196, 128, 15, '앞뒤 사이', '#888') + t(196, 150, 15, '거리', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { thick: P('thick', '두툼'), chunky: P('chunky', '도톰도톰'), dense: P('dense', '빽빽'), thin: P('thin', '얄팍'), slim: P('slim', '슬림'), sheer: P('sheer', '하늘하늘'), skinny: P('skinny', '쫙'), };
    // 작은 그림들
    const BOOKT = (x, y, th, c) => f('M' + (x - 40) + ' ' + y + ' h80 v-' + th + ' h-80 z', c || BL) + l('M' + (x - 36) + ' ' + (y - th / 2) + ' h72', 1.5, '#fff');
    const SWEATER = (x, y, k, c) => g(x, y, 0, k || 1, f('M-36 -40 l16 -10 h40 l16 10 l12 30 l-14 6 v54 h-68 v-54 l-14 -6 z', c || '#c96a4a') + [-24, 0, 24].map((d) => l('M' + d + ' -30 v70', 4, 'rgba(255,255,255,.4)')).join(''));
    const FOREST = (n) => Array.from({ length: n }, (_, i) => TREEC(10 + (i % 6) * 26, .28 + (i % 3) * .05)).join('');
    const LAPTOP = (x, y, thick) => f('M' + (x - 40) + ' ' + (y - thick) + ' h80 v' + thick + ' h-80 z', '#888') + f('M' + (x - 34) + ' ' + (y - thick - 50) + ' h68 v50 h-68 z', '#555');
    const CURTAIN = (x, y, sheer) => f('M' + (x - 40) + ' ' + y + ' h80 v130 h-80 z', sheer ? 'rgba(244,198,208,.45)' : '#a84b40') + l('M' + (x - 44) + ' ' + y + ' h88', 4, '#888');
    const JEANS = (x, y, k, wide) => g(x, y, 0, k || 1, f('M-' + (24 + wide) + ' -80 h' + (48 + wide * 2) + ' l' + wide + ' 80 h-' + (20 + wide) + ' l-4 -50 l-4 50 h-' + (20 + wide) + ' z', '#3a5a8a'));
    const BOWL = (x, y, c) => f('M' + (x - 34) + ' ' + (y - 20) + ' h68 q-4 26 -34 26 q-30 0 -34 -26 z', '#fff') + f('M' + (x - 30) + ' ' + (y - 22) + ' q30 -6 60 0', c, 2);
    const ICEL = (y, th) => f('M0 ' + y + ' H150 v' + th + ' H0 z', '#cfe6f5') + f('M0 ' + (y + th) + ' H150 V240 H0 z', '#4a7fb5');
    const CAT = (x, y, k, thin) => g(x, y, 0, k || 1, '<ellipse cy="-20" rx="' + (thin ? 22 : 34) + '" ry="' + (thin ? 12 : 20) + '" fill="#888" stroke="#222" stroke-width="3"/><circle cx="' + (thin ? 20 : 28) + '" cy="-40" r="14" fill="#888" stroke="#222" stroke-width="3"/>');
    const TIE = (x, y, w) => f('M' + (x - w / 2) + ' ' + y + ' h' + w + ' l2 60 l-' + (w / 2 + 1) + ' 10 l-' + (w / 2 + 1) + ' -10 z', RD);
    const SNEAK = (x, y, k) => g(x, y, 0, k || 1, f('M-40 0 v-26 q0 -10 12 -10 h20 q10 14 44 18 q8 4 4 18 z', '#fff') + f('M-42 0 h92 v8 h-92 z', '#888'));
    const C = {
      thick: { n: 'thick', past: 'thick', en: 'This book is thick.', ko: '이 책은 두껍다.', feel: '<b>앞뒤 사이가 멀다.</b> 걸쭉한 국물 · 짙은 안개에도.', t: .4,
        p: [[150, '도서관', () => BOOKT(75, 220, 90, BL)], [280, '판이 두껍다', () => W.thick()], [150, '베개로 써도 되겠다', () => BOOKT(75, 220, 60, BL) + g(75, 160, 0, .5, HEAD('down')) + ZZ(100, 110)]] },
      chunky: { n: 'chunky', past: 'chunky', en: 'I love this chunky sweater.', ko: '이 도톰한 스웨터가 정말 좋다.', feel: '<b>굵고 덩어리진</b> 느낌. 무겁다는 뜻은 아니다.', t: .4,
        p: [[150, '옷 가게', () => SWEATER(75, 180, 1.2)], [280, '굵고 덩어리진', () => W.chunky()], [150, '포근', () => A(75, '#c96a4a', 'smile', null, .8)]] },
      dense: { n: 'dense', past: 'dense', en: 'The forest is dense.', ko: '숲이 빽빽하다.', feel: '<b>촘촘하게 들어찼다.</b> 두께보다 촘촘함.', t: .6,
        p: [[150, '숲 입구', () => FOREST(12)], [280, '촘촘하게 들어참', () => W.dense()], [150, '길이 안 보인다', () => FOREST(18) + t(75, 60, 18, '?', '#888')]] },
      thin: { n: 'thin', past: 'thin', en: 'This book is thin.', ko: '이 책은 얇다.', feel: '<b>앞뒤 사이가 가깝다.</b> 마른 사람 · 묽은 국물에도.', t: .2,
        p: [[150, '도서관', () => BOOKT(75, 220, 10, OR)], [280, '판이 얇다', () => W.thin()], [150, '하루면 다 읽겠다', () => A(75, MN, 'smile', 'M18 -92 L40 -80', .8)]] },
      slim: { n: 'slim', past: 'slim', en: 'This laptop is slim.', ko: '이 노트북은 날렵하게 얇다.', feel: '<b>군더더기 없이 가늘다.</b> 대체로 좋은 말.', t: .3,
        p: [[150, '전자 매장', () => LAPTOP(75, 200, 6)], [280, '날렵하게 가늚', () => W.slim()], [150, '서류 봉투에 쏙', () => f('M30 100 h90 v120 h-90 z', '#e9c99a') + l('M75 100 v-30', 4, '#888')]] },
      sheer: { n: 'sheer', past: 'sheer', en: 'These curtains are sheer.', ko: '이 커튼은 비칠 만큼 얇다.', feel: '<b>천이 비친다.</b> 옷감 · 커튼에.', t: .5,
        p: [[150, '창가', () => SUN(75, 100, 20) + CURTAIN(75, 50, true)], [280, '천이 비침', () => W.sheer()], [150, '햇살이 그대로', () => DARK(150, '#fff6c0') + CURTAIN(75, 50, true) + A(120, MN, 'smile', null, .4)]] },
      skinny: { n: 'skinny', past: 'skinny', en: 'I\'m looking for skinny jeans.', ko: '스키니진을 찾고 있어요.', feel: '<b>가늘게 붙는 실루엣.</b> 사람 몸에 쓰면 흉으로 들릴 수 있다.', t: .2,
        p: [[150, '청바지 코너', () => JEANS(45, 220, .9, 10) + JEANS(110, 220, .9, -6)], [280, '가는 실루엣', () => W.skinny(JEANS(196, 180, .8, -8))], [150, '거울 앞', () => BOXG(90, 40, 50, 160, '#cfe6f5') + A(50, MN, 'smile', null, .7, 'M-6 -42 L-8 0 M6 -42 L8 0')]] }
    };
    const MORE = {
      thick: [
        { b: '수프', en: 'The soup is thick.', ko: '수프가 걸쭉하다.', feel: '국물도 <b>두툼하게</b> 진하다.', p: [[150, '저녁 수프', () => BOWL(75, 200, '#e9b86a')], [280, '판이 두껍다', () => W.thick()], [150, '숟가락이 선다', () => BOWL(75, 220, '#e9b86a') + l('M75 200 V120', 5, '#888')]] },
        { b: '억양', en: 'He has a thick accent.', ko: '그는 억양이 강하다.', feel: '말투도 <b>두껍게</b> 묻어 있다.', p: [[150, '새 친구', () => A(75, BR, 'smile', 'M18 -92 L40 -120', .8)], [280, '말투의 두께', () => W.thick(l('M150 130 q8 -16 16 0 t16 0 t16 0 t16 0 t16 0', 5, BR))], [150, '"다시 한 번만?"', () => A(75, OR, 'phew', null, .6)]] }],
      chunky: [
        { b: '운동화', en: 'He bought chunky sneakers.', ko: '그는 굽이 도톰한 운동화를 샀다.', feel: '모양이 <b>굵고 덩어리진</b> 느낌.', p: [[150, '신발 가게', () => SNEAK(75, 200, 1.2)], [280, '굵고 덩어리진', () => W.chunky(SNEAK(196, 160, .8))], [150, '키가 쑥', () => A(75, BL, 'smile', null, .8) + f('M50 238 h50 v-10 h-50 z', '#fff')]] },
        { b: '땅콩버터', en: 'I like chunky peanut butter.', ko: '나는 땅콩 알갱이가 씹히는 땅콩버터가 좋다.', feel: '덩어리가 <b>도톰하게</b> 씹힌다.', p: [[150, '아침 식빵', () => f('M30 120 h90 v80 h-90 z', '#e9b86a')], [280, '굵고 덩어리진', () => W.chunky(f('M166 120 h60 v40 h-60 z', '#c98a4a') + [176, 196, 216].map((x) => '<circle cx="' + x + '" cy="140" r="5" fill="#8a5a2a"/>').join(''))], [150, '바삭 오독', () => A(75, OR, 'smile', 'M18 -92 L22 -126', .6) + t(110, 60, 16, '오독', BR)]] }],
      dense: [
        { b: '인파', en: 'The crowd was dense.', ko: '인파가 빽빽했다.', feel: '사람도 <b>촘촘하게</b> 들어찼다.', p: [[150, '불꽃놀이 날', () => DARK(150, '#1b1d26') + t(75, 60, 26, '✺', GD)], [280, '촘촘하게 들어참', () => W.dense()], [150, '꼼짝 못 함', () => [140, 165, 190, 215].map((y) => [10, 30, 50, 70, 90, 110, 130].map((x) => g(x, y, 0, .2, HEAD('calm'))).join('')).join('')]] },
        { b: '교과서', en: 'The textbook is dense.', ko: '교과서 내용이 빽빽하다.', feel: '글이 <b>촘촘하게</b> 들어차 어렵다.', p: [[150, '물리 교과서', () => DOC(75, 130, 1.6)], [280, '글이 촘촘', () => W.dense(Array.from({ length: 6 }, (_, i) => l('M160 ' + (100 + i * 12) + ' h72', 3, '#555')).join(''))], [150, '한 쪽에 한 시간', () => A(75, BL, 'phew', null, .8) + CLK(124, 50, 18)]] }],
      thin: [
        { b: '얼음', en: 'The ice is thin.', ko: '얼음이 얇다.', feel: '<b>두께가 얇아</b> 위험하다.', p: [[150, '봄 연못', () => ICEL(170, 6) + TREEC(120, .3)], [280, '판이 얇다', () => W.thin()], [150, '"들어가지 마!"', () => ICEL(190, 4) + A(60, MN, 'stern', 'M18 -92 L46 -100', .6)]] },
        { b: '변명', en: 'His excuse is thin.', ko: '그의 변명은 얄팍하다.', feel: '말이 <b>얇아서</b> 속이 다 보인다.', p: [[150, '"숙제는요?"', () => A(75, '#888', 'stern', null, .8)], [280, '말의 두께', () => W.thin(t(196, 140, 15, '"강아지가 먹었…"', BR))], [150, '안 믿는 눈', () => A(75, '#888', 'stern', null, .8) + t(124, 60, 16, '흠…', '#888')]] }],
      slim: [
        { b: '휴대폰', en: 'The new phone is slim.', ko: '새 휴대폰은 날렵하게 얇다.', feel: '<b>군더더기 없이</b> 가늘다.', p: [[150, '신제품 상자', () => PKG(75, 190, 1.4)], [280, '날렵하게 가늚', () => W.slim(g(196, 140, 0, 1.4, PH))], [150, '주머니에 쏙', () => A(75, BL, 'smile', null, .8)]] },
        { b: '가능성', en: 'Our chances are slim.', ko: '우리 가능성은 희박하다.', feel: '가능성도 <b>가늘다.</b>', p: [[150, '9회 말, 0 대 5', () => BOXG(20, 40, 110, 60, '#222') + t(75, 78, 20, '0 : 5', RD)], [280, '가능성의 두께', () => W.slim(l('M150 140 h90', 2, GN))], [150, '그래도 친다', () => A(75, BL, 'stern', 'M18 -92 L46 -120', .8)]] }],
      sheer: [
        { b: '블라우스', en: 'She wore a sheer blouse.', ko: '그녀는 비치는 블라우스를 입었다.', feel: '옷감이 <b>비친다.</b>', p: [[150, '옷걸이', () => l('M75 40 v20', 2) + f('M45 60 h60 v80 h-60 z', 'rgba(244,198,208,.45)', 2)], [280, '천이 비침', () => W.sheer()], [150, '안에 한 겹 더', () => A(75, MN, 'smile', null, .8) + f('M50 120 h50 v40 h-50 z', 'rgba(244,198,208,.45)', 2)]] },
        { b: '스타킹', en: 'She bought sheer black tights.', ko: '그녀는 비치는 검정 스타킹을 샀다.', feel: '다리가 <b>비쳐 보일</b> 만큼 얇다.', p: [[150, '양말 가게', () => f('M50 60 h20 v120 h-20 z M80 60 h20 v120 h-20 z', 'rgba(30,30,30,.35)', 2)], [280, '천이 비침', () => W.sheer(f('M176 100 h16 v70 h-16 z M200 100 h16 v70 h-16 z', 'rgba(30,30,30,.35)', 2))], [150, '외출 준비', () => A(75, MN, 'smile', null, .8, 'M-12 -42 L-14 0 M12 -42 L14 0')]] }],
      skinny: [
        { b: '길고양이', en: 'The stray cat looks skinny.', ko: '길고양이가 비쩍 말라 보인다.', feel: '몸이 <b>가늘다</b> — 걱정이 된다.', p: [[150, '골목', () => CAT(75, 220, 1.2, true)], [280, '가는 실루엣', () => W.skinny(CAT(196, 170, .9, true))], [150, '밥을 준다', () => CAT(100, 230, .8, true) + f('M60 226 h24 v8 h-24 z', '#fff') + A(40, OR, 'smile', null, .45)]] },
        { b: '넥타이', en: 'He wore a skinny tie.', ko: '그는 폭이 좁은 넥타이를 맸다.', feel: '모양이 <b>가늘게</b> 쭉.', p: [[150, '넥타이 두 개', () => TIE(50, 60, 24) + TIE(105, 60, 10)], [280, '가는 실루엣', () => W.skinny(TIE(196, 100, 10))], [150, '멋 부린 날', () => A(75, BL, 'smile', null, .8) + TIE(75, 110, 6)]] }]
    };
    const CORE = { thick: '<b>앞뒤 사이가 멀다.</b>', chunky: '<b>굵고 덩어리진 느낌.</b>', dense: '<b>촘촘하게 들어찼다.</b>', thin: '<b>앞뒤 사이가 가깝다.</b>', slim: '<b>군더더기 없이 가늘다.</b>', sheer: '<b>천이 비칠 만큼 얇다.</b>', skinny: '<b>가늘게 붙는 실루엣.</b>' };
