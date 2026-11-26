    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(angry · furious 장면 3은 하늘 · 폭풍처럼 사람이 아닌 것). 가운데 칸은 늘 같은 "마음 주전자"와 "무엇이?" 칸이다 — 김이 얼마나 오르나, 그리고 peaceful(장소 · 시간) · serene(사람 · 표정) · tranquil(풍경 · 물)처럼 무엇이 고요한가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'irritated', BASIC_B = '노트 장면';
    const FX = { calm: [.8, 500, 500, .06, .5], peaceful: [1, 600, 600, .05, .5], serene: [1.2, 700, 700, .04, .5], tranquil: [1.2, 400, 400, .04, .5], angry: [.4, 300, 400, .25, .4], irritated: [.15, 1600, 1600, .15, .4], furious: [.6, 200, 600, .35, .4], livid: [.9, 1800, 3000, .3, .4] };
    const ORDER = MIX(['calm', 'peaceful', 'serene', 'tranquil', 'angry', 'irritated', 'furious', 'livid']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const HT = { calm: 0, peaceful: 0, serene: 0, tranquil: 0, irritated: .35, angry: .6, furious: .85, livid: 1 };
    const WHAT = { calm: '흥분하지 않음', peaceful: '장소 · 시간이 편안', serene: '사람 · 표정이 평온', tranquil: '풍경 · 물이 고요', irritated: '거슬려 짜증', angry: '화가 남', furious: '매우 큰 분노', livid: '격한 분노' };
    const TC = (v) => v > .5 ? RD : v > 0 ? OR : GN;
    const KET = (id) => { const v = HT[id], n = Math.round(v * 5), c = v > .7 ? '#f4b0a0' : v > 0 ? '#ffe0b0' : '#cfe6f5';
      let s = f('M26 190 q-8 -64 36 -70 q44 6 36 70 z', c) + f('M50 120 q12 -14 24 0', '#555') + l('M96 150 q20 -6 22 -30', 6, '#555') + l('M28 150 q-16 0 -14 20', 5, '#555');
      s += Array.from({ length: n }, (_, i) => l('M' + (112 + (i % 2) * 4) + ' ' + (112 - i * 4) + ' q-8 -10 0 -20 t0 -20', 3, v > .7 ? RD : '#bbb')).join('');
      if (id === 'livid') s += t(62, 76, 18, '삐이익!', RD);
      if (!v) s += t(62, 162, 14, '잔잔', WT);
      s += f('M14 196 h96 v8 h-96 z', v > .5 ? OR : '#ccc') + (v > .5 ? t(62, 216, 12, '🔥', OR) : '');
      return s + t(62, 232, 12, v ? '끓는 정도 ' + Math.round(v * 100) : '끓는 정도 0', TC(v)); };
    const TP = (id, b, z) => { const c = TC(HT[id]);
      return DARK(280, '#f6f4ee') + KET(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 7 ? 14 : 17, WHAT[id], BL)) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { calm: P('calm', '차분'), peaceful: P('peaceful', '평화'), serene: P('serene', '잔잔'), tranquil: P('tranquil', '고요'), angry: P('angry', '부글'), irritated: P('irritated', '으으'), furious: P('furious', '활활'), livid: P('livid', '폭발') };
    // 작은 그림들
    const LAKE = (dark) => (dark ? DARK(150, '#f6d8c8') : '') + f('M0 140 H150 V240 H0 z', '#8fd0ee') + TREEC(30, .3) + TREEC(120, .35);
    const MOSQ = (x, y) => t(x, y, 14, '🦟');
    const DENT = (x, y) => g(x, y, 0, 1, f('M-60 0 v-22 l16 -18 h58 l20 18 h26 v22 z', RD) + '<circle cx="-34" cy="2" r="10" fill="#333"/><circle cx="34" cy="2" r="10" fill="#333"/>' + l('M0 -20 q6 6 0 12', 3, '#222'));
    const WAVES = (big) => f('M0 ' + (big ? 150 : 200) + ' q20 ' + (big ? -40 : -4) + ' 40 0 t40 0 t40 0 t40 0 V240 H0 z', '#4a7fb5');
    const SIGN = (x, y, txt, c) => f('M' + (x - 30) + ' ' + (y - 14) + ' h60 v28 h-60 z', '#fff', 2) + t(x, y + 5, 12, txt, c || BL) + l('M' + x + ' ' + (y + 14) + ' v30', 3, '#888');
    const C = {
      calm: { n: 'calm', past: 'calm', en: 'He stayed calm.', ko: '그는 침착했다.', feel: '<b>흥분하지 않는다.</b> 바다 · 날씨에도. l은 소리 내지 않는다.', t: .8,
        p: [[150, '정전!', () => DARK(150, '#1b1d26') + t(75, 80, 18, '깜깜', '#888')], [280, '김이 안 오름', () => W.calm()], [150, '손전등을 켠다', () => DARK(150, '#1b1d26') + A(75, BL, 'calm', 'M18 -92 L40 -80', .8) + l('M110 100 l30 -14 M110 100 l30 0', 2, GD)]] },
      peaceful: { n: 'peaceful', past: 'peaceful', en: 'It\'s peaceful here.', ko: '여기는 평화롭다.', feel: '<b>장소 · 시간이 편안하다.</b> 꼭 조용해야 하는 건 아니다.', t: 1,
        p: [[150, '시골 마당', () => TREEC(110, .5) + f('M0 220 H150 V240 H0 z', '#9ac47a')], [280, '장소 · 시간이 편안', () => W.peaceful()], [150, '해먹에서', () => l('M10 120 q65 50 130 0', 6, '#c96a4a') + g(75, 140, 0, .4, HEAD('phew')) + ZZ(100, 100)]] },
      serene: { n: 'serene', past: 'serene', en: 'She looked serene despite the delay.', ko: '연착에도 그녀는 평온해 보였다.', feel: '<b>사람 · 표정이 평온하다.</b> 아래 세상은 시끄러워도.', t: 1.2,
        p: [[150, '공항, 연착 3시간', () => SIGN(75, 60, '연착', RD) + A(30, BL, 'stern', null, .4) + A(120, OR, 'sad', null, .4)], [280, '사람 · 표정이 평온', () => W.serene()], [150, '조용히 책', () => A(75, MN, 'phew', 'M18 -92 L36 -70', .8) + BOOK(110, 140, .3)]] },
      tranquil: { n: 'tranquil', past: 'tranquil', en: 'The lake was tranquil at dawn.', ko: '새벽 호수는 고요했다.', feel: '<b>풍경 · 물이 고요하다.</b>', t: 1.2,
        p: [[150, '새벽 5시', () => LAKE(true) + SUN(75, 140, 12)], [280, '풍경 · 물이 고요', () => W.tranquil()], [150, '물에 비친 나무', () => LAKE(false) + t(75, 200, 14, '거울 같은 물', '#fff')]] },
      angry: { n: 'angry', past: 'angry', en: 'He is angry.', ko: '그는 화가 났다.', feel: '<b>화가 났다.</b> 미국 구어에선 mad도 자주.', t: .4,
        p: [[150, '장난감이 부서졌다', () => f('M60 220 l10 -20 l10 12 l10 -16 l10 24 z', RD)], [280, '김이 오른다', () => W.angry()], [150, '씩씩', () => A(75, OR, 'stern', null, .6) + t(110, 60, 16, '흥!', RD)]] },
      irritated: { n: 'irritated', past: 'irritated', en: 'I\'m getting irritated by that noise.', ko: '저 소리 때문에 짜증이 난다.', feel: '<b>거슬려서 짜증 난다.</b> 꼭 폭발하는 건 아니다. 피부에도.', t: .15,
        p: [[150, '옆집 공사', () => t(75, 80, 18, '드르륵', RD) + BOXG(30, 120, 90, 118, '#c8ccd2')], [280, '거슬려 짜증', () => W.irritated()], [150, '귀를 막는다', () => A(75, BL, 'stern', 'M-20 -90 L-28 -130 M20 -90 L28 -130', .8)]] },
      furious: { n: 'furious', past: 'furious', en: 'She was furious about the broken promise.', ko: '그녀는 약속이 깨져서 몹시 화가 났다.', feel: '<b>분노가 매우 크다.</b> 소리를 안 질러도 된다.', t: .6,
        p: [[150, '약속 장소, 2시간째', () => CLK(110, 50, 22) + A(60, MN, 'calm', null, .7)], [280, '매우 큰 분노', () => W.furious()], [150, '전화기를 꾹', () => A(75, MN, 'stern', 'M18 -92 L22 -126', .8) + t(124, 60, 18, '!!', RD)]] },
      livid: { n: 'livid', past: 'livid', en: 'He was livid when he found out.', ko: '그는 알게 되자 격분했다.', feel: '<b>격한 분노.</b> furious보다 크게 친다.', t: .9,
        p: [[150, '숨긴 성적표', () => DOC(75, 130, 1.6) + t(96, 100, 18, 'F', RD)], [280, '격한 분노', () => W.livid()], [150, '얼굴이 새빨갛다', () => g(75, 130, 0, 1.5, HEAD('stern')) + '<circle cx="75" cy="130" r="42" fill="' + RD + '" opacity=".3"/>']] }
    };
    const MORE = {
      calm: [
        { b: '바다', en: 'The sea is calm today.', ko: '오늘은 바다가 잔잔하다.', feel: '바다도 <b>흥분하지 않는다.</b>', p: [[150, '항구', () => WAVES(false) + f('M50 200 l10 -14 h40 l10 14 z', '#c9a171')], [280, '김이 안 오름', () => W.calm()], [150, '배가 출발', () => WAVES(false) + f('M80 200 l10 -14 h40 l10 14 z', '#c9a171') + SUN(30, 50, 14)]] },
        { b: '목소리', en: 'She spoke in a calm voice.', ko: '그녀는 차분한 목소리로 말했다.', feel: '목소리도 <b>차분하다.</b>', p: [[150, '울먹이는 아이', () => A(75, OR, 'sad', null, .55)], [280, '목소리의 온도', () => W.calm(l('M150 140 q14 -6 28 0 t28 0 t28 0', 3, WT))], [150, '울음이 멎는다', () => A(45, MN, 'smile', null, .65) + A(110, OR, 'phew', null, .5)]] }],
      peaceful: [
        { b: '아기', en: 'The baby looks peaceful.', ko: '아기가 평화로워 보인다.', feel: '잠든 시간이 <b>편안하다.</b>', p: [[150, '요람', () => f('M20 200 q55 -40 110 0 v20 h-110 z', '#f4c6d0')], [280, '시간이 편안', () => W.peaceful()], [150, '새근새근', () => f('M20 200 q55 -40 110 0 v20 h-110 z', '#f4c6d0') + g(75, 176, 0, .5, HEAD('phew')) + ZZ(100, 110)]] },
        { b: '시위', en: 'It was a peaceful protest.', ko: '평화로운 시위였다.', feel: '모임이 <b>폭력 없이</b> 편안하게.', p: [[150, '광장', () => [20, 50, 80, 110, 135].map((x) => g(x, 236, 0, .3, HEAD('calm'))).join('')], [280, '모임이 편안', () => W.peaceful(t(196, 146, 30, '🕊'))], [150, '촛불을 든다', () => [30, 75, 120].map((x) => A(x, BL, 'calm', 'M18 -92 L22 -118', .45) + FIRE(x + 14, 116, .12)).join('')]] }],
      serene: [
        { b: '할머니', en: 'Grandma\'s face was serene.', ko: '할머니 얼굴은 평온했다.', feel: '표정이 <b>잔잔하다.</b>', p: [[150, '정원 의자', () => TREEC(120, .4) + A(60, '#888', 'calm', null, .7)], [280, '사람 · 표정이 평온', () => W.serene(g(196, 146, 0, .7, HEAD('phew')))], [150, '차 한 잔', () => A(75, '#888', 'phew', 'M18 -92 L22 -122', .8)]] },
        { b: '미소', en: 'He gave a serene smile.', ko: '그는 평온한 미소를 지었다.', feel: '미소에 <b>흔들림이 없다.</b>', p: [[150, '모두 허둥지둥', () => A(40, OR, 'shock', null, .5) + A(110, BL, 'shock', null, .5)], [280, '표정이 평온', () => W.serene(g(196, 146, 0, .7, HEAD('smile')))], [150, '"괜찮아요"', () => A(75, BR, 'smile', null, .8)]] }],
      tranquil: [
        { b: '정원', en: 'The garden is tranquil.', ko: '정원이 고요하다.', feel: '풍경이 <b>고요하다.</b>', p: [[150, '돌 정원', () => f('M0 200 H150 V240 H0 z', '#e9e0c8') + l('M10 214 q20 -6 40 0 t40 0 t40 0', 2, '#bbb') + '<ellipse cx="75" cy="200" rx="20" ry="10" fill="#999"/>'], [280, '풍경이 고요', () => W.tranquil()], [150, '물소리만 졸졸', () => f('M0 200 H150 V240 H0 z', '#8fd0ee') + t(75, 150, 14, '졸졸', WT)]] },
        { b: '저녁', en: 'We spent a tranquil evening by the river.', ko: '우리는 강가에서 고요한 저녁을 보냈다.', feel: '저녁 풍경이 <b>고요하다.</b>', p: [[150, '노을', () => DARK(150, '#f6c8a8') + f('M0 160 H150 V240 H0 z', '#8fd0ee')], [280, '풍경이 고요', () => W.tranquil()], [150, '나란히 앉아', () => DARK(150, '#f6c8a8') + f('M0 180 H150 V240 H0 z', '#8fd0ee') + g(50, 180, 0, .4, MAN(MN, 'phew')) + g(100, 180, 0, .4, MAN(BL, 'phew'))]] }],
      angry: [
        { b: '손님', en: 'The customer was angry about the wait.', ko: '손님은 기다림 때문에 화가 났다.', feel: '<b>화가 났다.</b>', p: [[150, '식당, 40분째', () => CLK(110, 50, 22) + A(60, BR, 'calm', null, .7)], [280, '김이 오른다', () => W.angry()], [150, '"사장님 불러요!"', () => A(75, BR, 'stern', 'M18 -92 L40 -126', .8)]] },
        { b: '하늘', en: 'The sky looked angry.', ko: '하늘이 성난 듯했다.', feel: '하늘도 <b>화난 얼굴</b>을 한다.', p: [[150, '오후 3시', () => DARK(150, '#5a5a6a')], [280, '하늘의 김', () => W.angry(t(196, 146, 34, '⛈'))], [150, '우르릉 쾅', () => DARK(150, '#3a3a4a') + t(75, 110, 40, '⚡', GD)]] }],
      irritated: [
        { b: '모기', en: 'I\'m irritated by the mosquito.', ko: '모기 때문에 짜증이 난다.', feel: '자꾸 <b>거슬려</b> 짜증.', p: [[150, '잠들려는데', () => DARK(150, '#2b3550') + MOSQ(110, 60)], [280, '거슬려 짜증', () => W.irritated(MOSQ(196, 140))], [150, '불을 켠다', () => A(75, BL, 'stern', 'M18 -92 L40 -120', .8) + MOSQ(120, 60)]] },
        { b: '피부', en: 'My skin is irritated.', ko: '피부가 따끔따끔하다.', feel: '피부도 <b>거슬려</b> 성이 난다.', p: [[150, '새 스웨터', () => f('M40 60 l16 -10 h40 l16 10 l12 30 l-14 6 v54 h-68 v-54 l-14 -6 z', '#c96a4a')], [280, '피부가 짜증', () => W.irritated('<circle cx="186" cy="130" r="6" fill="#f4a0a0"/><circle cx="206" cy="146" r="5" fill="#f4a0a0"/>')], [150, '벅벅', () => A(75, MN, 'sad', 'M18 -92 L-6 -100', .8)]] }],
      furious: [
        { b: '아빠', en: 'Dad was furious about the dent.', ko: '아빠는 차 찌그러진 걸 보고 몹시 화가 났다.', feel: '<b>매우 큰 분노.</b>', p: [[150, '찌그러진 차', () => DENT(75, 220)], [280, '매우 큰 분노', () => W.furious()], [150, '부들부들', () => A(75, BR, 'stern', null, .8) + l('M40 100 l-8 4 M110 100 l8 4', 3, RD)]] },
        { b: '폭풍', en: 'A furious storm hit the coast.', ko: '사나운 폭풍이 해안을 덮쳤다.', feel: '폭풍도 <b>몹시 성나</b> 날뛴다.', p: [[150, '해안 마을', () => WAVES(false) + f('M100 200 v-30 l15 -12 l15 12 v30 z', '#e9e0c8')], [280, '매우 큰 분노', () => W.furious(t(196, 146, 34, '🌪'))], [150, '파도가 집채만', () => DARK(150, '#3a3a4a') + WAVES(true)]] }],
      livid: [
        { b: '사장', en: 'The boss was livid about the mistake.', ko: '사장은 실수에 격분했다.', feel: '<b>격한 분노</b>가 터진다.', p: [[150, '틀린 숫자 하나', () => DOC(75, 130, 1.6) + t(90, 120, 16, '0', RD)], [280, '격한 분노', () => W.livid()], [150, '회의실 고요', () => A(40, BL, 'shock', null, .55) + A(110, MN, 'shock', null, .55)]] },
        { b: '이웃', en: 'Our neighbor was livid about the noise.', ko: '이웃이 소음 때문에 격분했다.', feel: '참다 참다 <b>폭발했다.</b>', p: [[150, '새벽 2시 파티', () => DARK(150, '#2b3550') + t(75, 100, 24, '♪♫', GD)], [280, '격한 분노', () => W.livid()], [150, '쾅쾅쾅', () => BOXG(80, 60, 50, 178, '#c9a171') + A(40, '#888', 'stern', 'M18 -92 L46 -100', .65) + t(60, 50, 16, '쾅!', RD)]] }]
    };
    const CORE = { calm: '<b>흥분하지 않는다.</b>', peaceful: '<b>장소 · 시간이 편안하다.</b>', serene: '<b>사람 · 표정이 평온하다.</b>', tranquil: '<b>풍경 · 물이 고요하다.</b>', angry: '<b>화가 났다.</b>', irritated: '<b>거슬려서 짜증 난다.</b>', furious: '<b>분노가 매우 크다.</b>', livid: '<b>격한 분노 (furious보다 크게).</b>' };
