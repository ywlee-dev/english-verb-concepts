    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(depressed 장면 3은 마을 경기가 가라앉은 쓰임). 가운데 칸은 늘 같은 "얼굴 눈금 — 기쁨에서 슬픔까지"와 "무엇이?" 칸이다 — 입꼬리가 얼마나 올라가나 내려가나, 그리고 cheerful(겉으로 드러남) · downcast(고개 숙인 모습) · depressed(오래 이어짐)처럼 무엇을 보는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'downcast', BASIC_B = '노트 장면';
    const FX = { happy: [.3, 1000, 1300, .12, .4], cheerful: [.2, 1400, 1700, .12, .4], overjoyed: [.5, 1000, 2000, .2, .4], ecstatic: [.6, 1400, 2800, .25, .4], sad: [.8, 500, 300, .08, .5], downcast: [.8, 400, 250, .06, .5], heartbroken: [1.2, 500, 120, .1, .5], depressed: [1.4, 300, 260, .06, .5] };
    const ORDER = MIX(['happy', 'cheerful', 'overjoyed', 'ecstatic', 'sad', 'downcast', 'heartbroken', 'depressed']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const MD = { ecstatic: 1, overjoyed: .9, happy: .6, cheerful: .5, sad: -.5, downcast: -.55, depressed: -.7, heartbroken: -.95 };
    const WHAT = { cheerful: '겉으로 드러난 밝음', overjoyed: '바라던 소식에 기쁨', ecstatic: '들뜰 만큼 큼', downcast: '고개 숙인 모습', heartbroken: '가슴이 무너짐', depressed: '오래 이어짐' };
    const TC = (v) => v > 0 ? OR : BL;
    const MOOD = (id) => { const v = MD[id], c = v > 0 ? '#ffe08a' : '#cfe0f0', cy = id === 'downcast' ? 132 : 112;
      let s = '<circle cx="62" cy="' + cy + '" r="44" fill="' + c + '" stroke="#222" stroke-width="3"/>' +
        '<circle cx="46" cy="' + (cy - 10) + '" r="4"/><circle cx="78" cy="' + (cy - 10) + '" r="4"/>' + l('M38 ' + (cy + 16) + ' q24 ' + (v * 32) + ' 48 0', 4);
      if (id === 'ecstatic') s += t(14, 70, 18, '✦', GD) + t(108, 66, 18, '✦', GD) + t(16, 170, 14, '✦', GD);
      if (id === 'overjoyed') s += f('M96 58 h18 v12 h-18 z', '#fff', 2) + l('M96 58 l9 6 l9 -6', 1.5);
      if (id === 'heartbroken') s += t(62, 196, 22, '💔');
      if (id === 'depressed') s += [0, 1, 2, 3, 4].map((i) => t(20 + i * 21, 190, 14, '☁', '#888')).join('');
      if (id === 'sad' || id === 'downcast') s += f('M' + 44 + ' ' + (cy - 2) + ' q-4 8 0 11 q4 -3 0 -11', '#8fd0ee', 2);
      if (id === 'cheerful') s += l('M14 112 h8 M102 112 h8 M62 60 v-8', 3, GD);
      return s + t(62, 228, 12, v > 0 ? '기쁨 ' + Math.round(v * 100) : '슬픔 ' + Math.round(-v * 100), TC(v)); };
    const TP = (id, b, z) => { const c = TC(MD[id]);
      return DARK(280, '#f6f4ee') + MOOD(id) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 14 : 17, WHAT[id], BL) : t(196, 128, 15, '마음이', '#888') + t(196, 150, 15, MD[id] > 0 ? '좋다' : '아프다', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { happy: P('happy', '방긋'), cheerful: P('cheerful', '쾌활'), overjoyed: P('overjoyed', '야호!'), ecstatic: P('ecstatic', '꺄아아'), sad: P('sad', '훌쩍'), downcast: P('downcast', '축'), heartbroken: P('heartbroken', '와르르'), depressed: P('depressed', '먹구름') };
    // 작은 그림들
    const UP = 'M-20 -90 L-36 -130 M20 -90 L36 -130';
    const DOG = (x, y, k) => g(x, y, 0, k || 1, '<ellipse cy="-20" rx="30" ry="16" fill="#c9a171" stroke="#222" stroke-width="3"/><circle cx="28" cy="-36" r="14" fill="#c9a171" stroke="#222" stroke-width="3"/>' + l('M-18 -6 v12 M14 -6 v12', 5));
    const ROOMY = (c) => BOXG(15, 60, 120, 178, c) + BOXG(40, 90, 40, 40, '#cfe6f5');
    const TROPHY = (x, y, k) => g(x, y, 0, k || 1, f('M-20 -60 h40 q0 34 -20 40 q-20 -6 -20 -40 z', GD) + f('M-6 -20 h12 v14 h-12 z M-16 -6 h32 v8 h-32 z', GD));
    const TICKET = (x, y) => f('M' + (x - 30) + ' ' + (y - 16) + ' h60 v32 h-60 z', '#f4c6d0') + t(x, y + 5, 12, 'TICKET', RD);
    const TOWN = (dark) => [0, 1, 2].map((i) => f('M' + (10 + i * 46) + ' 238 v-60 l20 -16 l20 16 v60 z', dark ? '#9a9088' : '#e9e0c8')).join('') + (dark ? f('M0 20 H150 V60 H0 z', '#aab') : '');
    const C = {
      happy: { n: 'happy', past: 'happy', en: 'I\'m happy today.', ko: '나는 오늘 행복하다.', feel: '<b>마음이 기쁘다.</b> 만족한다는 뜻도 있다(happy with).', t: .3,
        p: [[150, '맑은 아침', () => SUN(110, 40, 18) + A(60, MN, 'smile', null, .8)], [280, '입꼬리가 위', () => W.happy()], [150, '콧노래', () => A(75, MN, 'smile', null, .8) + t(124, 60, 18, '♪', BL)]] },
      cheerful: { n: 'cheerful', past: 'cheerful', en: 'She seems cheerful today.', ko: '그녀는 오늘 쾌활해 보인다.', feel: '<b>밝음이 겉으로 드러난다.</b> 큰 사건이 없어도 된다.', t: .2,
        p: [[150, '"안녕!"', () => A(75, OR, 'smile', 'M18 -92 L40 -126', .8)], [280, '겉으로 드러난 밝음', () => W.cheerful()], [150, '모두에게 인사', () => A(40, OR, 'smile', 'M18 -92 L40 -126', .55) + A(110, BL, 'smile', null, .5)]] },
      overjoyed: { n: 'overjoyed', past: 'overjoyed', en: 'I was overjoyed to hear the news.', ko: '그 소식을 듣고 정말 기뻤다.', feel: '<b>바라던 일이 이뤄져 매우 기쁘다.</b> 놀랄 필요는 없다.', t: .5,
        p: [[150, '편지가 왔다', () => ENV(75, 120, 1.4)], [280, '바라던 소식', () => W.overjoyed()], [150, '깡충', () => g(75, 220, 0, .8, MAN(MN, 'smile', UP)) + t(124, 50, 18, '야호', OR)]] },
      ecstatic: { n: 'ecstatic', past: 'ecstatic', en: 'The fans were ecstatic.', ko: '팬들은 열광했다.', feel: '<b>들뜰 만큼 기쁨이 크다.</b> overjoyed보다 크게 들뜬다.', t: .6,
        p: [[150, '결승 골!', () => '<circle cx="75" cy="120" r="18" fill="#fff" stroke="#222" stroke-width="3"/>' + l('M20 160 V60 h110 v100', 5, '#888')], [280, '들뜰 만큼 큼', () => W.ecstatic()], [150, '관중석 폭발', () => [25, 60, 95, 130].map((x, i) => A(x, [BL, MN, OR, GN][i], 'smile', UP, .45)).join('') + t(75, 40, 18, '꺄아', RD)]] },
      sad: { n: 'sad', past: 'sad', en: 'I\'m sad today.', ko: '나는 오늘 슬프다.', feel: '<b>마음이 아프다.</b> 영화 · 이야기가 슬플 때도.', t: .8,
        p: [[150, '비 오는 창가', () => l('M20 30 l-6 20 M70 40 l-6 20 M120 30 l-6 20', 3, WT) + A(75, BL, 'sad', null, .8)], [280, '입꼬리가 아래', () => W.sad()], [150, '훌쩍', () => A(75, BL, 'sad', 'M18 -92 L8 -118', .8)]] },
      downcast: { n: 'downcast', past: 'downcast', en: 'He looked downcast after the interview.', ko: '면접 후 그는 풀이 죽어 보였다.', feel: '<b>고개를 숙이고</b> 풀이 죽었다. 겉으로 보이는 모습.', t: .8,
        p: [[150, '면접실 문', () => BOXG(40, 60, 70, 178, '#c9a171') + t(75, 100, 12, '면접', '#fff')], [280, '고개 숙인 모습', () => W.downcast()], [150, '터벅터벅', () => A(75, BR, 'down', null, .8)]] },
      heartbroken: { n: 'heartbroken', past: 'heartbroken', en: 'She was heartbroken when her dog died.', ko: '개가 죽었을 때 그녀는 가슴이 무너졌다.', feel: '<b>가슴이 무너질 만큼 아프다.</b> 실망보다 훨씬 크다.', t: 1.2,
        p: [[150, '빈 개집', () => f('M40 238 v-60 l35 -30 l35 30 v60 z', '#c9a171') + f('M62 238 v-30 h26 v30 z', '#222')], [280, '가슴이 무너짐', () => W.heartbroken()], [150, '목줄을 꼭', () => A(75, MN, 'sad', 'M-20 -90 L0 -60 M20 -90 L0 -60', .8) + l('M60 160 q15 20 30 0', 3, RD)]] },
      depressed: { n: 'depressed', past: 'depressed', en: 'I\'ve been feeling depressed lately.', ko: '요즘 계속 우울하다.', feel: '<b>우울이 오래 이어진다.</b> 의학 진단과 같은 말은 아니다.', t: 1.4,
        p: [[150, '달력 한 장', () => BOXG(20, 40, 110, 110, '#fff') + Array.from({ length: 12 }, (_, i) => t(36 + (i % 4) * 26, 70 + Math.floor(i / 4) * 28, 14, '☁', '#888')).join('')], [280, '오래 이어짐', () => W.depressed()], [150, '"이야기해 볼래?"', () => A(45, BL, 'down', null, .65) + A(110, MN, 'calm', null, .65)]] }
    };
    const MORE = {
      happy: [
        { b: '선물', en: 'The kids are happy with their gifts.', ko: '아이들이 선물을 받고 좋아한다.', feel: '<b>기쁘고 만족한다.</b>', p: [[150, '선물 상자', () => PKG(50, 200, 1) + PKG(105, 200, .9)], [280, '입꼬리가 위', () => W.happy()], [150, '방긋방긋', () => A(45, OR, 'smile', null, .5) + A(105, GN, 'smile', null, .5)]] },
        { b: '결과', en: 'I\'m happy with the result.', ko: '결과에 만족한다.', feel: '마음이 <b>만족스럽다.</b>', p: [[150, '작품 완성', () => BOXG(30, 50, 90, 110, '#fff') + SUN(75, 100, 20)], [280, '만족', () => W.happy(t(196, 146, 30, '👍'))], [150, '끄덕끄덕', () => A(75, MN, 'smile', null, .8)]] }],
      cheerful: [
        { b: '노란 방', en: 'The yellow room looks cheerful.', ko: '노란 방이 밝고 경쾌해 보인다.', feel: '방도 <b>밝음이 겉으로</b> 드러난다.', p: [[150, '칠하기 전', () => ROOMY('#c8ccd2')], [280, '겉으로 드러난 밝음', () => W.cheerful()], [150, '칠한 뒤', () => ROOMY('#ffe08a') + A(110, MN, 'smile', null, .4)]] },
        { b: '노래', en: 'She sang a cheerful song.', ko: '그녀는 경쾌한 노래를 불렀다.', feel: '노래도 <b>밝음이 드러난다.</b>', p: [[150, '소풍 버스', () => BUS(-20, 220, .6)], [280, '노래의 밝음', () => W.cheerful(t(176, 140, 22, '♪', OR) + t(210, 130, 22, '♫', OR))], [150, '다 같이 손뼉', () => A(40, OR, 'smile', UP, .5) + A(110, MN, 'smile', UP, .5)]] }],
      overjoyed: [
        { b: '강아지', en: 'We were overjoyed to find our dog.', ko: '잃어버린 강아지를 찾아서 정말 기뻤다.', feel: '바라던 일이 <b>이뤄져</b> 너무 기쁘다.', p: [[150, '전단지', () => DOC(75, 130, 1.6)], [280, '바라던 소식', () => W.overjoyed(DOG(196, 166, .8))], [150, '꼭 안는다', () => A(60, MN, 'smile', 'M20 -90 L40 -70', .75) + DOG(100, 180, .7)]] },
        { b: '합격', en: 'He was overjoyed when he passed.', ko: '그는 합격해서 정말 기뻤다.', feel: '기다리던 결과에 <b>매우 기쁘다.</b>', p: [[150, '결과 발표', () => BOXG(20, 40, 110, 60, '#fff') + t(75, 78, 18, '합격', RD)], [280, '바라던 소식', () => W.overjoyed()], [150, '"엄마!"', () => g(75, 220, 0, .8, MAN(BL, 'smile', UP))]] }],
      ecstatic: [
        { b: '우승', en: 'The team was ecstatic after the win.', ko: '팀은 우승하고 열광했다.', feel: '기쁨이 <b>들뜰 만큼</b> 크다.', p: [[150, '트로피', () => TROPHY(75, 200, 1.6)], [280, '들뜰 만큼 큼', () => W.ecstatic(TROPHY(196, 176, .9))], [150, '헹가래', () => g(75, 60, -70, .5, MAN(BL, 'smile', UP)) + [30, 75, 120].map((x) => A(x, OR, 'smile', UP, .45)).join('')]] },
        { b: '표', en: 'I was ecstatic to get the tickets.', ko: '표를 구해서 너무 들떴다.', feel: '마음이 <b>날아갈 듯</b> 들뜬다.', p: [[150, '예매 대기 1번', () => g(75, 130, 0, 2, PH)], [280, '들뜰 만큼 큼', () => W.ecstatic(TICKET(196, 140))], [150, '방방', () => g(75, 210, 0, .8, MAN(MN, 'smile', UP)) + t(124, 50, 18, '꺄아', RD)]] }],
      sad: [
        { b: '영화', en: 'It was a sad movie.', ko: '슬픈 영화였다.', feel: '이야기가 <b>마음을 아프게</b> 한다.', p: [[150, '영화관', () => BOXG(20, 40, 110, 70, '#222') + t(75, 84, 14, '영화', '#fff')], [280, '입꼬리가 아래', () => W.sad()], [150, '휴지 한 통', () => A(75, MN, 'sad', 'M18 -92 L8 -118', .8) + f('M110 200 h30 v30 h-30 z', '#fff')]] },
        { b: '떠남', en: 'I\'m sad to leave this town.', ko: '이 동네를 떠나려니 슬프다.', feel: '떠나는 마음이 <b>아프다.</b>', p: [[150, '이삿짐 트럭', () => BOXG(20, 140, 110, 70, OR) + '<circle cx="40" cy="214" r="10" fill="#333"/><circle cx="110" cy="214" r="10" fill="#333"/>'], [280, '입꼬리가 아래', () => W.sad()], [150, '뒤돌아본다', () => TOWN(false) + A(130, BL, 'sad', null, .4)]] }],
      downcast: [
        { b: '시험', en: 'She looked downcast after the test.', ko: '시험 후 그녀는 풀이 죽어 보였다.', feel: '<b>고개를 숙인</b> 모습.', p: [[150, '시험지', () => DOC(75, 130, 1.6) + t(96, 100, 18, '52', RD)], [280, '고개 숙인 모습', () => W.downcast()], [150, '어깨가 축', () => A(75, MN, 'down', null, .8)]] },
        { b: '눈', en: 'He walked with downcast eyes.', ko: '그는 눈을 내리깐 채 걸었다.', feel: '눈도 <b>아래로</b> 향한다.', p: [[150, '복도', () => l('M0 60 L50 100 M150 60 L100 100', 2, '#aaa') + A(75, BR, 'down', null, .6)], [280, '눈이 아래로', () => W.downcast(BEYE(196, 136, .5, true) + l('M196 156 v20', 2, '#888'))], [150, '발끝만 본다', () => g(75, 200, 0, .8, f('M-30 0 h24 v8 h-24 z M6 0 h24 v8 h-24 z', '#222'))]] }],
      heartbroken: [
        { b: '이별', en: 'He was heartbroken after the breakup.', ko: '헤어진 뒤 그는 가슴이 무너졌다.', feel: '가슴이 <b>무너질 만큼</b> 아프다.', p: [[150, '찢어진 사진', () => f('M30 60 h40 v80 h-40 z M80 60 h40 v80 h-40 z', '#fff', 2)], [280, '가슴이 무너짐', () => W.heartbroken()], [150, '혼자 벤치', () => f('M30 200 h90 v8 h-90 z', '#a3743f') + g(75, 200, 0, .6, MAN(BR, 'sad'))]] },
        { b: '팬', en: 'The fans were heartbroken by the loss.', ko: '팬들은 패배에 가슴이 무너졌다.', feel: '여럿이 함께 <b>무너진다.</b>', p: [[150, '경기 종료', () => BOXG(20, 40, 110, 60, '#222') + t(75, 78, 20, '0 : 1', RD)], [280, '가슴이 무너짐', () => W.heartbroken()], [150, '모두 주저앉음', () => [30, 75, 120].map((x) => g(x, 238, 0, .45, MAN(BL, 'sad', null, 'M-12 -42 L-30 -6 M12 -42 L30 -6'))).join('')]] }],
      depressed: [
        { b: '겨울', en: 'Long winters make me feel depressed.', ko: '긴 겨울은 나를 우울하게 한다.', feel: '우울이 <b>계절 내내</b> 이어진다.', p: [[150, '석 달째 흐림', () => DARK(150, '#9aa4b0') + t(40, 60, 20, '☁') + t(110, 80, 20, '☁')], [280, '오래 이어짐', () => W.depressed()], [150, '햇빛 램프', () => BULB(110, 80, .6) + A(50, BL, 'calm', null, .7)]] },
        { b: '마을 경기', en: 'The town has been depressed for years.', ko: '그 마을은 몇 년째 경기가 가라앉았다.', feel: '마을 살림도 <b>오래 가라앉아</b> 있다.', p: [[150, '문 닫은 가게들', () => TOWN(true)], [280, '오래 이어짐', () => W.depressed(l('M150 120 l30 20 l30 10 l30 30', 4, BL))], [150, '텅 빈 거리', () => TOWN(true) + t(75, 120, 14, '임대', RD)]] }]
    };
    const CORE = { happy: '<b>마음이 기쁘다.</b>', cheerful: '<b>밝음이 겉으로 드러난다.</b>', overjoyed: '<b>바라던 일로 매우 기쁘다.</b>', ecstatic: '<b>들뜰 만큼 기쁨이 크다.</b>', sad: '<b>마음이 아프다.</b>', downcast: '<b>고개 숙여 풀이 죽었다.</b>', heartbroken: '<b>가슴이 무너질 만큼 아프다.</b>', depressed: '<b>우울이 오래 이어진다.</b>' };
