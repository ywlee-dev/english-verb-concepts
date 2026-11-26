    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "화분 하나"와 "무엇이?" 칸이다 — 생기가 얼마나 있나, 그리고 lively(지금) · thriving(쭉) · lifeless(보이는 생기) · deceased(사람, 격식)처럼 무엇을 보는 말인가만 바뀐다. deceased는 사람에게만 쓰는 말이라 칸 안에 화분 대신 사진 액자를 그렸다.
    const WORD = '형용사', BASE = '', FIRST = 'lifeless', BASIC_B = '노트 장면';
    const FX = { alive: [.4, 800, 900, .1, .4], lively: [.2, 1400, 1800, .15, .4], thriving: [.6, 700, 1400, .12, .4], dead: [.8, 200, 100, .1, .5], lifeless: [.8, 300, 280, .06, .5], deceased: [1.2, 400, 380, .05, .6] };
    const ORDER = MIX(['alive', 'lively', 'thriving', 'dead', 'lifeless', 'deceased']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const LF = { thriving: 1, lively: .85, alive: .5, lifeless: .18, dead: 0, deceased: 0 };
    const WHAT = { lively: '지금 활발함', thriving: '쭉 잘됨', lifeless: '생기가 안 보임', deceased: '사람 · 격식 있는 말' };
    const TC = (v) => v > .3 ? GN : '#888';
    const POT = (id) => { const v = LF[id], c = v > .3 ? '#3a9a6a' : v > .1 ? '#9aa88a' : '#a3743f';
      if (id === 'deceased') return f('M24 60 h76 v96 h-76 z', '#fff', 3) + g(62, 112, 0, .8, HEAD('calm')) + f('M24 60 l20 0 l-20 20 z', '#222') + t(62, 180, 14, '삼가 고인을', '#555') + t(62, 226, 13, '사람에게만', '#555');
      const h = 30 + v * 80, droop = v < .3;
      let s = f('M38 170 h48 l-6 34 h-36 z', '#c9a171') + l(droop ? 'M62 170 q4 -' + h + ' -24 -' + (h - 20) : 'M62 170 v-' + h, 5, c);
      if (!droop) s += [.4, .7].map((p) => l('M62 ' + (170 - h * p) + ' q-18 -6 -24 -20 M62 ' + (170 - h * p - 8) + ' q18 -6 24 -20', 4, c)).join('');
      else s += l('M60 ' + (170 - h * .5) + ' q-10 10 -12 26', 3, c);
      if (v > .9) s += ['#f4a0b0', GD, '#f4a0b0'].map((cc, i) => '<circle cx="' + (40 + i * 22) + '" cy="' + (60 + (i % 2) * 14) + '" r="8" fill="' + cc + '" stroke="#222" stroke-width="2"/>').join('') + t(104, 70, 16, '↑', GN);
      if (id === 'lively') s += l('M28 70 l-8 -4 M96 70 l8 -4 M30 100 l-10 0 M94 100 l10 0', 2.5, GD);
      if (id === 'dead') s += f('M30 204 q16 -6 24 2 M70 206 q10 -8 20 0', '#a3743f', 2);
      return s + t(62, 226, 13, '생기 ' + Math.round(v * 100), TC(v)); };
    const TP = (id, b, z) => { const c = TC(LF[id]);
      return DARK(280, '#f6f4ee') + POT(id) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 14 : 18, WHAT[id], BL) : t(196, 128, 15, '생명이', '#888') + t(196, 150, 15, id === 'dead' ? '없다' : '있다', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { alive: P('alive', '파릇'), lively: P('lively', '팔짝팔짝'), thriving: P('thriving', '쑥쑥'), dead: P('dead', '바싹'), lifeless: P('lifeless', '축'), deceased: P('deceased', '고요') };
    // 작은 그림들
    const PLANT = (x, v) => { const h = 30 + v * 60, c = v > .3 ? '#3a9a6a' : '#a3743f';
      return f('M' + (x - 20) + ' 200 h40 l-5 30 h-30 z', '#c9a171') + l(v > .3 ? 'M' + x + ' 200 v-' + h + ' M' + x + ' ' + (200 - h * .6) + ' q-14 -4 -20 -16 M' + x + ' ' + (200 - h * .6) + ' q14 -4 20 -16' : 'M' + x + ' 200 q4 -40 -20 -30', 4, c); };
    const PUP = (x, y, k, jump) => g(x, y - (jump ? 20 : 0), jump ? -10 : 0, k || 1, '<ellipse cy="-18" rx="26" ry="14" fill="#c9a171" stroke="#222" stroke-width="3"/><circle cx="24" cy="-34" r="12" fill="#c9a171" stroke="#222" stroke-width="3"/>' + l('M-16 -6 l-6 12 M12 -6 l6 12', 5));
    const GARDEN = (w, v) => [20, 55, 90, 125].filter((x) => x < w).map((x) => PLANT(x, v)).join('');
    const FISH = (x, y, k, up) => g(x, y, up ? 180 : 0, k || 1, f('M-20 0 q14 -14 34 0 l10 -8 v16 l-10 -8 q-20 14 -34 0 z', OR) + '<circle cx="-10" cy="-2" r="2.5"/>');
    const BOWL = (x, y) => '<ellipse cx="' + x + '" cy="' + y + '" rx="44" ry="36" fill="#cfe6f5" stroke="#222" stroke-width="3"/>';
    const SHOPF = (x, y, c) => BOXG(x, y, 110, 90, '#f2d59a') + f('M' + x + ' ' + y + ' h110 v18 h-110 z', c || GN);
    const DOLL = (x, y, k) => g(x, y, 0, k || 1, f('M-16 0 v-40 h32 v40 z', '#f4c6d0') + '<circle cy="-54" r="16" fill="' + SK + '" stroke="#222" stroke-width="3"/><circle cx="-6" cy="-56" r="3"/><circle cx="6" cy="-56" r="3"/>');
    const FRAMEP = (x, y, k) => g(x, y, 0, k || 1, f('M-30 -40 h60 v80 h-60 z', '#fff') + g(0, 0, 0, .6, HEAD('smile')) + f('M-30 -40 l16 0 l-16 16 z', '#222'));
    const C = {
      alive: { n: 'alive', past: 'alive', en: 'The plant is still alive.', ko: '식물이 아직 살아 있다.', feel: '<b>생명이 있다.</b> 명사 앞이 아니라 be 뒤에만.', t: .4,
        p: [[150, '여행 다녀왔다', () => PLANT(75, .3) + PKG(130, 220, .5)], [280, '생기 절반', () => W.alive()], [150, '물을 준다', () => PLANT(100, .5) + A(40, MN, 'smile', 'M18 -92 L46 -80', .6)]] },
      lively: { n: 'lively', past: 'lively', en: 'The puppy is lively today.', ko: '강아지가 오늘따라 활기차다.', feel: '<b>지금 에너지가 보인다.</b> 모임 · 대화에도.', t: .2,
        p: [[150, '아침 산책 전', () => PUP(75, 220, 1.4)], [280, '지금 활발함', () => W.lively(PUP(196, 170, 1, true))], [150, '이리 뛰고 저리 뛰고', () => PUP(50, 220, .9, true) + PUP(110, 220, .9) + t(75, 80, 16, '멍멍!', OR)]] },
      thriving: { n: 'thriving', past: 'thriving', en: 'The garden is thriving.', ko: '정원이 무럭무럭 잘 자란다.', feel: '<b>시간에 걸쳐 쭉 잘된다.</b> 사업에도.', t: .6,
        p: [[150, '봄에 심었다', () => GARDEN(150, .15)], [280, '쭉 잘됨', () => W.thriving()], [150, '여름, 꽃 가득', () => GARDEN(150, 1) + ['#f4a0b0', GD, '#f4a0b0', GD].map((c, i) => '<circle cx="' + (20 + i * 35) + '" cy="120" r="7" fill="' + c + '"/>').join('')]] },
      dead: { n: 'dead', past: 'dead', en: 'The plant is dead.', ko: '식물이 죽었다.', feel: '<b>생명이 없다.</b> 배터리가 다 됐을 때도.', t: .8,
        p: [[150, '한 달 동안 깜빡', () => CLK(75, 80, 30) + t(75, 140, 14, '30일', RD)], [280, '생기 0', () => W.dead()], [150, '"미안해…"', () => PLANT(110, 0) + A(45, MN, 'sad', null, .65)]] },
      lifeless: { n: 'lifeless', past: 'lifeless', en: 'The room looked lifeless.', ko: '방이 생기 없어 보였다.', feel: '<b>생기가 안 보인다.</b> 꼭 죽음을 말하는 건 아니다.', t: .8,
        p: [[150, '빈 방', () => DARK(150, '#d8d8dc') + BOXG(30, 60, 50, 40, '#c8ccd2')], [280, '생기가 안 보임', () => W.lifeless()], [150, '화분 하나 둘까', () => DARK(150, '#d8d8dc') + PLANT(110, .6) + A(45, MN, 'calm', null, .6)]] },
      deceased: { n: 'deceased', past: 'deceased', en: 'The document names his deceased father.', ko: '그 서류에는 돌아가신 그의 아버지 이름이 적혀 있다.', feel: '<b>사람에게 쓰는 격식 있는 말.</b> 동물 · 물건에는 안 쓴다.', t: 1.2,
        p: [[150, '서류 한 장', () => DOC(75, 130, 1.6)], [280, '사람 · 격식', () => W.deceased()], [150, '조용히 서명', () => A(75, BR, 'calm', 'M18 -92 L40 -60', .8) + DOC(118, 180, .6)]] }
    };
    const MORE = {
      alive: [
        { b: '물고기', en: 'The fish is still alive.', ko: '물고기가 아직 살아 있다.', feel: '<b>생명이 있다.</b>', p: [[150, '어항이 쏟아졌다', () => f('M10 220 q65 -14 130 0 v18 h-130 z', '#8fd0ee') + FISH(75, 214, 1)], [280, '생기 있음', () => W.alive(FISH(196, 140, 1.2))], [150, '새 어항으로 퐁당', () => BOWL(75, 150) + FISH(75, 150, 1)]] },
        { b: '추억', en: 'The old song keeps the memory alive.', ko: '그 옛 노래가 추억을 살아 있게 한다.', feel: '추억도 <b>숨이 붙어</b> 있다.', p: [[150, '라디오에서', () => BOXG(30, 120, 90, 60, '#a3743f') + t(75, 100, 20, '♪', BL)], [280, '추억의 생기', () => W.alive(FRAMEP(196, 134, .8))], [150, '그때가 떠오른다', () => A(75, '#888', 'smile', null, .8) + t(124, 60, 18, '♫', BL)]] }],
      lively: [
        { b: '시장', en: 'The market is lively in the morning.', ko: '아침 시장은 활기차다.', feel: '장소에도 <b>지금 에너지</b>가 넘친다.', p: [[150, '새벽 시장', () => BOXG(10, 140, 60, 40, '#f2d59a') + BOXG(80, 140, 60, 40, '#f2d59a') + t(40, 130, 16, '🐟') + t(110, 130, 16, '🍎')], [280, '지금 활발함', () => W.lively(t(196, 140, 18, '"싸요 싸!"', OR))], [150, '사람이 북적', () => [20, 50, 80, 110, 135].map((x, i) => A(x, [BL, MN, OR, GN, BR][i], 'smile', null, .4)).join('')]] },
        { b: '대화', en: 'We had a lively talk.', ko: '우리는 활발하게 이야기를 나눴다.', feel: '말에도 <b>에너지</b>가 오간다.', p: [[150, '카페', () => A(40, MN, 'smile', 'M18 -92 L40 -120', .55) + A(110, BL, 'smile', 'M-18 -92 L-40 -120', .55)], [280, '말의 생기', () => W.lively(t(176, 130, 18, '!', OR) + t(206, 150, 18, '?', BL) + t(226, 120, 18, '!', OR))], [150, '시간 가는 줄 모름', () => CLK(75, 100, 34) + t(75, 170, 14, '벌써 3시간', OR)]] }],
      thriving: [
        { b: '빵집', en: 'Her bakery is thriving.', ko: '그녀의 빵집은 번창하고 있다.', feel: '장사도 <b>쭉 잘된다.</b>', p: [[150, '작은 가게 시작', () => SHOPF(20, 120, OR)], [280, '쭉 잘됨', () => W.thriving(l('M150 176 l24 -20 l20 6 l30 -40', 4, GN) + t(232, 116, 16, '↑', GN))], [150, '줄이 길다', () => SHOPF(20, 60, OR) + [20, 45, 70, 95, 120].map((x) => g(x, 236, 0, .25, HEAD('smile'))).join('')]] },
        { b: '아이들', en: 'The kids are thriving at the new school.', ko: '아이들이 새 학교에서 잘 지내고 있다.', feel: '사람도 <b>쭉 잘 자란다.</b>', p: [[150, '전학 첫날', () => A(75, OR, 'shock', null, .55)], [280, '쭉 잘됨', () => W.thriving(t(196, 146, 30, '🌱→🌳'))], [150, '친구가 많다', () => A(40, OR, 'smile', null, .5) + A(75, GN, 'smile', null, .5) + A(110, MN, 'smile', null, .5)]] }],
      dead: [
        { b: '배터리', en: 'My phone is dead.', ko: '휴대폰 배터리가 나갔다.', feel: '기계도 <b>생명이 다한다.</b>', p: [[150, '하루 종일 게임', () => g(75, 130, 0, 2, PH)], [280, '생기 0', () => W.dead(f('M170 120 h44 v26 h-44 z M214 128 h6 v10 h-6 z', '#fff', 3) + f('M174 124 h6 v18 h-6 z', RD, 0))], [150, '화면이 깜깜', () => g(75, 130, 0, 2, f('M-12 -21 h24 v42 h-24 z', '#222'))]] },
        { b: '거리', en: 'The street is dead at night.', ko: '밤이 되면 거리가 죽은 듯 조용하다.', feel: '거리에도 <b>생기가 0.</b>', p: [[150, '낮에는 북적', () => [20, 55, 90, 125].map((x) => g(x, 236, 0, .3, HEAD('smile'))).join('') + SUN(110, 40, 14)], [280, '거리의 생기', () => W.dead(BOXG(160, 110, 30, 60, '#555') + BOXG(200, 100, 30, 70, '#555'))], [150, '밤, 아무도 없다', () => DARK(150, '#1b1d26') + MOON(110, 40, .5) + l('M30 238 v-90', 4, '#888') + '<circle cx="30" cy="144" r="8" fill="' + GD + '"/>']] }],
      lifeless: [
        { b: '인형', en: 'The doll\'s eyes looked lifeless.', ko: '인형 눈이 생기가 없어 보였다.', feel: '<b>생기가 안 보인다.</b>', p: [[150, '골동품 가게', () => DOLL(75, 220, 1.6)], [280, '생기가 안 보임', () => W.lifeless(DOLL(196, 176, 1))], [150, '으스스', () => A(75, BL, 'shock', null, .8) + t(124, 60, 14, '으스스', '#888')]] },
        { b: '노래', en: 'Her singing sounded lifeless.', ko: '그녀의 노래가 생기 없게 들렸다.', feel: '노래에 <b>숨결이 안 보인다.</b>', p: [[150, '같은 노래 50번째', () => A(75, MN, 'calm', 'M18 -92 L22 -126', .8) + t(124, 60, 14, '50번째', '#888')], [280, '노래의 생기', () => W.lifeless(l('M150 140 h100', 3, '#aaa') + t(196, 120, 16, '♪', '#aaa'))], [150, '"좀 쉬자"', () => A(40, '#888', 'calm', null, .55) + A(110, MN, 'down', null, .55)]] }],
      deceased: [
        { b: '추도식', en: 'We remembered our deceased grandmother.', ko: '우리는 돌아가신 할머니를 기렸다.', feel: '<b>사람에게, 정중하게.</b>', p: [[150, '할머니 사진', () => FRAMEP(75, 130, 1.4)], [280, '사람 · 격식', () => W.deceased()], [150, '꽃을 놓는다', () => FRAMEP(110, 120, .8) + A(45, MN, 'calm', 'M18 -92 L46 -70', .65) + t(80, 180, 16, '💐')]] },
        { b: '서류', en: 'The form asks if your parents are living or deceased.', ko: '서류에 부모님이 살아 계신지 돌아가셨는지 묻는다.', feel: '서류에 쓰는 <b>격식 있는 말.</b>', p: [[150, '서류 칸', () => DOC(75, 130, 1.6)], [280, '사람 · 격식', () => W.deceased(f('M150 110 h16 v16 h-16 z M150 140 h16 v16 h-16 z', '#fff', 2) + t(212, 124, 12, '살아 계심', '#555') + t(212, 154, 12, '돌아가심', '#555'))], [150, '체크', () => A(75, BL, 'calm', 'M18 -92 L40 -60', .8)]] }]
    };
    const CORE = { alive: '<b>생명이 있다.</b>', lively: '<b>지금 에너지가 보인다.</b>', thriving: '<b>시간에 걸쳐 쭉 잘된다.</b>', dead: '<b>생명이 없다.</b>', lifeless: '<b>생기가 안 보인다.</b>', deceased: '<b>사람에게 쓰는 격식 있는 말.</b>' };
