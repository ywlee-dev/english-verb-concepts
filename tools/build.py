"""concepts/ 페이지 생성기.

tools/pages/NN-이름.html (원본) → concepts/NN-이름.html (HTML 한 파일, 외부 파일 없음)

원본 모양
  <!-- title: 탭 제목 -->
  <!-- pron: go/go--move-away-to-place.md, go/run--go-quickly-on-foot.md, commit=/kəˈmɪt/[커**밋**]* -->
  <style> 이 페이지만의 CSS (없어도 됨) </style>
  <main> … 본문. 아래 자리표시를 쓰면 표준 칸이 들어간다 … </main>
  <script> 페이지 데이터: TOP · EXIST · SCENES · FLOW · SLOTS (있는 것만) + 이 페이지만의 그림 코드 </script>

자리표시 ('|'로 나눈 값)
  {{PRON}}                                 발음 줄 (pron 목록에서, 노트의 Pronunciation (US) 줄)
  {{TOP|svg 제목|svg 설명|BASIC 글자|HOW 버튼 이름|그림 높이}}
  {{EXIST}}                                0절 카드
  {{SCENES|대화 속 ○○가}}                   0+절 장소 + 대화
  {{FLOW|svg 제목|svg 설명}}                4절 질문 흐름
  {{SLOTS|svg 제목|svg 설명|동사 줄 이름|자리 줄 이름}}

공통 CSS·JS는 tools/base.css · lib.js · boot.js. 쓰는 법: python tools/build.py [페이지 이름 …]
"""
import pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent
OUT = ROOT.parent / 'concepts'
VERBS = ROOT.parent


def read(p):
    return (ROOT / p).read_text(encoding='utf-8')


def pron_item(spec):
    """'go/go--x.md' → 노트에서 단어·IPA·한글. 'word=/ipa/[한글]*' → 직접 적은 값(*는 노트에 없음)."""
    spec = spec.strip()
    if '=' in spec:
        w, rest = spec.split('=', 1)
        m = re.match(r'(/[^/]+/)\[([^\]]+)\](\*?)', rest.strip())
        return w.strip(), m.group(1), m.group(2), not m.group(3)
    text = (VERBS / spec).read_text(encoding='utf-8')
    word = re.match(r'#\s*(.+?)\s+—', text).group(1).strip().lower()
    line = re.search(r'Pronunciation \(US\):\*\*\s*(.+)', text).group(1)
    head = line.split(' — ')[0].split('. ')[0]
    ipas = re.findall(r'/[^/\s][^/]*/', head)
    kos = re.findall(r'\[([^\]]+)\]', head)
    ipa = '/' + ' '.join(i.strip('/') for i in ipas) + '/'
    return word, ipa, ' '.join(kos), True


def pron_row(specs):
    items = [pron_item(s) for s in specs if s.strip()]
    out = '  <div class="pron"><span class="cap">발음 (미국식)</span>\n'
    for w, ipa, ko, from_note in items:
        ko = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', ko)
        star = '' if from_note else '<span class="star">*</span>'
        out += (f'    <button type="button" data-word="{w}" title="{w} 소리로 듣기"><span class="en">{w}</span>{star}'
                f'<span class="ipa">{ipa}</span><span class="ko">[{ko}]</span><span class="spk" aria-hidden="true">🔊</span></button>\n')
    out += '  </div>\n'
    if not all(i[3] for i in items):
        out += '  <p class="pron-note"><span style="color:var(--accent2)">*</span> 표시는 노트에 발음이 없어 사전 표기를 옮겨 둔 것이다. 나머지는 각 노트의 Pronunciation (US) 줄.</p>\n'
    return out


def card(svg_id, view_h, title, desc, inner_buttons, out_id):
    return f'''  <div class="card">
    <div class="fig">
    <svg width="100%" viewBox="0 0 680 {view_h}" role="img" aria-labelledby="t{svg_id} d{svg_id}">
      <title id="t{svg_id}">{title}</title>
      <desc id="d{svg_id}">{desc}</desc>
      <g id="{svg_id}"></g>
    </svg>
    </div>
    <p class="fig-hint">← 그림을 옆으로 밀어 보기 →</p>
{inner_buttons}    <output class="say" id="{out_id}" style="display:block"></output>
  </div>
'''


def top(title, desc, basic, how_cap, height='290'):
    h = int(height)
    return f'''  <div class="card">
    <div class="fig">
    <svg width="100%" viewBox="0 0 680 {h}" role="img" aria-labelledby="t1 d1">
      <title id="t1">{title}</title>
      <desc id="d1">{desc}</desc>
      <g font-size="12" fill="var(--muted)">
        <text x="24" y="30">BASIC (기본 그림)</text>
        <text x="24" y="122">HOW (방식)</text>
      </g>
      <rect x="24" y="38" width="176" height="44" rx="8" fill="var(--bg)" stroke="var(--line)"/>
      <text x="112" y="66" text-anchor="middle" font-size="15" font-weight="600" fill="var(--text)">{basic}</text>
      <text x="112" y="108" text-anchor="middle" font-size="18" fill="var(--muted)">+</text>
      <rect x="24" y="130" width="176" height="44" rx="8" fill="var(--bg)" stroke="var(--accent)"/>
      <text id="howLabel" x="112" y="158" text-anchor="middle" font-size="15" font-weight="600" fill="var(--text)"></text>
      <text x="112" y="200" text-anchor="middle" font-size="18" fill="var(--muted)">=</text>
      <rect x="24" y="212" width="176" height="56" rx="10" fill="var(--chip-on)" stroke="var(--accent)" stroke-width="2"/>
      <text id="verbLabel" x="112" y="248" text-anchor="middle" font-size="22" font-weight="700" fill="var(--accent)"></text>
      <line x1="226" y1="20" x2="226" y2="{h - 14}" stroke="var(--line)"/>
      <text id="targetLabel" x="660" y="30" text-anchor="end" font-size="13" fill="var(--muted)"></text>
      <g id="scene"></g>
      <text id="resultLabel" x="450" y="{h - 16}" text-anchor="middle" font-size="14" fill="var(--muted)"></text>
    </svg>
    </div>
    <p class="fig-hint">← 그림을 옆으로 밀어 보기 →</p>
    <div class="buttons" id="howBtns"><span class="cap">{how_cap}</span></div>
    <div class="chips" id="chipBox" aria-label="동사를 누르면 그 장면으로 바뀜">
      <span class="cap">동사 눌러 보기</span>
      <span class="exit" id="chipExit">묶음 밖 →</span>
    </div>
    <p class="say" id="say"></p>
  </div>
'''


def exist():
    return card('existScene', 262, '말하고 싶은 그림마다 그것을 그리는 동사가 있고, 하나를 빼면 그 칸이 비는 그림',
                '카드가 한 줄로 있고, 카드마다 말하고 싶은 그림과 그것을 그리는 동사가 아래에 붙어 있다. 점선 카드는 묶음 밖 이웃 동사다. 동사 하나를 빼면 그 카드가 물음표 빈칸이 되고, 맨 아래에 다른 동사로 대신 말한 문장이 나온다.',
                '    <div class="buttons" id="existBtns"><span class="cap">빼 보기</span></div>\n', 'esay')


def scenes(verb):
    return f'''  <h2>0+. 이런 상황에서 — 장소 하나, 대화 한 토막</h2>
  <p>뜻을 알아도 언제 입에서 나오는지는 장면으로 붙여야 남는다. 장소를 골라 보세요. 대화 속 {verb} 위의 그림 어디에 해당하는지 함께 나온다. 🔊를 누르면 그 줄을 읽어 준다.</p>
  <div class="card">
    <div class="fig">
    <svg width="100%" viewBox="0 0 680 170" role="img" aria-labelledby="tS dS">
      <title id="tS">고른 장소의 장면 그림</title>
      <desc id="dS">고른 장소가 그려지고, 대화 속 동사가 그 장소에서 만드는 변화가 함께 보인다.</desc>
      <g id="sceneScene"></g>
    </svg>
    </div>
    <p class="fig-hint">← 그림을 옆으로 밀어 보기 →</p>
    <div class="buttons" id="sceneBtns"><span class="cap">장소</span></div>
    <div class="talk" id="sceneTalk"></div>
    <output class="say" id="ssay" style="display:block"></output>
  </div>
'''


def flow(title, desc):
    return card('flowScene', 350, title, desc, '    <div class="buttons" id="flowBtns"><span class="cap">동사까지 가는 길</span></div>\n', 'fsay')


def slots(title, desc, ov_cap='동사', slot_cap='뒤에 붙는 것'):
    return card('slotScene', 170, title, desc,
                f'    <div class="buttons" id="ovBtns"><span class="cap">{ov_cap}</span></div>\n    <div class="buttons" id="slotBtns"><span class="cap">{slot_cap}</span></div>\n', 'osay')


PH = {'PRON': None, 'TOP': top, 'EXIST': exist, 'SCENES': scenes, 'FLOW': flow, 'SLOTS': slots}


def build(src):
    s = src.read_text(encoding='utf-8')
    title = re.search(r'<!--\s*title:\s*(.+?)\s*-->', s).group(1)
    pm = re.search(r'<!--\s*pron:\s*(.+?)\s*-->', s, re.S)
    specs = pm.group(1).replace('\n', ',').split(',') if pm else []
    extra_css = ''
    m = re.search(r'<style>(.*?)</style>', s, re.S)
    if m:
        extra_css = m.group(1).strip('\n') + '\n'
    main = s[s.index('<main>'):s.index('</main>') + len('</main>')]
    data = re.search(r'<script>(.*)</script>', s, re.S).group(1).strip('\n')

    def sub(m):
        parts = m.group(1).split('|')
        name, args = parts[0].strip(), [a.strip() for a in parts[1:]]
        if name == 'PRON':
            return pron_row(specs).rstrip('\n')
        return PH[name](*args).rstrip('\n')
    main = re.sub(r'^[ \t]*\{\{([^}]+)\}\}', sub, main, flags=re.M)
    left = re.findall(r'\{\{[^}]+\}\}', main)
    assert not left, f'{src.name}: 모르는 자리표시 {left}'
    html = ('<!doctype html>\n<html lang="ko">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
            f'<title>{title}</title>\n<!-- 이 파일은 tools/build.py가 tools/pages/{src.name}에서 만든다. 고칠 때는 원본을 고치고 다시 만든다 -->\n'
            '<style>\n' + read('base.css') + extra_css + '</style>\n</head>\n<body>\n' + main + '\n<script>\n' +
            read('lib.js') + '\n' + data + '\n\n' + read('boot.js') + '</script>\n</body>\n</html>\n')
    (OUT / src.name).write_text(html, encoding='utf-8', newline='\n')
    return OUT / src.name


if __name__ == '__main__':
    names = sys.argv[1:]
    for src in sorted((ROOT / 'pages').glob('*.html')):
        if names and not any(n in src.name for n in names):
            continue
        print('built', build(src).relative_to(ROOT.parent))
