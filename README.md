# 영어 동사 — 장면 노트와 개념 그림

- 브라우저로 보기: https://ywlee-dev.github.io/english-verb-concepts/
- 개념 그림 페이지와 만드는 규칙: [concepts/](concepts/) · [concepts/README.md](concepts/README.md)
- 핵심 질문: **듣는 사람 머릿속에 무엇을 그리게 하고 싶은가?** 짝 질문: **이 동사가 없으면 못 그리는 그림은?**

## 업데이트하는 법

이 폴더(`D:\단계별_흐름\english-verbs`)가 바로 이 저장소다. 노트나 페이지를 고치고 커밋해서 push하면, GitHub Actions가 1분쯤 뒤 링크에 반영한다. 따로 복사할 것은 없다.

---

## English Verb Scene Notes

영어 동사를 한국어 번역 쌍이 아니라 `TARGET`, `PRECONDITION`, `HOW`, `RESULT`가 있는 사건 장면으로 학습하는 노트 모음이다.

## 구조

```text
english-verbs/
├─ index.md
├─ move/
│  ├─ _family.md
│  ├─ drag--pull-along-surface.md
│  ├─ carry/             # MOVE 아래의 HOW 묶음
│  │  └─ _family.md
│  └─ throw/             # MOVE 아래의 HOW 묶음
│     └─ _family.md
├─ ask/
│  ├─ _family.md
│  ├─ ask--request-information.md
│  ├─ poll--ask-group-and-collect-responses.md
│  ├─ survey--ask-systematically.md
│  ├─ interview--ask-in-depth.md
│  └─ question--ask-for-clarification.md
└─ unclassified/
```

- 폴더: Result Family
- 개별 파일: Specific Verb의 특정 의미
- `_family.md`: 같은 Result를 공유하는 동사들의 HOW 비교
- Result Family 안의 하위 폴더: 비교할 동사가 많은 HOW 묶음. 최상위 Result Family 수에는 포함하지 않음
- 동사 하나를 추가할 때: Result Verb 노트와 대표 HOW sibling 노트도 함께 정리
- `unclassified/`: 명확한 Result Verb가 없는 항목

분석과 노트 추가에는 `$verb-scene-learning` 스킬을 사용한다.

## 편집 환경

- [VS Code에서 Markdown Preview를 기본으로 여는 방법](VSCODE-MARKDOWN-PREVIEW.md)

## 확장 계획

- [Result Family 80개 확장 로드맵](EXPANSION-ROADMAP.md)
