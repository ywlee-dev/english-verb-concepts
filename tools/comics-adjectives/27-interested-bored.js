    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "사람 하나와 별 하나 — 눈길이 얼마나 끌려가나"와 "무엇이?" 칸이다 — 눈길 줄이 굵어지나 끊기나, 그리고 captivated(사로잡혀 몰입) · weary(반복에 지침) · indifferent(상관없음)처럼 어떤 마음인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'indifferent', BASIC_B = '노트 장면';
    const FX = { interested: [.3, 900, 1200, .1, .4], fascinated: [.6, 900, 1800, .12, .4], captivated: [.9, 700, 1400, .1, .4], bored: [1, 400, 300, .06, .5], weary: [1.2, 300, 220, .06, .5], indifferent: [.4, 500, 500, .06, .5] };
    const ORDER = MIX(['interested', 'fascinated', 'captivated', 'bored', 'weary', 'indifferent']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const IN = { captivated: 1, fascinated: .9, interested: .6, indifferent: -.3, bored: -.6, weary: -.8 };
    const WHAT = { interested: '관심이 있음', fascinated: '신기해서 눈을 못 뗌', captivated: '사로잡혀 몰입', bored: '내가 지루함', weary: '반복에 지침', indifferent: '어느 쪽이든 상관없음' };
    const TC = (v) => v > 0 ? OR : '#888';
    const GAZE = (id) => { const v = IN[id], fc = v > .8 ? 'shock' : v > 0 ? 'smile' : v < -.7 ? 'down' : 'calm';
      let s = t(98, 112, 34, '★', GD) + g(28, 200, v > 0 ? 10 : -10, .42, MAN(BL, fc));
      if (v > 0) s += l('M40 132 L84 112', 1 + v * 5, OR) + (v > .8 ? t(62, 96, 14, '♥', RD) : '');
      else s += '<path d="M40 132 L84 112" stroke="#bbb" stroke-width="2" stroke-dasharray="3 6"/>';
      if (id === 'bored') s += t(56, 84, 14, '하암', '#888');
      if (id === 'weary') s += t(60, 84, 14, '또…', '#888') + l('M70 92 a8 8 0 1 1 -2 -6', 2, '#888');
      if (id === 'indifferent') s += t(60, 84, 14, '¯\\_(ツ)_/¯', '#888');
      return s + l('M4 200 H116', 2, '#999') + t(62, 228, 12, v > 0 ? '끌림 ' + Math.round(v * 100) : '끌림 없음', TC(v)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + GAZE(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 8 ? 13 : 17, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(IN[id]));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { interested: P('interested', '오호'), fascinated: P('fascinated', '우와아'), captivated: P('captivated', '푹 빠짐'), bored: P('bored', '심심'), weary: P('weary', '지겨워'), indifferent: P('indifferent', '그러든가') };
    // 작은 그림들
    const OCTO = (x, y, k) => g(x, y, 0, k || 1, '<ellipse cy="-30" rx="24" ry="22" fill="#c96a8a" stroke="#222" stroke-width="3"/>' + [-18, -6, 6, 18].map((d) => l('M' + d + ' -10 q' + (d / 2) + ' 20 ' + d + ' 30', 5, '#c96a8a')).join(''));
    const TANK = (x, y) => f('M' + (x - 50) + ' ' + (y - 80) + ' h100 v80 h-100 z', '#cfe6f5');
    const STAGE = () => DARK(150, '#2b1d26') + l('M30 0 L75 110 M120 0 L75 110', 6, '#fff6c0');
    const HIST = (x, y) => f('M' + (x - 24) + ' ' + (y - 50) + ' h48 v50 h-48 z', '#d9c9a8') + t(x, y - 18, 12, '1592', BR);
    const BOOKS = (x, y) => [0, 1, 2].map((i) => BOXG(x + i * 18, y - 50, 16, 50, [RD, BL, GN][i])).join('');
    const PAN = (x, y) => f('M' + (x - 34) + ' ' + y + ' h68 l-6 22 h-56 z', '#555') + l('M' + (x + 34) + ' ' + (y + 4) + ' h40', 6, '#333');
    const HAT = (x, y) => f('M' + (x - 30) + ' ' + y + ' h60 v6 h-60 z M' + (x - 20) + ' ' + y + ' v-40 h40 v40 z', '#222');
    const YARN = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="14" fill="' + RD + '" stroke="#222" stroke-width="2"/>';
    const CAT = (x, y, k) => g(x, y, 0, k || 1, '<ellipse cy="-20" rx="34" ry="20" fill="#888" stroke="#222" stroke-width="3"/><circle cx="28" cy="-42" r="16" fill="#888" stroke="#222" stroke-width="3"/>');
    const C = {
      interested: { n: 'interested', past: 'interested', en: 'I\'m interested in history.', ko: '나는 역사에 관심이 있다.', feel: '<b>관심이 있다.</b> 사람이 -ed, 대상이 interesting.', t: .3,
        p: [[150, '박물관', () => HIST(75, 200)], [280, '눈길이 간다', () => W.interested()], [150, '안내문을 읽는다', () => A(60, MN, 'smile', null, .75) + DOC(118, 130, .8)]] },
      fascinated: { n: 'fascinated', past: 'fascinated', en: 'I was fascinated by the octopus.', ko: '나는 문어에게 푹 빠졌다.', feel: '<b>신기해서 눈을 못 뗀다.</b> 강한 호기심.', t: .6,
        p: [[150, '수족관', () => TANK(75, 200) + OCTO(75, 196, .8)], [280, '눈을 못 뗌', () => W.fascinated()], [150, '유리에 코를 댄다', () => TANK(100, 220) + g(40, 150, 0, .6, HEAD('shock'))]] },
      captivated: { n: 'captivated', past: 'captivated', en: 'The audience was captivated by the story.', ko: '관객은 이야기에 사로잡혔다.', feel: '<b>사로잡혀 몰입했다.</b> 꼭 오래일 필요는 없다.', t: .9,
        p: [[150, '이야기꾼', () => STAGE() + g(75, 120, 0, .5, MAN(BR, 'smile', 'M18 -92 L40 -120'))], [280, '사로잡혀 몰입', () => W.captivated()], [150, '숨죽인 관객', () => [25, 60, 95, 130].map((x) => g(x, 230, 0, .3, HEAD('shock'))).join('')]] },
      bored: { n: 'bored', past: 'bored', en: 'I\'m bored.', ko: '나 심심해.', feel: '<b>내가</b> 지루하다. 지루하게 만드는 쪽은 boring.', t: 1,
        p: [[150, '일요일 오후', () => CLK(110, 50, 22) + f('M10 180 h130 v40 h-130 z', '#a84b40')], [280, '끌림 없음', () => W.bored()], [150, '소파에 늘어짐', () => f('M10 180 h130 v40 h-130 z', '#a84b40') + g(75, 180, -80, .5, MAN(OR, 'down'))]] },
      weary: { n: 'weary', past: 'weary', en: 'I\'m weary of answering the same question.', ko: '같은 질문에 대답하는 데 지쳤다.', feel: '<b>반복에 지쳤다.</b> 지루함보다 지침.', t: 1.2,
        p: [[150, '"이거 어떻게 해요?"', () => A(110, OR, 'smile', 'M-18 -92 L-40 -110', .55) + A(40, BL, 'calm', null, .6)], [280, '반복에 지침', () => W.weary()], [150, '열 번째', () => A(75, BL, 'down', null, .8) + t(124, 60, 16, '×10', RD)]] },
      indifferent: { n: 'indifferent', past: 'indifferent', en: 'I\'m indifferent to the result.', ko: '결과에는 크게 관심 없다.', feel: '<b>어느 쪽이든 상관없다.</b> 무심하게 들릴 수 있다.', t: .4,
        p: [[150, '"A 할래, B 할래?"', () => t(50, 120, 30, 'A', BL) + t(100, 120, 30, 'B', OR)], [280, '상관없음', () => W.indifferent()], [150, '어깨를 으쓱', () => A(75, BR, 'calm', 'M-20 -90 L-36 -110 M20 -90 L36 -110', .8)]] }
    };
    const MORE = {
      interested: [
        { b: '요리', en: 'He\'s interested in cooking.', ko: '그는 요리에 관심이 있다.', feel: '<b>관심이</b> 간다.', p: [[150, '요리 방송', () => BOXG(20, 40, 110, 70, '#222') + PAN(75, 80)], [280, '눈길이 간다', () => W.interested(PAN(186, 140))], [150, '따라 해 본다', () => PAN(90, 160) + A(40, BL, 'smile', 'M18 -92 L46 -80', .6)]] },
        { b: '제안', en: 'Are you interested in the job?', ko: '그 일에 관심 있어요?', feel: '마음이 <b>쏠리는지</b> 묻는다.', p: [[150, '"함께 일할래요?"', () => A(75, BR, 'smile', 'M18 -92 L40 -100', .8)], [280, '관심이 있나', () => W.interested(DOC(196, 136, 1.1))], [150, '"생각해 볼게요"', () => A(75, MN, 'calm', 'M18 -92 L22 -126', .8)]] }],
      fascinated: [
        { b: '별', en: 'The kids were fascinated by the stars.', ko: '아이들은 별에 푹 빠졌다.', feel: '<b>눈을 못 뗀다.</b>', p: [[150, '캠핑의 밤', () => DARK(150, '#1b1d26') + [[20, 30], [60, 50], [100, 20], [130, 60], [40, 80]].map(([x, y]) => t(x, y, 14, '★', '#fff6a0')).join('')], [280, '눈을 못 뗌', () => W.fascinated()], [150, '누워서 올려다본다', () => DARK(150, '#1b1d26') + t(75, 50, 18, '★', '#fff6a0') + g(15, 160, 90, .4, MAN(OR, 'shock')) + g(15, 215, 90, .4, MAN(GN, 'shock'))]] },
        { b: '언어', en: 'I\'m fascinated by how languages change.', ko: '언어가 변하는 방식이 너무 신기하다.', feel: '생각도 <b>눈을 못 떼게</b> 끌린다.', p: [[150, '옛날 글자', () => DOC(75, 130, 1.6) + t(75, 140, 16, 'ㆍ', BR)], [280, '신기해서 끌림', () => W.fascinated(t(196, 146, 22, 'ㆍ→ㅏ', BL))], [150, '밤새 검색', () => DARK(150, '#2b3550') + g(75, 130, 0, 2, PH)]] }],
      captivated: [
        { b: '마술', en: 'The children were captivated by the magic show.', ko: '아이들은 마술 공연에 사로잡혔다.', feel: '<b>사로잡혀</b> 빠져든다.', p: [[150, '모자 속에서', () => HAT(75, 160) + g(75, 120, 0, .8, '<ellipse rx="10" ry="16" fill="#fff" stroke="#222" stroke-width="2"/>')], [280, '사로잡혀 몰입', () => W.captivated()], [150, '입이 떡', () => [30, 75, 120].map((x) => A(x, OR, 'shock', null, .4)).join('')]] },
        { b: '목소리', en: 'I was captivated by her voice.', ko: '나는 그녀의 목소리에 마음을 빼앗겼다.', feel: '소리에 <b>마음을 빼앗긴다.</b>', p: [[150, '거리 공연', () => A(75, MN, 'smile', 'M18 -92 L22 -126', .8) + t(124, 50, 18, '♪', BL)], [280, '마음을 빼앗김', () => W.captivated(t(176, 140, 22, '♪', BL) + t(216, 130, 22, '♫', BL))], [150, '버스를 놓쳤다', () => BUS(60, 220, .5) + A(30, BL, 'phew', null, .5)]] }],
      bored: [
        { b: '비', en: 'The kids are bored on rainy days.', ko: '비 오는 날 아이들은 심심해한다.', feel: '할 게 없어 <b>지루하다.</b>', p: [[150, '창밖에 비', () => BOXG(30, 40, 90, 80, '#cfe6f5') + l('M50 50 l-6 20 M80 60 l-6 20 M110 50 l-6 20', 3, WT)], [280, '끌림 없음', () => W.bored()], [150, '뒹굴뒹굴', () => g(15, 150, 90, .4, MAN(OR, 'down')) + g(15, 210, 90, .4, MAN(GN, 'down'))]] },
        { b: '일', en: 'I\'m bored with my job.', ko: '내 일이 지루하다.', feel: '매일 같은 일이 <b>지루하다.</b>', p: [[150, '같은 서류', () => [0, 1, 2].map((i) => DOC(50 + i * 25, 140, 1)).join('')], [280, '끌림 없음', () => W.bored()], [150, '창밖만 본다', () => BOXG(80, 40, 60, 60, '#cfe6f5') + A(50, BL, 'down', null, .65)]] }],
      weary: [
        { b: '여행', en: 'The travelers were weary after the long trip.', ko: '여행자들은 긴 여정 끝에 지쳤다.', feel: '오래 이어져 <b>지쳤다.</b>', p: [[150, '열두 시간 비행', () => CLK(75, 100, 34) + t(75, 170, 14, '12시간', RD)], [280, '오래돼 지침', () => W.weary()], [150, '짐에 기대 졸기', () => PKG(60, 230, 1) + g(100, 236, -20, .5, MAN(BR, 'down')) + ZZ(84, 110)]] },
        { b: '다툼', en: 'I\'m weary of all the arguing.', ko: '끝없는 말다툼에 지쳤다.', feel: '반복되는 다툼에 <b>마음이 지쳤다.</b>', p: [[150, '또 시작', () => A(40, MN, 'stern', 'M18 -92 L40 -120', .55) + A(110, BR, 'stern', 'M-18 -92 L-40 -120', .55)], [280, '반복에 지침', () => W.weary()], [150, '귀를 막는다', () => A(75, OR, 'down', 'M-20 -90 L-28 -130 M20 -90 L28 -130', .6)]] }],
      indifferent: [
        { b: '고양이', en: 'The cat seemed indifferent to the new toy.', ko: '고양이는 새 장난감에 관심이 없어 보였다.', feel: '<b>어느 쪽이든</b> 상관없다.', p: [[150, '새 장난감', () => YARN(75, 180)], [280, '상관없음', () => W.indifferent(YARN(196, 140))], [150, '상자에만 들어간다', () => PKG(75, 220, 1.4) + g(75, 196, 0, .5, '<circle cx="28" cy="-42" r="16" fill="#888" stroke="#222" stroke-width="3"/>')]] },
        { b: '정치', en: 'Many people are indifferent to politics.', ko: '많은 사람이 정치에 무관심하다.', feel: '세상 일에 <b>무심하다.</b>', p: [[150, '선거 포스터', () => BOXG(30, 40, 90, 110, '#fff') + t(75, 100, 16, '투표!', RD)], [280, '상관없음', () => W.indifferent()], [150, '지나친다', () => BOXG(10, 40, 50, 80, '#fff') + A(100, BL, 'calm', null, .6, 'M-10 -42 L-24 0 M10 -42 L22 0')]] }]
    };
    const CORE = { interested: '<b>관심이 있다.</b>', fascinated: '<b>신기해서 눈을 못 뗀다.</b>', captivated: '<b>사로잡혀 몰입했다.</b>', bored: '<b>내가 지루하다.</b>', weary: '<b>반복에 지쳤다.</b>', indifferent: '<b>어느 쪽이든 상관없다.</b>' };
