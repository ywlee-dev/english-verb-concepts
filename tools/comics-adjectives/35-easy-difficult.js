    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(tough 장면 2는 질긴 고기). 가운데 칸은 늘 같은 "오르막 하나와 오르는 사람"과 "무엇이?" 칸이다 — 비탈이 얼마나 가파른가, 그리고 straightforward(방법이 분명) · effortless(그렇게 보임) · tough(견디기 힘든 시기) · arduous(오래 고됨)처럼 무엇을 보는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'challenging', BASIC_B = '노트 장면';
    const FX = { easy: [.2, 1200, 1300, .1, .4], straightforward: [.2, 1000, 1000, .1, .4], effortless: [.6, 1200, 1600, .06, .4], difficult: [.5, 400, 300, .12, .4], tough: [.5, 300, 200, .18, .4], challenging: [.5, 500, 900, .15, .4], arduous: [1.2, 300, 200, .12, .4] };
    const ORDER = MIX(['easy', 'straightforward', 'effortless', 'difficult', 'tough', 'challenging', 'arduous']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const SL = { easy: .05, effortless: .1, straightforward: .15, challenging: .7, difficult: .75, tough: .8, arduous: .85 };
    const WHAT = { easy: '힘이 덜 듦', straightforward: '방법이 분명함', effortless: '힘 안 드는 듯 보임', difficult: '어려움', tough: '견디기 힘듦', challenging: '해 볼 만한 어려움', arduous: '오래 고됨' };
    const TC = (v) => v > .5 ? RD : GN;
    const HILL = (id) => { const v = SL[id], top = 200 - v * 140, mx = 62, my = (200 + top) / 2;
      let s = id === 'arduous' ? f('M8 200 L30 150 L50 170 L72 110 L90 130 L112 60 V200 z', '#b8a88a') : f('M8 200 L112 ' + top + ' V200 z', v > .5 ? '#b8a88a' : '#9ac47a');
      s += g(mx, id === 'arduous' ? 150 : my + 4, 0, .3, MAN(BL, v > .5 ? 'phew' : 'smile', v > .5 ? 'M-20 -90 L-30 -50 M20 -90 L30 -50' : null));
      if (id === 'straightforward') s += l('M14 190 L104 ' + (top + 6), 2, GD) + f('M98 ' + (top + 2) + ' l8 2 l-6 6 z', GD);
      if (id === 'effortless') s += t(88, my - 30, 14, '♪', BL);
      if (id === 'tough') s += BOXG(mx - 2, my - 54, 16, 14, BR) + l('M14 40 l-6 16 M40 30 l-6 16 M100 40 l-6 16', 2, WT);
      if (id === 'challenging') s += l('M110 ' + top + ' v-24', 2) + f('M110 ' + (top - 24) + ' h14 l-4 5 l4 5 h-14 z', RD);
      if (id === 'arduous') s += CLK(26, 70, 14, RD);
      return s + t(62, 226, 12, v > .5 ? '가파르다' : '평평하다', TC(v)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + HILL(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 8 ? 13 : 17, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(SL[id]));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { easy: P('easy', '식은 죽'), straightforward: P('straightforward', '척척'), effortless: P('effortless', '스르륵'), difficult: P('difficult', '끙끙'), tough: P('tough', '버텨!'), challenging: P('challenging', '해 보자'), arduous: P('arduous', '헉헉헉') };
    // 작은 그림들
    const QUIZ = (x, y, txt) => f('M' + (x - 44) + ' ' + (y - 30) + ' h88 v60 h-88 z', '#fff', 2) + t(x, y + 6, 18, txt, BL);
    const MANUAL = (x, y) => f('M' + (x - 30) + ' ' + (y - 40) + ' h60 v80 h-60 z', '#fff', 2) + [0, 1, 2].map((i) => t(x - 18, y - 16 + i * 22, 12, (i + 1) + '.', BL) + l('M' + (x - 8) + ' ' + (y - 20 + i * 22) + ' h28', 3, '#bbb')).join('');
    const STEAK = (x, y) => '<ellipse cx="' + x + '" cy="' + y + '" rx="44" ry="10" fill="#fff" stroke="#222" stroke-width="3"/>' + f('M' + (x - 28) + ' ' + (y - 4) + ' q28 -22 56 0 q-28 12 -56 0 z', '#7a3a2a');
    const WALLC = () => f('M60 238 V30 h60 V238 z', '#b8a88a') + [[70, 60], [100, 90], [76, 130], [106, 170], [80, 200]].map(([x, y]) => '<circle cx="' + x + '" cy="' + y + '" r="5" fill="' + [RD, GD, BL, GN, OR][x % 5] + '"/>').join('');
    const C = {
      easy: { n: 'easy', past: 'easy', en: 'This question is easy.', ko: '이 문제는 쉽다.', feel: '<b>힘이 덜 든다.</b>', t: .2,
        p: [[150, '1번 문제', () => QUIZ(75, 120, '1 + 1 = ?')], [280, '평평하다', () => W.easy()], [150, '1초 만에', () => A(75, OR, 'smile', 'M18 -92 L40 -60', .8) + t(124, 60, 18, '2!', GN)]] },
      straightforward: { n: 'straightforward', past: 'straightforward', en: 'The instructions are straightforward.', ko: '설명서가 명료하다.', feel: '<b>무엇을 해야 할지 바로 보인다.</b>', t: .2,
        p: [[150, '조립 설명서', () => MANUAL(75, 130)], [280, '방법이 분명함', () => W.straightforward()], [150, '척척 완성', () => f('M40 180 h70 v50 h-70 z', '#a3743f') + A(120, MN, 'smile', null, .45)]] },
      effortless: { n: 'effortless', past: 'effortless', en: 'She made it look effortless.', ko: '그녀는 그걸 아주 쉬운 듯 해냈다.', feel: '<b>힘 안 드는 것처럼 보인다.</b> 연습이 적었다는 뜻이 아니다.', t: .6,
        p: [[150, '피아노 연주', () => f('M20 160 h110 v20 h-110 z', '#222') + [0, 1, 2, 3, 4, 5].map((i) => f('M' + (24 + i * 18) + ' 160 h14 v14 h-14 z', '#fff')).join('') + A(75, MN, 'phew', null, .5)], [280, '그렇게 보임', () => W.effortless()], [150, '뒤엔 만 시간 연습', () => CLK(75, 100, 34) + t(75, 170, 14, '10,000시간', OR)]] },
      difficult: { n: 'difficult', past: 'difficult', en: 'This question is difficult.', ko: '이 문제는 어렵다.', feel: '<b>어렵다.</b> 말할 때는 hard가 더 흔하다.', t: .5,
        p: [[150, '10번 문제', () => QUIZ(75, 120, '∫ x² dx')], [280, '가파르다', () => W.difficult()], [150, '머리를 싸맨다', () => A(75, BL, 'phew', 'M-20 -90 L-28 -130 M20 -90 L28 -130', .8)]] },
      tough: { n: 'tough', past: 'tough', en: 'It\'s been a tough week.', ko: '힘든 한 주였다.', feel: '<b>견디기 버겁다.</b> 문제뿐 아니라 시기 · 상황에도.', t: .5,
        p: [[150, '월요일부터 야근', () => DARK(150, '#2b3550') + A(75, BL, 'down', null, .7) + CLK(124, 40, 16)], [280, '견디기 힘듦', () => W.tough()], [150, '금요일 밤, 털썩', () => f('M10 200 h130 v20 h-130 z', '#a84b40') + g(80, 196, -80, .5, MAN(BL, 'down'))]] },
      challenging: { n: 'challenging', past: 'challenging', en: 'This puzzle is challenging.', ko: '이 퍼즐은 도전할 만하다.', feel: '<b>능력을 시험하는 어려움.</b> 늘 즐겁다는 뜻은 아니다.', t: .5,
        p: [[150, '1000조각 퍼즐', () => BOXG(25, 60, 100, 100, '#cfe6f5') + l('M25 93 h100 M25 126 h100 M58 60 v100 M91 60 v100', 2)], [280, '해 볼 만한 어려움', () => W.challenging()], [150, '"한번 해 보자"', () => A(75, MN, 'stern', 'M18 -92 L40 -120', .8)]] },
      arduous: { n: 'arduous', past: 'arduous', en: 'It was an arduous hike.', ko: '고되고 긴 산행이었다.', feel: '<b>시간과 힘을 오래 요구한다.</b> 격식 있는 말.', t: 1.2,
        p: [[150, '새벽 4시 출발', () => DARK(150, '#2b3550') + MOON(110, 40, .5) + A(60, BL, 'stern', null, .6)], [280, '오래 고됨', () => W.arduous()], [150, '해 질 녘 도착', () => DARK(150, '#f6c8a8') + l('M0 238 L75 120 L150 238', 4, BR) + g(75, 124, 0, .3, MAN(BL, 'phew', 'M-20 -90 L-36 -130 M20 -90 L36 -130'))]] }
    };
    const MORE = {
      easy: [
        { b: '요리', en: 'This recipe is easy.', ko: '이 요리법은 쉽다.', feel: '<b>힘이 덜 든다.</b>', p: [[150, '재료 세 개', () => [40, 75, 110].map((x, i) => '<circle cx="' + x + '" cy="180" r="14" fill="' + [RD, GD, GN][i] + '" stroke="#222" stroke-width="2"/>').join('')], [280, '평평하다', () => W.easy()], [150, '10분 완성', () => A(75, MN, 'smile', 'M18 -92 L40 -80', .8) + t(124, 60, 16, '10분', GN)]] },
        { b: '사람', en: 'She is easy to talk to.', ko: '그녀는 말 걸기 편한 사람이다.', feel: '다가가는 길이 <b>평평하다.</b>', p: [[150, '새 학기', () => A(40, OR, 'calm', null, .5) + A(110, MN, 'smile', null, .55)], [280, '마음의 비탈', () => W.easy()], [150, '금세 수다', () => A(40, OR, 'smile', 'M18 -92 L36 -110', .5) + A(110, MN, 'smile', null, .55) + t(75, 50, 16, '하하', OR)]] }],
      straightforward: [
        { b: '길', en: 'The way to the station is straightforward.', ko: '역까지 가는 길은 간단하다.', feel: '길이 <b>한눈에 보인다.</b>', p: [[150, '"역이 어디예요?"', () => A(75, OR, 'calm', null, .6)], [280, '방법이 분명함', () => W.straightforward()], [150, '쭉 직진', () => l('M75 238 V60', 20, '#888') + f('M65 70 l10 -16 l10 16 z', GD)]] },
        { b: '사람', en: 'He\'s a straightforward person.', ko: '그는 솔직 담백한 사람이다.', feel: '속이 <b>한눈에 보인다</b> — 돌려 말하지 않는다.', p: [[150, '"솔직히 말할게"', () => A(75, BR, 'calm', 'M18 -92 L40 -120', .8)], [280, '분명함', () => W.straightforward()], [150, '편하다', () => A(45, BR, 'smile', null, .55) + A(110, MN, 'smile', null, .55)]] }],
      effortless: [
        { b: '춤', en: 'His dancing looks effortless.', ko: '그의 춤은 힘 하나 안 드는 듯 보인다.', feel: '힘이 <b>안 드는 것처럼</b> 보인다.', p: [[150, '무대', () => DARK(150, '#2b1d26') + g(75, 220, 15, .8, MAN(BL, 'smile', 'M-20 -90 L-46 -110 M20 -90 L46 -70'))], [280, '그렇게 보임', () => W.effortless()], [150, '연습실의 땀', () => A(75, BL, 'phew', null, .8) + f('M110 110 q-5 8 0 11 q5 -3 0 -11', '#9fd3f0', 2)]] },
        { b: '영어', en: 'Her English sounds effortless.', ko: '그녀의 영어는 술술 나온다.', feel: '말이 <b>힘 안 들이고</b> 흐르는 듯.', p: [[150, '해외 손님', () => A(40, BR, 'smile', null, .55) + A(110, MN, 'smile', 'M18 -92 L36 -110', .55)], [280, '그렇게 보임', () => W.effortless(l('M150 140 q14 -8 28 0 t28 0 t28 0', 3, BL))], [150, '매일 쓴 일기장', () => [0, 1, 2].map((i) => BOXG(30 + i * 30, 160, 26, 50, [RD, BL, GN][i])).join('')]] }],
      difficult: [
        { b: '수학', en: 'Math is difficult for me.', ko: '나는 수학이 어렵다.', feel: '<b>어렵다.</b>', p: [[150, '수학 숙제', () => QUIZ(75, 120, 'x² + 3x = ?')], [280, '가파르다', () => W.difficult()], [150, '지우개 가루 산', () => f('M40 220 q35 -30 70 0 z', '#f4c6d0') + A(120, OR, 'sad', null, .4)]] },
        { b: '결정', en: 'It was a difficult decision.', ko: '어려운 결정이었다.', feel: '고르는 일이 <b>가파르다.</b>', p: [[150, '두 갈래 길', () => l('M75 238 V150 L30 60 M75 150 L120 60', 6, '#888')], [280, '가파르다', () => W.difficult()], [150, '밤새 고민', () => DARK(150, '#2b3550') + A(75, BL, 'stern', null, .8)]] }],
      tough: [
        { b: '고기', en: 'This steak is tough.', ko: '이 스테이크는 질기다.', feel: '씹기가 <b>버겁다.</b>', p: [[150, '스테이크', () => STEAK(75, 200)], [280, '견디기 힘듦', () => W.tough(STEAK(196, 160))], [150, '쓱싹쓱싹…', () => A(75, BR, 'phew', 'M18 -92 L40 -60', .8) + t(124, 60, 14, '쓱싹', '#888')]] },
        { b: '코치', en: 'My coach is tough but fair.', ko: '우리 코치는 엄하지만 공정하다.', feel: '사람이 <b>버겁게</b> 엄하다.', p: [[150, '운동장 열 바퀴', () => l('M10 200 q65 -60 130 0 q-65 40 -130 0', 4, '#888')], [280, '버거움', () => W.tough()], [150, '"잘했다"', () => A(45, '#2b3550', 'smile', 'M18 -92 L46 -100', .6) + A(110, OR, 'phew', null, .5)]] }],
      challenging: [
        { b: '암벽', en: 'Climbing this wall is challenging.', ko: '이 벽을 오르는 건 도전이 된다.', feel: '능력을 <b>시험한다.</b>', p: [[150, '클라이밍장', () => WALLC()], [280, '해 볼 만한 어려움', () => W.challenging()], [150, '한 칸씩', () => WALLC() + g(90, 160, 0, .35, MAN(OR, 'stern', 'M-20 -90 L-20 -130 M20 -90 L30 -120'))]] },
        { b: '일', en: 'My new job is challenging.', ko: '새 일은 도전이 된다.', feel: '일이 <b>능력을 시험</b>한다.', p: [[150, '첫 출근', () => BOXG(30, 60, 90, 178, '#c8ccd2') + A(75, MN, 'shock', null, .45)], [280, '해 볼 만한 어려움', () => W.challenging()], [150, '조금씩 익숙', () => A(75, MN, 'smile', 'M18 -92 L36 -126', .8)]] }],
      arduous: [
        { b: '훈련', en: 'The training was arduous.', ko: '훈련은 오래 고됐다.', feel: '긴 시간 <b>고되다.</b>', p: [[150, '새벽 훈련', () => DARK(150, '#2b3550') + A(75, OR, 'stern', null, .7, 'M-10 -42 L-24 0 M10 -42 L22 0')], [280, '오래 고됨', () => W.arduous()], [150, '석 달 뒤', () => A(75, OR, 'smile', 'M-20 -90 L-44 -86 L-40 -116 M20 -90 L44 -86 L40 -116', .8)]] },
        { b: '귀갓길', en: 'It was an arduous journey home.', ko: '집으로 가는 길이 길고 고됐다.', feel: '길이 <b>오래 고되다.</b>', p: [[150, '눈보라 공항', () => DARK(150, '#c8ccd2') + t(75, 100, 16, '결항', RD)], [280, '오래 고됨', () => W.arduous()], [150, '드디어 현관', () => BOXG(70, 80, 60, 158, '#c9a171') + A(40, BL, 'phew', null, .6)]] }]
    };
    const CORE = { easy: '<b>힘이 덜 든다.</b>', straightforward: '<b>방법이 바로 보인다.</b>', effortless: '<b>힘 안 드는 듯 보인다.</b>', difficult: '<b>어렵다.</b>', tough: '<b>견디기 버겁다.</b>', challenging: '<b>능력을 시험하는 어려움.</b>', arduous: '<b>오래 고되다.</b>' };
