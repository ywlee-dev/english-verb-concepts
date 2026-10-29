#!/usr/bin/env bash
# steps 저장소의 english-verbs/concepts 를 이 저장소로 가져와 GitHub Pages에 올린다.
#   ./publish.sh            가져오기 → 커밋 → push (1분쯤 뒤 링크에 반영)
#   ./publish.sh --dry      가져와서 무엇이 바뀌는지만 보고 되돌린다
#   ./publish.sh "메시지"   커밋 메시지를 직접 정한다
# 링크: https://ywlee-dev.github.io/english-verb-concepts/
set -euo pipefail

SRC="D:/단계별_흐름/english-verbs"   # 작업하는 곳 (steps 저장소, 지금 체크아웃된 브랜치 그대로 가져온다)
DST="$(cd "$(dirname "$0")" && pwd)"
BLOB="https://github.com/ywlee-dev/english-verb-concepts/blob/main"

DRY=0; MSG="Update concept pages"
case "${1:-}" in
  --dry) DRY=1 ;;
  "") ;;
  *) MSG="$1" ;;
esac

cd "$DST"
[ -z "$(git status --porcelain)" ] || { echo "이 저장소에 커밋 안 된 변경이 있다. 먼저 정리할 것."; git status --short; exit 1; }
git pull -q --ff-only

# 1) 페이지: concepts 안의 html과 README만 (.vscode 같은 편집기 설정은 뺀다). 지운 페이지도 따라 지워지게 비우고 다시 복사
rm -f concepts/*.html concepts/README.md
cp "$SRC"/concepts/*.html "$SRC"/concepts/README.md concepts/

# 2) 페이지가 가리키는 노트 폴더 (href="../폴더/...")를 통째로 다시 복사
NOTES=$(grep -rhoE 'href="\.\./[^/"]+/' "$SRC"/concepts/*.html | sed -E 's#href="\.\./##; s#/$##' | sort -u)
for d in $NOTES; do rm -rf "$d"; cp -r "$SRC/$d" "$d"; done

# 3) 노트 링크는 GitHub의 파일 보기 주소로 (Pages는 .md를 화면에 그려 주지 않는다). 원본은 건드리지 않는다
sed -i -E "s#href=\"\.\./([^\"]+\.md)\"#href=\"$BLOB/\1\"#g; s#href=\"README\.md\"#href=\"$BLOB/concepts/README.md\"#g" concepts/*.html

git add -A
if git diff --cached --quiet; then echo "바뀐 것이 없다."; exit 0; fi
echo "바뀌는 것:"; git diff --cached --stat | tail -20

if [ "$DRY" = 1 ]; then
  git reset -q && git checkout -q -- . && git clean -fdq
  echo "(--dry: 되돌렸다. 올리지 않았다)"; exit 0
fi

git commit -q -m "$MSG" -m "Source: steps/english-verbs/concepts ($(git -C "$SRC" rev-parse --abbrev-ref HEAD) $(git -C "$SRC" rev-parse --short HEAD))"
git push -q
echo "올렸다. 1분쯤 뒤 반영: https://ywlee-dev.github.io/english-verb-concepts/"
