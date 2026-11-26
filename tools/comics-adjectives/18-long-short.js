    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "자 위의 막대"와 "무엇이?" 칸이다 — 막대가 얼마나 긴가, 그리고 lengthy(시간 · 분량) · extended(원래보다 늘림) · brief(시간 · 말)처럼 무엇의 길이인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'extended', BASIC_B = '노트 장면';
    const FX = { long: [1, 500, 480, .1, .4], lengthy: [1.4, 400, 380, .08, .4], extended: [.9, 500, 800, .1, .4], short: [.15, 900, 900, .15, .4], brief: [.1, 1400, 1400, .12, .4] };
    const ORDER = MIX(['long', 'lengthy', 'extended', 'short', 'brief']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const LN = { long: .85, lengthy: .9, extended: .92, short: .25, brief: .18 };
    const WHAT = { lengthy: '시간 · 분량', extended: '원래보다 늘림', brief: '시간 · 말' };
    const TC = (v) => v > .5 ? OR : BL;
    const BAR = (id) => { const v = LN[id], w = 96 * v;
      let s = l('M14 150 h96', 2, '#999') + [0, 1, 2, 3, 4].map((i) => l('M' + (14 + i * 24) + ' 150 v8', 2, '#999')).join('');
      if (id === 'extended') s += f('M14 120 h58 v20 h-58 z', '#cfe6f5') + f('M72 120 h' + (w - 58) + ' v20 h-' + (w - 58) + ' z', OR) + t(43, 112, 11, '원래', '#888') + t(92, 112, 11, '+ 늘림', OR);
      else s += f('M14 120 h' + w + ' v20 h-' + w + ' z', TC(v));
      if (id === 'lengthy' || id === 'brief') s += CLK(62, 76, 18, TC(v));
      return s + t(62, 226, 13, '길이 ' + Math.round(v * 100), TC(v)); };
    const TP = (id, b, z) => { const c = TC(LN[id]);
      return DARK(280, '#f6f4ee') + BAR(id) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, 18, WHAT[id], BL) : t(196, 128, 15, '거리 · 시간 ·', '#888') + t(196, 150, 15, '물건 두루', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { long: P('long', '기일다'), lengthy: P('lengthy', '하염없이'), extended: P('extended', '쭈욱 더'), short: P('short', '짧뚱'), brief: P('brief', '후딱') };
    // 작은 그림들
    const QUEUE = (n, y) => Array.from({ length: n }, (_, i) => g(14 + i * 18, y, 0, .3, MAN([BL, MN, OR, GN, BR][i % 5], 'calm'))).join('');
    const TABLE = (x, y, w) => f('M' + (x - w / 2) + ' ' + y + ' h' + w + ' v8 h-' + w + ' z', '#a3743f');
    const HAIR = (x, k, long) => g(x, 240, 0, k || .8, MAN(MN, 'smile') + f(long ? 'M-30 -150 q30 -30 60 0 l6 100 h-12 l-4 -80 h-40 l-4 80 h-12 z' : 'M-30 -150 q30 -30 60 0 l4 20 h-68 z', '#5a3a1a'));
    const PENCIL = (x, y, len) => f('M' + x + ' ' + (y - 8) + ' h' + len + ' v16 h-' + len + ' z', GD) + f('M' + (x + len) + ' ' + (y - 8) + ' l18 8 l-18 8 z', '#e9c99a');
    const BOXW = (x, y, txt) => f('M' + (x - 54) + ' ' + (y - 24) + ' h108 v48 h-108 z', '#fff') + t(x, y + 6, 13, txt, BL);
    const C = {
      long: { n: 'long', past: 'long', en: 'The line is long.', ko: '줄이 길다.', feel: '<b>거리 · 시간이 길다.</b> "얼마나 걸려?"는 How long …?', t: 1,
        p: [[150, '맛집 앞', () => QUEUE(8, 238)], [280, '막대가 길다', () => W.long()], [150, '한숨', () => A(75, MN, 'phew', null, .8) + CLK(124, 50, 18)]] },
      lengthy: { n: 'lengthy', past: 'lengthy', en: 'It was a lengthy meeting.', ko: '한참 이어진 회의였다.', feel: '<b>시간 · 분량이 상당하다.</b> 지루했는지는 따로.', t: 1.4,
        p: [[150, '오후 2시 회의', () => TABLE(75, 180, 120) + A(30, BL, 'calm', null, .45) + A(120, BR, 'calm', null, .45) + CLK(75, 50, 18)], [280, '시간 · 분량', () => W.lengthy()], [150, '창밖이 깜깜', () => DARK(150, '#2b3550') + TABLE(75, 180, 120) + A(75, BL, 'down', null, .45)]] },
      extended: { n: 'extended', past: 'extended', en: 'We have an extended warranty.', ko: '우리는 보증 기간을 늘려 두었다.', feel: '<b>원래보다 늘었다.</b> 누가 늘렸는지까지는 모른다.', t: .9,
        p: [[150, '새 냉장고', () => BOXG(40, 60, 70, 178, '#eef3f6') + l('M40 120 h70', 2)], [280, '원래보다 늘림', () => W.extended(BOXW(196, 136, '1년 → 3년'))], [150, '2년 뒤 고장, 무료!', () => A(75, MN, 'smile', 'M18 -92 L36 -126', .8) + t(124, 60, 16, '무료', GN)]] },
      short: { n: 'short', past: 'short', en: 'The line is short.', ko: '줄이 짧다.', feel: '<b>길이 · 시간이 짧다.</b> 키가 작다는 뜻도 있다.', t: .15,
        p: [[150, '맛집 앞', () => QUEUE(2, 238)], [280, '막대가 짧다', () => W.short()], [150, '바로 들어간다', () => BOXG(80, 80, 60, 158, '#c9a171') + A(50, MN, 'smile', null, .6)]] },
      brief: { n: 'brief', past: 'brief', en: 'I\'ll give you a brief update.', ko: '짧게 소식만 전할게요.', feel: '<b>시간 · 말이 짧게 끝난다.</b> 끈 · 머리카락에는 안 쓴다.', t: .1,
        p: [[150, '아침 조회', () => A(75, BR, 'calm', 'M18 -92 L40 -120', .8)], [280, '시간 · 말', () => W.brief(t(196, 140, 15, '"세 가지만."', BL))], [150, '1분 만에 끝', () => CLK(75, 100, 34) + t(75, 170, 14, '1분', GN)]] }
    };
    const MORE = {
      long: [
        { b: '머리', en: 'Her hair is long.', ko: '그녀는 머리가 길다.', feel: '물건도 <b>길다.</b>', p: [[150, '거울 앞', () => HAIR(75, .8, true)], [280, '막대가 길다', () => W.long()], [150, '묶는다', () => HAIR(75, .8, true) + '<circle cx="75" cy="160" r="6" fill="' + RD + '"/>']] },
        { b: '하루', en: 'It was a long day.', ko: '긴 하루였다.', feel: '시간도 <b>길게</b> 느껴진다.', p: [[150, '아침 7시 출발', () => SUN(110, 40, 16) + A(60, BL, 'smile', null, .7)], [280, '시간의 길이', () => W.long(CLK(196, 136, 30, OR))], [150, '밤 11시 귀가', () => DARK(150, '#2b3550') + MOON(110, 40, .5) + A(60, BL, 'down', null, .7)]] }],
      lengthy: [
        { b: '보고서', en: 'He wrote a lengthy report.', ko: '그는 꽤 긴 보고서를 썼다.', feel: '<b>분량이 상당하다.</b>', p: [[150, '두툼한 서류', () => [0, 1, 2, 3, 4].map((i) => DOC(75, 200 - i * 12, 1.3)).join('')], [280, '분량', () => W.lengthy(t(196, 140, 20, '80쪽', BL))], [150, '읽는 사람', () => A(75, '#888', 'calm', null, .8) + t(124, 60, 14, '1쪽…', '#888')]] },
        { b: '설명', en: 'She gave a lengthy explanation.', ko: '그녀는 한참 길게 설명했다.', feel: '말의 <b>시간이 상당하다.</b>', p: [[150, '"그러니까 말이야"', () => A(75, MN, 'smile', 'M18 -92 L40 -120', .8)], [280, '말의 시간', () => W.lengthy(l('M150 140 q10 -10 20 0 t20 0 t20 0 t20 0 t20 0', 3, MN))], [150, '아직도 이야기 중', () => CLK(110, 50, 22) + A(50, MN, 'smile', null, .6) + A(110, BL, 'down', null, .5)]] }],
      extended: [
        { b: '휴가', en: 'We took an extended vacation.', ko: '우리는 휴가를 길게 늘려 다녀왔다.', feel: '원래 계획보다 <b>늘렸다.</b>', p: [[150, '원래 5일', () => BOXW(75, 120, '5일')], [280, '원래보다 늘림', () => W.extended(BOXW(196, 136, '5일 → 14일'))], [150, '바닷가에서 더', () => f('M0 190 q20 -8 40 0 t40 0 t40 0 t40 0 V240 H0 z', '#8fd0ee') + A(75, MN, 'smile', null, .6)]] },
        { b: '친척', en: 'My extended family is huge.', ko: '우리 친척은 정말 많다.', feel: '가족의 범위를 <b>넓게 늘린</b> 말.', p: [[150, '우리 가족 넷', () => [30, 60, 90, 120].map((x, i) => A(x, [BL, MN, OR, GN][i], 'smile', null, .4)).join('')], [280, '범위를 늘림', () => W.extended(t(196, 140, 15, '삼촌 · 이모 · 사촌', BL))], [150, '명절 상이 꽉', () => [150, 185, 220].map((y) => [15, 45, 75, 105, 135].map((x) => g(x, y, 0, .22, HEAD('smile'))).join('')).join('')]] }],
      short: [
        { b: '연필', en: 'My pencil is short.', ko: '내 연필은 짧다.', feel: '물건이 <b>짧다.</b>', p: [[150, '새 연필', () => PENCIL(20, 120, 90)], [280, '막대가 짧다', () => W.short(PENCIL(170, 140, 30))], [150, '몽당연필', () => PENCIL(50, 120, 26) + A(120, OR, 'smile', null, .45)]] },
        { b: '인생', en: 'Life is short.', ko: '인생은 짧다.', feel: '삶의 시간도 <b>짧다.</b>', p: [[150, '할머니의 말', () => A(75, '#888', 'smile', null, .8)], [280, '시간의 길이', () => W.short(t(196, 140, 18, '0 → 100년', BL))], [150, '지금 하자', () => A(75, MN, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .8)]] }],
      brief: [
        { b: '방문', en: 'We made a brief visit.', ko: '우리는 잠깐 들렀다.', feel: '머문 <b>시간이 짧다.</b>', p: [[150, '할머니 댁', () => BOXG(30, 100, 90, 138, '#f2d59a') + A(75, '#888', 'smile', null, .4)], [280, '시간 · 말', () => W.brief(CLK(196, 136, 26, BL))], [150, '"또 올게요!"', () => A(75, MN, 'smile', 'M18 -92 L36 -126', .8)]] },
        { b: '침묵', en: 'There was a brief silence.', ko: '잠깐 정적이 흘렀다.', feel: '조용한 <b>시간이 짧게</b> 지나갔다.', p: [[150, '"사실은…"', () => A(75, BL, 'stern', null, .8)], [280, '시간 · 말', () => W.brief(t(196, 140, 22, '……', '#888'))], [150, '다시 웃음', () => A(40, MN, 'smile', null, .55) + A(110, BL, 'smile', null, .55)]] }]
    };
    const CORE = { long: '<b>거리 · 시간이 길다.</b>', lengthy: '<b>시간 · 분량이 상당하다.</b>', extended: '<b>원래보다 늘었다.</b>', short: '<b>길이 · 시간이 짧다.</b>', brief: '<b>시간 · 말이 짧게 끝난다.</b>' };
