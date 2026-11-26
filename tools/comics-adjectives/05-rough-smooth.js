    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "돋보기로 본 겉면"과 "무엇이?" 칸이다 — 겉면 선이 얼마나 들쭉날쭉한가, 그리고 coarse · jagged · bumpy · sleek처럼 무엇을 보고 하는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'bumpy', BASIC_B = '노트 장면';
    const FX = { rough: [.3, 200, 260, .2, .4], coarse: [.4, 300, 300, .15, .4], jagged: [.2, 1400, 600, .25, .4], bumpy: [.5, 180, 240, .25, .4], smooth: [.6, 600, 600, .06, .5], silky: [.8, 900, 1100, .05, .5], sleek: [.3, 1400, 1800, .1, .4], polished: [.3, 2000, 2400, .1, .4] };
    const ORDER = MIX(['rough', 'coarse', 'jagged', 'bumpy', 'smooth', 'silky', 'sleek', 'polished']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5';
    const RG = { jagged: 1, rough: .7, coarse: .6, bumpy: .5, smooth: .05, silky: .03, sleek: .02, polished: 0 };
    const WHAT = { coarse: '알갱이', jagged: '가장자리', bumpy: '높낮이 · 길', silky: '머리 · 천의 촉감', sleek: '보이는 모양', polished: '닦은 결과' };
    const EDGE = { jagged: 'l8 -26 l6 20 l10 -32 l6 30 l12 -20 l8 22 l10 -30 l6 30 l10 -18 l8 18', rough: 'l4 -6 l4 5 l4 -8 l4 7 l4 -5 l4 6 l4 -7 l4 5 l4 -6 l4 7 l4 -5 l4 4 l4 -7 l4 6 l4 -5 l4 6 l4 -6 l4 5 l4 -6 l4 6 l4 -2', bumpy: 'q10 -22 21 0 t21 0 t21 0 t21 0' };
    const SURF = (id) => { const c = RG[id] > .3 ? '#c9a171' : '#cfd6e0';
      let s = f('M14 130 ' + (EDGE[id] || 'h84') + ' L98 200 H14 z', c);
      if (id === 'coarse') s = f('M14 130 h84 V200 H14 z', c) + [20, 36, 52, 68, 84].map((x, i) => '<circle cx="' + (x + 4) + '" cy="' + (124 - (i % 2) * 4) + '" r="' + (7 + (i % 2) * 2) + '" fill="#eee" stroke="#222" stroke-width="2"/>').join('');
      if (id === 'silky') s += l('M20 150 q20 -8 38 0 t38 0 M20 170 q20 -8 38 0 t38 0', 2, '#fff');
      if (id === 'sleek') s += l('M24 160 L60 140 M40 176 L80 150', 4, '#fff');
      if (id === 'polished') s += t(40, 160, 18, '✦', '#fff') + t(76, 184, 14, '✦', '#fff');
      return '<clipPath id="mgc"><circle cx="56" cy="150" r="52"/></clipPath><circle cx="56" cy="150" r="54" fill="#fff"/><g clip-path="url(#mgc)">' + s + '</g><circle cx="56" cy="150" r="54" fill="none" stroke="#666" stroke-width="5"/>' + l('M94 190 l22 26', 9, '#666') + t(56, 82, 13, '겉면 확대', '#888') + t(56, 230, 13, RG[id] > .3 ? '걸림 많음' : '걸림 없음', RG[id] > .3 ? BR : WT); };
    const TP = (id, b, z) => { const c = RG[id] > .3 ? BR : WT;
      return DARK(280, '#f6f4ee') + SURF(id) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 14 : 18, WHAT[id], BL) : t(196, 128, 15, '그냥', '#888') + t(196, 150, 15, '겉면', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { rough: P('rough', '까끌'), coarse: P('coarse', '오돌토돌'), jagged: P('jagged', '삐죽삐죽'), bumpy: P('bumpy', '덜컹'), smooth: P('smooth', '매끈'), silky: P('silky', '사르르'), sleek: P('sleek', '쓱'), polished: P('polished', '반짝') };
    // 작은 그림들
    const WALL = (c) => f('M30 20 h90 v218 h-90 z', c);
    const HAND = 'M18 -92 L46 -100';
    const SALT = (x, y) => f('M' + (x - 14) + ' ' + (y - 40) + ' h28 v40 h-28 z', '#fff') + f('M' + (x - 14) + ' ' + (y - 50) + ' h28 v10 h-28 z', '#888') + t(x, y - 14, 11, 'SALT', '#888');
    const GLASS = (x, y) => f('M' + (x - 30) + ' ' + y + ' l10 -40 l8 16 l10 -30 l12 26 l6 -14 l14 42 z', '#cfe6f5');
    const ROAD = (w) => f('M0 210 q20 -16 40 0 t40 0 t40 0 t40 0 V240 H0 z', '#888');
    const CARS = (x, y, k, c) => g(x, y, 0, k || 1, f('M-50 0 v-22 l16 -18 h58 l20 18 h6 v22 z', c || RD) + '<circle cx="-28" cy="2" r="10" fill="#333"/><circle cx="30" cy="2" r="10" fill="#333"/>');
    const SLEEKCAR = (x, y, k) => g(x, y, 0, k || 1, f('M-60 0 q4 -18 30 -22 q20 -16 48 -12 q30 4 42 34 z', '#222') + l('M-30 -20 q30 -12 50 0', 3, '#fff') + '<circle cx="-34" cy="2" r="10" fill="#555"/><circle cx="34" cy="2" r="10" fill="#555"/>');
    const SHOE = (x, y, k) => g(x, y, 0, k || 1, f('M-34 0 v-20 q0 -10 10 -10 h18 q10 14 40 18 q6 4 0 12 z', '#3a2a1a') + t(-8, -12, 12, '✦', '#fff'));
    const HAIR = (x, k, c) => g(x, 240, 0, k || .8, MAN(c || MN, 'smile') + f('M-30 -150 q30 -30 60 0 l6 70 h-12 l-4 -50 h-40 l-4 50 h-12 z', '#5a3a1a'));
    const MIC = (x, y) => l('M' + x + ' ' + y + ' v40', 4) + '<circle cx="' + x + '" cy="' + (y - 8) + '" r="10" fill="#555"/>';
    const PHN = (x, y, k) => g(x, y, 0, k || 1, PH);
    const C = {
      rough: { n: 'rough', past: 'rough', en: 'The wall feels rough.', ko: '벽이 거칠거칠하다.', feel: '<b>겉이 고르지 않다.</b> 손에 걸린다.', t: .3,
        p: [[150, '시멘트 벽', () => WALL('#bbb') + [40, 70, 100].map((x, i) => '<circle cx="' + x + '" cy="' + (60 + i * 50) + '" r="3" fill="#777"/>').join('')], [280, '걸림 많음', () => W.rough()], [150, '손을 쓸어 본다', () => WALL('#bbb') + A(30, MN, 'sad', HAND, .7)]] },
      coarse: { n: 'coarse', past: 'coarse', en: 'This salt is coarse.', ko: '이 소금은 알갱이가 굵다.', feel: '<b>알갱이가 굵다.</b> 모래 · 천에도 쓴다.', t: .4,
        p: [[150, '부엌 선반', () => SALT(75, 200)], [280, '알갱이', () => W.coarse()], [150, '굵은 알이 툭툭', () => [50, 70, 90, 62, 82].map((x, i) => '<circle cx="' + x + '" cy="' + (180 + (i > 2 ? 18 : 0)) + '" r="7" fill="#fff" stroke="#222" stroke-width="2"/>').join('') + t(75, 80, 16, '툭툭', '#888')]] },
      jagged: { n: 'jagged', past: 'jagged', en: 'The broken glass has jagged edges.', ko: '깨진 유리는 가장자리가 들쭉날쭉 날카롭다.', feel: '<b>가장자리가 들쭉날쭉 뾰족하다.</b>', t: .2,
        p: [[150, '와장창', () => GLASS(75, 200) + t(75, 70, 22, '쨍그랑', RD)], [280, '가장자리', () => W.jagged()], [150, '"만지지 마!"', () => A(75, MN, 'shock', 'M18 -92 L46 -80', .8) + t(124, 60, 18, '조심!', RD)]] },
      bumpy: { n: 'bumpy', past: 'bumpy', en: 'The road is bumpy.', ko: '길이 울퉁불퉁하다.', feel: '<b>높낮이가 있어 덜컹거린다.</b>', t: .5,
        p: [[150, '시골길', () => ROAD(150) + TREEC(120, .4)], [280, '높낮이 · 길', () => W.bumpy()], [150, '덜컹덜컹', () => ROAD(150) + g(75, 198, -6, .9, CARS(0, 0, 1)) + t(75, 80, 18, '덜컹', OR)]] },
      smooth: { n: 'smooth', past: 'smooth', en: 'The wall feels smooth.', ko: '벽이 매끈하다.', feel: '<b>걸리는 것 없이 고르다.</b> 일이 순조로울 때도 쓴다.', t: .6,
        p: [[150, '새로 바른 벽', () => WALL('#eef3f6')], [280, '걸림 없음', () => W.smooth()], [150, '손이 스르륵', () => WALL('#eef3f6') + A(30, MN, 'smile', HAND, .7)]] },
      silky: { n: 'silky', past: 'silky', en: 'My hair feels silky.', ko: '머리카락이 비단처럼 부드럽다.', feel: '<b>비단처럼 부드럽게 흐른다.</b> 진짜 비단일 필요는 없다.', t: .8,
        p: [[150, '머리를 감았다', () => HAIR(75)], [280, '머리 · 천의 촉감', () => W.silky()], [150, '사르르 흘러내림', () => HAIR(75) + l('M50 110 q-10 30 4 60 M100 110 q10 30 -4 60', 3, '#8a6a3a')]] },
      sleek: { n: 'sleek', past: 'sleek', en: 'The new car looks sleek.', ko: '새 차가 날렵하게 빠졌다.', feel: '<b>보이는 모양이 매끈하고 세련됐다.</b>', t: .3,
        p: [[150, '전시장', () => SLEEKCAR(75, 200, 1)], [280, '보이는 모양', () => W.sleek(SLEEKCAR(196, 156, .8))], [150, '"멋지다"', () => A(75, BL, 'shock', null, .8) + t(124, 60, 18, '와', OR)]] },
      polished: { n: 'polished', past: 'polished', en: 'His shoes look polished.', ko: '그의 구두가 반짝반짝 닦여 있다.', feel: '<b>닦아서 빛난다.</b> 손질한 결과.', t: .3,
        p: [[150, '구두 닦기', () => SHOE(75, 200, 1.4) + f('M100 120 h30 v20 h-30 z', '#fff')], [280, '닦은 결과', () => W.polished(SHOE(196, 160, 1))], [150, '반짝', () => A(75, BL, 'smile', null, .8) + t(60, 236, 16, '✦', '#f2b632') + t(94, 236, 16, '✦', '#f2b632')]] }
    };
    const MORE = {
      rough: [
        { b: '손', en: 'My hands are rough from work.', ko: '일을 해서 손이 거칠다.', feel: '손도 <b>겉이 까끌하다.</b>', p: [[150, '밭일', () => PLANTS() + A(110, BR, 'phew', null, .6)], [280, '걸림 많음', () => W.rough(t(196, 150, 40, '✋'))], [150, '핸드크림', () => f('M60 100 h30 v60 h-30 z', '#fff') + t(75, 136, 12, '크림', BL)]] },
        { b: '하루', en: 'I had a rough day.', ko: '힘든 하루였다.', feel: '하루도 <b>걸리는 게 많았다.</b>', p: [[150, '지각 · 비 · 실수', () => CLK(40, 50, 20) + t(110, 60, 20, '☂', BL) + DOC(75, 180, 1) + t(98, 160, 16, '✕', RD)], [280, '하루의 겉면', () => W.rough(t(196, 144, 30, '😩'))], [150, '침대에 털썩', () => f('M10 200 h130 v20 h-130 z', '#fff') + g(80, 196, -80, .5, MAN(MN, 'down'))]] }],
      coarse: [
        { b: '모래', en: 'The sand here is coarse.', ko: '여기 모래는 알갱이가 굵다.', feel: '모래도 <b>알이 굵다.</b>', p: [[150, '자갈 해변', () => f('M0 200 H150 V240 H0 z', '#d9c9a8') + [20, 50, 80, 110, 135].map((x) => '<circle cx="' + x + '" cy="206" r="6" fill="#bbb" stroke="#222" stroke-width="2"/>').join('')], [280, '알갱이', () => W.coarse()], [150, '맨발이 아야', () => A(75, MN, 'sad', null, .8) + t(124, 60, 16, '아야', RD)]] },
        { b: '말', en: 'He used coarse language.', ko: '그는 거친 말을 썼다.', feel: '말도 <b>알갱이가 굵고 거칠다.</b>', p: [[150, '버럭', () => A(75, BR, 'stern', null, .8) + t(124, 60, 18, '#@!', RD)], [280, '말의 결', () => W.coarse(t(196, 144, 26, '#@!%', RD))], [150, '다들 얼굴을 찡그림', () => A(40, MN, 'sad', null, .55) + A(110, BL, 'sad', null, .55)]] }],
      jagged: [
        { b: '산', en: 'The mountain has jagged peaks.', ko: '그 산은 봉우리가 삐죽삐죽하다.', feel: '윤곽이 <b>들쭉날쭉 뾰족하다.</b>', p: [[150, '등산로 입구', () => TREEC(40, .4) + A(110, BL, 'smile', null, .5)], [280, '가장자리', () => W.jagged(f('M140 180 l16 -50 l10 20 l16 -50 l14 40 l10 -24 l20 64 z', '#888'))], [150, '올려다본다', () => f('M0 238 l30 -120 l20 50 l30 -110 l26 90 l20 -40 l24 130 z', '#888')]] },
        { b: '그래프', en: 'The sales chart shows a jagged line.', ko: '매출 그래프 선이 들쭉날쭉하다.', feel: '숫자의 흐름도 <b>뾰족뾰족</b> 오르내린다.', p: [[150, '월요 회의', () => BOXG(20, 30, 110, 80, '#fff') + l('M30 100 l12 -40 l10 30 l12 -50 l10 40 l14 -30 l12 20', 3, RD)], [280, '선의 윤곽', () => W.jagged(l('M140 160 l14 -40 l12 30 l14 -50 l12 40 l16 -30 l12 20', 3, RD))], [150, '"왜 이러지?"', () => A(75, BL, 'stern', null, .8) + t(124, 60, 20, '?', '#888')]] }],
      bumpy: [
        { b: '비행기', en: 'It was a bumpy flight.', ko: '비행기가 많이 흔들렸다.', feel: '하늘길도 <b>덜컹거렸다.</b>', p: [[150, '구름 속', () => DARK(150, '#cfe6f5') + g(75, 120, -8, 1, f('M-50 0 h90 l14 -10 v20 h-104 z', '#fff') + f('M-10 0 l-14 24 h14 l16 -24 z', '#bbb'))], [280, '높낮이', () => W.bumpy()], [150, '손잡이 꽉', () => A(75, MN, 'shock', 'M-20 -90 L-40 -60 M20 -90 L40 -60', .8)]] },
        { b: '시작', en: 'We had a bumpy start.', ko: '우리는 시작이 순탄치 않았다.', feel: '일도 <b>울퉁불퉁</b> 지나간다.', p: [[150, '가게 첫날', () => BOXG(20, 60, 110, 90, '#f2d59a') + t(75, 110, 16, 'OPEN', OR)], [280, '일의 높낮이', () => W.bumpy(l('M140 160 q14 -30 28 0 t28 0 t28 0 t28 0', 4, OR))], [150, '그래도 손님이 온다', () => A(40, MN, 'smile', null, .6) + A(110, BL, 'smile', null, .55)]] }],
      smooth: [
        { b: '피부', en: 'The baby\'s skin is smooth.', ko: '아기 피부가 매끈하다.', feel: '피부도 <b>걸리는 것 없이</b> 고르다.', p: [[150, '목욕 후', () => f('M20 200 q55 -40 110 0 v30 h-110 z', '#cfe6f5') + g(75, 176, 0, .55, HEAD('smile'))], [280, '걸림 없음', () => W.smooth()], [150, '볼을 콕', () => g(75, 150, 0, 1.2, HEAD('smile')) + '<circle cx="50" cy="160" r="8" fill="#f4c6d0"/>']] },
        { b: '목소리', en: 'He has a smooth voice.', ko: '그는 목소리가 매끄럽다.', feel: '소리에도 <b>걸리는 데가 없다.</b>', p: [[150, '라디오 방송', () => MIC(110, 90) + A(60, BR, 'calm', null, .7)], [280, '소리의 겉면', () => W.smooth(l('M140 140 q14 -8 28 0 t28 0 t28 0 t28 0', 3, BL))], [150, '귀가 편하다', () => A(75, MN, 'phew', null, .8) + t(124, 60, 18, '♪', BL)]] }],
      silky: [
        { b: '고양이 털', en: 'The cat\'s fur is silky.', ko: '고양이 털이 비단 같다.', feel: '털도 <b>부드럽게 흐른다.</b>', p: [[150, '창가 고양이', () => BOXG(20, 40, 110, 70, '#cfe6f5') + g(75, 200, 0, 1, '<ellipse cy="-20" rx="40" ry="22" fill="#fff" stroke="#222" stroke-width="3"/><circle cx="30" cy="-44" r="18" fill="#fff" stroke="#222" stroke-width="3"/>')], [280, '털의 촉감', () => W.silky()], [150, '쓰담', () => A(75, MN, 'smile', 'M18 -92 L46 -60', .8)]] },
        { b: '노래', en: 'She sang in a silky voice.', ko: '그녀는 비단 같은 목소리로 노래했다.', feel: '소리도 <b>비단처럼 흐른다.</b>', p: [[150, '작은 무대', () => MIC(75, 100) + A(40, MN, 'smile', null, .55)], [280, '소리의 촉감', () => W.silky(l('M140 130 q20 -14 40 0 t40 0 t28 0', 3, MN) + t(196, 170, 20, '♪', MN))], [150, '스르르 눈 감음', () => A(75, BL, 'phew', null, .8)]] }],
      sleek: [
        { b: '휴대폰', en: 'This phone has a sleek design.', ko: '이 휴대폰은 날렵하게 매끈하다.', feel: '<b>보이는 모양</b>이 매끈하다.', p: [[150, '신제품 상자', () => PKG(75, 180, 1.4)], [280, '보이는 모양', () => W.sleek(PHN(196, 136, 1.4))], [150, '"얇다!"', () => A(75, MN, 'shock', 'M18 -92 L30 -120', .8) + PHN(110, 100, .8)]] },
        { b: '화면', en: 'The new website looks sleek.', ko: '새 웹사이트가 깔끔하게 세련됐다.', feel: '화면 모양도 <b>매끈하게 정돈됐다.</b>', p: [[150, '복잡한 옛 화면', () => BOXG(20, 40, 110, 90, '#fff') + [50, 64, 78, 92, 106, 120].map((y) => l('M28 ' + y + ' h' + (40 + (y % 3) * 20), 3, ['#d8412f', '#2c7a53', '#e07a2b'][y % 3])).join('')], [280, '보이는 모양', () => W.sleek(BOXG(150, 96, 92, 66, '#fff') + l('M160 112 h50 M160 130 h70', 4, BL))], [150, '"깔끔해졌네"', () => A(75, BL, 'smile', null, .8)]] }],
      polished: [
        { b: '바닥', en: 'The floor is polished.', ko: '바닥이 반들반들 닦여 있다.', feel: '닦아서 <b>빛난다.</b>', p: [[150, '걸레질', () => f('M0 200 H150 V240 H0 z', '#c9a171') + A(75, MN, 'phew', 'M18 -92 L40 -50', .8)], [280, '닦은 결과', () => W.polished()], [150, '얼굴이 비친다', () => f('M0 160 H150 V240 H0 z', '#c9a171') + g(75, 200, 0, .5, HEAD('smile')) + t(30, 220, 16, '✦', '#fff')]] },
        { b: '발표', en: 'She gave a polished presentation.', ko: '그녀는 잘 다듬은 발표를 했다.', feel: '말도 <b>닦고 다듬어</b> 빛난다.', p: [[150, '밤새 연습', () => DARK(150, '#2b3550') + DOC(50, 120, 1) + A(110, MN, 'stern', null, .5)], [280, '다듬은 결과', () => W.polished(BOXG(150, 96, 92, 66, '#fff') + t(196, 136, 18, '✦ 발표 ✦', '#f2b632'))], [150, '박수', () => A(75, MN, 'smile', 'M18 -92 L36 -126', .8) + t(124, 60, 16, '짝짝', OR)]] }]
    };
    const PLANTS = () => [20, 50, 80].map((x) => l('M' + x + ' 238 v-30 M' + x + ' 220 q-10 -6 -12 -16 M' + x + ' 216 q10 -6 12 -16', 3, GN)).join('');
    const CORE = { rough: '<b>겉이 고르지 않다.</b>', coarse: '<b>알갱이가 굵다.</b>', jagged: '<b>가장자리가 들쭉날쭉 뾰족.</b>', bumpy: '<b>높낮이로 덜컹.</b>', smooth: '<b>걸림 없이 고르다.</b>', silky: '<b>비단처럼 흐르는 촉감.</b>', sleek: '<b>보이는 모양이 매끈.</b>', polished: '<b>닦아서 빛남.</b>' };
