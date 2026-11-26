    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "검사대 위 물건 하나와 도장"과 "무엇이?" 칸이다 — 도장이 ✔인가 ✕인가, 그리고 검사하는 것이 물건(real · fake) · 말(true · false · bogus) · 마음(genuine) · 출처(authentic) · 만든 것(artificial) · 베낀 것(counterfeit) 가운데 무엇인가만 바뀐다. 시험지의 참 · 거짓 표시는 답이 보여 그리지 않았다.
    const WORD = '형용사', BASE = '', FIRST = 'artificial', BASIC_B = '노트 장면';
    const FX = { real: [.3, 900, 900, .12, .4], true: [.3, 1000, 1000, .12, .4], genuine: [.5, 800, 900, .1, .4], authentic: [.5, 700, 800, .12, .4], fake: [.3, 500, 300, .15, .4], false: [.3, 400, 300, .15, .4], artificial: [.4, 1200, 1200, .1, .4], counterfeit: [.5, 300, 200, .18, .4], bogus: [.4, 600, 300, .15, .4] };
    const ORDER = MIX(['real', 'true', 'genuine', 'authentic', 'fake', 'false', 'artificial', 'counterfeit', 'bogus']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const OK = { real: 1, true: 1, genuine: 1, authentic: 1, fake: 0, false: 0, artificial: .5, counterfeit: 0, bogus: 0 };
    const WHAT = { real: '물건이 진짜', true: '말 · 이야기가 사실', genuine: '속까지 진짜', authentic: '출처가 진짜', fake: '진짜처럼 보일 뿐', false: '말 · 정보가 거짓', artificial: '사람이 만듦', counterfeit: '진품을 베낌', bogus: '내용을 꾸며 냄' };
    const TC = (v) => v === 1 ? GN : v ? OR : RD;
    const FLOWER = (x, y, k, plastic) => g(x, y, 0, k || 1, l('M0 0 v-40', 4, GN) + [0, 72, 144, 216, 288].map((a) => '<circle cx="' + (10 * Math.cos(a * Math.PI / 180)) + '" cy="' + (-50 + 10 * Math.sin(a * Math.PI / 180)) + '" r="7" fill="' + (plastic ? '#f4a0f0' : '#f4a0b0') + '"/>').join('') + '<circle cy="-50" r="5" fill="' + GD + '"/>');
    const ITEM = (id) => ({ real: FLOWER(62, 160, 1.2), fake: FLOWER(62, 160, 1.2, true), artificial: FLOWER(62, 160, 1.2, true) + f('M50 160 h24 v14 h-24 z', '#888'),
      true: f('M28 100 h68 v36 h-68 z', '#fff', 2) + t(62, 124, 13, '"이야기"', BL), false: f('M28 100 h68 v36 h-68 z', '#fff', 2) + t(62, 124, 13, '"이야기"', BL), bogus: f('M28 100 h68 v36 h-68 z', '#fff', 2) + t(62, 124, 13, '"구인 광고"', BL),
      genuine: t(62, 140, 40, '♥', MN), authentic: f('M30 110 h64 v40 h-64 z', '#fff', 2) + l('M38 140 q10 -20 20 0 t20 -6', 2.5, BL), counterfeit: f('M26 110 h72 v36 h-72 z', '#9ac47a', 2) + t(62, 134, 14, '₩1만', '#2c5a3a') })[id];
    const BENCH = (id) => { const v = OK[id];
      return f('M10 180 h104 v10 h-104 z', '#a3743f') + ITEM(id) + '<circle cx="96" cy="70" r="18" fill="none" stroke="' + TC(v) + '" stroke-width="4"/>' + t(96, 78, 20, v === 1 ? '✔' : v ? '人' : '✕', TC(v)) +
        t(62, 216, 12, v === 1 ? '진짜' : v ? '만든 것' : '가짜', TC(v)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + BENCH(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 7 ? 15 : 17, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(OK[id]));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { real: P('real', '진짜!'), true: P('true', '맞아'), genuine: P('genuine', '찐'), authentic: P('authentic', '원조'), fake: P('fake', '가짜!'), false: P('false', '아니야'), artificial: P('artificial', '사람 손'), counterfeit: P('counterfeit', '짝퉁'), bogus: P('bogus', '뻥'), };
    // 작은 그림들
    const RING = (x, y, k) => g(x, y, 0, k || 1, '<circle r="16" fill="none" stroke="' + GD + '" stroke-width="5"/>' + f('M-8 -20 l8 -12 l8 12 z', '#cfe6f5'));
    const BAG = (x, y, k, c) => g(x, y, 0, k || 1, f('M-30 -36 h60 v40 h-60 z', c || BR) + l('M-16 -36 q16 -24 32 0', 4, c || BR));
    const BEARD = (x, y) => f('M' + (x - 24) + ' ' + y + ' q24 50 48 0 z', '#fff');
    const PHN = (x, y, k) => g(x, y, 0, k || 1, PH);
    const BILL = (x, y) => f('M' + (x - 36) + ' ' + (y - 18) + ' h72 v36 h-72 z', '#9ac47a', 2) + t(x, y + 6, 14, '₩1만', '#2c5a3a');
    const WATCH = (x, y, k) => g(x, y, 0, k || 1, f('M-10 -40 h20 v80 h-20 z', '#555') + '<circle r="22" fill="' + GD + '" stroke="#222" stroke-width="3"/>' + l('M0 0 v-14 M0 0 l10 4', 2.5));
    const BOWLF = (x, y) => f('M' + (x - 34) + ' ' + (y - 20) + ' h68 q-4 26 -34 26 q-30 0 -34 -26 z', '#fff') + f('M' + (x - 30) + ' ' + (y - 22) + ' q30 -6 60 0', OR, 2);
    const ROBOT = (x, y, k) => g(x, y, 0, k || 1, f('M-20 -60 h40 v40 h-40 z', '#bbb') + '<circle cx="-8" cy="-44" r="4" fill="' + BL + '"/><circle cx="8" cy="-44" r="4" fill="' + BL + '"/>' + l('M0 -60 v-10', 3) + f('M-24 -20 h48 v20 h-48 z', '#999'));
    const C = {
      real: { n: 'real', past: 'real', en: 'These flowers are real.', ko: '이 꽃들은 진짜다.', feel: '<b>물건이 진짜다.</b> really는 "정말로".', t: .3,
        p: [[150, '꽃병', () => FLOWER(50, 200, 1.4) + FLOWER(100, 200, 1.4)], [280, '물건이 진짜', () => W.real()], [150, '킁킁, 향기', () => A(75, MN, 'smile', null, .8) + t(124, 60, 16, '~♪', MN)]] },
      true: { n: 'true', past: 'true', en: 'The story is true.', ko: '그 이야기는 사실이다.', feel: '<b>말 · 이야기가 사실과 맞다.</b>', t: .3,
        p: [[150, '할아버지의 모험담', () => A(75, '#888', 'smile', 'M18 -92 L40 -120', .8)], [280, '말이 사실', () => W.true()], [150, '옛날 신문 기사', () => BOXG(20, 50, 110, 120, '#e9e0c8') + l('M30 70 h90 M30 90 h70 M30 110 h80', 3, '#888')]] },
      genuine: { n: 'genuine', past: 'genuine', en: 'Her concern was genuine.', ko: '그녀의 걱정은 진심이었다.', feel: '<b>감정 · 태도에 가식이 없다.</b> 속까지 진짜.', t: .5,
        p: [[150, '넘어진 친구', () => A(110, OR, 'sad', null, .5) + A(40, MN, 'shock', null, .6)], [280, '속까지 진짜', () => W.genuine()], [150, '밴드를 붙여 준다', () => A(45, MN, 'calm', 'M18 -92 L46 -70', .6) + A(110, OR, 'smile', null, .5)]] },
      authentic: { n: 'authentic', past: 'authentic', en: 'Is this signature authentic?', ko: '이 서명 진짜인가요?', feel: '<b>출처가 진짜다.</b> 서명 · 작품 · 음식에.', t: .5,
        p: [[150, '경매장', () => BOXG(30, 60, 90, 70, '#fff') + l('M40 110 q10 -20 20 0 t20 -6', 2.5, BL)], [280, '출처가 진짜', () => W.authentic()], [150, '돋보기 검사', () => '<circle cx="75" cy="110" r="30" fill="#fff" stroke="#555" stroke-width="5"/>' + l('M96 132 l20 20', 6, '#555') + A(40, '#888', 'stern', null, .45)]] },
      fake: { n: 'fake', past: 'fake', en: 'These flowers are fake.', ko: '이 꽃들은 가짜다.', feel: '<b>진짜처럼 보이지만 아니다.</b> 두루 쓴다.', t: .3,
        p: [[150, '꽃병', () => FLOWER(50, 200, 1.4, true) + FLOWER(100, 200, 1.4, true)], [280, '진짜처럼 보일 뿐', () => W.fake()], [150, '만져 보니 플라스틱', () => A(75, MN, 'shock', 'M18 -92 L40 -100', .8) + t(124, 50, 16, '딱딱', '#888')]] },
      false: { n: 'false', past: 'false', en: 'The story is false.', ko: '그 이야기는 거짓이다.', feel: '<b>말 · 정보가 사실과 다르다.</b>', t: .3,
        p: [[150, '"외계인을 봤어!"', () => A(75, OR, 'smile', 'M18 -92 L40 -120', .6)], [280, '말이 거짓', () => W.false()], [150, '사진은 풍선', () => BOXG(30, 60, 90, 80, '#fff') + '<circle cx="75" cy="96" r="18" fill="#ddd"/>' + l('M75 114 v20', 1)]] },
      artificial: { n: 'artificial', past: 'artificial', en: 'These plants are artificial.', ko: '이 식물들은 인공이다.', feel: '<b>자연물이 아니라 사람이 만들었다.</b> 꼭 속임수는 아니다.', t: .4,
        p: [[150, '사무실 화분', () => f('M60 200 h30 l-4 30 h-22 z', '#c9a171') + FLOWER(75, 200, 1)], [280, '사람이 만듦', () => W.artificial()], [150, '물 안 줘도 된다', () => A(75, BL, 'smile', null, .8) + t(124, 60, 14, '편해', GN)]] },
      counterfeit: { n: 'counterfeit', past: 'counterfeit', en: 'They sold counterfeit bags.', ko: '그들은 위조 가방을 팔았다.', feel: '<b>진품을 베껴</b> 만든 위조품.', t: .5,
        p: [[150, '노점', () => f('M10 180 h130 v8 h-130 z', '#a3743f') + BAG(45, 180, .8) + BAG(105, 180, .8)], [280, '진품을 베낌', () => W.counterfeit(BAG(196, 170, 1))], [150, '단속반', () => A(75, BL, 'stern', 'M18 -92 L46 -100', .8) + t(124, 50, 16, '압수!', RD)]] },
      bogus: { n: 'bogus', past: 'bogus', en: 'The job posting was bogus.', ko: '그 구인 광고는 가짜였다.', feel: '<b>주장 · 광고의 내용이 꾸며 낸 것.</b>', t: .4,
        p: [[150, '"월 천만 원!"', () => BOXG(20, 50, 110, 80, '#ffe08a') + t(75, 96, 16, '월 천만!', RD)], [280, '내용을 꾸며 냄', () => W.bogus()], [150, '전화하니 없는 번호', () => PHN(75, 130, 2) + t(120, 60, 18, '?', RD)]] }
    };
    const MORE = {
      real: [
        { b: '다이아', en: 'Is this a real diamond?', ko: '이거 진짜 다이아몬드야?', feel: '<b>물건이 진짜인지</b> 묻는다.', p: [[150, '할머니 반지', () => RING(75, 140, 1.6)], [280, '물건이 진짜?', () => W.real(RING(196, 146, 1.2))], [150, '보석상의 대답', () => A(75, '#888', 'smile', 'M18 -92 L40 -120', .8) + t(124, 50, 18, '✔', GN)]] },
        { b: '친구', en: 'He is a real friend.', ko: '그는 진짜 친구다.', feel: '사람 사이도 <b>진짜</b>다.', p: [[150, '이사하는 날', () => [0, 1, 2].map((i) => PKG(40 + i * 35, 220, .8)).join('')], [280, '진짜', () => W.real(t(196, 146, 30, '🤝'))], [150, '새벽부터 도와준다', () => A(45, BL, 'smile', 'M-20 -90 L0 -60 M20 -90 L0 -60', .55) + PKG(45, 160, .5) + A(110, MN, 'smile', null, .5)]] }],
      true: [
        { b: '소문', en: 'Is it true that you\'re moving?', ko: '너 이사 간다는 거 사실이야?', feel: '말이 <b>사실인지</b> 묻는다.', p: [[150, '복도의 소문', () => A(40, OR, 'smile', 'M18 -92 L30 -110', .5) + A(110, GN, 'shock', null, .5)], [280, '말이 사실?', () => W.true()], [150, '"응, 다음 달에"', () => A(75, MN, 'sad', null, .8)]] },
        { b: '사랑', en: 'They found true love.', ko: '그들은 진정한 사랑을 찾았다.', feel: '사랑이 <b>참되다.</b>', p: [[150, '결혼식', () => A(50, '#2b3550', 'smile', null, .6) + A(105, '#fff', 'smile', null, .6)], [280, '참된 마음', () => W.true(t(196, 146, 36, '♥', RD))], [150, '50년 뒤에도', () => A(50, '#888', 'smile', 'M20 -90 L40 -70', .6) + A(105, '#888', 'smile', 'M-20 -90 L-40 -70', .6)]] }],
      genuine: [
        { b: '가죽', en: 'This bag is genuine leather.', ko: '이 가방은 진짜 가죽이다.', feel: '재료가 <b>속까지 진짜.</b>', p: [[150, '가방 가게', () => BAG(75, 200, 1.6)], [280, '속까지 진짜', () => W.genuine(BAG(196, 170, 1))], [150, '오래 써도 튼튼', () => A(75, MN, 'smile', null, .8) + BAG(110, 180, .5)]] },
        { b: '미소', en: 'She gave a genuine smile.', ko: '그녀는 꾸밈없는 미소를 지었다.', feel: '웃음에 <b>가식이 없다.</b>', p: [[150, '선물을 받았다', () => PKG(75, 190, 1.2)], [280, '속까지 진짜', () => W.genuine(g(196, 146, 0, .7, HEAD('smile')))], [150, '활짝', () => g(75, 130, 0, 1.6, HEAD('smile'))]] }],
      authentic: [
        { b: '음식', en: 'This restaurant serves authentic Thai food.', ko: '이 식당은 정통 태국 음식을 낸다.', feel: '맛의 <b>출처가 진짜.</b>', p: [[150, '골목 식당', () => BOXG(20, 100, 110, 138, '#f2d59a') + t(75, 140, 14, '방콕 출신 셰프', BR)], [280, '출처가 진짜', () => W.authentic(BOWLF(196, 160))], [150, '"현지 맛 그대로"', () => A(75, BL, 'smile', 'M18 -92 L22 -126', .8)]] },
        { b: '그림', en: 'Experts say the painting is authentic.', ko: '전문가들은 그 그림이 진품이라고 한다.', feel: '작품의 <b>출처가 진짜.</b>', p: [[150, '다락방 그림', () => BOXG(30, 50, 90, 110, '#e9e0c8') + SUN(75, 100, 18)], [280, '출처가 진짜', () => W.authentic()], [150, '박물관에 걸렸다', () => BOXG(30, 50, 90, 110, GD) + BOXG(40, 60, 70, 90, '#e9e0c8') + SUN(75, 105, 14)]] }],
      fake: [
        { b: '수염', en: 'He wore a fake beard.', ko: '그는 가짜 수염을 붙였다.', feel: '진짜처럼 <b>보일 뿐.</b>', p: [[150, '산타 분장', () => A(75, RD, 'smile', null, .8)], [280, '보일 뿐', () => W.fake(g(196, 140, 0, .7, HEAD('smile')) + BEARD(196, 150))], [150, '수염이 툭', () => A(75, RD, 'shock', null, .8) + BEARD(110, 200)]] },
        { b: '뉴스', en: 'That\'s fake news.', ko: '그건 가짜 뉴스야.', feel: '진짜처럼 <b>보이지만 아니다.</b>', p: [[150, '단체방 링크', () => PHN(75, 130, 2)], [280, '보일 뿐', () => W.fake(t(196, 146, 18, '"충격!!"', RD))], [150, '확인해 보자', () => A(75, BL, 'stern', 'M18 -92 L22 -126', .8)]] }],
      false: [
        { b: '경보', en: 'It was a false alarm.', ko: '잘못 울린 경보였다.', feel: '경보가 <b>사실과 달랐다.</b>', p: [[150, '삐용삐용', () => t(75, 100, 30, '🚨')], [280, '정보가 거짓', () => W.false()], [150, '토스트가 탔을 뿐', () => f('M50 150 h50 v40 h-50 z', '#5a3a1a') + A(120, MN, 'phew', null, .4)]] },
        { b: '이름', en: 'He gave a false name.', ko: '그는 가짜 이름을 댔다.', feel: '정보가 <b>사실과 다르다.</b>', p: [[150, '"성함이요?"', () => A(75, '#888', 'calm', null, .8)], [280, '정보가 거짓', () => W.false(t(196, 140, 18, '"홍길동"', BL))], [150, '의심의 눈', () => A(75, '#888', 'stern', 'M-20 -90 L12 -70 M20 -90 L-12 -68', .8)]] }],
      artificial: [
        { b: '단맛', en: 'This drink has artificial sweeteners.', ko: '이 음료에는 인공 감미료가 들어 있다.', feel: '단맛도 <b>사람이 만들었다.</b>', p: [[150, '음료수 캔', () => f('M60 120 h30 v80 h-30 z', BL) + t(75, 166, 10, '0kcal', '#fff')], [280, '사람이 만듦', () => W.artificial()], [150, '성분표를 본다', () => DOC(110, 130, .8) + A(50, MN, 'stern', null, .6)]] },
        { b: '지능', en: 'We talked about artificial intelligence.', ko: '우리는 인공 지능에 대해 이야기했다.', feel: '생각하는 힘도 <b>사람이 만들었다.</b>', p: [[150, '수업 시간', () => BOXG(20, 40, 110, 60, '#2c4a3a') + t(75, 78, 16, '?', '#fff')], [280, '사람이 만듦', () => W.artificial(ROBOT(196, 176, .8))], [150, '"생각하는 기계라니"', () => A(75, OR, 'shock', null, .6) + ROBOT(124, 236, .5)]] }],
      counterfeit: [
        { b: '지폐', en: 'The shop got a counterfeit bill.', ko: '가게가 위조지폐를 받았다.', feel: '돈을 <b>베껴</b> 만들었다.', p: [[150, '계산대', () => BILL(75, 140)], [280, '진품을 베낌', () => W.counterfeit()], [150, '빛에 비춰 본다', () => SUN(110, 50, 14) + BILL(75, 140) + A(40, BR, 'stern', null, .45)]] },
        { b: '시계', en: 'He bought a counterfeit watch.', ko: '그는 위조 시계를 샀다.', feel: '명품을 <b>베낀</b> 물건.', p: [[150, '싸다 싸', () => WATCH(75, 130, 1.4)], [280, '진품을 베낌', () => W.counterfeit(WATCH(196, 140, .8))], [150, '일주일 만에 멈춤', () => WATCH(75, 130, 1.4) + t(120, 60, 18, '…', '#888')]] }],
      bogus: [
        { b: '전화', en: 'The bank call was bogus.', ko: '그 은행 전화는 가짜였다.', feel: '말의 <b>내용을 꾸며 냈다.</b>', p: [[150, '"은행입니다"', () => PHN(75, 130, 2)], [280, '내용을 꾸며 냄', () => W.bogus(t(196, 140, 16, '"비밀번호 주세요"', RD))], [150, '뚝 끊는다', () => A(75, MN, 'stern', 'M18 -92 L22 -126', .8)]] },
        { b: '핑계', en: 'His excuse was bogus.', ko: '그의 핑계는 꾸며 낸 것이었다.', feel: '핑계 <b>내용이 가짜.</b>', p: [[150, '"할머니가 아프셔서…"', () => A(75, BR, 'sad', null, .8)], [280, '내용을 꾸며 냄', () => W.bogus()], [150, 'SNS엔 놀이공원', () => PHN(75, 130, 2) + t(120, 60, 18, '🎢')]] }]
    };
    const CORE = { real: '<b>물건 · 사람이 진짜다.</b>', true: '<b>말 · 이야기가 사실이다.</b>', genuine: '<b>속까지 진짜, 가식 없음.</b>', authentic: '<b>출처가 진짜다.</b>', fake: '<b>진짜처럼 보이지만 아니다.</b>', false: '<b>말 · 정보가 거짓이다.</b>', artificial: '<b>사람이 만든 것.</b>', counterfeit: '<b>진품을 베낀 위조품.</b>', bogus: '<b>내용을 꾸며 낸 가짜.</b>' };
