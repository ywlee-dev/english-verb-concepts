    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "힘 재기 기둥"(망치로 치면 추가 올라가는 놀이 기구)과 "무엇이?" 칸이다 — 추가 얼마나 올라가나, 그리고 robust · muscular · fragile · frail처럼 무엇을 보고 하는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'frail', BASIC_B = '노트 장면';
    const FX = { strong: [.3, 300, 500, .25, .4], powerful: [.6, 120, 300, .35, .4], robust: [.4, 200, 200, .25, .4], muscular: [.3, 260, 400, .2, .4], weak: [.4, 500, 300, .08, .5], feeble: [.6, 400, 300, .05, .5], fragile: [.1, 2400, 2000, .12, .4], frail: [.8, 500, 400, .05, .5] };
    const ORDER = MIX(['strong', 'powerful', 'robust', 'muscular', 'weak', 'feeble', 'fragile', 'frail']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const PW = { powerful: .97, robust: .86, strong: .8, muscular: .76, weak: .3, frail: .2, feeble: .14, fragile: .08 };
    const WHAT = { powerful: '내는 힘 · 영향력', robust: '버티는 힘', muscular: '보이는 근육', feeble: '목소리 · 시도', fragile: '깨지기 쉬움', frail: '사람의 몸' };
    const TC = (v) => v > .5 ? RD : WT;
    const POLE = (v) => { const y = 190 - 140 * v, c = TC(v);
      return f('M54 40 h16 v156 h-16 z', '#fff') + [60, 95, 130, 165].map((yy) => l('M70 ' + yy + ' h8', 2, '#999')).join('') + f('M54 ' + y + ' h16 V196 h-16 z', c, 0) +
        f('M48 ' + (y - 10) + ' h28 v12 h-28 z', '#555') + '<circle cx="62" cy="30" r="12" fill="' + GD + '" stroke="#222" stroke-width="3"/>' + (v > .9 ? t(98, 30, 16, '땡!', RD) : '') +
        f('M30 196 h64 v14 h-64 z', '#a3743f') + t(62, 230, 13, '힘 ' + Math.round(v * 100), c); };
    const TP = (id, b, z) => { const c = TC(PW[id]);
      return DARK(280, '#f6f4ee') + POLE(PW[id]) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 15 : 18, WHAT[id], BL) : t(196, 128, 15, '사람 · 커피 ·', '#888') + t(196, 150, 15, '의견 두루', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { strong: P('strong', '불끈'), powerful: P('powerful', '부릉부릉'), robust: P('robust', '끄떡없음'), muscular: P('muscular', '울끈불끈'), weak: P('weak', '흐물'), feeble: P('feeble', '가물가물'), fragile: P('fragile', '쨍그랑'), frail: P('frail', '휘청') };
    // 작은 그림들
    const FLEX = 'M-20 -90 L-44 -86 L-40 -116 M20 -90 L44 -86 L40 -116';
    const BOXL = (x, y, w, h, c) => BOXG(x - w / 2, y - h, w, h, c || '#c9a171') + l('M' + (x - w / 2) + ' ' + (y - h / 2) + ' h' + w, 2, '#8a6a3a');
    const TRUCK = (x, y, k) => g(x, y, 0, k || 1, f('M-70 0 v-40 h80 v40 z', OR) + f('M10 0 v-30 h28 l16 14 v16 z', RD) + '<circle cx="-46" cy="4" r="11" fill="#333"/><circle cx="30" cy="4" r="11" fill="#333"/>');
    const BRIDGE = (x, y, k) => g(x, y, 0, k || 1, f('M-70 -20 h140 v10 h-140 z', '#888') + l('M-60 -10 v40 M60 -10 v40 M-60 -20 L0 -60 L60 -20 M-30 -20 L0 -60 L30 -20', 4, '#555'));
    const MUG = (x, y, c) => f('M' + (x - 16) + ' ' + (y - 30) + ' h32 l-3 30 h-26 z', '#fff') + f('M' + (x - 13) + ' ' + (y - 26) + ' h26 v6 h-26 z', c || '#3a2a1a', 0) + l('M' + (x + 16) + ' ' + (y - 22) + ' q12 2 0 14', 3);
    const ORN = (x, y, k) => g(x, y, 0, k || 1, l('M0 -40 v14', 2) + '<circle cy="-10" r="16" fill="#cfe6f5" stroke="#222" stroke-width="3"/>' + l('M-8 -16 q4 -4 8 0', 2, '#fff'));
    const EGG = (x, y, k) => g(x, y, 0, k || 1, '<ellipse cy="-16" rx="12" ry="16" fill="#fff6e8" stroke="#222" stroke-width="3"/>');
    const CANE = (x) => l('M' + x + ' 160 v78 M' + x + ' 160 q8 -8 14 0', 4, BR);
    const FLASH = (x, y, k) => g(x, y, 0, k || 1, f('M-30 -8 h40 v16 h-40 z', '#555') + f('M10 -12 h10 v24 h-10 z', '#888'));
    const C = {
      strong: { n: 'strong', past: 'strong', en: 'Mina is strong.', ko: '미나는 힘이 세다.', feel: '<b>힘이 세거나 잘 버틴다.</b> 커피 · 냄새 · 의견에도 쓴다.', t: .3,
        p: [[150, '무거운 상자', () => BOXL(75, 238, 60, 50)], [280, '추가 높이', () => W.strong()], [150, '번쩍', () => A(75, MN, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .8) + BOXL(75, 104, 50, 30)]] },
      powerful: { n: 'powerful', past: 'powerful', en: 'This truck has a powerful engine.', ko: '이 트럭은 엔진 힘이 세다.', feel: '<b>내는 힘이 크다.</b> 연설 · 사람의 영향력에도.', t: .6,
        p: [[150, '언덕 앞', () => l('M0 238 L150 120', 4, '#888') + TRUCK(50, 226, .6)], [280, '내는 힘', () => W.powerful()], [150, '부릉, 단숨에', () => l('M0 238 L150 120', 4, '#888') + g(110, 150, -38, .6, TRUCK(0, 0, 1)) + t(40, 80, 16, '부릉', OR)]] },
      robust: { n: 'robust', past: 'robust', en: 'The bridge has a robust design.', ko: '그 다리는 튼튼하게 설계됐다.', feel: '<b>나쁜 조건에서도 잘 버틴다.</b> 설계 · 시스템에도.', t: .4,
        p: [[150, '태풍이 온다', () => DARK(150, '#9aa4b0') + l('M20 60 h60 q10 0 8 -8 M30 80 h70', 3, '#fff')], [280, '버티는 힘', () => W.robust(BRIDGE(196, 150, .7))], [150, '끄떡없다', () => BRIDGE(75, 170, 1) + TRUCK(75, 148, .3)]] },
      muscular: { n: 'muscular', past: 'muscular', en: 'He has muscular arms.', ko: '그는 팔에 근육이 울퉁불퉁하다.', feel: '<b>근육이 눈에 보인다.</b> 모습을 말한다.', t: .3,
        p: [[150, '헬스장', () => l('M30 120 h90', 6, '#555') + f('M22 106 h12 v28 h-12 z M116 106 h12 v28 h-12 z', '#222')], [280, '보이는 근육', () => W.muscular(g(196, 180, 0, .5, MAN(BL, 'smile', FLEX)))], [150, '불끈', () => A(75, BL, 'smile', FLEX, .8)]] },
      weak: { n: 'weak', past: 'weak', en: 'Tom is weak.', ko: '톰은 힘이 약하다.', feel: '<b>힘이 없거나 잘 못 버틴다.</b> 커피 · 신호에도 쓴다.', t: .4,
        p: [[150, '같은 상자', () => BOXL(75, 238, 60, 50)], [280, '추가 조금', () => W.weak()], [150, '끄응… 안 들린다', () => BOXL(75, 238, 60, 50) + A(75, OR, 'phew', 'M-20 -90 L-30 -50 M20 -90 L30 -50', .7)]] },
      feeble: { n: 'feeble', past: 'feeble', en: 'I heard a feeble voice.', ko: '힘없는 목소리가 들렸다.', feel: '<b>낼 힘이 거의 없다.</b> 목소리 · 시도에.', t: .6,
        p: [[150, '창고 안에서', () => BOXG(30, 60, 90, 178, '#a3743f') + t(75, 140, 12, '…살려 줘…', '#888')], [280, '목소리 · 시도', () => W.feeble(t(196, 140, 16, '…도와…', '#aaa'))], [150, '문을 연다', () => A(50, BL, 'shock', 'M18 -92 L46 -80', .7) + A(115, '#888', 'down', null, .5)]] },
      fragile: { n: 'fragile', past: 'fragile', en: 'Be careful. This ornament is fragile.', ko: '조심해. 이 장식은 깨지기 쉬워.', feel: '<b>쉽게 손상된다.</b> 물건 · 관계에 쓴다.', t: .1,
        p: [[150, '트리 장식', () => TREEC(75, .8) + ORN(50, 130, .8) + ORN(100, 150, .8)], [280, '깨지기 쉬움', () => W.fragile(ORN(196, 160, 1.4))], [150, '살살', () => A(75, MN, 'stern', 'M-20 -90 L0 -70 M20 -90 L0 -70', .8) + ORN(75, 166, .6)]] },
      frail: { n: 'frail', past: 'frail', en: 'He looked frail after his illness.', ko: '그는 병을 앓고 나서 몸이 연약해 보였다.', feel: '<b>사람의 몸이 여리다.</b> 병 · 나이 뒤에.', t: .8,
        p: [[150, '병원 침대', () => f('M10 180 h130 v14 h-130 z', '#fff') + g(40, 176, 0, .45, HEAD('down'))], [280, '사람의 몸', () => W.frail()], [150, '지팡이 짚고', () => A(70, '#888', 'down', 'M18 -92 L36 -70', .8) + CANE(104)]] }
    };
    const MORE = {
      strong: [
        { b: '커피', en: 'This coffee is strong.', ko: '이 커피는 진하다.', feel: '맛도 <b>힘이 세다.</b>', p: [[150, '아침 커피', () => MUG(75, 200, '#1b1008')], [280, '맛의 힘', () => W.strong(MUG(196, 160, '#1b1008'))], [150, '눈이 번쩍', () => A(75, MN, 'shock', null, .8) + t(124, 60, 18, '!', RD)]] },
        { b: '의견', en: 'She has strong opinions.', ko: '그녀는 의견이 분명하고 세다.', feel: '생각도 <b>힘 있게</b> 버틴다.', p: [[150, '회의 시간', () => A(40, MN, 'stern', 'M18 -92 L40 -120', .6) + A(110, BL, 'calm', null, .55)], [280, '생각의 힘', () => W.strong(t(196, 144, 22, '"아니요!"', RD))], [150, '물러서지 않는다', () => A(75, MN, 'stern', 'M-20 -90 L12 -70 M20 -90 L-12 -68', .8)]] }],
      powerful: [
        { b: '청소기', en: 'This vacuum is powerful.', ko: '이 청소기는 힘이 세다.', feel: '<b>내는 힘</b>이 크다.', p: [[150, '모래투성이 바닥', () => f('M0 210 H150 V240 H0 z', '#f2d59a')], [280, '내는 힘', () => W.powerful(l('M160 160 h50', 8, '#555') + f('M206 150 h20 v24 h-20 z', RD))], [150, '슈우욱', () => A(60, MN, 'smile', 'M18 -92 L50 -40', .8) + t(110, 80, 16, '슈욱', OR)]] },
        { b: '연설', en: 'He gave a powerful speech.', ko: '그는 힘 있는 연설을 했다.', feel: '말이 <b>사람을 움직인다.</b>', p: [[150, '연단', () => BOXG(50, 160, 50, 78, '#a3743f') + A(75, BR, 'stern', 'M18 -92 L40 -126', .6)], [280, '말의 힘', () => W.powerful(t(196, 146, 34, '📢'))], [150, '모두 일어선다', () => [30, 75, 120].map((x) => A(x, BL, 'shock', 'M-20 -90 L-30 -130 M20 -90 L30 -130', .45)).join('')]] }],
      robust: [
        { b: '노트북', en: 'This laptop is robust. I dropped it twice.', ko: '이 노트북은 튼튼하다. 두 번이나 떨어뜨렸다.', feel: '험하게 다뤄도 <b>버틴다.</b>', p: [[150, '앗, 떨어졌다', () => g(75, 150, 20, 1, f('M-30 -20 h60 v36 h-60 z', '#888')) + t(75, 70, 18, '쿵', RD)], [280, '버티는 힘', () => W.robust()], [150, '켜 보니 멀쩡', () => f('M40 120 h70 v44 h-70 z', '#cfe6f5') + f('M30 164 h90 v8 h-90 z', '#555') + t(75, 100, 16, '휴', GN)]] },
        { b: '경제', en: 'The economy stayed robust.', ko: '경제가 탄탄하게 버텼다.', feel: '나라 살림도 <b>흔들려도 버틴다.</b>', p: [[150, '나쁜 뉴스', () => BOXG(20, 40, 110, 70, '#cfe6f5') + t(75, 84, 16, 'NEWS', BL)], [280, '버티는 힘', () => W.robust(l('M150 170 l20 -20 l14 10 l20 -30 l20 6', 4, GN))], [150, '가게마다 손님', () => BOXG(20, 120, 50, 60, '#f2d59a') + BOXG(80, 120, 50, 60, '#f2d59a') + A(45, MN, 'smile', null, .3) + A(105, BL, 'smile', null, .3)]] }],
      muscular: [
        { b: '수영 선수', en: 'The swimmer is muscular.', ko: '그 수영 선수는 근육질이다.', feel: '근육이 <b>눈에 보인다.</b>', p: [[150, '수영장', () => f('M0 160 H150 V240 H0 z', '#8fd0ee')], [280, '보이는 근육', () => W.muscular(g(196, 180, 0, .5, MAN(BL, 'smile', FLEX)))], [150, '어깨가 넓다', () => A(75, BL, 'smile', FLEX, .8)]] },
        { b: '차 모양', en: 'The new car has a muscular look.', ko: '새 차는 근육질처럼 다부져 보인다.', feel: '물건도 <b>근육이 붙은 듯</b> 보인다.', p: [[150, '자동차 전시', () => g(75, 200, 0, .8, f('M-70 0 v-24 q10 -22 40 -24 h50 q30 4 40 28 v20 z', RD) + '<circle cx="-40" cy="2" r="12" fill="#333"/><circle cx="40" cy="2" r="12" fill="#333"/>')], [280, '보이는 모양', () => W.muscular(g(196, 160, 0, .5, f('M-70 0 v-24 q10 -22 40 -24 h50 q30 4 40 28 v20 z', RD)))], [150, '"다부지다"', () => A(75, BR, 'shock', null, .8)]] }],
      weak: [
        { b: '커피', en: 'This coffee is weak.', ko: '이 커피는 연하다.', feel: '맛에 <b>힘이 없다.</b>', p: [[150, '물 많은 커피', () => MUG(75, 200, '#c9a171')], [280, '맛의 힘', () => W.weak(MUG(196, 160, '#c9a171'))], [150, '"물맛인데?"', () => A(75, BL, 'calm', null, .8) + t(124, 60, 18, '?', '#888')]] },
        { b: '변명', en: 'His excuse was weak.', ko: '그의 변명은 설득력이 약했다.', feel: '말이 <b>못 버틴다.</b>', p: [[150, '"왜 늦었어?"', () => A(75, MN, 'stern', null, .8)], [280, '말의 힘', () => W.weak(t(196, 140, 15, '"버스가… 음…"', '#888'))], [150, '아무도 안 믿는다', () => A(50, MN, 'stern', null, .6) + A(110, BL, 'stern', null, .6)]] }],
      feeble: [
        { b: '손전등', en: 'The flashlight gave a feeble light.', ko: '손전등 불빛이 힘없이 깜빡였다.', feel: '빛도 <b>낼 힘이 거의 없다.</b>', p: [[150, '캠핑의 밤', () => DARK(150, '#1b1d26') + f('M30 238 l45 -70 l45 70 z', OR)], [280, '빛의 힘', () => W.feeble(FLASH(186, 140, 1) + l('M210 140 l20 -6 M210 140 l20 6', 2, '#fff6c0'))], [150, '건전지가 다 됐다', () => DARK(150, '#1b1d26') + FLASH(75, 140, 1.2) + t(75, 100, 14, '깜빡…', '#888')]] },
        { b: '미소', en: 'He made a feeble attempt to smile.', ko: '그는 힘없이 웃어 보이려 했다.', feel: '시도에 <b>힘이 없다.</b>', p: [[150, '시합에 졌다', () => A(75, BL, 'down', null, .8)], [280, '시도의 힘', () => W.feeble(g(196, 146, 0, .7, HEAD('calm')))], [150, '"괜찮아…"', () => A(75, BL, 'phew', null, .8) + t(124, 60, 14, '괜찮…', '#888')]] }],
      fragile: [
        { b: '계란', en: 'Eggs are fragile.', ko: '계란은 깨지기 쉽다.', feel: '<b>쉽게</b> 깨진다.', p: [[150, '장보기', () => [45, 75, 105].map((x) => EGG(x, 200, 1)).join('')], [280, '깨지기 쉬움', () => W.fragile(EGG(196, 170, 2))], [150, '봉지를 살살', () => A(75, MN, 'stern', 'M18 -92 L30 -50', .8) + BOXG(96, 180, 30, 30, '#fff')]] },
        { b: '우정', en: 'Their friendship is fragile.', ko: '그들의 우정은 깨지기 쉽다.', feel: '관계도 <b>쉽게</b> 금이 간다.', p: [[150, '말다툼 다음 날', () => A(40, MN, 'calm', null, .55) + A(110, OR, 'calm', null, .55)], [280, '관계의 금', () => W.fragile(t(196, 150, 40, '♥', '#f4a0b0') + l('M190 116 l8 10 l-6 8 l8 10', 2, '#222'))], [150, '말을 조심한다', () => A(75, MN, 'stern', null, .8) + t(124, 60, 16, '음…', '#888')]] }],
      frail: [
        { b: '할머니', en: 'My grandma is getting frail.', ko: '할머니가 점점 여위어 가신다.', feel: '나이 들어 <b>몸이 여려진다.</b>', p: [[150, '할머니 댁', () => BOXG(20, 100, 110, 138, '#f2d59a') + A(75, '#888', 'smile', null, .5)], [280, '사람의 몸', () => W.frail()], [150, '팔을 잡아 드린다', () => A(50, '#888', 'calm', null, .65) + A(108, MN, 'smile', 'M-20 -90 L-40 -60', .65)]] },
        { b: '목소리', en: 'His voice sounded frail.', ko: '그의 목소리가 여리게 들렸다.', feel: '목소리에도 <b>몸의 여림</b>이 묻어난다.', p: [[150, '전화를 건다', () => A(75, MN, 'calm', 'M18 -92 L22 -126', .8)], [280, '사람의 몸', () => W.frail(PHONE(196, 136, .35))], [150, '"내일 갈게요"', () => A(75, MN, 'sad', null, .8)]] }]
    };
    const CORE = { strong: '<b>힘이 세다 · 잘 버틴다.</b>', powerful: '<b>내는 힘이 크다.</b>', robust: '<b>나쁜 조건에서도 버틴다.</b>', muscular: '<b>근육이 눈에 보인다.</b>', weak: '<b>힘이 없다.</b>', feeble: '<b>낼 힘이 거의 없다.</b>', fragile: '<b>쉽게 손상된다.</b>', frail: '<b>사람의 몸이 여리다.</b>' };
