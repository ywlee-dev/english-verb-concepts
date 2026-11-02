  const $ = (id) => document.getElementById(id);
  const tx = (x, y, s, txt, fill, extra, anchor) => '<text x="' + x + '" y="' + y + '" font-size="' + s + '" text-anchor="' + (anchor || 'middle') + '" fill="' + (fill || 'var(--text)') + '"' + (extra || '') + '>' + txt + '</text>';
  const step = (d, body) => '<g class="step" style="animation-delay:' + d + 's">' + body + '</g>';
  const tick = (x, y) => '<path d="M' + x + ' ' + y + ' l7 7 l14 -16" fill="none" stroke="var(--ok)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>';
  const arrow = (x1, x2, y, c, w, dash) => '<path d="M' + x1 + ' ' + y + ' H' + x2 + ' m-8 -6 l8 6 l-8 6" fill="none" stroke="' + c + '" stroke-width="' + w + '" stroke-linecap="round" stroke-linejoin="round"' + (dash ? ' stroke-dasharray="5 5"' : '') + '/>';
  // 부품 (parts.js에서 복사). 손: (0,0)이 손끝, rotate(-90)이면 손바닥이 오른쪽. 가리키는 손: rotate(90)이면 손가락이 오른쪽
  const HAND = '<rect x="-9" y="-78" width="18" height="52" rx="4" fill="var(--sleeve)"/>' +
    '<path d="M-13 -30 h26 v18 a13 13 0 0 1 -26 0 z" fill="var(--skin)" stroke="var(--obj-line)" stroke-width="1"/>' +
    '<path d="M-5 -6 v6 M1 -5 v6 M7 -7 v5" stroke="var(--obj-line)" stroke-width="1" stroke-linecap="round"/>';
  const POINTER = '<rect x="-8" y="40" width="20" height="56" rx="4" fill="var(--sleeve)"/>' +
    '<rect x="-12" y="16" width="26" height="28" rx="9" fill="var(--skin)" stroke="var(--obj-line)" stroke-width="1"/>' +
    '<rect x="-4" y="0" width="8" height="22" rx="4" fill="var(--skin)" stroke="var(--obj-line)" stroke-width="1"/>';
  const at = (x, y, r, body) => '<g transform="translate(' + x + ' ' + y + ') rotate(' + r + ')">' + body + '</g>';
  const table = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="10" rx="2" fill="var(--wood)"/>' +
    '<path d="M' + (x + 15) + ' ' + (y + 10) + ' v30 M' + (x + w - 15) + ' ' + (y + 10) + ' v30" stroke="var(--wood)" stroke-width="5"/>';
  const FLOOR = '<line x1="244" y1="240" x2="664" y2="240" stroke="var(--obj-line)" stroke-width="1"/>';

  // 0절 카드 그림 (01·03·05·06·07과 같은 함수)
  function existChart(E, gone) {
    const tx = (x, y, s, t, fill, extra) => '<text x="' + x + '" y="' + y + '" font-size="' + s + '" text-anchor="middle" fill="' + fill + '"' + (extra || '') + '>' + t + '</text>';
    const G = E.cards.find((c) => c.id === gone);
    let s = tx(340, 24, 13, G ? G.v + ' 없이 말하면 — 이 그림을 그릴 낱말이 빈다' : '말하고 싶은 그림마다 그것을 그리는 동사가 있다', G ? 'var(--bad)' : 'var(--muted)', ' font-weight="600"');
    E.cards.forEach((c, i) => {
      const x = 15 + i * 110, hole = c.id === gone, stroke = hole ? 'var(--bad)' : c.out ? E.outColor : 'var(--line)';
      s += '<rect x="' + x + '" y="38" width="100" height="126" rx="10" fill="var(--bg)" stroke="' + stroke + '" stroke-width="' + (hole ? 2 : 1.2) + '"' + (hole || c.out ? ' stroke-dasharray="5 4"' : '') + '/>' +
        '<g transform="translate(' + (x + 50) + ' 82)" opacity="' + (hole ? 0.15 : 1) + '">' + c.icon + '</g>' +
        (hole ? tx(x + 50, 98, 40, '?', 'var(--bad)', ' font-weight="700"') : '') +
        tx(x + 50, 134, 12, c.t[0], hole ? 'var(--muted)' : 'var(--text)', ' font-weight="600"') + tx(x + 50, 152, 12, c.t[1], 'var(--muted)');
      const cs = hole ? 'var(--bad)' : c.out ? E.outColor : E.color;
      s += '<rect x="' + (x + 5) + '" y="176" width="90" height="26" rx="13" fill="' + (hole ? 'var(--bg)' : 'var(--chip-on)') + '" stroke="' + cs + '"' + (c.out ? ' stroke-dasharray="4 3"' : '') + '/>' +
        tx(x + 50, 194, 13, c.v, hole ? 'var(--muted)' : 'var(--text)', ' font-weight="700"') +
        (hole ? '<line x1="' + (x + 14) + '" y1="189" x2="' + (x + 86) + '" y2="189" stroke="var(--bad)" stroke-width="2"/>' : '') +
        (c.out ? tx(x + 50, 218, 11, '묶음 밖 이웃', E.outColor) : '');
    });
    if (G) s += tx(340, 248, 15, '대신 말하면: ' + G.instead, 'var(--bad)', ' font-weight="500"');
    const say = G ? '<b>' + G.v + ' 없이</b> 이 그림을 말하려면 <span class="en">' + G.instead + '</span><br>' + G.lost + '<br>그래서 이 낱말이 있다 — <b>' + G.v + '</b>: ' + G.why : E.intro;
    return [s, say];
  }

  // 4절 질문 흐름 (같은 함수)
  function flowChart(F, pick) {
    const all = Object.assign({}, F.nodes, F.leaves), up = {}, H = 44;
    F.edges.forEach((e) => { up[e[1]] = e; });
    const path = [];
    for (let k = pick; up[k]; k = up[k][0]) path.unshift(up[k]);
    const onE = new Set(path), onN = new Set(path.map((e) => e[0]));
    const tx = (x, y, size, txt, fill, extra, anchor) => '<text x="' + x + '" y="' + y + '" font-size="' + size + '" text-anchor="' + (anchor || 'middle') + '" fill="' + fill + '"' + (extra || '') + '>' + txt + '</text>';
    // out = 묶음 밖으로 나가는 문 (점선, 다른 색)
    const box = (n, on, leaf) => '<rect x="' + (n.x - n.w / 2) + '" y="' + (n.y - H / 2) + '" width="' + n.w + '" height="' + H + '" rx="8" fill="' + (leaf && on ? 'var(--chip-on)' : 'var(--bg)') + '" stroke="' + (n.out ? 'var(--accent2)' : on ? F.color : 'var(--line)') + '" stroke-width="' + (on ? 2 : 1) + '"' + (n.out ? ' stroke-dasharray="5 4"' : '') + '/>';
    let s = '';
    // 묶음 테두리: 같은 BASIC을 가진 동사들이 이 안에 있다
    if (F.region) { const r = F.region; s += '<rect x="' + r.x + '" y="' + r.y + '" width="' + r.w + '" height="' + r.h + '" rx="14" fill="none" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="6 5" opacity=".8"/>' + tx(r.at[0], r.at[1], 11, r.label, 'var(--muted)', ' font-weight="600"', 'start'); }
    F.segs.forEach(([x1, x2, name, key]) => {
      const hi = F.leaves[pick].seg === key;
      s += '<rect x="' + x1 + '" y="' + F.segY + '" width="' + (x2 - x1) + '" height="22" rx="4" fill="' + (hi ? 'var(--chip-on)' : 'var(--bg)') + '" stroke="' + (hi ? F.color : 'var(--line)') + '"/>' +
        tx((x1 + x2) / 2, F.segY + 15, 12, name, hi ? 'var(--text)' : 'var(--muted)', hi ? ' font-weight="600"' : '');
    });
    s += tx(16, 344, 11, '← 동작(방식) 쪽', 'var(--muted)', '', 'start') + tx(664, 344, 11, '상태(결과) 쪽 →', 'var(--muted)', '', 'end');
    F.edges.forEach((e) => {
      const [a, b, , side, at, dash] = e, A = all[a], B = all[b], hi = onE.has(e), by = B.y - H / 2;
      const d = B.y === A.y ? 'M' + (A.x + A.w / 2) + ' ' + A.y + ' H' + (B.x - B.w / 2)
        : side === 'left' ? 'M' + (A.x - A.w / 2) + ' ' + A.y + ' H' + B.x + ' V' + by
        : side === 'right' ? 'M' + (A.x + A.w / 2) + ' ' + A.y + ' H' + B.x + ' V' + by
        : 'M' + A.x + ' ' + (A.y + H / 2) + ' V' + ((A.y + H / 2 + by) / 2) + ' H' + B.x + ' V' + by;
      s += '<path d="' + d + '" fill="none" stroke="' + (hi ? F.color : 'var(--line)') + '" stroke-width="' + (hi ? 3 : 1.5) + '"' + (dash ? ' stroke-dasharray="5 4"' : '') + '/>';
      if (at) s += tx(at[0], at[1], 12, e[2], hi ? F.color : 'var(--muted)', hi ? ' font-weight="600"' : '', at[2]);
    });
    Object.entries(F.nodes).forEach(([k, n]) => {
      const on = onN.has(k);
      s += box(n, on) + tx(n.x, n.y + (n.sub ? -3 : 5), 14, n.t, on ? 'var(--text)' : 'var(--muted)', ' font-weight="600"') + (n.sub ? tx(n.x, n.y + 14, 11, n.sub, 'var(--muted)') : '');
    });
    Object.keys(F.leaves).forEach((k) => {
      const n = F.leaves[k], on = k === pick;
      s += '<g data-leaf="' + k + '" style="cursor:pointer">' + box(n, on, true) + tx(n.x, n.y - 2, 15, n.v, on ? (n.out ? 'var(--accent2)' : F.color) : 'var(--text)', ' font-weight="700"') + tx(n.x, n.y + 14, 11, n.sub, 'var(--muted)') + '</g>';
    });
    const say = path.map((e) => '<b>' + all[e[0]].t + '</b> → ' + e[2]).join('<br>') + '<br>⇒ ' + F.leaves[pick].say;
    return [s, say];
  }

  // 5절 낱말 역할 = [이름, 테두리색, 강조, 점선]
  const ROLE = { s: ['주어', 'var(--line)'], v: ['동사', 'var(--line)'], o: ['목적어', 'var(--accent)', true], r: ['결과·방향', 'var(--accent2)', false, true], x: ['', 'var(--line)'] };
  // 낱말 상자 한 줄 (01·02·03·05와 같은 그림). 글자 폭은 눈대중(그림용): 19px 글꼴에서 글자당 10.5px, 역할 이름은 12px 글꼴에서 글자당 12px
  const wordRow = (words, y, good) => {
    let x = 70, s = tx(34, y + 7, 26, good ? '✓' : '✗', good ? 'var(--ok)' : 'var(--bad)', ' font-weight="700"');
    words.forEach(([w, r]) => {
      const [name, stroke, hi, dash] = ROLE[r], wd = Math.max(Math.round(w.length * 10.5 + 22), name.length * 12 + 12);
      s += '<rect x="' + x + '" y="' + (y - 18) + '" width="' + wd + '" height="34" rx="7" fill="' + (hi ? 'var(--chip-on)' : 'var(--bg)') + '" stroke="' + stroke + '" stroke-width="1.5"' + (dash ? ' stroke-dasharray="4 3"' : '') + '/>' +
        tx(x + wd / 2, y + 6, 19, w, good ? 'var(--text)' : 'var(--muted)', hi || r === 'v' ? ' font-weight="600"' : '') +
        (name ? tx(x + wd / 2, y - 25, 12, name, 'var(--muted)') : '');
      x += wd + 10;
    });
    if (!good) s += '<line x1="66" y1="' + y + '" x2="' + (x - 6) + '" y2="' + y + '" stroke="var(--bad)" stroke-width="2.5" opacity=".8"/>';
    return s;
  };

  // ── 0+절: 이런 상황에서. 장소 그림(좌표는 그림용, 바닥 y = 150) + 대화 ──
  const AC = 'var(--accent, #D85A30)', A2 = 'var(--accent2, #BA7517)', FOG = 'var(--fog, #b9b7af)', SL = 'var(--sleeve, #7f9cc0)',
    OKC = 'var(--ok, #1D9E75)', BAD = 'var(--bad, #C0392B)', OL = 'var(--obj-line)', MU = 'var(--muted)', CARD = 'var(--card)', BG = 'var(--bg)';
  const T = (x, y, s, t, f, ex, a) => '<text x="' + x + '" y="' + y + '" font-size="' + s + '" text-anchor="' + (a || 'middle') + '" fill="' + (f || 'var(--text)') + '"' + (ex || '') + '>' + t + '</text>';
  const L = (x, y, t) => T(x, y, 11, t, MU);
  const ST = (d, b) => '<g class="step" style="animation-delay:' + d + 's">' + b + '</g>';
  // 사람: (x, y)가 발. 머리 r11 · 몸 37 (s배)
  const P = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><circle cx="0" cy="-50" r="11" fill="var(--skin, #f2c9a0)" stroke="' + OL + '"/><rect x="-12" y="-37" width="24" height="37" rx="9" fill="' + c + '"/></g>';
  const FL = '<line x1="150" y1="150" x2="670" y2="150" stroke="var(--line)" stroke-width="2"/>';
  const TB = (x1, x2, y) => '<rect x="' + x1 + '" y="' + y + '" width="' + (x2 - x1) + '" height="7" rx="2" fill="' + OL + '"/><path d="M' + (x1 + 10) + ' ' + (y + 7) + ' V150 M' + (x2 - 10) + ' ' + (y + 7) + ' V150" stroke="' + OL + '" stroke-width="3"/>';
  const BX = (x, y, w, h, f) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="3" fill="' + (f || CARD) + '" stroke="' + OL + '" stroke-width="1.5"/>';
  const Q = (x, y, t) => '<rect x="' + (x - 13) + '" y="' + (y - 14) + '" width="26" height="22" rx="8" fill="' + CARD + '" stroke="var(--line)"/>' + T(x, y + 2, 13, t, MU, ' font-weight="700"');
  const AR = (x1, y1, x2, y2, c, w, dash) => { const a = Math.atan2(y2 - y1, x2 - x1), h = 7;
    return '<path d="M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2 + ' M' + (x2 - h * Math.cos(a - .5)) + ' ' + (y2 - h * Math.sin(a - .5)) + ' L' + x2 + ' ' + y2 + ' L' + (x2 - h * Math.cos(a + .5)) + ' ' + (y2 - h * Math.sin(a + .5)) + '" fill="none" stroke="' + c + '" stroke-width="' + (w || 2) + '" stroke-linecap="round"' + (dash ? ' stroke-dasharray="5 5"' : '') + '/>'; };
  const LOCK = (x, y, op) => '<g' + (op ? ' opacity="' + op + '"' : '') + '><path d="M' + (x - 5) + ' ' + (y - 4) + ' v-5 a5 5 0 0 1 10 0 v5" fill="none" stroke="' + A2 + '" stroke-width="2.5"/><rect x="' + (x - 8) + '" y="' + (y - 4) + '" width="16" height="13" rx="2" fill="' + A2 + '"/></g>';
  const CAR = (x, win) => '<path d="M' + x + ' 138 v-24 l30 -26 h100 l30 26 h50 v24 z" fill="' + CARD + '" stroke="' + OL + '" stroke-width="1.5"/>' +
    '<path d="M' + (x + 38) + ' 112 l18 -18 h30 v18 z M' + (x + 94) + ' 112 v-18 h30 l18 18 z" fill="' + (win || BG) + '" stroke="' + OL + '"/>' +
    '<circle cx="' + (x + 40) + '" cy="140" r="11" fill="' + OL + '"/><circle cx="' + (x + 160) + '" cy="140" r="11" fill="' + OL + '"/>';
  // VERB: <b>PUSH 묶음 동사</b>가
  // CHECK: 0+절의 장소별 대화는 노트에 없는 작문이다. thrust는 회화에서 드물어 장면을 넣지 않았다. 자연스러운지 사전 예문으로 확인할 것.

  // 발음 버튼·대화 🔊: 브라우저에 영어 음성이 있으면 data-word를 읽어 주고, 없으면 🔊를 숨긴다
  (function () {
    const ok = 'speechSynthesis' in window && typeof SpeechSynthesisUtterance === 'function';
    if (!ok) {
      document.querySelectorAll('.pron .spk').forEach((e) => e.remove());
      document.querySelectorAll('.pron button').forEach((b) => { b.disabled = true; });
      const st = document.createElement('style'); st.textContent = 'button.speak { display: none; }'; document.head.appendChild(st);
      return;
    }
    document.addEventListener('click', (e) => {
      const b = e.target.closest('.pron button, button.speak');
      if (!b) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(b.dataset.word);
      u.lang = 'en-US'; u.rate = 0.85;
      speechSynthesis.speak(u);
    });
  })();
