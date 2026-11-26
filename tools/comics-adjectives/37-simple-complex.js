    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(plain 장면 3은 plain English — 꾸밈없는 쉬운 말). 가운데 칸은 늘 같은 "점과 선으로 그린 구조"와 "무엇이?" 칸이다 — 점과 선이 몇 개고 얼마나 얽혔나, 그리고 plain(장식) · minimalist(일부러 덜어 냄) · complicated(하기 어려움) · intricate(정교함)처럼 무엇을 보는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'minimalist', BASIC_B = '노트 장면';
    const FX = { simple: [.2, 900, 900, .1, .4], plain: [.3, 700, 700, .06, .4], basic: [.2, 600, 600, .1, .4], minimalist: [.6, 1200, 1200, .05, .5], complex: [.6, 500, 900, .12, .4], complicated: [.7, 400, 300, .15, .4], intricate: [.6, 1400, 2200, .1, .4] };
    const ORDER = MIX(['simple', 'plain', 'basic', 'minimalist', 'complex', 'complicated', 'intricate']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const CX = { minimalist: .05, plain: .1, simple: .2, basic: .3, complex: .75, intricate: .85, complicated: .9 };
    const WHAT = { simple: '부분이 적음', plain: '장식이 없음', basic: '기본만 있음', minimalist: '일부러 덜어 냄', complex: '부분이 많고 이어짐', complicated: '얽혀서 하기 어려움', intricate: '세부가 촘촘 · 정교' };
    const TC = (v) => v > .5 ? OR : BL;
    const PTS = [[30, 70], [90, 66], [60, 110], [24, 150], [96, 150], [60, 190], [40, 100], [84, 112], [30, 190], [94, 190], [60, 70], [76, 150]];
    const DOT = (x, y, c) => '<circle cx="' + x + '" cy="' + y + '" r="6" fill="' + (c || BL) + '" stroke="#222" stroke-width="1.5"/>';
    const NET = (id) => { const v = CX[id]; let s = f('M14 56 h96 v148 h-96 z', '#fff', 2);
      if (id === 'minimalist') s += DOT(62, 130, '#222');
      else if (id === 'plain') s += f('M34 90 h56 v80 h-56 z', '#f6f4ee', 2);
      else if (id === 'complicated') s += l('M24 80 q60 -30 70 40 t-60 30 q-20 -60 50 -50 t20 80 q-60 20 -70 -40 t60 -50', 3, OR) + DOT(24, 80) + DOT(94, 190, RD) + t(100, 76, 14, '?', RD);
      else if (id === 'intricate') s += Array.from({ length: 6 }, (_, i) => '<circle cx="62" cy="130" r="' + (8 + i * 9) + '" fill="none" stroke="' + (i % 2 ? GD : OR) + '" stroke-width="2"/>').join('') + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return l('M62 130 L' + (62 + 54 * Math.cos(a)) + ' ' + (130 + 54 * Math.sin(a)), 1, OR); }).join('');
      else { const n = Math.round(3 + v * 9), P = PTS.slice(0, n);
        s += P.map((p, i) => P.slice(i + 1).filter((_, j) => (i + j) % (v > .5 ? 1 : 3) === 0 && j < (v > .5 ? 3 : 1)).map((q) => l('M' + p[0] + ' ' + p[1] + ' L' + q[0] + ' ' + q[1], 2, '#999')).join('')).join('') + P.map(([x, y]) => DOT(x, y, id === 'basic' ? GN : BL)).join(''); }
      return s + t(62, 226, 12, v > .5 ? '얽힘 많음' : '부분 적음', TC(v)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + NET(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 8 ? 13 : 16, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(CX[id]));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { simple: P('simple', '간단'), plain: P('plain', '수수'), basic: P('basic', '딱 기본'), minimalist: P('minimalist', '비움'), complex: P('complex', '복잡복잡'), complicated: P('complicated', '뒤죽박죽'), intricate: P('intricate', '섬세'), };
    // 작은 그림들
    const MAPS = (x, y, many) => f('M' + (x - 50) + ' ' + (y - 50) + ' h100 v100 h-100 z', '#e9f0d8') + (many ? [0, 1, 2, 3, 4].map((i) => l('M' + (x - 50) + ' ' + (y - 40 + i * 20) + ' L' + (x + 50) + ' ' + (y - 50 + i * 24), 2, '#888') + l('M' + (x - 40 + i * 20) + ' ' + (y - 50) + ' L' + (x - 30 + i * 18) + ' ' + (y + 50), 2, '#888')).join('') : l('M' + (x - 50) + ' ' + y + ' H' + (x + 50) + ' M' + x + ' ' + (y - 50) + ' V' + (y + 50), 3, '#888')) + t(x + 20, y - 20, 14, '★', RD);
    const SHIRT = (x, y, c, pat) => g(x, y, 0, 1, f('M-26 -30 l14 -8 h24 l14 8 l10 16 l-12 6 v40 h-48 v-40 l-12 -6 z', c || '#fff') + (pat ? '<circle cx="-8" cy="-10" r="4" fill="' + RD + '"/><circle cx="8" cy="6" r="4" fill="' + BL + '"/><circle cx="-6" cy="20" r="4" fill="' + GD + '"/>' : ''));
    const FORM = (x, y) => f('M' + (x - 36) + ' ' + (y - 50) + ' h72 v100 h-72 z', '#fff', 2) + Array.from({ length: 8 }, (_, i) => l('M' + (x - 28) + ' ' + (y - 40 + i * 12) + ' h' + (30 + (i % 3) * 10), 2, '#bbb') + f('M' + (x + 20) + ' ' + (y - 46 + i * 12) + ' h8 v8 h-8 z', '#fff', 1.5)).join('');
    const LACE = (x, y, k) => g(x, y, 0, k || 1, Array.from({ length: 4 }, (_, i) => '<circle r="' + (8 + i * 8) + '" fill="none" stroke="#888" stroke-width="1.5" stroke-dasharray="3 2"/>').join(''));
    const ENGINE = (x, y) => f('M' + (x - 40) + ' ' + (y - 40) + ' h80 v60 h-80 z', '#888') + [0, 1, 2].map((i) => '<circle cx="' + (x - 24 + i * 24) + '" cy="' + (y - 10) + '" r="10" fill="#555" stroke="#222" stroke-width="2"/>').join('') + l('M' + (x - 40) + ' ' + (y - 30) + ' q40 -30 80 0', 3, RD);
    const DESK = (x, y, things) => f('M' + (x - 50) + ' ' + y + ' h100 v6 h-100 z', '#a3743f') + l('M' + (x - 44) + ' ' + (y + 6) + ' v40 M' + (x + 44) + ' ' + (y + 6) + ' v40', 4, '#7a5a3a') + (things ? [0, 1, 2, 3].map((i) => BOXG(x - 44 + i * 22, y - 20 - (i % 2) * 10, 18, 20 + (i % 2) * 10, [RD, BL, GD, GN][i])).join('') : f('M' + (x - 6) + ' ' + (y - 24) + ' h12 v24 h-12 z', '#222'));
    const C = {
      simple: { n: 'simple', past: 'simple', en: 'The map is simple.', ko: '그 지도는 단순하다.', feel: '<b>부분이 적다.</b> 초점은 구조.', t: .2,
        p: [[150, '보물 지도', () => MAPS(75, 130, false)], [280, '부분 적음', () => W.simple()], [150, '한 번에 찾았다', () => A(75, OR, 'smile', 'M-20 -90 L-36 -130 M20 -90 L36 -130', .6) + PKG(120, 220, .5)]] },
      plain: { n: 'plain', past: 'plain', en: 'I\'d like a plain white shirt.', ko: '무늬 없는 흰 셔츠로 주세요.', feel: '<b>겉에 장식이 없다.</b> 소박 · 밋밋 둘 다.', t: .3,
        p: [[150, '옷 가게', () => SHIRT(45, 130, '#fff', true) + SHIRT(110, 130, '#cfe6f5', true)], [280, '장식이 없음', () => W.plain()], [150, '"이거요"', () => SHIRT(75, 130, '#fff', false) + A(120, MN, 'smile', null, .4)]] },
      basic: { n: 'basic', past: 'basic', en: 'This is the basic plan.', ko: '이건 기본 요금제다.', feel: '<b>핵심 기능 · 수준만</b> 있다.', t: .2,
        p: [[150, '요금제 세 개', () => [0, 1, 2].map((i) => f('M' + (20 + i * 40) + ' ' + (180 - i * 30) + ' h34 v' + (40 + i * 30) + ' h-34 z', [GN, BL, OR][i])).join('')], [280, '기본만 있음', () => W.basic()], [150, '"이거면 충분"', () => A(75, BL, 'smile', 'M18 -92 L40 -80', .8)]] },
      minimalist: { n: 'minimalist', past: 'minimalist', en: 'The room has a minimalist design.', ko: '그 방은 미니멀하게 꾸며졌다.', feel: '모자란 게 아니라 <b>일부러 덜어 낸</b> 스타일.', t: .6,
        p: [[150, '하얀 방', () => DARK(150, '#fbfbf8') + f('M60 200 h30 v8 h-30 z', '#222')], [280, '일부러 덜어 냄', () => W.minimalist()], [150, '조용히 차 한 잔', () => DARK(150, '#fbfbf8') + A(75, MN, 'phew', 'M18 -92 L22 -122', .7)]] },
      complex: { n: 'complex', past: 'complex', en: 'The map is complex.', ko: '그 지도는 복잡하다.', feel: '<b>부분이 많고 서로 이어져 있다.</b> 좋고 나쁨은 말하지 않는다.', t: .6,
        p: [[150, '지하철 노선도', () => MAPS(75, 130, true)], [280, '부분이 많고 이어짐', () => W.complex()], [150, '손가락으로 따라간다', () => MAPS(75, 130, true) + g(110, 160, 0, .5, HND(0, 0, .4, SK))]] },
      complicated: { n: 'complicated', past: 'complicated', en: 'The form is complicated.', ko: '그 서류는 번거롭게 복잡하다.', feel: '<b>얽혀서 하기 어렵다.</b>', t: .7,
        p: [[150, '서류 한 장', () => FORM(75, 130)], [280, '얽혀서 하기 어려움', () => W.complicated()], [150, '머리를 쥐어뜯는다', () => A(75, BL, 'sad', 'M-20 -90 L-28 -130 M20 -90 L28 -130', .8)]] },
      intricate: { n: 'intricate', past: 'intricate', en: 'The pattern is intricate.', ko: '그 무늬는 섬세하고 정교하다.', feel: '<b>작은 부분이 촘촘하고 정교하다.</b> 감탄에도.', t: .6,
        p: [[150, '옛 창살 무늬', () => LACE(75, 130, 1.6)], [280, '세부가 정교', () => W.intricate()], [150, '"와, 손으로?"', () => A(75, MN, 'shock', null, .8)]] }
    };
    const MORE = {
      simple: [
        { b: '요리', en: 'It\'s a simple recipe.', ko: '간단한 요리법이다.', feel: '단계가 <b>적다.</b>', p: [[150, '재료 둘', () => '<circle cx="50" cy="180" r="14" fill="' + GD + '" stroke="#222" stroke-width="2"/><circle cx="100" cy="180" r="14" fill="#fff" stroke="#222" stroke-width="2"/>'], [280, '부분 적음', () => W.simple()], [150, '5분 완성', () => A(75, MN, 'smile', 'M18 -92 L40 -80', .8)]] },
        { b: '삶', en: 'They live a simple life.', ko: '그들은 소박하게 산다.', feel: '삶의 <b>부분이 적다.</b>', p: [[150, '시골집', () => f('M40 238 v-60 l35 -30 l35 30 v60 z', '#e9e0c8') + TREEC(130, .3)], [280, '부분 적음', () => W.simple()], [150, '텃밭에서', () => f('M0 220 H150 V240 H0 z', '#9a7a4a') + A(75, '#888', 'smile', null, .6)]] }],
      plain: [
        { b: '베이글', en: 'I\'d like a plain bagel.', ko: '아무것도 안 든 베이글 주세요.', feel: '<b>아무것도 얹지 않은</b> 그대로.', p: [[150, '빵집 진열대', () => [40, 75, 110].map((x, i) => '<circle cx="' + x + '" cy="180" r="16" fill="#e9b86a" stroke="#222" stroke-width="2"/><circle cx="' + x + '" cy="180" r="5" fill="#fff"/>' + (i ? '<circle cx="' + (x - 6) + '" cy="172" r="3" fill="' + (i === 1 ? GN : RD) + '"/>' : '')).join('')], [280, '장식이 없음', () => W.plain()], [150, '"그냥 이거요"', () => A(75, MN, 'smile', 'M18 -92 L40 -100', .8)]] },
        { b: '쉬운 말', en: 'Let me say it in plain English.', ko: '쉬운 말로 다시 말할게.', feel: '말도 <b>꾸밈없이</b> 쉽게.', p: [[150, '어려운 설명', () => BOXG(20, 40, 110, 70, '#2c4a3a') + t(75, 82, 12, 'λ→∑∂…', '#fff')], [280, '꾸밈없는 말', () => W.plain(t(196, 140, 18, '"쉽게 말하면"', BL))], [150, '"아하!"', () => A(75, OR, 'smile', null, .6) + BULB(110, 60, .4)]] }],
      basic: [
        { b: '요리', en: 'I can only cook basic meals.', ko: '나는 기본 요리만 할 줄 안다.', feel: '실력이 <b>기본</b>만큼.', p: [[150, '부엌', () => f('M20 150 h110 v10 h-110 z', '#ccc') + A(75, BL, 'calm', null, .5)], [280, '기본만 있음', () => W.basic(t(196, 146, 30, '🍳'))], [150, '계란 프라이', () => '<ellipse cx="75" cy="180" rx="40" ry="16" fill="#fff" stroke="#222" stroke-width="2"/><circle cx="75" cy="178" r="10" fill="' + GD + '"/>']] },
        { b: '권리', en: 'Clean water is a basic right.', ko: '깨끗한 물은 기본 권리다.', feel: '사람에게 <b>기본</b>으로 있어야 한다.', p: [[150, '우물가', () => f('M45 238 v-40 h60 v40 z', '#999') + l('M45 198 v-50 h60 v50', 4, '#7a5a3a')], [280, '기본', () => W.basic(f('M196 116 q-12 20 0 30 q12 -10 0 -30', '#8fd0ee', 2))], [150, '모두 한 컵씩', () => [30, 75, 120].map((x, i) => A(x, [BL, MN, OR][i], 'smile', 'M18 -92 L22 -122', .45)).join('')]] }],
      minimalist: [
        { b: '책상', en: 'His desk is minimalist.', ko: '그의 책상은 미니멀하다.', feel: '<b>일부러 덜어 냈다.</b>', p: [[150, '내 책상', () => DESK(75, 180, true)], [280, '일부러 덜어 냄', () => W.minimalist()], [150, '그의 책상', () => DESK(75, 180, false)]] },
        { b: '그림', en: 'She draws in a minimalist style.', ko: '그녀는 미니멀한 화풍으로 그린다.', feel: '선 몇 개로 <b>일부러 줄여</b> 그린다.', p: [[150, '전시회', () => BOXG(30, 50, 90, 110, '#fff') + l('M50 120 q25 -40 50 0', 3)], [280, '일부러 덜어 냄', () => W.minimalist(l('M170 150 q26 -40 52 0', 3))], [150, '오래 바라본다', () => A(75, BL, 'calm', null, .8)]] }],
      complex: [
        { b: '엔진', en: 'A car engine is complex.', ko: '자동차 엔진은 복잡하다.', feel: '부분이 <b>많고 서로 이어진다.</b>', p: [[150, '보닛을 연다', () => ENGINE(75, 170)], [280, '부분이 많고 이어짐', () => W.complex()], [150, '정비사의 손', () => ENGINE(75, 200) + A(120, BL, 'stern', 'M-18 -92 L-40 -60', .5)]] },
        { b: '감정', en: 'Her feelings were complex.', ko: '그녀의 마음은 복잡했다.', feel: '마음도 <b>여러 갈래가 얽혀</b> 있다.', p: [[150, '졸업식', () => A(75, MN, 'calm', null, .8) + t(124, 50, 18, '🎓')], [280, '마음의 구조', () => W.complex(t(176, 130, 20, '😊', '') + t(216, 150, 20, '😢', ''))], [150, '웃다가 울다가', () => A(75, MN, 'phew', null, .8)]] }],
      complicated: [
        { b: '관계', en: 'Their relationship is complicated.', ko: '그들 관계는 복잡하다.', feel: '얽혀서 <b>풀기 어렵다.</b>', p: [[150, '두 사람', () => A(45, BL, 'calm', null, .6) + A(105, MN, 'calm', null, .6)], [280, '얽혀서 어려움', () => W.complicated()], [150, '"설명하기 힘들어"', () => A(75, MN, 'phew', null, .8)]] },
        { b: '길 안내', en: 'The directions are complicated.', ko: '길 설명이 너무 복잡하다.', feel: '따라가기가 <b>번거롭다.</b>', p: [[150, '"왼쪽, 오른쪽, 또 왼쪽…"', () => A(75, BR, 'smile', 'M18 -92 L40 -100', .8)], [280, '얽혀서 어려움', () => W.complicated()], [150, '결국 길을 잃음', () => MAPS(75, 130, true) + t(120, 60, 18, '?', RD)]] }],
      intricate: [
        { b: '레이스', en: 'The lace is intricate.', ko: '그 레이스는 섬세하다.', feel: '세부가 <b>촘촘하고 정교하다.</b>', p: [[150, '할머니의 손뜨개', () => LACE(75, 130, 1.6)], [280, '세부가 정교', () => W.intricate()], [150, '돋보기로 본다', () => '<circle cx="75" cy="120" r="34" fill="#fff" stroke="#555" stroke-width="5"/>' + LACE(75, 120, .8) + l('M100 144 l20 20', 6, '#555')]] },
        { b: '줄거리', en: 'The movie has an intricate plot.', ko: '그 영화는 줄거리가 정교하게 얽혀 있다.', feel: '이야기 조각이 <b>정교하게</b> 맞물린다.', p: [[150, '영화관', () => BOXG(20, 40, 110, 70, '#222') + t(75, 84, 14, '영화', '#fff')], [280, '세부가 정교', () => W.intricate()], [150, '"마지막에 다 이어져!"', () => A(75, OR, 'shock', null, .6) + BULB(110, 60, .4)]] }]
    };
    const CORE = { simple: '<b>부분이 적다.</b>', plain: '<b>겉에 장식이 없다.</b>', basic: '<b>기본만 있다.</b>', minimalist: '<b>일부러 덜어 냈다.</b>', complex: '<b>부분이 많고 이어져 있다.</b>', complicated: '<b>얽혀서 하기 어렵다.</b>', intricate: '<b>세부가 촘촘하고 정교하다.</b>' };
