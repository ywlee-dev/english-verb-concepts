    // note: 장면 하나가 뜻은 아니다. 세 장면에 다 남는 것이 형용사의 느낌이다. 장면 1은 노트의 문장을 옮겼고, 장면 2 · 3과 감정은 새로 지었다(corrupt 장면 3은 파일이 망가진 쓰임, candid 장면 2는 꾸밈없는 사진). 가운데 칸은 늘 같은 "말 상자 = 사실 상자"와 "무엇이?" 칸이다 — 말과 사실이 같은가(=) 다른가(≠), 그리고 sincere(마음) · candid(돌려 말하지 않음) · deceitful(의도) · corrupt(권한)처럼 무엇을 보는 말인가만 바뀐다.
    const WORD = '형용사', BASE = '', FIRST = 'candid', BASIC_B = '노트 장면';
    const FX = { honest: [.3, 900, 900, .12, .4], truthful: [.3, 800, 800, .12, .4], sincere: [.6, 700, 800, .1, .4], candid: [.2, 1100, 1100, .15, .4], dishonest: [.4, 400, 300, .12, .4], lying: [.3, 600, 300, .12, .4], deceitful: [.6, 500, 200, .12, .4], corrupt: [.8, 200, 120, .2, .4] };
    const ORDER = MIX(['honest', 'truthful', 'sincere', 'candid', 'dishonest', 'lying', 'deceitful', 'corrupt']);
    const MN = '#a84b7a', BR = '#8a6a3a', RD = '#d8412f', GN = '#2c7a53', BL = '#2b5a8a', OR = '#e07a2b', WT = '#4a7fb5', GD = '#f2b632';
    const OK = { honest: 1, truthful: 1, sincere: 1, candid: 1, dishonest: 0, lying: 0, deceitful: 0, corrupt: 0 };
    const WHAT = { honest: '속이지 않음', truthful: '말이 사실에 맞음', sincere: '마음이 진짜', candid: '돌려 말하지 않음', dishonest: '속이거나 숨김', lying: '거짓을 말하는 중', deceitful: '일부러 오해하게', corrupt: '권한을 부정하게' };
    const TC = (id) => OK[id] ? GN : RD;
    const MATCH = (id) => { const ok = OK[id];
      let s = f('M14 50 h96 v44 h-96 z', '#fff', 2) + t(62, 66, 11, '말', '#888') + f('M14 140 h96 v44 h-96 z', '#fff', 2) + t(62, 156, 11, '사실', '#888');
      s += t(62, 126, 26, ok ? '=' : '≠', TC(id));
      const sh = { honest: ['깼어요', '깼다'], truthful: ['늦었어요', '늦었다'], sincere: ['♥ 미안해', '♥'], candid: ['별로예요', '별로다'], dishonest: ['안 깼어요', '깼다'], lying: ['집에 있었어', '오락실'], deceitful: ['무료!', '숨은 요금'], corrupt: ['통과', '₩ 뒷돈'] }[id];
      s += t(62, 86, 13, sh[0], BL) + t(62, 176, 13, sh[1], ok ? BL : RD);
      if (id === 'deceitful') s += t(102, 60, 14, '🎭');
      if (id === 'corrupt') s += t(102, 150, 14, '🤝');
      if (id === 'sincere') s += t(20, 60, 12, '✦', GD);
      return s + t(62, 214, 12, ok ? '말 = 사실 · 마음' : '말 ≠ 사실', TC(id)); };
    const TP = (id, b, z) => DARK(280, '#f6f4ee') + MATCH(id) + BOXG(124, 56, 144, 128, '#fff') + t(196, 76, 13, '무엇이?', '#888') + (b || t(196, 136, WHAT[id].length > 7 ? 14 : 17, WHAT[id], BL)) + sfx(196, 220, 24, z, '', TC(id));
    const P = (id, z) => (b, zz) => TP(id, b, zz || z);
    const W = { honest: P('honest', '솔직'), truthful: P('truthful', '사실대로'), sincere: P('sincere', '진심'), candid: P('candid', '대놓고'), dishonest: P('dishonest', '슬쩍'), lying: P('lying', '쉿, 거짓'), deceitful: P('deceitful', '속임수'), corrupt: P('corrupt', '검은돈') };
    // 작은 그림들
    const VASE = (x, y, br) => br ? f('M' + (x - 30) + ' ' + y + ' l10 -20 l10 12 l10 -16 l10 14 l10 -10 l10 20 z', BL) : f('M' + (x - 14) + ' ' + y + ' q-14 -30 4 -50 v-10 h20 v10 q18 20 4 50 z', BL);
    const WALLETW = (x, y) => f('M' + (x - 24) + ' ' + (y - 16) + ' h48 v32 h-48 z', BR);
    const COOKIE = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="#c98a4a" stroke="#222" stroke-width="2"/><circle cx="' + (x - 3) + '" cy="' + (y - 2) + '" r="2"/>';
    const JAR = (x, y) => f('M' + (x - 24) + ' ' + (y - 50) + ' h48 v50 h-48 z', '#cfe6f5') + f('M' + (x - 26) + ' ' + (y - 58) + ' h52 v8 h-52 z', RD);
    const FILE = (x, y, bad) => f('M' + (x - 24) + ' ' + (y - 30) + ' h36 l12 12 v48 h-48 z', '#fff') + (bad ? t(x, y + 8, 18, '⚠', RD) : '');
    const CAMERA = (x, y) => f('M' + (x - 26) + ' ' + (y - 16) + ' h52 v32 h-52 z', '#333') + '<circle cx="' + x + '" cy="' + y + '" r="10" fill="#8fd0ee" stroke="#fff" stroke-width="2"/>';
    const C = {
      honest: { n: 'honest', past: 'honest', en: 'She was honest about the vase.', ko: '그녀는 꽃병 일을 솔직하게 말했다.', feel: '<b>속이지 않는다.</b> h는 소리 안 나서 an honest.', t: .3,
        p: [[150, '앗, 깨졌다', () => VASE(75, 210, true) + A(120, MN, 'shock', null, .45)], [280, '말 = 사실', () => W.honest()], [150, '"제가 깼어요"', () => A(75, MN, 'sad', null, .8)]] },
      truthful: { n: 'truthful', past: 'truthful', en: 'He gave a truthful account.', ko: '그는 사실 그대로 이야기했다.', feel: '불리해도 <b>사실대로</b> 말한다.', t: .3,
        p: [[150, '"무슨 일이 있었죠?"', () => A(75, '#888', 'calm', null, .8)], [280, '말이 사실에 맞음', () => W.truthful()], [150, '하나하나 말한다', () => A(75, BL, 'calm', 'M18 -92 L40 -100', .8) + t(124, 60, 14, '1, 2, 3', BL)]] },
      sincere: { n: 'sincere', past: 'sincere', en: 'Her apology sounded sincere.', ko: '그녀의 사과는 진심으로 들렸다.', feel: '<b>마음에서 우러났다.</b> 사실 검증과는 다르다.', t: .6,
        p: [[150, '"정말 미안해"', () => A(75, MN, 'sad', null, .8)], [280, '마음이 진짜', () => W.sincere()], [150, '화해의 악수', () => A(45, MN, 'smile', 'M20 -90 L46 -70', .6) + A(108, OR, 'smile', 'M-20 -90 L-46 -70', .55)]] },
      candid: { n: 'candid', past: 'candid', en: 'I appreciate your candid feedback.', ko: '솔직한 피드백 고마워요.', feel: '<b>불편한 말도 숨김없이.</b> 무례하다는 뜻은 아니다.', t: .2,
        p: [[150, '"제 글 어때요?"', () => A(75, BL, 'calm', null, .8) + DOC(120, 140, .7)], [280, '돌려 말하지 않음', () => W.candid()], [150, '"고마워요, 고칠게요"', () => A(75, BL, 'smile', 'M18 -92 L22 -126', .8)]] },
      dishonest: { n: 'dishonest', past: 'dishonest', en: 'It was dishonest to hide it.', ko: '그걸 숨긴 건 부정직한 일이었다.', feel: '<b>속이거나 숨긴다.</b> 두루 쓴다.', t: .4,
        p: [[150, '깨진 꽃병', () => VASE(75, 220, true)], [280, '말 ≠ 사실', () => W.dishonest()], [150, '소파 밑에 슬쩍', () => f('M20 160 h110 v40 h-110 z', '#a84b40') + A(120, OR, 'stern', null, .4)]] },
      lying: { n: 'lying', past: 'lying', en: 'He\'s lying about where he was.', ko: '그는 어디 있었는지 거짓말하고 있다.', feel: '<b>지금 거짓을 말하는 중.</b> 이 문장의 lying은 진행형 동사.', t: .3,
        p: [[150, '"어디 있었니?"', () => A(75, MN, 'stern', null, .8)], [280, '거짓을 말함', () => W.lying()], [150, '눈을 피한다', () => A(75, OR, 'phew', null, .6) + l('M90 140 l14 -4', 2, '#888')]] },
      deceitful: { n: 'deceitful', past: 'deceitful', en: 'The advertisement was deceitful.', ko: '그 광고는 속임수였다.', feel: '<b>일부러 오해하게</b> 만든다. 의도가 있다.', t: .6,
        p: [[150, '"전부 무료!"', () => BOXG(20, 40, 110, 80, '#ffe08a') + t(75, 86, 18, '무료!', RD)], [280, '일부러 오해하게', () => W.deceitful()], [150, '깨알 글씨', () => DOC(75, 130, 1.6) + t(75, 180, 8, '*월 9만원', RD)]] },
      corrupt: { n: 'corrupt', past: 'corrupt', en: 'The official was corrupt.', ko: '그 공무원은 부패했다.', feel: '<b>지위 · 권한을 부정하게 쓴다.</b> 강한 말.', t: .8,
        p: [[150, '책상 밑 봉투', () => f('M20 140 h110 v10 h-110 z', '#a3743f') + ENV(75, 190, .8)], [280, '권한을 부정하게', () => W.corrupt()], [150, '뉴스 속보', () => BOXG(20, 40, 110, 70, '#cfe6f5') + t(75, 84, 14, '속보', RD)]] }
    };
    const MORE = {
      honest: [
        { b: '지갑', en: 'An honest boy returned the wallet.', ko: '정직한 소년이 지갑을 돌려주었다.', feel: '<b>속이지 않고</b> 돌려준다.', p: [[150, '길에 떨어진 지갑', () => WALLETW(75, 220) + A(120, OR, 'shock', null, .4)], [280, '말 = 사실', () => W.honest(WALLETW(196, 140))], [150, '경찰서에', () => A(45, OR, 'smile', 'M18 -92 L46 -80', .5) + A(110, BL, 'smile', null, .6)]] },
        { b: '대답', en: 'Give me an honest answer.', ko: '솔직하게 대답해 줘.', feel: '말을 <b>꾸미지 말고.</b>', p: [[150, '"이 옷 어때?"', () => A(75, MN, 'smile', null, .8)], [280, '속이지 않음', () => W.honest()], [150, '"…솔직히 별로"', () => A(75, BL, 'phew', null, .8)]] }],
      truthful: [
        { b: '증인', en: 'The witness was truthful.', ko: '증인은 사실대로 말했다.', feel: '본 것을 <b>사실대로.</b>', p: [[150, '법정', () => f('M20 140 h110 v10 h-110 z', '#a3743f') + A(75, '#888', 'stern', null, .5)], [280, '말이 사실에 맞음', () => W.truthful()], [150, '손을 들고 맹세', () => A(75, BL, 'stern', 'M18 -92 L26 -134', .8)]] },
        { b: '나에게', en: 'Be truthful with me.', ko: '나한테는 사실대로 말해 줘.', feel: '불편해도 <b>사실대로.</b>', p: [[150, '"괜찮아?"', () => A(45, MN, 'calm', null, .6) + A(110, BL, 'smile', null, .55)], [280, '말이 사실에 맞음', () => W.truthful(t(196, 140, 16, '"사실은 힘들어"', BL))], [150, '꼭 안아 준다', () => A(60, MN, 'smile', 'M20 -90 L40 -70', .7) + A(96, BL, 'sad', 'M-20 -90 L-40 -70', .65)]] }],
      sincere: [
        { b: '감사', en: 'Please accept my sincere thanks.', ko: '진심으로 감사드립니다.', feel: '고마움이 <b>마음에서</b> 나온다.', p: [[150, '감사 카드', () => ENV(75, 120, 1.4) + t(75, 124, 16, '♥', RD)], [280, '마음이 진짜', () => W.sincere()], [150, '고개 숙여 인사', () => g(75, 240, 20, .8, MAN(BR, 'smile'))]] },
        { b: '미소', en: 'He has a sincere smile.', ko: '그는 진심 어린 미소를 짓는다.', feel: '웃음이 <b>마음에서</b> 나온다.', p: [[150, '첫 만남', () => A(45, BL, 'calm', null, .6) + A(110, BR, 'smile', null, .6)], [280, '마음이 진짜', () => W.sincere(g(196, 146, 0, .7, HEAD('smile')))], [150, '마음이 놓인다', () => A(75, BL, 'smile', null, .8)]] }],
      candid: [
        { b: '사진', en: 'I love candid photos.', ko: '나는 꾸밈없는 사진이 좋다.', feel: '자세를 <b>꾸미지 않은</b> 순간.', p: [[150, '"하나 둘 셋"', () => CAMERA(75, 120)], [280, '꾸밈없음', () => W.candid(CAMERA(196, 140))], [150, '웃다가 찰칵', () => A(45, MN, 'smile', 'M18 -92 L36 -126', .55) + A(110, OR, 'smile', null, .5) + t(75, 50, 16, '찰칵', '#888')]] },
        { b: '인터뷰', en: 'She gave a candid interview.', ko: '그녀는 솔직한 인터뷰를 했다.', feel: '불편한 이야기도 <b>숨김없이.</b>', p: [[150, '인터뷰석', () => f('M20 180 h110 v8 h-110 z', '#a3743f') + A(45, MN, 'calm', null, .5) + A(110, BR, 'calm', null, .5)], [280, '돌려 말하지 않음', () => W.candid(t(196, 140, 16, '"실패도 했어요"', BL))], [150, '박수', () => A(75, '#888', 'smile', 'M-20 -90 L0 -110 M20 -90 L0 -110', .8)]] }],
      dishonest: [
        { b: '시험', en: 'Cheating on a test is dishonest.', ko: '시험에서 부정행위를 하는 건 부정직하다.', feel: '<b>속여서</b> 얻는다.', p: [[150, '시험 시간', () => DOC(75, 130, 1.6)], [280, '말 ≠ 사실', () => W.dishonest()], [150, '0점 처리', () => DOC(75, 130, 1.6) + t(96, 100, 22, '0', RD)]] },
        { b: '가게', en: 'The shop was dishonest about the price.', ko: '그 가게는 가격을 속였다.', feel: '값을 <b>숨기고</b> 속인다.', p: [[150, '"만 원이에요"', () => BOXG(20, 100, 110, 138, '#f2d59a') + A(75, BR, 'smile', null, .4)], [280, '말 ≠ 사실', () => W.dishonest(t(196, 140, 18, '1만 → 3만 원', RD))], [150, '영수증 보고 깜짝', () => DOC(110, 120, .8) + A(50, MN, 'shock', null, .65)]] }],
      lying: [
        { b: '과자', en: 'The kid is lying about the cookies.', ko: '아이가 과자 일로 거짓말하고 있다.', feel: '<b>지금 거짓을</b> 말한다.', p: [[150, '빈 과자 통', () => JAR(75, 200)], [280, '거짓을 말함', () => W.lying(COOKIE(186, 140) + COOKIE(206, 150))], [150, '입가에 부스러기', () => g(75, 130, 0, 1.4, HEAD('smile')) + '<circle cx="70" cy="150" r="3" fill="#c98a4a"/><circle cx="84" cy="152" r="3" fill="#c98a4a"/>']] },
        { b: '눈', en: 'His eyes told me he was lying.', ko: '눈을 보니 그가 거짓말하는 게 보였다.', feel: '눈이 <b>거짓을</b> 들킨다.', p: [[150, '"진짜야"', () => A(75, BR, 'smile', null, .8)], [280, '거짓을 말함', () => W.lying(BEYE(196, 136, .5, true) + l('M216 136 l14 -6', 2, '#888'))], [150, '"흐음…"', () => A(75, MN, 'stern', 'M-20 -90 L12 -70 M20 -90 L-12 -68', .8)]] }],
      deceitful: [
        { b: '메일', en: 'That email is deceitful. Don\'t click it.', ko: '그 메일은 속임수야. 누르지 마.', feel: '<b>일부러 속이려</b> 한다.', p: [[150, '"당첨되셨습니다!"', () => ENV(75, 120, 1.4) + t(75, 180, 14, '당첨!', RD)], [280, '일부러 오해하게', () => W.deceitful()], [150, '휴지통으로', () => f('M60 160 h40 l-4 78 h-32 z', '#888') + A(120, BL, 'stern', null, .45)]] },
        { b: '친구', en: 'He was deceitful to his friends.', ko: '그는 친구들을 속였다.', feel: '친구에게도 <b>일부러 속였다.</b>', p: [[150, '"돈 갚을게"', () => A(45, BR, 'smile', 'M18 -92 L46 -80', .6) + A(110, BL, 'smile', null, .55)], [280, '일부러 오해하게', () => W.deceitful(t(196, 146, 30, '🎭'))], [150, '연락 끊김', () => g(75, 130, 0, 2, PH) + t(75, 220, 14, '…', '#888')]] }],
      corrupt: [
        { b: '경찰', en: 'The police officer was corrupt.', ko: '그 경찰관은 부패했다.', feel: '권한을 <b>부정하게</b> 쓴다.', p: [[150, '단속', () => CAR(20, 220, .5) + A(120, BL, 'stern', null, .5)], [280, '권한을 부정하게', () => W.corrupt()], [150, '봉투를 받는다', () => A(75, BL, 'smile', 'M18 -92 L40 -60', .8) + ENV(120, 160, .5)]] },
        { b: '파일', en: 'The file is corrupt.', ko: '파일이 손상됐다.', feel: '데이터도 <b>망가져</b> 못 쓰게 된다.', p: [[150, '보고서 열기', () => FILE(75, 130, false)], [280, '망가진 데이터', () => W.corrupt(FILE(196, 140, true))], [150, '"백업 없어?!"', () => A(75, BL, 'shock', 'M-20 -90 L-28 -130 M20 -90 L28 -130', .8)]] }]
    };
    const CORE = { honest: '<b>속이지 않는다.</b>', truthful: '<b>말이 사실에 맞다.</b>', sincere: '<b>마음이 진짜다.</b>', candid: '<b>불편한 말도 숨김없이.</b>', dishonest: '<b>속이거나 숨긴다.</b>', lying: '<b>거짓을 말하고 있다.</b>', deceitful: '<b>일부러 오해하게 한다.</b>', corrupt: '<b>권한을 부정하게 쓴다.</b>' };
