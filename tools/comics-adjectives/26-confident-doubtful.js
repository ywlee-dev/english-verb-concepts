    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "? 에서 ✔ 까지 믿음 막대"와 "무엇이?" 칸이다 — 막대 눈금이 어느 쪽인가, 그리고 confident(나를 믿음) · convinced(근거 보고 믿게 됨) · skeptical(남의 주장) · unsure(내 선택)처럼 무엇을 믿고 의심하나가 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'skeptical', BASIC_B = '노트 장면';
    const FX = { confident: [.4, 700, 900, .15, .4], sure: [.2, 900, 900, .15, .4], certain: [.3, 600, 600, .2, .4], convinced: [.5, 500, 900, .15, .4], doubtful: [.6, 600, 400, .08, .5], skeptical: [.5, 500, 700, .08, .5], unsure: [.6, 700, 500, .06, .5] };
    const ORDER = MIX(['confident', 'sure', 'certain', 'convinced', 'doubtful', 'skeptical', 'unsure']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const BV = { certain: 1, convinced: .9, confident: .8, sure: .75, unsure: -.5, doubtful: -.6, skeptical: -.7 };
    const WHAT = { confident: '나 자신을 믿음', sure: '가장 편한 말', certain: '지금 의심 없음', convinced: '근거 보고 믿게 됨', doubtful: '잘될지 의심', skeptical: '남의 주장에 근거 요구', unsure: '내 선택이 안 섬' };
    const TC = (v) => v > 0 ? GN : OR;
    const BAR = (id) => { const v = BV[id], x = 62 + v * 44;
      let s = f('M14 120 h96 v16 h-96 z', '#eee') + f(v > 0 ? 'M62 120 h' + (v * 44) + ' v16 h-' + (v * 44) + ' z' : 'M' + x + ' 120 h' + (-v * 44) + ' v16 h' + (v * 44) + ' z', TC(v), 0) + l('M62 114 v28', 2, '#888');
      s += t(14, 108, 18, '?', OR) + t(110, 108, 18, '✔', GN) + f('M' + (x - 6) + ' 144 l6 -8 l6 8 z', '#222');
      if (id === 'convinced') s += DOC(30, 190, .6) + l('M44 180 h20 l-5 -4 M64 180 l-5 4', 2, GN);
      if (id === 'skeptical') s += DOC(30, 190, .6) + t(64, 190, 16, '근거?', OR);
      if (id === 'confident') s += g(62, 200, 0, .3, MAN(BL, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130'));
      if (id === 'unsure') s += t(40, 196, 14, 'A', BL) + t(84, 196, 14, 'B', BL) + t(62, 196, 14, '?', OR);
      return s + t(62, 230, 12, v > 0 ? '믿음 ' + Math.round(v * 100) : '의심 ' + Math.round(-v * 100), TC(v)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + BAR(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 8 ? 13 : 17, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(BV[id]));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { confident: P('confident', '자신만만'), sure: P('sure', '그럼!'), certain: P('certain', '틀림없이'), convinced: P('convinced', '납득'), doubtful: P('doubtful', '글쎄…'), skeptical: P('skeptical', '정말?'), unsure: P('unsure', '갈팡질팡') };
    // 작은 그림들
    const SLIDE = (x, y, k) => g(x, y, 0, k || 1, f('M-50 -36 h100 v60 h-100 z', '#fff') + l('M-40 -20 h60 M-40 -6 h80 M-40 8 h40', 4, BL));
    const CAL = (x, y, txt) => f('M' + (x - 30) + ' ' + (y - 30) + ' h60 v60 h-60 z', '#fff') + f('M' + (x - 30) + ' ' + (y - 30) + ' h60 v14 h-60 z', RD) + t(x, y + 14, 18, txt, '#222');
    const SIGNP = (x, y, a, b) => l('M' + x + ' ' + y + ' v100', 4, '#7a5a3a') + f('M' + (x - 40) + ' ' + (y + 6) + ' h36 v16 h-36 z', '#e9c99a') + t(x - 22, y + 19, 11, a) + f('M' + (x + 4) + ' ' + (y + 30) + ' h36 v16 h-36 z', '#e9c99a') + t(x + 22, y + 43, 11, b);
    const AD = (x, y) => f('M' + (x - 44) + ' ' + (y - 30) + ' h88 v60 h-88 z', '#ffe08a') + t(x, y - 4, 13, '10kg 빠져요!', RD) + t(x, y + 16, 11, '단 3일!', RD);
    const MENU = (x, y) => f('M' + (x - 30) + ' ' + (y - 40) + ' h60 v80 h-60 z', '#fff') + [0, 1, 2, 3].map((i) => l('M' + (x - 22) + ' ' + (y - 26 + i * 18) + ' h44', 3, '#bbb')).join('');
    const WHEEL = (x, y, k) => g(x, y, 0, k || 1, '<circle r="22" fill="none" stroke="#222" stroke-width="5"/>' + l('M-22 0 h44 M0 0 v22', 4));
    const C = {
      confident: { n: 'confident', past: 'confident', en: 'I\'m confident about the presentation.', ko: '발표에 자신 있다.', feel: '<b>잘될 거라 믿는다.</b> 나 자신을 믿을 때 많이 쓴다.', t: .4,
        p: [[150, '연습 열 번', () => SLIDE(75, 120, 1.1) + t(75, 190, 14, '× 10', GN)], [280, '나 자신을 믿음', () => W.confident()], [150, '어깨를 편다', () => A(75, BL, 'smile', 'M-20 -90 L-36 -60 M20 -90 L36 -60', .8)]] },
      sure: { n: 'sure', past: 'sure', en: 'I\'m sure it\'s at three.', ko: '세 시가 틀림없어.', feel: '<b>확실히 믿는다.</b> 가장 편한 말. "Sure!"는 "그럼요."', t: .2,
        p: [[150, '"몇 시였지?"', () => A(40, OR, 'calm', null, .5) + A(110, MN, 'smile', null, .55)], [280, '가장 편한 말', () => W.sure(CLK(196, 140, 26, GN))], [150, '고개를 끄덕', () => A(75, MN, 'smile', null, .8)]] },
      certain: { n: 'certain', past: 'certain', en: 'I\'m certain we agreed on three.', ko: '우리가 세 시로 정한 게 확실하다.', feel: '<b>지금 의심이 없다.</b> sure보다 조금 세다. 실제로 맞는지는 별개.', t: .3,
        p: [[150, '"네 시 아니었어?"', () => A(75, BR, 'calm', null, .8)], [280, '지금 의심 없음', () => W.certain(CAL(196, 140, '3:00'))], [150, '메모를 보여 준다', () => DOC(75, 130, 1.6) + t(75, 140, 16, '3시', RD)]] },
      convinced: { n: 'convinced', past: 'convinced', en: 'I\'m convinced this plan will work.', ko: '이 계획이 통할 거라고 확신한다.', feel: '<b>근거를 보고 그 판단을 믿는다.</b> 처음에 반대했을 필요는 없다.', t: .5,
        p: [[150, '자료 검토', () => [0, 1, 2].map((i) => DOC(50 + i * 25, 140, 1)).join('')], [280, '근거 보고 믿게 됨', () => W.convinced()], [150, '"갑시다"', () => A(75, BL, 'stern', 'M18 -92 L40 -120', .8)]] },
      doubtful: { n: 'doubtful', past: 'doubtful', en: 'I\'m doubtful about the plan.', ko: '그 계획이 잘될지 의심스럽다.', feel: '<b>잘될지 의심한다.</b> 일이 불확실할 때도. b는 소리 안 남.', t: .6,
        p: [[150, '"일주일 만에 다 해요"', () => A(75, BR, 'smile', 'M18 -92 L40 -120', .8)], [280, '잘될지 의심', () => W.doubtful()], [150, '고개를 갸웃', () => g(75, 240, -10, .8, MAN(MN, 'calm')) + t(124, 60, 20, '?', OR)]] },
      skeptical: { n: 'skeptical', past: 'skeptical', en: 'I\'m skeptical of that claim.', ko: '나는 그 주장을 쉽게 믿지 않는다.', feel: '<b>남의 주장을 확인 전엔 안 믿는다.</b> 거짓이라 단정하는 건 아니다.', t: .5,
        p: [[150, '"이거 먹으면 키 커요"', () => A(75, BR, 'smile', 'M18 -92 L40 -100', .8) + f('M110 90 h20 v30 h-20 z', GD)], [280, '남의 주장에 근거 요구', () => W.skeptical()], [150, '"근거 있어요?"', () => A(75, MN, 'stern', 'M-20 -90 L12 -70 M20 -90 L-12 -68', .8)]] },
      unsure: { n: 'unsure', past: 'unsure', en: 'I\'m unsure which option to choose.', ko: '어느 쪽을 골라야 할지 모르겠다.', feel: '<b>내 판단이 서지 않는다.</b>', t: .6,
        p: [[150, '갈림길', () => SIGNP(75, 60, 'A', 'B')], [280, '내 선택이 안 섬', () => W.unsure()], [150, '왔다 갔다', () => A(75, OR, 'calm', null, .7) + l('M40 220 h-20 l6 -5 M110 220 h20 l-6 -5', 3, '#888')]] }
    };
    const MORE = {
      confident: [
        { b: '운전', en: 'She is a confident driver.', ko: '그녀는 운전에 자신이 있다.', feel: '자기 솜씨를 <b>믿는다.</b>', p: [[150, '고속도로', () => l('M0 200 H150', 4, '#888') + CAR(30, 196, .5)], [280, '나 자신을 믿음', () => W.confident(WHEEL(196, 140, 1.2))], [150, '여유롭게', () => A(75, MN, 'smile', null, .8) + t(124, 60, 18, '♪', BL)]] },
        { b: '미소', en: 'He gave a confident smile.', ko: '그는 자신 있는 미소를 지었다.', feel: '미소에 <b>믿음</b>이 묻어난다.', p: [[150, '결승전 직전', () => BOXG(20, 40, 110, 60, '#222') + t(75, 78, 16, 'FINAL', GD)], [280, '나를 믿는 미소', () => W.confident(g(196, 146, 0, .7, HEAD('smile')))], [150, '씩', () => A(75, BL, 'smile', 'M18 -92 L36 -126', .8)]] }],
      sure: [
        { b: '길', en: 'Are you sure this is the way?', ko: '이 길 맞는 거 확실해?', feel: '<b>확실한지</b> 묻는다.', p: [[150, '숲길 한가운데', () => TREEC(30, .5) + TREEC(120, .5) + A(75, BL, 'smile', 'M18 -92 L46 -100', .5)], [280, '가장 편한 말', () => W.sure(t(196, 146, 26, '🧭'))], [150, '"…아마도?"', () => A(40, BL, 'phew', null, .55) + A(110, MN, 'stern', null, .55)]] },
        { b: '말문', en: 'I\'m not sure what to say.', ko: '뭐라고 말해야 할지 모르겠다.', feel: '<b>확실함이 없다</b> — not이 붙어 뒤집혔다.', p: [[150, '깜짝 선물', () => PKG(75, 190, 1.4)], [280, '확실함이 없음', () => W.sure(t(196, 146, 22, '"어…"', OR))], [150, '눈물이 핑', () => A(75, MN, 'phew', null, .8)]] }],
      certain: [
        { b: '내일', en: 'It\'s certain to rain tomorrow.', ko: '내일은 비가 올 게 확실하다.', feel: '앞일에도 <b>의심이 없다.</b>', p: [[150, '먹구름', () => DARK(150, '#9aa4b0') + t(40, 60, 22, '☁') + t(110, 80, 22, '☁')], [280, '지금 의심 없음', () => W.certain(t(196, 146, 18, '비 100%', BL))], [150, '우산을 챙긴다', () => A(75, MN, 'calm', 'M18 -92 L30 -50', .8) + l('M100 150 v60', 3, BL)]] },
        { b: '한 가지', en: 'One thing is certain: we tried our best.', ko: '한 가지는 확실하다. 우리는 최선을 다했다.', feel: '마음속 <b>흔들리지 않는</b> 한 가지.', p: [[150, '경기 끝', () => BOXG(20, 40, 110, 60, '#222') + t(75, 78, 18, '2 : 3', '#fff')], [280, '의심 없는 한 가지', () => W.certain(t(196, 146, 30, '💪'))], [150, '어깨동무', () => A(50, BL, 'smile', 'M20 -90 L40 -100', .65) + A(100, OR, 'smile', 'M-20 -90 L-40 -100', .65)]] }],
      convinced: [
        { b: '영상', en: 'After the video, I was convinced.', ko: '영상을 보고 나니 믿게 됐다.', feel: '<b>근거를 보고</b> 믿게 됐다.', p: [[150, '반신반의', () => A(75, BL, 'calm', null, .8) + t(124, 60, 18, '?', OR)], [280, '근거 보고 믿게 됨', () => W.convinced(g(196, 140, 0, 1.3, PH))], [150, '"아, 맞구나"', () => A(75, BL, 'smile', null, .8) + BULB(120, 60, .4)]] },
        { b: '짝사랑', en: 'She\'s convinced he likes her.', ko: '그녀는 그가 자기를 좋아한다고 굳게 믿는다.', feel: '자기 판단을 <b>굳게</b> 믿는다.', p: [[150, '"눈이 마주쳤어!"', () => A(75, MN, 'smile', null, .8) + t(124, 50, 18, '♥', RD)], [280, '굳게 믿음', () => W.convinced(t(196, 146, 34, '♥', RD))], [150, '친구는 갸웃', () => A(50, MN, 'smile', null, .6) + A(110, OR, 'calm', null, .55) + t(110, 40, 16, '?', OR)]] }],
      doubtful: [
        { b: '경기', en: 'It\'s doubtful the game will go on.', ko: '경기가 열릴지 불확실하다.', feel: '일이 <b>불확실하다.</b>', p: [[150, '장대비', () => DARK(150, '#9aa4b0') + l('M20 30 l-6 20 M70 40 l-6 20 M120 30 l-6 20', 3, '#fff')], [280, '잘될지 의심', () => W.doubtful()], [150, '경기장 물바다', () => f('M0 190 H150 V240 H0 z', '#8fd0ee') + l('M20 190 V100 h110 v90', 5, '#888')]] },
        { b: '표정', en: 'He gave me a doubtful look.', ko: '그가 미심쩍은 눈으로 나를 봤다.', feel: '눈빛에 <b>의심</b>이 담겼다.', p: [[150, '"내가 다 했어"', () => A(75, OR, 'smile', null, .6)], [280, '의심의 눈빛', () => W.doubtful(BEYE(196, 136, .5, true) + t(230, 116, 18, '?', OR))], [150, '팔짱', () => A(75, BR, 'stern', 'M-20 -90 L12 -70 M20 -90 L-12 -68', .8)]] }],
      skeptical: [
        { b: '광고', en: 'I\'m skeptical of ads like this.', ko: '이런 광고는 쉽게 안 믿는다.', feel: '남의 주장에 <b>근거부터</b> 묻는다.', p: [[150, '전단지', () => AD(75, 120)], [280, '남의 주장에 근거 요구', () => W.skeptical()], [150, '휴지통으로', () => f('M60 160 h40 l-4 78 h-32 z', '#888') + A(120, BL, 'stern', null, .45)]] },
        { b: '과학자', en: 'Scientists were skeptical of the result.', ko: '과학자들은 그 결과를 쉽게 믿지 않았다.', feel: '다시 <b>확인하기 전엔</b> 안 믿는다.', p: [[150, '"대발견!"', () => A(75, BR, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .8)], [280, '근거 요구', () => W.skeptical(t(196, 146, 18, '다시 실험', BL))], [150, '실험 또 실험', () => f('M50 140 h14 v60 h-14 z M86 140 h14 v60 h-14 z', '#cfe6f5') + A(120, '#fff', 'stern', null, .4)]] }],
      unsure: [
        { b: '메뉴', en: 'I\'m unsure what to order.', ko: '뭘 시켜야 할지 모르겠다.', feel: '<b>내 선택</b>이 안 선다.', p: [[150, '식당 메뉴판', () => MENU(75, 130)], [280, '내 선택이 안 섬', () => W.unsure()], [150, '"먼저 시키세요"', () => A(40, MN, 'phew', null, .55) + A(110, '#888', 'calm', null, .55)]] },
        { b: '진로', en: 'She\'s unsure about her future.', ko: '그녀는 앞으로의 길을 정하지 못했다.', feel: '앞길을 <b>스스로 못 정했다.</b>', p: [[150, '졸업식', () => A(75, MN, 'smile', null, .8) + t(124, 50, 18, '🎓')], [280, '내 선택이 안 섬', () => W.unsure(SIGNP(196, 92, '?', '?'))], [150, '창밖을 본다', () => BOXG(80, 40, 60, 60, '#cfe6f5') + A(50, MN, 'calm', null, .65)]] }]
    };
    const CORE = { confident: '<b>잘될 거라 나를 믿는다.</b>', sure: '<b>확실히 믿는다 (가장 편한 말).</b>', certain: '<b>지금 의심이 없다.</b>', convinced: '<b>근거를 보고 믿게 됐다.</b>', doubtful: '<b>잘될지 의심한다.</b>', skeptical: '<b>남의 주장을 쉽게 안 믿는다.</b>', unsure: '<b>내 판단이 서지 않는다.</b>' };
