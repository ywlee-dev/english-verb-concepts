    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(deafening 장면 3은 The silence was deafening — 침묵이 귀를 먹먹하게 할 만큼 무겁다는 말). 가운데 칸은 늘 같은 "스피커와 소리 눈금"과 "무엇이?" 칸이다 — 소리 물결과 눈금이 얼마나 차나, 그리고 roaring · hushed · muted처럼 어떤 소리인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'hushed', BASIC_B = '노트 장면';
    const FX = { loud: [.4, 400, 400, .3, .4], deafening: [.6, 200, 180, .45, .4], roaring: [1, 90, 120, .35, .4], thunderous: [.8, 70, 50, .45, .4], quiet: [.5, 600, 600, .05, .5], silent: [.05, 600, 600, .01, .6], hushed: [.6, 1800, 1600, .03, .5], muted: [.6, 200, 200, .06, .5] };
    const ORDER = MIX(['loud', 'deafening', 'roaring', 'thunderous', 'quiet', 'silent', 'hushed', 'muted']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const VL = { deafening: 1, thunderous: .92, roaring: .84, loud: .7, quiet: .26, muted: .2, hushed: .14, silent: 0 };
    const WHAT = { deafening: '다른 소리를 덮음', roaring: '포효처럼 이어짐', thunderous: '박수 · 환호', silent: '소리가 멎음', hushed: '일부러 낮춤', muted: '가려져 약함' };
    const TC = (v) => v > .5 ? RD : WT;
    const SPK = (id) => { const v = VL[id], n = Math.round(v * 5), c = TC(v);
      return f('M14 112 h14 l20 -18 v72 l-20 -18 h-14 z', '#555') + Array.from({ length: n }, (_, i) => l('M' + (54 + i * 12) + ' ' + (110 - i * 8) + ' q' + (10 + i * 2) + ' ' + (20 + i * 8) + ' 0 ' + (40 + i * 16), 3, c)).join('') +
        (id === 'muted' ? l('M66 70 v120', 8, '#a3743f') + l('M76 112 q6 18 0 36', 2.5, WT) : '') + (id === 'silent' ? t(80, 140, 26, '✕', '#888') : '') + (id === 'hushed' ? t(84, 138, 14, '쉿', WT) : '') +
        Array.from({ length: 10 }, (_, i) => BOXG(14 + i * 10, 196, 8, 14, i < Math.round(v * 10) ? (i > 6 ? RD : i > 3 ? GD : GN) : '#e4e4e4')).join('') + t(62, 230, 13, '소리 ' + Math.round(v * 100), c); };
    const TP = (id, b, z) => { const c = TC(VL[id]);
      return DARK(280, '#f6f4ee') + SPK(id) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 14 : 18, WHAT[id], BL) : t(196, 128, 15, '소리 · 음악 ·', '#888') + t(196, 150, 15, '사람 두루', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { loud: P('loud', '쿵쾅'), deafening: P('deafening', '귀 먹먹'), roaring: P('roaring', '우오오'), thunderous: P('thunderous', '우르릉'), quiet: P('quiet', '조용'), silent: P('silent', '……'), hushed: P('hushed', '소곤소곤'), muted: P('muted', '웅웅') };
    // 작은 그림들
    const NOTES = (x, y, c) => t(x, y, 22, '♪', c || BL) + t(x + 28, y + 20, 18, '♫', c || BL);
    const SPEAKER = (x, y, k) => g(x, y, 0, k || 1, f('M-22 -60 h44 v60 h-44 z', '#333') + '<circle cy="-38" r="12" fill="#666"/><circle cy="-12" r="7" fill="#666"/>');
    const DOORW = (x) => BOXG(x, 40, 50, 198, '#c9a171') + '<circle cx="' + (x + 40) + '" cy="150" r="4"/>';
    const CROWD = (y, k, fc, x0, dx) => [0, 1, 2, 3, 4].map((i) => g((x0 || 15) + i * (dx || 30), y, 0, k || .3, HEAD(fc || (i % 2 ? 'shock' : 'smile')))).join('');
    const DRILL = (x, y) => f('M' + (x - 20) + ' ' + (y - 30) + ' h40 v20 h-40 z', GD) + l('M' + x + ' ' + (y - 10) + ' v30', 6, '#555');
    const FIREP = (x, y, k) => FIRE(x, y, k) + l('M' + (x - 30) + ' ' + (y + 32) + ' l60 -10 M' + (x - 30) + ' ' + (y + 22) + ' l60 10', 6, '#7a5a3a');
    const BOOKS = (x, y) => [0, 1, 2, 3].map((i) => BOXG(x + i * 16, y - 50, 14, 50, [RD, BL, GN, GD][i])).join('');
    const TV = (x, y, k) => g(x, y, 0, k || 1, f('M-40 -50 h80 v54 h-80 z', '#333') + f('M-34 -44 h68 v42 h-68 z', '#8fd0ee') + l('M-10 4 l-8 12 M10 4 l8 12', 3));
    const C = {
      loud: { n: 'loud', past: 'loud', en: 'The music is loud.', ko: '음악 소리가 크다.', feel: '<b>소리가 크다.</b> 옷 색이 야할 때도 쓴다.', t: .4,
        p: [[150, '파티', () => SPEAKER(40, 230, 1) + NOTES(90, 80, RD)], [280, '눈금이 많이 참', () => W.loud()], [150, '"뭐라고?"', () => A(75, BL, 'shock', 'M18 -92 L26 -126', .8) + t(124, 60, 16, '뭐?', OR)]] },
      deafening: { n: 'deafening', past: 'deafening', en: 'The music is deafening.', ko: '음악 소리에 귀가 먹먹하다.', feel: '<b>다른 소리가 하나도 안 들릴 만큼.</b> 진짜 귀가 먼 건 아니다.', t: .6,
        p: [[150, '맨 앞자리', () => SPEAKER(40, 230, 1.4) + SPEAKER(110, 230, 1.4)], [280, '다른 소리를 덮음', () => W.deafening()], [150, '귀를 막는다', () => A(75, MN, 'sad', 'M-20 -90 L-28 -130 M20 -90 L28 -130', .8) + t(124, 60, 18, '윽', RD)]] },
      roaring: { n: 'roaring', past: 'roaring', en: 'A roaring crowd filled the stadium.', ko: '우렁찬 관중이 경기장을 메웠다.', feel: '<b>포효하듯 크게 이어진다.</b> 관중 · 엔진 · 바람에.', t: 1,
        p: [[150, '골!', () => '<circle cx="75" cy="120" r="20" fill="#fff" stroke="#222" stroke-width="3"/>' + l('M20 160 V60 h110 v100', 5, '#888') + t(75, 200, 18, '골!', RD)], [280, '포효처럼 이어짐', () => W.roaring(CROWD(160, .25, null, 156, 20))], [150, '관중석 가득', () => CROWD(200, .3) + CROWD(150, .3) + t(75, 60, 18, '우오오', RD)]] },
      thunderous: { n: 'thunderous', past: 'thunderous', en: 'They gave her thunderous applause.', ko: '사람들이 그녀에게 우레 같은 박수를 보냈다.', feel: '<b>천둥처럼 웅장하게 울린다.</b> 박수 · 환호에.', t: .8,
        p: [[150, '연주가 끝났다', () => A(75, MN, 'phew', null, .8)], [280, '박수 · 환호', () => W.thunderous(t(196, 146, 36, '👏'))], [150, '객석이 울린다', () => CROWD(220, .3) + t(75, 80, 18, '짝짝짝', OR) + t(75, 120, 18, '⚡', GD)]] },
      quiet: { n: 'quiet', past: 'quiet', en: 'The music is quiet.', ko: '음악 소리가 작다.', feel: '<b>소리가 작다.</b> quite(꽤)와 헷갈리지 말 것.', t: .5,
        p: [[150, '카페', () => SPEAKER(40, 230, .7) + t(90, 90, 14, '♪', '#aaa') + MUG()], [280, '눈금이 조금', () => W.quiet()], [150, '책장을 넘긴다', () => A(75, MN, 'calm', 'M18 -92 L40 -80', .8) + BOOK(110, 120, .4)]] },
      silent: { n: 'silent', past: 'silent', en: 'The room went silent.', ko: '방이 조용해졌다.', feel: '<b>말 · 소리가 멎었다.</b> 완전한 무음일 필요는 없다.', t: .05,
        p: [[150, '왁자지껄', () => A(40, MN, 'smile', null, .55) + A(110, BL, 'smile', null, .55) + t(75, 50, 16, '하하호호', OR)], [280, '소리가 멎음', () => W.silent()], [150, '선생님 등장', () => DOORW(90) + A(50, '#888', 'stern', null, .6) + t(110, 30, 16, '…', '#888')]] },
      hushed: { n: 'hushed', past: 'hushed', en: 'They spoke in hushed voices.', ko: '그들은 소곤소곤 말했다.', feel: '<b>일부러 낮춘 소리.</b> 조심스러운 분위기.', t: .6,
        p: [[150, '아기가 잔다', () => f('M20 200 q55 -40 110 0 v30 h-110 z', '#f4c6d0') + g(75, 176, 0, .5, HEAD('calm')) + ZZ(100, 110)], [280, '일부러 낮춤', () => W.hushed()], [150, '귓속말', () => A(50, MN, 'calm', 'M18 -92 L36 -110', .65) + A(104, BL, 'calm', null, .65)]] },
      muted: { n: 'muted', past: 'muted', en: 'The music sounded muted through the door.', ko: '문 너머 음악이 웅웅 약하게 들렸다.', feel: '<b>원래 소리가 가려져 약해졌다.</b> 색 · 반응에도.', t: .6,
        p: [[150, '옆방 파티', () => DOORW(50) + t(120, 80, 14, '♪', '#aaa')], [280, '가려져 약함', () => W.muted()], [150, '"뭔 노래지?"', () => DOORW(90) + A(50, BL, 'calm', 'M18 -92 L36 -80', .7)]] }
    };
    const MORE = {
      loud: [
        { b: '옆집', en: 'The neighbors are loud.', ko: '옆집이 시끄럽다.', feel: '<b>소리가 크다.</b>', p: [[150, '밤 11시', () => DARK(150, '#2b3550') + MOON(110, 40, .5) + t(50, 140, 18, '쿵쿵', RD)], [280, '눈금이 많이 참', () => W.loud()], [150, '베개로 귀를', () => DARK(150, '#2b3550') + f('M10 200 q65 -30 130 0 v28 h-130 z', BL) + g(75, 176, 0, .5, HEAD('stern'))]] },
        { b: '셔츠', en: 'He wore a loud shirt.', ko: '그는 요란한 셔츠를 입었다.', feel: '색도 <b>소리치듯</b> 눈에 띈다.', p: [[150, '결혼식', () => A(40, '#2b3550', 'calm', null, .55) + A(110, '#2b3550', 'calm', null, .55)], [280, '색의 소리', () => W.loud(f('M196 100 l-30 14 v56 h60 v-56 z', '#f0f') + t(196, 146, 18, '🌺'))], [150, '다들 쳐다본다', () => A(75, '#e0e', 'smile', null, .8) + t(124, 60, 18, '!!', OR)]] }],
      deafening: [
        { b: '공사', en: 'The drilling was deafening.', ko: '공사 드릴 소리에 귀가 먹먹했다.', feel: '다른 소리를 <b>다 덮는다.</b>', p: [[150, '창밖 공사장', () => DRILL(75, 160) + t(75, 80, 18, '드드드', RD)], [280, '다른 소리를 덮음', () => W.deafening()], [150, '전화가 안 들린다', () => A(75, MN, 'sad', 'M18 -92 L22 -126', .8) + t(124, 60, 16, '네?!', RD)]] },
        { b: '침묵', en: 'The silence was deafening.', ko: '침묵이 귀가 먹먹할 만큼 무거웠다.', feel: '말이 없는데도 <b>소리보다 크게</b> 덮친다.', p: [[150, '"누가 그랬어?"', () => A(75, '#888', 'stern', null, .8)], [280, '침묵이 덮음', () => W.deafening(t(196, 140, 26, '……', '#555'))], [150, '아무도 말 안 함', () => A(40, MN, 'calm', null, .55) + A(110, BL, 'calm', null, .55) + t(75, 50, 16, '…', '#888')]] }],
      roaring: [
        { b: '모닥불', en: 'We sat by a roaring fire.', ko: '우리는 활활 타는 불 옆에 앉았다.', feel: '불도 <b>우렁차게</b> 타오른다.', p: [[150, '캠핑', () => DARK(150, '#1b1d26') + f('M30 238 l45 -70 l45 70 z', OR)], [280, '포효처럼 이어짐', () => W.roaring(FIREP(196, 140, .6))], [150, '손을 녹인다', () => DARK(150, '#1b1d26') + FIREP(100, 190, .6) + A(40, MN, 'smile', 'M18 -92 L46 -70', .6)]] },
        { b: '성공', en: 'The party was a roaring success.', ko: '파티는 대성공이었다.', feel: '성공도 <b>우렁차다.</b>', p: [[150, '파티 준비', () => t(40, 60, 22, '🎈') + t(110, 60, 22, '🎈') + A(75, MN, 'calm', null, .6)], [280, '성공의 크기', () => W.roaring(t(196, 146, 30, '🎉'))], [150, '모두 신났다', () => CROWD(200, .3) + t(75, 80, 18, '와!', OR)]] }],
      thunderous: [
        { b: '발소리', en: 'We heard thunderous footsteps upstairs.', ko: '위층에서 쿵쾅대는 발소리가 들렸다.', feel: '발소리가 <b>천둥처럼</b> 울린다.', p: [[150, '아래층 거실', () => l('M0 60 H150', 6, '#888') + A(75, MN, 'shock', null, .7)], [280, '천둥 같은 울림', () => W.thunderous(t(196, 146, 28, '쿵! 쿵!', RD))], [150, '전등이 흔들', () => l('M75 0 v40', 2) + '<circle cx="75" cy="50" r="12" fill="' + GD + '"/>' + l('M50 40 l-10 -6 M100 40 l10 -6', 2, '#888')]] },
        { b: '아빠 얼굴', en: 'Dad gave a thunderous look.', ko: '아빠가 천둥 같은 얼굴로 쳐다봤다.', feel: '표정도 <b>우르릉</b> 울린다 — 몹시 화났다.', p: [[150, '깨진 꽃병', () => f('M60 220 l10 -30 l10 20 l10 -24 l10 34 z', BL)], [280, '표정의 울림', () => W.thunderous(g(196, 146, 0, .7, HEAD('stern')) + t(230, 110, 20, '⚡', GD))], [150, '얼어붙었다', () => A(75, OR, 'shock', null, .6)]] }],
      quiet: [
        { b: '도서관', en: 'The library is quiet.', ko: '도서관은 조용하다.', feel: '<b>소리가 작다.</b>', p: [[150, '책장', () => BOOKS(20, 120) + BOOKS(84, 120)], [280, '눈금이 조금', () => W.quiet()], [150, '사각사각', () => A(75, BL, 'calm', 'M18 -92 L36 -60', .8) + t(124, 60, 14, '사각', '#aaa')]] },
        { b: '성격', en: 'She is a quiet girl.', ko: '그녀는 말수가 적은 아이다.', feel: '사람도 <b>소리를 작게</b> 낸다.', p: [[150, '쉬는 시간', () => A(40, OR, 'smile', null, .5) + A(110, MN, 'calm', null, .55) + t(40, 50, 14, '와글', OR)], [280, '사람의 소리', () => W.quiet(g(196, 146, 0, .7, HEAD('calm')))], [150, '그림을 그린다', () => A(60, MN, 'smile', 'M18 -92 L40 -60', .7) + BOXG(90, 140, 40, 50, '#fff')]] }],
      silent: [
        { b: '숲', en: 'The forest was silent.', ko: '숲이 고요했다.', feel: '<b>소리가 멎었다.</b>', p: [[150, '눈 덮인 숲', () => TREEC(40, .4) + TREEC(110, .5) + f('M0 220 H150 V240 H0 z', '#fff')], [280, '소리가 멎음', () => W.silent()], [150, '숨소리만', () => A(75, BL, 'calm', null, .8) + t(124, 60, 14, '후…', '#aaa')]] },
        { b: '대답 없음', en: 'He stayed silent.', ko: '그는 아무 말도 하지 않았다.', feel: '말이 <b>멎었다.</b>', p: [[150, '"정말 네가 했어?"', () => A(75, MN, 'stern', null, .8)], [280, '말이 멎음', () => W.silent(g(196, 146, 0, .7, HEAD('calm')))], [150, '입을 꾹', () => A(75, BL, 'stern', null, .8) + t(124, 60, 18, '…', '#888')]] }],
      hushed: [
        { b: '병원', en: 'The hospital hallway was hushed.', ko: '병원 복도는 숨죽인 듯 조용했다.', feel: '모두가 <b>일부러 낮춘</b> 분위기.', p: [[150, '긴 복도', () => DARK(150, '#e8eef2') + l('M0 60 L50 100 M150 60 L100 100', 2, '#aaa') + t(75, 150, 14, '정숙', RD)], [280, '일부러 낮춤', () => W.hushed()], [150, '발끝으로', () => A(75, MN, 'stern', null, .8, 'M-8 -42 L-10 0 M8 -42 L10 0')]] },
        { b: '분위기', en: 'A hushed crowd waited for the result.', ko: '숨죽인 사람들이 결과를 기다렸다.', feel: '마음까지 <b>낮추고</b> 기다린다.', p: [[150, '발표 직전', () => BOXG(20, 40, 110, 60, '#222') + t(75, 80, 16, '???', '#fff')], [280, '일부러 낮춤', () => W.hushed(CROWD(170, .2, 'calm', 156, 20))], [150, '꿀꺽', () => CROWD(210, .3, 'calm') + t(75, 100, 16, '꿀꺽', '#888')]] }],
      muted: [
        { b: '색', en: 'She likes muted colors.', ko: '그녀는 차분하게 가라앉은 색을 좋아한다.', feel: '색도 <b>눌려 약해진다.</b>', p: [[150, '옷 가게', () => f('M40 80 l-16 10 v60 h32 v-60 z', '#b8a99a') + f('M100 80 l-16 10 v60 h32 v-60 z', '#9aa8a0')], [280, '색의 소리', () => W.muted(f('M196 100 l-30 14 v56 h60 v-56 z', '#a8a2b0'))], [150, '"이게 편해"', () => A(75, '#a8a2b0', 'smile', null, .8)]] },
        { b: '반응', en: 'Her reaction was muted.', ko: '그녀의 반응은 미지근했다.', feel: '반응도 <b>가려져 약하게</b> 나온다.', p: [[150, '깜짝 선물', () => PKG(75, 190, 1.4)], [280, '반응의 크기', () => W.muted(t(196, 140, 18, '"아, 고마워."', '#888'))], [150, '기대했는데…', () => A(75, BL, 'down', null, .8)]] }]
    };
    const MUG = () => f('M100 210 h24 l-3 24 h-18 z', '#fff');
    const CORE = { loud: '<b>소리가 크다.</b>', deafening: '<b>다른 소리가 안 들릴 만큼.</b>', roaring: '<b>포효하듯 크게 이어진다.</b>', thunderous: '<b>천둥처럼 웅장하게.</b>', quiet: '<b>소리가 작다.</b>', silent: '<b>말 · 소리가 멎었다.</b>', hushed: '<b>일부러 낮춘 소리.</b>', muted: '<b>가려져 약해진 소리.</b>' };
