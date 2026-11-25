"""만화(tools/comics/이름.js)를 concepts/이름.html에 넣는다. 다시 부르면 앞서 넣은 것을 갈아 끼운다.
tools/pages 원본이 있는 장은 build.py가 만들고 나서 저절로 부른다. 손으로 만든 장(01~07)은: python tools/comic.py 01-break"""
import pathlib, re, sys
T = pathlib.Path(__file__).resolve().parent
OUT = T.parent / 'concepts'
A, Z = 'COMIC:START', 'COMIC:END'


def apply(name):
    data = T / 'comics' / (name + '.js')
    page = OUT / (name + '.html')
    raw = page.read_bytes().decode('utf-8')
    crlf = '\r\n' in raw
    s = raw.replace('\r\n', '\n')
    s = re.sub(r'<!-- ' + A + r' -->.*?<!-- ' + Z + r' -->\n', '', s, flags=re.S)
    if data.exists():
        rd = lambda p: p.read_text(encoding='utf-8')
        d = rd(data)
        note = re.search(r'// note: (.*)', d)[1]
        wrap = lambda x: f'<!-- {A} -->\n{x}\n<!-- {Z} -->\n'
        html = f"""  <h2 id="comic-h">만화로 먼저 느끼기</h2>
  <p>설명을 읽기 전에 <b>동사를 누르고 만화만 본다.</b> 그다음 <b>장면 1 → 2 → 3</b>을 넘긴다. 앞뒤 칸은 바뀌어도 <b>가운데 칸의 느낌</b>은 남는다 — 그 남는 것이 동사다. 장면 3은 손에 안 잡히는 것까지 간다.</p>
  <div class="cm-btns" id="cmBtns" role="group" aria-label="동사 고르기"></div>
  <div class="cm-btns" id="cmSc" role="group" aria-label="장면 고르기"></div>
  <div class="cm" id="cm"></div>
  <div class="cm-say" id="cmSay" aria-live="polite"></div>
  <p class="note">{note}</p>
  <h3>만화 보고 맞히기</h3>
  <div class="cm" id="qz"></div>
  <p class="en" style="font-size:18px;margin:8px 0" id="qzLine"></p>
  <div class="cm-btns" id="qzBtns" role="group" aria-label="동사 맞히기"></div>
  <div class="cm-say" id="qzSay" aria-live="polite"></div>"""
        s = s.replace('</head>', wrap('<style>\n' + rd(T / 'comic.css') + '</style>') + '</head>', 1)
        m = re.search(r'<div class="pron">.*?</div>\n(?:\s*<p class="pron-note">.*?</p>\n)?', s, re.S)
        s = s[:m.end()] + wrap(html) + s[m.end():]
        js = '<script>\n  (() => {\n' + rd(T / 'comic-parts.js') + d + rd(T / 'comic-run.js') + '  })();\n</script>'
        i = s.rindex('</body>')
        s = s[:i] + wrap(js) + s[i:]
    page.write_bytes((s.replace('\n', '\r\n') if crlf else s).encode('utf-8'))


if __name__ == '__main__':
    for n in sys.argv[1:]:
        apply(n)
        print('comic', n)
