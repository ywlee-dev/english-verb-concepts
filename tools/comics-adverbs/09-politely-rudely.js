    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 부사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "말하는 사람 → 말풍선 → 듣는 사람"이다 — 말풍선 모양(둥근가, 가시 돋쳤나)과 오른쪽 위 꼬리표가 결을 보여 준다. respectfully는 속마음이 아니라 드러난 태도다.
    const WORD = '부사', BASE = '', FIRST = 'insolently', BASIC_B = '부탁하기';
    const FX = { politely: [.4, 900, 1000, .12, .6], courteously: [.6, 800, 900, .12, .6], respectfully: [.6, 600, 700, .12, .6], rudely: [.15, 400, 250, .45, .5], impolitely: [.1, 1400, 900, .35, .4], insolently: [.3, 700, 400, .3, .6] };
    const ORDER = MIX(['politely', 'courteously', 'respectfully', 'rudely', 'impolitely', 'insolently']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b';
    const TAG = { politely: '예의 갖춤', courteously: '정중한 응대', respectfully: '존중 드러냄', rudely: '예의 없음', impolitely: '말 끊기 · 결례', insolently: '건방짐' };
    const MANNER = (id, txt, sp, ls) => { const good = ['politely', 'courteously', 'respectfully'].includes(id), c = good ? GN : RD;
      const rx = Math.max(66, txt.length * 7.5), bub = good ? '<ellipse cx="140" cy="100" rx="' + rx + '" ry="26" fill="#fff" stroke="' + c + '" stroke-width="3"/>' : SPIKE(140, 100, Math.max(150, txt.length * 15), 64, '#fff');
      const lean = id === 'courteously' ? 10 : id === 'politely' ? 4 : id === 'insolently' ? -6 : 0;
      return DARK(280, good ? '#f2f8f2' : '#fbf0ee') + g(46, 236, lean, .55, MAN(sp || MN, good ? 'smile' : id === 'insolently' ? 'stern' : 'stern', id === 'rudely' ? 'M18 -92 L46 -100' : null)) + g(236, 236, 0, .55, MAN(ls || BR, good ? 'smile' : 'sad')) + bub + t(140, 106, txt.length > 9 ? 12 : 14, txt, good ? '#222' : RD) +
        (id === 'impolitely' ? '<ellipse cx="226" cy="150" rx="40" ry="16" fill="#fff" stroke="#999" stroke-width="2"/>' + t(226, 155, 11, '그래서 내가…', '#999') + l('M190 140 l20 20', 4, RD) : '') + BOXG(190, 20, 84, 26, '#fff') + t(232, 38, 12, TAG[id], c); };
    const P = (id, d) => (txt, sp, ls) => MANNER(id, txt || d, sp, ls);
    const W = { politely: P('politely', '빌려주실래요?'), courteously: P('courteously', '어서 오세요'), respectfully: P('respectfully', '제 생각은 달라요'), rudely: P('rudely', '야, 내놔'), impolitely: P('impolitely', '아니 근데'), insolently: P('insolently', '흥, 그래서요?') };
    const C = {
      politely: { n: 'politely', past: 'politely', en: 'Mina asked politely.', ko: '미나가 예의 바르게 물었다.', feel: '<b>예의를 갖춰</b> 대한다. 말풍선이 둥글다.', t: .5,
        p: [[150, '연필이 없다', () => A(75, MN, 'calm') + t(116, 50, 20, '?', '#888')], [280, '둥근 말풍선', () => W.politely()], [150, '"그럼요"', () => A(75, BR, 'smile', 'M18 -92 L40 -80') + BUB(80, 40, 60, '그럼요', 14)]] },
      courteously: { n: 'courteously', past: 'courteously', en: 'The staff greeted us courteously.', ko: '직원이 우리를 정중하게 맞이했다.', feel: '<b>손님을 정중히</b> 맞는다. 몸이 더 숙여진다.', t: .6,
        p: [[150, '식당 문', () => BOXG(40, 60, 70, 170, '#a3743f')], [280, '정중히 숙인다', () => W.courteously(null, '#2b3550')], [150, '편안한 자리', () => TBL(20, 170, 110) + [40, 110].map((x) => A(x, BR, 'smile', null, .45)).join('')]] },
      respectfully: { n: 'respectfully', past: 'respectfully', en: 'I respectfully disagree.', ko: '저는 존중하는 마음으로 반대합니다.', feel: '<b>생각은 달라도 존중을 드러낸다.</b>', t: .6,
        p: [[150, '"A가 맞아"', () => A(75, BR, 'smile', 'M18 -92 L40 -126') + BUB(80, 40, 70, 'A가 맞아', 13)], [280, '둥근 말풍선', () => W.respectfully()], [150, '악수', () => A(46, MN, 'smile', 'M18 -92 L36 -76', .6) + A(104, BR, 'smile', 'M-18 -92 L-36 -76', .6)]] },
      rudely: { n: 'rudely', past: 'rudely', en: 'Tom asked rudely.', ko: '톰이 무례하게 물었다.', feel: '<b>예의 없이</b> 대한다. 말풍선에 가시가 돋쳤다.', t: .3,
        p: [[150, '연필이 없다', () => A(75, ME, 'stern') + t(116, 50, 20, '?', '#888')], [280, '가시 돋친 말풍선', () => W.rudely(null, ME)], [150, '"……"', () => A(75, BR, 'sad') + t(116, 50, 20, '…', '#888')]] },
      impolitely: { n: 'impolitely', past: 'impolitely', en: 'He interrupted her impolitely.', ko: '그가 그녀의 말을 예의 없이 끊었다.', feel: '<b>예의 없는 말 · 행동.</b> 일부러인지는 모른다.', t: .2,
        p: [[150, '이야기 중', () => A(75, MN, 'smile') + BUB(80, 40, 90, '그래서 내가…', 12)], [280, '말을 끊는다', () => W.impolitely(null, BR, MN)], [150, '말이 멈췄다', () => A(75, MN, 'stern') + t(116, 50, 20, '…', '#888')]] },
      insolently: { n: 'insolently', past: 'insolently', en: 'He answered insolently.', ko: '그가 건방지게 대답했다.', feel: '<b>건방지고 존중이 없다.</b> 센 평가다.', t: .5,
        p: [[150, '"뛰지 마라"', () => A(75, '#556', 'stern', 'M18 -92 L40 -110') + BUB(80, 40, 80, '뛰지 마라', 13)], [280, '턱을 든다', () => W.insolently(null, ME, '#556')], [150, '교무실로', () => f('M40 60 h70 v170 h-70 z', '#a3743f') + t(75, 50, 14, '교무실', '#666')]] } };
    const MORE = {
      politely: [
        { b: '문', en: 'He politely held the door for her.', ko: '그가 예의 바르게 문을 잡아 주었다.', feel: '<b>예의를 갖춰.</b>', p: [[150, '짐이 많은 할머니', () => A(75, '#888', 'shock') + PKG(116, 170, .8)], [280, '둥근 말풍선', () => W.politely('먼저 가세요', BR, '#888')], [150, '"고마워요"', () => A(75, '#888', 'smile') + BUB(80, 40, 70, '고마워요', 14)]] },
        { b: '실망', en: 'She politely hid her disappointment.', ko: '그녀는 예의상 실망을 감췄다.', feel: '마음도 <b>예의를 갖춰</b> 다룬다.', p: [[150, '이상한 선물', () => PKG(75, 150, 1.4) + t(75, 90, 20, '양말?', '#888')], [280, '둥근 말풍선', () => W.politely('와, 고마워!', MN, BR)], [150, '속으로는 …', () => A(75, MN, 'smile') + t(116, 50, 14, '(…)', '#888')]] }],
      courteously: [
        { b: '버스 기사', en: 'The driver courteously waited for us.', ko: '기사님이 정중하게 우리를 기다려 주었다.', feel: '<b>정중한 응대.</b>', p: [[150, '뛰어간다', () => A(75, MN, 'shock', null, .88, 'M-10 -42 L-24 0 M10 -42 L22 0') + BUS(80, 220, .4)], [280, '정중히 숙인다', () => W.courteously('천천히 타세요', '#2b5a8a')], [150, '"감사합니다"', () => BUS(-10, 220, .6) + t(75, 60, 14, '감사합니다', GN)]] },
        { b: '화난 메일', en: 'He replied courteously to an angry email.', ko: '그는 화난 메일에 정중하게 답했다.', feel: '거친 말에도 <b>정중히.</b>', p: [[150, '화난 메일', () => ENV(75, 110, 1.6) + SPIKE(110, 60, 40, 30, RD)], [280, '정중히 숙인다', () => W.courteously('불편을 드려 죄송합니다', BR, '#556')], [150, '"이해합니다"', () => ENV(75, 110, 1.6) + t(75, 180, 14, '이해합니다', GN)]] }],
      respectfully: [
        { b: '강연', en: 'The students listened respectfully.', ko: '학생들이 존중하며 귀 기울였다.', feel: '<b>존중을 드러낸다.</b>', p: [[150, '나이 든 강사', () => A(75, '#888', 'smile', 'M18 -92 L40 -110')], [280, '둥근 말풍선', () => W.respectfully('(끄덕끄덕)', BL, '#888')], [150, '박수', () => [30, 75, 120].map((x) => A(x, BL, 'smile', 'M18 -92 L30 -126', .4)).join('')]] },
        { b: '마감', en: 'She respectfully reminded the boss of the deadline.', ko: '그녀는 정중하게 상사에게 마감을 일깨웠다.', feel: '윗사람에게도 <b>존중을 지키며</b> 할 말을 한다.', p: [[150, '바쁜 상사', () => A(75, '#556', 'stern') + DOC(120, 70, 1)], [280, '둥근 말풍선', () => W.respectfully('마감이 내일이에요', MN, '#556')], [150, '"아, 고마워요"', () => A(75, '#556', 'smile') + BUB(80, 40, 80, '아, 고마워요', 12)]] }],
      rudely: [
        { b: '새치기', en: 'He rudely pushed in line.', ko: '그가 무례하게 새치기했다.', feel: '<b>예의 없이.</b>', p: [[150, '줄 서기', () => [30, 60, 90, 120].map((x) => A(x, [MN, BL, OR, GN][(x - 30) / 30], 'calm', null, .35)).join('')], [280, '가시 돋친 말풍선', () => W.rudely('비켜!', ME, MN)], [150, '다들 째려본다', () => [30, 75, 120].map((x) => A(x, MN, 'stern', null, .4)).join('')]] },
        { b: '인사', en: 'She rudely ignored my greeting.', ko: '그녀는 무례하게 내 인사를 무시했다.', feel: '마음 씀도 <b>예의가 없다.</b>', p: [[150, '"안녕!"', () => A(75, ME, 'smile', 'M18 -92 L40 -126') + BUB(80, 40, 60, '안녕!', 14)], [280, '가시 돋친 말풍선', () => W.rudely('…흥', MN, ME)], [150, '머쓱', () => A(75, ME, 'sad', 'M18 -92 L30 -76')]] }],
      impolitely: [
        { b: '빤히', en: 'He stared impolitely at the stranger.', ko: '그는 낯선 사람을 예의 없이 빤히 쳐다봤다.', feel: '<b>예의 없는 행동.</b>', p: [[150, '특이한 모자', () => A(75, OR, 'calm') + f('M50 100 l25 -40 l25 40 z', '#7a4a9a')], [280, '말을 끊는다', () => W.impolitely('(빤히…)', BR, OR)], [150, '불편한 얼굴', () => A(75, OR, 'stern') + f('M50 100 l25 -40 l25 40 z', '#7a4a9a')]] },
        { b: '휴대폰', en: 'She impolitely checked her phone during the talk.', ko: '그녀는 발표 중에 예의 없이 휴대폰을 봤다.', feel: '태도도 <b>결례가 된다.</b>', p: [[150, '친구의 발표', () => A(75, BR, 'smile', 'M18 -92 L40 -110') + DOC(120, 70, 1)], [280, '말을 끊는다', () => W.impolitely('(딴짓)', MN, BR) + g(70, 150, 0, .6, PH)], [150, '발표자가 멈칫', () => A(75, BR, 'sad') + t(116, 50, 20, '…', '#888')]] }],
      insolently: [
        { b: '어깨', en: 'The boy shrugged insolently.', ko: '소년이 건방지게 어깨를 으쓱했다.', feel: '<b>건방진 몸짓.</b>', p: [[150, '"숙제 했니?"', () => A(75, '#556', 'stern') + BUB(80, 40, 80, '숙제 했니?', 13)], [280, '턱을 든다', () => W.insolently('그게 왜요?', ME, '#556')], [150, '선생님 한숨', () => A(75, '#556', 'phew')]] },
        { b: '규칙', en: 'He insolently ignored the rule.', ko: '그는 건방지게 규칙을 무시했다.', feel: '규칙 앞에서도 <b>존중이 없다.</b>', p: [[150, '"잔디 밟지 마시오"', () => BOXG(30, 80, 90, 40, '#fff') + t(75, 106, 11, '잔디 밟지 마시오') + l('M75 120 v100', 4, '#888')], [280, '턱을 든다', () => W.insolently('내 맘이지', ME, '#2b5a8a')], [150, '벌점', () => DOC(75, 110, 1.6) + t(75, 196, 14, '벌점 1', RD)]] }] };
    const CORE = { politely: '<b>예의를 갖춰.</b>', courteously: '<b>정중하게 맞이하듯.</b>', respectfully: '<b>존중을 드러내며.</b>', rudely: '<b>예의 없이.</b>', impolitely: '<b>결례가 되게.</b>', insolently: '<b>건방지게.</b>' };
