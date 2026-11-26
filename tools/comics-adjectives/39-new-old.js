    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(ancient 장면 3은 "내 폰 완전 옛날 거야" 같은 과장). 가운데 칸은 늘 같은 "나이 줄 — 방금에서 먼 옛날까지"와 "무엇이?" 칸이다 — 표시가 줄 어디쯤인가, 그리고 young(생물) · youthful(젊게 느껴짐) · antique(골동품) · ancient(역사) · elderly(사람, 격식)처럼 무엇의 나이인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'youthful', BASIC_B = '노트 장면';
    const FX = { new: [.2, 1400, 1600, .1, .4], young: [.3, 1200, 1400, .08, .4], 'brand-new': [.3, 2000, 2600, .12, .4], youthful: [.5, 1100, 1500, .08, .4], old: [.6, 400, 300, .1, .5], antique: [.6, 600, 500, .08, .5], ancient: [1.2, 200, 120, .12, .5], elderly: [.8, 500, 400, .06, .5] };
    const ORDER = MIX(['new', 'young', 'brand-new', 'youthful', 'old', 'antique', 'ancient', 'elderly']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const AG = { 'brand-new': 0, new: .06, young: .14, youthful: .7, old: .6, elderly: .75, antique: .82, ancient: 1 };
    const WHAT = { new: '만든 · 산 지 얼마 안 됨', young: '태어난 지 얼마 안 됨', 'brand-new': '막 만든 새것', youthful: '젊게 느껴짐 (나이와 따로)', old: '오래됨 · 나이 듦', antique: '골동품', ancient: '역사 속 먼 옛날', elderly: '노년의 사람 (격식)' };
    const TC = (v) => v > .5 ? BR : GN;
    const AGEBAR = (id) => { const v = AG[id], x = 16 + v * 92;
      let s = f('M16 160 h92 v10 h-92 z', '#eee') + f('M16 160 h' + (v * 92 + .1) + ' v10 h-' + (v * 92 + .1) + ' z', TC(v), 0) + f('M' + (x - 6) + ' 150 l6 8 l6 -8 z', '#222') + t(16, 190, 10, '방금', '#888') + t(108, 190, 10, '먼 옛날', '#888');
      const icon = { 'brand-new': f('M44 70 h36 v40 h-36 z', '#fff', 2) + t(62, 96, 12, '새것', RD) + t(92, 70, 16, '✦', GD), new: f('M40 110 l10 -30 h24 l10 30 z', BL) + t(90, 76, 14, '✦', GD), young: l('M62 130 v-30 M62 110 q-14 -6 -16 -18 M62 106 q14 -6 16 -18', 4, GN),
        youthful: g(62, 140, 0, .4, MAN('#888', 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130')) + t(96, 70, 14, '✦', GD), old: f('M40 110 l10 -30 h24 l10 30 z', '#9a8a7a') + l('M48 100 l8 -6 M64 94 l6 8', 2, '#5a4a3a'),
        antique: '<circle cx="62" cy="96" r="22" fill="#e9d9b0" stroke="#7a5a3a" stroke-width="4"/>' + l('M62 96 v-12 M62 96 l8 4', 2.5), ancient: f('M30 130 L62 70 L94 130 z', '#e2c48a') + l('M46 100 h32 M38 115 h48', 2, '#a3743f'),
        elderly: g(56, 140, 0, .4, MAN('#888', 'calm')) + l('M76 100 v40', 3, BR) }[id];
      return s + icon + t(62, 226, 12, v > .5 ? '오래됨' : '얼마 안 됨', TC(v)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + AGEBAR(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 8 ? 12 : 16, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(AG[id]));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { new: P('new', '반짝'), young: P('young', '파릇'), 'brand-new': P('brand-new', '갓 나온'), youthful: P('youthful', '생기 팡팡'), old: P('old', '낡은'), antique: P('antique', '옛 멋'), ancient: P('ancient', '까마득'), elderly: P('elderly', '지긋') };
    // 작은 그림들
    const SHOES = (x, y, old) => f('M' + (x - 34) + ' ' + y + ' v-20 q0 -10 10 -10 h18 q10 14 40 18 q6 4 0 12 z', old ? '#9a8a7a' : BL) + (old ? l('M' + (x - 20) + ' ' + (y - 8) + ' l10 -4 M' + (x + 10) + ' ' + (y - 6) + ' l6 4', 2, '#5a4a3a') : '');
    const SPROUT = (x, y, k) => g(x, y, 0, k || 1, l('M0 0 v-40 M0 -24 q-14 -6 -16 -18 M0 -28 q14 -6 16 -18', 4, GN));
    const LAPTOP = (x, y) => f('M' + (x - 34) + ' ' + (y - 40) + ' h68 v40 h-68 z', '#555') + f('M' + (x - 30) + ' ' + (y - 36) + ' h60 v32 h-60 z', '#8fd0ee') + f('M' + (x - 42) + ' ' + y + ' h84 v6 h-84 z', '#888');
    const CLOCKA = (x, y, k) => g(x, y, 0, k || 1, f('M-20 -70 h40 v70 h-40 z', '#7a5a3a') + '<circle cy="-46" r="14" fill="#e9d9b0" stroke="#222" stroke-width="2"/>' + l('M0 -46 v-8 M0 -46 l6 3', 2) + l('M0 -30 v20', 2, GD));
    const RUINS = () => [20, 50, 80, 110].map((x, i) => f('M' + x + ' 238 v-' + (60 + (i % 2) * 30) + ' h18 v' + (60 + (i % 2) * 30) + ' z', '#d9c9a8')).join('') + f('M14 150 h70 v10 h-70 z', '#d9c9a8');
    const CARN = (x, y, k) => g(x, y, 0, k || 1, f('M-60 0 v-22 l16 -18 h58 l20 18 h26 v22 z', RD) + '<circle cx="-34" cy="2" r="10" fill="#333"/><circle cx="34" cy="2" r="10" fill="#333"/>');
    const TYPEW = (x, y) => f('M' + (x - 40) + ' ' + (y - 30) + ' h80 v30 h-80 z', '#333') + f('M' + (x - 30) + ' ' + (y - 50) + ' h60 v20 h-60 z', '#fff') + [0, 1, 2, 3, 4, 5].map((i) => '<circle cx="' + (x - 30 + i * 12) + '" cy="' + (y - 14) + '" r="4" fill="#ccc"/>').join('');
    const SEAT = (x, y) => f('M' + (x - 16) + ' ' + (y - 40) + ' h32 v26 h-32 z M' + (x - 20) + ' ' + (y - 14) + ' h40 v8 h-40 z', BL);
    const C = {
      new: { n: 'new', past: 'new', en: 'These shoes are new.', ko: '이 신발은 새것이다.', feel: '<b>만든 · 산 지 얼마 안 됐다.</b> 나에게 처음인 것에도.', t: .2,
        p: [[150, '신발 상자', () => PKG(75, 190, 1.4)], [280, '얼마 안 됨', () => W.new()], [150, '반짝반짝', () => SHOES(75, 200, false) + t(120, 150, 16, '✦', GD)]] },
      young: { n: 'young', past: 'young', en: 'The tree is still young.', ko: '그 나무는 아직 어리다.', feel: '<b>태어난 지 얼마 안 됐다.</b> 사람 · 동물 · 나무.', t: .3,
        p: [[150, '작년에 심은 나무', () => SPROUT(75, 230, 2)], [280, '태어난 지 얼마 안 됨', () => W.young()], [150, '물을 준다', () => SPROUT(100, 230, 1.6) + A(40, OR, 'smile', 'M18 -92 L46 -80', .5)]] },
      'brand-new': { n: 'brand-new', past: 'brand-new', en: 'This laptop is brand-new.', ko: '이 노트북은 완전 새것이다.', feel: '<b>막 산 · 막 만든 새것.</b> 한 번 켰어도 된다.', t: .3,
        p: [[150, '택배 도착', () => PKG(75, 190, 1.4)], [280, '막 만든 새것', () => W['brand-new']()], [150, '비닐을 뜯는다', () => LAPTOP(75, 190) + t(120, 120, 16, '✦', GD)]] },
      youthful: { n: 'youthful', past: 'youthful', en: 'She has a youthful energy.', ko: '그녀는 젊은 기운이 넘친다.', feel: '<b>젊게 느껴진다.</b> 실제 나이는 말하지 않는다.', t: .5,
        p: [[150, '70세 생일', () => f('M40 200 v-30 h70 v30 z', '#f4c6d0') + t(75, 162, 14, '70', BR)], [280, '젊게 느껴짐', () => W.youthful()], [150, '춤추는 할머니', () => g(75, 230, 10, .8, MAN('#888', 'smile', 'M-20 -90 L-40 -120 M20 -90 L40 -70'))]] },
      old: { n: 'old', past: 'old', en: 'These shoes are old.', ko: '이 신발은 낡았다.', feel: '<b>오래됐다 · 나이 들었다.</b> 나이를 말할 땐 어려도 old.', t: .6,
        p: [[150, '신발장 구석', () => SHOES(75, 200, true)], [280, '오래됨', () => W.old()], [150, '그래도 편하다', () => A(75, BR, 'smile', null, .8)]] },
      antique: { n: 'antique', past: 'antique', en: 'It\'s an antique clock.', ko: '그건 골동품 시계다.', feel: '<b>오래된 골동품.</b> 꼭 비싸다는 보장은 아니다.', t: .6,
        p: [[150, '골동품 가게', () => CLOCKA(75, 230, 1.6)], [280, '골동품', () => W.antique()], [150, '댕— 댕—', () => CLOCKA(100, 230, 1.2) + A(40, MN, 'shock', null, .5) + t(100, 50, 14, '댕', BR)]] },
      ancient: { n: 'ancient', past: 'ancient', en: 'These are ancient ruins.', ko: '이건 먼 옛날 유적이다.', feel: '<b>역사 속 아주 오래됨.</b> 정해진 햇수는 없다.', t: 1.2,
        p: [[150, '사막 언덕', () => RUINS()], [280, '역사 속 먼 옛날', () => W.ancient()], [150, '가이드 설명', () => RUINS() + A(130, BR, 'smile', 'M-18 -92 L-40 -110', .4)]] },
      elderly: { n: 'elderly', past: 'elderly', en: 'The program supports elderly residents.', ko: '그 프로그램은 노년층 주민을 돕는다.', feel: '<b>노년층을 가리키는 격식 있는 말.</b>', t: .8,
        p: [[150, '주민 센터', () => BOXG(20, 100, 110, 138, '#e9e0c8') + t(75, 140, 14, '주민 센터', BR)], [280, '노년의 사람', () => W.elderly()], [150, '도시락 배달', () => A(45, OR, 'smile', 'M18 -92 L46 -80', .55) + A(110, '#888', 'smile', null, .55)]] }
    };
    const MORE = {
      new: [
        { b: '친구', en: 'I made a new friend.', ko: '새 친구를 사귀었다.', feel: '나에게 <b>처음인</b> 사람.', p: [[150, '전학 첫날', () => A(75, OR, 'calm', null, .6)], [280, '얼마 안 됨', () => W.new()], [150, '같이 하교', () => A(50, OR, 'smile', 'M20 -90 L40 -100', .5) + A(100, GN, 'smile', 'M-20 -90 L-40 -100', .5)]] },
        { b: '생각', en: 'This idea is new to me.', ko: '이 생각은 처음 들어 본다.', feel: '생각이 나에게 <b>처음</b>이다.', p: [[150, '강연', () => A(75, BR, 'smile', 'M18 -92 L40 -120', .8)], [280, '나에게 처음', () => W.new(BULB(196, 140, .6))], [150, '"오, 그렇구나"', () => A(75, MN, 'shock', null, .8)]] }],
      young: [
        { b: '강아지', en: 'The puppy is still young.', ko: '강아지가 아직 어리다.', feel: '<b>태어난 지</b> 얼마 안 됐다.', p: [[150, '꼬물꼬물', () => g(75, 200, 0, 1, '<ellipse cy="-10" rx="18" ry="10" fill="#c9a171" stroke="#222" stroke-width="2"/><circle cx="16" cy="-20" r="8" fill="#c9a171" stroke="#222" stroke-width="2"/>')], [280, '태어난 지 얼마 안 됨', () => W.young()], [150, '하루 종일 잔다', () => g(75, 200, 0, 1, '<ellipse cy="-10" rx="18" ry="10" fill="#c9a171" stroke="#222" stroke-width="2"/>') + ZZ(90, 150)]] },
        { b: '마음', en: 'Grandpa is young at heart.', ko: '할아버지는 마음만은 젊다.', feel: '마음은 <b>태어난 지 얼마 안 된</b> 듯.', p: [[150, '놀이공원', () => l('M10 238 q65 -200 130 0', 4, RD)], [280, '마음의 나이', () => W.young(t(196, 146, 34, '♥', RD))], [150, '롤러코스터 맨 앞', () => A(75, '#888', 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .8)]] }],
      'brand-new': [
        { b: '차', en: 'They bought a brand-new car.', ko: '그들은 완전 새 차를 샀다.', feel: '<b>막 나온</b> 새것.', p: [[150, '자동차 매장', () => CARN(75, 200, 1)], [280, '막 만든 새것', () => W['brand-new'](CARN(196, 160, .6))], [150, '리본 달린 차', () => CARN(75, 200, 1) + f('M65 150 l10 6 l10 -6 v12 l-10 -6 l-10 6 z', GD)]] },
        { b: '새사람', en: 'I feel like a brand-new person.', ko: '완전히 새사람이 된 기분이다.', feel: '마음이 <b>막 새로 태어난</b> 듯.', p: [[150, '한 달 여행 뒤', () => SUN(110, 40, 18) + A(60, BL, 'smile', null, .7)], [280, '막 새것', () => W['brand-new'](t(196, 146, 30, '🌱'))], [150, '기지개', () => A(75, BL, 'phew', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .8)]] }],
      youthful: [
        { b: '미소', en: 'Grandma has a youthful smile.', ko: '할머니는 젊은 미소를 지닌다.', feel: '웃음이 <b>젊게 느껴진다.</b>', p: [[150, '가족사진', () => BOXG(30, 50, 90, 80, GD) + BOXG(36, 56, 78, 68, '#fff')], [280, '젊게 느껴짐', () => W.youthful()], [150, '활짝', () => g(75, 130, 0, 1.5, HEAD('smile'))]] },
        { b: '옷', en: 'She wears youthful clothes.', ko: '그녀는 젊어 보이는 옷을 입는다.', feel: '옷이 <b>젊게 느껴진다.</b>', p: [[150, '옷장', () => BOXG(20, 40, 110, 190, '#c9a171')], [280, '젊게 느껴짐', () => W.youthful()], [150, '노란 운동화', () => A(75, '#f2d34a', 'smile', null, .8) + f('M56 236 h18 v-6 h-18 z M80 236 h18 v-6 h-18 z', GD)]] }],
      old: [
        { b: '친구', en: 'He is an old friend.', ko: '그는 오랜 친구다.', feel: '알고 지낸 지 <b>오래됐다.</b>', p: [[150, '초등학교 사진', () => BOXG(30, 50, 90, 80, '#e9e0c8') + A(55, OR, 'smile', null, .3) + A(95, GN, 'smile', null, .3)], [280, '오래됨', () => W.old()], [150, '30년 뒤 같은 자리', () => A(50, BR, 'smile', 'M20 -90 L40 -100', .65) + A(100, BL, 'smile', 'M-20 -90 L-40 -100', .65)]] },
        { b: '나이', en: 'My sister is five years old.', ko: '내 동생은 다섯 살이다.', feel: '나이를 말할 땐 <b>어려도</b> old.', p: [[150, '생일 케이크', () => f('M40 200 v-30 h70 v30 z', '#f4c6d0') + [50, 62, 75, 88, 100].map((x) => l('M' + x + ' 170 v-14', 3, GD)).join('')], [280, '나이를 셈', () => W.old(t(196, 146, 30, '5', BR))], [150, '손가락 다섯', () => A(75, OR, 'smile', 'M18 -92 L30 -130', .55) + t(110, 60, 16, '✋', '')]] }],
      antique: [
        { b: '가구', en: 'They sell antique furniture.', ko: '그들은 골동품 가구를 판다.', feel: '오래된 <b>골동품</b>.', p: [[150, '골동품 가게', () => f('M30 200 h90 v8 h-90 z', '#7a5a3a') + l('M36 208 v30 M114 208 v30', 4, '#7a5a3a') + CLOCKA(75, 200, .8)], [280, '골동품', () => W.antique()], [150, '조심조심 닦는다', () => A(75, BR, 'calm', 'M18 -92 L40 -60', .8)]] },
        { b: '타자기', en: 'He found an antique typewriter.', ko: '그는 골동품 타자기를 찾았다.', feel: '옛 물건의 <b>멋</b>.', p: [[150, '다락방', () => DARK(150, '#6a5a4a') + TYPEW(75, 200)], [280, '골동품', () => W.antique(TYPEW(196, 170))], [150, '타닥타닥', () => TYPEW(75, 200) + t(75, 100, 16, '타닥', '#888')]] }],
      ancient: [
        { b: '나무', en: 'This tree is ancient.', ko: '이 나무는 아주 오래됐다.', feel: '<b>역사만큼</b> 오래됐다.', p: [[150, '마을 어귀', () => TREEC(75, 1.2)], [280, '먼 옛날', () => W.ancient()], [150, '안내판 "1000년"', () => TREEC(110, .9) + f('M20 140 h50 v24 h-50 z', '#fff', 2) + t(45, 157, 11, '1000년', BR)]] },
        { b: '과장', en: 'My phone is ancient!', ko: '내 폰은 완전 구닥다리야!', feel: '오래된 것을 <b>역사만큼</b> 부풀린다.', p: [[150, '친구의 새 폰', () => g(75, 130, 0, 2, PH)], [280, '말로 과장', () => W.ancient(f('M180 110 h32 v60 h-32 z', '#555') + f('M184 116 h24 v20 h-24 z', '#9ac47a'))], [150, '"공룡 시대 폰"', () => A(75, OR, 'phew', null, .6) + t(115, 60, 16, '🦕')]] }],
      elderly: [
        { b: '자리', en: 'He gave his seat to an elderly man.', ko: '그는 나이 지긋한 남자에게 자리를 양보했다.', feel: '<b>노년의 사람</b>을 정중하게 가리킨다.', p: [[150, '버스 안', () => SEAT(50, 220) + A(110, '#888', 'calm', 'M18 -92 L30 -50', .55)], [280, '노년의 사람', () => W.elderly()], [150, '"여기 앉으세요"', () => SEAT(50, 220) + g(50, 210, 0, .35, MAN('#888', 'smile')) + A(110, BL, 'smile', null, .55)]] },
        { b: '이웃', en: 'We help our elderly neighbor.', ko: '우리는 연세 드신 이웃을 돕는다.', feel: '<b>노년의 이웃</b>을 정중하게.', p: [[150, '눈 온 아침', () => f('M0 200 H150 V240 H0 z', '#fff') + BOXG(80, 120, 60, 80, '#e9e0c8')], [280, '노년의 사람', () => W.elderly()], [150, '눈을 치워 드린다', () => f('M0 200 H150 V240 H0 z', '#fff') + A(60, OR, 'smile', 'M18 -92 L40 -40', .6) + A(120, '#888', 'smile', null, .45)]] }]
    };
    const CORE = { new: '<b>만든 · 산 지 얼마 안 됐다.</b>', young: '<b>태어난 지 얼마 안 됐다.</b>', 'brand-new': '<b>막 만든 새것.</b>', youthful: '<b>젊게 느껴진다.</b>', old: '<b>오래됐다 · 나이 들었다.</b>', antique: '<b>오래된 골동품.</b>', ancient: '<b>역사 속 아주 오래됨.</b>', elderly: '<b>노년층 (격식 있는 말).</b>' };
