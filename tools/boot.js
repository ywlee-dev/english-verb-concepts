  // 페이지 데이터(TOP · EXIST · SCENES · FLOW · SLOTS)가 있으면 그 칸을 그린다. 없는 칸은 건너뛴다
  // TOP: { first, keep, keepSay, chips, chipTo, hows: { 키: { btn, how, verb, chips, target, result, pic(), say } } }
  if (typeof TOP !== 'undefined') {
    let how = TOP.first || Object.keys(TOP.hows)[0];
    const drawTop = () => {
      const H = TOP.hows[how];
      $('scene').innerHTML = '<g data-scene="' + how + '">' + H.pic() + '</g>';
      $('howLabel').textContent = H.how;
      $('verbLabel').textContent = H.verb;
      $('targetLabel').textContent = H.target;
      $('resultLabel').textContent = H.result;
      $('say').innerHTML = H.say;
      document.querySelectorAll('#howBtns button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.how === how));
      document.querySelectorAll('.chip[data-v]').forEach((c) => c.classList.toggle('on', H.chips.includes(c.dataset.v)));
    };
    Object.keys(TOP.hows).forEach((k) => {
      const b = document.createElement('button');
      b.textContent = TOP.hows[k].btn; b.dataset.how = k;
      b.addEventListener('click', () => { how = k; drawTop(); });
      $('howBtns').appendChild(b);
    });
    // 동사 칩: 누르면 그 장면으로. keep(묶음의 기본 동사)은 다른 장면에서도 맞으니 장면은 그대로 두고 설명만 더한다
    const chipBox = $('chipBox');
    TOP.chips.forEach((v) => {
      const c = document.createElement('button'); c.className = 'chip'; c.dataset.v = v; c.textContent = v;
      c.addEventListener('click', () => {
        const k = (TOP.chipTo && TOP.chipTo[v]) || v.toLowerCase().replace(/ /g, ''), keep = v === TOP.keep && how !== k;
        if (!keep) how = k;
        drawTop();
        if (keep) $('say').innerHTML += '<br>' + TOP.keepSay;
      });
      chipBox.insertBefore(c, $('chipExit'));
    });
    if (!TOP.out || !TOP.out.length) $('chipExit').remove();
    else TOP.out.forEach(([label, href]) => { const a = document.createElement('a'); a.className = 'chip out'; a.href = href; a.textContent = label; chipBox.appendChild(a); });
    drawTop();
  }

  if (typeof EXIST !== 'undefined') {
    let gone = '';
    const drawExist = () => {
      const [svg, say] = existChart(EXIST, gone);
      $('existScene').innerHTML = '<g data-gone="' + (gone || 'none') + '">' + svg + '</g>';
      $('esay').innerHTML = say;
      document.querySelectorAll('#existBtns button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.gone === gone));
    };
    [['', '모두 있음']].concat(EXIST.cards.map((c) => [c.id, c.v + ' 없이'])).forEach(([id, label]) => {
      const b = document.createElement('button');
      b.textContent = label; b.dataset.gone = id;
      b.addEventListener('click', () => { gone = id; drawExist(); });
      $('existBtns').appendChild(b);
    });
    drawExist();
  }

  // SCENES: { 키: { btn, place, pic(), lines: [[누가, 영어(<b>동사</b>), 한국어, 나?]], say } }
  if (typeof SCENES !== 'undefined') {
    const place = (t) => T(16, 26, 13, t, MU, ' font-weight="600"', 'start');
    let scene = Object.keys(SCENES)[0];
    const drawScene = () => {
      const c = SCENES[scene];
      $('sceneScene').innerHTML = '<g data-scene="' + scene + '">' + place(c.place) + c.pic() + '</g>';
      $('sceneTalk').innerHTML = c.lines.map(([who, en, ko, me]) =>
        '<div class="line' + (me ? ' me' : '') + '"><span class="who">' + who + '</span><div class="bubble"><span class="en">' + en + '</span><span class="ko">' + ko + '</span></div>' +
        '<button type="button" class="speak" data-word="' + en.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;') + '" title="이 줄 듣기">🔊</button></div>').join('');
      $('ssay').innerHTML = c.say;
      document.querySelectorAll('button[data-scene]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.scene === scene));
    };
    Object.entries(SCENES).forEach(([id, c]) => {
      const b = document.createElement('button'); b.type = 'button'; b.dataset.scene = id; b.textContent = c.btn;
      b.addEventListener('click', () => { scene = id; drawScene(); }); $('sceneBtns').appendChild(b);
    });
    drawScene();
  }

  if (typeof FLOW !== 'undefined') {
    let pick = FLOW.first || Object.keys(FLOW.leaves)[0];
    const drawFlow = () => {
      const [svg, say] = flowChart(FLOW, pick);
      $('flowScene').innerHTML = svg;
      $('fsay').innerHTML = say;
      document.querySelectorAll('#flowBtns button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.leaf === pick));
    };
    Object.keys(FLOW.leaves).forEach((k) => {
      const b = document.createElement('button');
      b.textContent = '▸ ' + FLOW.leaves[k].v; b.dataset.leaf = k;
      b.addEventListener('click', () => { pick = k; drawFlow(); });
      $('flowBtns').appendChild(b);
    });
    $('flowScene').addEventListener('click', (ev) => { const g = ev.target.closest('[data-leaf]'); if (g) { pick = g.dataset.leaf; drawFlow(); } });
    drawFlow();
  }

  // SLOTS: { slots: { 키: 버튼 글자 }, first: [동사, 자리], verbs: { 동사: { 자리: { ok, bad, say } } } }
  if (typeof SLOTS !== 'undefined') {
    let [ov, slot] = SLOTS.first;
    const drawSlot = () => {
      const c = SLOTS.verbs[ov][slot];
      $('slotScene').innerHTML = '<g data-slot="' + ov + '-' + slot + '">' + (c.ok ? wordRow(c.ok, 58, true) : '') + (c.bad ? wordRow(c.bad, 132, false) : '') + '</g>';
      $('osay').innerHTML = c.say;
      document.querySelectorAll('button[data-ov]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.ov === ov));
      document.querySelectorAll('button[data-slot]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.slot === slot));
    };
    const add = (box, key, val, label) => { const b = document.createElement('button'); b.dataset[key] = val; b.textContent = label; b.addEventListener('click', () => { if (key === 'ov') ov = val; else slot = val; drawSlot(); }); $(box).appendChild(b); };
    Object.keys(SLOTS.verbs).forEach((v) => add('ovBtns', 'ov', v, v));
    Object.entries(SLOTS.slots).forEach(([k, label]) => add('slotBtns', 'slot', k, label));
    drawSlot();
  }
