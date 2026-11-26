    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "문 하나와 자물쇠"와 "무엇이?" 칸이다 — 문이 얼마나 열렸나, 자물쇠가 풀렸나 · 틈을 막았나만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'unlocked', BASIC_B = '노트 장면';
    const FX = { open: [.4, 600, 800, .1, .4], unlocked: [.1, 1800, 1800, .2, .4], 'wide open': [.6, 500, 900, .12, .4], closed: [.2, 300, 200, .2, .4], shut: [.1, 200, 160, .3, .4], sealed: [.5, 900, 700, .1, .4] };
    const ORDER = MIX(['open', 'unlocked', 'wide open', 'closed', 'shut', 'sealed']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const OP = { 'wide open': 1, open: .55, unlocked: 0, closed: 0, shut: 0, sealed: 0 };
    const WHAT = { unlocked: '잠금만 풀림', 'wide open': '크게 열림', closed: '닫힘 · 영업 끝', shut: '그냥 닫힘', sealed: '틈을 막음' };
    const TC = (id) => OP[id] || id === 'unlocked' ? GN : RD;
    const DOORP = (id) => { const a = OP[id], w = 80 * (1 - a * .8);
      let s = f('M22 40 h80 v160 h-80 z', a ? '#2b2b33' : '#c9a171') + (a ? f('M22 40 h' + w + ' l' + (-w * .0) + ' 0 v160 h-' + w + ' z', '#c9a171') + l('M' + (22 + w) + ' 40 l' + (a * 14) + ' -8 v176 l-' + (a * 14) + ' -8', 3) : '<circle cx="90" cy="124" r="4"/>');
      if (!a) { const lk = id === 'unlocked'; s += f('M80 136 h22 v20 h-22 z', GD) + l(lk ? 'M84 136 v-10 a7 7 0 0 1 14 0' : 'M84 136 v-8 a7 7 0 0 1 14 0 v8', 3); }
      if (id === 'sealed') s += l('M16 50 L108 190 M108 50 L16 190', 10, '#d9c08a') + l('M16 50 L108 190 M108 50 L16 190', 1, '#a3743f');
      if (id === 'closed') s += f('M34 70 h56 v22 h-56 z', '#fff', 2) + t(62, 86, 12, '영업 끝', RD);
      return s + t(62, 226, 13, a ? '열림 ' + Math.round(a * 100) : id === 'unlocked' ? '닫힘 · 잠금 풀림' : '닫힘', TC(id)); };
    const TP = (id, b, z) => { const c = TC(id);
      return DARK(280, '#f6f4ee') + DOORP(id) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 15 : 18, WHAT[id], BL) : t(196, 128, 15, '드나들 수', '#888') + t(196, 150, 15, '있다', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { open: P('open', '끼익'), unlocked: P('unlocked', '찰칵'), 'wide open': P('wide open', '활짝'), closed: P('closed', '마감'), shut: P('shut', '탁'), sealed: P('sealed', '꽁꽁') };
    // 작은 그림들
    const DOOR = (x, open) => BOXG(x, 80, 60, 158, open ? '#2b2b33' : '#c9a171') + (open ? f('M' + x + ' 80 h20 v158 h-20 z', '#c9a171') : '<circle cx="' + (x + 50) + '" cy="164" r="4"/>');
    const WIN = (x, y, open) => BOXG(x, y, 70, 60, '#cfe6f5') + (open ? l('M' + x + ' ' + y + ' l-20 10 v40 l20 10 M' + (x + 70) + ' ' + y + ' l20 10 v40 l-20 10', 3) : l('M' + (x + 35) + ' ' + y + ' v60', 3));
    const SHOP = (x, y, sign, c) => BOXG(x, y, 110, 90, '#f2d59a') + f('M' + x + ' ' + y + ' h110 v18 h-110 z', c || RD) + t(x + 55, y + 60, 14, sign, c || RD);
    const LOCK = (x, y, k, open) => g(x, y, 0, k || 1, f('M-14 0 h28 v24 h-28 z', GD) + l(open ? 'M-9 0 v-12 a9 9 0 0 1 18 0' : 'M-9 0 v-10 a9 9 0 0 1 18 0 v10', 4));
    const ENVL = (x, y, k, seal) => g(x, y, 0, k || 1, f('M-34 -22 h68 v44 h-68 z', '#fff') + l('M-34 -22 l34 24 l34 -24', 2.5) + (seal ? '<circle cy="2" r="8" fill="' + RD + '"/>' : ''));
    const JARS = (x, y, k) => g(x, y, 0, k || 1, f('M-20 -50 h40 v50 h-40 z', '#cfe6f5') + f('M-24 -60 h48 v10 h-48 z', '#888') + f('M-14 -36 h28 v24 h-28 z', OR));
    const BAG = (x, y, k) => g(x, y, 0, k || 1, f('M-30 -40 h60 v50 h-60 z', '#eef3f6') + l('M-30 -34 h60', 4, BL) + f('M-16 -20 h32 v22 h-32 z', '#f2b632'));
    const C = {
      open: { n: 'open', past: 'open', en: 'The door is open.', ko: '문이 열려 있다.', feel: '<b>드나들 수 있다.</b> 가게가 영업 중일 때도.', t: .4,
        p: [[150, '바람이 분다', () => DOOR(45, true) + l('M10 140 h30 q8 0 6 -6', 3, WT)], [280, '반쯤 열림', () => W.open()], [150, '고양이가 쏙', () => DOOR(45, true) + g(60, 236, 0, .7, '<ellipse cy="-14" rx="20" ry="12" fill="#888" stroke="#222" stroke-width="2"/>')]] },
      unlocked: { n: 'unlocked', past: 'unlocked', en: 'The door is unlocked, but it\'s still closed.', ko: '문은 안 잠겼지만 아직 닫혀 있다.', feel: '<b>잠금만 풀렸다.</b> 닫혀 있어도 열 수 있다.', t: .1,
        p: [[150, '열쇠를 돌린다', () => DOOR(45, false) + KEYI(100, 160, .6)], [280, '잠금만 풀림', () => W.unlocked()], [150, '손잡이를 잡는다', () => DOOR(45, false) + A(120, MN, 'calm', 'M-18 -92 L-34 -70', .6)]] },
      'wide open': { n: 'wide open', past: 'wide open', en: 'The window is wide open.', ko: '창문이 활짝 열려 있다.', feel: '<b>크게 열렸다.</b> 눈 · 입에도 쓴다.', t: .6,
        p: [[150, '봄날 아침', () => WIN(40, 60, true) + SUN(75, 90, 12)], [280, '크게 열림', () => W['wide open']()], [150, '바람이 쏴아', () => A(75, MN, 'smile', null, .8) + l('M10 80 h40 q8 0 6 -6 M14 96 h50', 3, WT)]] },
      closed: { n: 'closed', past: 'closed', en: 'The shop is closed.', ko: '가게가 문을 닫았다.', feel: '<b>통로가 막혔다.</b> 가게 · 도로에는 closed.', t: .2,
        p: [[150, '빵 사러 왔다', () => SHOP(20, 100, '영업 끝')], [280, '닫힘 · 영업 끝', () => W.closed()], [150, '터덜터덜', () => A(75, BL, 'down', null, .8)]] },
      shut: { n: 'shut', past: 'shut', en: 'The door is shut. Please knock.', ko: '문이 닫혀 있어요. 노크하세요.', feel: '<b>그냥 닫혀 있다.</b> 잠겼다는 뜻까지는 아니다.', t: .1,
        p: [[150, '교무실 앞', () => DOOR(45, false) + f('M50 100 h50 v18 h-50 z', '#fff', 2) + t(75, 113, 10, '노크', RD)], [280, '그냥 닫힘', () => W.shut()], [150, '똑똑', () => DOOR(80, false) + A(40, OR, 'calm', 'M18 -92 L46 -100', .6) + t(60, 60, 16, '똑똑', '#888')]] },
      sealed: { n: 'sealed', past: 'sealed', en: 'The bag is sealed.', ko: '봉지가 밀봉돼 있다.', feel: '<b>틈을 막아 보호한다.</b> 완벽한 밀폐까지는 아닐 수 있다.', t: .5,
        p: [[150, '새 과자 봉지', () => BAG(75, 180, 1.6)], [280, '틈을 막음', () => W.sealed(BAG(196, 160, 1))], [150, '"가위 어디 있지?"', () => A(75, MN, 'stern', 'M-20 -90 L0 -60 M20 -90 L0 -60', .8) + t(124, 60, 16, '끙', OR)]] }
    };
    const MORE = {
      open: [
        { b: '빵집', en: 'The bakery is open until nine.', ko: '빵집은 아홉 시까지 문을 연다.', feel: '가게가 <b>드나들 수 있다</b> — 영업 중.', p: [[150, '저녁 8시', () => SHOP(20, 100, '영업 중', GN)], [280, '반쯤 열림', () => W.open()], [150, '빵 냄새', () => A(75, MN, 'smile', null, .8) + t(124, 60, 18, '♨', OR)]] },
        { b: '마음', en: 'She is open to new ideas.', ko: '그녀는 새 생각을 잘 받아들인다.', feel: '마음 문이 <b>열려 있다.</b>', p: [[150, '"이렇게 해 볼까요?"', () => A(40, BL, 'smile', 'M18 -92 L40 -120', .55) + A(110, MN, 'calm', null, .55)], [280, '마음의 문', () => W.open(t(196, 146, 36, '♥', '#f4a0b0'))], [150, '"좋아요, 해 봐요"', () => A(75, MN, 'smile', null, .8)]] }],
      unlocked: [
        { b: '휴대폰', en: 'My phone is unlocked.', ko: '휴대폰 잠금이 풀려 있다.', feel: '<b>잠금만</b> 풀렸다.', p: [[150, '얼굴 인식', () => g(75, 120, 0, 2, PH)], [280, '잠금만 풀림', () => W.unlocked(g(196, 136, 0, 1.4, PH) + LOCK(196, 120, .6, true))], [150, '앱을 연다', () => A(75, BL, 'smile', 'M18 -92 L22 -126', .8)]] },
        { b: '게임', en: 'The new level is unlocked!', ko: '새 단계가 열렸다!', feel: '막혀 있던 길의 <b>잠금이 풀렸다.</b>', p: [[150, '보스를 이겼다', () => BOXG(20, 40, 110, 80, '#222') + t(75, 86, 16, 'WIN!', GD)], [280, '잠금이 풀림', () => W.unlocked(LOCK(196, 130, 1.4, true) + t(196, 176, 14, 'LEVEL 2', GN))], [150, '야호', () => A(75, OR, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .6)]] }],
      'wide open': [
        { b: '입', en: 'The baby\'s mouth was wide open.', ko: '아기가 입을 크게 벌렸다.', feel: '입도 <b>활짝</b> 열린다.', p: [[150, '이유식 시간', () => f('M60 120 h30 l-4 30 h-22 z', '#fff')], [280, '크게 열림', () => W['wide open'](g(196, 146, 0, .8, HEAD('shock')))], [150, '아~', () => g(75, 130, 0, 1.4, HEAD('shock')) + t(124, 60, 18, '아~', OR)]] },
        { b: '승부', en: 'The game is wide open now.', ko: '이제 승부는 누구도 모른다.', feel: '결과로 가는 길이 <b>활짝</b> 열렸다.', p: [[150, '동점 골', () => BOXG(20, 40, 110, 60, '#222') + t(75, 78, 20, '2 : 2', '#fff')], [280, '길이 크게 열림', () => W['wide open'](t(196, 146, 30, '? ?', OR))], [150, '모두 숨죽인다', () => [30, 75, 120].map((x) => A(x, BL, 'shock', null, .45)).join('')]] }],
      closed: [
        { b: '도로', en: 'The road is closed.', ko: '도로가 막혔다.', feel: '길이 <b>막혔다.</b>', p: [[150, '공사 중', () => f('M0 200 H150 V240 H0 z', '#888') + f('M20 170 h110 v16 h-110 z', OR) + l('M40 170 l20 16 M80 170 l20 16', 4, '#fff')], [280, '닫힘', () => W.closed()], [150, '돌아간다', () => CAR(40, 220, .5) + l('M100 200 q30 -40 0 -80', 3, RD)]] },
        { b: '사건', en: 'The case is closed.', ko: '사건은 종결됐다.', feel: '이야기의 문이 <b>닫혔다.</b>', p: [[150, '탐정의 추리', () => A(75, BR, 'stern', 'M18 -92 L30 -120', .8) + t(124, 60, 20, '!', RD)], [280, '이야기의 문', () => W.closed(DOC(196, 136, 1.1) + t(222, 160, 16, '끝', RD))], [150, '파일을 덮는다', () => BOXG(30, 120, 90, 60, '#c9a171') + t(75, 156, 12, 'CASE', '#fff')]] }],
      shut: [
        { b: '눈', en: 'Keep your eyes shut.', ko: '눈 감고 있어.', feel: '눈이 <b>그냥 닫혀</b> 있다.', p: [[150, '생일 깜짝 선물', () => PKG(75, 190, 1.2)], [280, '그냥 닫힘', () => W.shut(g(196, 146, 0, .7, HEAD('phew')))], [150, '"이제 떠!"', () => A(75, OR, 'shock', null, .6) + t(110, 60, 20, '🎂')]] },
        { b: '입', en: 'Keep your mouth shut.', ko: '입 꼭 다물고 있어.', feel: '말이 나가는 문을 <b>닫는다.</b>', p: [[150, '"비밀이야"', () => A(40, MN, 'stern', null, .55) + A(110, BL, 'shock', null, .55)], [280, '입의 문', () => W.shut(t(196, 146, 36, '🤐'))], [150, '꾹', () => A(75, BL, 'stern', null, .8) + t(124, 60, 16, '…', '#888')]] }],
      sealed: [
        { b: '편지', en: 'The letter is sealed.', ko: '편지가 봉해져 있다.', feel: '틈을 <b>막아</b> 지킨다.', p: [[150, '할머니께 보낼 편지', () => ENVL(75, 140, 1.4, false)], [280, '틈을 막음', () => W.sealed(ENVL(196, 140, 1, true))], [150, '우체통으로', () => f('M50 120 h50 v118 h-50 z', RD) + f('M60 140 h30 v6 h-30 z', '#222')]] },
        { b: '운명', en: 'His fate was sealed.', ko: '그의 운명은 정해졌다.', feel: '결과가 <b>봉해져</b> 바꿀 틈이 없다.', p: [[150, '마지막 1초', () => CLK(75, 100, 34) + t(75, 170, 14, '0:01', RD)], [280, '틈을 막음', () => W.sealed(t(196, 146, 24, '끝', RD))], [150, '털썩', () => A(75, BL, 'down', null, .8)]] }]
    };
    const CORE = { open: '<b>드나들 수 있다.</b>', unlocked: '<b>잠금만 풀렸다.</b>', 'wide open': '<b>활짝 열렸다.</b>', closed: '<b>통로가 막혔다.</b>', shut: '<b>그냥 닫혀 있다.</b>', sealed: '<b>틈을 막았다.</b>' };
