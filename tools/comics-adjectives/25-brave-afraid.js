    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "어두운 문과 사람 한 명"과 "무엇이?" 칸이다 — 사람이 문 쪽으로 다가가나 물러서나, 그리고 bold(생각 · 계획) · courageous(알면서 한 행동) · fearless(보이는 모습) · panicked(허둥대는 반응)처럼 무엇을 보는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'fearless', BASIC_B = '노트 장면';
    const FX = { brave: [.4, 500, 700, .15, .4], bold: [.3, 800, 1200, .2, .4], courageous: [.6, 400, 800, .15, .4], fearless: [.4, 900, 1300, .15, .4], afraid: [.6, 400, 300, .08, .5], scared: [.3, 1400, 1000, .12, .4], terrified: [.8, 2200, 400, .25, .4], panicked: [.5, 1800, 2400, .2, .3] };
    const ORDER = MIX(['brave', 'bold', 'courageous', 'fearless', 'afraid', 'scared', 'terrified', 'panicked']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const CG = { fearless: 1, courageous: .85, brave: .8, bold: .7, afraid: -.4, scared: -.5, panicked: -.7, terrified: -.9 };
    const WHAT = { bold: '생각 · 계획 · 색', courageous: '알면서 한 행동', fearless: '그렇게 보이는 모습', scared: '일상에서 두루', terrified: '공포가 매우 큼', panicked: '허둥대는 반응' };
    const TC = (v) => v > 0 ? GN : RD;
    const DOORS = (id) => { const v = CG[id], x = 50 + v * 24, fc = v > 0 ? (id === 'fearless' ? 'smile' : 'stern') : v < -.8 ? 'shock' : 'sad';
      let s = f('M84 60 h28 v140 h-28 z', '#1b1d26') + t(98, 120, 14, '?', '#666') + l('M4 200 H116', 2, '#999');
      s += g(x, 200, v < 0 ? -6 : 6, .42, MAN(id === 'bold' ? OR : BL, fc, v > 0 ? 'M18 -92 L40 -100' : 'M-20 -90 L-6 -60 M20 -90 L6 -60'));
      s += l(v > 0 ? 'M' + (x + 4) + ' 214 h20 l-6 -5 M' + (x + 24) + ' 214 l-6 5' : 'M' + (x - 4) + ' 214 h-20 l6 -5 M' + (x - 24) + ' 214 l6 5', 3, TC(v));
      if (v < -.6) s += l('M' + (x - 22) + ' 120 l-6 -3 M' + (x - 22) + ' 130 l-6 3 M' + (x + 22) + ' 120 l6 -3', 2, RD);
      if (id === 'panicked') s += t(x, 92, 16, '?!', RD);
      if (id === 'bold') s += t(x + 14, 100, 16, '💡');
      return s + t(62, 232, 12, v > 0 ? '다가간다' : '물러선다', TC(v)); };
    const TP = (id, b, z) => { const c = TC(CG[id]);
      return DARK(280, '#f6f4ee') + DOORS(id) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 14 : 17, WHAT[id], BL) : t(196, 128, 15, '두려움 앞', '#888') + t(196, 150, 15, CG[id] > 0 ? '안 물러섬' : '마음이 움츠러듦', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { brave: P('brave', '당당'), bold: P('bold', '과감!'), courageous: P('courageous', '그래도 간다'), fearless: P('fearless', '씩씩'), afraid: P('afraid', '움찔'), scared: P('scared', '덜덜'), terrified: P('terrified', '으아악'), panicked: P('panicked', '허둥지둥') };
    // 작은 그림들
    const DOG = (x, y, k) => g(x, y, 0, k || 1, '<ellipse cy="-20" rx="30" ry="16" fill="#555" stroke="#222" stroke-width="3"/><circle cx="28" cy="-36" r="14" fill="#555" stroke="#222" stroke-width="3"/>' + t(42, -50, 14, '왈!', RD));
    const NEEDLE = (x, y) => l('M' + x + ' ' + y + ' h40', 6, '#cfe6f5') + l('M' + (x + 40) + ' ' + y + ' h16', 2, '#888');
    const SLIDE = (x, k) => g(x, 238, 0, k || 1, l('M-40 0 V-100 M-40 -100 h20 L40 0', 6, RD) + l('M-46 0 V-100', 4, '#888'));
    const SPIDER = (x, y, k) => g(x, y, 0, k || 1, '<circle r="10" fill="#222"/>' + l('M-8 -4 l-12 -8 M-8 0 l-14 0 M-8 4 l-12 8 M8 -4 l12 -8 M8 0 l14 0 M8 4 l12 8', 2.5));
    const GLASSF = () => f('M0 160 H150 V240 H0 z', 'rgba(143,208,238,.5)') + l('M0 160 H150', 3, WT) + [20, 70, 120].map((x) => TREEC(x, .15)).join('');
    const KEYS = (x, y) => KEYI(x, y, .5);
    const FIREH = (x) => f('M' + (x - 30) + ' 238 v-60 l30 -24 l30 24 v60 z', '#e9e0c8') + FIRE(x, 160, .5);
    const PAINTC = (x, y, c) => f('M' + (x - 14) + ' ' + (y - 30) + ' h28 v30 h-28 z', c) + l('M' + (x - 14) + ' ' + (y - 30) + ' q14 -12 28 0', 2);
    const C = {
      brave: { n: 'brave', past: 'brave', en: 'She is brave.', ko: '그녀는 용감하다.', feel: '<b>위험 · 어려움 앞에서 물러서지 않는다.</b>', t: .4,
        p: [[150, '높은 다이빙대', () => f('M60 40 h80 v6 h-80 z', '#888') + l('M130 46 V238', 4, '#888') + g(90, 40, 0, .3, MAN(MN, 'stern'))], [280, '다가간다', () => W.brave()], [150, '풍덩', () => f('M0 190 H150 V240 H0 z', '#8fd0ee') + t(75, 170, 18, '풍덩!', WT)]] },
      bold: { n: 'bold', past: 'bold', en: 'That\'s a bold idea.', ko: '그거 과감한 생각이다.', feel: '<b>생각 · 계획 · 색이 과감하다.</b> 눈에 띈다.', t: .3,
        p: [[150, '회의 중', () => A(40, BL, 'calm', null, .5) + A(110, OR, 'smile', 'M18 -92 L36 -126', .55)], [280, '생각 · 계획', () => W.bold()], [150, '모두 눈이 동그래짐', () => A(40, BL, 'shock', null, .5) + A(110, MN, 'shock', null, .5)]] },
      courageous: { n: 'courageous', past: 'courageous', en: 'It was courageous of her to speak up.', ko: '그녀가 나서서 말한 건 용기 있는 일이었다.', feel: '<b>위험을 알면서도 한 행동</b>을 높이 본다.', t: .6,
        p: [[150, '모두 침묵', () => [30, 75, 120].map((x) => A(x, '#888', 'down', null, .45)).join('')], [280, '알면서 한 행동', () => W.courageous()], [150, '손을 든다', () => A(40, '#888', 'shock', null, .45) + A(100, MN, 'stern', 'M18 -92 L26 -134', .7)]] },
      fearless: { n: 'fearless', past: 'fearless', en: 'She seemed fearless on stage.', ko: '그녀는 무대 위에서 겁이 없어 보였다.', feel: '<b>두려움이 없어 보인다.</b> 속까지 그런지는 모른다.', t: .4,
        p: [[150, '조명이 켜진다', () => DARK(150, '#1b1d26') + l('M30 0 L75 120 M120 0 L75 120', 6, '#fff6c0')], [280, '보이는 모습', () => W.fearless()], [150, '당당하게 노래', () => DARK(150, '#1b1d26') + A(75, MN, 'smile', 'M18 -92 L22 -126', .8) + t(124, 50, 18, '♪', GD)]] },
      afraid: { n: 'afraid', past: 'afraid', en: 'I\'m afraid of the dark.', ko: '나는 어둠이 무섭다.', feel: '<b>두려워한다.</b> 명사 앞에는 안 쓴다.', t: .6,
        p: [[150, '불 끄는 시간', () => DARK(150, '#1b1d26') + MOON(110, 40, .5)], [280, '물러선다', () => W.afraid()], [150, '스탠드 켜고 잔다', () => DARK(150, '#1b1d26') + f('M100 140 h20 l-6 -20 h-8 z', GD) + f('M10 200 q65 -40 130 0 v38 h-130 z', BL)]] },
      scared: { n: 'scared', past: 'scared', en: 'I\'m scared to open the door.', ko: '문을 열기가 무섭다.', feel: '<b>무서워한다.</b> 가벼운 것부터 큰 것까지 두루.', t: .3,
        p: [[150, '똑똑 — 아무도 없다', () => BOXG(60, 60, 60, 178, '#c9a171') + t(40, 80, 16, '똑똑', '#888')], [280, '물러선다', () => W.scared()], [150, '문틈으로 살짝', () => BOXG(80, 60, 60, 178, '#c9a171') + A(50, BL, 'sad', null, .65)]] },
      terrified: { n: 'terrified', past: 'terrified', en: 'I was terrified on the glass floor.', ko: '유리 바닥 위에서 몹시 무서웠다.', feel: '<b>공포가 매우 크다.</b> 꼭 얼어붙는 건 아니다.', t: .8,
        p: [[150, '전망대 유리 바닥', () => GLASSF()], [280, '공포가 매우 큼', () => W.terrified()], [150, '난간을 꼭', () => GLASSF() + g(75, 160, 0, .5, MAN(MN, 'shock', 'M-20 -90 L-40 -60 M20 -90 L40 -60')) + t(124, 50, 16, '으악', RD)]] },
      panicked: { n: 'panicked', past: 'panicked', en: 'I felt panicked when I lost my phone.', ko: '휴대폰을 잃어버리고 허둥댔다.', feel: '<b>두려워 허둥대는 반응.</b> 동사로는 I panicked.', t: .5,
        p: [[150, '주머니가 비었다', () => A(75, BL, 'shock', 'M-20 -90 L-24 -50 M20 -90 L24 -50', .8)], [280, '허둥대는 반응', () => W.panicked()], [150, '가방을 뒤집는다', () => f('M40 200 h70 v30 h-70 z', OR) + [50, 70, 90, 110].map((x) => f('M' + x + ' ' + (180 - (x % 3) * 10) + ' h10 v10 h-10 z', '#bbb')).join('')]] }
    };
    const MORE = {
      brave: [
        { b: '주사', en: 'The kid was brave at the doctor.', ko: '아이는 병원에서 씩씩했다.', feel: '무서운 주사 앞에서 <b>물러서지 않는다.</b>', p: [[150, '주사 차례', () => NEEDLE(50, 100)], [280, '다가간다', () => W.brave()], [150, '울지 않았다', () => A(75, OR, 'stern', null, .6) + t(120, 60, 16, '★', GD)]] },
        { b: '고백', en: 'It was brave to tell the truth.', ko: '사실대로 말한 건 용감한 일이었다.', feel: '말 앞에서도 <b>물러서지 않는다.</b>', p: [[150, '깨진 꽃병', () => f('M60 220 l10 -30 l10 20 l10 -24 l10 34 z', BL)], [280, '다가간다', () => W.brave(t(196, 140, 18, '"제가 그랬어요"', BL))], [150, '머리를 쓰다듬는다', () => A(50, '#888', 'smile', 'M18 -92 L46 -110', .7) + A(110, OR, 'phew', null, .5)]] }],
      bold: [
        { b: '색', en: 'She painted the wall a bold red.', ko: '그녀는 벽을 과감한 빨강으로 칠했다.', feel: '색이 <b>과감하다</b> — 눈에 확 띈다.', p: [[150, '하얀 벽', () => BOXG(20, 40, 110, 198, '#fff') + PAINTC(110, 230, RD)], [280, '색', () => W.bold(f('M150 100 h92 v70 h-92 z', RD))], [150, '빨간 방', () => BOXG(20, 40, 110, 198, RD) + A(75, MN, 'smile', null, .5)]] },
        { b: '결정', en: 'He made a bold move.', ko: '그는 과감한 결단을 내렸다.', feel: '계획이 <b>과감하다.</b>', p: [[150, '체스판', () => BOXG(30, 80, 90, 90, '#e9e0c8') + l('M30 110 h90 M30 140 h90 M60 80 v90 M90 80 v90', 2)], [280, '계획', () => W.bold(t(196, 146, 34, '♞', BL))], [150, '상대가 놀람', () => A(75, BR, 'shock', null, .8)]] }],
      courageous: [
        { b: '소방관', en: 'The firefighter was courageous.', ko: '그 소방관은 용기 있었다.', feel: '위험을 <b>알면서</b> 들어갔다.', p: [[150, '불난 집', () => FIREH(75)], [280, '알면서 한 행동', () => W.courageous(HELM(196, 150, .8))], [150, '아이를 안고 나온다', () => A(75, OR, 'stern', 'M-20 -90 L0 -60 M20 -90 L0 -60', .8) + g(75, 150, 0, .3, HEAD('phew'))]] },
        { b: '결정', en: 'It was a courageous decision.', ko: '용기 있는 결정이었다.', feel: '어려움을 <b>알면서</b> 고른 길.', p: [[150, '안정된 회사', () => BOXG(30, 60, 90, 178, '#c8ccd2')], [280, '알면서 한 행동', () => W.courageous(t(196, 146, 18, '꿈을 따라', BL))], [150, '작은 가게 시작', () => BOXG(20, 120, 110, 90, '#f2d59a') + A(75, MN, 'smile', null, .4)]] }],
      fearless: [
        { b: '아기', en: 'The toddler is fearless on the slide.', ko: '아기는 미끄럼틀에서 겁이 없다.', feel: '<b>두려움이 없어 보인다.</b>', p: [[150, '놀이터', () => SLIDE(80, 1)], [280, '보이는 모습', () => W.fearless()], [150, '거꾸로 슝', () => SLIDE(80, 1) + g(80, 180, 140, .3, MAN(OR, 'smile'))]] },
        { b: '기자', en: 'She is a fearless reporter.', ko: '그녀는 겁 없는 기자다.', feel: '어디든 <b>거침없이</b> 다가간다.', p: [[150, '폭풍 현장', () => DARK(150, '#5a5a6a') + l('M10 60 h60 q10 0 8 -8 M20 80 h80', 3, '#fff')], [280, '보이는 모습', () => W.fearless(g(196, 146, 0, 1, f('M-6 -20 h12 v30 h-12 z', '#555') + '<circle cy="-24" r="8" fill="#333"/>'))], [150, '"현장입니다"', () => DARK(150, '#5a5a6a') + A(75, MN, 'stern', 'M18 -92 L30 -110', .8)]] }],
      afraid: [
        { b: '개', en: 'He\'s afraid of dogs.', ko: '그는 개를 무서워한다.', feel: '<b>두려워</b> 물러선다.', p: [[150, '골목 끝', () => DOG(80, 220, 1)], [280, '물러선다', () => W.afraid()], [150, '돌아서 간다', () => A(40, BL, 'sad', null, .6) + l('M70 200 h40', 3, '#888')]] },
        { b: '실패', en: 'Don\'t be afraid of failing.', ko: '실패를 두려워하지 마.', feel: '마음이 <b>움츠러들지</b> 않게.', p: [[150, '자전거 첫날', () => BIKE(75, 210, .7)], [280, '두려운 마음', () => W.afraid(t(196, 146, 30, '🚲💥'))], [150, '다시 탄다', () => BIKE(75, 210, .7) + A(75, OR, 'stern', null, .4)]] }],
      scared: [
        { b: '천둥', en: 'The puppy is scared of thunder.', ko: '강아지가 천둥을 무서워한다.', feel: '<b>무서워</b> 숨는다.', p: [[150, '번쩍', () => DARK(150, '#3a3a4a') + t(75, 100, 40, '⚡', GD)], [280, '물러선다', () => W.scared()], [150, '침대 밑으로', () => f('M10 160 h130 v20 h-130 z', '#fff') + g(75, 214, 0, .6, '<ellipse cy="-14" rx="24" ry="12" fill="#c9a171" stroke="#222" stroke-width="3"/>')]] },
        { b: '노래', en: 'I\'m scared to sing in front of people.', ko: '사람들 앞에서 노래하기가 무섭다.', feel: '마음이 <b>움츠러든다.</b>', p: [[150, '노래 자랑', () => DARK(150, '#2b1d26') + l('M75 140 v60', 4) + '<circle cx="75" cy="132" r="10" fill="#555"/>'], [280, '물러선다', () => W.scared()], [150, '마이크를 넘긴다', () => A(40, BL, 'sad', 'M18 -92 L46 -80', .6) + A(110, MN, 'smile', null, .5)]] }],
      terrified: [
        { b: '거미', en: 'She is terrified of spiders.', ko: '그녀는 거미를 몹시 무서워한다.', feel: '<b>공포가</b> 매우 크다.', p: [[150, '천장에서 스르르', () => l('M75 0 V90', 1.5) + SPIDER(75, 100, 1.4)], [280, '공포가 매우 큼', () => W.terrified(SPIDER(196, 140, 1))], [150, '의자 위로 펄쩍', () => f('M50 200 h50 v8 h-50 z', BL) + g(75, 200, 0, .55, MAN(MN, 'shock', 'M-20 -90 L-36 -130 M20 -90 L36 -130'))]] },
        { b: '발표', en: 'I was terrified before the speech.', ko: '발표 전에 몹시 떨렸다.', feel: '무대 앞에서 <b>공포가 크다.</b>', p: [[150, '대기실', () => CLK(110, 50, 22) + A(60, BL, 'shock', null, .7)], [280, '공포가 매우 큼', () => W.terrified(t(196, 146, 30, '😱'))], [150, '심호흡', () => A(75, BL, 'phew', null, .8) + t(124, 60, 16, '후…', '#888')]] }],
      panicked: [
        { b: '열쇠', en: 'He looked panicked when he couldn\'t find his keys.', ko: '그는 열쇠를 못 찾아 허둥댔다.', feel: '<b>허둥대는</b> 반응.', p: [[150, '현관 앞', () => BOXG(70, 60, 60, 178, '#c9a171') + A(40, BR, 'shock', null, .6)], [280, '허둥대는 반응', () => W.panicked(KEYS(196, 140))], [150, '주머니를 다 뒤진다', () => A(75, BR, 'shock', 'M-20 -90 L-28 -50 M20 -90 L28 -50', .8) + t(124, 50, 16, '어디?!', RD)]] },
        { b: '사람들', en: 'The panicked crowd ran for the exits.', ko: '허둥대는 사람들이 출구로 달렸다.', feel: '여럿이 <b>허둥지둥</b>.', p: [[150, '화재 경보', () => t(75, 80, 30, '🚨')], [280, '허둥대는 반응', () => W.panicked()], [150, '출구로 우르르', () => BOXG(110, 60, 30, 178, GN) + [20, 50, 80].map((x) => A(x, BL, 'shock', null, .4, 'M-10 -42 L-24 0 M10 -42 L22 0')).join('')]] }]
    };
    const CORE = { brave: '<b>위험 앞에서 물러서지 않는다.</b>', bold: '<b>생각 · 계획 · 색이 과감하다.</b>', courageous: '<b>위험을 알면서도 한 행동.</b>', fearless: '<b>두려움이 없어 보인다.</b>', afraid: '<b>두려워한다.</b>', scared: '<b>무서워한다 (두루).</b>', terrified: '<b>공포가 매우 크다.</b>', panicked: '<b>두려워 허둥댄다.</b>' };
