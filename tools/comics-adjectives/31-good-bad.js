    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(wicked 장면 3은 "끝내준다"는 구어 칭찬). 가운데 칸은 늘 같은 "별점 기둥"과 "무엇이?" 칸이다 — 별이 몇 개인가, 그리고 virtuous · wicked처럼 질이 아니라 도덕을 보는 말인가(후광 · 뿔)만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'virtuous', BASIC_B = '노트 장면';
    const FX = { good: [.3, 900, 1100, .12, .4], excellent: [.4, 1000, 1500, .15, .4], superb: [.6, 1000, 2000, .18, .4], virtuous: [.8, 900, 1200, .08, .5], bad: [.4, 400, 300, .12, .4], terrible: [.5, 300, 200, .15, .4], awful: [.6, 260, 180, .15, .4], wicked: [.6, 200, 600, .2, .4] };
    const ORDER = MIX(['good', 'excellent', 'superb', 'virtuous', 'bad', 'terrible', 'awful', 'wicked']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const RATE = { superb: 1, excellent: .95, good: .7, virtuous: .8, bad: .3, terrible: .1, awful: .1, wicked: .15 };
    const MORAL = { virtuous: 1, wicked: 1 };
    const WHAT = { good: '가장 넓은 칭찬', excellent: '아주 높은 평가', superb: '감탄이 나옴', virtuous: '도덕이 바름', bad: '가장 넓은 나쁨', terrible: '정도가 심함', awful: '매우 불쾌함', wicked: '도덕이 악함' };
    const TC = (v) => v > .5 ? GD : '#888';
    const STARS = (id) => { const v = RATE[id], n = Math.max(1, Math.round(v * 5)), good = v > .5;
      let s = MORAL[id] ? g(62, 200, 0, .55, MAN(good ? '#fff' : '#222', good ? 'smile' : 'stern')) + (good ? '<ellipse cx="62" cy="108" rx="18" ry="5" fill="none" stroke="' + GD + '" stroke-width="3"/>' : f('M48 118 l-6 -14 l12 8 z M76 118 l6 -14 l-12 8 z', RD))
        : [0, 1, 2, 3, 4].map((i) => t(62, 196 - i * 30, 26, '★', i < n ? GD : '#ddd')).join('');
      if (id === 'superb') s += t(22, 60, 16, '✦', GD) + t(102, 70, 16, '✦', GD);
      if (id === 'awful') s += l('M96 160 q-6 -10 0 -20 t0 -20', 3, GN) + l('M28 160 q-6 -10 0 -20 t0 -20', 3, GN);
      return s + t(62, 226, 12, MORAL[id] ? (good ? '도덕 ↑' : '도덕 ↓') : '별 ' + n + '개', MORAL[id] ? (good ? GD : RD) : TC(v)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + STARS(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, 17, WHAT[id], BL)) + sfx(196, 220, 24, z, '', RATE[id] > .5 ? OR : RD);
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { good: P('good', '좋아'), excellent: P('excellent', '훌륭!'), superb: P('superb', '캬아'), virtuous: P('virtuous', '반듯'), bad: P('bad', '별로'), terrible: P('terrible', '최악'), awful: P('awful', '으웩'), wicked: P('wicked', '흐흐흐') };
    // 작은 그림들
    const PLATE = (x, y, c) => '<ellipse cx="' + x + '" cy="' + y + '" rx="44" ry="12" fill="#fff" stroke="#222" stroke-width="3"/>' + f('M' + (x - 24) + ' ' + (y - 6) + ' q24 -24 48 0 z', c || OR);
    const MTN = () => f('M0 238 L50 90 L90 160 L120 100 L150 238 z', '#9ab8a8') + f('M40 120 L50 90 L60 120 z', '#fff');
    const CASTLEW = (x) => f('M' + (x - 30) + ' 238 v-90 l30 -40 l30 40 v90 z', '#5a4a6a') + '<circle cx="' + x + '" cy="160" r="8" fill="' + GD + '"/>';
    const BOARD = (x, y) => f('M' + (x - 34) + ' ' + y + ' h68 v6 h-68 z', OR) + '<circle cx="' + (x - 24) + '" cy="' + (y + 10) + '" r="5" fill="#333"/><circle cx="' + (x + 24) + '" cy="' + (y + 10) + '" r="5" fill="#333"/>';
    const PILL = (x, y) => f('M' + (x - 14) + ' ' + (y - 6) + ' h28 a6 6 0 0 1 0 12 h-28 a6 6 0 0 1 0 -12 z', '#f4c6d0');
    const TISSUE = (x, y) => f('M' + (x - 24) + ' ' + (y - 20) + ' h48 v20 h-48 z', '#cfe6f5') + f('M' + (x - 6) + ' ' + (y - 30) + ' q6 -8 12 0 v10 h-12 z', '#fff');
    const C = {
      good: { n: 'good', past: 'good', en: 'The food is good.', ko: '음식이 맛있다.', feel: '<b>좋다.</b> 가장 넓은 말. 부사는 well.', t: .3,
        p: [[150, '저녁 한 상', () => PLATE(75, 200, OR)], [280, '별 네 개쯤', () => W.good()], [150, '한 숟갈 더', () => A(75, MN, 'smile', 'M18 -92 L22 -126', .8)]] },
      excellent: { n: 'excellent', past: 'excellent', en: 'That was an excellent presentation.', ko: '아주 훌륭한 발표였다.', feel: '<b>아주 높은 평가.</b> 폭넓은 칭찬.', t: .4,
        p: [[150, '발표 끝', () => BOXG(20, 40, 110, 70, '#fff') + l('M30 90 l20 -20 l20 10 l30 -30', 3, GN) + A(75, BL, 'smile', null, .45)], [280, '별 다섯 개', () => W.excellent()], [150, '박수 갈채', () => [30, 75, 120].map((x) => A(x, '#888', 'smile', 'M-20 -90 L0 -110 M20 -90 L0 -110', .45)).join('')]] },
      superb: { n: 'superb', past: 'superb', en: 'The meal was superb.', ko: '식사가 감탄이 나올 만큼 훌륭했다.', feel: '<b>감탄을 실은 칭찬.</b> 음식 · 공연 · 경치에.', t: .6,
        p: [[150, '셰프의 요리', () => PLATE(75, 200, RD) + t(75, 150, 18, '✦', GD)], [280, '감탄이 나옴', () => W.superb()], [150, '"캬아!"', () => A(75, MN, 'phew', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .8)]] },
      virtuous: { n: 'virtuous', past: 'virtuous', en: 'She made a virtuous choice.', ko: '그녀는 도덕적으로 바른 선택을 했다.', feel: '질이 아니라 <b>도덕이 바르다.</b> 격식 있는 말.', t: .8,
        p: [[150, '주운 돈', () => COIN(75, 200, 14) + A(120, MN, 'calm', null, .4)], [280, '도덕이 바름', () => W.virtuous()], [150, '주인에게 돌려준다', () => A(45, MN, 'smile', 'M18 -92 L46 -80', .6) + A(110, '#888', 'smile', null, .55)]] },
      bad: { n: 'bad', past: 'bad', en: 'The food is bad.', ko: '음식이 별로다.', feel: '<b>나쁘다.</b> 가장 넓은 말. 상했을 때도.', t: .4,
        p: [[150, '식은 음식', () => PLATE(75, 200, '#9a9a8a')], [280, '별 한두 개', () => W.bad()], [150, '숟가락을 놓는다', () => A(75, BL, 'sad', null, .8)]] },
      terrible: { n: 'terrible', past: 'terrible', en: 'The weather was terrible.', ko: '날씨가 최악이었다.', feel: '<b>정도가 심하게 나쁘다.</b> 일상에서 두루.', t: .5,
        p: [[150, '소풍날', () => DARK(150, '#6a6a7a') + l('M20 30 l-6 20 M70 40 l-6 20 M120 30 l-6 20', 3, '#fff')], [280, '별 하나', () => W.terrible()], [150, '우산이 뒤집혔다', () => A(75, MN, 'shock', 'M18 -92 L36 -126', .8) + l('M100 70 q20 -20 40 0', 4, RD)]] },
      awful: { n: 'awful', past: 'awful', en: 'That smells awful.', ko: '저거 냄새가 지독하다.', feel: '<b>매우 불쾌하다.</b> 냄새 · 날씨 · 기분에.', t: .6,
        p: [[150, '냉장고 구석', () => BOXG(30, 40, 90, 198, '#eef3f6') + l('M80 120 q-6 -10 0 -20 t0 -20', 3, GN)], [280, '매우 불쾌함', () => W.awful()], [150, '코를 막는다', () => A(75, BL, 'sad', 'M18 -92 L4 -118', .8)]] },
      wicked: { n: 'wicked', past: 'wicked', en: 'The villain had a wicked plan.', ko: '악당은 사악한 계획을 세웠다.', feel: '<b>도덕적으로 악하다.</b> 말투에 따라 "끝내주는" 칭찬도.', t: .6,
        p: [[150, '어두운 성', () => DARK(150, '#2b1d36') + CASTLEW(75)], [280, '도덕이 악함', () => W.wicked()], [150, '음흉한 웃음', () => DARK(150, '#2b1d36') + g(75, 130, 0, 1.4, HEAD('stern')) + t(124, 60, 16, '흐흐', RD)]] }
    };
    const MORE = {
      good: [
        { b: '친구', en: 'She is a good friend.', ko: '그녀는 좋은 친구다.', feel: '사람도 <b>좋다.</b>', p: [[150, '비 오는 날', () => l('M20 30 l-6 20 M70 40 l-6 20 M120 30 l-6 20', 3, WT) + A(75, BL, 'sad', null, .6)], [280, '좋다', () => W.good()], [150, '우산을 씌워 준다', () => l('M40 100 q35 -30 70 0 z', RD) + A(55, MN, 'smile', 'M18 -92 L20 -130', .5) + A(95, BL, 'smile', null, .5)]] },
        { b: '소식', en: 'I have good news.', ko: '좋은 소식이 있어.', feel: '소식도 <b>좋다.</b>', p: [[150, '전화가 온다', () => g(75, 130, 0, 2, PH)], [280, '좋다', () => W.good(ENV(196, 140, .8))], [150, '"합격이래!"', () => A(75, OR, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .6)]] }],
      excellent: [
        { b: '점수', en: 'You got an excellent score.', ko: '아주 훌륭한 점수를 받았구나.', feel: '<b>아주 높은</b> 평가.', p: [[150, '성적표', () => DOC(75, 130, 1.6) + t(96, 100, 18, 'A+', RD)], [280, '별 다섯 개', () => W.excellent()], [150, '하이파이브', () => A(45, MN, 'smile', 'M18 -92 L40 -126', .6) + A(108, OR, 'smile', 'M-18 -92 L-40 -126', .5)]] },
        { b: '생각', en: 'That\'s an excellent idea.', ko: '아주 좋은 생각이다.', feel: '생각에도 <b>높은 점수.</b>', p: [[150, '"이렇게 하면 어때?"', () => A(75, BL, 'smile', 'M18 -92 L36 -126', .8) + BULB(120, 60, .4)], [280, '별 다섯 개', () => W.excellent()], [150, '"바로 해 보자"', () => A(40, MN, 'smile', null, .5) + A(110, BL, 'smile', null, .5)]] }],
      superb: [
        { b: '경치', en: 'The view from the top was superb.', ko: '정상에서 본 경치가 감탄스러웠다.', feel: '경치에 <b>감탄이</b> 나온다.', p: [[150, '헉헉 오르막', () => l('M0 238 L150 120', 4, '#888') + A(75, BL, 'phew', null, .5)], [280, '감탄이 나옴', () => W.superb(f('M150 180 L180 120 L200 150 L220 110 L250 180 z', '#9ab8a8'))], [150, '"와아…"', () => MTN() + A(75, BL, 'shock', null, .35)]] },
        { b: '연기', en: 'Her acting was superb.', ko: '그녀의 연기는 감탄이 나왔다.', feel: '연기에 <b>감탄이</b> 나온다.', p: [[150, '무대 위', () => DARK(150, '#2b1d26') + A(75, MN, 'sad', 'M18 -92 L30 -120', .7)], [280, '감탄이 나옴', () => W.superb()], [150, '기립 박수', () => [30, 75, 120].map((x) => A(x, '#888', 'smile', 'M-20 -90 L-30 -130 M20 -90 L30 -130', .45)).join('')]] }],
      virtuous: [
        { b: '삶', en: 'He lived a virtuous life.', ko: '그는 바르게 살았다.', feel: '삶 전체가 <b>도덕적으로 바르다.</b>', p: [[150, '평생 봉사', () => A(75, '#888', 'smile', 'M-20 -90 L0 -60 M20 -90 L0 -60', .8)], [280, '도덕이 바름', () => W.virtuous()], [150, '고마운 사람들', () => [30, 75, 120].map((x, i) => A(x, [BL, MN, OR][i], 'smile', null, .45)).join('')]] },
        { b: '옛이야기', en: 'In the story, the virtuous girl wins.', ko: '이야기에서 착한 소녀가 이긴다.', feel: '이야기 속 <b>바른 사람</b>이 이긴다.', p: [[150, '옛날 옛적에', () => BOOK(75, 130, .8)], [280, '도덕이 바름', () => W.virtuous()], [150, '해피 엔딩', () => A(75, MN, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .7) + t(124, 50, 18, '♥', RD)]] }],
      bad: [
        { b: '날씨', en: 'The weather is bad today.', ko: '오늘 날씨가 나쁘다.', feel: '날씨가 <b>나쁘다.</b>', p: [[150, '흐린 하늘', () => DARK(150, '#9aa4b0')], [280, '별 한두 개', () => W.bad()], [150, '집에 있자', () => BOXG(30, 100, 90, 138, '#f2e8d4') + A(75, BL, 'calm', null, .5)]] },
        { b: '버릇', en: 'Biting nails is a bad habit.', ko: '손톱 물어뜯기는 나쁜 버릇이다.', feel: '버릇도 <b>나쁘다.</b>', p: [[150, '시험 전', () => A(75, OR, 'stern', 'M18 -92 L4 -116', .6)], [280, '나쁘다', () => W.bad()], [150, '"그만!"', () => A(45, '#888', 'stern', 'M18 -92 L46 -100', .6) + A(110, OR, 'phew', null, .5)]] }],
      terrible: [
        { b: '감기', en: 'I have a terrible cold.', ko: '감기가 지독하게 걸렸다.', feel: '아픔이 <b>심하다.</b>', p: [[150, '콧물 훌쩍', () => TISSUE(75, 200)], [280, '별 하나', () => W.terrible()], [150, '이불 속', () => f('M10 200 q65 -40 130 0 v38 h-130 z', BL) + g(75, 176, 0, .5, HEAD('sad'))]] },
        { b: '실수', en: 'I made a terrible mistake.', ko: '끔찍한 실수를 했다.', feel: '실수가 <b>심하게</b> 크다.', p: [[150, '"전체 답장"', () => ENV(75, 120, 1.4)], [280, '정도가 심함', () => W.terrible()], [150, '머리를 감싼다', () => A(75, BL, 'sad', 'M-20 -90 L-28 -130 M20 -90 L28 -130', .8)]] }],
      awful: [
        { b: '약', en: 'This medicine tastes awful.', ko: '이 약은 맛이 지독하다.', feel: '맛이 <b>매우 불쾌하다.</b>', p: [[150, '감기약', () => PILL(75, 140) + f('M60 180 h30 l-4 40 h-22 z', '#c96a4a')], [280, '매우 불쾌함', () => W.awful()], [150, '으웩', () => A(75, OR, 'sad', null, .6) + t(110, 60, 16, '으웩', GN)]] },
        { b: '기분', en: 'I feel awful about what I said.', ko: '내가 한 말 때문에 기분이 너무 안 좋다.', feel: '마음이 <b>매우 불쾌하다.</b>', p: [[150, '말다툼', () => A(40, MN, 'stern', 'M18 -92 L40 -120', .55) + A(110, BL, 'sad', null, .55)], [280, '매우 불쾌함', () => W.awful(t(196, 146, 30, '😣'))], [150, '"미안해"', () => A(75, MN, 'sad', null, .8)]] }],
      wicked: [
        { b: '마녀', en: 'The wicked witch laughed.', ko: '사악한 마녀가 웃었다.', feel: '<b>도덕적으로 악하다.</b>', p: [[150, '숲속 오두막', () => DARK(150, '#2b1d36') + f('M50 238 v-50 l25 -20 l25 20 v50 z', '#5a4a3a')], [280, '도덕이 악함', () => W.wicked()], [150, '"히히히"', () => DARK(150, '#2b1d36') + f('M50 100 l25 -60 l25 60 z', '#222') + g(75, 130, 0, 1, HEAD('stern'))]] },
        { b: '구어 칭찬', en: 'That skateboard trick was wicked!', ko: '그 스케이트보드 기술 끝내줬어!', feel: '말투에 따라 <b>"끝내준다"</b>는 칭찬.', p: [[150, '공중 회전', () => g(75, 100, -30, .5, MAN(OR, 'smile', 'M-20 -90 L-40 -110 M20 -90 L40 -110')) + BOARD(75, 140)], [280, '"끝내준다"', () => W.wicked(t(196, 146, 28, '🤘'))], [150, '"한 번 더!"', () => A(40, BL, 'shock', 'M-20 -90 L-30 -130 M20 -90 L30 -130', .5) + A(110, MN, 'smile', 'M-20 -90 L-30 -130 M20 -90 L30 -130', .5)]] }]
    };
    const CORE = { good: '<b>좋다 (가장 넓은 말).</b>', excellent: '<b>아주 높은 평가.</b>', superb: '<b>감탄이 나온다.</b>', virtuous: '<b>도덕적으로 바르다.</b>', bad: '<b>나쁘다 (가장 넓은 말).</b>', terrible: '<b>정도가 심하게 나쁘다.</b>', awful: '<b>매우 불쾌하다.</b>', wicked: '<b>도덕적으로 악하다.</b>' };
