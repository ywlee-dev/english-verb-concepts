"""형용사 목록(adjectives/index.html)을 다시 만든다. 저장소 폴더에서: python tools/adj_index.py
부사 목록의 겉모습과 회차 코드를 그대로 쓴다. 이미 정한 회차는 바꾸지 않고, 새 페이지는 ROUNDS 맨 뒤에 붙인다."""
import re, pathlib

# 하루 두 장. 파일 순서대로 20회차
ROUNDS = ','.join(f'{n:02d} {n + 1:02d}' for n in range(1, 41, 2))

li = ''
for p in sorted(pathlib.Path('adjectives').glob('[0-9]*.html')):
    s = p.read_text(encoding='utf-8')
    h = re.search(r'<h1>(.*?)</h1>', s)[1]
    w = ' · '.join(re.findall(r'data-word="([^"]+)" title="[^"]+ 소리로 듣기"', s))
    li += f'    <li><a href="{p.name}">{h}</a>\n      <span class="desc">{w}</span></li>\n'

out = open('adverbs/index.html', encoding='utf-8').read()


def sub(pat, new):
    global out
    out, n = re.subn(pat, lambda m: new, out, flags=re.S)
    assert n == 1, (pat, n)


sub(r'<title>.*?</title>', '<title>영어 형용사 개념 그림</title>')
sub(r'<h1>.*?</h1>', '<h1>영어 형용사 개념 그림</h1>')
sub(r'<p class="lead">.*?</p>', '<p class="lead">물건 · 사람 · 일이 어떤 상태인지를 짝으로 보는 낱말. 동사 방, 부사 방과 회차 번호가 따로다. <a href="../concepts/index.html">동사 목록으로</a></p>')
sub(r'(?<=<ul id="all">\n).*?(?=  </ul>)', li)
sub(r'const ROUNDS = `.*?`', f'const ROUNDS = `{ROUNDS}`')
open('adjectives/index.html', 'w', encoding='utf-8', newline='\n').write(out)
