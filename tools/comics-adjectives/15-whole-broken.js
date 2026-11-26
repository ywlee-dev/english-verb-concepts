    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "꽃병 하나"와 "무엇이?" 칸이다 — 꽃병이 얼마나 망가졌나(금 · 조각 · 찌그러짐), 그리고 whole · complete처럼 무엇을 보는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'cracked', BASIC_B = '노트 장면';
    const FX = { whole: [.4, 600, 700, .1, .4], intact: [.3, 1200, 1300, .1, .4], complete: [.4, 900, 1400, .12, .4], broken: [.3, 900, 300, .3, .4], cracked: [.1, 2200, 1800, .2, .4], shattered: [.6, 3000, 1200, .35, .4], crushed: [.4, 200, 120, .35, .4] };
    const ORDER = MIX(['whole', 'intact', 'complete', 'broken', 'cracked', 'shattered', 'crushed']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632', VC = '#5a8fc0';
    const DM = { whole: 0, intact: 0, complete: 0, cracked: .3, broken: .6, crushed: .7, shattered: 1 };
    const WHAT = { whole: '하나 전부', intact: '손상 없음', complete: '빠진 것 없음', broken: '모양 · 기능 잃음', cracked: '금만 감', shattered: '여러 조각', crushed: '눌린 모양' };
    const TC = (v) => v ? RD : GN;
    const VASE = 'M48 60 h28 v14 q22 20 18 64 q-4 40 -32 40 q-28 0 -32 -40 q-4 -44 18 -64 z';
    const VS = (id) => { const v = DM[id];
      if (id === 'shattered') return [[30, 196, 20], [52, 186, -30], [74, 198, 40], [92, 188, 10], [60, 204, -60], [40, 176, 70]].map(([x, y, r]) => g(x, y, r, 1, f('M-8 -6 l14 -4 l2 12 z', VC))).join('') + t(62, 226, 13, '조각 6개', RD);
      if (id === 'crushed') return f('M40 190 q-10 -10 4 -20 q-8 -10 10 -12 q10 -8 20 2 q14 -4 16 10 q12 6 4 18 z', VC) + t(62, 226, 13, '납작', RD);
      if (id === 'broken') return f(VASE, VC) + f('M44 120 l16 -10 l12 20 l20 -8 l4 -40 l-30 0 z', '#f6f4ee', 0) + g(100, 196, 30, 1, f('M-10 -8 l18 -4 l2 14 z', VC)) + t(62, 226, 13, '깨짐 · 기능 잃음', RD);
      let s = f(VASE, VC);
      if (id === 'cracked') s += l('M58 76 l6 16 l-6 12 l8 18 l-4 14', 2.5, '#222');
      if (id === 'complete') s += f('M100 160 h16 v20 h-16 z M8 160 h16 v20 h-16 z', VC) + t(62, 52, 12, '3개 세트', GN);
      if (id === 'whole') s += t(62, 136, 14, '통째', '#fff');
      if (id === 'intact') s += t(96, 80, 16, '✔', GN);
      return s + t(62, 226, 13, v ? '금 감 · 아직 붙음' : '멀쩡', TC(v)); };
    const TP = (id, b, z) => { const c = TC(DM[id]);
      return DARK(280, '#f6f4ee') + VS(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') +
        (b || t(196, 136, 18, WHAT[id], BL)) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { whole: P('whole', '통째로'), intact: P('intact', '멀쩡'), complete: P('complete', '다 모였다'), broken: P('broken', '와장창'), cracked: P('cracked', '쩍'), shattered: P('shattered', '산산조각'), crushed: P('crushed', '찌그럭') };
    // 작은 그림들
    const CAKE = (x, y, k, part) => g(x, y, 0, k || 1, f(part ? 'M-40 0 v-30 h40 v30 z' : 'M-40 0 v-30 h80 v30 z', '#f4c6d0') + f(part ? 'M-40 -30 h40 v-8 h-40 z' : 'M-40 -30 h80 v-8 h-80 z', '#fff'));
    const PHN = (x, y, k, crack) => g(x, y, 0, k || 1, PH + (crack ? l('M-6 -14 l4 8 l-6 6 l8 10', 2, '#fff') : ''));
    const PLATE = (x, y, k) => g(x, y, 0, k || 1, '<ellipse rx="40" ry="10" fill="#fff" stroke="#222" stroke-width="3"/>');
    const CAN = (x, y, k, flat) => g(x, y, 0, k || 1, flat ? f('M-24 0 q-6 -10 2 -16 q10 -6 22 -2 q14 -4 24 6 q2 10 -6 12 z', RD) : f('M-16 -50 h32 v50 h-32 z', RD) + l('M-16 -44 h32', 2, '#fff'));
    const BOX = (x, y, k, dent) => g(x, y, 0, k || 1, f(dent ? 'M-30 0 v-40 l20 8 l14 -10 l26 4 v38 z' : 'M-30 0 v-40 h60 v40 z', '#c9a171') + l('M-30 -20 h60', 2, '#8a6a3a'));
    const PUZ = (x, y, k, miss) => g(x, y, 0, k || 1, f('M-40 -30 h80 v60 h-80 z', '#cfe6f5') + l('M-40 0 h80 M0 -30 v60', 2) + (miss ? f('M0 0 h40 v30 h-40 z', '#fff') : ''));
    const EGGS = (x, y) => f('M' + (x - 40) + ' ' + y + ' h80 v14 h-80 z', '#c9a171') + [-24, 0, 24].map((d) => '<ellipse cx="' + (x + d) + '" cy="' + (y - 8) + '" rx="10" ry="13" fill="#fff6e8" stroke="#222" stroke-width="2.5"/>').join('');
    const WATCH = (x, y, k, br) => g(x, y, 0, k || 1, f('M-10 -40 h20 v80 h-20 z', '#555') + '<circle r="22" fill="#fff" stroke="#222" stroke-width="3"/>' + (br ? l('M-10 -6 l20 12 M6 -16 l-4 8', 2) : l('M0 0 v-14 M0 0 l10 4', 2.5)));
    const ICE = (w, crack) => f('M0 180 H' + w + ' V240 H0 z', '#cfe6f5') + (crack ? l('M20 200 l30 10 l20 -8 l30 14 l30 -6', 2.5, '#4a7fb5') : '');
    const C = {
      whole: { n: 'whole', past: 'whole', en: 'I ate the whole cake.', ko: '케이크 하나를 통째로 다 먹었다.', feel: '<b>빠진 데 없이 하나 전부.</b> hole(구멍)과 소리가 같다.', t: .4,
        p: [[150, '케이크 한 판', () => CAKE(75, 200, 1.3)], [280, '하나 전부', () => W.whole(CAKE(196, 160, .9))], [150, '빈 접시, 배 빵빵', () => PLATE(75, 220, 1) + A(75, MN, 'phew', null, .6)]] },
      intact: { n: 'intact', past: 'intact', en: 'The vase arrived intact.', ko: '꽃병이 멀쩡하게 도착했다.', feel: '<b>손상이 없다.</b>', t: .3,
        p: [[150, '조심 택배', () => BOX(75, 220, 1.4) + t(75, 160, 14, '취급 주의', RD)], [280, '손상 없음', () => W.intact()], [150, '휴, 다행', () => A(75, MN, 'phew', null, .8)]] },
      complete: { n: 'complete', past: 'complete', en: 'The collection is complete.', ko: '수집품이 빠짐없이 다 모였다.', feel: '<b>빠진 것이 없다.</b> 하나하나가 멀쩡한지는 다른 이야기.', t: .4,
        p: [[150, '마지막 한 개', () => [30, 60, 90].map((x) => f('M' + (x - 10) + ' 150 h20 v40 h-20 z', VC)).join('') + f('M110 150 h20 v40 h-20 z', '#fff', 2) + t(120, 140, 14, '?', '#888')], [280, '빠진 것 없음', () => W.complete()], [150, '선반이 꽉', () => [25, 50, 75, 100, 125].map((x) => f('M' + (x - 10) + ' 150 h20 v40 h-20 z', VC)).join('') + l('M10 190 h130', 4, '#a3743f')]] },
      broken: { n: 'broken', past: 'broken', en: 'The vase is broken.', ko: '꽃병이 깨졌다.', feel: '<b>모양이나 기능을 잃었다.</b> 기계가 고장 났을 때도.', t: .3,
        p: [[150, '공놀이', () => '<circle cx="110" cy="80" r="14" fill="#fff" stroke="#222" stroke-width="3"/>' + A(40, OR, 'smile', null, .55)], [280, '모양을 잃음', () => W.broken()], [150, '"내가 안 그랬어…"', () => A(75, OR, 'sad', null, .6)]] },
      cracked: { n: 'cracked', past: 'cracked', en: 'My phone screen is cracked.', ko: '휴대폰 화면에 금이 갔다.', feel: '<b>갈라졌지만 아직 붙어 있다.</b>', t: .1,
        p: [[150, '툭 떨어졌다', () => g(75, 200, 30, 2, PH) + t(75, 80, 18, '툭', RD)], [280, '금만 감', () => W.cracked(PHN(196, 136, 1.4, true))], [150, '그래도 켜진다', () => A(75, BL, 'phew', 'M18 -92 L22 -126', .8)]] },
      shattered: { n: 'shattered', past: 'shattered', en: 'The plate is shattered.', ko: '접시가 산산조각 났다.', feel: '<b>여러 조각으로 깨졌다.</b> 꿈 · 기대에도.', t: .6,
        p: [[150, '설거지하다 미끌', () => PLATE(75, 100, 1) + t(75, 160, 18, '앗', RD)], [280, '여러 조각', () => W.shattered()], [150, '빗자루 들고', () => A(75, MN, 'sad', 'M18 -92 L40 -40', .8) + l('M110 140 v96', 4, '#a3743f')]] },
      crushed: { n: 'crushed', past: 'crushed', en: 'The can is crushed.', ko: '캔이 찌그러졌다.', feel: '<b>조각이 아니라 눌린 모양.</b>', t: .4,
        p: [[150, '빈 캔', () => CAN(75, 210, 1.6)], [280, '눌린 모양', () => W.crushed(CAN(196, 160, 1.2, true))], [150, '발로 꾹', () => CAN(90, 236, 1, true) + A(60, BL, 'stern', null, .7)]] }
    };
    const MORE = {
      whole: [
        { b: '피자', en: 'He ate a whole pizza by himself.', ko: '그는 혼자 피자 한 판을 통째로 먹었다.', feel: '<b>하나 전부.</b>', p: [[150, '라지 피자', () => '<circle cx="75" cy="160" r="50" fill="#f2b632" stroke="#222" stroke-width="3"/>'], [280, '하나 전부', () => W.whole()], [150, '빈 상자', () => BOX(75, 220, 1.4) + A(30, BR, 'phew', null, .5)]] },
        { b: '인생', en: 'I have lived here my whole life.', ko: '나는 평생 여기서 살았다.', feel: '시간도 <b>빠진 데 없이</b> 전부.', p: [[150, '아기 때 사진', () => f('M30 60 h90 v70 h-90 z', '#fff') + g(75, 100, 0, .4, HEAD('smile'))], [280, '시간 전부', () => W.whole(t(196, 140, 18, '0살 → 70살', BL))], [150, '같은 집 마당', () => TREEC(110, .5) + A(50, '#888', 'smile', null, .7)]] }],
      intact: [
        { b: '계란', en: 'The eggs arrived intact.', ko: '계란이 하나도 안 깨지고 도착했다.', feel: '<b>손상이 없다.</b>', p: [[150, '덜컹덜컹 배달', () => BOX(75, 220, 1.2) + t(75, 120, 16, '덜컹', OR)], [280, '손상 없음', () => W.intact(EGGS(196, 160))], [150, '"다 멀쩡해!"', () => EGGS(75, 200) + t(75, 120, 16, '✔', GN)]] },
        { b: '자존심', en: 'Her pride was intact.', ko: '그녀의 자존심은 상하지 않았다.', feel: '마음도 <b>깨진 데 없다.</b>', p: [[150, '경기에 졌다', () => A(75, MN, 'calm', null, .8)], [280, '자존심 손상 없음', () => W.intact(t(196, 146, 30, '👑'))], [150, '고개를 든다', () => A(75, MN, 'smile', 'M18 -92 L36 -126', .8)]] }],
      complete: [
        { b: '퍼즐', en: 'The puzzle is complete.', ko: '퍼즐이 완성됐다.', feel: '<b>빠진 조각이 없다.</b>', p: [[150, '한 조각 남음', () => PUZ(75, 140, 1.2, true)], [280, '빠진 것 없음', () => W.complete(PUZ(196, 140, .9, false))], [150, '짠!', () => A(75, MN, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .8)]] },
        { b: '가족', en: 'Now our family is complete.', ko: '이제 우리 가족이 다 모였다.', feel: '자리 하나도 <b>빈 데가 없다.</b>', p: [[150, '아기가 태어났다', () => f('M30 190 q45 -40 90 0 v20 h-90 z', '#f4c6d0') + g(75, 170, 0, .4, HEAD('smile'))], [280, '빠진 자리 없음', () => W.complete(t(196, 146, 30, '👪'))], [150, '가족사진', () => [30, 60, 90, 120].map((x, i) => A(x, [BL, MN, OR, GN][i], 'smile', null, i > 1 ? .35 : .5)).join('')]] }],
      broken: [
        { b: '시계', en: 'My watch is broken.', ko: '시계가 고장 났다.', feel: '<b>기능을 잃었다.</b>', p: [[150, '바늘이 멈췄다', () => WATCH(75, 130, 1.4, true)], [280, '기능을 잃음', () => W.broken(WATCH(196, 136, .9, true))], [150, '시계방으로', () => A(75, BL, 'calm', null, .8) + BOXG(100, 100, 46, 40, '#f2d59a')]] },
        { b: '마음', en: 'She has a broken heart.', ko: '그녀는 마음이 무너졌다.', feel: '마음도 <b>깨진다.</b>', p: [[150, '이별 문자', () => g(75, 130, 0, 2, PH)], [280, '마음이 깨짐', () => W.broken(t(196, 150, 40, '💔'))], [150, '창가에서', () => BOXG(30, 40, 70, 60, '#cfe6f5') + A(100, MN, 'sad', null, .7)]] }],
      cracked: [
        { b: '얼음', en: 'The ice on the pond is cracked.', ko: '연못 얼음에 금이 갔다.', feel: '갈라졌지만 <b>아직 붙어 있다.</b>', p: [[150, '꽁꽁 언 연못', () => ICE(150, false) + TREEC(120, .4)], [280, '금만 감', () => W.cracked(f('M140 140 h112 v30 h-112 z', '#cfe6f5') + l('M150 150 l30 8 l20 -6 l30 10', 2.5, WT))], [150, '"들어가지 마!"', () => ICE(150, true) + A(75, MN, 'stern', 'M18 -92 L46 -100', .6)]] },
        { b: '목소리', en: 'He spoke in a cracked voice.', ko: '그는 갈라진 목소리로 말했다.', feel: '목소리에도 <b>금이 간다.</b>', p: [[150, '노래방 3시간', () => A(75, BR, 'phew', 'M18 -92 L22 -126', .8) + t(124, 60, 18, '♪', BL)], [280, '목소리의 금', () => W.cracked(t(196, 140, 20, '"안…녕…"', BR))], [150, '꿀물 한 잔', () => f('M60 120 h30 l-4 50 h-22 z', GD) + A(120, BR, 'calm', null, .5)]] }],
      shattered: [
        { b: '유리창', en: 'The window is shattered.', ko: '유리창이 산산조각 났다.', feel: '<b>여러 조각</b>으로 깨졌다.', p: [[150, '야구공이 날아온다', () => '<circle cx="40" cy="80" r="12" fill="#fff" stroke="#222" stroke-width="3"/>' + BOXG(80, 50, 60, 80, '#cfe6f5')], [280, '여러 조각', () => W.shattered()], [150, '"누구야!"', () => A(75, '#888', 'stern', 'M18 -92 L40 -120', .8) + t(124, 60, 18, '!', RD)]] },
        { b: '꿈', en: 'His dreams were shattered.', ko: '그의 꿈이 산산조각 났다.', feel: '꿈도 <b>여러 조각</b>으로 부서진다.', p: [[150, '오디션 결과', () => BOXG(20, 40, 110, 60, '#fff') + t(75, 78, 18, '불합격', RD)], [280, '꿈이 조각남', () => W.shattered([[170, 130], [196, 150], [222, 126]].map(([x, y]) => t(x, y, 18, '★', '#bbb')).join(''))], [150, '무릎을 꿇는다', () => g(75, 238, 0, .7, MAN(BL, 'down', null, 'M-12 -42 L-20 -4 L10 -4 M12 -42 L14 0'))]] }],
      crushed: [
        { b: '상자', en: 'The box got crushed in the mail.', ko: '택배 상자가 찌그러져서 왔다.', feel: '<b>눌려서</b> 모양이 찌그러졌다.', p: [[150, '택배 도착', () => BOX(75, 220, 1.4, true)], [280, '눌린 모양', () => W.crushed(BOX(196, 166, 1, true))], [150, '"안은 괜찮나?"', () => A(75, MN, 'calm', null, .8) + t(124, 60, 18, '?', '#888')]] },
        { b: '마음', en: 'I felt crushed when I lost.', ko: '져서 마음이 짓눌렸다.', feel: '마음이 <b>눌려 찌그러진다.</b>', p: [[150, '결승전 패배', () => BOXG(20, 40, 110, 60, '#222') + t(75, 78, 20, '0 : 1', RD)], [280, '마음이 눌림', () => W.crushed(f('M176 146 q20 -16 40 0 q-20 10 -40 0 z', '#f4a0b0'))], [150, '주저앉는다', () => g(75, 238, 0, .7, MAN(BL, 'sad', null, 'M-12 -42 L-30 -6 M12 -42 L30 -6'))]] }]
    };
    const CORE = { whole: '<b>빠진 데 없이 하나 전부.</b>', intact: '<b>손상이 없다.</b>', complete: '<b>빠진 것이 없다.</b>', broken: '<b>모양 · 기능을 잃었다.</b>', cracked: '<b>금만 가고 아직 붙어 있다.</b>', shattered: '<b>여러 조각으로 깨졌다.</b>', crushed: '<b>눌려 찌그러졌다.</b>' };
