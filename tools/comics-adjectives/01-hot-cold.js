    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 온도계와 "무엇이?" 칸이다 — 눈금이 어디까지 오르내리나, 그리고 icy · scorching · scalding처럼 무엇에 붙는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'chilly', BASIC_B = '노트 장면';
    const FX = { freezing: [.6, 300, 200, .2, .5], cold: [.5, 400, 300, .15, .5], chilly: [.4, 600, 500, .12, .5], cool: [.5, 800, 900, .1, .5], warm: [.6, 500, 600, .1, .5], hot: [.4, 900, 1000, .15, .4], boiling: [.6, 1000, 1400, .2, .4], icy: [.3, 1800, 1600, .2, .4], scorching: [.5, 1200, 1600, .25, .4], scalding: [.15, 1600, 2200, .3, .3] };
    const ORDER = MIX(['freezing', 'cold', 'chilly', 'cool', 'warm', 'hot', 'boiling', 'icy', 'scorching', 'scalding']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5';
    const LV = { freezing: .04, icy: .1, cold: .22, chilly: .36, cool: .47, warm: .62, hot: .76, boiling: .88, scalding: .93, scorching: .97 };
    const WHAT = { icy: '얼음 · 길', scorching: '햇볕 · 땅', scalding: '물 · 음료' };
    const TC = (v) => v < .3 ? WT : v < .55 ? GN : v < .8 ? OR : RD;
    const THERMO = (v) => { const c = TC(v), y = 190 - 150 * v;
      return [40, 77, 115, 152].map((yy) => l('M66 ' + yy + ' h8', 2, '#999')).join('') + f('M40 36 a12 12 0 0 1 24 0 V190 h-24 z', '#fff') +
        f('M44 ' + y + ' h16 V196 h-16 z', c, 0) + '<circle cx="52" cy="206" r="18" fill="' + c + '" stroke="#222" stroke-width="3"/>' + t(88, y + 6, 18, '◀', c); };
    const TP = (id, b, z) => { const c = TC(LV[id]);
      return DARK(280, '#f6f4ee') + THERMO(LV[id]) + BOXG(126, 56, 140, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, 20, WHAT[id], BL) : t(196, 128, 15, '날씨 · 몸 ·', '#888') + t(196, 150, 15, '물건 두루', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { freezing: P('freezing', '덜덜덜'), cold: P('cold', '으슬으슬'), chilly: P('chilly', '쌀쌀'), cool: P('cool', '살랑'), warm: P('warm', '포근'), hot: P('hot', '후끈'), boiling: P('boiling', '푹푹'), icy: P('icy', '꽁꽁'), scorching: P('scorching', '이글이글'), scalding: P('scalding', '앗 뜨거') };
    // 작은 그림들
    const SNOW = (pts) => pts.map(([x, y]) => t(x, y, 20, '*', WT)).join('');
    const SUNNY = (x, y, r) => SUN(x, y, r);
    const HUG = 'M-20 -90 L12 -70 M20 -90 L-12 -68';
    const FAN = 'M18 -92 L34 -120';
    const SCARF = (x, k) => g(x, 240, 0, k, f('M-24 -112 h48 v12 h-48 z', RD));
    const MUG = (x, y, k, c) => g(x, y, 0, k || 1, f('M-16 -30 h32 l-3 30 h-26 z', c || '#fff') + l('M16 -22 q12 2 0 14', 3) + l('M-6 -38 q-4 -8 0 -14 M6 -38 q-4 -8 0 -14', 2.5, '#bbb'));
    const STEAMS = (x, y, c) => l('M' + x + ' ' + y + ' q-7 -9 0 -18 t0 -18', 3, c || '#bbb');
    const DOOR = (x) => BOXG(x, 110, 50, 128, '#c9a171') + '<circle cx="' + (x + 40) + '" cy="178" r="4"/>';
    const WIN = (x, y) => BOXG(x, y, 60, 50, '#cfe6f5') + l('M' + (x + 30) + ' ' + y + ' v50 M' + x + ' ' + (y + 25) + ' h60', 2);
    const SEA = (w) => f('M0 190 q20 -8 40 0 t40 0 t40 0 t40 0 V240 H0 z', '#8fd0ee');
    const PAN = (x, y) => f('M' + (x - 34) + ' ' + y + ' h68 l-6 22 h-56 z', '#555') + l('M' + (x + 34) + ' ' + (y + 4) + ' h40', 6, '#333');
    const ICE = (w) => f('M0 222 H' + w + ' V240 H0 z', '#cfe6f5') + l('M20 228 l14 -3 M90 230 l16 -4', 2, '#fff');
    const SHADE = (x) => g(x, 238, 0, 1, l('M0 0 V-110', 5, '#555') + f('M-60 -100 q60 -50 120 0 z', '#e07a2b'));
    const PAPER = (x, y, k, v, c) => g(x, y, 0, k || 1, f('M-30 -36 h60 v72 h-60 z', '#fff') + t(0, 4, 14, v || '', c || RD) + l('M-20 18 h40 M-20 26 h30', 2, '#bbb'));
    const STARE = (x, y, c) => l('M' + x + ' ' + y + ' h46', 3, c || WT) + t(x + 56, y + 6, 16, '❄', c || WT);
    const C = {
      freezing: { n: 'freezing', past: 'freezing', en: 'I\'m freezing. Can we go inside?', ko: '나 얼어 죽겠어. 안으로 들어가자.', feel: '<b>눈금 맨 아래.</b> 몸이 못 견딜 만큼 춥다.', t: .6,
        p: [[150, '눈 오는 밤', () => DARK(150, '#2b3550') + SNOW([[20, 40], [60, 70], [120, 36], [130, 90], [26, 110]]) + A(75, MN, 'sad', HUG, .8) + SCARF(75, .8)], [280, '눈금 맨 아래', () => W.freezing()], [150, '"들어가자"', () => DOOR(86) + f('M92 120 h38 v50 h-38 z', '#f2b632') + A(50, MN, 'sad', 'M20 -92 L46 -80', .8)]] },
      cold: { n: 'cold', past: 'cold', en: 'It\'s cold outside.', ko: '밖이 춥다.', feel: '<b>기본 추위.</b> 날씨 · 물건 · 말투에 두루 쓴다.', t: .5,
        p: [[150, '창밖 바람', () => WIN(44, 50) + l('M20 150 h50 q10 0 8 -8 M30 166 h60', 3, WT)], [280, '눈금 아래쪽', () => W.cold()], [150, '외투를 꺼낸다', () => A(75, MN, 'calm', HUG, .8) + SCARF(75, .8)]] },
      chilly: { n: 'chilly', past: 'chilly', en: 'It\'s chilly. I should grab a jacket.', ko: '쌀쌀하네. 겉옷 챙겨야겠다.', feel: '<b>살짝 춥다.</b> 위험하진 않지만 좀 불편하다.', t: .4,
        p: [[150, '아침 바람', () => l('M14 90 h50 q10 0 8 -8 M24 106 h60', 3, WT) + A(90, MN, 'calm', 'M-20 -90 L-4 -70 L16 -84', .8)], [280, '조금 아래', () => W.chilly()], [150, '"겉옷 어디 있지?"', () => BOXG(30, 120, 90, 6, '#8a6a3a') + f('M60 126 l-18 16 v40 h36 v-40 z', GN) + t(110, 60, 22, '?', '#888')]] },
      cool: { n: 'cool', past: 'cool', en: 'It\'s cool outside. Let\'s take a walk.', ko: '밖이 선선하네. 산책하자.', feel: '<b>살짝 낮은데 기분 좋다.</b>', t: .5,
        p: [[150, '저녁 공원', () => TREEC(120, .5) + l('M10 80 h40 q10 0 8 -8', 3, WT)], [280, '가운데 조금 아래', () => W.cool()], [150, '같이 걷자', () => A(50, MN, 'smile', null, .7, 'M-10 -42 L-24 0 M10 -42 L22 0') + A(104, BL, 'smile', null, .7, 'M-10 -42 L-24 0 M10 -42 L22 0')]] },
      warm: { n: 'warm', past: 'warm', en: 'It\'s warm today.', ko: '오늘은 따뜻하다.', feel: '<b>기분 좋게 따뜻하다.</b> 덥지는 않다.', t: .6,
        p: [[150, '봄 햇살', () => SUNNY(110, 44, 18) + '<circle cx="30" cy="226" r="7" fill="#f4c6d0"/><circle cx="54" cy="228" r="6" fill="#f2b632"/>'], [280, '가운데 조금 위', () => W.warm()], [150, '외투를 벗는다', () => A(75, MN, 'smile', 'M18 -92 L40 -60', .8) + f('M110 200 h30 v34 h-30 z', BL)]] },
      hot: { n: 'hot', past: 'hot', en: 'It\'s hot outside.', ko: '밖이 덥다.', feel: '<b>기본 더위 · 뜨거움.</b> 날씨 · 물건 · 음식에 두루.', t: .4,
        p: [[150, '한여름', () => SUNNY(110, 44, 24)], [280, '눈금 위쪽', () => W.hot()], [150, '부채질', () => A(75, MN, 'phew', FAN, .8)]] },
      boiling: { n: 'boiling', past: 'boiling', en: 'It\'s boiling in here.', ko: '여기 안은 푹푹 찐다.', feel: '<b>끓을 만큼 덥다.</b> hot보다 한참 위.', t: .6,
        p: [[150, '에어컨 고장', () => BOXG(20, 30, 90, 30, '#eee') + t(65, 52, 16, '✕', RD) + STEAMS(120, 200, OR) + STEAMS(30, 200, OR)], [280, '눈금 꼭대기 근처', () => W.boiling()], [150, '땀 범벅', () => A(75, MN, 'phew', FAN, .8) + t(30, 120, 18, '💧', WT) + t(124, 110, 18, '💧', WT)]] },
      icy: { n: 'icy', past: 'icy', en: 'The sidewalk is icy. Watch your step.', ko: '인도가 얼어 미끄러워. 발 조심해.', feel: '<b>얼음이 덮였다.</b> 추위보다 미끄러움이 먼저다.', t: .3,
        p: [[150, '얼어붙은 길', () => ICE(150) + A(75, MN, 'shock', 'M-20 -90 L-46 -110 M20 -90 L46 -110', .8, 'M-12 -42 L-30 -6 M12 -42 L30 -4')], [280, '얼음 · 길', () => W.icy()], [150, '살금살금', () => ICE(150) + A(75, BL, 'stern', 'M-20 -90 L-40 -60 M20 -90 L40 -60', .8, 'M-8 -42 L-10 0 M8 -42 L10 0') + t(120, 70, 13, '살금', '#888')]] },
      scorching: { n: 'scorching', past: 'scorching', en: 'It\'s scorching outside. Let\'s find some shade.', ko: '밖이 타는 듯이 뜨거워. 그늘 찾자.', feel: '<b>햇볕이 태울 듯하다.</b> 땅 · 해에 붙는다.', t: .5,
        p: [[150, '이글거리는 해', () => SUNNY(80, 70, 40) + l('M0 230 h150', 3, OR)], [280, '햇볕 · 땅', () => W.scorching()], [150, '그늘로 도망', () => SHADE(80) + A(80, MN, 'phew', null, .6)]] },
      scalding: { n: 'scalding', past: 'scalding', en: 'Careful, the coffee is scalding hot.', ko: '조심해, 커피가 데일 만큼 뜨거워.', feel: '<b>데일 만큼 뜨겁다.</b> 물 · 음료에 붙는다.', t: .15,
        p: [[150, '갓 내린 커피', () => MUG(75, 200, 1.6, '#fff') + STEAMS(64, 120) + STEAMS(86, 120)], [280, '물 · 음료', () => W.scalding()], [150, '혀를 데었다', () => A(75, MN, 'shock', 'M18 -92 L28 -120', .8) + t(120, 70, 20, '앗!', RD)]] }
    };
    const MORE = {
      freezing: [
        { b: '바닷물', en: 'The sea is freezing in May.', ko: '5월 바다는 얼음장이다.', feel: '물도 <b>맨 아래</b>까지 차갑다.', p: [[150, '발을 담근다', () => SEA(150) + A(75, MN, 'smile', null, .7)], [280, '맨 아래', () => W.freezing(f('M150 160 q23 -10 46 0 t46 0 V184 h-92 z', '#8fd0ee') + t(196, 130, 26, '🌊', WT))], [150, '바로 튀어나온다', () => SEA(150) + A(75, MN, 'shock', 'M-20 -90 L-46 -116 M20 -90 L46 -116', .7) + t(120, 60, 18, '으악', WT)]] },
        { b: '과장', en: 'I\'m freezing to death!', ko: '추워 죽겠어!', feel: '정말 죽는다는 말이 아니다. <b>맨 아래까지 간 느낌</b>을 크게 말한다.', p: [[150, '버스 정류장', () => SNOW([[20, 40], [120, 60], [70, 30]]) + A(75, BL, 'sad', HUG, .8)], [280, '말로 맨 아래', () => W.freezing(t(196, 128, 30, '🥶') + t(196, 162, 13, '느낌을 크게', '#888'))], [150, '버스가 온다', () => BUS(-20, 220, .6) + t(110, 60, 18, '살았다!', GN)]] }],
      cold: [
        { b: '음료', en: 'This soda is nice and cold.', ko: '이 탄산음료 시원하게 차갑다.', feel: '물건도 <b>차갑다.</b> 여기선 좋은 쪽.', p: [[150, '냉장고', () => BOXG(40, 30, 70, 200, '#eef3f6') + l('M40 110 h70', 2)], [280, '아래쪽', () => W.cold(g(196, 150, 0, 1, f('M-12 -50 h24 v60 h-24 z', RD) + t(0, -16, 18, '❄', '#fff')))], [150, '캬!', () => A(75, MN, 'smile', 'M18 -92 L22 -126', .8) + t(124, 60, 20, '캬', OR)]] },
        { b: '말투', en: 'Her reply was cold.', ko: '그녀의 대답은 차가웠다.', feel: '말도 <b>온기가 없다.</b>', p: [[150, '"같이 갈래?"', () => A(75, BL, 'smile', null, .8) + BUB(75, 30, 130, '같이 갈래?', 14)], [280, '말의 온도', () => W.cold(t(196, 136, 20, '"아니."', WT))], [150, '움츠러든다', () => A(75, BL, 'down', HUG, .8)]] }],
      chilly: [
        { b: '아침', en: 'The mornings are getting chilly.', ko: '아침이 점점 쌀쌀해진다.', feel: '날씨가 <b>살짝 아래로</b> 내려간다.', p: [[150, '가을 낙엽', () => TREEC(110, .5) + t(40, 200, 22, '🍂') + t(80, 220, 18, '🍂')], [280, '조금 아래', () => W.chilly()], [150, '긴팔을 꺼낸다', () => A(75, MN, 'calm', 'M-20 -90 L-4 -70 L16 -84', .8)]] },
        { b: '반응', en: 'They gave us a chilly welcome.', ko: '그들은 우리를 쌀쌀맞게 맞았다.', feel: '마음 온도도 <b>살짝 낮다.</b>', p: [[150, '새 동네 인사', () => A(75, MN, 'smile', 'M18 -92 L40 -120', .8)], [280, '마음의 온도', () => W.chilly(t(196, 130, 18, '"아, 네."', WT) + t(196, 156, 13, '눈도 안 맞춤', '#888'))], [150, '어색하다', () => A(75, MN, 'calm', null, .8) + t(124, 70, 18, '...', '#888')]] }],
      cool: [
        { b: '그늘', en: 'It\'s cool in the shade.', ko: '그늘은 선선하다.', feel: '조금 내려가니 <b>기분 좋다.</b>', p: [[150, '나무 아래', () => TREEC(75, .7)], [280, '가운데 조금 아래', () => W.cool()], [150, '휴', () => TREEC(110, .5) + A(50, MN, 'phew', null, .7)]] },
        { b: '침착', en: 'Stay cool and think.', ko: '침착하게 생각해.', feel: '머리 온도가 <b>안 오른다</b> — 침착하다.', p: [[150, '시험 문제가 어렵다', () => DOC(75, 120, 1.2) + t(120, 50, 22, '?!', RD)], [280, '머리의 온도', () => W.cool(g(196, 150, 0, .6, HEAD('calm')))], [150, '하나씩 푼다', () => A(75, BL, 'calm', 'M18 -92 L36 -70', .8) + t(124, 60, 16, '1, 2…', BL)]] }],
      warm: [
        { b: '우유', en: 'The milk is warm enough to drink.', ko: '우유가 마시기 좋게 따뜻하다.', feel: '물건도 <b>딱 좋게</b> 따뜻하다.', p: [[150, '데운 우유', () => MUG(75, 200, 1.6, '#fff') + STEAMS(75, 120)], [280, '가운데 조금 위', () => W.warm(MUG(196, 168, 1.2))], [150, '꿀꺽', () => A(75, MN, 'smile', 'M18 -92 L22 -126', .8)]] },
        { b: '환영', en: 'They gave us a warm welcome.', ko: '그들은 우리를 따뜻하게 맞아 주었다.', feel: '마음도 <b>따뜻하다.</b>', p: [[150, '할머니 댁 도착', () => DOOR(50) + A(40, MN, 'smile', null, .6)], [280, '마음의 온도', () => W.warm(t(196, 140, 34, '♥', RD))], [150, '꼭 안아 준다', () => A(60, '#888', 'smile', 'M20 -90 L40 -70', .8) + A(96, MN, 'smile', 'M-20 -90 L-40 -70', .7)]] }],
      hot: [
        { b: '냄비', en: 'Don\'t touch the pan. It\'s hot.', ko: '냄비 만지지 마. 뜨거워.', feel: '물건도 <b>뜨겁다.</b>', p: [[150, '불 위의 냄비', () => PAN(60, 150) + FIRE(60, 220, .6)], [280, '눈금 위쪽', () => W.hot(PAN(186, 150))], [150, '"앗, 손 떼!"', () => A(75, MN, 'shock', 'M18 -92 L50 -110', .8) + t(124, 60, 18, '앗!', RD)]] },
        { b: '화제', en: 'It\'s a hot topic right now.', ko: '요즘 뜨거운 화제다.', feel: '관심이 <b>뜨겁다.</b>', p: [[150, '뉴스', () => BOXG(20, 40, 110, 80, '#cfe6f5') + t(75, 90, 18, 'NEWS', BL)], [280, '관심의 온도', () => W.hot(t(196, 140, 34, '🔥'))], [150, '모두 그 얘기', () => A(40, BL, 'shock', null, .55) + A(110, MN, 'smile', null, .55) + t(75, 60, 18, '그거 봤어?', OR)]] }],
      boiling: [
        { b: '물', en: 'The water is boiling.', ko: '물이 끓고 있다.', feel: '물도 <b>끓는점</b>까지 왔다.', p: [[150, '라면 물', () => PAN(70, 150) + FIRE(70, 220, .6)], [280, '꼭대기 근처', () => W.boiling(PAN(196, 150) + t(186, 140, 16, '○ ○', '#fff'))], [150, '면을 넣는다', () => A(75, MN, 'smile', 'M18 -92 L40 -100', .8)]] },
        { b: '화', en: 'He was boiling with anger.', ko: '그는 화가 부글부글 끓었다.', feel: '화도 <b>끓는점</b>까지 오른다.', p: [[150, '새치기 당했다', () => A(110, '#888', 'calm', null, .6) + A(40, BR, 'stern', null, .7)], [280, '화의 온도', () => W.boiling(g(196, 150, 0, .6, HEAD('stern')) + STEAMS(176, 116, RD) + STEAMS(216, 116, RD))], [150, '얼굴이 빨갛다', () => g(75, 130, 0, 1.4, HEAD('stern')) + '<circle cx="75" cy="130" r="40" fill="' + RD + '" opacity=".3"/>']] }],
      icy: [
        { b: '바람', en: 'An icy wind blew all night.', ko: '얼음 같은 바람이 밤새 불었다.', feel: '바람에 <b>얼음이 섞인</b> 느낌.', p: [[150, '창이 덜컹', () => DARK(150, '#2b3550') + WIN(44, 60)], [280, '얼음 · 바람', () => W.icy(l('M150 130 h70 q12 0 10 -10 M160 148 h80', 4, WT) + t(240, 170, 18, '❄', WT))], [150, '이불 속', () => DARK(150, '#2b3550') + f('M10 200 q65 -50 130 0 v38 h-130 z', BL) + g(75, 170, 0, .6, HEAD('down'))]] },
        { b: '눈빛', en: 'She gave him an icy stare.', ko: '그녀는 그를 싸늘하게 쳐다봤다.', feel: '눈빛도 <b>얼음처럼</b> 굳었다.', p: [[150, '약속에 늦었다', () => CLK(75, 90, 34) + t(75, 160, 14, '1시간 늦음', RD)], [280, '얼음 · 눈빛', () => W.icy(STARE(150, 130) + t(196, 172, 13, '굳은 눈빛', '#888'))], [150, '얼어붙은 그', () => A(75, BL, 'shock', null, .8) + t(124, 60, 20, '❄', WT)]] }],
      scorching: [
        { b: '모래', en: 'The sand was scorching under my feet.', ko: '발밑 모래가 타는 듯 뜨거웠다.', feel: '땅이 <b>태울 듯하다.</b>', p: [[150, '한낮 해변', () => SUNNY(110, 40, 24) + f('M0 200 H150 V240 H0 z', '#f2d59a')], [280, '햇볕 · 땅', () => W.scorching(f('M140 160 h112 v20 h-112 z', '#f2d59a') + l('M160 156 q-6 -10 0 -20 M200 156 q-6 -10 0 -20 M240 156 q-6 -10 0 -20', 3, RD))], [150, '깡충깡충', () => f('M0 200 H150 V240 H0 z', '#f2d59a') + g(75, 214, 0, .7, MAN(MN, 'shock', null, 'M-12 -42 L-20 -20 M12 -42 L20 -24')) + t(120, 70, 16, '앗 뜨!', RD)]] },
        { b: '비평', en: 'The critic wrote a scorching review.', ko: '평론가가 혹독한 평을 썼다.', feel: '말도 <b>태울 듯</b> 뜨겁다.', p: [[150, '첫 영화 개봉', () => BOXG(20, 40, 110, 70, '#222') + t(75, 84, 16, '★ 개봉 ★', '#f2b632')], [280, '말 · 글', () => W.scorching(PAPER(196, 132, 1, '최악', RD) + FIRE(240, 186, .4))], [150, '감독이 눈물', () => A(75, BR, 'sad', null, .8)]] }],
      scalding: [
        { b: '샤워', en: 'The shower water was scalding.', ko: '샤워 물이 델 만큼 뜨거웠다.', feel: '물이 <b>데일 만큼</b> 뜨겁다.', p: [[150, '물을 튼다', () => l('M100 20 v30 M80 50 h40', 5, '#888') + [84, 100, 116].map((x) => l('M' + x + ' 60 v40', 3, WT)).join('')], [280, '물 · 음료', () => W.scalding()], [150, '뛰쳐나온다', () => A(60, MN, 'shock', 'M-20 -90 L-46 -116 M20 -90 L46 -116', .8) + t(120, 60, 20, '앗!', RD)]] },
        { b: '비판', en: 'He faced scalding criticism.', ko: '그는 데일 듯한 비판을 받았다.', feel: '말이 <b>데일 만큼</b> 아프다.', p: [[150, '실수가 알려졌다', () => BOXG(20, 40, 110, 80, '#cfe6f5') + t(75, 90, 18, 'NEWS', BL)], [280, '말의 온도', () => W.scalding(PAPER(196, 132, 1, '!!!', RD) + STEAMS(242, 120, RD))], [150, '고개를 숙인다', () => A(75, BL, 'down', null, .8)]] }]
    };
    const CORE = { freezing: '<b>맨 아래 — 못 견딜 추위.</b>', cold: '<b>기본 추위 · 차가움.</b>', chilly: '<b>살짝 춥다.</b>', cool: '<b>살짝 낮은데 기분 좋다.</b>', warm: '<b>기분 좋게 따뜻하다.</b>', hot: '<b>기본 더위 · 뜨거움.</b>', boiling: '<b>끓을 만큼 덥다.</b>', icy: '<b>얼음이 덮였다.</b>', scorching: '<b>햇볕 · 땅이 태울 듯.</b>', scalding: '<b>물 · 음료가 데일 만큼.</b>' };
