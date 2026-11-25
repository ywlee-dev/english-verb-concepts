    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 동사의 느낌이다. 장면 1은 노트의 교실 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. walk out of에 늘 화가 담긴 것은 아니다. file out of는 줄지어 나가는 것이라 안 보이는 장면 대신 개미를 그렸다.
    const BASE = 'leave', FIRST = 'file', BASIC_B = '교실';
    const FX = { leave: [.2, 500, 350, .12, .5], exit: [.08, 900, 400, .5, .6], walk: [.1, 260, 140, .6, .6], file: [.5, 1600, 1500, .12, .8] };
    const ORDER = MIX(['leave', 'exit', 'walk', 'file']);
    const PK = '#a84b7a', BR = '#8a6a3a', GN = '#3a9a6a';
    const WK = 'M-10 -42 L-24 0 M10 -42 L22 0';
    const HOLE = (b) => '<g opacity=".25">' + b + '</g>' + ARW(130, 150, 186, 150, '#888', 6) + sfx(160, 80, 20, '슥', '', '#888');
    const EXT = (b, v) => DARK(240, '#eef2ee') + '<rect x="130" width="110" height="240" fill="#dff0f8"/>' + l('M130 0 V240', 6, '#2c7a53') + BOXG(84, 24, 92, 34, '#2c7a53') + t(130, 48, 20, v || 'EXIT', '#fff') + b + ARW(164, 200, 210, 200, '#2c7a53', 6) + sfx(190, 100, 26, '통과', '', '#2c7a53');
    const WLK = (b) => DARK(300, '#fffaf0') + f('M150 20 h110 v220 h-110 z', '#dff0f8') + l('M150 240 V20 H260 V240', 8, '#7a5a3a') + [0, 1, 2, 3, 4].map((i) => '<ellipse cx="' + (20 + i * 46) + '" cy="' + (216 + (i % 2) * 14) + '" rx="11" ry="5" fill="#b59a78"/>').join('') + b + sfx(72, 64, 32, '저벅', '', '#7a5a3a') + sfx(110, 110, 32, '저벅', '', '#7a5a3a');
    const FIL = (pic) => DARK(350, '#f1f1f6') + [0, 1, 2, 3, 4, 5, 6].map((i) => pic(28 + i * 44, i)).join('') + l('M330 60 V240', 8, '#7a5a3a') + ARW(290, 70, 320, 70, '#5a6a8a', 5) + sfx(150, 64, 28, '한 명, 또 한 명', '', '#5a6a8a');
    const DESKS = (n) => [0, 1, 2].map((i) => TBL(14 + i * 52, 190, 42) + (i < n ? A(35 + i * 52, [ME, PK, GN][i], 'calm', null, .5) : '')).join('');
    const C = {
      leave: { n: 'leave', past: 'left', en: 'The students left the classroom after the bell.', ko: '종이 치자 학생들이 교실을 떠났다.', feel: '<b>빈자리가 남는다.</b> 어디로 어떻게 나갔는지는 모른다.', t: .5,
        p: [[180, '학생들이 앉아 있다', () => DESKS(3)], [200, '자리가 비어 간다', () => HOLE(g(50, 220, 0, .7, MAN(ME, 'calm')) + g(96, 220, 0, .7, MAN(PK, 'calm')))], [180, '빈 교실', () => DESKS(0)]] },
      exit: { n: 'exit', past: 'exited', en: 'The students exited the classroom through the side door.', ko: '학생들이 옆문으로 교실을 나갔다.', feel: '<b>출구 선을 넘는다.</b> 안내판의 말이다. 딱딱하다.', t: .6,
        p: [[150, '출구를 찾는다', () => A(60, ME, 'calm', null, .85) + ARW(96, 70, 130, 70, '#2c7a53', 5)], [240, '출구 선을 넘는다', () => EXT(A(126, ME, 'calm', '', .8, WK))], [150, '밖에 있다', () => DARK(150, '#dff0f8') + A(76, ME, 'calm', null, .85)]] },
      walk: { n: 'walk out of', past: 'walked out of', en: 'The students walked out of the classroom.', ko: '학생들이 걸어서 교실을 나갔다.', feel: '<b>발걸음이 보인다.</b> 한 발 한 발 문을 넘는다.', t: .6,
        p: [[150, '자리에서 일어선다', () => TBL(60, 190, 70) + A(50, ME, 'calm', null, .8)], [300, '발걸음이 문을 넘는다', () => WLK(g(196, 236, 0, .85, MAN(ME, 'calm', '', WK)))], [150, '복도를 걷는다', () => A(76, ME, 'calm', '', .85, WK) + GND(150)]] },
      file: { n: 'file out of', past: 'filed out of', en: 'The students filed out of the classroom quietly.', ko: '학생들이 한 줄로 조용히 교실을 나갔다.', feel: '<b>줄이 길다.</b> 한 사람씩 같은 간격으로. 혼자서는 못 한다.', t: .75,
        p: [[130, '줄을 선다', () => [30, 66, 102].map((x, i) => A(x, [ME, PK, GN][i], 'calm', null, .6)).join('')], [350, '한 줄로 차례차례 나간다', () => FIL((x, i) => g(x, 236, 0, .68, MAN([ME, PK, GN, BR][i % 4], 'calm', '', WK)))], [130, '마지막 사람', () => A(50, BR, 'calm', '', .8, WK) + l('M110 60 V240', 8, '#7a5a3a')]] } };
    const MORE = {
      leave: [
        { b: '직장', en: 'She left her job.', ko: '직장을 그만뒀다.', feel: '문을 나선 장면이 없어도 <b>더는 거기 없다.</b>', p: [[180, '책상에서 일한다', () => TBL(40, 180, 100) + A(90, PK, 'calm', null, .6) + DOC(130, 160, .6)], [200, '자리가 비어 간다', () => HOLE(g(70, 226, 0, .85, MAN(PK, 'calm')))], [180, '빈 책상', () => TBL(40, 180, 100)]] },
        { b: '웃음', en: 'The smile left his face.', ko: '얼굴에서 웃음이 가셨다.', feel: '웃음도 <b>얼굴을 떠난다.</b>', p: [[180, '웃고 있다', () => g(90, 140, 0, 2, HEAD('smile'))], [200, '웃음이 떠난다', () => HOLE(g(70, 150, 0, 1.4, HEAD('smile')))], [180, '굳은 얼굴', () => g(90, 140, 0, 2, HEAD('stern'))]] }],
      exit: [
        { b: '고속도로', en: 'We exited the highway at noon.', ko: '정오에 고속도로를 빠져나왔다.', feel: '걷지 않아도 <b>나가는 길</b>을 지난다.', p: [[150, '고속도로를 달린다', () => l('M0 220 H150', 6, '#888') + CAR(76, 206, .8)], [240, '나가는 길을 지난다', () => EXT(CAR(124, 206, .55), '출구')], [150, '시골길', () => DARK(150, '#e6f2dc') + CAR(70, 214, .7) + TREEC(124, .5)]] },
        { b: '대회', en: 'The team exited the contest early.', ko: '그 팀은 일찍 대회에서 탈락했다.', feel: '장소가 아닌 대회에서도 <b>밖으로</b> 나간다.', p: [[150, '경기에서 진다', () => [40, 80, 116].map((x) => A(x, GN, 'sad', null, .6)).join('')], [240, '대회 밖으로 나간다', () => EXT(A(126, GN, 'down', '', .8, WK), '8강')], [150, '관중석에 앉는다', () => A(76, GN, 'calm', null, .6) + TBL(30, 200, 90)]] }],
      walk: [
        { b: '가게', en: 'She walked out of the shop with nothing.', ko: '아무것도 안 사고 가게를 걸어 나왔다.', feel: '나간 사실보다 <b>걸어 나오는 모습</b>이 보인다.', p: [[150, '옷을 보다가 놓는다', () => A(50, PK, 'calm', 'M18 -92 L42 -84', .8) + f('M96 110 l16 -8 l16 8 l10 18 l-12 6 v44 h-28 v-44 l-12 -6 z', '#4a7fb5')], [300, '발걸음이 문을 넘는다', () => WLK(g(196, 236, 0, .85, MAN(PK, 'calm', '', WK)))], [150, '빈손으로 걷는다', () => A(76, PK, 'calm', '', .85, WK)]] },
        { b: '결혼', en: 'He walked out of the marriage.', ko: '결혼 생활을 박차고 나왔다.', feel: '결혼에서도 <b>제 발로</b> 걸어 나온다.', p: [[150, '말이 없는 두 사람', () => A(44, BR, 'down', null, .75) + A(112, PK, 'sad', null, .75)], [300, '발걸음이 문을 넘는다', () => WLK(g(196, 236, 0, .85, MAN(BR, 'stern', '', WK)))], [150, '혼자 남는다', () => A(112, PK, 'sad', null, .75) + t(76, 80, 22, '…')]] }],
      file: [
        { b: '극장', en: 'The audience filed out of the theater in silence.', ko: '관객들이 말없이 줄지어 극장을 나왔다.', feel: '많은 사람이 <b>한 줄로</b> 흘러나온다.', p: [[130, '막이 내린다', () => f('M10 30 h110 v150 h-110 z', '#a82f2f')], [350, '한 줄로 차례차례 나간다', () => FIL((x, i) => g(x, 236, 0, .68, MAN(['#555', '#6a5a7a', '#5a6a8a'][i % 3], 'calm', '', WK)))], [130, '밤거리', () => DARK(130, '#2b3550') + A(64, '#555', 'calm', '', .75, WK)]] },
        { b: '개미', en: 'Ants filed out of the wall.', ko: '개미들이 줄지어 벽에서 나왔다.', feel: '사람이 아니어도 <b>하나씩, 같은 간격</b>이다.', p: [[130, '벽의 작은 구멍', () => BOXG(20, 40, 90, 180, '#e9e0c8') + '<circle cx="66" cy="196" r="10"/>'], [350, '한 줄로 차례차례 나간다', () => FIL((x) => g(x, 210, 0, 1, '<circle cx="-11" cy="0" r="8"/><circle cx="2" cy="0" r="6"/><circle cx="13" cy="-2" r="7"/>' + l('M-6 6 l-4 10 M2 6 v10 M8 6 l4 10', 3)))], [130, '과자로 간다', () => BOXG(70, 190, 40, 30, '#f7e0b0') + [20, 40, 60].map((x) => '<circle cx="' + x + '" cy="214" r="5"/>').join('')]] }] };
    const CORE = { leave: '<b>더는 거기 없다.</b> 방식은 말하지 않는다.', exit: '<b>출구(경계)를 지나</b> 나간다. 딱딱한 말.', walk: '<b>제 발로 걸어</b> 나간다.', file: '<b>한 줄로 차례차례</b> 나간다.' };
