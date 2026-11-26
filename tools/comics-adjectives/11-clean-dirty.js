    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(filthy 장면 3은 filthy rich — "엄청나게"라는 굳은 말). 가운데 칸은 늘 같은 "셔츠 한 장"과 "무엇이?" 칸이다 — 자국이 얼마나 묻었나, 그리고 pristine · sanitary · stained · greasy처럼 무엇을 보고 하는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'stained', BASIC_B = '노트 장면';
    const FX = { clean: [.3, 1200, 1400, .1, .4], spotless: [.3, 2000, 2600, .12, .4], pristine: [.6, 1600, 2000, .08, .5], sanitary: [.2, 1000, 1000, .1, .4], dirty: [.4, 300, 260, .15, .4], stained: [.3, 400, 300, .15, .4], filthy: [.7, 160, 120, .25, .4], greasy: [.5, 500, 300, .1, .5] };
    const ORDER = MIX(['clean', 'spotless', 'pristine', 'sanitary', 'dirty', 'stained', 'filthy', 'greasy']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632', MUD = '#7a5a3a';
    const DT = { pristine: 0, spotless: 0, clean: .04, sanitary: .04, stained: .3, greasy: .4, dirty: .55, filthy: .95 };
    const WHAT = { spotless: '눈에 보이는 자국', pristine: '처음 그대로', sanitary: '위생 기준', stained: '한 곳의 자국', filthy: '아주 심하게', greasy: '기름기 촉감' };
    const TC = (v) => v > .2 ? MUD : WT;
    const SPOTS = [[46, 120, 6], [76, 150, 5], [56, 176, 7], [84, 112, 4], [36, 150, 5], [70, 188, 6], [92, 170, 5], [48, 98, 4], [64, 132, 8], [30, 176, 5]];
    const TEE = (id) => { const v = DT[id], n = Math.round(v * 10);
      let s = f('M30 70 l20 -12 h24 l20 12 l14 24 l-16 8 v100 h-60 v-100 l-16 -8 z', '#fff');
      if (id === 'stained') s += '<ellipse cx="66" cy="140" rx="16" ry="12" fill="#a0703a" opacity=".8"/>';
      else if (id === 'greasy') s += [[48, 120], [74, 150], [58, 176]].map(([x, y]) => '<ellipse cx="' + x + '" cy="' + y + '" rx="10" ry="7" fill="' + GD + '" opacity=".45"/>' + l('M' + (x - 4) + ' ' + (y - 3) + ' l5 -1', 2, '#fff')).join('');
      else s += SPOTS.slice(0, n).map(([x, y, r]) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + MUD + '"/>').join('') + (v > .9 ? f('M24 196 h76 v6 h-76 z', MUD, 0) : '');
      if (id === 'spotless') s += t(48, 120, 16, '✦', '#9fd3f0') + t(76, 160, 12, '✦', '#9fd3f0');
      if (id === 'pristine') s += f('M76 62 h20 v14 h-20 z', RD, 2) + t(86, 73, 9, 'NEW', '#fff');
      if (id === 'sanitary') s += t(62, 150, 26, '✚', GN);
      return s + t(62, 228, 13, v > .2 ? '자국 있음' : '자국 없음', TC(v)); };
    const TP = (id, b, z) => { const c = TC(DT[id]);
      return DARK(280, '#f6f4ee') + TEE(id) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 15 : 18, WHAT[id], BL) : t(196, 128, 15, '옷 · 방 ·', '#888') + t(196, 150, 15, '손 두루', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { clean: P('clean', '깨끗'), spotless: P('spotless', '반짝반짝'), pristine: P('pristine', '새것 그대로'), sanitary: P('sanitary', '소독 완료'), dirty: P('dirty', '꼬질꼬질'), stained: P('stained', '얼룩'), filthy: P('filthy', '꾀죄죄'), greasy: P('greasy', '번들번들') };
    // 작은 그림들
    const SHIRT = (x, y, c, mud) => g(x, y, 0, 1, f('M-26 -30 l14 -8 h24 l14 8 l10 16 l-12 6 v40 h-48 v-40 l-12 -6 z', c || '#fff') + (mud ? '<circle cx="-6" cy="0" r="5" fill="' + MUD + '"/><circle cx="8" cy="14" r="4" fill="' + MUD + '"/>' : ''));
    const MIRROR = (x, y, k) => g(x, y, 0, k || 1, '<ellipse rx="32" ry="44" fill="#cfe6f5" stroke="#222" stroke-width="3"/>' + l('M-14 -20 l20 -14', 4, '#fff'));
    const COMIC = (x, y, k) => g(x, y, 0, k || 1, f('M-26 -36 h52 v72 h-52 z', '#fff') + f('M-20 -30 h40 v26 h-40 z', '#f2d34a') + t(0, -12, 10, 'POW!', RD) + l('M-18 10 h36 M-18 20 h28', 3, '#bbb'));
    const SHOE = (x, y, k, c) => g(x, y, 0, k || 1, f('M-34 0 v-20 q0 -10 10 -10 h18 q10 14 40 18 q6 4 0 12 z', c || '#fff') + '<circle cx="-14" cy="-10" r="4" fill="' + MUD + '"/><circle cx="10" cy="-6" r="5" fill="' + MUD + '"/>');
    const PAN = (x, y) => f('M' + (x - 34) + ' ' + y + ' h68 l-6 22 h-56 z', '#555') + l('M' + (x + 34) + ' ' + (y + 4) + ' h40', 6, '#333');
    const FRIES = (x, y) => f('M' + (x - 20) + ' ' + y + ' l6 -40 h28 l6 40 z', RD) + [-12, -4, 4, 12].map((d) => l('M' + (x + d) + ' ' + (y - 40) + ' v-20', 5, GD)).join('');
    const MUDP = (x, y, w) => '<ellipse cx="' + x + '" cy="' + y + '" rx="' + w + '" ry="8" fill="' + MUD + '"/>';
    const DOG = (x, y, k, c) => g(x, y, 0, k || 1, '<ellipse cy="-20" rx="30" ry="16" fill="' + (c || '#fff') + '" stroke="#222" stroke-width="3"/><circle cx="28" cy="-36" r="14" fill="' + (c || '#fff') + '" stroke="#222" stroke-width="3"/>' + l('M-18 -6 v12 M14 -6 v12', 5));
    const C = {
      clean: { n: 'clean', past: 'clean', en: 'My shirt is clean.', ko: '내 셔츠는 깨끗하다.', feel: '<b>오염이 없다.</b> 동사 clean(닦다)의 결과.', t: .3,
        p: [[150, '빨래를 걷었다', () => l('M0 60 H150', 2) + SHIRT(75, 110)], [280, '자국 없음', () => W.clean()], [150, '입고 나간다', () => A(75, '#fff', 'smile', null, .8)]] },
      spotless: { n: 'spotless', past: 'spotless', en: 'The mirror is spotless.', ko: '거울에 얼룩 하나 없다.', feel: '<b>눈에 보이는 자국이 하나도 없다.</b> 위생까지 보증하는 말은 아니다.', t: .3,
        p: [[150, '닦고 또 닦고', () => MIRROR(75, 120, 1.2) + A(130, MN, 'phew', 'M-18 -92 L-40 -100', .5)], [280, '눈에 보이는 자국', () => W.spotless(MIRROR(196, 136, .8))], [150, '얼굴이 또렷', () => MIRROR(75, 120, 1.2) + g(75, 120, 0, .5, HEAD('smile'))]] },
      pristine: { n: 'pristine', past: 'pristine', en: 'The comic book is in pristine condition.', ko: '그 만화책은 새것 그대로다.', feel: '<b>처음 상태가 그대로 남았다.</b> 자연에도 쓴다.', t: .6,
        p: [[150, '30년 된 만화책', () => COMIC(75, 140, 1.4)], [280, '처음 그대로', () => W.pristine(COMIC(196, 140, .9))], [150, '"새것 같아!"', () => A(75, BL, 'shock', 'M18 -92 L36 -126', .8) + t(120, 60, 18, '와', OR)]] },
      sanitary: { n: 'sanitary', past: 'sanitary', en: 'The kitchen must be kept sanitary.', ko: '부엌은 위생적으로 관리해야 한다.', feel: '<b>건강 · 위생 기준에 맞다.</b> 겉보기와 다른 이야기.', t: .2,
        p: [[150, '식당 주방', () => f('M10 140 h130 v10 h-130 z', '#ccc') + A(75, '#fff', 'stern', null, .6)], [280, '위생 기준', () => W.sanitary()], [150, '점검표 통과', () => DOC(75, 130, 1.4) + t(96, 160, 22, '✔', GN)]] },
      dirty: { n: 'dirty', past: 'dirty', en: 'My shirt is dirty.', ko: '내 셔츠가 더럽다.', feel: '<b>오염이 있다.</b> 무엇이 묻었는지는 말하지 않는다.', t: .4,
        p: [[150, '놀이터에서 실컷', () => MUDP(75, 220, 50) + A(75, OR, 'smile', null, .6)], [280, '자국 여기저기', () => W.dirty()], [150, '세탁기로', () => BOXG(40, 120, 70, 110, '#eee') + '<circle cx="75" cy="170" r="22" fill="#cfe6f5" stroke="#222" stroke-width="3"/>']] },
      stained: { n: 'stained', past: 'stained', en: 'My shirt is stained with coffee.', ko: '셔츠에 커피 얼룩이 졌다.', feel: '<b>한 곳에 자국이 남았다.</b> 전체가 더러울 필요는 없다.', t: .3,
        p: [[150, '앗, 쏟았다', () => A(75, '#fff', 'shock', 'M18 -92 L40 -100', .8) + t(124, 50, 18, '앗', RD)], [280, '한 곳의 자국', () => W.stained()], [150, '박박 문지른다', () => SHIRT(75, 140) + '<ellipse cx="75" cy="140" rx="12" ry="9" fill="#a0703a" opacity=".6"/>' + t(75, 80, 16, '박박', '#888')]] },
      filthy: { n: 'filthy', past: 'filthy', en: 'My shoes are filthy.', ko: '내 신발이 엄청 더럽다.', feel: '<b>아주 심하게 더럽다.</b>', t: .7,
        p: [[150, '비 온 뒤 등산', () => MUDP(75, 226, 70) + TREEC(120, .4)], [280, '아주 심하게', () => W.filthy(SHOE(196, 160, 1, '#b8a080'))], [150, '"현관에서 벗어!"', () => A(75, MN, 'stern', 'M18 -92 L46 -100', .8)]] },
      greasy: { n: 'greasy', past: 'greasy', en: 'The handle feels greasy.', ko: '손잡이가 기름기로 미끈거린다.', feel: '<b>기름기 특유의 미끈함.</b> 더럽지 않은 것에도 쓴다.', t: .5,
        p: [[150, '튀김 요리 후', () => PAN(60, 150)], [280, '기름기 촉감', () => W.greasy(PAN(186, 140))], [150, '손이 미끌', () => A(75, BL, 'sad', 'M18 -92 L46 -80', .8) + t(124, 60, 16, '미끌', GD)]] }
    };
    const MORE = {
      clean: [
        { b: '방', en: 'My room is clean now.', ko: '이제 내 방이 깨끗하다.', feel: '<b>오염 · 어질러짐이 없다.</b>', p: [[150, '대청소', () => A(75, MN, 'phew', 'M18 -92 L40 -50', .8)], [280, '자국 없음', () => W.clean()], [150, '뿌듯', () => f('M10 200 h60 v20 h-60 z', '#cfe6f5') + A(110, MN, 'smile', null, .6)]] },
        { b: '기록', en: 'He has a clean record.', ko: '그는 기록이 깨끗하다.', feel: '지나온 기록에도 <b>얼룩이 없다.</b>', p: [[150, '면접', () => A(40, BL, 'smile', null, .55) + A(110, '#888', 'calm', null, .55)], [280, '기록의 자국', () => W.clean(DOC(196, 136, 1.2))], [150, '"좋습니다"', () => A(75, '#888', 'smile', null, .8)]] }],
      spotless: [
        { b: '부엌', en: 'Mom keeps the kitchen spotless.', ko: '엄마는 부엌을 티 하나 없이 관리한다.', feel: '<b>자국이 하나도</b> 안 보인다.', p: [[150, '저녁 설거지 후', () => f('M10 150 h130 v10 h-130 z', '#ccc') + t(40, 130, 16, '✦', '#9fd3f0') + t(110, 120, 14, '✦', '#9fd3f0')], [280, '눈에 보이는 자국', () => W.spotless()], [150, '반짝', () => A(75, MN, 'smile', null, .8) + t(124, 60, 18, '✦', '#9fd3f0')]] },
        { b: '평판', en: 'She has a spotless reputation.', ko: '그녀는 평판에 흠 하나 없다.', feel: '이름에도 <b>자국이 없다.</b>', p: [[150, '30년 근무', () => A(75, MN, 'smile', null, .8) + t(124, 50, 16, '30년', OR)], [280, '이름의 자국', () => W.spotless(t(196, 144, 22, '★★★★★', GD))], [150, '모두 믿는다', () => A(40, BL, 'smile', null, .55) + A(110, OR, 'smile', null, .55)]] }],
      pristine: [
        { b: '눈밭', en: 'The snow was pristine.', ko: '눈밭이 갓 내린 그대로였다.', feel: '자연도 <b>처음 그대로.</b>', p: [[150, '새벽', () => f('M0 170 H150 V240 H0 z', '#fff') + SUN(110, 50, 14)], [280, '처음 그대로', () => W.pristine(f('M140 150 h112 v30 h-112 z', '#fff'))], [150, '첫 발자국', () => f('M0 170 H150 V240 H0 z', '#fff') + A(110, MN, 'smile', null, .5) + f('M40 210 h8 v14 h-8 z M60 200 h8 v14 h-8 z', '#ddd')]] },
        { b: '음질', en: 'The old record sounds pristine.', ko: '오래된 레코드인데 소리가 새것 같다.', feel: '소리도 <b>처음 그대로.</b>', p: [[150, '다락방 레코드', () => '<circle cx="75" cy="140" r="44" fill="#222"/><circle cx="75" cy="140" r="10" fill="' + RD + '"/>'], [280, '소리가 처음 그대로', () => W.pristine(t(196, 146, 28, '♪ ♫', BL))], [150, '눈을 감는다', () => A(75, BR, 'phew', null, .8)]] }],
      sanitary: [
        { b: '병원', en: 'The hospital is sanitary.', ko: '그 병원은 위생적이다.', feel: '<b>위생 기준</b>에 맞다.', p: [[150, '수술실 앞', () => BOXG(30, 60, 90, 178, '#e8eef2') + t(75, 120, 26, '✚', GN)], [280, '위생 기준', () => W.sanitary()], [150, '손 소독', () => A(75, '#fff', 'calm', 'M-20 -90 L0 -60 M20 -90 L0 -60', .8) + t(124, 60, 14, '칙칙', BL)]] },
        { b: '수건', en: 'Sharing one towel is not sanitary.', ko: '수건 하나를 같이 쓰는 건 위생적이지 않다.', feel: '깨끗해 보여도 <b>위생 기준</b>은 따로다.', p: [[150, '수건 한 장', () => f('M50 80 h50 v70 h-50 z', '#f4c6d0') + l('M40 80 h70', 4, '#888')], [280, '위생 기준', () => W.sanitary(t(196, 146, 28, '✕', RD))], [150, '각자 한 장씩', () => f('M20 80 h40 v60 h-40 z', '#f4c6d0') + f('M90 80 h40 v60 h-40 z', '#cfe6f5')]] }],
      dirty: [
        { b: '손', en: 'Your hands are dirty. Wash them.', ko: '손이 더럽네. 씻어.', feel: '<b>뭔가</b> 묻었다.', p: [[150, '흙놀이', () => MUDP(75, 220, 50) + A(75, OR, 'smile', 'M-20 -90 L-40 -50 M20 -90 L40 -50', .6)], [280, '자국 여기저기', () => W.dirty()], [150, '세면대로', () => l('M60 60 v30', 5, '#888') + l('M64 100 v30', 3, WT) + f('M30 140 h80 l-10 30 h-60 z', '#fff')]] },
        { b: '눈빛', en: 'She gave me a dirty look.', ko: '그녀가 나를 째려봤다.', feel: '눈빛에 <b>불쾌함이 묻었다.</b>', p: [[150, '발을 밟았다', () => A(40, BL, 'shock', null, .55) + A(110, MN, 'sad', null, .55)], [280, '눈빛의 자국', () => W.dirty(BEYE(196, 136, .5, true))], [150, '"미, 미안"', () => A(75, BL, 'phew', null, .8) + t(124, 60, 16, '미안', OR)]] }],
      stained: [
        { b: '식탁보', en: 'The tablecloth is stained with juice.', ko: '식탁보에 주스 얼룩이 졌다.', feel: '<b>한 곳에</b> 자국.', p: [[150, '포도 주스', () => f('M60 100 h30 l-4 60 h-22 z', '#7a3a8a')], [280, '한 곳의 자국', () => W.stained(f('M140 120 h112 v50 h-112 z', '#fff') + '<ellipse cx="196" cy="146" rx="14" ry="10" fill="#7a3a8a" opacity=".7"/>')], [150, '"지워지려나"', () => A(75, MN, 'sad', null, .8)]] },
        { b: '이름', en: 'His name was stained by the scandal.', ko: '그 일로 그의 이름에 얼룩이 졌다.', feel: '이름에도 <b>자국이 남는다.</b>', p: [[150, '신문 1면', () => BOXG(20, 40, 110, 120, '#fff') + t(75, 80, 16, '속보', RD)], [280, '이름의 자국', () => W.stained(t(196, 140, 20, '이름', BL) + '<ellipse cx="210" cy="140" rx="14" ry="10" fill="#a0703a" opacity=".6"/>')], [150, '고개를 숙인다', () => A(75, BR, 'down', null, .8)]] }],
      filthy: [
        { b: '강아지', en: 'The dog came back filthy.', ko: '강아지가 꾀죄죄해져서 돌아왔다.', feel: '<b>아주 심하게</b> 더럽다.', p: [[150, '산책 나갔다', () => DOG(75, 220, 1.2)], [280, '아주 심하게', () => W.filthy(DOG(196, 176, .9, '#b8a080'))], [150, '목욕 시간', () => f('M20 170 h110 v60 h-110 z', '#fff') + DOG(75, 190, .9, '#b8a080') + t(75, 110, 16, '첨벙', WT)]] },
        { b: '부자', en: 'They are filthy rich.', ko: '그들은 엄청난 부자다.', feel: '"엄청나게"라는 굳은 말 — <b>심할 만큼</b> 많다.', p: [[150, '큰 저택', () => CASTLE(75, 236, .9, GD)], [280, '정도가 심함', () => W.filthy(COIN(176, 130, 14) + COIN(206, 150, 14) + COIN(226, 120, 14))], [150, '"우와…"', () => A(75, OR, 'shock', null, .6)]] }],
      greasy: [
        { b: '감자튀김', en: 'These fries are greasy.', ko: '이 감자튀김은 기름지다.', feel: '음식에 <b>기름기</b>가 번들.', p: [[150, '패스트푸드', () => FRIES(75, 200)], [280, '기름기 촉감', () => W.greasy(FRIES(196, 176))], [150, '휴지로 꾹', () => f('M40 120 h70 v50 h-70 z', '#fff') + '<ellipse cx="75" cy="145" rx="16" ry="10" fill="' + GD + '" opacity=".5"/>']] },
        { b: '웃음', en: 'He had a greasy smile.', ko: '그는 느끼하게 웃었다.', feel: '웃음에 <b>기름기</b>가 돈다 — 느끼하다.', p: [[150, '"안녕, 이쁜이~"', () => A(75, BR, 'smile', 'M18 -92 L40 -120', .8)], [280, '웃음의 촉감', () => W.greasy(g(196, 146, 0, .7, HEAD('smile')) + t(226, 120, 16, '✧', GD))], [150, '뒷걸음', () => A(75, MN, 'sad', null, .8, 'M-12 -42 L-24 0 M12 -42 L2 0')]] }]
    };
    const CORE = { clean: '<b>오염이 없다.</b>', spotless: '<b>눈에 보이는 자국이 하나도 없다.</b>', pristine: '<b>처음 상태 그대로.</b>', sanitary: '<b>위생 기준에 맞다.</b>', dirty: '<b>오염이 있다.</b>', stained: '<b>한 곳에 자국이 남았다.</b>', filthy: '<b>아주 심하게 더럽다.</b>', greasy: '<b>기름기로 미끈하다.</b>' };
