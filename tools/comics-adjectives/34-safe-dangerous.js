    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "신호등"과 "무엇이?" 칸이다 — 어느 불이 켜지나, 그리고 secure(막는 장치) · harmless(그것 자체가 무해) · risky(선택의 부담) · hazardous(물질 · 환경) · perilous(아주 위태로운 길)처럼 무엇을 보는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'risky', BASIC_B = '노트 장면';
    const FX = { safe: [.4, 900, 900, .1, .4], secure: [.15, 1400, 1400, .2, .4], harmless: [.5, 1000, 1100, .08, .4], dangerous: [.4, 1800, 900, .2, .4], risky: [.5, 700, 1200, .15, .4], hazardous: [.6, 2200, 2200, .15, .4], perilous: [.8, 400, 120, .2, .4] };
    const ORDER = MIX(['safe', 'secure', 'harmless', 'dangerous', 'risky', 'hazardous', 'perilous']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const LT = { safe: 2, secure: 2, harmless: 2, risky: 1, dangerous: 0, hazardous: 0, perilous: 0 };
    const WHAT = { safe: '다칠 걱정 없음', secure: '막는 장치가 있음', harmless: '그것 자체가 무해', dangerous: '다칠 수 있음', risky: '선택이 손해 볼 수도', hazardous: '물질 · 환경이 해로움', perilous: '아주 위태로운 길' };
    const LC = ['#e44', '#f2b632', '#3c4'];
    const TC = (id) => [RD, OR, GN][LT[id]];
    const LIGHT = (id) => { const k = LT[id];
      let s = f('M40 40 h44 v150 h-44 z', '#333') + l('M62 190 v30', 6, '#555') + [0, 1, 2].map((i) => '<circle cx="62" cy="' + (66 + i * 48) + '" r="17" fill="' + (i === 2 - k ? LC[k] : '#555') + '"/>').join('');
      const icon = { secure: t(102, 66, 18, '🔒'), harmless: t(102, 66, 16, '🕷'), risky: t(102, 116, 18, '🎲'), hazardous: f('M92 150 l12 -22 l12 22 z', GD, 2) + t(104, 147, 12, '!'), perilous: l('M92 170 l12 -20 l10 30', 3, BR) }[id] || '';
      return s + icon + t(62, 234, 12, ['빨간불', '노란불', '초록불'][k], TC(id)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + LIGHT(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 8 ? 13 : 16, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(id));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { safe: P('safe', '안심'), secure: P('secure', '철컥'), harmless: P('harmless', '괜찮아'), dangerous: P('dangerous', '위험!'), risky: P('risky', '모 아니면 도'), hazardous: P('hazardous', '주의!'), perilous: P('perilous', '아찔') };
    // 작은 그림들
    const BRIDGE = (broken) => l('M0 150 H' + (broken ? 60 : 150) + (broken ? ' M90 150 H150' : ''), 8, '#a3743f') + l('M20 150 v88 M130 150 v88', 6, '#7a5a3a') + f('M0 200 q20 -8 40 0 t40 0 t40 0 t40 0 V240 H0 z', '#8fd0ee');
    const SPIDER = (x, y, k) => g(x, y, 0, k || 1, '<circle r="10" fill="#555"/>' + l('M-8 -4 l-12 -8 M-8 0 l-14 0 M-8 4 l-12 8 M8 -4 l12 -8 M8 0 l14 0 M8 4 l12 8', 2.5, '#555') + '<circle cx="-3" cy="-2" r="2" fill="#fff"/><circle cx="3" cy="-2" r="2" fill="#fff"/>');
    const DRUM = (x, y) => f('M' + (x - 20) + ' ' + (y - 50) + ' h40 v50 h-40 z', GD) + f('M' + (x - 8) + ' ' + (y - 34) + ' l8 -14 l8 14 z', '#222');
    const CLIFF = () => f('M0 120 H60 V240 H0 z', '#9a8a6a') + f('M110 120 H150 V240 H110 z', '#9a8a6a') + l('M60 124 L110 124', 2, '#7a5a3a');
    const LOCKD = (x, y) => BOXG(x - 30, y - 120, 60, 120, '#c9a171') + f('M' + (x + 10) + ' ' + (y - 66) + ' h16 v14 h-16 z', GD);
    const SCREENL = (x, y) => f('M' + (x - 40) + ' ' + (y - 50) + ' h80 v50 h-80 z', '#222') + f('M' + (x - 34) + ' ' + (y - 44) + ' h68 v38 h-68 z', '#cfe6f5') + t(x, y - 20, 14, '🔒');
    const CHART = (x, y, up) => f('M' + (x - 40) + ' ' + (y - 50) + ' h80 v50 h-80 z', '#fff', 2) + l('M' + (x - 34) + ' ' + (y - 14) + (up ? ' l20 -10 l14 6 l24 -24' : ' l20 6 l14 -16 l24 20'), 3, up ? GN : RD);
    const C = {
      safe: { n: 'safe', past: 'safe', en: 'The bridge is safe.', ko: '그 다리는 안전하다.', feel: '<b>다칠 걱정이 없다.</b> 명사로는 금고.', t: .4,
        p: [[150, '새 다리', () => BRIDGE(false)], [280, '초록불', () => W.safe()], [150, '편하게 건넌다', () => BRIDGE(false) + g(75, 146, 0, .45, MAN(MN, 'smile', null, 'M-10 -42 L-24 0 M10 -42 L22 0'))]] },
      secure: { n: 'secure', past: 'secure', en: 'The account is secure.', ko: '그 계정은 보안이 잘 돼 있다.', feel: '<b>밖의 위협을 막아 놓았다.</b>', t: .15,
        p: [[150, '로그인 화면', () => SCREENL(75, 160)], [280, '막는 장치', () => W.secure()], [150, '안심하고 쓴다', () => A(75, BL, 'smile', 'M18 -92 L22 -126', .8)]] },
      harmless: { n: 'harmless', past: 'harmless', en: 'That spider is harmless.', ko: '저 거미는 해롭지 않다.', feel: '<b>그것 자체가</b> 해를 안 끼친다.', t: .5,
        p: [[150, '창틀의 거미', () => BOXG(30, 50, 90, 80, '#cfe6f5') + SPIDER(75, 140, 1.2)], [280, '그것 자체가 무해', () => W.harmless(SPIDER(196, 140, 1.4))], [150, '밖으로 살살', () => A(75, MN, 'smile', 'M18 -92 L40 -100', .8) + SPIDER(124, 80, .6)]] },
      dangerous: { n: 'dangerous', past: 'dangerous', en: 'The bridge is dangerous.', ko: '그 다리는 위험하다.', feel: '<b>다칠 수 있다.</b> 두루 쓴다.', t: .4,
        p: [[150, '낡은 다리', () => BRIDGE(true)], [280, '빨간불', () => W.dangerous()], [150, '돌아간다', () => BRIDGE(true) + g(30, 150, 0, .35, MAN(MN, 'shock'))]] },
      risky: { n: 'risky', past: 'risky', en: 'That investment is risky.', ko: '그 투자는 손해 볼 수 있다.', feel: '<b>선택 · 행동이 손해로 갈 수 있다.</b> 몸의 위험이 아닐 수 있다.', t: .5,
        p: [[150, '"두 배 줄게요!"', () => A(75, BR, 'smile', 'M18 -92 L40 -120', .8) + COIN(120, 100, 10)], [280, '선택의 부담', () => W.risky()], [150, '오를까 내릴까', () => CHART(75, 160, true) + t(75, 190, 16, '?', OR)]] },
      hazardous: { n: 'hazardous', past: 'hazardous', en: 'Those chemicals are hazardous.', ko: '그 화학 물질들은 해로울 수 있다.', feel: '<b>물질 · 환경이 해를 줄 수 있다.</b> 안내문에 많다.', t: .6,
        p: [[150, '창고 구석', () => DRUM(50, 230) + DRUM(100, 230)], [280, '물질 · 환경', () => W.hazardous()], [150, '장갑 · 마스크', () => A(75, GD, 'stern', null, .8) + f('M64 116 h22 v10 h-22 z', '#fff')]] },
      perilous: { n: 'perilous', past: 'perilous', en: 'The crossing was perilous.', ko: '그 건너기는 몹시 위태로웠다.', feel: '<b>아주 위태로운 길 · 상황.</b> 문어적인 말.', t: .8,
        p: [[150, '협곡', () => CLIFF()], [280, '아주 위태로운 길', () => W.perilous()], [150, '줄 하나에 의지', () => CLIFF() + g(85, 124, 0, .35, MAN(BL, 'shock', 'M-20 -90 L-30 -130 M20 -90 L30 -130', 'M-6 -42 L-6 0 M6 -42 L6 0'))]] }
    };
    const MORE = {
      safe: [
        { b: '집', en: 'You\'re safe at home now.', ko: '이제 집에 왔으니 안전해.', feel: '<b>다칠 걱정 없이</b> 편하다.', p: [[150, '폭풍우 밤', () => DARK(150, '#3a3a4a') + t(75, 80, 30, '⚡', GD)], [280, '초록불', () => W.safe()], [150, '담요 속', () => f('M10 200 q65 -40 130 0 v38 h-130 z', '#f4c6d0') + g(75, 176, 0, .5, HEAD('phew'))]] },
        { b: '선택', en: 'It\'s a safe choice.', ko: '무난한 선택이다.', feel: '선택도 <b>탈이 없다.</b>', p: [[150, '메뉴판', () => f('M45 60 h60 v120 h-60 z', '#fff', 2) + l('M55 80 h40 M55 100 h40 M55 120 h40', 3, '#bbb')], [280, '탈 없는 선택', () => W.safe(t(196, 146, 18, '늘 먹던 것', BL))], [150, '역시 맛있다', () => A(75, MN, 'smile', 'M18 -92 L22 -126', .8)]] }],
      secure: [
        { b: '문', en: 'The door is secure.', ko: '문이 단단히 잠겨 있다.', feel: '<b>막는 장치</b>가 있다.', p: [[150, '자물쇠 세 개', () => LOCKD(75, 238)], [280, '막는 장치', () => W.secure()], [150, '안심하고 잔다', () => DARK(150, '#2b3550') + f('M10 200 q65 -40 130 0 v38 h-130 z', BL) + ZZ(100, 110)]] },
        { b: '마음', en: 'The child feels secure with her mom.', ko: '아이는 엄마 곁에서 마음이 놓인다.', feel: '마음도 <b>보호받는</b> 느낌.', p: [[150, '낯선 곳', () => [20, 50, 100, 130].map((x) => A(x, '#888', 'calm', null, .45)).join('')], [280, '보호받는 마음', () => W.secure(t(196, 146, 34, '🤗'))], [150, '엄마 손을 꼭', () => A(55, MN, 'smile', 'M20 -90 L40 -60', .75) + A(100, OR, 'smile', 'M-20 -90 L-36 -60', .5)]] }],
      harmless: [
        { b: '강아지', en: 'The dog barks, but it\'s harmless.', ko: '그 개는 짖지만 해롭지 않다.', feel: '시끄러워도 <b>그 자체는 무해.</b>', p: [[150, '왈왈!', () => g(75, 220, 0, 1.2, '<ellipse cy="-14" rx="22" ry="12" fill="#c9a171" stroke="#222" stroke-width="3"/><circle cx="20" cy="-28" r="10" fill="#c9a171" stroke="#222" stroke-width="3"/>') + t(110, 150, 16, '왈!', RD)], [280, '그것 자체가 무해', () => W.harmless()], [150, '꼬리를 흔든다', () => g(75, 220, 0, 1.2, '<ellipse cy="-14" rx="22" ry="12" fill="#c9a171" stroke="#222" stroke-width="3"/><circle cx="20" cy="-28" r="10" fill="#c9a171" stroke="#222" stroke-width="3"/>') + l('M40 200 q-10 -10 -4 -20', 3, BR)]] },
        { b: '농담', en: 'It was just a harmless joke.', ko: '그냥 악의 없는 농담이었다.', feel: '말도 <b>해를 안 끼친다.</b>', p: [[150, '"머리에 새집 지었네"', () => A(75, BR, 'smile', null, .8)], [280, '그것 자체가 무해', () => W.harmless(t(196, 146, 30, '😄'))], [150, '다 같이 웃음', () => A(45, MN, 'smile', null, .55) + A(110, BR, 'smile', null, .55)]] }],
      dangerous: [
        { b: '밤길', en: 'This road is dangerous at night.', ko: '이 길은 밤에 위험하다.', feel: '<b>다칠 수</b> 있다.', p: [[150, '가로등 없는 길', () => DARK(150, '#1b1d26') + l('M0 200 H150', 4, '#555')], [280, '빨간불', () => W.dangerous()], [150, '손전등 들고 천천히', () => DARK(150, '#1b1d26') + A(75, BL, 'stern', 'M18 -92 L40 -80', .7) + l('M106 100 l30 -14 M106 100 l30 0', 2, GD)]] },
        { b: '생각', en: 'That\'s a dangerous idea.', ko: '그건 위험한 생각이야.', feel: '생각도 <b>다칠 수 있는</b> 쪽으로 간다.', p: [[150, '"지붕에서 뛰어 볼까?"', () => A(75, OR, 'smile', 'M18 -92 L40 -120', .6)], [280, '빨간불', () => W.dangerous()], [150, '"안 돼!"', () => A(75, MN, 'stern', 'M18 -92 L46 -100', .8)]] }],
      risky: [
        { b: '점프', en: 'That jump looks risky.', ko: '저 점프는 위험해 보인다.', feel: '해 보는 <b>선택에 부담</b>이 있다.', p: [[150, '자전거 묘기', () => BIKE(40, 210, .6) + f('M80 238 l40 -40 v40 z', '#888')], [280, '선택의 부담', () => W.risky()], [150, '"…다음에 하자"', () => A(75, OR, 'phew', null, .6)]] },
        { b: '고백', en: 'Telling her was risky.', ko: '그녀에게 말한 건 모험이었다.', feel: '마음을 거는 <b>선택이 불확실</b>하다.', p: [[150, '편지를 쓴다', () => ENV(75, 120, 1.4) + t(75, 124, 16, '♥', RD)], [280, '선택의 부담', () => W.risky(t(196, 146, 24, '♥ ?', RD))], [150, '두근두근', () => A(75, BL, 'shock', null, .8) + t(124, 60, 16, '두근', RD)]] }],
      hazardous: [
        { b: '폐기물', en: 'Don\'t touch hazardous waste.', ko: '유해 폐기물은 만지지 마세요.', feel: '<b>물질이</b> 해를 줄 수 있다.', p: [[150, '경고 표지판', () => f('M45 160 l30 -60 l30 60 z', GD, 3) + t(75, 152, 22, '!')], [280, '물질 · 환경', () => W.hazardous()], [150, '멀리 돌아간다', () => DRUM(40, 230) + A(110, BL, 'stern', null, .5)]] },
        { b: '빙판길', en: 'Icy roads are hazardous.', ko: '빙판길은 위험하다.', feel: '<b>환경이</b> 해를 줄 수 있다.', p: [[150, '얼어붙은 길', () => f('M0 200 H150 V240 H0 z', '#cfe6f5') + l('M20 210 l14 -3 M90 214 l16 -4', 2, '#fff')], [280, '물질 · 환경', () => W.hazardous()], [150, '미끄러질 뻔', () => f('M0 200 H150 V240 H0 z', '#cfe6f5') + g(75, 200, 14, .6, MAN(MN, 'shock', 'M-20 -90 L-40 -110 M20 -90 L40 -110'))]] }],
      perilous: [
        { b: '산길', en: 'The mountain path was perilous.', ko: '산길은 몹시 위태로웠다.', feel: '길이 <b>아주 위태롭다.</b>', p: [[150, '절벽 옆 길', () => f('M0 238 V60 L40 60 L40 238 z', '#9a8a6a') + l('M40 140 h30', 4, '#7a5a3a')], [280, '아주 위태로운 길', () => W.perilous()], [150, '벽에 바짝 붙어', () => f('M0 238 V60 L40 60 L40 238 z', '#9a8a6a') + g(50, 140, 0, .4, MAN(BL, 'shock', 'M-20 -90 L-32 -60'))]] },
        { b: '회사', en: 'The company is in a perilous state.', ko: '회사가 몹시 위태로운 상태다.', feel: '형편이 <b>아주 위태롭다.</b>', p: [[150, '매출 그래프', () => CHART(75, 160, false)], [280, '아주 위태로운 상황', () => W.perilous(l('M150 120 l30 20 l20 -10 l40 50', 4, RD))], [150, '긴급 회의', () => [30, 75, 120].map((x) => A(x, '#2b3550', 'shock', null, .45)).join('')]] }]
    };
    const CORE = { safe: '<b>다칠 걱정이 없다.</b>', secure: '<b>막는 장치로 보호된다.</b>', harmless: '<b>그것 자체가 해롭지 않다.</b>', dangerous: '<b>다칠 수 있다.</b>', risky: '<b>선택이 손해로 갈 수 있다.</b>', hazardous: '<b>물질 · 환경이 해로울 수 있다.</b>', perilous: '<b>아주 위태롭다.</b>' };
