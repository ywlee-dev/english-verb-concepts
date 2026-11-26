    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "안내판 하나"와 "무엇이?" 칸이다 — 안내판 그림이 또렷한가 흐린가, 그리고 distinct(서로 다름) · ambiguous(뜻이 두 갈래) · blurry(눈에 흐림)처럼 무엇이 분명하고 흐린가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'ambiguous', BASIC_B = '노트 장면';
    const FX = { clear: [.2, 1400, 1400, .1, .4], obvious: [.3, 1000, 1000, .15, .4], 'crystal-clear': [.4, 2000, 2600, .1, .4], distinct: [.2, 900, 1400, .15, .4], vague: [.8, 500, 500, .05, .5], ambiguous: [.6, 700, 900, .08, .4], blurry: [.8, 400, 400, .06, .5] };
    const ORDER = MIX(['clear', 'obvious', 'crystal-clear', 'distinct', 'vague', 'ambiguous', 'blurry']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const CL = { 'crystal-clear': 1, clear: .9, obvious: .9, distinct: .85, vague: .3, ambiguous: .5, blurry: .2 };
    const WHAT = { clear: '뜻이 분명함', obvious: '설명 없이 앎', 'crystal-clear': '흐림이 전혀 없음', distinct: '서로 확실히 다름', vague: '정보가 모자람', ambiguous: '뜻이 두 갈래', blurry: '눈에 흐릿함' };
    const TC = (v) => v > .6 ? BL : '#888';
    const BOARD = (id) => { const v = CL[id];
      let inner = { clear: l('M40 110 h44 l-10 -8 M84 110 l-10 8', 4, BL), obvious: l('M34 110 h56 l-16 -14 M90 110 l-16 14', 8, RD), 'crystal-clear': l('M40 110 h44 l-10 -8 M84 110 l-10 8', 4, BL) + t(30, 80, 14, '✦', '#9fd3f0') + t(96, 140, 12, '✦', '#9fd3f0'),
        distinct: '<circle cx="44" cy="110" r="14" fill="' + RD + '"/>' + f('M70 124 l12 -28 l12 28 z', BL), vague: l('M44 110 h20', 4, '#bbb') + t(80, 116, 18, '…?', '#bbb'),
        ambiguous: l('M40 110 h16 M56 110 l24 -20 M56 110 l24 20', 4, OR) + f('M80 90 l-4 8 l8 -1 z M80 130 l-4 -8 l8 1 z', OR), blurry: '<g filter="url(#bz)">' + l('M40 110 h44 l-10 -8 M84 110 l-10 8', 4, BL) + '</g>' }[id];
      return '<defs><filter id="bz"><feGaussianBlur stdDeviation="3"/></filter></defs>' + f('M20 70 h84 v80 h-84 z', '#fff', 3) + l('M62 150 v60', 5, '#888') + inner + t(62, 228, 12, v > .6 ? '또렷하다' : '흐릿하다', TC(v)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + BOARD(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 7 ? 15 : 17, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(CL[id]));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { clear: P('clear', '또렷'), obvious: P('obvious', '뻔하지'), 'crystal-clear': P('crystal-clear', '투명'), distinct: P('distinct', '딱 구별'), vague: P('vague', '흐지부지'), ambiguous: P('ambiguous', '이쪽? 저쪽?'), blurry: P('blurry', '뿌옇게') };
    // 작은 그림들
    const NOTICE = (x, y, txt, blur) => f('M' + (x - 40) + ' ' + (y - 40) + ' h80 v80 h-80 z', '#fff', 2) + (blur ? '<g opacity=".35">' : '<g>') + t(x, y - 10, 14, txt, BL) + l('M' + (x - 26) + ' ' + (y + 10) + ' h52 M' + (x - 26) + ' ' + (y + 24) + ' h40', 3, '#888') + '</g>';
    const LAKE = (clear) => f('M0 140 H150 V240 H0 z', clear ? '#bfe8f8' : '#8a9a8a') + (clear ? [30, 70, 110].map((x) => '<circle cx="' + x + '" cy="220" r="6" fill="#999"/>').join('') + g(80, 196, 0, .7, f('M-14 0 q14 -10 28 0 l8 -6 v12 l-8 -6 q-14 10 -28 0 z', OR)) : '');
    const CUPS = () => f('M30 160 h30 l-4 40 h-22 z', '#fff') + f('M90 160 h30 l-4 40 h-22 z', '#fff') + f('M34 166 h22 v8 h-22 z', '#6a4a2a') + f('M94 166 h22 v8 h-22 z', '#e9b86a');
    const PHOTO = (x, y, blur) => f('M' + (x - 40) + ' ' + (y - 30) + ' h80 v60 h-80 z', '#fff', 2) + (blur ? '<g filter="url(#bz)">' : '<g>') + '<circle cx="' + x + '" cy="' + (y - 4) + '" r="12" fill="' + SK + '" stroke="#222" stroke-width="2"/>' + f('M' + (x - 14) + ' ' + (y + 10) + ' h28 v14 h-28 z', MN) + '</g>';
    const BLURDEF = '<defs><filter id="bz"><feGaussianBlur stdDeviation="3"/></filter></defs>';
    const C = {
      clear: { n: 'clear', past: 'clear', en: 'The notice is clear.', ko: '안내문이 분명하다.', feel: '<b>뜻이 분명하다.</b> 하늘 · 물이 맑을 때도.', t: .2,
        p: [[150, '게시판', () => NOTICE(75, 130, '3시 모임')], [280, '또렷하다', () => W.clear()], [150, '"3시구나"', () => A(75, MN, 'smile', null, .8)]] },
      obvious: { n: 'obvious', past: 'obvious', en: 'The next step is obvious.', ko: '다음 단계는 뻔하다.', feel: '<b>설명 없이도</b> 누구나 안다.', t: .3,
        p: [[150, '퍼즐 마지막 한 칸', () => BOXG(30, 60, 90, 90, '#cfe6f5') + f('M75 105 h45 v45 h-45 z', '#fff', 2)], [280, '설명 없이 앎', () => W.obvious()], [150, '척 끼운다', () => BOXG(30, 60, 90, 90, '#cfe6f5') + t(75, 200, 16, '딸깍', GN)]] },
      'crystal-clear': { n: 'crystal-clear', past: 'crystal-clear', en: 'The water is crystal-clear.', ko: '물이 수정처럼 맑다.', feel: '<b>흐림이 전혀 없다.</b> 설명이 아주 명료할 때도.', t: .4,
        p: [[150, '산속 호수', () => LAKE(true)], [280, '흐림이 전혀 없음', () => W['crystal-clear']()], [150, '바닥 돌까지 보인다', () => LAKE(true) + g(110, 140, 0, .35, MAN(MN, 'shock'))]] },
      distinct: { n: 'distinct', past: 'distinct', en: 'The two flavors are distinct.', ko: '두 맛은 확실히 다르다.', feel: '<b>서로 분명히</b> 다르다.', t: .2,
        p: [[150, '커피 두 잔', () => CUPS()], [280, '서로 확실히 다름', () => W.distinct()], [150, '"이건 쓴맛, 이건 단맛"', () => A(75, BR, 'smile', 'M18 -92 L40 -100', .8)]] },
      vague: { n: 'vague', past: 'vague', en: 'The notice is vague.', ko: '안내문이 막연하다.', feel: '<b>정보가 모자라</b> 분명하지 않다.', t: .8,
        p: [[150, '게시판', () => NOTICE(75, 130, '"곧" 모임', true)], [280, '정보가 모자람', () => W.vague()], [150, '"곧이 언제야?"', () => A(75, MN, 'stern', null, .8) + t(124, 60, 18, '?', '#888')]] },
      ambiguous: { n: 'ambiguous', past: 'ambiguous', en: 'The message is ambiguous.', ko: '그 메시지는 뜻이 애매하다.', feel: '글씨는 보이는데 <b>뜻이 두 갈래</b>로 읽힌다.', t: .6,
        p: [[150, '문자 한 통', () => g(75, 130, 0, 2, PH) + t(75, 200, 14, '"그래, 좋겠네."', BL)], [280, '뜻이 두 갈래', () => W.ambiguous()], [150, '기뻐? 화났어?', () => A(75, OR, 'calm', null, .6) + t(40, 60, 18, '😊', '') + t(110, 60, 18, '😠', '')]] },
      blurry: { n: 'blurry', past: 'blurry', en: 'The photo is blurry.', ko: '사진이 흐릿하다.', feel: '<b>눈에 선명하지 않다.</b> 사진 · 시야 · 기억에.', t: .8,
        p: [[150, '흔들린 손', () => g(75, 130, 0, 2, PH) + l('M40 70 l-6 -6 M110 70 l6 -6', 2, '#888')], [280, '눈에 흐릿함', () => W.blurry()], [150, '이게 누구지?', () => BLURDEF + PHOTO(75, 130, true) + t(120, 60, 18, '?', '#888')]] }
    };
    const MORE = {
      clear: [
        { b: '하늘', en: 'The sky is clear today.', ko: '오늘 하늘이 맑다.', feel: '하늘에 <b>가리는 게 없다.</b>', p: [[150, '아침 창문', () => DARK(150, '#bfe8f8') + SUN(110, 50, 18)], [280, '또렷하다', () => W.clear()], [150, '빨래 널기 좋은 날', () => DARK(150, '#bfe8f8') + l('M0 70 H150', 2) + f('M50 72 h30 v40 h-30 z', '#f4c6d0')]] },
        { b: '설명', en: 'Her explanation was clear.', ko: '그녀의 설명은 분명했다.', feel: '말의 뜻이 <b>또렷하다.</b>', p: [[150, '칠판 앞', () => BOXG(20, 40, 110, 70, '#2c4a3a') + t(75, 82, 16, '1 → 2 → 3', '#fff')], [280, '또렷하다', () => W.clear()], [150, '"아, 이해했다!"', () => A(75, OR, 'smile', null, .6) + BULB(110, 60, .4)]] }],
      obvious: [
        { b: '정답', en: 'The answer is obvious.', ko: '정답은 뻔하다.', feel: '<b>설명 없이도</b> 안다.', p: [[150, '"하늘은 무슨 색?"', () => DARK(150, '#bfe8f8')], [280, '설명 없이 앎', () => W.obvious()], [150, '모두 손을 든다', () => [30, 75, 120].map((x) => A(x, OR, 'smile', 'M18 -92 L26 -134', .45)).join('')]] },
        { b: '거짓말', en: 'It was obvious he was lying.', ko: '그가 거짓말하는 게 뻔히 보였다.', feel: '숨겨도 <b>누구나 안다.</b>', p: [[150, '"내가 안 먹었어"', () => A(75, OR, 'smile', null, .6) + '<circle cx="66" cy="150" r="3" fill="#c98a4a"/><circle cx="80" cy="152" r="3" fill="#c98a4a"/>'], [280, '설명 없이 앎', () => W.obvious()], [150, '입가의 부스러기', () => g(75, 130, 0, 1.4, HEAD('smile')) + '<circle cx="66" cy="150" r="4" fill="#c98a4a"/>']] }],
      'crystal-clear': [
        { b: '규칙', en: 'The rules are crystal-clear.', ko: '규칙이 아주 명료하다.', feel: '설명에 <b>흐림이 전혀 없다.</b>', p: [[150, '규칙표', () => DOC(75, 130, 1.6)], [280, '흐림이 전혀 없음', () => W['crystal-clear']()], [150, '아무도 안 묻는다', () => [30, 75, 120].map((x) => A(x, BL, 'smile', null, .45)).join('')]] },
        { b: '소리', en: 'The sound is crystal-clear.', ko: '소리가 아주 깨끗하다.', feel: '소리에도 <b>잡음이 없다.</b>', p: [[150, '새 이어폰', () => g(75, 140, 0, 1.4, '<circle cx="-20" r="10" fill="#fff" stroke="#222" stroke-width="3"/><circle cx="20" r="10" fill="#fff" stroke="#222" stroke-width="3"/>' + l('M-20 -10 q20 -30 40 0', 3))], [280, '흐림이 전혀 없음', () => W['crystal-clear'](t(196, 146, 24, '♪ ♫', BL))], [150, '눈을 감고', () => A(75, MN, 'phew', null, .8)]] }],
      distinct: [
        { b: '쌍둥이', en: 'The twins have distinct voices.', ko: '쌍둥이는 목소리가 뚜렷이 다르다.', feel: '닮았어도 <b>서로 분명히 다르다.</b>', p: [[150, '똑같은 얼굴', () => A(45, BL, 'smile', null, .6) + A(105, BL, 'smile', null, .6)], [280, '서로 확실히 다름', () => W.distinct(l('M150 130 q14 -16 28 0 t28 0', 3, RD) + l('M150 160 h84', 3, BL))], [150, '목소리로 구별', () => A(45, BL, 'smile', null, .55) + A(105, BL, 'smile', null, .55) + t(45, 60, 16, '♪', RD) + t(105, 60, 16, '♩', BL)]] },
        { b: '냄새', en: 'There was a distinct smell of smoke.', ko: '연기 냄새가 뚜렷하게 났다.', feel: '냄새가 <b>딱 구별될</b> 만큼 뚜렷하다.', p: [[150, '캠핑장', () => l('M60 140 q-6 -10 0 -20 t0 -20 M90 140 q-6 -10 0 -20 t0 -20', 3, '#999')], [280, '뚜렷이 구별', () => W.distinct()], [150, '킁킁', () => A(75, MN, 'shock', null, .8) + t(124, 60, 16, '킁', '#888')]] }],
      vague: [
        { b: '기억', en: 'I have a vague memory of that day.', ko: '그날 일이 어렴풋이 기억난다.', feel: '기억에 <b>정보가 모자라다.</b>', p: [[150, '어릴 적 사진첩', () => BLURDEF + PHOTO(75, 130, true)], [280, '정보가 모자람', () => W.vague()], [150, '"바닷가였던가…"', () => A(75, MN, 'calm', null, .8) + t(124, 60, 16, '…', '#888')]] },
        { b: '대답', en: 'He gave a vague answer.', ko: '그는 애매하게 대답했다.', feel: '대답에 <b>알맹이가 없다.</b>', p: [[150, '"언제 끝나요?"', () => A(75, MN, 'calm', null, .8)], [280, '정보가 모자람', () => W.vague(t(196, 140, 18, '"그냥… 곧?"', '#888'))], [150, '한숨', () => A(75, MN, 'phew', null, .8)]] }],
      ambiguous: [
        { b: '표지판', en: 'The sign is ambiguous.', ko: '표지판 뜻이 애매하다.', feel: '화살표가 <b>두 갈래</b>로 읽힌다.', p: [[150, '갈림길', () => l('M75 238 V150 L30 60 M75 150 L120 60', 6, '#888') + f('M50 120 h50 v20 h-50 z', '#fff', 2) + l('M60 130 h30', 3, OR)], [280, '뜻이 두 갈래', () => W.ambiguous()], [150, '왔다 갔다', () => A(75, OR, 'calm', null, .7) + l('M40 220 h-20 l6 -5 M110 220 h20 l-6 -5', 3, '#888')]] },
        { b: '미소', en: 'She gave an ambiguous smile.', ko: '그녀는 알쏭달쏭한 미소를 지었다.', feel: '웃음 뜻이 <b>두 갈래</b>다.', p: [[150, '"내 선물 마음에 들어?"', () => A(75, BL, 'smile', null, .6) + PKG(120, 200, .5)], [280, '뜻이 두 갈래', () => W.ambiguous(g(196, 146, 0, .7, HEAD('calm')))], [150, '좋다는 걸까?', () => A(75, BL, 'calm', null, .6) + t(110, 60, 18, '?', OR)]] }],
      blurry: [
        { b: '안경', en: 'Everything is blurry without my glasses.', ko: '안경 없으면 다 흐릿하다.', feel: '눈에 <b>선명하지 않다.</b>', p: [[150, '안경이 어디?', () => A(75, BR, 'calm', 'M-20 -90 L-36 -60 M20 -90 L36 -60', .8)], [280, '눈에 흐릿함', () => W.blurry()], [150, '머리 위에 있었다', () => A(75, BR, 'shock', null, .8) + l('M58 100 h12 M80 100 h12', 3)]] },
        { b: '기억', en: 'My memory of that night is blurry.', ko: '그날 밤 기억이 흐릿하다.', feel: '기억도 <b>흐릿하게</b> 번진다.', p: [[150, '축제 밤', () => DARK(150, '#2b1d36') + t(40, 60, 20, '✺', GD) + t(110, 80, 20, '✺', MN)], [280, '눈에 흐릿함', () => W.blurry()], [150, '"뭐 했더라…"', () => A(75, MN, 'calm', null, .8) + t(124, 60, 16, '?', '#888')]] }]
    };
    const CORE = { clear: '<b>뜻이 분명하다.</b>', obvious: '<b>설명 없이 누구나 안다.</b>', 'crystal-clear': '<b>흐림이 전혀 없다.</b>', distinct: '<b>서로 분명히 다르다.</b>', vague: '<b>정보가 모자라 막연하다.</b>', ambiguous: '<b>뜻이 두 갈래로 읽힌다.</b>', blurry: '<b>눈에 흐릿하다.</b>' };
