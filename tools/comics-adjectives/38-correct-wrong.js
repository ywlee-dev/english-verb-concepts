    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(wrong 장면 3은 도덕의 "옳지 않다", faulty 장면 3은 논리의 결함). 가운데 칸은 늘 같은 "과녁과 화살"과 "무엇이?" 칸이다 — 화살이 한가운데에 꽂혔나 빗나갔나, 그리고 accurate(실제와 맞음) · precise(촘촘히 모였지만 맞는지는 따로) · mistaken(사람의 착각) · faulty(물건 결함)처럼 무엇을 보는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'precise', BASIC_B = '노트 장면';
    const FX = { correct: [.2, 1200, 1500, .15, .4], right: [.2, 1100, 1300, .15, .4], accurate: [.2, 1600, 1600, .15, .4], precise: [.1, 2200, 2200, .15, .4], wrong: [.3, 300, 200, .15, .4], incorrect: [.3, 400, 300, .12, .4], mistaken: [.5, 600, 400, .1, .4], faulty: [.4, 200, 120, .2, .4] };
    const ORDER = MIX(['correct', 'right', 'accurate', 'precise', 'wrong', 'incorrect', 'mistaken', 'faulty']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const OK = { correct: 1, right: 1, accurate: 1, precise: .5, wrong: 0, incorrect: 0, mistaken: 0, faulty: 0 };
    const WHAT = { correct: '정답 · 사실과 맞음', right: '맞음 · 알맞음', accurate: '실제 값과 맞음', precise: '세밀함 (맞는지는 따로)', wrong: '틀림 · 옳지 않음', incorrect: '답 · 정보가 다름', mistaken: '사람이 잘못 앎', faulty: '물건에 결함' };
    const TC = (v) => v === 1 ? GN : v ? OR : RD;
    const ARROW = (x, y) => l('M' + x + ' ' + y + ' l14 -14', 3, BR) + f('M' + (x + 14) + ' ' + (y - 14) + ' l4 -8 l4 4 z', RD);
    const TARGET = (id) => { const v = OK[id];
      let s = [44, 32, 20, 8].map((r, i) => '<circle cx="62" cy="120" r="' + r + '" fill="' + (i % 2 ? '#fff' : '#f4a0a0') + '" stroke="#222" stroke-width="1.5"/>').join('');
      if (id === 'precise') s += [[90, 86], [94, 90], [88, 92]].map(([x, y]) => ARROW(x, y)).join('');
      else if (id === 'faulty') s += l('M80 180 l14 -14', 3, BR) + l('M100 168 l8 -4', 3, BR) + t(96, 196, 12, '뚝', RD);
      else if (id === 'mistaken') s += ARROW(100, 70) + g(18, 200, 0, .26, MAN(BL, 'smile')) + t(40, 46, 12, '저게 맞지?', '#888');
      else s += v ? ARROW(62, 120) : ARROW(100, 62);
      if (id === 'accurate') s += l('M62 66 v-10', 2, GN) + t(62, 52, 11, '실제 값', GN);
      return s + t(62, 226, 12, v === 1 ? '한가운데' : v ? '촘촘히 모임' : '빗나감', TC(v)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + TARGET(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 8 ? 13 : 16, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(OK[id]));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { correct: P('correct', '딩동댕'), right: P('right', '그렇지'), accurate: P('accurate', '딱 맞아'), precise: P('precise', '촘촘'), wrong: P('wrong', '땡'), incorrect: P('incorrect', '불일치'), mistaken: P('mistaken', '착각'), faulty: P('faulty', '고장') };
    // 작은 그림들
    const EXAM = (x, y, mark, c) => f('M' + (x - 40) + ' ' + (y - 40) + ' h80 v80 h-80 z', '#fff', 2) + t(x - 10, y - 10, 14, '3 + 4 =', BL) + t(x + 26, y - 10, 14, mark === '✔' ? '7' : '8', BL) + t(x + 20, y + 26, 26, mark, c);
    const ROADS = () => l('M75 238 V150 L30 60 M75 150 L120 60', 6, '#888');
    const SCALEK = (x, y) => f('M' + (x - 34) + ' ' + y + ' h68 v10 h-68 z', '#ccc') + f('M' + (x - 20) + ' ' + (y + 10) + ' h40 v20 h-40 z', '#eee') + t(x, y + 26, 11, '500g', GN);
    const RULER = (x, y) => f('M' + (x - 50) + ' ' + (y - 6) + ' h100 v12 h-100 z', GD) + Array.from({ length: 11 }, (_, i) => l('M' + (x - 50 + i * 10) + ' ' + (y - 6) + ' v' + (i % 5 ? 5 : 9), 1.5)).join('');
    const ENVA = (x, y) => f('M' + (x - 34) + ' ' + (y - 22) + ' h68 v44 h-68 z', '#fff') + l('M' + (x - 34) + ' ' + (y - 22) + ' l34 24 l34 -24', 2.5) + t(x, y + 14, 10, '서울시 …', BL);
    const LOGIN = (x, y) => f('M' + (x - 44) + ' ' + (y - 34) + ' h88 v68 h-88 z', '#fff', 2) + f('M' + (x - 34) + ' ' + (y - 14) + ' h68 v14 h-68 z', '#eee', 1.5) + t(x, y - 3, 11, '••••', '#555');
    const CHARGER = (x, y) => f('M' + (x - 14) + ' ' + (y - 20) + ' h28 v26 h-28 z', '#fff') + l('M' + x + ' ' + (y + 6) + ' q0 30 30 30', 3) + t(x + 34, y + 40, 12, '⚡✕', RD);
    const CAL = (x, y, d) => f('M' + (x - 30) + ' ' + (y - 30) + ' h60 v60 h-60 z', '#fff') + f('M' + (x - 30) + ' ' + (y - 30) + ' h60 v14 h-60 z', RD) + t(x, y + 16, 18, d);
    const C = {
      correct: { n: 'correct', past: 'correct', en: 'Your answer is correct.', ko: '네 답이 맞았다.', feel: '<b>정답 · 사실과 맞다.</b> right보다 조금 격식.', t: .2,
        p: [[150, '시험지', () => EXAM(75, 130, '✔', GN)], [280, '한가운데', () => W.correct()], [150, '"맞았다!"', () => A(75, OR, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .6)]] },
      right: { n: 'right', past: 'right', en: 'This is the right way.', ko: '이게 맞는 길이다.', feel: '<b>맞다 · 알맞다.</b> 말할 때 가장 흔하다.', t: .2,
        p: [[150, '갈림길', () => ROADS()], [280, '한가운데', () => W.right()], [150, '"이쪽이야"', () => ROADS() + A(75, BL, 'smile', 'M18 -92 L46 -120', .5)]] },
      accurate: { n: 'accurate', past: 'accurate', en: 'The estimate was accurate.', ko: '어림값이 실제와 맞았다.', feel: '<b>예측 · 정보가 실제와 맞다.</b>', t: .2,
        p: [[150, '"사과 열 개쯤?"', () => [0, 1, 2, 3, 4].map((i) => '<circle cx="' + (40 + i * 17) + '" cy="180" r="8" fill="' + RD + '"/>').join('') + t(75, 120, 16, '≈ 10?', BL)], [280, '실제 값과 맞음', () => W.accurate()], [150, '세어 보니 10', () => t(75, 130, 40, '10', GN)]] },
      precise: { n: 'precise', past: 'precise', en: 'The measurements must be precise.', ko: '치수는 세밀해야 한다.', feel: '<b>수치 · 표현이 세밀하다.</b> 세밀해도 틀릴 수 있다.', t: .1,
        p: [[150, '가구 만들기', () => RULER(75, 140)], [280, '세밀함', () => W.precise()], [150, '0.1mm까지', () => '<circle cx="75" cy="120" r="30" fill="#fff" stroke="#555" stroke-width="5"/>' + RULER(75, 120) + l('M96 142 l20 20', 6, '#555')]] },
      wrong: { n: 'wrong', past: 'wrong', en: 'Your answer is wrong.', ko: '네 답이 틀렸다.', feel: '<b>틀렸다 · 잘못됐다.</b> 옳지 않다(도덕)는 뜻도. w는 소리 안 남.', t: .3,
        p: [[150, '시험지', () => EXAM(75, 130, '✕', RD)], [280, '빗나감', () => W.wrong()], [150, '다시 풀어 본다', () => A(75, OR, 'stern', 'M18 -92 L40 -60', .6)]] },
      incorrect: { n: 'incorrect', past: 'incorrect', en: 'The address is incorrect.', ko: '주소가 맞지 않는다.', feel: '<b>답 · 정보가 다르다.</b> 중립적이고 격식 있다.', t: .3,
        p: [[150, '택배 상자', () => PKG(75, 190, 1.4) + ENVA(75, 110)], [280, '정보가 다름', () => W.incorrect()], [150, '돌아온 택배', () => PKG(75, 200, 1.2) + l('M110 140 q20 -20 0 -40', 3, RD) + f('M106 100 l-6 4 l8 4 z', RD)]] },
      mistaken: { n: 'mistaken', past: 'mistaken', en: 'I was mistaken about who he was.', ko: '나는 그가 누구인지 착각했다.', feel: '<b>사람이</b> 잘못 알았다. 조금 격식.', t: .5,
        p: [[150, '"민수야!"', () => A(40, MN, 'smile', 'M18 -92 L40 -126', .55) + A(110, BR, 'calm', null, .55)], [280, '사람이 잘못 앎', () => W.mistaken()], [150, '"아, 죄송해요"', () => A(75, MN, 'phew', null, .8)]] },
      faulty: { n: 'faulty', past: 'faulty', en: 'The wiring is faulty.', ko: '배선에 결함이 있다.', feel: '<b>장치 · 설계에 결함</b>이 있다.', t: .4,
        p: [[150, '깜빡이는 전등', () => DARK(150, '#2b3550') + BULB(75, 90, .8) + t(120, 60, 14, '깜빡', GD)], [280, '물건에 결함', () => W.faulty()], [150, '전기 기사', () => A(75, GD, 'stern', 'M18 -92 L40 -120', .8) + l('M110 60 q10 20 -6 30', 3, RD)]] }
    };
    const MORE = {
      correct: [
        { b: '철자', en: 'Is this spelling correct?', ko: '이 철자 맞아?', feel: '<b>정답과 맞는지</b> 묻는다.', p: [[150, '영어 일기', () => DOC(75, 130, 1.6)], [280, '정답과 맞음?', () => W.correct()], [150, '사전을 펼친다', () => BOOK(75, 140, .6)]] },
        { b: '시간', en: 'The clock shows the correct time.', ko: '시계가 정확한 시간을 가리킨다.', feel: '<b>사실과 맞다.</b>', p: [[150, '방송 시보', () => t(75, 120, 18, '삐 삐 삐 —', BL)], [280, '사실과 맞음', () => W.correct(CLK(196, 140, 24, GN))], [150, '딱 맞다', () => CLK(75, 110, 36, GN) + t(75, 180, 16, '12:00', GN)]] }],
      right: [
        { b: '열쇠', en: 'Is this the right key?', ko: '이게 맞는 열쇠야?', feel: '<b>알맞은</b> 것인지 묻는다.', p: [[150, '열쇠 꾸러미', () => [0, 1, 2, 3].map((i) => KEYI(40 + i * 24, 140, .4)).join('')], [280, '알맞음?', () => W.right()], [150, '찰칵', () => BOXG(60, 60, 60, 178, '#c9a171') + KEYI(70, 160, .4) + t(120, 60, 14, '찰칵', GN)]] },
        { b: '옳은 일', en: 'It was the right thing to do.', ko: '그건 옳은 일이었다.', feel: '마음으로도 <b>맞는</b> 선택.', p: [[150, '지갑 주움', () => f('M50 220 h40 v16 h-40 z', BR) + A(110, OR, 'calm', null, .5)], [280, '옳음', () => W.right()], [150, '주인에게', () => A(45, OR, 'smile', 'M18 -92 L46 -80', .55) + A(110, '#888', 'smile', null, .55)]] }],
      accurate: [
        { b: '저울', en: 'This scale is accurate.', ko: '이 저울은 정확하다.', feel: '수치가 <b>실제와 맞다.</b>', p: [[150, '버터 500g', () => f('M50 150 h50 v30 h-50 z', GD) + t(75, 140, 12, '500g', BR)], [280, '실제 값과 맞음', () => W.accurate()], [150, '딱 500g', () => SCALEK(75, 170)]] },
        { b: '예보', en: 'The weather forecast was accurate.', ko: '일기 예보가 정확했다.', feel: '예측이 <b>실제와 맞았다.</b>', p: [[150, '"오후 3시 비"', () => BOXG(20, 40, 110, 70, '#cfe6f5') + t(75, 84, 14, '15:00 ☂', BL)], [280, '실제와 맞음', () => W.accurate()], [150, '3시 정각, 후두둑', () => CLK(110, 50, 20) + l('M20 80 l-6 20 M60 90 l-6 20', 3, WT) + A(60, BL, 'shock', 'M18 -92 L22 -130', .5)]] }],
      precise: [
        { b: '시각', en: 'Give me the precise time.', ko: '정확한 시각을 알려 줘.', feel: '<b>세밀하게</b> 말해 달라.', p: [[150, '"몇 시쯤?"', () => A(75, BL, 'calm', null, .8)], [280, '세밀함', () => W.precise(t(196, 140, 18, '3:07:42', BL))], [150, '초까지 말한다', () => A(75, MN, 'smile', 'M18 -92 L22 -122', .8) + t(124, 50, 12, '42초', OR)]] },
        { b: '지시', en: 'Her instructions were precise.', ko: '그녀의 지시는 세밀했다.', feel: '말이 <b>세밀하다.</b>', p: [[150, '"왼쪽 둘째 칸, 3cm 아래"', () => A(75, MN, 'stern', 'M18 -92 L40 -100', .8)], [280, '세밀함', () => W.precise()], [150, '그대로 한다', () => RULER(75, 160) + A(120, BL, 'calm', null, .4)]] }],
      wrong: [
        { b: '버스', en: 'I took the wrong bus.', ko: '버스를 잘못 탔다.', feel: '<b>틀린</b> 쪽으로 왔다.', p: [[150, '버스 정류장', () => BUS(-10, 220, .6)], [280, '빗나감', () => W.wrong()], [150, '"여기가 어디지?"', () => TREEC(110, .5) + A(50, BL, 'shock', null, .6)]] },
        { b: '도덕', en: 'Stealing is wrong.', ko: '훔치는 건 옳지 않다.', feel: '도덕으로도 <b>틀렸다.</b>', p: [[150, '가게 앞 사과', () => f('M20 170 h110 v8 h-110 z', '#a3743f') + [40, 75, 110].map((x) => '<circle cx="' + x + '" cy="160" r="10" fill="' + RD + '"/>').join('')], [280, '옳지 않음', () => W.wrong()], [150, '손을 거둔다', () => A(75, OR, 'stern', 'M18 -92 L4 -60', .6)]] }],
      incorrect: [
        { b: '비밀번호', en: 'The password is incorrect.', ko: '비밀번호가 맞지 않습니다.', feel: '정보가 <b>다르다.</b>', p: [[150, '로그인', () => LOGIN(75, 130)], [280, '정보가 다름', () => W.incorrect()], [150, '다시 입력', () => LOGIN(75, 130) + t(75, 200, 14, '✕', RD)]] },
        { b: '정보', en: 'The website has incorrect information.', ko: '그 웹사이트 정보가 틀렸다.', feel: '적힌 정보가 <b>사실과 다르다.</b>', p: [[150, '"월요일 휴무"', () => g(75, 130, 0, 2, PH)], [280, '정보가 다름', () => W.incorrect()], [150, '월요일에 왔는데 영업 중', () => BOXG(20, 100, 110, 138, '#f2d59a') + A(75, MN, 'shock', null, .4)]] }],
      mistaken: [
        { b: '날짜', en: 'I was mistaken about the date.', ko: '날짜를 착각했다.', feel: '<b>내가</b> 잘못 알았다.', p: [[150, '"오늘이 생일이지?"', () => CAL(75, 130, '12')], [280, '사람이 잘못 앎', () => W.mistaken()], [150, '"…내일이었네"', () => CAL(75, 130, '13') + A(130, MN, 'phew', null, .4)]] },
        { b: '오해', en: 'He was mistaken in thinking she was angry.', ko: '그는 그녀가 화났다고 잘못 생각했다.', feel: '마음을 <b>잘못 읽었다.</b>', p: [[150, '말이 없다', () => A(45, BL, 'calm', null, .55) + A(110, MN, 'calm', null, .55)], [280, '사람이 잘못 앎', () => W.mistaken()], [150, '"그냥 졸렸어"', () => A(75, MN, 'down', null, .8) + ZZ(100, 90)]] }],
      faulty: [
        { b: '충전기', en: 'The charger is faulty.', ko: '충전기에 결함이 있다.', feel: '물건이 <b>제대로 안 된다.</b>', p: [[150, '밤새 충전', () => DARK(150, '#2b3550') + g(75, 130, 0, 2, PH)], [280, '물건에 결함', () => W.faulty(CHARGER(186, 130))], [150, '배터리 1%', () => g(75, 130, 0, 2, PH) + t(75, 200, 14, '1%', RD)]] },
        { b: '논리', en: 'His logic is faulty.', ko: '그의 논리에는 결함이 있다.', feel: '생각의 <b>연결에 결함</b>이 있다.', p: [[150, '"새는 난다. 펭귄은 새다…"', () => A(75, BR, 'smile', 'M18 -92 L40 -120', .8)], [280, '연결에 결함', () => W.faulty(l('M150 130 h30 M196 130 h30', 4, BL) + t(188, 136, 16, '✕', RD))], [150, '펭귄은 못 난다', () => f('M60 200 q15 -60 30 0 z', '#222') + '<ellipse cx="75" cy="186" rx="10" ry="14" fill="#fff"/>']] }]
    };
    const CORE = { correct: '<b>정답 · 사실과 맞다.</b>', right: '<b>맞다 · 알맞다.</b>', accurate: '<b>실제와 맞다.</b>', precise: '<b>세밀하다.</b>', wrong: '<b>틀렸다 · 옳지 않다.</b>', incorrect: '<b>답 · 정보가 다르다.</b>', mistaken: '<b>사람이 잘못 알았다.</b>', faulty: '<b>물건에 결함이 있다.</b>' };
