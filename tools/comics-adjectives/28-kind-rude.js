    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(harsh 장면 2는 날씨). 가운데 칸은 늘 같은 "두 사람 사이에 건너가는 것"과 "무엇이?" 칸이다 — 건너가는 것이 따뜻한가 날카로운가, 그리고 polite(예의) · generous(아낌없이 줌) · gentle(손길) · harsh(평가) · mean(상처)처럼 무엇이 건너가나만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'courteous', BASIC_B = '노트 장면';
    const FX = { kind: [.4, 900, 1100, .1, .4], polite: [.3, 800, 800, .08, .4], courteous: [.4, 700, 800, .08, .4], generous: [.5, 800, 1400, .12, .4], gentle: [.8, 600, 600, .05, .5], rude: [.2, 300, 600, .25, .4], impolite: [.3, 500, 400, .12, .4], harsh: [.3, 2200, 1600, .2, .4], mean: [.4, 400, 200, .2, .4] };
    const ORDER = MIX(['kind', 'polite', 'courteous', 'generous', 'gentle', 'rude', 'impolite', 'harsh', 'mean']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const WM = { kind: 1, generous: .95, gentle: .8, courteous: .6, polite: .5, impolite: -.4, rude: -.7, harsh: -.8, mean: -.95 };
    const WHAT = { kind: '남을 위하는 마음', polite: '예의를 지킴', courteous: '드러난 존중', generous: '시간 · 돈 · 도움', gentle: '세지 않은 손길', rude: '존중 없음', impolite: '예의를 어김', harsh: '날카로운 말 · 평가', mean: '상처 주는 말' };
    const TC = (v) => v > 0 ? GN : RD;
    const PASS = (id) => { const v = WM[id];
      let s = g(18, 200, 0, .36, MAN(BL, v > 0 ? 'smile' : 'stern')) + g(106, 200, 0, .36, MAN(OR, v > 0 ? 'smile' : v < -.8 ? 'sad' : 'shock'));
      const mid = { kind: t(62, 140, 26, '♥', RD), generous: f('M48 124 h28 v24 h-28 z', GD) + l('M62 124 v24 M48 134 h28', 3, RD), gentle: l('M34 140 q14 -10 28 0 t28 0', 3, GN) + t(62, 124, 12, '살살', GN), courteous: t(62, 140, 22, '🙇'), polite: t(62, 138, 14, '"감사합니다"', GN),
        impolite: t(62, 138, 14, '"근데요—"', RD), rude: t(62, 140, 22, '😤'), harsh: l('M34 140 l8 -10 l8 10 l8 -10 l8 10 l8 -10 l8 10', 3, RD), mean: f('M40 140 l12 -14 l4 12 l10 -16 l2 18 l14 -6 z', RD) }[id];
      s += mid + l('M36 160 h52', 2, TC(v)) + l('M82 155 l6 5 l-6 5', 2, TC(v)) + l('M4 200 H120', 2, '#999');
      return s + t(62, 228, 12, v > 0 ? '따뜻함 ' + Math.round(v * 100) : '날카로움 ' + Math.round(-v * 100), TC(v)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + PASS(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 7 ? 14 : 17, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(WM[id]));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { kind: P('kind', '따스'), polite: P('polite', '꾸벅'), courteous: P('courteous', '정중'), generous: P('generous', '듬뿍'), gentle: P('gentle', '살살'), rude: P('rude', '흥!'), impolite: P('impolite', '어머'), harsh: P('harsh', '쯧쯧'), mean: P('mean', '콕콕') };
    // 작은 그림들
    const TRAY = (x, y) => f('M' + (x - 30) + ' ' + y + ' h60 v6 h-60 z', '#888') + f('M' + (x - 10) + ' ' + (y - 24) + ' h20 l-3 24 h-14 z', '#fff');
    const PUP = (x, y, k) => g(x, y, 0, k || 1, '<ellipse cy="-14" rx="22" ry="12" fill="#c9a171" stroke="#222" stroke-width="3"/><circle cx="20" cy="-28" r="10" fill="#c9a171" stroke="#222" stroke-width="3"/>');
    const PAPERF = (x, y, mark) => f('M' + (x - 26) + ' ' + (y - 34) + ' h52 v68 h-52 z', '#fff') + t(x, y + 6, 22, mark, RD);
    const QUEUE = (n) => Array.from({ length: n }, (_, i) => g(20 + i * 26, 238, 0, .3, MAN([BL, MN, GN, OR][i % 4], 'calm'))).join('');
    const MAP = (x, y) => f('M' + (x - 30) + ' ' + (y - 24) + ' h60 v48 h-60 z', '#e9f0d8') + l('M' + (x - 20) + ' ' + (y + 10) + ' q20 -30 40 -10', 3, RD);
    const SNOWW = () => DARK(150, '#c8ccd2') + [[20, 40], [60, 70], [110, 40], [130, 90], [40, 110]].map(([x, y]) => t(x, y, 18, '*', '#fff')).join('') + l('M10 140 h60 q10 0 8 -8', 3, '#fff');
    const C = {
      kind: { n: 'kind', past: 'kind', en: 'She is kind to everyone.', ko: '그녀는 누구에게나 친절하다.', feel: '<b>남을 위하는 마음과 행동.</b> "종류"라는 다른 뜻의 명사도 있다.', t: .4,
        p: [[150, '무거운 짐', () => PKG(100, 220, 1) + A(110, '#888', 'phew', null, .5)], [280, '마음이 건너간다', () => W.kind()], [150, '같이 들어 준다', () => PKG(75, 160, 1) + A(45, MN, 'smile', 'M20 -90 L40 -70', .55) + A(110, '#888', 'smile', 'M-20 -90 L-40 -70', .5)]] },
      polite: { n: 'polite', past: 'polite', en: 'He is polite.', ko: '그는 예의 바르다.', feel: '<b>예의를 지킨다.</b> 속마음이 친절한지는 다른 이야기.', t: .3,
        p: [[150, '엘리베이터', () => BOXG(30, 40, 90, 198, '#c8ccd2')], [280, '예의가 건너간다', () => W.polite()], [150, '"먼저 타세요"', () => A(45, BL, 'smile', 'M18 -92 L46 -80', .6) + A(110, '#888', 'smile', null, .5)]] },
      courteous: { n: 'courteous', past: 'courteous', en: 'The staff were courteous.', ko: '직원들이 정중했다.', feel: '<b>존중이 태도로 드러난다.</b> 직원 · 응대에 많이.', t: .4,
        p: [[150, '호텔 로비', () => f('M20 160 h110 v20 h-110 z', '#a3743f') + A(75, BR, 'smile', null, .5)], [280, '드러난 존중', () => W.courteous()], [150, '문을 열어 준다', () => BOXG(80, 60, 50, 178, '#c9a171') + A(50, BR, 'smile', 'M18 -92 L40 -70', .6)]] },
      generous: { n: 'generous', past: 'generous', en: 'That\'s very generous of you.', ko: '정말 너그러우시네요.', feel: '<b>시간 · 돈 · 도움을 아낌없이 준다.</b>', t: .5,
        p: [[150, '"제가 낼게요"', () => A(75, MN, 'smile', 'M18 -92 L46 -80', .8) + COIN(120, 100, 10)], [280, '아낌없이 줌', () => W.generous()], [150, '"고마워요!"', () => A(75, OR, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .6)]] },
      gentle: { n: 'gentle', past: 'gentle', en: 'Be gentle with the puppy.', ko: '강아지를 살살 다뤄.', feel: '<b>세게 다루지 않는다.</b> 손길 · 말이 부드럽다.', t: .8,
        p: [[150, '새 강아지', () => PUP(75, 210, 1.4)], [280, '세지 않은 손길', () => W.gentle()], [150, '살살 쓰다듬기', () => PUP(100, 236, 1) + A(45, OR, 'smile', 'M18 -92 L46 -50', .55)]] },
      rude: { n: 'rude', past: 'rude', en: 'He was rude to the waiter.', ko: '그는 종업원에게 무례했다.', feel: '<b>존중 없이 대한다.</b> 편하게 가장 많이 쓰는 말.', t: .2,
        p: [[150, '식당', () => TRAY(110, 120) + A(110, '#fff', 'smile', 'M-18 -92 L-30 -110', .5)], [280, '존중 없음', () => W.rude()], [150, '"빨리 좀 가져와!"', () => A(75, BR, 'stern', 'M18 -92 L40 -126', .8)]] },
      impolite: { n: 'impolite', past: 'impolite', en: 'It was impolite to interrupt her.', ko: '그녀 말을 끊은 건 예의가 아니었다.', feel: '<b>예의를 어겼다.</b> 악의까진 아니다. rude보다 부드럽다.', t: .3,
        p: [[150, '"그래서 제 생각은…"', () => A(75, MN, 'smile', 'M18 -92 L40 -120', .8)], [280, '예의를 어김', () => W.impolite()], [150, '"아, 죄송해요"', () => A(75, BL, 'phew', null, .8)]] },
      harsh: { n: 'harsh', past: 'harsh', en: 'That feedback was harsh.', ko: '그 피드백은 가혹했다.', feel: '맞는 말이어도 <b>전하는 방식이 날카롭다.</b> 날씨에도.', t: .3,
        p: [[150, '첫 작품 발표', () => BOXG(30, 50, 90, 110, '#fff') + SUN(75, 100, 20)], [280, '날카로운 평가', () => W.harsh(PAPERF(196, 140, '0점'))], [150, '어깨가 축', () => A(75, OR, 'down', null, .7)]] },
      mean: { n: 'mean', past: 'mean', en: 'That was a mean comment.', ko: '그건 못된 말이었다.', feel: '<b>상처를 주는 말 · 행동.</b> 그 사람 성격까지 단정하진 않는다.', t: .4,
        p: [[150, '새 머리 모양', () => A(75, MN, 'smile', null, .8)], [280, '상처 주는 말', () => W.mean()], [150, '눈물이 핑', () => A(75, MN, 'sad', 'M18 -92 L8 -118', .8)]] }
    };
    const MORE = {
      kind: [
        { b: '길 안내', en: 'A kind stranger helped me.', ko: '친절한 낯선 사람이 나를 도와주었다.', feel: '모르는 사람에게도 <b>마음이 건너간다.</b>', p: [[150, '길을 잃었다', () => MAP(75, 100) + A(75, BL, 'sad', null, .5)], [280, '마음이 건너간다', () => W.kind()], [150, '"저쪽이에요"', () => A(45, BL, 'smile', null, .55) + A(110, BR, 'smile', 'M18 -92 L46 -100', .55)]] },
        { b: '말', en: 'Thank you for your kind words.', ko: '따뜻한 말씀 고맙습니다.', feel: '말에도 <b>마음이 실린다.</b>', p: [[150, '힘든 하루', () => A(75, MN, 'down', null, .8)], [280, '말이 따뜻', () => W.kind(t(196, 140, 16, '"잘하고 있어"', GN))], [150, '힘이 난다', () => A(75, MN, 'smile', 'M18 -92 L36 -126', .8)]] }],
      polite: [
        { b: '인사', en: 'It\'s polite to say thank you.', ko: '고맙다고 말하는 게 예의다.', feel: '<b>예의를 지킨다.</b>', p: [[150, '선물을 받았다', () => PKG(75, 190, 1.2)], [280, '예의가 건너간다', () => W.polite()], [150, '꾸벅', () => g(75, 240, 20, .8, MAN(OR, 'smile'))]] },
        { b: '거절', en: 'She gave a polite no.', ko: '그녀는 예의 바르게 거절했다.', feel: '거절도 <b>예의를 지켜</b> 한다.', p: [[150, '"같이 갈래요?"', () => A(75, BR, 'smile', null, .8)], [280, '예의를 지킨 말', () => W.polite(t(196, 140, 15, '"고맙지만 괜찮아요"', GN))], [150, '웃으며 손 인사', () => A(75, MN, 'smile', 'M18 -92 L36 -126', .8)]] }],
      courteous: [
        { b: '운전자', en: 'A courteous driver let me go first.', ko: '정중한 운전자가 나를 먼저 보내 주었다.', feel: '태도로 <b>존중이 드러난다.</b>', p: [[150, '횡단보도', () => [10, 40, 70, 100, 130].map((x) => f('M' + x + ' 200 h16 v30 h-16 z', '#fff')).join('') + CAR(60, 190, .5)], [280, '드러난 존중', () => W.courteous()], [150, '고개 숙여 인사', () => A(75, MN, 'smile', null, .8)]] },
        { b: '답장', en: 'He sent a courteous reply.', ko: '그는 정중한 답장을 보냈다.', feel: '글로도 <b>존중이</b> 드러난다.', p: [[150, '불만 메일', () => ENV(75, 120, 1.4)], [280, '드러난 존중', () => W.courteous(t(196, 140, 13, '"불편 드려 죄송해요"', BL))], [150, '마음이 풀린다', () => A(75, OR, 'smile', null, .8)]] }],
      generous: [
        { b: '팁', en: 'She left a generous tip.', ko: '그녀는 팁을 넉넉히 남겼다.', feel: '돈을 <b>아낌없이</b> 준다.', p: [[150, '식사 끝', () => f('M20 180 h110 v8 h-110 z', '#a3743f') + A(75, MN, 'smile', null, .5)], [280, '아낌없이 줌', () => W.generous(COIN(176, 140, 12) + COIN(196, 130, 12) + COIN(216, 140, 12))], [150, '직원이 깜짝', () => A(75, '#fff', 'shock', null, .8)]] },
        { b: '칭찬', en: 'He is generous with praise.', ko: '그는 칭찬을 아끼지 않는다.', feel: '칭찬도 <b>아낌없이</b> 준다.', p: [[150, '작은 그림', () => BOXG(40, 80, 70, 70, '#fff') + SUN(75, 115, 16)], [280, '칭찬을 듬뿍', () => W.generous(t(196, 140, 22, '👏 👏', GD))], [150, '"정말 멋지다!"', () => A(45, BR, 'smile', 'M18 -92 L40 -120', .6) + A(110, OR, 'smile', null, .5)]] }],
      gentle: [
        { b: '아기', en: 'Be gentle with the baby.', ko: '아기를 살살 다뤄.', feel: '손길을 <b>부드럽게.</b>', p: [[150, '아기 안기', () => f('M40 160 q35 -30 70 0 v20 h-70 z', '#f4c6d0') + g(75, 150, 0, .4, HEAD('phew'))], [280, '세지 않은 손길', () => W.gentle()], [150, '살포시', () => A(75, BL, 'smile', 'M-20 -90 L0 -60 M20 -90 L0 -60', .8) + g(75, 180, 0, .3, HEAD('phew'))]] },
        { b: '바람', en: 'There was a gentle breeze.', ko: '부드러운 바람이 불었다.', feel: '바람도 <b>세지 않다.</b>', p: [[150, '들판', () => f('M0 200 H150 V240 H0 z', '#9ac47a') + TREEC(110, .4)], [280, '세지 않은 바람', () => W.gentle(l('M150 130 q14 -8 28 0 t28 0 t28 0', 3, GN))], [150, '머리카락이 살랑', () => A(75, MN, 'phew', null, .8) + l('M100 110 q10 -6 20 0', 2, GN)]] }],
      rude: [
        { b: '새치기', en: 'It\'s rude to cut in line.', ko: '새치기는 무례한 일이다.', feel: '<b>존중 없이</b> 끼어든다.', p: [[150, '버스 정류장 줄', () => QUEUE(5)], [280, '존중 없음', () => W.rude()], [150, '"뒤로 가세요!"', () => QUEUE(4) + A(130, BR, 'stern', null, .3)]] },
        { b: '답장', en: 'He sent a rude reply.', ko: '그는 무례한 답장을 보냈다.', feel: '글에도 <b>존중이 없다.</b>', p: [[150, '정중한 질문', () => ENV(75, 120, 1.4)], [280, '존중 없음', () => W.rude(t(196, 140, 18, '"알아서 해"', RD))], [150, '어이없음', () => A(75, MN, 'shock', null, .8)]] }],
      impolite: [
        { b: '휴대폰', en: 'It\'s impolite to check your phone at dinner.', ko: '저녁 식사 중에 휴대폰을 보는 건 예의가 아니다.', feel: '<b>예의에 어긋난다.</b> 나쁜 마음까진 아니어도.', p: [[150, '가족 저녁', () => f('M10 170 h130 v8 h-130 z', '#a3743f') + A(40, '#888', 'smile', null, .45) + A(110, OR, 'calm', 'M18 -92 L22 -110', .45)], [280, '예의를 어김', () => W.impolite(g(196, 140, 0, 1.2, PH))], [150, '휴대폰을 엎는다', () => f('M50 170 h50 v8 h-50 z', '#222') + A(110, OR, 'phew', null, .5)]] },
        { b: '질문', en: 'Is it impolite to ask her age?', ko: '그녀 나이를 묻는 게 예의 없는 일일까?', feel: '<b>예의에 어긋날까</b> 조심한다.', p: [[150, '처음 만난 사이', () => A(40, BL, 'smile', null, .55) + A(110, MN, 'smile', null, .55)], [280, '예의를 어길까', () => W.impolite(t(196, 140, 18, '"몇 살…?"', OR))], [150, '말을 삼킨다', () => A(75, BL, 'phew', null, .8)]] }],
      harsh: [
        { b: '겨울', en: 'The winter was harsh.', ko: '겨울이 혹독했다.', feel: '날씨도 <b>날카롭게</b> 몰아친다.', p: [[150, '눈보라', () => SNOWW()], [280, '날카로운 날씨', () => W.harsh(t(196, 146, 30, '🌨'))], [150, '꽁꽁 싸맨다', () => A(75, BL, 'sad', 'M-20 -90 L12 -70 M20 -90 L-12 -68', .8) + g(75, 240, 0, .8, f('M-24 -112 h48 v12 h-48 z', RD))]] },
        { b: '말', en: 'His words were harsh.', ko: '그의 말은 가혹했다.', feel: '말이 <b>날카롭게</b> 찌른다.', p: [[150, '실수했다', () => f('M60 220 l10 -20 l10 12 l10 -16 l10 24 z', BL) + A(110, OR, 'shock', null, .5)], [280, '날카로운 말', () => W.harsh()], [150, '움츠러든다', () => A(75, OR, 'down', 'M-20 -90 L12 -70 M20 -90 L-12 -68', .6)]] }],
      mean: [
        { b: '동생', en: 'Don\'t be mean to your sister.', ko: '동생한테 못되게 굴지 마.', feel: '<b>상처를</b> 주지 마.', p: [[150, '장난감 뺏기', () => A(40, BL, 'stern', 'M18 -92 L40 -100', .55) + A(110, MN, 'sad', null, .45)], [280, '상처 주는 행동', () => W.mean()], [150, '"돌려줘"', () => A(75, '#888', 'stern', 'M18 -92 L40 -120', .8)]] },
        { b: '장난', en: 'That was a mean trick.', ko: '그건 못된 장난이었다.', feel: '장난에 <b>가시가</b> 있다.', p: [[150, '의자를 뺐다', () => f('M90 200 h40 v8 h-40 z', BL) + l('M96 208 v30 M124 208 v30', 4, BL)], [280, '상처 주는 장난', () => W.mean()], [150, '엉덩방아', () => g(60, 238, 0, .6, MAN(OR, 'shock', null, 'M-12 -42 L-30 -6 M12 -42 L30 -6')) + t(110, 60, 16, '쿵', RD)]] }]
    };
    const CORE = { kind: '<b>남을 위하는 마음과 행동.</b>', polite: '<b>예의를 지킨다.</b>', courteous: '<b>존중이 태도로 드러난다.</b>', generous: '<b>아낌없이 준다.</b>', gentle: '<b>세게 다루지 않는다.</b>', rude: '<b>존중 없이 대한다.</b>', impolite: '<b>예의를 어겼다.</b>', harsh: '<b>날카롭고 가혹하다.</b>', mean: '<b>상처를 주는 말 · 행동.</b>' };
