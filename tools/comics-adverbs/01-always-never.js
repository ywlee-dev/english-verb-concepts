    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 부사의 느낌이다. 장면 1은 노트의 "Mina ___ walks to school." 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 일주일 달력이다 — 몇 칸이 찼는지만 바뀐다. 비율은 그림을 위한 것이고, usually가 80%라는 뜻은 아니다(노트).
    const WORD = '부사', BASE = '', FIRST = 'usually', BASIC_B = '걸어서 학교';
    const FX = { never: [.5, 200, 120, .3, .6], rarely: [.15, 900, 900, .2, .6], sometimes: [.15, 1200, 1200, .2, .5], often: [.08, 1400, 1400, .25, .4], usually: [.08, 1600, 1600, .25, .4], always: [.05, 1800, 1800, .3, .3] };
    const ORDER = MIX(['never', 'rarely', 'sometimes', 'often', 'usually', 'always']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b';
    const PAT = { always: [1, 1, 1, 1, 1, 1, 1], usually: [1, 1, 1, 0, 1, 1, 1], often: [1, 0, 1, 1, 0, 1, 0], sometimes: [0, 1, 0, 0, 1, 0, 0], rarely: [0, 0, 0, 1, 0, 0, 0], never: [0, 0, 0, 0, 0, 0, 0] };
    const WALK = (x, y) => g(x, y, 0, .22, MAN(MN, 'smile', null, 'M-10 -42 L-24 0 M10 -42 L22 0'));
    const WEEK = (id, ic, z, c) => { const p = PAT[id], n = p.reduce((a, b) => a + b, 0);
      return DARK(280, '#f6f4ee') + ['월', '화', '수', '목', '금', '토', '일'].map((d, i) => t(29 + i * 38, 100, 13, d, '#666') + BOXG(12 + i * 38, 108, 34, 70, p[i] ? '#fff6e0' : '#eee') + (p[i] ? (ic || WALK)(29 + i * 38, 170) : t(29 + i * 38, 150, 18, '·', '#bbb'))).join('') +
        t(140, 206, 16, n + ' / 7', c || OR) + sfx(140, 56, 26, z, '', c || OR); };
    const S = (id, z, c) => (ic) => WEEK(id, ic, z, c);
    const BUSI = (x, y) => BOXG(x - 12, y - 22, 24, 18, '#3a9a6a') + '<circle cx="' + (x - 6) + '" cy="' + (y - 2) + '" r="3"/><circle cx="' + (x + 6) + '" cy="' + (y - 2) + '" r="3"/>';
    const CUP = (x, y) => f('M' + (x - 8) + ' ' + (y - 24) + ' h16 l-2 20 h-12 z', '#fff') + l('M' + (x - 3) + ' ' + (y - 30) + ' q-2 -6 0 -10', 2, '#bbb');
    const FLAKE = (x, y) => t(x, y - 6, 20, '*', '#4a7fb5');
    const HRT = (x, y) => t(x, y - 6, 18, '♥', RD);
    const PIZ = (x, y) => f('M' + (x - 12) + ' ' + (y - 4) + ' l12 -24 l12 24 z', '#f2b632');
    const DOG = (x, y) => t(x, y - 6, 12, '멍!', BR);
    const MOONI = (x, y) => MOON(x, y - 14, .5);
    const W = { never: S('never', '한 번도', '#888'), rarely: S('rarely', '드물게', BL), sometimes: S('sometimes', '가끔', GN), often: S('often', '자주', OR), usually: S('usually', '대체로', OR), always: S('always', '매일매일', RD) };
    const sch = (x) => f('M' + (x - 30) + ' 230 v-60 l30 -26 l30 26 v60 z', '#e9e0c8') + BOXG(x - 8, 200, 16, 30, '#a3743f');
    const C = {
      never: { n: 'never', past: 'never', en: 'Mina never walks to school.', ko: '미나는 학교에 한 번도 걸어가지 않는다.', feel: '<b>한 번도 없다.</b> 칸이 다 비었다. never 안에 "않다"가 있다.', t: .6,
        p: [[150, '집이 멀다', () => A(40, MN, 'calm', null, .6) + sch(110)], [280, '빈 칸뿐', () => W.never()], [150, '날마다 버스', () => BUS(-10, 220, .6) + A(120, MN, 'calm', null, .4)]] },
      rarely: { n: 'rarely', past: 'rarely', en: 'Mina rarely walks to school.', ko: '미나는 학교에 걸어가는 일이 드물다.', feel: '<b>거의 없다.</b> 일주일에 한 칸. "잘 안 한다"가 들어 있다.', t: .5,
        p: [[150, '보통은 버스', () => BUS(-10, 220, .6)], [280, '한 칸만', () => W.rarely()], [150, '목요일엔 걷는다', () => A(75, MN, 'smile', null, .8, 'M-10 -42 L-24 0 M10 -42 L22 0') + SUN(120, 40, 16)]] },
      sometimes: { n: 'sometimes', past: 'sometimes', en: 'Mina sometimes walks to school.', ko: '미나는 가끔 학교에 걸어간다.', feel: '<b>그런 때도 있다.</b> 꼭 드물다는 뜻은 아니다.', t: .5,
        p: [[150, '날씨 좋은 날', () => SUN(110, 40, 18) + A(60, MN, 'smile', null, .7)], [280, '띄엄띄엄 두 칸', () => W.sometimes()], [150, '오늘은 걷자', () => A(75, MN, 'smile', null, .8, 'M-10 -42 L-24 0 M10 -42 L22 0') + sch(130)]] },
      often: { n: 'often', past: 'often', en: 'Mina often walks to school.', ko: '미나는 자주 학교에 걸어간다.', feel: '<b>자주.</b> 절반이라는 뜻은 아니다.', t: .4,
        p: [[150, '걷는 게 좋다', () => A(75, MN, 'smile', null, .8, 'M-10 -42 L-24 0 M10 -42 L22 0')], [280, '칸이 많이 찼다', () => W.often()], [150, '길가 꽃을 안다', () => '<circle cx="75" cy="160" r="14" fill="#f4c6d0" stroke="#222" stroke-width="2"/>' + l('M75 174 v40', 4, '#3a9a6a')]] },
      usually: { n: 'usually', past: 'usually', en: 'Mina usually walks to school.', ko: '미나는 대체로 학교에 걸어간다.', feel: '<b>보통은 그렇다.</b> 빠지는 날도 있다.', t: .4,
        p: [[150, '걸어가는 길', () => A(75, MN, 'smile', null, .8, 'M-10 -42 L-24 0 M10 -42 L22 0') + sch(130)], [280, '거의 다 찼다', () => W.usually()], [150, '비 오는 날만 버스', () => [30, 70, 110].map((x) => l('M' + x + ' 30 l-6 24', 4, '#4a7fb5')).join('') + BUS(-10, 220, .6)]] },
      always: { n: 'always', past: 'always', en: 'Mina always walks to school.', ko: '미나는 항상 학교에 걸어간다.', feel: '<b>매번.</b> 칸이 꽉 찼다. "아주 자주"라는 뜻도 된다.', t: .3,
        p: [[150, '비가 와도', () => [30, 70, 110].map((x) => l('M' + x + ' 30 l-6 24', 4, '#4a7fb5')).join('') + A(75, MN, 'smile', 'M18 -92 L30 -130', .8, 'M-10 -42 L-24 0 M10 -42 L22 0')], [280, '칸이 꽉 찼다', () => W.always()], [150, '개근상', () => STAR(75, 110, 34) + t(75, 190, 14, '개근', RD)]] } };
    const MORE = {
      never: [
        { b: '커피', en: 'Grandpa never drinks coffee.', ko: '할아버지는 커피를 한 번도 안 드신다.', feel: '<b>한 번도 없다.</b>', p: [[150, '"커피 드릴까요?"', () => A(75, '#888', 'calm') + CUP(120, 110)], [280, '빈 칸뿐', () => W.never(CUP)], [150, '보리차만', () => A(60, '#888', 'smile', null, .7) + f('M100 150 h30 l-4 40 h-22 z', '#d8b070')]] },
        { b: '친절', en: 'I will never forget your kindness.', ko: '당신의 친절을 절대 잊지 않을 거예요.', feel: '앞으로도 <b>한 칸도</b> 빠지지 않는다 — 잊는 칸이 없다.', p: [[150, '도움을 받았다', () => A(40, ME, 'sad', null, .55) + A(110, MN, 'smile', 'M-18 -92 L-36 -76', .55)], [280, '빈 칸뿐', () => W.never(() => '')], [150, '"고마워"', () => A(75, ME, 'smile') + t(116, 50, 22, '♥', RD)]] }],
      rarely: [
        { b: '눈', en: 'It rarely snows here.', ko: '여기는 눈이 거의 안 온다.', feel: '<b>거의 없다.</b>', p: [[150, '따뜻한 남쪽 마을', () => SUN(110, 40, 22) + TREEC(60, .5)], [280, '한 칸만', () => W.rarely(FLAKE)], [150, '눈이다!', () => [30, 70, 110, 50, 95].map((x, i) => t(x, 40 + i * 30, 20, '*', '#4a7fb5')).join('') + A(75, ME, 'shock', null, .6)]] },
        { b: '속마음', en: 'He rarely shows his feelings.', ko: '그는 속마음을 거의 안 드러낸다.', feel: '마음도 <b>드물게만</b> 보인다.', p: [[150, '늘 덤덤', () => A(75, BR, 'calm')], [280, '한 칸만', () => W.rarely(HRT)], [150, '오늘은 울컥', () => A(75, BR, 'sad') + l('M66 128 v14', 3, '#4a7fb5')]] }],
      sometimes: [
        { b: '피자', en: 'We sometimes eat pizza for dinner.', ko: '우리는 가끔 저녁으로 피자를 먹는다.', feel: '<b>그런 때도</b> 있다.', p: [[150, '저녁 뭐 먹지', () => A(75, ME, 'calm') + t(120, 50, 20, '?', '#888')], [280, '띄엄띄엄 두 칸', () => W.sometimes(PIZ)], [150, '피자 데이', () => '<circle cx="75" cy="150" r="40" fill="#f2b632" stroke="#222" stroke-width="3"/>' + [60, 90, 75].map((x, i) => '<circle cx="' + x + '" cy="' + (136 + i * 14) + '" r="6" fill="' + RD + '"/>').join('')]] },
        { b: '외로움', en: 'I sometimes feel lonely.', ko: '나는 가끔 외롭다.', feel: '마음도 <b>그런 날이</b> 있다.', p: [[150, '창가', () => BOXG(80, 40, 50, 60, '#cfe6f5') + A(50, ME, 'calm', null, .7)], [280, '띄엄띄엄 두 칸', () => W.sometimes(MOONI)], [150, '친구에게 전화', () => A(75, ME, 'smile', 'M18 -92 L30 -126') + g(102, 100, 0, .8, PH)]] }],
      often: [
        { b: '강아지', en: 'My dog often barks at the mailman.', ko: '우리 강아지는 집배원에게 자주 짖는다.', feel: '<b>자주.</b>', p: [[150, '집배원이 온다', () => A(75, '#2b5a8a', 'smile', null, .8) + ENV(120, 100, .7)], [280, '칸이 많이 찼다', () => W.often(DOG)], [150, '"또 너구나"', () => A(75, '#2b5a8a', 'phew') + BEAR(120, 210, .6)]] },
        { b: '할머니', en: 'She often thinks about her grandma.', ko: '그녀는 할머니 생각을 자주 한다.', feel: '생각도 <b>자주</b> 찾아온다.', p: [[150, '할머니 사진', () => BOXG(40, 70, 70, 80, '#fff') + g(75, 110, 0, .6, HEAD('smile'))], [280, '칸이 많이 찼다', () => W.often(HRT)], [150, '주말에 찾아간다', () => A(45, MN, 'smile', null, .6) + A(105, '#888', 'smile', null, .6)]] }],
      usually: [
        { b: '잠', en: 'I usually go to bed at ten.', ko: '나는 대체로 열 시에 잔다.', feel: '<b>보통은</b> 그렇다.', p: [[150, '밤 10시', () => DARK(150, '#2b3550') + CLK(75, 100, 30)], [280, '거의 다 찼다', () => W.usually(MOONI)], [150, '금요일만 늦게', () => DARK(150, '#2b3550') + f('M30 90 h90 v60 h-90 z', '#cfe6f5') + A(75, ME, 'smile', null, .45)]] },
        { b: '정직', en: 'He usually tells the truth.', ko: '그는 대체로 사실대로 말한다.', feel: '마음 버릇도 <b>보통은</b> 그렇다.', p: [[150, '"누가 깼니?"', () => A(75, '#a8741a', 'stern') + BUB(80, 40, 80, '누가 깼니?', 13)], [280, '거의 다 찼다', () => W.usually(() => '') + [0, 1, 2, 4, 5, 6].map((i) => t(29 + i * 38, 160, 16, '✓', GN)).join('')], [150, '"제가요"', () => A(75, BR, 'sad', 'M18 -92 L30 -126') + BUB(80, 40, 70, '제가요', 14)]] }],
      always: [
        { b: '해', en: 'The sun always rises in the east.', ko: '해는 언제나 동쪽에서 뜬다.', feel: '<b>매번, 빠짐없이.</b>', p: [[150, '새벽', () => DARK(150, '#2b3550') + l('M0 180 h150', 3, '#888')], [280, '칸이 꽉 찼다', () => W.always((x, y) => SUN(x, y - 16, 10))], [150, '동쪽 하늘', () => DARK(150, '#f6d6b0') + SUN(40, 170, 26) + t(40, 230, 14, '동')]] },
        { b: '엄마', en: 'Mom always believes in me.', ko: '엄마는 언제나 나를 믿어 준다.', feel: '마음도 <b>한 칸도 빠짐없이</b> 이어진다.', p: [[150, '시험을 망쳤다', () => A(75, ME, 'sad') + t(120, 50, 20, '35', RD)], [280, '칸이 꽉 찼다', () => W.always(HRT)], [150, '"넌 할 수 있어"', () => A(45, '#a8741a', 'smile', 'M18 -92 L36 -76', .6) + A(105, ME, 'smile', null, .6)]] }] };
    const CORE = { never: '<b>한 번도 없다.</b>', rarely: '<b>거의 없다.</b>', sometimes: '<b>그런 때도 있다.</b>', often: '<b>자주.</b>', usually: '<b>보통은.</b>', always: '<b>매번.</b>' };
