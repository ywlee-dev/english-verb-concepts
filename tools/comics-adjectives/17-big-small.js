    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다. 가운데 칸은 늘 같은 "사람 옆에 세운 물건"과 "무엇이?" 칸이다 — 물건이 사람보다 얼마나 큰가 · 작은가, 그리고 enormous(규모) · gigantic(눈앞 모습) · miniature(작게 만든 것)처럼 무엇을 보는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'enormous', BASIC_B = '노트 장면';
    const FX = { big: [.4, 300, 300, .2, .4], huge: [.5, 200, 200, .25, .4], enormous: [.7, 160, 140, .3, .4], gigantic: [.8, 120, 100, .35, .4], colossal: [1, 80, 60, .4, .4], small: [.2, 1200, 1200, .1, .4], tiny: [.12, 2000, 2200, .1, .4], miniature: [.3, 1600, 1600, .1, .4], microscopic: [.06, 3200, 3400, .06, .4] };
    const ORDER = MIX(['big', 'huge', 'enormous', 'gigantic', 'colossal', 'small', 'tiny', 'miniature', 'microscopic']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const SZ = { microscopic: .01, tiny: .08, miniature: .16, small: .26, big: .55, huge: .75, enormous: .88, gigantic: .9, colossal: 1 };
    const WHAT = { enormous: '규모 · 수 · 돈', gigantic: '눈앞의 모습', colossal: '규모를 세게', tiny: '편하게 "쪼끄매"', miniature: '작게 만든 모형', microscopic: '눈으로 안 보임', huge: '편하게 "엄청 커"' };
    const TC = (v) => v > .4 ? OR : WT;
    const CMP = (id) => { const v = SZ[id], h = 8 + v * 150, w = Math.min(h, 74);
      let s = g(18, 200, 0, .32, MAN('#888', 'calm')) + l('M4 200 H116', 2, '#999');
      if (id === 'microscopic') s += '<circle cx="76" cy="196" r="1.5" fill="#222"/>' + '<circle cx="80" cy="150" r="26" fill="#fff" stroke="#555" stroke-width="4"/>' + l('M98 168 l14 16', 6, '#555') + '<circle cx="80" cy="150" r="5" fill="' + GN + '"/>' + l('M76 194 L74 176', 1.5, '#aaa');
      else s += f('M' + (80 - w / 2) + ' 200 v-' + h + ' h' + w + ' v' + h + ' z', id === 'miniature' ? '#cfe6f5' : v > .4 ? '#f2b08a' : '#9fd3f0') + (id === 'miniature' ? l('M' + (80 - w / 2) + ' ' + (200 - h / 2) + ' h' + w, 2, '#555') : '');
      return s + t(62, 226, 13, h / 52 >= .5 ? '사람 키의 ' + (h / 52).toFixed(1) + '배' : v > .05 ? '사람 발목만' : '점 하나', TC(v)); };
    const TP = (id, b, z) => { const c = TC(SZ[id]);
      return DARK(280, '#f6f4ee') + CMP(id) + BOXG(124, 56, 144, 128, WHAT[id] ? '#fff' : '#f2f2f2') + t(196, 76, 13, '무엇이?', '#888') +
        (b || (WHAT[id] ? t(196, 136, WHAT[id].length > 7 ? 15 : 18, WHAT[id], BL) : t(196, 128, 15, '가장 흔한', '#888') + t(196, 150, 15, '말', '#888'))) + sfx(196, 220, 24, z, '', c); };
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { big: P('big', '크다'), huge: P('huge', '우와'), enormous: P('enormous', '어마어마'), gigantic: P('gigantic', '우뚝'), colossal: P('colossal', '압도'), small: P('small', '작다'), tiny: P('tiny', '쪼끄만'), miniature: P('miniature', '미니'), microscopic: P('microscopic', '안 보여') };
    // 작은 그림들
    const DOG = (x, y, k) => g(x, y, 0, k || 1, '<ellipse cy="-20" rx="30" ry="16" fill="#c9a171" stroke="#222" stroke-width="3"/><circle cx="28" cy="-36" r="14" fill="#c9a171" stroke="#222" stroke-width="3"/>' + l('M-18 -6 v12 M14 -6 v12', 5));
    const HOUSE = (x, y, k) => g(x, y, 0, k || 1, f('M-50 0 v-60 l50 -40 l50 40 v60 z', '#e9e0c8') + BOXG(-10, -36, 20, 36, '#a3743f'));
    const SCREEN = (x, y, k) => g(x, y, 0, k || 1, f('M-60 -80 h120 v70 h-120 z', '#222') + f('M-54 -74 h108 v58 h-108 z', '#8fd0ee') + l('M0 -10 v10', 4));
    const KIT = (x, y, k) => g(x, y, 0, k || 1, '<ellipse cy="-8" rx="12" ry="8" fill="#888" stroke="#222" stroke-width="2"/><circle cx="10" cy="-16" r="6" fill="#888" stroke="#222" stroke-width="2"/>');
    const TRAIN = (x, y, k) => g(x, y, 0, k || 1, f('M-40 0 v-24 h50 v-12 h20 v36 z', RD) + '<circle cx="-26" cy="2" r="6" fill="#333"/><circle cx="0" cy="2" r="6" fill="#333"/><circle cx="22" cy="2" r="6" fill="#333"/>' + l('M-50 8 h110', 2, '#888'));
    const BUG = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="3" fill="' + GN + '"/>' + l('M' + (x - 4) + ' ' + y + ' h-3 M' + (x + 4) + ' ' + y + ' h3', 1, GN);
    const SCOPE = (x, y, k) => g(x, y, 0, k || 1, f('M-20 0 h40 v-8 h-40 z', '#555') + l('M0 -8 v-30 l10 -30', 8, '#555'));
    const SHOE = (x, y, k) => g(x, y, 0, k || 1, f('M-34 0 v-20 q0 -10 10 -10 h18 q10 14 40 18 q6 4 0 12 z', BL));
    const BURGER = (x, y, k) => g(x, y, 0, k || 1, f('M-34 0 h68 q0 10 -10 10 h-48 q-10 0 -10 -10 z', '#e9b86a') + f('M-36 -6 h72 v6 h-72 z', '#5a3a1a') + f('M-34 -16 h68 v10 h-68 z', GN) + f('M-34 -16 q34 -36 68 0 z', '#e9b86a'));
    const WAVE = (x, y, k) => g(x, y, 0, k || 1, f('M-60 0 q0 -80 60 -100 q-20 30 10 50 q30 10 50 50 z', '#4a7fb5'));
    const ANT = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="2.5"/><circle cx="' + (x + 5) + '" cy="' + y + '" r="2"/>';
    const STATUE = (x, k) => g(x, 238, 0, k, BOXG(-40, -30, 80, 30, '#bbb') + f('M-22 -30 v-90 h44 v90 z', '#ccc') + '<circle cy="-140" r="22" fill="#ccc" stroke="#222" stroke-width="3"/>');
    const C = {
      big: { n: 'big', past: 'big', en: 'That dog is big.', ko: '저 개는 크다.', feel: '<b>크다.</b> 가장 흔한 말. 중요하다는 뜻도 있다.', t: .4,
        p: [[150, '공원에서', () => DOG(75, 230, 1.8)], [280, '사람의 절반쯤', () => W.big()], [150, '"와, 크다"', () => A(40, OR, 'shock', null, .5) + DOG(105, 236, 1.2)]] },
      huge: { n: 'huge', past: 'huge', en: 'That house is huge.', ko: '저 집 엄청 크다.', feel: '<b>편하게 "엄청 커."</b>', t: .5,
        p: [[150, '골목 끝', () => HOUSE(75, 238, 1.3)], [280, '편하게 엄청 커', () => W.huge()], [150, '고개를 젖힌다', () => A(40, MN, 'shock', null, .45) + HOUSE(110, 238, 1.1)]] },
      enormous: { n: 'enormous', past: 'enormous', en: 'The crowd was enormous.', ko: '사람들이 어마어마하게 많았다.', feel: '<b>규모가 매우 크다.</b> 사람 수 · 비용 · 규모.', t: .7,
        p: [[150, '광장 축제', () => [150, 180, 210].map((y) => [10, 35, 60, 85, 110, 135].map((x) => g(x, y, 0, .22, HEAD('smile'))).join('')).join('')], [280, '규모 · 수', () => W.enormous(t(196, 140, 22, '10만 명', OR))], [150, '끝이 안 보인다', () => [130, 160, 190, 220].map((y) => [10, 35, 60, 85, 110, 135].map((x) => g(x, y, 0, .2, HEAD('calm'))).join('')).join('')]] },
      gigantic: { n: 'gigantic', past: 'gigantic', en: 'The screen is gigantic.', ko: '화면이 거대하다.', feel: '<b>눈앞에 거대한 모습.</b>', t: .8,
        p: [[150, '새 영화관', () => SCREEN(75, 200, 1.1)], [280, '눈앞의 모습', () => W.gigantic(SCREEN(196, 176, .8))], [150, '목이 아프다', () => A(75, BL, 'shock', 'M-20 -90 L-30 -60', .8)]] },
      colossal: { n: 'colossal', past: 'colossal', en: 'The project suffered a colossal loss.', ko: '그 사업은 엄청난 손실을 봤다.', feel: '<b>규모를 세게 강조한다.</b> 손실 · 실수에.', t: 1,
        p: [[150, '보고서', () => DOC(75, 130, 1.6)], [280, '규모를 세게', () => W.colossal(l('M150 110 l30 30 l20 -10 l40 50', 4, RD) + t(236, 176, 16, '↓↓', RD))], [150, '회의실이 얼어붙음', () => A(40, BL, 'shock', null, .55) + A(110, BR, 'shock', null, .55)]] },
      small: { n: 'small', past: 'small', en: 'That dog is small.', ko: '저 개는 작다.', feel: '<b>작다.</b> 가장 흔한 말.', t: .2,
        p: [[150, '공원에서', () => DOG(75, 230, .9)], [280, '사람의 무릎쯤', () => W.small()], [150, '쏙 안긴다', () => A(75, MN, 'smile', 'M-20 -90 L0 -60 M20 -90 L0 -60', .8) + DOG(75, 186, .5)]] },
      tiny: { n: 'tiny', past: 'tiny', en: 'The kitten is tiny.', ko: '아기 고양이가 쪼끄맣다.', feel: '<b>편하게 "아주 작아."</b> 모형이라는 뜻은 아니다.', t: .12,
        p: [[150, '상자 속', () => PKG(75, 200, 1.4) + KIT(75, 186, 1)], [280, '편하게 쪼끄매', () => W.tiny(KIT(196, 150, 1.4))], [150, '손바닥 위', () => g(75, 150, 0, 1.4, HND(0, 0, .5, SK)) + KIT(75, 140, 1)]] },
      miniature: { n: 'miniature', past: 'miniature', en: 'This is a miniature train.', ko: '이건 축소 모형 기차다.', feel: '<b>작게 만든 모형.</b> 세부가 다 정확할 필요는 없다.', t: .3,
        p: [[150, '진짜 기차역', () => TRAIN(75, 200, 1.6)], [280, '작게 만든 모형', () => W.miniature(TRAIN(196, 160, .6))], [150, '책상 위 기차', () => f('M10 180 h130 v8 h-130 z', '#a3743f') + TRAIN(75, 172, .6) + A(120, OR, 'smile', null, .4)]] },
      microscopic: { n: 'microscopic', past: 'microscopic', en: 'These organisms are microscopic.', ko: '이 생물들은 현미경으로나 보일 만큼 작다.', feel: '<b>눈으로 보기 어렵다.</b> 작은 집을 과장할 때도.', t: .06,
        p: [[150, '연못 물 한 방울', () => f('M75 100 q-20 30 0 40 q20 -10 0 -40', '#8fd0ee', 3)], [280, '눈으로 안 보임', () => W.microscopic()], [150, '현미경으로 보니', () => SCOPE(50, 230, 1.4) + '<circle cx="110" cy="80" r="30" fill="#fff" stroke="#222" stroke-width="3"/>' + BUG(100, 76) + BUG(118, 90)]] }
    };
    const MORE = {
      big: [
        { b: '신발', en: 'These shoes are too big.', ko: '이 신발은 너무 크다.', feel: '<b>크다.</b>', p: [[150, '아빠 신발', () => SHOE(75, 220, 1.6)], [280, '크다', () => W.big()], [150, '헐렁헐렁', () => A(75, OR, 'phew', null, .6) + SHOE(60, 240, .8) + SHOE(96, 240, .8)]] },
        { b: '결정', en: 'This is a big decision.', ko: '이건 중대한 결정이다.', feel: '일도 <b>크다</b> — 중요하다.', p: [[150, '두 갈래 길', () => l('M75 238 V150 L30 60 M75 150 L120 60', 6, '#888')], [280, '일의 크기', () => W.big(t(196, 144, 30, '⚖', BL))], [150, '밤새 고민', () => DARK(150, '#2b3550') + A(75, BL, 'stern', null, .8)]] }],
      huge: [
        { b: '버거', en: 'That burger is huge!', ko: '그 버거 엄청 크다!', feel: '<b>편하게 엄청 커.</b>', p: [[150, '주문한 버거', () => BURGER(75, 200, 1.8)], [280, '편하게 엄청 커', () => W.huge(BURGER(196, 160, 1))], [150, '입이 안 들어간다', () => A(75, MN, 'shock', null, .8) + BURGER(110, 120, .6)]] },
        { b: '팬', en: 'I\'m a huge fan of hers.', ko: '나는 그녀의 엄청난 팬이다.', feel: '좋아하는 마음이 <b>엄청 크다.</b>', p: [[150, '포스터 가득', () => [20, 60, 100].map((x) => BOXG(x, 40, 34, 46, '#f4c6d0')).join('') + A(75, MN, 'smile', null, .5)], [280, '마음의 크기', () => W.huge(t(196, 150, 40, '♥', RD))], [150, '사인 받았다', () => A(75, MN, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .8) + DOC(120, 70, .6)]] }],
      enormous: [
        { b: '요금', en: 'The bill was enormous.', ko: '요금이 어마어마하게 나왔다.', feel: '돈의 <b>규모가</b> 매우 크다.', p: [[150, '해외 로밍', () => g(75, 130, 0, 2, PH)], [280, '규모 · 돈', () => W.enormous(t(196, 140, 18, '₩ 990,000', RD))], [150, '털썩', () => A(75, BL, 'shock', null, .8)]] },
        { b: '일', en: 'We did an enormous amount of work.', ko: '우리는 어마어마한 양의 일을 했다.', feel: '일의 <b>규모가</b> 크다.', p: [[150, '서류 산', () => [0, 1, 2, 3, 4, 5].map((i) => DOC(75, 220 - i * 22, 1)).join('')], [280, '규모 · 양', () => W.enormous([0, 1, 2, 3].map((i) => DOC(196, 176 - i * 16, .8)).join(''))], [150, '끝! 기지개', () => A(75, MN, 'phew', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .8)]] }],
      gigantic: [
        { b: '파도', en: 'A gigantic wave hit the boat.', ko: '거대한 파도가 배를 덮쳤다.', feel: '<b>눈앞에 거대하게</b> 솟는다.', p: [[150, '작은 배', () => f('M0 210 H150 V240 H0 z', '#8fd0ee') + f('M50 210 l10 -14 h40 l10 14 z', '#c9a171')], [280, '눈앞의 모습', () => W.gigantic(WAVE(196, 176, .6))], [150, '우와아', () => WAVE(75, 238, 1.2) + f('M90 230 l6 -8 h20 l6 8 z', '#c9a171')]] },
        { b: '하품', en: 'He let out a gigantic yawn.', ko: '그는 엄청나게 큰 하품을 했다.', feel: '하품도 <b>거대한 모습</b>으로.', p: [[150, '수업 6교시', () => CLK(110, 50, 22) + A(60, BR, 'down', null, .7)], [280, '눈앞의 모습', () => W.gigantic(g(196, 146, 0, .8, HEAD('shock')))], [150, '하아아아암', () => g(75, 130, 0, 1.6, HEAD('shock')) + t(75, 220, 16, '하아암', '#888')]] }],
      colossal: [
        { b: '동상', en: 'A colossal statue stands at the gate.', ko: '문 앞에 압도적으로 큰 동상이 서 있다.', feel: '크기를 <b>세게</b> 강조한다.', p: [[150, '성문 앞', () => STATUE(75, 1.2)], [280, '규모를 세게', () => W.colossal(g(0, -52, 0, 1, STATUE(196, .55)))], [150, '개미만 한 사람들', () => STATUE(110, 1.2) + A(30, BL, 'shock', null, .3)]] },
        { b: '실수', en: 'That was a colossal mistake.', ko: '그건 엄청난 실수였다.', feel: '실수의 <b>규모를 세게</b> 말한다.', p: [[150, '"전체 메일 보내기"', () => ENV(75, 120, 1.4)], [280, '규모를 세게', () => W.colossal(t(196, 144, 30, '😱'))], [150, '머리를 감싼다', () => A(75, BL, 'sad', 'M-20 -90 L-28 -130 M20 -90 L28 -130', .8)]] }],
      small: [
        { b: '방', en: 'My room is small.', ko: '내 방은 작다.', feel: '<b>작다.</b>', p: [[150, '내 방', () => BOXG(30, 80, 90, 158, '#f2e8d4') + f('M40 190 h50 v20 h-50 z', '#cfe6f5')], [280, '작다', () => W.small()], [150, '그래도 아늑', () => A(75, MN, 'smile', null, .7)]] },
        { b: '문제', en: 'It\'s a small problem.', ko: '작은 문제야.', feel: '일도 <b>작다</b> — 큰일 아니다.', p: [[150, '"큰일이야!"', () => A(75, OR, 'shock', null, .6)], [280, '일의 크기', () => W.small(t(196, 146, 18, '단추 하나', BL))], [150, '휙 꿰맨다', () => A(75, '#888', 'smile', 'M18 -92 L40 -60', .8)]] }],
      tiny: [
        { b: '개미', en: 'Ants are tiny.', ko: '개미는 아주 작다.', feel: '<b>쪼끄맣다.</b>', p: [[150, '보도블록', () => f('M0 200 H150 V240 H0 z', '#ccc') + ANT(60, 196) + ANT(80, 198) + ANT(100, 196)], [280, '편하게 쪼끄매', () => W.tiny(ANT(190, 150) + ANT(204, 150))], [150, '쭈그려 앉아 본다', () => g(75, 238, 0, .7, MAN(OR, 'smile', null, 'M-12 -42 L-24 -20 L-14 0 M12 -42 L24 -20 L14 0')) + ANT(120, 234)]] },
        { b: '가능성', en: 'There\'s a tiny chance of rain.', ko: '비 올 가능성이 아주 조금 있다.', feel: '가능성도 <b>쪼끄맣다.</b>', p: [[150, '일기예보', () => BOXG(20, 40, 110, 70, '#cfe6f5') + SUN(50, 76, 12) + t(100, 84, 14, '5%', BL)], [280, '가능성의 크기', () => W.tiny(t(196, 146, 20, '☂ 5%', BL))], [150, '우산은 두고', () => A(75, MN, 'smile', null, .8)]] }],
      miniature: [
        { b: '인형 가구', en: 'She collects miniature furniture.', ko: '그녀는 축소 모형 가구를 모은다.', feel: '<b>작게 만든</b> 모형.', p: [[150, '진열장', () => BOXG(20, 40, 110, 170, '#f2e8d4') + f('M40 120 h20 v14 h-20 z M80 116 h30 v18 h-30 z', '#a3743f')], [280, '작게 만든 모형', () => W.miniature(f('M180 150 h30 v6 h-30 z M184 156 v14 M206 156 v14', '#a3743f'))], [150, '핀셋으로 콕', () => A(75, MN, 'stern', 'M18 -92 L40 -80', .8) + l('M100 160 l20 -20', 2, '#888')]] },
        { b: '강아지', en: 'We have a miniature poodle.', ko: '우리 집엔 미니어처 푸들이 있다.', feel: '품종도 <b>작게</b> 만들어졌다.', p: [[150, '보통 푸들 옆', () => DOG(50, 230, 1.2) + DOG(115, 230, .6)], [280, '작은 품종', () => W.miniature(DOG(196, 170, .7))], [150, '가방 속에 쏙', () => BOXG(50, 160, 50, 60, '#f4c6d0') + g(75, 166, 0, .4, HEAD('smile'))]] }],
      microscopic: [
        { b: '진드기', en: 'Dust mites are microscopic.', ko: '먼지 진드기는 눈에 안 보일 만큼 작다.', feel: '<b>눈으로 안 보인다.</b>', p: [[150, '이불', () => f('M10 180 q65 -40 130 0 v30 h-130 z', '#cfe6f5')], [280, '눈으로 안 보임', () => W.microscopic()], [150, '이불을 턴다', () => A(75, MN, 'stern', 'M-20 -90 L-36 -120 M20 -90 L36 -120', .8) + t(75, 60, 16, '탁탁', '#888')]] },
        { b: '과장', en: 'My new apartment is microscopic!', ko: '새 집이 코딱지만 해!', feel: '아주 작은 것을 <b>크게 과장</b>한다.', p: [[150, '이사 첫날', () => PKG(75, 200, 1.2) + PKG(75, 150, 1)], [280, '말로 과장', () => W.microscopic(t(196, 146, 18, '"콩알만 해!"', OR))], [150, '팔도 못 편다', () => BOXG(40, 100, 70, 138, '#f2e8d4') + A(75, MN, 'phew', null, .6)]] }]
    };
    const CORE = { big: '<b>크다 (가장 흔한 말).</b>', huge: '<b>편하게 "엄청 커."</b>', enormous: '<b>규모 · 수 · 돈이 매우 크다.</b>', gigantic: '<b>눈앞에 거대한 모습.</b>', colossal: '<b>규모를 세게 강조.</b>', small: '<b>작다 (가장 흔한 말).</b>', tiny: '<b>편하게 "쪼끄매."</b>', miniature: '<b>작게 만든 모형.</b>', microscopic: '<b>눈으로 보기 어렵게 작다.</b>' };
