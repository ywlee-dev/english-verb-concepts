    // 만화 공통 부품. 칸 높이 240, 좌표는 그림용. 종이 색은 어두운 화면에서도 그대로 (l 선 · f 면 · g 옮기기 · t 글자 · sfx 효과음)
    const K = '#222', ME = '#4a7fb5', OT = '#a84b40', OF = '#2b3550', SK = '#f0c49a';
    const l = (d, w, c) => '<path d="' + d + '" fill="none" stroke="' + (c || K) + '" stroke-width="' + (w || 3) + '" stroke-linecap="round" stroke-linejoin="round"/>';
    const f = (d, c, w) => '<path d="' + d + '" fill="' + c + '" stroke="' + K + '" stroke-width="' + (w === undefined ? 3 : w) + '" stroke-linejoin="round"/>';
    const g = (x, y, r, k, b) => '<g transform="translate(' + x + ' ' + y + ') rotate(' + (r || 0) + ') scale(' + (k || 1) + ')">' + b + '</g>';
    const t = (x, y, z, v, c, r) => '<text x="' + x + '" y="' + y + '" font-size="' + z + '" text-anchor="middle" fill="' + (c || K) + '" font-weight="700"' + (r ? ' transform="rotate(' + r + ' ' + x + ' ' + y + ')"' : '') + '>' + v + '</text>';
    // 효과음: 큰 한국어 + 작은 영어. 크기와 기울기가 힘
    const sfx = (x, y, z, v, en, c, r) => '<g transform="rotate(' + (r || 0) + ' ' + x + ' ' + y + ')"><g class="sfx"><text x="' + x + '" y="' + y + '" font-size="' + z + '" text-anchor="middle" font-weight="900" fill="' + c + '" stroke="#fff" stroke-width="' + z / 7 + '" paint-order="stroke" stroke-linejoin="round">' + v + '</text>' + (en ? t(x, y + Math.max(15, z * .42), Math.max(11, z * .3), en, c) : '') + '</g></g>';
    const FACE = {
      calm: l('M-10 -4 v5 M10 -4 v5 M-7 13 h14'), smile: l('M-10 -4 v5 M10 -4 v5 M-9 10 q9 9 18 0'),
      shock: '<circle cx="-10" cy="-4" r="7" fill="#fff" stroke="#222" stroke-width="2"/><circle cx="10" cy="-4" r="7" fill="#fff" stroke="#222" stroke-width="2"/><circle cx="-10" cy="-4" r="2" fill="#222"/><circle cx="10" cy="-4" r="2" fill="#222"/><ellipse cx="0" cy="15" rx="6" ry="8" fill="#222"/>',
      phew: l('M-15 -2 q5 5 10 0 M5 -2 q5 5 10 0 M-6 13 q6 5 12 0') + f('M24 -14 q-7 11 0 15 q7 -4 0 -15', '#9fd3f0', 2),
      sad: l('M-10 -4 v5 M10 -4 v5 M-8 15 q8 -8 16 0 M-16 -12 l10 -4 M16 -12 l-10 -4'), stern: l('M-17 -13 l12 5 M17 -13 l-12 5 M-10 -3 v4 M10 -3 v4 M-8 14 h16', 4),
      down: l('M-14 0 q5 4 9 0 M5 0 q5 4 9 0 M-6 15 h12') };
    const HEAD = (fc) => '<circle r="28" fill="' + SK + '" stroke="#222" stroke-width="3"/><path d="M-28 -4 q2 -30 28 -28 q26 -2 28 28 q-12 -14 -28 -14 q-16 0 -28 14" fill="#4a3424" stroke="#222" stroke-width="2"/>' + FACE[fc];
    const PH = '<rect x="-12" y="-21" width="24" height="42" rx="4" fill="#222"/><rect x="-9" y="-16" width="18" height="30" fill="#8fd0ee"/>';
    // 사람: (0,0)이 발. arm = 팔 그림
    const MAN = (c, fc, arm, leg) => l(leg || 'M-12 -42 L-14 0 M12 -42 L14 0', 10) + f('M-24 -102 q24 -12 48 0 l4 64 h-56 z', c) + (arm ? l(arm, 13) + l(arm, 8, SK) : '') + g(0, -134, 0, 1, HEAD(fc));
    // 큰 손: 팔이 왼쪽에서 오고 (0,0)이 손바닥. 휴대폰을 쥔 모양
    const FIST = (c, item) => f('M-200 -24 H-40 V24 H-200 z', c) + f('M-44 -22 q20 -14 40 -8 q16 4 14 24 q2 22 -16 26 q-24 4 -38 -10 z', SK) + (item || g(12, -8, 8, 2.5, PH)) + [-22, -8, 6, 20].map((y) => f('M-6 ' + (y - 6) + ' h26 q8 6 0 12 h-26 z', SK, 2.5)).join('') + f('M-18 -26 q20 -18 34 -8 q2 8 -8 10 q-14 2 -22 8 z', SK, 2.5);
    const FOC = (w, x, y, r, n, c) => Array.from({ length: n }, (_, i) => { const a = i * 2 * Math.PI / n, q = r + (i % 3) * 14, e = .016 + (i % 2) * .016; return '<path d="M' + (x + q * Math.cos(a)).toFixed(1) + ' ' + (y + q * Math.sin(a)).toFixed(1) + ' L' + (x + 420 * Math.cos(a - e)).toFixed(1) + ' ' + (y + 420 * Math.sin(a - e)).toFixed(1) + ' L' + (x + 420 * Math.cos(a + e)).toFixed(1) + ' ' + (y + 420 * Math.sin(a + e)).toFixed(1) + ' z" fill="' + (c || K) + '"/>'; }).join('');
    const SPD = (x, y, n, w) => Array.from({ length: n }, (_, i) => l('M' + (x + (i % 2) * 14) + ' ' + (y + i * 15) + ' h' + (w - (i % 3) * 14), 2 + (i % 2))).join('');
    const TBL = (x, y, w) => f('M' + x + ' ' + y + ' h' + w + ' v10 h-' + w + ' z', '#c9a171') + l('M' + (x + 12) + ' ' + (y + 10) + ' V240 M' + (x + w - 12) + ' ' + (y + 10) + ' V240', 6, '#8a6a48');
    const BUB = (x, y, w, v, z) => '<ellipse cx="' + x + '" cy="' + y + '" rx="' + w / 2 + '" ry="20" fill="#fff" stroke="#222" stroke-width="2.5"/>' + t(x, y + 6, z || 16, v);
    const CAR = (x, y, k) => g(x, y, 0, k, f('M-70 0 v-22 l26 -22 h56 l26 22 h32 v22 z', '#d8412f') + f('M-36 -24 l16 -14 h24 v14 z M10 -24 v-14 h6 l16 14 z', '#bfe6f5', 2) + '<circle cx="-38" cy="2" r="13" fill="#222"/><circle cx="42" cy="2" r="13" fill="#222"/>');
    const BUS = (x, y, k) => g(x, y, 0, k, f('M0 0 v-110 q0 -14 14 -14 h150 q14 0 14 14 v110 z', '#3a9a6a') + [14, 60, 106].map((q) => f('M' + q + ' -104 h36 v34 h-36 z', '#bfe6f5', 2.5)).join('') + f('M144 0 v-100 h24 v100 z', '#fffdf6', 2.5) + '<circle cx="36" cy="2" r="15" fill="#222"/><circle cx="118" cy="2" r="15" fill="#222"/>');
    const STAR = (x, y, r, c) => f(Array.from({ length: 10 }, (_, i) => { const q = -Math.PI / 2 + i * Math.PI / 5, d = i % 2 ? r * .45 : r; return (i ? 'L' : 'M') + (x + d * Math.cos(q)).toFixed(1) + ' ' + (y + d * Math.sin(q)).toFixed(1); }).join(' ') + ' z', c || '#f2b632');
    const CASTLE = (x, y, k, flag) => g(x, y, 0, k, f('M-60 0 v-70 h18 v12 h16 v-12 h16 v12 h20 v-12 h16 v12 h16 v-12 h18 v70 z', '#b9b4a6') + f('M-12 0 v-28 q12 -16 24 0 v28 z', '#4a3424') + l('M0 -60 v-62', 4) + f('M0 -122 l44 12 l-44 14 z', flag));
    const BEAR = (x, y, k) => g(x, y, 0, k, '<circle cx="-13" cy="-24" r="8" fill="#b9814a" stroke="#222" stroke-width="3"/><circle cx="13" cy="-24" r="8" fill="#b9814a" stroke="#222" stroke-width="3"/><circle cy="-10" r="20" fill="#b9814a" stroke="#222" stroke-width="3"/><circle cx="-7" cy="-13" r="2.5"/><circle cx="7" cy="-13" r="2.5"/>' + l('M-5 -2 q5 5 10 0', 2.5) + f('M-16 8 h32 l4 26 h-40 z', '#b9814a'));
    const EYE = (x, y, k) => g(x, y, 0, k, f('M-34 0 q34 -38 68 0 q-34 38 -68 0 z', '#fff') + '<circle r="15" fill="#4a7fb5" stroke="#222" stroke-width="3"/><circle r="6"/>');
    const BOOK = (x, y, k) => g(x, y, 0, k, f('M-30 -42 h60 v84 h-60 z', '#7a4a9a') + t(0, -10, 14, '비밀의', '#fff') + t(0, 12, 14, '문', '#fff'));
    const DARK = (w, c) => '<rect width="' + w + '" height="240" fill="' + (c || '#1b1d26') + '"/>';
    const ZZ = (x, y) => t(x, y, 18, 'z', '#555') + t(x + 14, y - 16, 24, 'z', '#555') + t(x + 32, y - 36, 30, 'Z', '#555');
    // 짧게 쓰는 부품: A 사람(바닥 240) · BK 책 · HND 왼쪽에서 온 펼친 손 · ARW 화살표 · BOXG 상자 · COIN 동전
    const A = (x, c, fc, arm, k, leg) => g(x, 240, 0, k || .88, MAN(c, fc, arm, leg));
    const BK = (x, y, k, c, r) => g(x, y, r || 0, k || 1, f('M-20 -26 h36 q6 0 6 6 v46 h-42 z', c || '#a84b40') + f('M-20 20 h42 v6 h-42 z', '#fff', 2) + l('M-10 -12 h20 M-10 -4 h14', 2, '#fff'));
    const HND = (x, y, k, c, flip) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (flip ? -1 : 1) * (k || 1) + ' ' + (k || 1) + ')">' + f('M-200 -20 H-50 V22 H-200 z', c) + f('M-52 -18 q24 -8 44 -4 l44 4 q8 5 0 10 h-30 q34 4 34 8 q0 8 -10 8 h-50 q-20 2 -32 10 z', SK) + '</g>';
    const ARW = (x1, y1, x2, y2, c, w) => { const a = Math.atan2(y2 - y1, x2 - x1), h = 14; return l('M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2 + ' M' + (x2 - h * Math.cos(a - .5)).toFixed(1) + ' ' + (y2 - h * Math.sin(a - .5)).toFixed(1) + ' L' + x2 + ' ' + y2 + ' L' + (x2 - h * Math.cos(a + .5)).toFixed(1) + ' ' + (y2 - h * Math.sin(a + .5)).toFixed(1), w || 4, c || '#888'); };
    const BOXG = (x, y, w, h, c) => f('M' + x + ' ' + y + ' h' + w + ' v' + h + ' h-' + w + ' z', c || '#c9a171');
    const COIN = (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 12) + '" fill="#f2b632" stroke="#222" stroke-width="3"/>' + t(x, y + (r || 12) * .4, (r || 12) * 1.1, '$');
    const GND = (w) => l('M0 238 H' + w, 2);
    // MIX: 동사 다섯의 맞히기 순서(장면 15개를 섞는다) · SHIFT 옆으로 옮겨 여러 번 · SUN · MOON · DOC 파일 · BULB 전구
    const MIX = (d) => [[4, 0], [1, 1], [2, 1], [0, 0], [3, 1], [4, 2], [1, 0], [2, 2], [0, 1], [3, 0], [4, 1], [1, 2], [0, 2], [3, 2], [2, 0]].map(([i, n]) => [d[i], n]);
    const SUN = (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#f2b632" stroke="#222" stroke-width="3"/>';
    const MOON = (x, y, k) => g(x, y, 0, k || 1, f('M6 -18 a20 20 0 1 0 8 34 a16 16 0 1 1 -8 -34', '#f2e6a0', 2.5));
    const DOC = (x, y, k, r) => g(x, y, r || 0, k || 1, f('M-20 -28 h28 l12 12 v44 h-40 z', '#fff') + l('M8 -28 v12 h12', 2.5) + l('M-12 -6 h24 M-12 4 h24 M-12 14 h16', 2.5, '#4a7fb5'));
    const BULB = (x, y, k) => g(x, y, 0, k || 1, f('M-20 -20 a24 24 0 1 1 40 0 q-8 12 -8 22 h-24 q0 -10 -8 -22 z', '#f2d34a') + f('M-11 4 h22 v12 h-22 z', '#999') + l('M0 -70 v-10 M-38 -58 l-8 -8 M38 -58 l8 -8', 3));
    const CLK = (x, y, r, c) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#fff" stroke="' + (c || K) + '" stroke-width="3"/>' + l('M' + x + ' ' + y + ' v-' + r * .65 + ' M' + x + ' ' + y + ' l' + r * .5 + ' ' + r * .2);
    // MIND 머릿속(옆얼굴 안의 방) · DRW 서랍 · BIRD 새 · PAINT 그림 액자 · BEYE 큰 눈(왼쪽에서 오른쪽을 봄)
    const MIND = (w, body, bg) => DARK(w, bg || '#f2f0ea') + f('M30 240 V200 q-22 -30 -20 -84 q6 -104 ' + w * .42 + ' -104 q' + w * .4 + ' 0 ' + w * .42 + ' 96 l18 34 q4 8 -10 10 l-8 2 q4 40 -30 40 h-40 v46 z', SK) + '<ellipse cx="' + w * .44 + '" cy="112" rx="' + w * .33 + '" ry="82" fill="#fffdf6" stroke="#222" stroke-width="3"/>' + body;
    const DRW = (x, y, w, h, open, v) => BOXG(x, y, w, h, '#c9a171') + (open ? BOXG(x - 4, y + 6, w + 8, h, '#e3c594') : '') + '<circle cx="' + (x + w / 2) + '" cy="' + (y + h / 2 + (open ? 8 : 0)) + '" r="4" fill="#7a4a2a"/>' + (v ? t(x + w / 2, y - 8, 15, v, '#d8412f') : '');
    const BIRD = (x, y, k, c, w) => g(x, y, 0, k || 1, f('M-26 4 q0 -26 28 -26 q14 0 16 12 l14 4 l-12 6 q-4 20 -26 20 q-20 0 -20 -16 z', c || '#8a6a3a') + f('M-16 0 q14 -8 22 4 q-10 12 -22 -4', w || '#b9905a', 2.5) + '<circle cx="10" cy="-10" r="3"/>' + l('M-6 20 v10 M4 20 v10 M-26 4 l-14 8', 3));
    const PAINT = (x, y, k) => g(x, y, 0, k || 1, f('M-50 -38 h100 v76 h-100 z', '#c9a171') + f('M-42 -30 h84 v60 h-84 z', '#bfe6f5', 2) + f('M-42 30 l26 -34 l20 22 l14 -14 l24 26 z', '#3a9a6a', 2) + '<circle cx="24" cy="-14" r="9" fill="#f2b632"/>');
    const BEYE = (x, y, k, sq) => g(x, y, 0, k || 1, f('M-50 0 q50 -' + (sq ? 14 : 56) + ' 100 0 q-50 ' + (sq ? 14 : 56) + ' -100 0 z', '#fff') + '<circle cx="12" r="' + (sq ? 7 : 20) + '" fill="#4a7fb5" stroke="#222" stroke-width="3"/><circle cx="14" r="' + (sq ? 4 : 9) + '"/>' + l('M-54 -' + (sq ? 22 : 40) + ' q54 -' + (sq ? 6 : 30) + ' 108 0', 5));
    const TREEC = (x, k) => g(x, 238, 0, k || 1, l('M0 0 V-90', 12, '#7a5a3a') + '<circle cy="-130" r="62" fill="#3a9a6a" stroke="#222" stroke-width="3"/>');
