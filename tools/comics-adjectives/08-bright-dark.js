    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "방 하나의 밝기"와 "무엇이?" 칸이다 — 방이 얼마나 밝은가, 그리고 radiant · luminous · gloomy처럼 무엇을 보고 하는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'dim', BASIC_B = '노트 장면';
    const FX = { bright: [.3, 1200, 1400, .15, .4], dazzling: [.5, 2000, 2600, .2, .4], radiant: [.6, 1000, 1300, .12, .4], luminous: [1, 900, 900, .08, .5], dark: [.6, 300, 200, .1, .5], dim: [.6, 500, 400, .08, .5], gloomy: [1, 260, 200, .1, .5], 'pitch-black': [.8, 120, 80, .15, .5] };
    const ORDER = MIX(['bright', 'dazzling', 'radiant', 'luminous', 'dark', 'dim', 'gloomy', 'pitch-black']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const LT = { dazzling: 1, bright: .8, radiant: .7, luminous: .1, dim: .32, gloomy: .24, dark: .12, 'pitch-black': 0 };
    const WHAT = { dazzling: '눈이 부심', radiant: '얼굴 · 인상', luminous: '스스로 빛남', dim: '빛이 약함', gloomy: '분위기까지', 'pitch-black': '하나도 안 보임' };
    const MIXC = (v) => { const a = [17, 19, 28], b = [255, 246, 192], h = (n) => Math.round(a[n] + (b[n] - a[n]) * Math.pow(v, .6)).toString(16).padStart(2, '0'); return '#' + h(0) + h(1) + h(2); };
    const TC = (v) => v > .5 ? OR : BL;
    const ROOM = (id) => { const v = LT[id], n = Math.round(v * 8);
      return f('M14 40 h96 v150 h-96 z', MIXC(v)) + l('M62 40 v22', 2, v > .5 ? '#222' : '#888') + '<circle cx="62" cy="72" r="10" fill="' + (v > .2 ? GD : '#444') + '" stroke="#222" stroke-width="2"/>' +
        Array.from({ length: n }, (_, i) => { const a = Math.PI * (i + .5) / n, c = Math.cos(a), s = Math.sin(a); return l('M' + (62 + c * 16) + ' ' + (72 + s * 16) + ' L' + (62 + c * (26 + v * 20)) + ' ' + (72 + s * (26 + v * 20)), 2.5, GD); }).join('') +
        (id === 'luminous' ? '<circle cx="62" cy="150" r="16" fill="#9cf0b0" stroke="#3a9a6a" stroke-width="3"/>' : '') + (id === 'gloomy' ? t(84, 176, 16, '☁', '#888') : '') +
        (id === 'dazzling' ? t(36, 120, 18, '✦', '#fff') + t(90, 166, 14, '✦', '#fff') : '') + t(62, 222, 13, '밝기 ' + Math.round(v * 100), TC(v)); };
    const TP = (id, b, z) => { const c = TC(LT[id]);
      return DARK(280, '#f6f4ee') + ROOM(id) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 15 : 18, WHAT[id], BL) : t(196, 128, 15, '빛 · 색 ·', '#888') + t(196, 150, 15, '마음 두루', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { bright: P('bright', '환하게'), dazzling: P('dazzling', '번쩍'), radiant: P('radiant', '활짝'), luminous: P('luminous', '은은'), dark: P('dark', '깜깜'), dim: P('dim', '침침'), gloomy: P('gloomy', '우중충'), 'pitch-black': P('pitch-black', '새까맣'), };
    // 작은 그림들
    const WIN = (x, y, c) => BOXG(x, y, 60, 60, c || '#cfe6f5') + l('M' + (x + 30) + ' ' + y + ' v60 M' + x + ' ' + (y + 30) + ' h60', 2);
    const LAMP = (x, y, on) => l('M' + x + ' ' + y + ' v-70', 4, '#555') + f('M' + (x - 20) + ' ' + (y - 70) + ' h40 l-10 -24 h-20 z', on ? GD : '#888');
    const WATCH = (x, y, k, glow) => g(x, y, 0, k || 1, f('M-10 -40 h20 v80 h-20 z', '#555') + '<circle r="22" fill="' + (glow ? '#9cf0b0' : '#fff') + '" stroke="#222" stroke-width="3"/>' + l('M0 0 v-14 M0 0 l10 4', 2.5));
    const CLOUDS = () => f('M10 60 q10 -24 34 -14 q14 -20 36 -4 q24 -6 26 18 z M70 90 q10 -20 30 -12 q14 -16 30 0 q16 2 14 16 z', '#888');
    const STARC = (x, y) => t(x, y, 18, '★', '#fff6a0');
    const VEIL = f('M40 40 q35 -30 70 0 l14 80 h-98 z', 'rgba(255,255,255,.55)');
    const C = {
      bright: { n: 'bright', past: 'bright', en: 'The room is bright.', ko: '방이 밝다.', feel: '<b>빛이 많다.</b> 똑똑하다 · 색이 선명하다는 뜻도 있다.', t: .3,
        p: [[150, '커튼을 연다', () => WIN(45, 50, '#fff6c0') + SUN(75, 80, 12)], [280, '방이 환하다', () => W.bright()], [150, '책이 잘 보인다', () => DARK(150, '#fff6c0') + A(75, MN, 'smile', null, .8) + BOOK(110, 140, .4)]] },
      dazzling: { n: 'dazzling', past: 'dazzling', en: 'The glare is dazzling.', ko: '반사광이 눈부시다.', feel: '<b>눈을 찡그릴 만큼 강하다.</b> 멋진 공연에도 쓴다.', t: .5,
        p: [[150, '유리 건물', () => f('M40 30 h70 v208 h-70 z', '#cfe6f5') + l('M50 50 l50 50 M50 110 l50 50', 4, '#fff') + SUN(130, 30, 14)], [280, '눈이 부심', () => W.dazzling()], [150, '손으로 가린다', () => A(75, BL, 'phew', 'M18 -92 L-4 -130', .8) + t(124, 60, 18, '윽', OR)]] },
      radiant: { n: 'radiant', past: 'radiant', en: 'She has a radiant smile.', ko: '그녀는 환한 미소를 지녔다.', feel: '<b>밝고 생기 있는 인상.</b> 진짜 빛을 내는 게 아니다.', t: .6,
        p: [[150, '아침 인사', () => A(75, MN, 'smile', 'M18 -92 L40 -120', .8)], [280, '얼굴 · 인상', () => W.radiant(g(196, 146, 0, .8, HEAD('smile')))], [150, '모두 따라 웃는다', () => A(40, BL, 'smile', null, .55) + A(110, OR, 'smile', null, .55)]] },
      luminous: { n: 'luminous', past: 'luminous', en: 'The watch has a luminous dial.', ko: '그 시계는 어둠 속에서 빛나는 문자판이 있다.', feel: '<b>어둠 속에서 스스로 빛난다.</b> 세기보다 성질.', t: 1,
        p: [[150, '불을 끈다', () => DARK(150) + LAMP(75, 230, false)], [280, '스스로 빛남', () => W.luminous(WATCH(196, 140, 1, true))], [150, '"새벽 3시구나"', () => DARK(150) + WATCH(75, 120, 1.3, true)]] },
      dark: { n: 'dark', past: 'dark', en: 'The room is dark.', ko: '방이 어둡다.', feel: '<b>빛이 없거나 적다.</b> 색이 짙을 때도 쓴다.', t: .6,
        p: [[150, '밤', () => DARK(150, '#2b3550') + MOON(110, 40, .5)], [280, '빛이 적다', () => W.dark()], [150, '스위치 찾기', () => DARK(150) + g(75, 240, 0, .8, MAN('#333', 'shock', 'M18 -92 L46 -100')) + t(124, 60, 18, '어디…', '#888')]] },
      dim: { n: 'dim', past: 'dim', en: 'The lights are dim. I can\'t read the menu.', ko: '불빛이 약해서 메뉴판이 안 보인다.', feel: '<b>빛이 약해 흐릿하게 보인다.</b> 우울하다는 뜻은 아니다.', t: .6,
        p: [[150, '분위기 있는 식당', () => DARK(150, '#5a4a3a') + '<circle cx="75" cy="120" r="8" fill="' + GD + '"/>'], [280, '빛이 약함', () => W.dim()], [150, '휴대폰 불빛', () => DARK(150, '#5a4a3a') + A(75, MN, 'stern', 'M18 -92 L40 -110', .8) + l('M110 92 l20 -16', 6, '#fff6c0')]] },
      gloomy: { n: 'gloomy', past: 'gloomy', en: 'It looks gloomy outside.', ko: '밖이 우중충하다.', feel: '<b>어두운데 분위기까지 침울하다.</b>', t: 1,
        p: [[150, '창밖 하늘', () => DARK(150, '#9aa4b0') + CLOUDS()], [280, '분위기까지', () => W.gloomy()], [150, '괜히 기운이 없다', () => DARK(150, '#c8ccd2') + A(75, BL, 'down', null, .8)]] },
      'pitch-black': { n: 'pitch-black', past: 'pitch-black', en: 'The cave is pitch-black.', ko: '동굴 안은 칠흑같이 어둡다.', feel: '<b>아무것도 구별이 안 된다.</b> 과장으로도 쓴다.', t: .8,
        p: [[150, '동굴 입구', () => f('M10 238 q0 -180 65 -180 q65 0 65 180 z', '#555') + f('M40 238 q0 -110 35 -110 q35 0 35 110 z', '#000')], [280, '하나도 안 보임', () => W['pitch-black']()], [150, '눈만 깜빡', () => DARK(150, '#000') + '<circle cx="64" cy="120" r="4" fill="#fff"/><circle cx="86" cy="120" r="4" fill="#fff"/>']] }
    };
    const MORE = {
      bright: [
        { b: '색', en: 'She wore a bright yellow coat.', ko: '그녀는 선명한 노란 코트를 입었다.', feel: '색도 <b>빛이 많은 듯</b> 선명하다.', p: [[150, '회색 거리', () => DARK(150, '#c8ccd2') + A(40, '#888', 'calm', null, .5) + A(110, '#888', 'calm', null, .5)], [280, '색의 밝기', () => W.bright(f('M196 100 l-30 14 v56 h60 v-56 z', '#f2d34a'))], [150, '눈에 확 띈다', () => DARK(150, '#c8ccd2') + A(75, '#f2d34a', 'smile', null, .8)]] },
        { b: '아이', en: 'He is a bright student.', ko: '그는 똑똑한 학생이다.', feel: '머리도 <b>환하게 불이 켜졌다.</b>', p: [[150, '수학 시간', () => BOXG(20, 30, 110, 70, '#2c4a3a') + t(75, 72, 16, '7 × 8 = ?', '#fff')], [280, '머리의 밝기', () => W.bright(BULB(196, 140, .6))], [150, '번쩍 손', () => A(75, OR, 'smile', 'M18 -92 L30 -140', .65) + t(124, 60, 18, '56!', GN)]] }],
      dazzling: [
        { b: '눈밭', en: 'The snow was dazzling in the sun.', ko: '햇빛에 눈밭이 눈부셨다.', feel: '빛이 <b>눈을 압도한다.</b>', p: [[150, '눈 온 다음 날', () => f('M0 170 H150 V240 H0 z', '#fff') + SUN(110, 40, 18)], [280, '눈이 부심', () => W.dazzling()], [150, '선글라스', () => A(75, BL, 'smile', null, .8) + f('M56 128 h16 v8 h-16 z M78 128 h16 v8 h-16 z', '#222')]] },
        { b: '공연', en: 'It was a dazzling performance.', ko: '눈부신 공연이었다.', feel: '멋짐이 <b>눈을 압도한다.</b>', p: [[150, '막이 오른다', () => DARK(150, '#2b1d26') + l('M20 20 L60 120 M130 20 L90 120', 6, '#fff6c0')], [280, '마음이 부심', () => W.dazzling(STARC(170, 120) + STARC(196, 150) + STARC(222, 120))], [150, '기립 박수', () => [30, 75, 120].map((x) => A(x, BL, 'shock', 'M-20 -90 L-30 -130 M20 -90 L30 -130', .45)).join('')]] }],
      radiant: [
        { b: '신부', en: 'The bride looked radiant.', ko: '신부가 환하게 빛나 보였다.', feel: '얼굴이 <b>밝고 생기 있다.</b>', p: [[150, '결혼식장', () => t(40, 50, 22, '💐') + t(110, 50, 22, '💐')], [280, '얼굴 · 인상', () => W.radiant(g(196, 150, 0, .7, HEAD('smile')) + g(134, 64, 0, 1, VEIL))], [150, '활짝', () => A(75, '#fff', 'smile', null, .8)]] },
        { b: '기쁨', en: 'He came home radiant with joy.', ko: '그는 기쁨으로 얼굴이 환해져 돌아왔다.', feel: '기쁨이 <b>얼굴로 퍼진다.</b>', p: [[150, '합격 발표', () => BOXG(20, 40, 110, 60, '#fff') + t(75, 80, 18, '합격', RD)], [280, '얼굴 · 인상', () => W.radiant(t(196, 146, 40, '😊'))], [150, '"엄마, 나 붙었어!"', () => A(50, BL, 'smile', 'M18 -92 L36 -126', .65) + A(110, MN, 'shock', null, .6)]] }],
      luminous: [
        { b: '별 스티커', en: 'The stars on my ceiling are luminous.', ko: '천장의 별 스티커가 어둠 속에서 빛난다.', feel: '불을 끄면 <b>스스로 빛난다.</b>', p: [[150, '낮에는 그냥 스티커', () => DARK(150, '#f6f4ee') + t(40, 50, 18, '★', '#ddd') + t(100, 70, 18, '★', '#ddd')], [280, '스스로 빛남', () => W.luminous(t(170, 120, 18, '★', '#9cf0b0') + t(214, 150, 22, '★', '#9cf0b0'))], [150, '밤, 반짝반짝', () => DARK(150) + t(30, 50, 20, '★', '#9cf0b0') + t(100, 70, 20, '★', '#9cf0b0') + t(60, 110, 16, '★', '#9cf0b0') + f('M10 210 q65 -30 130 0 v28 h-130 z', BL)]] },
        { b: '눈', en: 'Her eyes were luminous with tears.', ko: '그녀의 눈이 눈물로 반짝였다.', feel: '눈빛이 <b>스스로 빛나듯</b> 반짝인다.', p: [[150, '오랜만의 재회', () => A(40, MN, 'shock', null, .55) + A(110, OR, 'smile', null, .55)], [280, '눈의 빛', () => W.luminous(BEYE(196, 136, .5) + t(222, 120, 14, '✦', '#9cf0b0'))], [150, '꼭 안는다', () => A(60, MN, 'phew', 'M20 -90 L40 -70', .7) + A(96, OR, 'smile', 'M-20 -90 L-40 -70', .6)]] }],
      dark: [
        { b: '색', en: 'He wore a dark suit.', ko: '그는 짙은 색 정장을 입었다.', feel: '색에도 <b>빛이 적다</b> — 짙다.', p: [[150, '옷장', () => BOXG(20, 30, 110, 200, '#c9a171') + f('M50 60 l-16 10 v60 h32 v-60 z', '#2b3550') + f('M100 60 l-16 10 v60 h32 v-60 z', '#f4c6d0')], [280, '색의 밝기', () => W.dark(f('M196 100 l-30 14 v56 h60 v-56 z', '#1b1d26'))], [150, '면접 가는 길', () => A(75, '#1b1d26', 'stern', null, .8)]] },
        { b: '시절', en: 'Those were dark days.', ko: '그때는 암울한 나날이었다.', feel: '날들에도 <b>빛이 없었다.</b>', p: [[150, '빈 가게', () => BOXG(20, 60, 110, 120, '#888') + t(75, 124, 14, '폐업', RD)], [280, '날들의 밝기', () => W.dark(g(140, 60, 0, .8, CLOUDS()))], [150, '그래도 버텼다', () => DARK(150, '#2b3550') + A(75, BR, 'stern', null, .8) + STARC(120, 40)]] }],
      dim: [
        { b: '복도', en: 'The hallway is dim at night.', ko: '밤에는 복도가 어둑하다.', feel: '빛이 <b>약해서 흐릿하다.</b>', p: [[150, '긴 복도', () => DARK(150, '#4a4a52') + l('M0 60 L50 100 M150 60 L100 100 M0 238 L50 170 M150 238 L100 170', 2, '#888')], [280, '빛이 약함', () => W.dim()], [150, '살금살금', () => DARK(150, '#4a4a52') + A(75, BL, 'stern', 'M18 -92 L40 -70', .7)]] },
        { b: '가능성', en: 'Our chances look dim.', ko: '우리 가능성은 희미해 보인다.', feel: '희망의 빛이 <b>약하다.</b>', p: [[150, '3 대 0', () => BOXG(20, 40, 110, 60, '#222') + t(75, 80, 20, '0 : 3', RD)], [280, '희망의 빛', () => W.dim(BULB(196, 140, .5))], [150, '끝까지 뛴다', () => A(75, OR, 'stern', null, .8, 'M-10 -42 L-24 0 M10 -42 L22 0')]] }],
      gloomy: [
        { b: '지하', en: 'The basement is gloomy.', ko: '지하실이 침침하고 음산하다.', feel: '어두운데 <b>기분까지</b> 가라앉는다.', p: [[150, '계단 아래', () => DARK(150, '#3a3a42') + l('M0 60 h40 v30 h40 v30 h40 v30', 4, '#666')], [280, '분위기까지', () => W.gloomy()], [150, '빨리 나가자', () => DARK(150, '#3a3a42') + A(75, MN, 'sad', null, .8) + t(124, 60, 16, '으스스', '#aaa')]] },
        { b: '기분', en: 'He has been gloomy all week.', ko: '그는 일주일 내내 우울했다.', feel: '마음 방에 <b>불이 꺼진</b> 듯 침울하다.', p: [[150, '월요일부터', () => A(75, BR, 'down', null, .8) + t(124, 50, 22, '☁', '#888')], [280, '마음 분위기', () => W.gloomy(g(196, 150, 0, .7, HEAD('down')) + t(222, 112, 18, '☁', '#888'))], [150, '"무슨 일 있어?"', () => A(50, BR, 'down', null, .6) + A(110, MN, 'calm', null, .6)]] }],
      'pitch-black': [
        { b: '정전', en: 'The house went pitch-black during the blackout.', ko: '정전 때 집이 칠흑처럼 깜깜해졌다.', feel: '<b>하나도</b> 안 보인다.', p: [[150, '저녁 식사 중', () => DARK(150, '#fff6c0') + f('M20 180 h110 v10 h-110 z', '#a3743f') + A(75, MN, 'smile', null, .6)], [280, '하나도 안 보임', () => W['pitch-black']()], [150, '"초 어디 있어?"', () => DARK(150, '#000') + t(75, 120, 16, '초…?', '#888')]] },
        { b: '과장', en: 'It\'s only six, and it\'s already pitch-black!', ko: '겨우 6시인데 벌써 깜깜하다!', feel: '깜깜함을 <b>크게</b> 말한다.', p: [[150, '겨울 퇴근길', () => DARK(150, '#1b1d26') + CLK(110, 50, 20)], [280, '말로 크게', () => W['pitch-black'](t(196, 150, 18, '벌써?!', '#888'))], [150, '목도리를 여민다', () => DARK(150, '#1b1d26') + A(75, BL, 'sad', 'M-20 -90 L12 -70 M20 -90 L-12 -68', .8)]] }]
    };
    const CORE = { bright: '<b>빛이 많다.</b>', dazzling: '<b>눈을 압도할 만큼.</b>', radiant: '<b>밝고 생기 있는 인상.</b>', luminous: '<b>어둠 속에서 스스로 빛남.</b>', dark: '<b>빛이 없거나 적다.</b>', dim: '<b>빛이 약해 흐릿함.</b>', gloomy: '<b>어둡고 분위기까지 침울.</b>', 'pitch-black': '<b>아무것도 안 보인다.</b>' };
