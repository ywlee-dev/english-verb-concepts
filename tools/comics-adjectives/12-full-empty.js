    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "유리잔 하나"와 "무엇이?" 칸이다 — 잔이 얼마나 찼나(넘치나), 그리고 packed · bare · hollow · vacant처럼 무엇이 비었나 · 찼나만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'vacant', BASIC_B = '노트 장면';
    const FX = { full: [.4, 500, 600, .12, .4], packed: [.3, 300, 300, .2, .4], brimming: [.6, 700, 900, .1, .4], overflowing: [.8, 600, 300, .2, .4], empty: [.6, 300, 200, .08, .5], bare: [.5, 400, 300, .06, .5], hollow: [.6, 200, 200, .2, .4], vacant: [.8, 500, 400, .05, .5] };
    const ORDER = MIX(['full', 'packed', 'brimming', 'overflowing', 'empty', 'bare', 'hollow', 'vacant']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const FL = { overflowing: 1.1, brimming: 1, full: .88, packed: .9, empty: 0, bare: 0, hollow: 0, vacant: 0 };
    const WHAT = { packed: '사람 · 물건 빽빽', brimming: '가장자리까지', overflowing: '밖으로 넘침', bare: '겉에 아무것도', hollow: '겉은 있고 속이 빔', vacant: '쓰는 사람이 없음' };
    const TC = (v) => v > .5 ? WT : '#888';
    const GLASS = (id) => { const v = Math.min(FL[id], 1), y = 196 - 150 * v;
      let s = (v ? (id === 'packed' ? Array.from({ length: 72 }, (_, i) => '<circle cx="' + (35 + (i % 6) * 11 + (Math.floor(i / 6) % 2) * 3) + '" cy="' + (190 - Math.floor(i / 6) * 11) + '" r="6" fill="' + OR + '" stroke="#222" stroke-width="1.5"/>').join('')
        : f('M30 ' + y + ' h64 V196 h-64 z', '#8fd0ee', 0) + l('M30 ' + y + (FL[id] >= 1 ? ' q32 -8 64 0' : ' h64'), 2.5, WT)) : '');
      s += l('M28 40 V198 h68 V40', 4, '#555');
      if (id === 'overflowing') s += l('M28 42 q-10 30 -8 80 M96 42 q10 30 8 80', 4, '#8fd0ee') + f('M8 206 q54 10 108 0 v8 h-108 z', '#8fd0ee');
      if (id === 'hollow') s = l('M28 40 V198 h68 V40', 10, '#a3743f') + t(62, 130, 14, '속 텅', '#888');
      if (id === 'bare') s += l('M100 60 h16', 2, '#ccc') + t(62, 130, 14, '아무것도', '#bbb');
      if (id === 'vacant') s += t(62, 130, 13, '임자 없음', '#bbb') + f('M70 22 h22 v14 h-22 z', '#fff', 2) + t(81, 33, 9, '빈자리', GN);
      return s + t(62, 228, 13, FL[id] > 1 ? '넘침!' : v ? '찬 정도 ' + Math.round(v * 100) : '찬 정도 0', TC(v)); };
    const TP = (id, b, z) => { const c = TC(FL[id]);
      return DARK(280, '#f6f4ee') + GLASS(id) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 14 : 18, WHAT[id], BL) : t(196, 128, 15, '그릇 · 배 ·', '#888') + t(196, 150, 15, '하루 두루', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { full: P('full', '가득'), packed: P('packed', '빽빽'), brimming: P('brimming', '찰랑찰랑'), overflowing: P('overflowing', '콸콸'), empty: P('empty', '텅'), bare: P('bare', '휑'), hollow: P('hollow', '통통'), vacant: P('vacant', '비어 있음') };
    // 작은 그림들
    const CUP = (x, y, k, v, c) => g(x, y, 0, k || 1, (v ? f('M-18 ' + (-40 * v) + ' h36 v' + 40 * v + ' h-36 z', c || '#8fd0ee', 0) : '') + l('M-20 -44 V0 h40 V-44', 3, '#555'));
    const TRAIN = (x, y, n) => BOXG(x, y, 140, 80, '#cfe6f5') + Array.from({ length: n }, (_, i) => g(x + 14 + (i % 7) * 19, y + 40 + Math.floor(i / 7) * 26, 0, .26, HEAD(i % 3 ? 'calm' : 'phew'))).join('');
    const SINK = (x, y) => f('M' + (x - 50) + ' ' + y + ' h100 l-10 40 h-80 z', '#fff') + l('M' + x + ' ' + (y - 50) + ' v20 h20', 5, '#888');
    const FRAME = (x, y) => '<rect x="' + (x - 18) + '" y="' + (y - 14) + '" width="36" height="28" fill="none" stroke="#ccc" stroke-width="2" stroke-dasharray="4 3"/>';
    const TRUNK = (x, y, k) => g(x, y, 0, k || 1, f('M-30 0 v-110 h60 V0 z', '#7a5a3a') + '<ellipse cy="-60" rx="14" ry="20" fill="#222"/>');
    const APT = (x, y) => BOXG(x, y, 110, 120, '#e9e0c8') + [0, 1].map((r) => [0, 1, 2].map((c) => BOXG(x + 10 + c * 34, y + 14 + r * 50, 22, 30, r === 1 && c === 1 ? '#555' : '#fff6c0')).join('')).join('');
    const TRASH = (x, y, k, over) => g(x, y, 0, k || 1, f('M-26 -60 h52 l-6 60 h-40 z', '#888') + (over ? f('M-30 -60 q10 -24 30 -16 q16 -16 30 10 z', '#c9a171') + f('M20 -6 h14 v8 h-14 z', '#ddd') : ''));
    const FRIDGE = (x, y, open) => BOXG(x - 35, y - 160, 70, 160, '#eef3f6') + l('M' + (x - 35) + ' ' + (y - 100) + ' h70', 2) + (open ? l('M' + (x - 30) + ' ' + (y - 60) + ' h60 M' + (x - 30) + ' ' + (y - 30) + ' h60', 2, '#ccc') : '');
    const SEAT = (x, y, c) => f('M' + (x - 16) + ' ' + (y - 40) + ' h32 v26 h-32 z M' + (x - 20) + ' ' + (y - 14) + ' h40 v8 h-40 z', c || BL);
    const BUNNY = (x, y, k) => g(x, y, 0, k || 1, f('M-22 0 q-6 -40 10 -50 l-4 -30 l8 0 l4 26 h8 l4 -26 l8 0 l-4 30 q16 10 10 50 z', '#7a4a2a'));
    const C = {
      full: { n: 'full', past: 'full', en: 'The cup is full.', ko: '컵이 가득 찼다.', feel: '<b>더 들어갈 자리가 없다.</b> 배부르다는 뜻도 있다.', t: .4,
        p: [[150, '물을 따른다', () => CUP(75, 220, 1.6, .9)], [280, '거의 다 참', () => W.full()], [150, '"그만, 그만"', () => A(75, MN, 'shock', 'M18 -92 L46 -80', .8) + t(124, 60, 16, '그만', OR)]] },
      packed: { n: 'packed', past: 'packed', en: 'The train is packed.', ko: '기차가 꽉 찼다.', feel: '<b>사람 · 물건이 빽빽하다.</b> 틈이 꼭 0일 필요는 없다.', t: .3,
        p: [[150, '출근길 기차', () => TRAIN(5, 100, 14)], [280, '사람 빽빽', () => W.packed()], [150, '숨 막혀', () => A(75, BL, 'phew', 'M-20 -90 L12 -70 M20 -90 L-12 -68', .8) + A(30, '#888', 'calm', null, .7) + A(122, '#888', 'calm', null, .7)]] },
      brimming: { n: 'brimming', past: 'brimming', en: 'The cup is brimming with coffee.', ko: '컵에 커피가 찰랑찰랑하다.', feel: '<b>가장자리까지 꽉.</b> 감정이 가득할 때도 쓴다.', t: .6,
        p: [[150, '커피를 따른다', () => CUP(75, 220, 1.6, 1, '#6a4a2a')], [280, '가장자리까지', () => W.brimming()], [150, '살금살금 들고 간다', () => A(75, MN, 'stern', 'M-20 -90 L0 -60 M20 -90 L0 -60', .8) + CUP(75, 186, .5, 1, '#6a4a2a')]] },
      overflowing: { n: 'overflowing', past: 'overflowing', en: 'The sink is overflowing.', ko: '싱크대 물이 넘친다.', feel: '<b>경계를 넘어 밖으로 흐른다.</b> 메일함에도 쓴다.', t: .8,
        p: [[150, '물 틀어 놓고 깜빡', () => SINK(75, 130) + t(75, 80, 14, '콸콸', WT)], [280, '밖으로 넘침', () => W.overflowing()], [150, '바닥이 흥건', () => f('M0 220 q75 -10 150 0 V240 H0 z', '#8fd0ee') + A(75, MN, 'shock', null, .8)]] },
      empty: { n: 'empty', past: 'empty', en: 'The cup is empty.', ko: '컵이 비었다.', feel: '<b>안에 든 것이 없다.</b>', t: .6,
        p: [[150, '다 마셨다', () => CUP(75, 220, 1.6, 0)], [280, '찬 정도 0', () => W.empty()], [150, '한 잔 더?', () => A(75, MN, 'calm', 'M18 -92 L46 -80', .8) + t(124, 60, 18, '?', '#888')]] },
      bare: { n: 'bare', past: 'bare', en: 'The walls are bare.', ko: '벽이 휑하다.', feel: '<b>겉에 있을 것이 없다.</b> 벽 · 선반 · 가지에.', t: .5,
        p: [[150, '이사 온 날', () => DARK(150, '#f4efe4') + PKG(75, 220, 1)], [280, '겉에 아무것도', () => W.bare(FRAME(176, 130) + FRAME(220, 130))], [150, '그림을 걸까', () => DARK(150, '#f4efe4') + f('M90 60 h40 v30 h-40 z', '#cfe6f5') + A(50, MN, 'calm', 'M18 -92 L46 -120', .7)]] },
      hollow: { n: 'hollow', past: 'hollow', en: 'The tree trunk is hollow.', ko: '그 나무 밑동은 속이 비었다.', feel: '<b>겉은 있는데 안이 비었다.</b>', t: .6,
        p: [[150, '숲 속 큰 나무', () => TRUNK(75, 238, 1.2)], [280, '겉은 있고 속이 빔', () => W.hollow()], [150, '다람쥐가 쏙', () => TRUNK(75, 238, 1.2) + '<circle cx="75" cy="166" r="8" fill="' + BR + '"/>' + t(120, 60, 16, '쏙', OR)]] },
      vacant: { n: 'vacant', past: 'vacant', en: 'The apartment is vacant.', ko: '그 아파트는 비어 있다(사는 사람이 없다).', feel: '<b>쓰는 사람이 없다.</b> 가구는 있을 수 있다.', t: .8,
        p: [[150, '아파트 한 동', () => APT(20, 100)], [280, '쓰는 사람이 없음', () => W.vacant()], [150, '"입주자 구함"', () => BOXG(30, 80, 90, 60, '#fff') + t(75, 116, 14, '입주자 구함', GN)]] }
    };
    const MORE = {
      full: [
        { b: '배', en: 'I\'m full. No more, thanks.', ko: '배불러요. 그만 주세요.', feel: '배도 <b>더 들어갈 자리가 없다.</b>', p: [[150, '명절 밥상', () => f('M10 160 h130 v10 h-130 z', '#a3743f') + t(40, 150, 20, '🍗') + t(100, 150, 20, '🍚')], [280, '거의 다 참', () => W.full()], [150, '배를 두드린다', () => A(75, BL, 'phew', 'M-20 -90 L-6 -60 M20 -90 L6 -60', .8)]] },
        { b: '하루', en: 'I had a full day.', ko: '꽉 찬 하루였다.', feel: '시간에도 <b>빈자리가 없다.</b>', p: [[150, '아침부터', () => CLK(75, 100, 34) + t(75, 170, 14, '7:00', OR)], [280, '시간이 가득', () => W.full(CLK(196, 136, 26, OR))], [150, '털썩', () => f('M10 200 h130 v20 h-130 z', '#fff') + g(80, 196, -80, .5, MAN(MN, 'down'))]] }],
      packed: [
        { b: '공연장', en: 'The concert hall was packed.', ko: '공연장이 꽉 찼다.', feel: '사람이 <b>빽빽하다.</b>', p: [[150, '공연 시작 전', () => BOXG(20, 40, 110, 40, '#222') + t(75, 66, 14, '★ 공연 ★', GD)], [280, '사람 빽빽', () => W.packed()], [150, '빈자리가 없다', () => [140, 170, 200, 230].map((y) => [15, 45, 75, 105, 135].map((x) => g(x, y, 0, .25, HEAD('smile'))).join('')).join('')]] },
        { b: '일정', en: 'My week is packed with meetings.', ko: '이번 주는 회의로 꽉 찼다.', feel: '일정이 <b>빽빽하다.</b>', p: [[150, '달력', () => BOXG(20, 40, 110, 110, '#fff') + [0, 1, 2, 3, 4].map((i) => BOXG(26 + i * 20, 60, 16, 80, OR)).join('')], [280, '일정 빽빽', () => W.packed(DOC(176, 136, .8) + DOC(196, 140, .8) + DOC(216, 144, .8))], [150, '점심도 서서', () => A(75, BL, 'phew', 'M18 -92 L22 -126', .8)]] }],
      brimming: [
        { b: '눈물', en: 'Her eyes were brimming with tears.', ko: '그녀의 눈에 눈물이 그렁그렁했다.', feel: '눈물이 <b>가장자리까지</b> 찼다.', p: [[150, '이별 장면', () => BOXG(20, 40, 110, 70, '#222') + t(75, 84, 14, '영화', '#fff')], [280, '가장자리까지', () => W.brimming(BEYE(196, 136, .5) + '<path d="M176 146 q20 6 40 0" fill="none" stroke="#8fd0ee" stroke-width="4"/>')], [150, '또르르', () => g(75, 130, 0, 1.4, HEAD('sad')) + f('M100 140 q-5 8 0 11 q5 -3 0 -11', '#8fd0ee', 2)]] },
        { b: '자신감', en: 'He is brimming with confidence.', ko: '그는 자신감이 넘칠 듯 가득하다.', feel: '마음이 <b>가장자리까지</b> 찼다.', p: [[150, '결승전 전날', () => A(75, BL, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .8)], [280, '마음이 가득', () => W.brimming(t(196, 146, 36, '💪'))], [150, '"내가 이긴다"', () => A(75, BL, 'stern', 'M18 -92 L40 -120', .8) + t(124, 60, 18, '!', RD)]] }],
      overflowing: [
        { b: '쓰레기통', en: 'The trash can is overflowing.', ko: '쓰레기통이 넘친다.', feel: '<b>경계를 넘었다.</b>', p: [[150, '파티 다음 날', () => TRASH(75, 230, 1.4, true)], [280, '밖으로 넘침', () => W.overflowing()], [150, '"누가 버려?"', () => A(40, MN, 'stern', null, .55) + A(110, BL, 'stern', null, .55)]] },
        { b: '메일함', en: 'My inbox is overflowing.', ko: '메일함이 넘쳐 난다.', feel: '메일이 <b>경계를 넘어</b> 쏟아진다.', p: [[150, '휴가 다녀왔다', () => SUN(110, 40, 16) + A(60, BL, 'smile', null, .6)], [280, '메일이 넘침', () => W.overflowing(ENV(176, 130, .5) + ENV(200, 146, .5) + ENV(224, 124, .5) + t(196, 176, 14, '999+', RD))], [150, '머리를 감싼다', () => A(75, BL, 'sad', 'M-20 -90 L-28 -130 M20 -90 L28 -130', .8)]] }],
      empty: [
        { b: '냉장고', en: 'The fridge is empty.', ko: '냉장고가 텅 비었다.', feel: '안에 <b>든 것이 없다.</b>', p: [[150, '배고프다', () => A(75, BL, 'sad', null, .8) + t(124, 60, 16, '꼬르륵', OR)], [280, '찬 정도 0', () => W.empty()], [150, '텅', () => FRIDGE(75, 230, true)]] },
        { b: '약속', en: 'It was an empty promise.', ko: '그건 빈말이었다.', feel: '말 안에 <b>든 것이 없다.</b>', p: [[150, '"다음 주에 꼭!"', () => A(75, BR, 'smile', 'M18 -92 L40 -120', .8)], [280, '말 안이 텅', () => W.empty(BUB(196, 136, 120, '"꼭!"', 18))], [150, '안 왔다', () => CLK(110, 50, 22) + A(60, MN, 'sad', null, .7)]] }],
      bare: [
        { b: '나무', en: 'The trees are bare in winter.', ko: '겨울엔 나무가 앙상하다.', feel: '가지 <b>겉에 잎이 없다.</b>', p: [[150, '가을', () => TREEC(75, .8)], [280, '겉에 아무것도', () => W.bare(l('M196 186 V120 M196 150 l-20 -20 M196 140 l22 -18', 4, '#7a5a3a'))], [150, '앙상한 가지', () => l('M75 238 V100 M75 160 l-30 -30 M75 140 l34 -26 M75 120 l-20 -20', 8, '#7a5a3a')]] },
        { b: '최소', en: 'I did the bare minimum.', ko: '나는 딱 최소한만 했다.', feel: '군더더기 없이 <b>겉만 남은</b> 양.', p: [[150, '숙제 열 장', () => [0, 1, 2].map((i) => DOC(50 + i * 25, 130 + i * 6, 1)).join('')], [280, '딱 그만큼', () => W.bare(DOC(196, 136, 1))], [150, '선생님 눈빛', () => A(75, '#888', 'stern', null, .8)]] }],
      hollow: [
        { b: '초콜릿', en: 'The chocolate bunny is hollow.', ko: '초콜릿 토끼는 속이 비었다.', feel: '겉은 있는데 <b>속이 텅.</b>', p: [[150, '부활절 선물', () => BUNNY(75, 220, 1.4)], [280, '겉은 있고 속이 빔', () => W.hollow(BUNNY(196, 176, .9))], [150, '"속이 텅!"', () => BUNNY(60, 220, 1) + A(120, OR, 'shock', null, .5)]] },
        { b: '사과', en: 'His apology sounded hollow.', ko: '그의 사과는 공허하게 들렸다.', feel: '말 겉은 있는데 <b>마음이 비었다.</b>', p: [[150, '"미안, 미안"', () => A(75, BR, 'calm', null, .8) + t(124, 60, 14, '미안~', '#888')], [280, '말의 속', () => W.hollow(BUB(196, 136, 110, '"미안"', 18))], [150, '안 받아 준다', () => A(75, MN, 'stern', 'M-20 -90 L12 -70 M20 -90 L-12 -68', .8)]] }],
      vacant: [
        { b: '좌석', en: 'Is this seat vacant?', ko: '이 자리 비었나요?', feel: '<b>앉은 사람이 없다.</b>', p: [[150, '버스 안', () => SEAT(40, 220, '#888') + SEAT(110, 220, BL)], [280, '쓰는 사람이 없음', () => W.vacant(SEAT(196, 170, BL))], [150, '앉는다', () => SEAT(75, 220, BL) + g(75, 200, 0, .5, MAN(MN, 'smile'))]] },
        { b: '눈빛', en: 'He had a vacant stare.', ko: '그는 멍한 눈으로 바라봤다.', feel: '눈에 <b>아무도 안 사는</b> 듯 멍하다.', p: [[150, '월요일 아침', () => CLK(110, 50, 22) + A(60, BL, 'calm', null, .7)], [280, '눈빛의 주인', () => W.vacant(BEYE(196, 136, .5, true))], [150, '"여보세요?"', () => A(40, MN, 'smile', 'M18 -92 L40 -110', .55) + A(110, BL, 'calm', null, .55)]] }]
    };
    const CORE = { full: '<b>더 들어갈 자리가 없다.</b>', packed: '<b>사람 · 물건이 빽빽.</b>', brimming: '<b>가장자리까지 꽉.</b>', overflowing: '<b>경계를 넘어 흐른다.</b>', empty: '<b>안에 든 것이 없다.</b>', bare: '<b>겉에 있을 것이 없다.</b>', hollow: '<b>겉은 있고 속이 비었다.</b>', vacant: '<b>쓰는 사람이 없다.</b>' };
