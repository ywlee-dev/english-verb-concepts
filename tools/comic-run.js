    // 만화 공통 실행: 페이지 데이터(C · MORE · CORE · ORDER · FX · BASE · FIRST · BASIC_B)를 받아 단추 · 장면 · 맞히기를 만든다
    const IDS = Object.keys(C), $ = (id) => document.getElementById(id);
    const SC = {}; IDS.forEach((id) => { SC[id] = [Object.assign({ b: BASIC_B }, C[id]), ...MORE[id]]; });
    const draw = (box, id, n, q) => { const c = SC[id][n]; box.style.setProperty('--t', C[id].t + 's'); box.classList.remove('go');
      box.innerHTML = c.p.map(([w, a, b], i) => '<figure style="flex:' + w + ' 1 0;--i:' + i + '"><svg viewBox="0 0 ' + w + ' 240" role="img" aria-label="' + a + '">' + b(q) + '</svg></figure>').join('');
      void box.offsetWidth; box.classList.add('go'); };
    // 효과음: 파일 없이 만든 소리. 누른 다음에만 난다
    let ac; const fx = (id) => { const A = window.AudioContext || window.webkitAudioContext; if (!A) return; ac = ac || new A(); ac.resume();
      const [dur, f0, f1, vol, at] = FX[id], T = ac.currentTime + at;
      const b = ac.createBuffer(1, ac.sampleRate * dur, ac.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2);
      const s = ac.createBufferSource(), flt = ac.createBiquadFilter(), v = ac.createGain(); s.buffer = b; flt.type = f0 < 300 ? 'lowpass' : 'bandpass'; flt.frequency.setValueAtTime(f0, T); flt.frequency.exponentialRampToValueAtTime(f1, T + dur); v.gain.value = vol; s.connect(flt).connect(v).connect(ac.destination); s.start(T); };
    const say = (id, n) => { const c = SC[id][n]; return '<span class="en">' + c.en + '</span> <button type="button" class="speak" data-word="' + c.en + '" title="이 줄 듣기">🔊</button><br>' + c.ko + '<br>' + c.feel + '<br><span style="color:var(--accent)">세 장면에 남는 것 —</span> ' + CORE[id]; };
    $('cmBtns').innerHTML = IDS.map((id) => '<button type="button" data-cm="' + id + '">' + C[id].n + '</button>').join('') + '<button type="button" id="cmAgain">↻ 효과음과 함께 다시</button>';
    let cur = FIRST, no = 0;
    const show = (id, n, snd) => { cur = id; no = n; draw($('cm'), id, n); $('cmSay').innerHTML = say(id, n);
      $('cmSc').innerHTML = SC[id].map((c, i) => '<button type="button" data-sc="' + i + '" aria-pressed="' + (i === n) + '">장면 ' + (i + 1) + ' · ' + c.b + '</button>').join('');
      $('cmBtns').querySelectorAll('[data-cm]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.cm === id)); if (snd) fx(id); };
    $('cmBtns').onclick = (e) => { const b = e.target.closest('button'); if (b) b.dataset.cm ? show(b.dataset.cm, 0, true) : show(cur, no, true); };
    $('cmSc').onclick = (e) => { const b = e.target.closest('button'); if (b) show(cur, +b.dataset.sc, true); };
     let k = 0;
    const ask = () => { const [id, n] = ORDER[k]; draw($('qz'), id, n, true); $('qzLine').textContent = SC[id][n].en.replace(SC[id][n].w || C[id].past, '_____'); $('qzSay').textContent = '어느 동사의 만화일까? (' + (k + 1) + ' / ' + ORDER.length + ')';
      $('qzBtns').innerHTML = IDS.map((i) => '<button type="button" data-qz="' + i + '">' + C[i].past + '</button>').join('') + '<button type="button" id="qzNext">다음 만화 ▶</button>'; };
    $('qzBtns').onclick = (e) => { const b = e.target.closest('button'); if (!b) return; if (b.id === 'qzNext') { k = (k + 1) % ORDER.length; ask(); return; }
      const [id, n] = ORDER[k], c = SC[id][n], x = b.dataset.qz; $('qzBtns').querySelectorAll('[data-qz]').forEach((z) => z.setAttribute('aria-pressed', z === b));
      if (x === id) { $('qzLine').textContent = c.en; fx(id); $('qzSay').innerHTML = '✔ ' + say(id, n); }
      else if (x === BASE) $('qzSay').innerHTML = c.no ? '<b>' + C[BASE].past + '</b> — 이 문장에는 어색하다. 더 꼭 맞는 것은?' : '<b>' + C[BASE].past + '</b> — 이것도 쓸 수 있다. 하지만 이 만화의 소리와 느낌이 빠진다. 더 꼭 맞는 것은?';
      else $('qzSay').innerHTML = '<b>' + C[x].past + '</b>의 느낌은 ' + CORE[x] + ' 이 만화의 가운데 칸과 맞을까?'; };
    show(cur, 0); ask();
