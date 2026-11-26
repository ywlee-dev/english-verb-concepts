    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "팔목과 소매 사이 틈"과 "무엇이?" 칸이다 — 틈이 얼마나 남나(조이나), 그리고 snug · taut · baggy · slack처럼 무엇을 보고 하는 말인가만 바뀐다. taut · slack은 줄이 초점이라 칸 안에 줄을 그렸다.
    const WORD = '형용사', BASE = '', FIRST = 'snug', BASIC_B = '노트 장면';
    const FX = { tight: [.3, 400, 300, .2, .4], snug: [.5, 600, 600, .08, .5], taut: [.15, 1600, 1600, .3, .4], constricting: [.6, 300, 200, .2, .4], loose: [.4, 500, 400, .1, .5], baggy: [.6, 300, 260, .1, .5], slack: [.6, 400, 200, .1, .5] };
    const ORDER = MIX(['tight', 'snug', 'taut', 'constricting', 'loose', 'baggy', 'slack']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5';
    const GAP = { constricting: -7, tight: -2, taut: -2, snug: 0, loose: 10, slack: 14, baggy: 20 };
    const WHAT = { snug: '딱 맞고 편함', taut: '줄 · 천', constricting: '답답한 압박', baggy: '옷 (천이 남음)', slack: '줄' };
    const TC = (gp) => gp < -3 ? RD : gp <= 0 ? BL : OR;
    const CUFF = (gp) => { const c = TC(gp), w = 36 + gp * 2;
      return f('M46 30 h32 v170 h-32 z', SK) + f('M' + (62 - w / 2) + ' 96 h' + w + ' v' + (gp > 12 ? 80 : 34) + ' h-' + w + ' z', c === RD ? 'rgba(216,65,47,.45)' : 'rgba(74,127,181,.35)') +
        (gp < -3 ? l('M34 100 l8 6 M90 100 l-8 6 M34 126 l8 -6 M90 126 l-8 -6', 3, RD) : '') +
        t(62, 222, 13, gp < 0 ? '틈 없음 (조임)' : gp === 0 ? '틈 딱 0' : '틈 ' + gp, c); };
    const TP = (id, b, z) => { const c = TC(GAP[id]);
      return DARK(280, '#f6f4ee') + CUFF(GAP[id]) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 15 : 18, WHAT[id], BL) : t(196, 128, 15, '옷 · 뚜껑 ·', '#888') + t(196, 150, 15, '시간 두루', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const ROPE = (sag, c) => l('M136 120 v60 M256 120 v60', 5, '#7a5a3a') + l('M136 124 q60 ' + sag + ' 120 0', 3, c || BR);
    const W = { tight: P('tight', '꽉'), snug: P('snug', '쏙'), taut: (b, zz) => TP('taut', b || ROPE(0, RD) + t(196, 108, 13, '처짐 0', RD), zz || '팽팽'), constricting: P('constricting', '숨 막혀'), loose: P('loose', '헐렁'), baggy: P('baggy', '펄렁펄렁'), slack: (b, zz) => TP('slack', b || ROPE(60) + t(196, 108, 13, '축 처짐', OR), zz || '축') };
    // 작은 그림들
    const JEANS = (x, y, k, wide) => g(x, y, 0, k || 1, f('M-' + (24 + wide) + ' -80 h' + (48 + wide * 2) + ' l' + wide + ' 80 h-' + (20 + wide) + ' l-4 -50 l-4 50 h-' + (20 + wide) + ' z', '#3a5a8a'));
    const GLOVE = (x, y, k) => g(x, y, 0, k || 1, f('M-16 0 v-30 l-6 -14 l6 -2 l4 10 v-24 h6 v20 v-26 h6 v26 v-22 h6 v24 v-16 h6 v34 l-4 20 z', RD));
    const LINE = (sag, w) => l('M10 60 v178 M' + (w - 10) + ' 60 v178', 5, '#7a5a3a') + l('M10 64 q' + (w / 2 - 10) + ' ' + sag + ' ' + (w - 20) + ' 0', 3, BR);
    const TIE = (x, y, k) => g(x, y, 0, k || 1, f('M-6 0 h12 l6 50 l-12 14 l-12 -14 z', RD) + f('M-8 -10 h16 v12 h-16 z', RD));
    const JAR = (x, y, k) => g(x, y, 0, k || 1, f('M-26 -60 h52 v60 h-52 z', '#cfe6f5') + f('M-30 -74 h60 v14 h-60 z', RD) + f('M-20 -40 h40 v30 h-40 z', OR));
    const SCREW = (x, y, r) => g(x, y, r || 0, 1, f('M-12 -6 h24 v12 h-24 z', '#888') + f('M-4 6 h8 v34 l-4 6 l-4 -6 z', '#aaa'));
    const DOG = (x, y, k) => g(x, y, 0, k || 1, '<ellipse cy="-20" rx="30" ry="16" fill="#c9a171" stroke="#222" stroke-width="3"/><circle cx="28" cy="-36" r="14" fill="#c9a171" stroke="#222" stroke-width="3"/>' + l('M-18 -6 v12 M14 -6 v12', 5));
    const DRUM = (x, y, k) => g(x, y, 0, k || 1, f('M-34 -40 h68 v40 h-68 z', RD) + '<ellipse cy="-40" rx="34" ry="8" fill="#fff" stroke="#222" stroke-width="3"/>');
    const BAND = (x, y, sag) => l('M' + (x - 40) + ' ' + y + ' q40 ' + sag + ' 80 0', 5, '#f2b632');
    const BLANKET = (x, y) => f('M' + (x - 50) + ' ' + y + ' q50 -40 100 0 v30 h-100 z', '#f4c6d0');
    const C = {
      tight: { n: 'tight', past: 'tight', en: 'These jeans are tight.', ko: '이 청바지는 꽉 낀다.', feel: '<b>틈이 없다.</b> 시간 · 돈이 빠듯할 때도 쓴다.', t: .3,
        p: [[150, '작년 청바지', () => JEANS(75, 220, 1.2, 0)], [280, '틈이 없다', () => W.tight()], [150, '단추가 안 잠긴다', () => A(75, BL, 'phew', 'M-20 -90 L-6 -50 M20 -90 L6 -50', .8) + t(124, 60, 18, '끄응', OR)]] },
      snug: { n: 'snug', past: 'snug', en: 'These gloves are snug.', ko: '이 장갑은 딱 맞고 편하다.', feel: '<b>꼭 맞는데 편하다.</b> 아늑한 방에도 쓴다.', t: .5,
        p: [[150, '새 장갑', () => GLOVE(50, 180, 1.2) + GLOVE(100, 180, 1.2)], [280, '딱 맞고 편함', () => W.snug()], [150, '손이 쏙', () => A(75, MN, 'smile', 'M18 -92 L36 -126', .8) + t(124, 60, 18, '쏙', GN)]] },
      taut: { n: 'taut', past: 'taut', en: 'The rope is taut now.', ko: '이제 밧줄이 팽팽하다.', feel: '<b>당겨져 처지지 않는다.</b> 옷을 칭찬하는 말이 아니다.', t: .15,
        p: [[150, '텐트 치기', () => f('M20 230 l55 -100 l55 100 z', OR) + l('M75 130 L140 230', 2, BR)], [280, '줄 · 천', () => W.taut()], [150, '끝까지 당긴다', () => A(60, BL, 'stern', 'M18 -92 L60 -80', .8) + l('M108 132 H150', 3, BR)]] },
      constricting: { n: 'constricting', past: 'constricting', en: 'This collar feels constricting.', ko: '이 옷깃은 조여서 답답하다.', feel: '<b>조여서 움직이기 불편하다.</b> 규칙이 옥죌 때도 쓴다.', t: .6,
        p: [[150, '단추를 끝까지', () => A(75, BL, 'stern', 'M18 -92 L4 -112', .8)], [280, '답답한 압박', () => W.constricting()], [150, '"숨 막혀"', () => A(75, BL, 'sad', 'M18 -92 L6 -114 M-18 -92 L-6 -114', .8) + t(124, 60, 16, '컥', RD)]] },
      loose: { n: 'loose', past: 'loose', en: 'These jeans are loose.', ko: '이 청바지는 헐렁하다.', feel: '<b>틈이 남는다.</b> lose(잃다)와 다른 말이다.', t: .4,
        p: [[150, '살이 빠졌다', () => JEANS(75, 220, 1.2, 8)], [280, '틈이 남는다', () => W.loose()], [150, '허리띠를 찬다', () => A(75, MN, 'smile', 'M-20 -90 L-6 -50 M20 -90 L6 -50', .8) + l('M50 140 h50', 6, BR)]] },
      baggy: { n: 'baggy', past: 'baggy', en: 'These jeans are baggy on me.', ko: '이 청바지는 나한테 자루처럼 헐렁하다.', feel: '<b>옷에 천이 잔뜩 남는다.</b> 원래 그런 디자인일 수도 있다.', t: .6,
        p: [[150, '형 바지를 입었다', () => JEANS(75, 238, 1.3, 20)], [280, '옷 (천이 남음)', () => W.baggy()], [150, '질질 끌린다', () => A(75, OR, 'sad', null, .6) + f('M40 220 h70 v18 h-70 z', '#3a5a8a')]] },
      slack: { n: 'slack', past: 'slack', en: 'The clothesline is slack.', ko: '빨랫줄이 축 처졌다.', feel: '<b>줄이 팽팽하지 않고 처졌다.</b>', t: .6,
        p: [[150, '마당 빨랫줄', () => LINE(80, 150)], [280, '줄', () => W.slack()], [150, '빨래가 땅에 닿는다', () => LINE(120, 150) + f('M62 160 h26 v40 h-26 z', '#f4c6d0')]] }
    };
    const MORE = {
      tight: [
        { b: '뚜껑', en: 'The lid is too tight.', ko: '뚜껑이 너무 꽉 닫혔다.', feel: '틈이 없어 <b>안 돌아간다.</b>', p: [[150, '잼 병', () => JAR(75, 210, 1.4)], [280, '틈이 없다', () => W.tight(JAR(196, 176, .9))], [150, '끄응…', () => A(75, MN, 'phew', 'M-20 -90 L0 -60 M20 -90 L0 -60', .8) + t(124, 60, 18, '끄응', OR)]] },
        { b: '일정', en: 'My schedule is tight this week.', ko: '이번 주는 일정이 빠듯하다.', feel: '시간에도 <b>틈이 없다.</b>', p: [[150, '달력', () => BOXG(20, 40, 110, 110, '#fff') + [0, 1, 2, 3, 4].map((i) => BOXG(28 + i * 20, 70, 16, 70, OR)).join('')], [280, '시간의 틈', () => W.tight(CLK(196, 136, 30, RD))], [150, '뛰어다닌다', () => A(75, BL, 'phew', null, .8, 'M-10 -42 L-24 0 M10 -42 L22 0') + t(124, 60, 18, '바빠', RD)]] }],
      snug: [
        { b: '방', en: 'The little room is snug and warm.', ko: '작은 방이 아늑하고 따뜻하다.', feel: '공간도 <b>꼭 맞아 편하다.</b>', p: [[150, '눈 오는 밤', () => DARK(150, '#2b3550') + t(30, 50, 20, '*', '#fff') + t(110, 80, 20, '*', '#fff') + BOXG(30, 120, 90, 110, '#f2d59a')], [280, '딱 맞고 편함', () => W.snug(FIRE(196, 156, .6))], [150, '담요 속', () => BLANKET(75, 210) + g(75, 186, 0, .5, HEAD('smile'))]] },
        { b: '포근', en: 'I feel snug and safe at home.', ko: '집에 있으면 포근하고 안심이 된다.', feel: '마음도 <b>꼭 맞게 감싸인다.</b>', p: [[150, '긴 하루 끝', () => DOOR() + A(110, MN, 'down', null, .6)], [280, '마음이 꼭 맞음', () => W.snug(t(196, 146, 36, '🏠'))], [150, '소파에 쏙', () => f('M20 180 h110 v50 h-110 z', '#a84b40') + g(75, 176, 0, .5, HEAD('smile'))]] }],
      taut: [
        { b: '북', en: 'The drum skin is taut.', ko: '북 가죽이 팽팽하다.', feel: '가죽이 <b>당겨져 처짐이 없다.</b>', p: [[150, '음악실', () => DRUM(75, 220, 1.3)], [280, '천 · 가죽', () => W.taut(DRUM(196, 176, .9))], [150, '둥!', () => DRUM(75, 230, 1) + A(30, BL, 'smile', 'M18 -92 L46 -60', .6) + t(110, 60, 22, '둥!', RD)]] },
        { b: '긴장', en: 'Her face was taut with worry.', ko: '걱정으로 그녀의 얼굴이 굳어 있었다.', feel: '얼굴도 <b>팽팽하게 당겨졌다.</b>', p: [[150, '결과 발표 직전', () => BOXG(20, 40, 110, 60, '#fff') + t(75, 78, 18, '???', '#888')], [280, '얼굴의 줄', () => W.taut(g(196, 146, 0, .7, HEAD('stern')))], [150, '입술을 꾹', () => A(75, MN, 'stern', null, .8)]] }],
      constricting: [
        { b: '넥타이', en: 'My tie feels constricting.', ko: '넥타이가 조여서 답답하다.', feel: '목을 <b>조여 답답하다.</b>', p: [[150, '첫 면접', () => TIE(75, 100, 1.4)], [280, '답답한 압박', () => W.constricting(TIE(196, 104, 1))], [150, '살짝 푼다', () => A(75, BL, 'phew', 'M18 -92 L6 -112', .8)]] },
        { b: '규칙', en: 'The rules feel constricting.', ko: '규칙들이 옥죄는 느낌이다.', feel: '규칙도 <b>조여서 답답하다.</b>', p: [[150, '규칙표 20개', () => DOC(50, 110, 1.2) + DOC(100, 130, 1.2)], [280, '마음의 압박', () => W.constricting(l('M160 100 v80 M180 100 v80 M200 100 v80 M220 100 v80', 4, '#555'))], [150, '한숨', () => A(75, OR, 'down', null, .7) + t(124, 60, 18, '휴…', '#888')]] }],
      loose: [
        { b: '나사', en: 'This screw is loose.', ko: '이 나사가 헐겁다.', feel: '틈이 생겨 <b>흔들린다.</b>', p: [[150, '흔들리는 의자', () => f('M40 120 h70 v10 h-70 z M46 130 v80 M104 130 v80', '#a3743f') + t(75, 90, 16, '삐걱', '#888')], [280, '틈이 남는다', () => W.loose(SCREW(196, 120, 20))], [150, '드라이버로 꽉', () => A(75, BL, 'stern', 'M18 -92 L46 -60', .8)]] },
        { b: '계획', en: 'We have a loose plan for the weekend.', ko: '주말 계획은 대충만 있다.', feel: '계획에도 <b>틈이 넉넉하다.</b>', p: [[150, '금요일 저녁', () => A(40, MN, 'smile', null, .55) + A(110, BL, 'smile', null, .55)], [280, '계획의 틈', () => W.loose(DOC(196, 136, 1.1) + t(226, 120, 18, '?', '#888'))], [150, '"가 보고 정하자"', () => TREEC(110, .4) + A(50, MN, 'smile', null, .6)]] }],
      baggy: [
        { b: '힙합 바지', en: 'He likes baggy pants.', ko: '그는 헐렁한 바지를 좋아한다.', feel: '일부러 <b>천을 넉넉히</b> 남긴다.', p: [[150, '옷 가게', () => JEANS(50, 220, .9, 20) + JEANS(110, 220, .9, 0)], [280, '옷 (천이 남음)', () => W.baggy()], [150, '"이게 좋아"', () => A(75, BR, 'smile', null, .8) + f('M40 196 h70 v42 h-70 z', '#3a5a8a')]] },
        { b: '눈 밑', en: 'I have baggy eyes today.', ko: '오늘은 눈 밑이 축 처졌다.', feel: '피곤하면 눈 밑에 <b>살이 남아</b> 처진다.', p: [[150, '밤샘 다음 날', () => DARK(150, '#f6f4ee') + CLK(75, 80, 30) + t(75, 140, 14, '새벽 4시', RD)], [280, '눈 밑', () => W.baggy(g(196, 146, 0, .8, HEAD('down')) + l('M178 150 q8 8 14 0 M200 150 q8 8 14 0', 2, '#888'))], [150, '거울 앞 한숨', () => BOXG(80, 40, 60, 100, '#cfe6f5') + A(40, MN, 'down', null, .6)]] }],
      slack: [
        { b: '고무줄', en: 'The rubber band went slack.', ko: '고무줄이 늘어져 축 처졌다.', feel: '당기던 힘이 빠져 <b>처졌다.</b>', p: [[150, '오래된 고무줄', () => BAND(75, 120, 0)], [280, '줄', () => W.slack(BAND(196, 130, 40))], [150, '머리가 풀린다', () => A(75, MN, 'sad', null, .8) + BAND(110, 100, 30)]] },
        { b: '장사', en: 'Business is slack in winter.', ko: '겨울엔 장사가 한산하다.', feel: '일의 줄도 <b>느슨하게 처진다.</b>', p: [[150, '겨울 해변 가게', () => t(30, 50, 20, '*', WT) + t(120, 70, 20, '*', WT) + BOXG(30, 120, 90, 110, '#f2d59a') + t(75, 170, 14, '빙수', BL)], [280, '일의 줄', () => W.slack()], [150, '하품', () => A(75, BR, 'down', null, .8) + ZZ(100, 90)]] }]
    };
    const DOOR = () => BOXG(20, 100, 50, 138, '#c9a171') + '<circle cx="60" cy="170" r="4"/>';
    const CORE = { tight: '<b>틈이 없다.</b>', snug: '<b>꼭 맞고 편하다.</b>', taut: '<b>당겨져 처짐이 없다.</b>', constricting: '<b>조여서 답답하다.</b>', loose: '<b>틈이 남는다.</b>', baggy: '<b>옷에 천이 남는다.</b>', slack: '<b>줄이 축 처졌다.</b>' };
