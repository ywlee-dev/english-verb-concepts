  // ── 부사 방 공통 장비 (tools/adverb.js). 페이지는 PAGE 데이터를 만들고 adverbPage(PAGE)를 부른다 ──
  // PAGE: { start, dial?, groups: [{ name, items: [{ v, k, base?, core?, from?, en, note, pic(), ex?: [카드1, 카드2, 대신, 잃는 것, 이유] }] }], q: [[질문, 답]], body: [..], check: [..] }
  ROLE.d = ['부사', 'var(--accent)', true]; ROLE.a = ['형용사', 'var(--bad)']; ROLE.b = ['be', 'var(--line)']; ROLE.m = ['조동사', 'var(--line)'];
  // 부품 (바닥 y = 240, 장면 x = 30~420. 좌표는 그림용)
  const FACES = { sad: 'M-7 -92 q7 -7 14 0', flat: 'M-6 -94 h12', smile: 'M-8 -97 q8 8 16 0', o: 'M-4 -94 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0', shut: 'M-4 -94 h8' };
  const ARMS = { down: 'M-18 -62 L-26 -30 M18 -62 L26 -30', up: 'M-18 -62 L-36 -86 M18 -62 L36 -86', fwd: 'M18 -62 L46 -56 M-18 -62 L-24 -32', both: 'M18 -62 L46 -56 M-10 -54 L42 -44', hip: 'M-18 -62 L-34 -48 L-20 -36 M18 -62 L34 -48 L20 -36', hug: 'M-18 -62 L8 -46 M18 -62 L-8 -46', point: 'M18 -66 L50 -82 M-18 -62 L-26 -30', bow: 'M-18 -62 L-4 -36 M18 -62 L4 -36' };
  const MAN = (x, o) => { o = Object.assign({ y: 240, f: 'flat', a: 'down', c: 'var(--sleeve)', r: 0, s: 1 }, o);
    return '<g transform="translate(' + x + ' ' + o.y + ') rotate(' + o.r + ') scale(' + o.s + ')"><path d="M-8 -22 L' + (o.run ? '-22 -4' : '-8 0') + ' M8 -22 L' + (o.run ? '24 -6' : '8 0') + '" stroke="var(--obj-line)" stroke-width="7" stroke-linecap="round"/><rect x="-20" y="-70" width="40" height="50" rx="11" fill="' + o.c + '"/>' +
      '<circle cx="0" cy="-100" r="23" fill="var(--skin)" stroke="var(--obj-line)"/><circle cx="-7" cy="-104" r="2.3" fill="#333"/><circle cx="8" cy="-104" r="2.3" fill="#333"/><path d="' + FACES[o.f] + '" fill="none" stroke="#333" stroke-width="2.3" stroke-linecap="round"/>' +
      '<path d="' + ARMS[o.a] + '" fill="none" stroke="var(--skin)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g>'; };
  const LN = (d, c, w, ex) => '<path d="' + d + '" fill="none" stroke="' + (c || 'var(--obj-line)') + '" stroke-width="' + (w || 2) + '" stroke-linecap="round" stroke-linejoin="round"' + (ex || '') + '/>';
  const RC = (x, y, w, h, f, c, r) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (r || 3) + '" fill="' + (f || 'var(--bg)') + '" stroke="' + (c || 'var(--obj-line)') + '" stroke-width="1.5"/>';
  const CR = (x, y, r, f, c) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (f || 'var(--bg)') + '" stroke="' + (c || 'var(--obj-line)') + '" stroke-width="1.5"/>';
  const GRD = LN('M30 240 H420', 'var(--obj-line)', 1);
  // 말풍선: 글자 크기 s가 목소리 크기
  const SAYB = (x, y, t, s, c) => { s = s || 14; const w = t.length * s * 0.98 + 22, h = s + 18; return RC(x - w / 2, y - h / 2, w, h, 'var(--bg)', c || 'var(--obj-line)', 12) + tx(x, y + s * 0.36, s, t, c || 'var(--text)', ' font-weight="600"'); };
  const FAST = (x, y, n) => Array.from({ length: n || 3 }, (_, i) => LN('M' + (x - (i % 2) * 12) + ' ' + (y + i * 18) + ' h-40', 'var(--accent)', 3)).join('');
  const SOUND = (x, y, n, c) => Array.from({ length: n }, (_, i) => LN('M' + (x + i * 13) + ' ' + (y - 8 - i * 8) + ' q' + (8 + i * 4) + ' ' + (8 + i * 8) + ' 0 ' + (16 + i * 16), c || 'var(--accent)', 3)).join('');
  const NOTE = (x, y, s, op) => '<g opacity="' + (op || 1) + '">' + tx(x, y, s, '♪', 'var(--accent)', ' font-weight="700"') + '</g>';
  const CLOCK = (x, y, r, a) => CR(x, y, r) + LN('M' + x + ' ' + y + ' V' + (y - r * 0.65) + ' M' + x + ' ' + y + ' l' + r * 0.5 * Math.cos(a || 0) + ' ' + r * 0.5 * Math.sin(a || 0), 'var(--accent)', 2.5);
  const PAPER = (x, y, w, h, n) => RC(x, y, w, h, 'var(--card)') + Array.from({ length: n || 4 }, (_, i) => LN('M' + (x + 8) + ' ' + (y + 14 + i * 13) + ' h' + (w - 16 - (i % 3) * 8), 'var(--fog)', 2)).join('');
  const DOOR = (x, open) => RC(x, 100, 70, 140, 'var(--wood)') + (open ? '<path d="M' + x + ' 100 l-' + open + ' 14 v132 l' + open + ' -6 z" fill="var(--gold)" stroke="var(--obj-line)"/>' : CR(x + 58, 172, 4, 'var(--gold)'));
  const TREE = (x, r) => '<g transform="rotate(' + (r || 0) + ' ' + x + ' 240)">' + LN('M' + x + ' 240 V160', 'var(--wood)', 10) + '<circle cx="' + x + '" cy="132" r="40" fill="var(--ok)" opacity=".6"/></g>';
  const GLASS = (x, y, water) => (water ? '<path d="M' + (x - 11) + ' ' + (y - 24) + ' h22 l-3 24 h-16 z" fill="var(--water)"/>' : '') + LN('M' + (x - 14) + ' ' + (y - 38) + ' l5 38 h18 l5 -38', 'var(--obj-line)', 2.5);
  const CROSS = (x, y, r) => LN('M' + (x - r) + ' ' + (y - r) + ' l' + 2 * r + ' ' + 2 * r + ' m0 ' + -2 * r + ' l' + -2 * r + ' ' + 2 * r, 'var(--bad)', 4);
  const HEART = (x, y) => '<path d="M' + x + ' ' + y + ' c-18 -12 -14 -28 -4 -26 q3 1 4 5 q1 -4 4 -5 c10 -2 14 14 -4 26" fill="var(--bad)"/>';
  const DESK = (x, w, y) => RC(x, y || 180, w, 9, 'var(--wood)', 'var(--wood)') + LN('M' + (x + 12) + ' ' + ((y || 180) + 9) + ' V240 M' + (x + w - 12) + ' ' + ((y || 180) + 9) + ' V240', 'var(--wood)', 5);

  // 정도 막대: v = 채운 정도 0~1 (그림용, 퍼센트 아님), m = 적정선 자리
  const BARX = (y, v, c, m) => RC(50, y, 350, 30, 'var(--bg)', 'var(--line)', 8) + (v ? RC(50, y, 350 * v, 30, c || 'var(--accent)', 'none', 8) : '') + (m ? LN('M' + (50 + 350 * m) + ' ' + (y - 14) + ' v58', 'var(--ok)', 3) : '');
  const CAPT = (t, y, c) => tx(226, y || 216, 13, t, c || 'var(--muted)');
  const TL = (y) => LN('M40 ' + y + ' H412', 'var(--line)', 4);
  const NOW = (x, y, t) => LN('M' + x + ' ' + (y - 34) + ' v68', 'var(--accent2)', 2, ' stroke-dasharray="4 4"') + tx(x, y - 44, 12, t || '지금', 'var(--accent2)', ' font-weight="600"');
  const MEET = (b) => FL + TB(370, 560, 108) + b + P(310, 150, 1.4, 'var(--ok)') + P(610, 150, 1.4, 'var(--sleeve)');

  function adverbPage(PG) {
    const all = PG.groups.flatMap((g, gi) => g.items.map((it) => Object.assign({ g, gi }, it)));
    let cur = Math.max(0, all.findIndex((w) => w.v === PG.start));
    const n0 = PG.groups[0].items.length;
    const draw = () => {
      const w = all[cur], cx = 548;
      let s = '<g data-pic="' + w.v + '">' + w.pic() + '</g><line x1="434" y1="24" x2="434" y2="276" stroke="var(--line)"/>';
      if (w.core) s += tx(cx, 40, 12, '기본 그림', 'var(--muted)') + RC(448, 48, 200, 42, 'var(--bg)', 'var(--line)', 8) + tx(cx, 75, 16, w.base, 'var(--text)', ' font-weight="600"') +
        tx(cx, 110, 17, '+', 'var(--muted)') + RC(448, 118, 200, 42, 'var(--bg)', 'var(--accent)', 8) + tx(cx, 144, 14, w.core, 'var(--text)', ' font-weight="600"') + tx(cx, 182, 17, '=', 'var(--muted)');
      else s += tx(cx, 110, 13, '기본 그림', 'var(--muted)') + tx(cx, 138, 14, w.g.name, 'var(--text)', ' font-weight="600"') + tx(cx, 174, 17, '↓', 'var(--muted)');
      s += RC(448, 192, 200, 64, 'var(--chip-on)', 'var(--accent)', 10) + tx(cx, 220, w.v.length > 12 ? 18 : 21, w.v.toUpperCase(), 'var(--accent)', ' font-weight="700"') + tx(cx, 244, 13, w.k, 'var(--text)');
      $('dualScene').innerHTML = s;
      $('dualSay').innerHTML = '<span class="en">' + w.en + '</span><button type="button" class="speak" style="margin:0 8px;padding:2px 8px" data-word="' + w.en.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;') + '" title="이 문장 듣기">🔊</button><br>' + w.note + (w.from ? '<br><span style="color:var(--muted)">' + w.from + '</span>' : '');
      if (PG.dial && cur < n0) { $('dial').value = cur; $('dial').setAttribute('aria-valuetext', w.v); }
      document.querySelectorAll('button[data-i]').forEach((b) => b.setAttribute('aria-pressed', +b.dataset.i === cur));
    };
    const box = $('dualBtns'); let i = 0;
    PG.groups.forEach((g) => {
      const row = document.createElement('div'); row.className = 'buttons'; row.innerHTML = '<span class="cap">' + g.name + '</span>';
      g.items.forEach((w) => { const b = document.createElement('button'), k = i++; b.textContent = w.v; b.dataset.i = k; b.addEventListener('click', () => { cur = k; draw(); }); row.appendChild(b); });
      box.appendChild(row);
    });
    if (PG.dial) {
      const l = document.createElement('label'); l.className = 'dial';
      l.innerHTML = '<span>' + all[0].v + '</span><input id="dial" type="range" min="0" max="' + (n0 - 1) + '" step="1" aria-label="얼마나 자주"><span>' + all[n0 - 1].v + '</span>';
      box.before(l); $('dial').addEventListener('input', () => { cur = +$('dial').value; draw(); });
    }
    draw();
    if ($('formulaBox')) $('formulaBox').innerHTML = all.filter((w) => w.core).map((w) => '<span class="r">' + w.base + '</span><span class="op">+</span><span>' + w.core + '</span><span class="op">=</span><span class="v">' + w.v.toUpperCase() + '</span>').join('');
    $('qBox').innerHTML = '<tr><th>질문</th><th>답 → 낱말</th></tr>' + PG.q.map((r) => '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>').join('');
    $('bodyBox').innerHTML = PG.body.map((b) => '<li>' + b + '</li>').join('');
    $('checkBox').innerHTML = ['0+절 대화와 0절의 △ 판정은 노트에 없는 작문이다.', '*가 붙은 기본 낱말은 낱말 노트가 따로 없어 발음을 사전식으로 적었다. 기본 낱말 예문과 3절 자리 설명도 노트에 없다.'].concat(PG.check || []).map((b) => '<li>' + b + '</li>').join('');
    // 0절 카드: ex가 있는 낱말. 그림은 위 장면을 줄여 쓴다
    return { noun: '부사가', color: 'var(--accent)', outColor: 'var(--accent2)', intro: '카드마다 말하고 싶은 그림이 하나씩 있다. 하나를 빼고 다른 말로 대신하면 무엇이 사라지는지 보인다.',
      cards: all.filter((w) => w.ex).slice(0, 6).map((w) => ({ id: w.v, v: w.v, t: [w.ex[0], w.ex[1]], instead: w.ex[2] + ' △', lost: w.ex[3], why: w.ex[4], icon: '<g transform="scale(.22) translate(-225 -150)">' + w.pic().replace(/<text[\s\S]*?<\/text>/g, '') + '</g>' })) };
  }
