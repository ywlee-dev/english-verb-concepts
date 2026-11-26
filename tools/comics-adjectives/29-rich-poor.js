    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(rich 장면 2는 진한 맛, poor 장면 3은 질이 나쁜 쓰임). 가운데 칸은 늘 같은 "유리 단지 하나"와 "무엇이?" 칸이다 — 단지가 얼마나 찼나, 그리고 abundant · scarce(물자 · 자원) · affluent(생활 수준) · lacking(빠진 것)처럼 무엇이 많고 적은가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'scarce', BASIC_B = '노트 장면';
    const FX = { rich: [.3, 1400, 1800, .15, .4], wealthy: [.5, 900, 1300, .15, .4], affluent: [.6, 800, 1000, .1, .4], abundant: [.6, 700, 1100, .15, .4], poor: [.5, 400, 300, .08, .5], penniless: [.6, 300, 160, .1, .5], scarce: [.3, 1600, 1600, .06, .5], lacking: [.4, 600, 400, .08, .5] };
    const ORDER = MIX(['rich', 'wealthy', 'affluent', 'abundant', 'poor', 'penniless', 'scarce', 'lacking']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const FL = { abundant: 1, wealthy: .92, rich: .85, affluent: .75, lacking: .55, poor: .15, scarce: .08, penniless: 0 };
    const WHAT = { rich: '돈이 많음', wealthy: '재산이 많음', affluent: '동네 · 생활 수준', abundant: '물자 · 수량이 넉넉', poor: '돈이 적음', penniless: '돈이 거의 없음', scarce: '물 · 자원이 모자람', lacking: '있어야 할 것이 빠짐' };
    const TC = (v) => v > .5 ? GN : RD;
    const JAR = (id) => { const v = FL[id], n = Math.round(v * 24), apple = id === 'abundant', drop = id === 'scarce';
      let s = f('M34 70 h56 v12 h-56 z', '#888') + f('M30 82 h64 v118 h-64 z', 'rgba(207,230,245,.5)', 3);
      s += Array.from({ length: n }, (_, i) => { const x = 40 + (i % 4) * 15, y = 190 - Math.floor(i / 4) * 18;
        return apple ? '<circle cx="' + x + '" cy="' + y + '" r="8" fill="' + RD + '" stroke="#222" stroke-width="1.5"/>' : '<circle cx="' + x + '" cy="' + y + '" r="7" fill="' + GD + '" stroke="#222" stroke-width="1.5"/>'; }).join('');
      if (drop) s = f('M34 70 h56 v12 h-56 z', '#888') + f('M30 82 h64 v118 h-64 z', 'rgba(207,230,245,.5)', 3) + f('M58 184 q-5 8 0 11 q5 -3 0 -11', '#8fd0ee', 2);
      if (apple) s += '<circle cx="24" cy="206" r="8" fill="' + RD + '" stroke="#222" stroke-width="1.5"/><circle cx="102" cy="206" r="8" fill="' + RD + '" stroke="#222" stroke-width="1.5"/>';
      if (id === 'lacking') s += '<rect x="70" y="120" width="18" height="18" fill="none" stroke="' + RD + '" stroke-width="2" stroke-dasharray="3 3"/>';
      if (id === 'affluent') s += f('M14 60 l10 -10 l10 10 v14 h-20 z M90 60 l10 -10 l10 10 v14 h-20 z', '#e9e0c8');
      if (id === 'penniless') s += t(62, 150, 14, '텅', '#aaa');
      return s + t(62, 228, 12, apple ? '넘친다!' : '찬 정도 ' + Math.round(v * 100), TC(v)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + JAR(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 8 ? 13 : 17, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(FL[id]));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { rich: P('rich', '두둑'), wealthy: P('wealthy', '넉넉'), affluent: P('affluent', '여유'), abundant: P('abundant', '주렁주렁'), poor: P('poor', '빠듯'), penniless: P('penniless', '빈털터리'), scarce: P('scarce', '바짝'), lacking: P('lacking', '뭔가 빠졌다') };
    // 작은 그림들
    const MANSION = (x, k) => g(x, 238, 0, k || 1, f('M-60 0 v-70 l60 -40 l60 40 v70 z', '#e9e0c8') + [-40, -10, 20].map((d) => BOXG(d, -56, 18, 20, '#fff6c0')).join('') + BOXG(-10, -26, 20, 26, '#a3743f'));
    const HUT = (x, k) => g(x, 238, 0, k || 1, f('M-30 0 v-40 l30 -24 l30 24 v40 z', '#c9b48a') + l('M-20 -30 l10 6', 2, '#7a5a3a'));
    const TREEA = (x, n) => TREEC(x, .7) + Array.from({ length: n }, (_, i) => '<circle cx="' + (x - 40 + (i % 5) * 20) + '" cy="' + (100 + Math.floor(i / 5) * 22) + '" r="7" fill="' + RD + '"/>').join('');
    const WALLET = (x, y, empty) => f('M' + (x - 30) + ' ' + (y - 20) + ' h60 v40 h-60 z', BR) + (empty ? t(x, y + 6, 14, '텅', '#fff') : f('M' + (x - 20) + ' ' + (y - 30) + ' h40 v14 h-40 z', GN));
    const WELL = (x) => f('M' + (x - 30) + ' 238 v-40 h60 v40 z', '#999') + l('M' + (x - 30) + ' 198 v-50 h60 v50 M' + x + ' 148 v30', 4, '#7a5a3a');
    const CAKE = (x, y, k) => g(x, y, 0, k || 1, f('M-40 0 v-34 h80 v34 z', '#5a3a1a') + f('M-40 -34 q20 8 40 0 q20 8 40 0 v-6 h-80 z', '#3a2010'));
    const BOWL = (x, y) => f('M' + (x - 34) + ' ' + (y - 20) + ' h68 q-4 26 -34 26 q-30 0 -34 -26 z', '#fff') + f('M' + (x - 30) + ' ' + (y - 22) + ' q30 -6 60 0', '#e9b86a', 2);
    const SPEAKER = (x, y) => f('M' + (x - 18) + ' ' + (y - 40) + ' h36 v40 h-36 z', '#333') + '<circle cx="' + x + '" cy="' + (y - 20) + '" r="10" fill="#666"/>';
    const C = {
      rich: { n: 'rich', past: 'rich', en: 'She is rich.', ko: '그녀는 부자다.', feel: '<b>돈이 많다.</b> 맛 · 색 · 영양이 진할 때도.', t: .3,
        p: [[150, '큰 집', () => MANSION(75, .9)], [280, '단지가 가득', () => W.rich()], [150, '"한턱낼게!"', () => A(75, MN, 'smile', 'M18 -92 L40 -120', .8)]] },
      wealthy: { n: 'wealthy', past: 'wealthy', en: 'They are a wealthy family.', ko: '그들은 재산이 많은 집안이다.', feel: '<b>재산이 많다.</b> rich보다 점잖게 들린다.', t: .5,
        p: [[150, '대대로 내려온 땅', () => f('M0 160 H150 V240 H0 z', '#9ac47a') + MANSION(110, .5)], [280, '재산이 많음', () => W.wealthy()], [150, '가족사진', () => [30, 60, 90, 120].map((x, i) => A(x, ['#2b3550', MN, '#2b3550', OR][i], 'smile', null, i > 1 ? .4 : .5)).join('')]] },
      affluent: { n: 'affluent', past: 'affluent', en: 'It\'s an affluent neighborhood.', ko: '그곳은 부유한 동네다.', feel: '<b>지역 · 생활 수준이 넉넉하다.</b> 글 · 뉴스에 많다.', t: .6,
        p: [[150, '넓은 정원 집들', () => MANSION(40, .45) + MANSION(110, .45) + TREEC(75, .3)], [280, '동네 · 생활 수준', () => W.affluent()], [150, '산책하는 사람들', () => A(40, MN, 'smile', null, .5) + A(100, BL, 'smile', null, .5)]] },
      abundant: { n: 'abundant', past: 'abundant', en: 'Apples are abundant this year.', ko: '올해는 사과가 풍성하다.', feel: '<b>물자 · 수량이 넉넉하다.</b> 사람의 돈이 아니다.', t: .6,
        p: [[150, '과수원', () => TREEA(75, 15)], [280, '물자가 넉넉', () => W.abundant()], [150, '바구니 가득', () => f('M30 180 h90 l-10 50 h-70 z', '#c9a171') + Array.from({ length: 8 }, (_, i) => '<circle cx="' + (42 + (i % 4) * 22) + '" cy="' + (176 - Math.floor(i / 4) * 12) + '" r="9" fill="' + RD + '" stroke="#222" stroke-width="2"/>').join('')]] },
      poor: { n: 'poor', past: 'poor', en: 'He was poor as a child.', ko: '그는 어릴 때 가난했다.', feel: '<b>돈이 적다.</b> "불쌍한" · "질이 나쁜"이라는 뜻도.', t: .5,
        p: [[150, '작은 집', () => HUT(75, 1.4)], [280, '단지가 조금', () => W.poor()], [150, '그래도 웃는 아이', () => HUT(110, .8) + A(50, OR, 'smile', null, .5)]] },
      penniless: { n: 'penniless', past: 'penniless', en: 'He was left penniless.', ko: '그는 빈털터리가 되었다.', feel: '<b>돈이 거의 없다.</b> 극단적인 상황.', t: .6,
        p: [[150, '사업 실패', () => DOC(75, 130, 1.6) + t(96, 100, 18, '↓', RD)], [280, '단지가 텅', () => W.penniless()], [150, '빈 지갑', () => WALLET(75, 140, true) + A(120, BR, 'down', null, .4)]] },
      scarce: { n: 'scarce', past: 'scarce', en: 'Clean water is scarce here.', ko: '이곳은 깨끗한 물이 귀하다.', feel: '<b>물 · 자원이 모자라 드물다.</b> 사람에게는 안 쓴다.', t: .3,
        p: [[150, '마른 땅', () => f('M0 200 H150 V240 H0 z', '#e2c48a') + l('M20 210 l10 8 M80 214 l-8 10', 2, BR) + SUN(110, 40, 16)], [280, '물 · 자원이 모자람', () => W.scarce()], [150, '우물 앞 긴 줄', () => WELL(120) + [20, 45, 70].map((x) => A(x, [BL, MN, OR][x % 3], 'calm', null, .35)).join('')]] },
      lacking: { n: 'lacking', past: 'lacking', en: 'The report is lacking in evidence.', ko: '그 보고서는 증거가 부족하다.', feel: '<b>있어야 할 것이 빠졌다.</b> 보통 be lacking in.', t: .4,
        p: [[150, '두툼한 보고서', () => DOC(75, 130, 1.6)], [280, '빠진 것', () => W.lacking()], [150, '"근거는요?"', () => A(75, '#888', 'stern', 'M18 -92 L40 -120', .8)]] }
    };
    const MORE = {
      rich: [
        { b: '케이크', en: 'This chocolate cake is rich.', ko: '이 초콜릿 케이크는 진하다.', feel: '맛도 <b>가득 차</b> 진하다.', p: [[150, '디저트', () => CAKE(75, 200, 1.4)], [280, '맛이 가득', () => W.rich(CAKE(196, 170, .9))], [150, '한 입이면 충분', () => A(75, MN, 'phew', 'M18 -92 L22 -126', .8)]] },
        { b: '역사', en: 'The city has a rich history.', ko: '그 도시는 역사가 풍부하다.', feel: '이야기도 <b>가득 쌓였다.</b>', p: [[150, '오래된 성문', () => CASTLE(75, 236, .9, RD)], [280, '이야기가 가득', () => W.rich(BOOK(196, 140, .5))], [150, '가이드 설명', () => A(50, BR, 'smile', 'M18 -92 L40 -120', .6) + A(110, BL, 'shock', null, .5)]] }],
      wealthy: [
        { b: '후원자', en: 'A wealthy donor built the library.', ko: '재산이 많은 후원자가 도서관을 지었다.', feel: '<b>재산이 많아</b> 크게 나눈다.', p: [[150, '새 도서관', () => BOXG(20, 100, 110, 138, '#e9e0c8') + t(75, 150, 14, '도서관', BR)], [280, '재산이 많음', () => W.wealthy()], [150, '책 읽는 아이들', () => A(40, OR, 'smile', null, .5) + A(110, GN, 'smile', null, .5) + BOOK(75, 120, .3)]] },
        { b: '나라', en: 'It\'s a wealthy country.', ko: '그곳은 부유한 나라다.', feel: '나라도 <b>재산이 많다.</b>', p: [[150, '지도', () => BOXG(20, 40, 110, 110, '#e9f0d8') + f('M50 80 q25 -20 50 0 q10 30 -20 40 q-30 0 -30 -40 z', GD)], [280, '재산이 많음', () => W.wealthy()], [150, '높은 빌딩들', () => [30, 70, 110].map((x, i) => BOXG(x - 15, 238 - 80 - i * 30, 30, 80 + i * 30, '#9aa8b8')).join('')]] }],
      affluent: [
        { b: '교외', en: 'They moved to an affluent suburb.', ko: '그들은 부유한 교외로 이사했다.', feel: '<b>생활 수준</b>이 넉넉한 곳.', p: [[150, '이삿짐 트럭', () => BOXG(20, 150, 110, 60, OR) + '<circle cx="40" cy="214" r="10" fill="#333"/><circle cx="110" cy="214" r="10" fill="#333"/>'], [280, '생활 수준', () => W.affluent()], [150, '잔디 마당', () => f('M0 200 H150 V240 H0 z', '#9ac47a') + MANSION(75, .6)]] },
        { b: '사회', en: 'In affluent societies, people buy more.', ko: '부유한 사회에서는 사람들이 더 많이 산다.', feel: '사회 전체의 <b>생활이 넉넉하다.</b>', p: [[150, '쇼핑몰', () => BOXG(20, 80, 110, 158, '#f2d59a') + t(75, 120, 14, 'SALE', RD)], [280, '생활 수준', () => W.affluent()], [150, '쇼핑백 가득', () => A(75, MN, 'smile', 'M-20 -90 L-30 -50 M20 -90 L30 -50', .8) + f('M36 160 h20 v26 h-20 z M94 160 h20 v26 h-20 z', OR)]] }],
      abundant: [
        { b: '비', en: 'Rain is abundant in spring.', ko: '봄에는 비가 넉넉히 온다.', feel: '물이 <b>넉넉하다.</b>', p: [[150, '봄비', () => l('M20 30 l-6 20 M50 50 l-6 20 M80 30 l-6 20 M110 50 l-6 20 M135 30 l-6 20', 3, WT)], [280, '물자가 넉넉', () => W.abundant()], [150, '쑥쑥 자라는 새싹', () => f('M0 200 H150 V240 H0 z', '#9ac47a') + [30, 60, 90, 120].map((x) => l('M' + x + ' 200 v-20 M' + x + ' 190 q-8 -4 -10 -12 M' + x + ' 188 q8 -4 10 -12', 3, GN)).join('')]] },
        { b: '증거', en: 'There is abundant evidence.', ko: '증거가 넉넉하다.', feel: '근거도 <b>넉넉하다.</b>', p: [[150, '수사 회의', () => [0, 1, 2, 3].map((i) => DOC(40 + i * 24, 140, 1)).join('')], [280, '근거가 넉넉', () => W.abundant([0, 1, 2].map((i) => DOC(176 + i * 20, 140, .7)).join(''))], [150, '"틀림없어"', () => A(75, BR, 'stern', 'M18 -92 L40 -120', .8)]] }],
      poor: [
        { b: '마을', en: 'The village was poor.', ko: '그 마을은 가난했다.', feel: '마을에 <b>돈이 적다.</b>', p: [[150, '산골 마을', () => HUT(40, .8) + HUT(110, .8)], [280, '단지가 조금', () => W.poor()], [150, '함께 나누는 밥', () => f('M30 190 h90 v8 h-90 z', '#a3743f') + A(40, OR, 'smile', null, .45) + A(110, GN, 'smile', null, .45)]] },
        { b: '음질', en: 'The sound quality is poor.', ko: '소리 질이 나쁘다.', feel: '질이 <b>모자라다</b> — 가난한 질.', p: [[150, '옛 스피커', () => SPEAKER(75, 200)], [280, '질이 모자람', () => W.poor(l('M150 140 l10 -10 l6 20 l8 -16 l10 14 l6 -10 l10 10', 3, RD))], [150, '"치지직"', () => A(75, BL, 'stern', 'M-20 -90 L-28 -130 M20 -90 L28 -130', .8)]] }],
      penniless: [
        { b: '여행', en: 'I came home penniless after the trip.', ko: '여행 끝에 빈털터리로 집에 왔다.', feel: '돈이 <b>거의 없다.</b>', p: [[150, '기념품 잔뜩', () => [0, 1, 2].map((i) => PKG(40 + i * 35, 220 - i * 10, .7)).join('')], [280, '단지가 텅', () => W.penniless(WALLET(196, 140, true))], [150, '라면만 일주일', () => BOWL(75, 200) + A(120, BL, 'down', null, .45)]] },
        { b: '첫 도시', en: 'He arrived in the city penniless.', ko: '그는 무일푼으로 도시에 왔다.', feel: '<b>아무것도 없이</b> 시작했다.', p: [[150, '기차역', () => BOXG(20, 80, 110, 60, '#c8ccd2') + t(75, 116, 14, '서울역', BL)], [280, '단지가 텅', () => W.penniless()], [150, '그래도 걷는다', () => [20, 50, 80, 110, 130].map((x, i) => BOXG(x, 238 - 60 - i * 10, 18, 60 + i * 10, '#9aa8b8')).join('') + A(60, BR, 'stern', null, .45, 'M-10 -42 L-24 0 M10 -42 L22 0')]] }],
      scarce: [
        { b: '먹이', en: 'Food is scarce in winter.', ko: '겨울에는 먹이가 귀하다.', feel: '먹을 것이 <b>모자라 드물다.</b>', p: [[150, '눈 덮인 숲', () => f('M0 200 H150 V240 H0 z', '#fff') + TREEC(40, .4) + TREEC(110, .4)], [280, '먹이가 모자람', () => W.scarce(t(196, 146, 26, '🌰', BR))], [150, '도토리 한 알', () => g(75, 220, 0, .9, '<ellipse cy="-14" rx="16" ry="12" fill="#8a6a3a" stroke="#222" stroke-width="2"/><circle cx="14" cy="-26" r="8" fill="#8a6a3a" stroke="#222" stroke-width="2"/>') + t(115, 200, 16, '🌰')]] },
        { b: '시간', en: 'Free time is scarce these days.', ko: '요즘은 쉬는 시간이 귀하다.', feel: '시간도 <b>모자라 드물다.</b>', p: [[150, '꽉 찬 달력', () => BOXG(20, 40, 110, 110, '#fff') + [0, 1, 2, 3, 4].map((i) => BOXG(26 + i * 20, 60, 16, 80, OR)).join('')], [280, '시간이 모자람', () => W.scarce(CLK(196, 140, 22, RD))], [150, '5분 휴식', () => A(75, BL, 'phew', 'M18 -92 L22 -122', .8) + t(124, 50, 14, '5분', OR)]] }],
      lacking: [
        { b: '소금', en: 'The soup is lacking in salt.', ko: '수프에 소금이 모자라다.', feel: '있어야 할 맛이 <b>빠졌다.</b>', p: [[150, '수프 한 입', () => BOWL(75, 200) + A(120, MN, 'calm', null, .4)], [280, '빠진 것', () => W.lacking(t(196, 146, 18, '소금?', '#888'))], [150, '톡톡', () => f('M60 100 h20 v30 h-20 z', '#fff') + t(70, 150, 14, '· · ·', '#888')]] },
        { b: '자신감', en: 'She is lacking in confidence.', ko: '그녀는 자신감이 부족하다.', feel: '마음에 <b>있어야 할 것이 빠졌다.</b>', p: [[150, '발표 전', () => A(75, MN, 'sad', null, .8)], [280, '빠진 것', () => W.lacking(t(196, 146, 26, '💪?'))], [150, '"넌 잘할 수 있어"', () => A(45, BL, 'smile', 'M18 -92 L46 -100', .6) + A(110, MN, 'phew', null, .55)]] }]
    };
    const CORE = { rich: '<b>돈이 많다.</b>', wealthy: '<b>재산이 많다.</b>', affluent: '<b>지역 · 생활 수준이 넉넉하다.</b>', abundant: '<b>물자 · 수량이 넉넉하다.</b>', poor: '<b>돈이 적다.</b>', penniless: '<b>돈이 거의 없다.</b>', scarce: '<b>물 · 자원이 모자라 드물다.</b>', lacking: '<b>있어야 할 것이 빠졌다.</b>' };
