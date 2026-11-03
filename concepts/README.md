# 영어 동사 개념 그림 (concepts/)

english-verbs 노트의 동사를 **움직여 볼 수 있는 그림 한 장**으로 보는 HTML 페이지 모음.
파일 하나에 인라인 SVG + CSS + 짧은 JavaScript만 쓴다. 외부 라이브러리 없이 브라우저로 열면 된다.

만드는 규칙은 무인선 관제 앱의 `concepts/README.md`와 같고, 동사 페이지에는 아래 표준을 더한다.

## 핵심 질문 — 모든 페이지의 출발점

> **듣는 사람 머릿속에 무엇을 그리게 하고 싶은가?**
>
> 짝 질문: **이 동사가 없으면 못 그리는 그림은?** — 그것이 그 동사가 존재하는 이유다.

동사는 듣는 사람에게 어떤 장면을 보여 줄지 고르는 도구다. 이 질문의 답에서 동사, 주어, 낱말 순서가 함께 나온다.

짝 질문은 같은 것을 낱말 쪽에서 본다. 자주 그려야 했던 그림이 있었기 때문에 그 그림을 한 낱말로 그리는 동사가 생겼다. 그래서 페이지는 늘 **"왜 존재하나"에서 시작**한다. 존재 이유를 알면 HOW(언제 쓰나)는 외울 목록이 아니라 그 결과로 따라 나온다.


- 동작을 보여 주면 → 방식 쪽 동사, **사람이 주어** (`He smashed the vase.`)
- 결과 장면을 보여 주면 → 결과 쪽 동사, **물건이 주어** (`The vase shattered.`)
- 이미 그려져 있는 것은 → 짧게 `it`, 앞쪽에 / 새로 그려 줄 것은 → 길게, 문장 끝에

아래의 Q1~Q4·①②③, 목적어 자리 규칙은 모두 이 질문을 펼친 **검산**이다. 새 묶음 페이지를 만들 때도 "이 묶음의 동사들은 각각 어떤 그림을 그려 주나?"를 먼저 정하면 장면·버튼·질문 흐름이 따라 나온다. 그림으로 보기: [04-core-question.html](04-core-question.html)

## 기본 규칙

- 맨 위에 움직여 보는 그림. 조건 하나만 바꾸면 동사가 갈리는 장면을 고른다.
- 글 순서: **0. 왜 존재하나** → 무엇인가 → 그림에서 일어나는 일 → 언제 쓰나 → **무엇이 다른가(질문 흐름)** → **실제 문장으로(목적어 자리)** → 몸으로 해 보기 → 원래 노트와 연결.
- 첫 설명 문단 바로 아래에 **발음 줄**: 페이지의 동사마다 `단어 /IPA/ [한글, 강세 굵게] 🔊`. 노트의 Pronunciation (US) 줄을 옮기고, 노트에 없으면 사전 표기에 `*`를 붙인다. 누르면 브라우저 음성(en-US)으로 읽는다.
- 0번 바로 아래에 **0+. 이런 상황에서**: 장소 버튼(공항·식당·회사…) → 그 장소 그림 + 두 줄 대화(영어·한국어, 동사는 굵게, 줄마다 🔊) + "이 동사가 여기서 그리는 그림" 한 줄. 대화는 대개 노트에 없는 작문이라 "확인할 것"에 적는다.
- 노트에 없는 풀이는 "확인할 것" 칸에 따로 적는다. 여러 개면 목록으로 나눈다.
- 휴대폰: 그림은 `.fig`로 감싸 600px보다 좁으면 옆으로 밀어 본다.
- 이름은 `NN-영어이름.html`. 새로 만들면 `index.html`과 아래 표에 한 줄 더한다.

## 동사 페이지 표준 — 그림에서 실제 문장까지

03 SOLVE를 다듬으며 정한 것. 새 묶음 페이지는 아래 일곱 가지를 갖춘다(0번이 맨 앞).

| # | 넣을 것 | 왜 | 03 SOLVE의 예 |
|---|---|---|---|
| 0 | **왜 존재하나** 그림 — 말하고 싶은 그림 카드마다 그것을 그리는 동사, 하나를 빼면 빈칸 | 존재 이유를 먼저 알면 나머지(HOW, 질문, 문장 모양)가 따라 나온다 | work out을 빼면 "한 줄씩 계산해 냄" 카드가 비고 `I solved it step by step on paper. △`로 늘어진다 |
| 1 | **RESULT + HOW = 동사** 상자와 장면 | 비슷한 동사를 "외울 목록"이 아니라 "고르는 기준"으로 본다 | 같은 수학 문제를 풀이 방식만 바꿔 solve · work out · figure out · crack |
| 2 | **반례 버튼** — 이 묶음에 들지 못하는 경우 | 경계가 먼저 보여야 안쪽이 또렷하다 | "생각만 — 답 못 찾음" → think about, 동사 칸이 비어 있음 |
| 3 | **TARGET 바꾸기** — 묶음 밖으로 나가는 경계 | TARGET이 바뀌면 HOW가 아니라 RESULT부터 달라져 다른 묶음이 된다는 것을 보인다. 그 동사는 묶음 안에 두지 않고 **묶음 밖** 표시(점선 칩·문)로 그린다 | 수학 문제 → 다툼: 찾을 답이 없어 RESULT가 "확정됨" → resolve는 묶음 밖(RESOLVE 묶음, 05) |
| 4 | **목적어 자리 세 가지** — 묶음에서 실제로 갈리는 문장 모양 세 개 | 한 가지 목적어만 보면 "이 동사는 이 대상에만 쓴다"로 굳는다. 실제 문장으로 넘어가는 다리 | `figure out the pattern` · `figure it out` · `figure out how to…`, `solve how…`는 ✗ |
| 5 | **"경향이지 규칙이 아님"** 한 줄 | 고르는 표가 칼같은 규칙으로 읽히지 않게. 겹치는 쓰임·지역 차이를 밝힌다 | work out ↔ figure out은 많이 겹침, 영국 영어의 `work out why` |
| 6 | **질문 흐름 그림** (4절) — 말할 때 고르는 질문 + 스펙트럼 띠, 그 아래 분류 질문 표 | 고르는 순서가 머리에 남고, 동사마다 "결과를 얼마나 말하나"의 자리가 보인다 | Q1 답에 도달했나? → Q2 과정을 말하나? → Q3 어떤 과정? / 띠: think about · work out… · solve |

## 질문 두 종류 — 말할 때 고르기, 공부할 때 분류하기

동사는 **방식(HOW)**과 **결과(RESULT)**를 얼마나 말하느냐로 한 줄에 늘어선다. 결과 쪽 동사는 "어떤 상태가 됐다"를 말해서 형용사처럼 느껴지고(broken, cracked, shattered), 방식 쪽 동사는 "어떤 동작을 했다"를 말한다. 다만 -ed형은 거의 모든 동사에 있어서(a smashed window, a crushed can) 형용사형이 있느냐로는 갈리지 않는다. 아래 질문으로 가른다.

```text
방식만            방식 + 결과           결과 모양            결과만
hit · press  →  smash · crush  →  crack · shatter  →  break
think about  →  work out · figure out · crack  →  (없음)  →  solve
```

### 말할 때 — 동사를 고르는 질문 (Q)

| 질문 | 갈림 | BREAK | SOLVE |
|---|---|---|---|
| Q1. 결과가 생겼나? | 아니오 → 방식만 동사 (묶음 밖) | 망가졌나? 아니오 → hit · press | 답에 도달했나? 아니오 → think about |
| Q2. 무엇을 앞에 세우나? | 동작 → Q3 / 상태·결과 → Q4 | 동작이면 **사람이 주어**, 상태면 **물건이 주어** — 문장 모양까지 정해진다 | 과정을 말하나? 아니오 → solve |
| Q3. 어떤 방식이었나? | 방식 + 결과 동사 | 순간 충격 → smash / 계속 누름 → crush | 한 줄씩 계산 → work out / 이해 → figure out / 돌파 → crack |
| Q4. 결과 모양까지 말하나? | 결과 모양 / 결과만 | 금 → crack / 조각 → shatter / 모양 없이 → break | 결과 모양이 없는 묶음이라 Q2에서 바로 solve |

- 묶음에 없는 칸은 비워 둔다(SOLVE의 Q4, 스펙트럼의 "결과 모양").
- RESULT부터 다른 동사는 묶음 안에 두지 않고 **묶음 밖으로 나가는 문**(점선 상자 `out: true`)으로 그린다. 묶음은 점선 테두리(`region`, "○○ 묶음 · RESULT = …")로 감싼다. 예: SOLVE(답을 찾음) 밖의 resolve(확정됨 → RESOLVE 묶음). 이웃 묶음끼리는 서로 마주 보는 문을 둔다(03의 문 → 05, 05의 문 → 03).

### 공부할 때 — 스펙트럼에 놓는 질문 (①②③)

| 질문 | 예 | 아니오 |
|---|---|---|
| ① "~했는데 결과가 안 났다"가 말이 되나? (`I hit the vase, but it didn't break.`) | 방식만 | 결과가 들어 있다 → ② |
| ② 방식이 단어 안에 들어 있나? (어떻게 했는지 따로 안 물어도 되나) | 방식 + 결과 | → ③ |
| ③ -ed형·결과로 모양이 그려지나? (cracked = 금, shattered = 조각) | 결과 모양 | 결과만 |

- 상태가 변하는 묶음(BREAK 같은)에서는 "물건이 혼자 주어가 되나?"(`The vase broke.` / `The vase hit.` ✗)가 결과 쪽을 확인하는 보조 질문이 된다.

### 왜 존재하나 그림 만드는 법 (0절)

- 카드 여섯 장 한 줄: 묶음 안 동사 4~5장 + **묶음 밖 이웃** 1~2장(점선, "묶음 밖 이웃"). 이웃 카드가 있어야 이웃 묶음이 왜 따로 있는지도 보인다.
- 카드 = 작은 그림 + 그림 이름 두 줄(한 줄에 한글 8자까지) + 아래 동사 칩.
- 버튼 `모두 있음` · `○○ 없이`: 누르면 그 카드가 물음표 빈칸, 동사 칩에 줄이 그어지고, 맨 아래에 **대신 말한 문장**(✗ 틀림 · △ 어색하거나 길어짐)이 나온다. 설명 칸에는 "무엇을 잃나 → 그래서 이 낱말이 있다"를 적는다.
- 데이터만 바꾸면 되게 `EXIST = { color, outColor, intro, cards: [{ id, t, v, out, icon, instead, lost, why }] }` + `existChart(E, gone)`로 쓴다. 함수는 01·03·05·06에 같은 모양으로 들어 있다.
- 묶음 페이지가 아닌 02·04는 그림 대신 표("○○ 없이 → 무엇이 빈다 → 붙이면")로 둔다.
- "대신 말하면" 문장이 어떻게 들리는지는 대개 노트에 없는 풀이라 "확인할 것"에 적는다.

### 질문 흐름 그림 만드는 법

- 위에서 아래로 Q1 → Q2 → Q3·Q4, 맨 아래 줄에 동사 상자, 그 아래 스펙트럼 띠. 띠의 칸은 동사 상자 바로 아래에 맞춰 왼쪽 = 방식, 오른쪽 = 결과.
- 동사를 고르면(버튼 `▸ 동사` 또는 그림의 상자) 그 동사까지 가는 선과 질문 상자, 띠의 칸이 켜지고, 설명 칸에 "Q → 답"이 차례로 적힌다.
- 데이터만 바꾸면 되게 `FLOW = { nodes, leaves, edges, segs }` + `flowChart(F, pick)`로 쓴다. 함수는 01·03에 같은 모양으로 들어 있다(파일 하나 규칙이라 복사).
- 그림 아래에 분류 질문 표(`동사 | ① | ② | ③ | 자리`)를 둔다.

### 목적어 자리 칸 만드는 법

- 세 모양은 묶음에 맞게 고른다. 갈리는 곳이 없는 모양은 넣지 않는다.

  | 묶음 성격 | 세 모양 | 페이지 |
  |---|---|---|
  | 구동사가 섞인 묶음 | 명사 / 대명사 it / how·why 절 | 03 SOLVE |
  | 구동사만 모은 페이지 | 명사·방향 말 뒤 / 명사·가운데 / 대명사 | 02 구동사 방향 |
  | 물건이 망가지는 묶음(자동사로도 쓰는 동사) | 누가 → 무엇을 / 물건이 주어 / 결과 말 붙이기 | 01 BREAK |


- 그림은 **낱말 상자 한 줄**: 위에 역할(주어·동사·목적어·out·결과), 목적어 상자는 강조색, 구동사의 방향 말과 결과 말은 점선. 그리는 함수 `wordRow`는 세 페이지에 같은 모양으로 들어 있다(파일 하나 규칙이라 복사).
- 맞는 문장은 ✓ 줄, 틀린 문장은 ✗ 줄(줄 긋기). 구동사 + it이면 두 줄을 같이 보여 **it이 가운데로 들어가는 것**이 눈에 보이게 한다.
- 설명은 `<output class="say">`에 둔다(검사 스크립트가 바뀜을 본다).
- 표로 한 번 더 정리: `동사 | 명사 | it | how·why 절`.
- 구동사 규칙은 본문에 한 줄로: 대명사는 반드시 동사와 out 사이(`figure it out` O · `figure out it` X), 명사는 앞뒤 어디든.
- 이 칸은 대개 노트에 없는 내용이라 "확인할 것"에 적고, 사전 예문으로 확인한 뒤 노트 Forms 칸에 옮긴다.

### 예문 고르기

- 동사마다 **가장 자연스러운 목적어**를 고른다. 노트의 고정 TARGET이 어색하면 바꾸고, 바꾼 사실을 "확인할 것"에 적는다.
  예: `figured out the math problem` → `figured out the answer`(알아낸 것이 목적어).
- 묶음 밖 동사(경계)는 좁게 정의하지 않는다. resolve는 다툼만이 아니라 `resolve an issue`처럼 매듭지을 사안 전반.

## 지금 있는 것

| 번호 | 파일 | 무엇 | 써 본 그리기 방법 |
|---|---|---|---|
| 01 | [01-break.html](01-break.html) | BREAK 묶음 — 치기·누르기와 힘 세기로 crack · smash · shatter · crush. 문장 모양(누가 → 무엇을 · 물건이 주어 · 결과 말) 칸 | 버튼 + 슬라이더 → 도형 잘라 나누기(clipPath), 조각 흩기, 캔 찌그러뜨리기 / 질문 흐름 Q1~Q4 + 스펙트럼 띠 / 동사 × 모양 버튼 → 낱말 상자 ✓·✗ 줄 |
| 02 | [02-phrasal-direction.html](02-phrasal-direction.html) | 구동사 방향 — up · down · out · in, 진짜 방향과 비유. 목적어 자리(뒤 · 가운데 · 대명사) 칸, 동사 10개 | 방향·동사 버튼 → 길을 따라 움직이는 애니메이션, 실선(물건)·점선(비유) / 동사 × 자리 버튼 → 낱말 상자 ✓·✗ 줄 |
| 03 | [03-solve.html](03-solve.html) | SOLVE 묶음 — 풀이 방식으로 solve · work out · figure out · crack, TARGET을 사안으로 바꾸면 resolve(경계). 목적어 자리(명사·it·절) 칸 | 방식·TARGET 버튼 → 장면 통째로 바꾸기, 차례로 나타나는 줄(.step), 자물쇠 열기 / 질문 흐름 Q1~Q3 + resolve 옆길 / 동사 × 목적어 버튼 → 낱말 상자 ✓·✗ 줄 |
| 04 | [04-core-question.html](04-core-question.html) | 핵심 질문 하나 — 듣는 사람 머릿속 그림으로 동사·주어·낱말 순서를 고른다. BREAK·SOLVE 두 사건, 이미 앎/처음 들음 | 말하는 사람 → 듣는 사람 머릿속 말풍선, 그림 고르기 버튼 → 말풍선 그림 + 문장 낱말 상자(주어 = 사람/물건, 이미 앎/새로 그림) |
| 05 | [05-resolve.html](05-resolve.html) | RESOLVE 묶음 — 같은 다툼을 매듭짓는 방식으로 resolve · settle · sort out · clear up · work out. resolve 전용 "여러 갈래 → 하나"(다툼·merge conflict·Promise·DNS·결심). **노트 없이 먼저 만든 페이지** | HOW 버튼 → 두 사람 사이 장면(합의 도장·매듭 풀림·조각 정리·구름 걷힘) / 대상 버튼 → 갈래가 한 점에 모이는 그림 / 질문 흐름 + SOLVE로 가는 문 / 목적어 자리 |
| 06 | [06-nudge.html](06-nudge.html) | PUSH 묶음 — 미는 세기·한 점·속도로 push · nudge · shove · press · thrust, nudge 전용 "작은 힘, 작은 변화"(컵·팔꿈치·선택·숫자·알림). **기본이 결과가 아니라 힘인 묶음** — 스펙트럼에서 모두 방식 쪽, 결과는 뒤의 말(into place) | HOW 버튼 → 탁자 위 상자가 움직이는 거리·모양(TARGET이 버튼·구조봉으로 바뀌는 장면 포함) / 대상 버튼 → 막대 위 점이 조금만 옮겨 가는 그림 / 질문 흐름 + PULL로 가는 문 / 목적어 · 결과 말 · 사람이 목적어 |
| 07 | [07-commit.html](07-commit.html) | COMMIT — HOW 묶음이 아니라 **한 동사가 여러 TARGET**(코드·돈·나 자신·죄·기억)을 받는 경우라 식을 BASIC + TARGET = 뜻으로 쓴다. commit 전용 "왜 git은 save가 아니라 commit인가". **노트 없이 먼저 만든 페이지** | TARGET 버튼 → 넘기는 선을 건너 잠기는 장면 / 명령 버튼 → 작업 폴더·스테이징·기록 사슬(save·add·commit·revert·DB) / 질문 흐름 + PROMISE로 가는 문 / 뒤에 붙는 모양(to + -ing ✓·✗) |
| 08 | [08-go.html](08-go.html) | GO 묶음 — 걷기·뛰기·급함·낮은 자세로 go · walk · run · rush · crawl. go 전용 "여기서 멀어짐"(go vs come). **생성기로 만든 첫 페이지** | HOW 버튼 → 처음 자리에서 문까지 발자국·시계·탁자 아래 / 질문 흐름 + COME으로 가는 문 / to + 장소 · home · 목적어가 바로(walk the dog) |
| 09 | [09-look.html](09-look.html) | LOOK 묶음 — 시간·감정·보이는 정도로 look · stare · gaze · glance · peer. "stare와 gaze — 둘 다 오래 보는데" | HOW 버튼 → 눈에서 그림까지 눈길(점선·고정·부채꼴·스침·어둠) / 질문 흐름 + SEE로 가는 문 / at + 대상 · 목적어 ✗ · 다른 말 |
| 10 | [10-escape.html](10-escape.html) | ESCAPE 묶음 — 결과 묶음. escape · break out of · slip out of · sneak out of. "slip out과 sneak out — 기회냐 작정이냐" | HOW 버튼 → 감시 방(부서진 문·문틈·밤 순찰) / 질문 흐름 + LEAVE로 가는 문 / out of · 목적어 · 장소 없이(다른 뜻) |
| 11 | [11-get.html](11-get.html) | GET 묶음 — 결과 묶음. 경로로 get · receive · obtain · earn · collect. "get이 그리는 그림 — 들어옴 하나로 다 덮는다"(물건·소식·병·뜻·상태) | HOW 버튼 → 미나의 점선 원 안으로 책이 들어오는 경로(물음표·건넴·세 단계·시상대·여러 반) / 질문 흐름 + TAKE로 가는 문 / 목적어 · from · 자주 붙는 모양 |
| 12 | [12-take.html](12-take.html) | TAKE 묶음 — 손을 뻗는 동작. take · grab · seize · snatch · pick up. "take가 그리는 그림"(탈것·시간·선택) | HOW 버튼 → 손과 휴대폰(가져감·떨어지는 것 붙잡기·압수 딱지·남의 손에서·위로) / 질문 흐름 + GIVE로 가는 문 / pick it up 대명사 자리 |
| 13 | [13-make.html](13-make.html) | MAKE 묶음 — 결과 묶음. make · create · produce · prepare · form. "make가 그리는 그림"(커피·친구·실수·돈·make me laugh) | HOW 버튼 → 탁자 위 모형(물음표·전구와 스케치·3D 프린터 셋·점검표·점토) / 질문 흐름 + CHANGE로 가는 문 / prepare for vs prepare the exam |
| 14 | [14-give.html](14-give.html) | GIVE 묶음 — give · hand · offer · lend · donate. "lend와 borrow — 한국어 빌리다의 함정". offer만 결과 미정 | HOW 버튼 → 나에게서 친구에게 가는 책(넘어감·손에서 손·내밀며 받을까?·돌아오는 점선·기증함) / 질문 흐름 + BORROW로 가는 문 / 사람 + 물건 · 물건 + to · it이면 |
| 15 | [15-put.html](15-put.html) | PUT 묶음 — 결과(자리) 묶음. put · place · set · lay · drop. "put이 그리는 그림"(put on · out · off) | HOW 버튼 → 탁자 위 책(아무 데나·점선 자리·독서대·눕힘·툭) / 질문 흐름 + HOLD로 가는 문 / 장소가 꼭 필요한지 · lay와 lie |
| 16 | [16-keep.html](16-keep.html) | KEEP 묶음 — keep · retain · store · save · preserve. "keep이 그리는 그림"(-ing · 형용사 · 약속) | HOW 버튼 → 파일과 시간 축(요일·삭제 정책 방패·보관함·정전·보존 유리) / 질문 흐름 + GIVE로 가는 문 / keep going ✗ to go |
| 17 | [17-say.html](17-say.html) | SAY 묶음 — 목소리로 say · whisper · shout · mutter · murmur. "say와 tell — 가장 많이 틀리는 쌍" | HOW 버튼 → 입에서 퍼지는 물결의 크기·모양(말풍선·귓속말·체육관·뭉개진 말·병실) / 질문 흐름 + TELL로 가는 문 / 따옴표 · that 절 · 듣는 사람(✗ said me) |
| 18 | [18-tell.html](18-tell.html) | TELL 묶음 — tell · inform · explain · warn · remind. "tell · explain — 사람을 어디에 두나" | HOW 버튼 → 미나가 알게 되는 장면(소식·학교 문자·칠판 ①②③·빙판 경고·다시 떠오르는 메모) / 질문 흐름 + ASK로 가는 문 / 사람 + 내용 · of · to + 동사 |
| 19 | [19-ask.html](19-ask.html) | ASK 묶음 — 규모·깊이로 ask · poll · survey · interview · question. "ask가 그리는 그림"(정보·부탁·허락) | HOW 버튼 → 물음표·투표 막대·문항지와 표본·후속 질문·조명 아래 / 질문 흐름 + TELL로 가는 문 / 간접 의문문 어순 |
| 20 | [20-come.html](20-come.html) | COME 묶음 — come · arrive · return · approach · enter. "come과 go" | HOW 버튼 → 집·학교 사이 아이의 이동(이리 오렴·정문 도착·되돌아옴·남은 거리·문턱) / 질문 흐름 + GO로 가는 문 / 장소 앞 전치사 ✓·✗ | |
| 21 | [21-see.html](21-see.html) | SEE 묶음 — see · notice · spot · observe · recognize. "see · look at · watch · observe" | HOW 버튼 → 학생과 새(창밖 빛줄기·흔들리는 잎·잎 속 찾기·10분 관찰 기록·지난주 그 새) / 질문 흐름 + LOOK으로 가는 문 / ✗ saw at | |
| 22 | [22-know.html](22-know.html) | KNOW 묶음 — know · understand · remember · realize · recognize. "상태와 사건" | HOW 버튼 → 머릿속 카드(이미 켜짐·이어짐·꺼내 옴·새 카드·사진과 대조) / 질문 흐름 + THINK로 가는 문 / 명사·절·다른 모양 | |
| 23 | [23-think.html](23-think.html) | THINK 묶음 — think · consider · imagine · guess · decide. "think about와 I think" | HOW 버튼 → 쉼터 계획(생각 구름·두 계획 비교·빈자리의 상상·$30? 짐작·투표로 확정) / 질문 흐름 + KNOW로 가는 문 / to · -ing · that | |
| 24 | [24-want.html](24-want.html) | WANT 묶음 — want · need · wish · hope · prefer. "want 뒤의 세 모양" | HOW 버튼 → 자전거와 소풍(새 자전거·헬멧 없으면 출발 못 함·비 오는 창 ≠ 맑은 날·갤 가능성·빨강 < 파랑) / 질문 흐름 + ASK FOR로 가는 문 | |
| 25 | [25-use.html](25-use.html) | USE 묶음 — use · operate · apply · spend · reuse. "use의 두 발음과 used to" | HOW 버튼 → 미술 시간 고래 그림(태블릿 사진·프린터 ①②③·붓칠·15분 중 10분·택배 상자 재사용) / 질문 흐름 + BORROW로 가는 문 | |
| 26 | [26-find.html](26-find.html) | FIND 묶음 — find · locate · discover · track down · recover. "look for와 find" | HOW 버튼 → 열쇠 찾기(의자 다리 옆·B-12 상자·책장 뒤 구멍·①②③ 단서·틈에서 꺼냄) / 질문 흐름 + LOOK FOR로 가는 문 / tracked it down(✗ tracked down it) | |
| 27 | [27-feel.html](27-feel.html) | FEEL 묶음 — feel · sense · enjoy · suffer · worry. "feel의 쓰임" | HOW 버튼 → 날씨 속 사람(찬 바람·멀리 비 냄새·나무 그늘·산길 추위·폭풍 속 개집 걱정) / 질문 흐름 + TOUCH로 가는 문 | |
| 28 | [28-start.html](28-start.html) | START 묶음 — start · begin · launch · activate · ignite. "start와 begin" | HOW 버튼 → 계획 → 진행 중·1단계·발표 무대·경보 ON·불꽃 / 질문 흐름 + STOP으로 가는 문 / 목적어 없이 시작하는 것들 | |
| 29 | [29-help.html](29-help.html) | HELP 묶음 — help · assist · support · rescue · protect. "help 뒤의 모양" | HOW 버튼 → 상자 같이 들기·실험 기록 보조·연습 응원·물에서 꺼냄·우산 아래 / 질문 흐름 + GIVE로 가는 문 | |
| 30 | [30-move.html](30-move.html) | MOVE 묶음 — move · drag · slide · roll · carry(하위 묶음에서). "move의 여러 뜻" | HOW 버튼 → 창고 상자 A → B(물음표·끌기·미끄러짐·바퀴·들고 감) / 질문 흐름 + PUSH로 가는 문 | |
| 31 | [31-stop.html](31-stop.html) | STOP 묶음 — stop · pause · halt · cancel · finish. "stop doing과 stop to do" | HOW 버튼 → 회의 진행 막대(멈춤·⏸·비상 정지·열리지 않음·다 채움) / 질문 흐름 + START로 가는 문 | |
| 32 | [32-bring.html](32-bring.html) | BRING 묶음 — bring · fetch · deliver · ship(네 동사). "bring과 take — 가져오다·가져가다" | HOW 버튼 → 창고·사무실 소포(이쪽으로·갔다 돌아옴·302호 전달·택배 운송 중) / 질문 흐름 + TAKE로 가는 문 | |
| 33 | [33-leave.html](33-leave.html) | LEAVE 묶음 — leave · exit · walk out of · file out of(네 동사). "leave와 go" | HOW 버튼 → 교실과 복도(빈 교실·옆문 EXIT·걸어 나감·한 줄로) / 질문 흐름 + ESCAPE로 가는 문 | |
| 34 | [34-turn.html](34-turn.html) | TURN 묶음 — turn · rotate · spin · flip · twist. "돌리다 하나, 다섯 동사" | HOW 버튼 → 카드(화살표 방향·90° 회전·빙글빙글·앞뒤 뒤집기·양끝 비틀기) / 질문 흐름 + MOVE로 가는 문 | |
| 35 | [35-hold.html](35-hold.html) | HOLD 묶음 — hold · grip · grasp · clutch · squeeze. "hold가 덮는 것" | HOW 버튼 → 버스 손잡이(잡고 있음·젖은 손잡이·확 붙잡음·겁나서 바짝·비상 손잡이 누름) / 질문 흐름 + PUT으로 가는 문 | |
| 36 | [36-wait.html](36-wait.html) | WAIT 묶음 — wait · await · queue · line up(네 동사). "wait for와 await" | HOW 버튼 → 정류장 버스(20분째·공지문·번호 줄·한 줄로!) / 질문 흐름 + STOP으로 가는 문 | |
| 37 | [37-show.html](37-show.html) | SHOW 묶음 — show · display · point out · demonstrate · reveal. "show · tell · see" | HOW 버튼 → 지도(내밀기·게시판·한 길 짚기·매듭 세 단계·천을 걷음) / 질문 흐름 + TELL로 가는 문 | |
| 38 | [38-open.html](38-open.html) | OPEN 묶음 — open · unlock · uncover · unwrap · unfold. "풀었다고 열린 건 아니다" | HOW 버튼 → 나무 상자(뚜껑 열고 손 넣기·자물쇠만·천 걷기·포장만·지도 펼치기) / 질문 흐름 + CLOSE로 가는 문 | |
| 39 | [39-close.html](39-close.html) | CLOSE 묶음 — close · shut · seal · lock · cover. "짝이 되는 반대말" | HOW 버튼 → 38과 같은 상자(뚜껑 내림·딸깍·테이프 밀폐·자물쇠·천 덮기) / 질문 흐름 + OPEN으로 가는 문 | |
| 40 | [40-pay.html](40-pay.html) | PAY 묶음 — pay · tip · reimburse · refund · settle. "누가 누구에게 내나" | HOW 버튼 → 박물관 하루(입장료·안내원 팁·표값 갚기·투어 환불·잔액 완납) / 질문 흐름 + BUY로 가는 문 | |
| 41 | [41-buy.html](41-buy.html) | BUY 묶음 — buy · order · preorder · buy back(네 동사). "buy · order · pay · get" | HOW 버튼 → 박물관 표(매표소·온라인 주문·출간 전 예약·옛 자전거 되삼) / 질문 흐름 + SELL로 가는 문 | |
| 42 | [42-sell.html](42-sell.html) | SELL 묶음 — sell · resell · retail · wholesale(네 동사). "같은 거래, 누가 주어인가" | HOW 버튼 → 자전거(진 → 미나·되팔기·동네 가게·공장 트럭) / 질문 흐름 + BUY로 가는 문 | |
| 43 | [43-send.html](43-send.html) | SEND 묶음 — send · mail · email · text · forward. "보냈다고 받은 건 아니다" | HOW 버튼 → 미나 → 진(메시지·우체통·첨부 메일·버스 정류장 문자·받은 걸 다시) / 질문 흐름 + BRING으로 가는 문 | |
| 44 | [44-eat.html](44-eat.html) | EAT 묶음 — eat · bite · chew · nibble · devour. "어디까지 가나" | HOW 버튼 → 사과와 입 크게 보기(속까지·한 입·씹고 또·조금씩·샌드위치 순식간에) / 질문 흐름 + DRINK로 가는 문 | |
| 45 | [45-write.html](45-write.html) | WRITE 묶음 — write · jot down · draft · type · compose. "write와 짝이 되는 말" | HOW 버튼 → 종이·화면 크게 보기(쪽지·p. 42·초안 빨간 표시·키보드·카드 ①②③) / 질문 흐름 + SAY로 가는 문 | |
| 46 | [46-read.html](46-read.html) | READ 묶음 — read · skim · scan · reread · read aloud. "skim과 scan" | HOW 버튼 → 고래 기사(줄마다·제목만 지그재그·돋보기로 날짜·같은 문단 다시·소리 내어) / 질문 흐름 + LOOK AT으로 가는 문 | |
| 47 | [47-meet.html](47-meet.html) | MEET 묶음 — meet · greet · visit · gather · join. "만나다 — meet · see · visit" | HOW 버튼 → 도서관 입구·손 흔들기·미나네 집·원형 탁자·빈 의자 +1 / 질문 흐름 + COME으로 가는 문 | |
| 48 | [48-learn.html](48-learn.html) | LEARN 묶음 — learn · study · practice · discover · memorize. "study와 learn" | HOW 버튼 → 분수 규칙(✗→✓·두 시간 공부·반복 문제·조각 맞춰 발견·가리고 외우기) / 질문 흐름 + KNOW로 가는 문 | |
| 49 | [49-play.html](49-play.html) | PLAY 묶음 — play · compete · perform · pretend · rehearse. "play 뒤에 오는 것" | HOW 버튼 → 보드게임·달리기 순위·무대 노래·의사 놀이·D-1 동선 맞추기 / 질문 흐름 + PRACTICE로 가는 문 | |
| 50 | [50-drink.html](50-drink.html) | DRINK 묶음 — drink · sip · gulp · swallow · slurp. "먹다와 drink" | HOW 버튼 → 컵·핫초코 한 모금·꿀꺽·목으로 넘김·후루룩 / 질문 흐름 + EAT으로 가는 문 | |
| 51 | [51-sleep.html](51-sleep.html) | SLEEP 묶음 — sleep · fall asleep · nap · doze · oversleep. "몇 시에 잤다?" | HOW 버튼 → 시간 막대(밤새·잠드는 순간·20분 낮잠·깜빡 졸음·7시 넘김) / 질문 흐름 + WAIT으로 가는 문 | |
| 52 | [52-hear.html](52-hear.html) | HEAR 묶음 — hear · listen · overhear · detect · catch. "see·look과 hear·listen" | HOW 버튼 → 복도 스피커·귀 기울임·교무실 문틈·희미한 삑·닫히는 문 속 역 이름 / 질문 흐름 + SEE로 가는 문 | |
| 53 | [53-change.html](53-change.html) | CHANGE 묶음 — change · alter · modify · transform · replace. "바꾸다의 함정" | HOW 버튼 → 포스터·앱 화면(전후·제목만·큰 버튼·통째로·갈아 넣음) / 질문 흐름 + MAKE로 가는 문 | |
| 54 | [54-fix.html](54-fix.html) | FIX 묶음 — fix · repair · mend · patch(네 동사). "break와 fix" | HOW 버튼 → 재킷(방법 모름·수선사 지퍼·꿰매기·덧대기) / 질문 흐름 + CHANGE로 가는 문 | |
| 55 | [55-borrow.html](55-borrow.html) | BORROW 묶음 — borrow · check out · rent · lease(네 동사). "빌리다의 함정" | HOW 버튼 → 자전거(진에게서·대여소 카드·돈 내고 두 시간·열두 달 계약) / 질문 흐름 + LEND(14 GIVE)로 가는 문 | |
| 56 | [56-plan.html](56-plan.html) | PLAN 묶음 — plan · map out · schedule · organize(네 동사). "think · decide · plan" | HOW 버튼 → 학교 박물관 여행(시간표·경로도·달력 배정·준비 체크) / 질문 흐름 + DECIDE로 가는 문 | |
| 57 | [57-promise.html](57-promise.html) | PROMISE 묶음 — promise · vow · pledge · swear(네 동사). "약속의 함정" | HOW 버튼 → 놀이터 다시 짓기(역할표·엄숙한 다짐·공개 명단 서명·비가 와도) / 질문 흐름 + COMMIT으로 가는 문 | |
| 58 | [58-agree.html](58-agree.html) | AGREE 묶음 — agree · accept · endorse · go along with(네 동사). "agree 뒤에 오는 말" | HOW 버튼 → 소풍안(손 들어 좋아요·채택 도장·학부모 앞 지지·다수 따라감) / 질문 흐름 + REFUSE로 가는 문 | |
| 59 | [59-allow.html](59-allow.html) | ALLOW 묶음 — allow · permit · authorize · let(네 동사). "let과 allow" | HOW 버튼 → 조퇴(가도 돼·규정 확인·서명 승인·고개 끄덕) / 질문 흐름 + REFUSE로 가는 문 | |
| 60 | [60-refuse.html](60-refuse.html) | REFUSE 묶음 — refuse · decline · reject · turn down(네 동사). "거절을 전할 때와 그 자리에서" | HOW 버튼 → 주말 팀 가입 제안(안 할게요·고맙지만·일정 겹침·친구에게) / 질문 흐름 + AGREE로 가는 문 | |
| 61 | [61-fail.html](61-fail.html) | FAIL 묶음 — fail · flunk · bomb(세 동사). "pass와 fail" | HOW 버튼 → 0~100 점수 막대와 합격선 70(68점·42점·점수 모름) / 질문 흐름 + ACHIEVE로 가는 문 | |
| 62 | [62-touch.html](62-touch.html) | TOUCH 묶음 — touch · tap · pat · stroke · poke. "몸 부위를 어떻게 말하나" | HOW 버튼 → 어깨와 접촉 기록 띠(한 번·톡 톡·토닥토닥·쓰다듬음·콕) / 질문 흐름 + PUSH로 가는 문 | |
| 63 | [63-pull.html](63-pull.html) | PULL 묶음 — pull · tug · yank · tow · reel in. "결과는 동사 뒤에" | HOW 버튼 → 줄과 힘 그래프(고른 당김·짧게 두 번·한 번 확·견인·감아 들임) / 질문 흐름 + PUSH로 가는 문 | |
| 64 | [64-cut.html](64-cut.html) | CUT 묶음 — cut · slice · chop · trim · carve. "cut과 break" | HOW 버튼 → 도마 위 당근과 칼질 띠(둘로·얇게·잘게·끝만·꽃 모양) / 질문 흐름 + BREAK로 가는 문 | |
| 65 | [65-grow.html](65-grow.html) | GROW 묶음 — grow · germinate · sprout · mature · flourish. "grow와 increase" | HOW 버튼 → 콩의 한살이 띠(키가 큼·씨앗 안 뿌리·싹이 밖·꼬투리·무성하게) / 질문 흐름 + INCREASE로 가는 문 | |
| 66 | [66-increase.html](66-increase.html) | INCREASE 묶음 — increase · raise · hike · double(네 동사). "raise와 rise" | HOW 버튼 → 표 값 $10 막대(누가 올렸나 모름·▲ 조정·$20 덧붙임·×2) / 질문 흐름 + DECREASE로 가는 문 | |
| 67 | [67-decrease.html](67-decrease.html) | DECREASE 묶음 — decrease · lower · cut · halve(네 동사). "cut의 두 뜻" | HOW 버튼 → 66과 같은 표 값 $20(모름·▼·−$5·÷2) / 질문 흐름 + INCREASE로 가는 문 | |
| 68 | [68-freeze.html](68-freeze.html) | FREEZE 묶음 — freeze · flash-freeze · deep-freeze · refreeze(네 동사). "froze와 frozen" | HOW 버튼 → 콩의 상태 띠(냉동실·급속 냉동기·장기 냉동 창고·녹았다 다시) / 질문 흐름 + MELT로 가는 문 | |
| 69 | [69-melt.html](69-melt.html) | MELT 묶음 — melt · remelt · melt down · liquefy(네 동사). "melt · thaw · dissolve" | HOW 버튼 → 초콜릿 상태 띠(중탕·굳은 걸 다시·바 여러 개 → 한 냄비·기계로 흐르게) / 질문 흐름 + FREEZE로 가는 문 | |
| 70 | [70-mix.html](70-mix.html) | MIX 묶음 — mix · stir · blend · whisk · fold in. "add와 mix" | HOW 버튼 → 전·후 그릇과 손동작 띠(하나로·천천히 돌림·믹서·거품·크게 접어 넣음) / 질문 흐름 + SEPARATE로 가는 문 | |
| 71 | [71-cook.html](71-cook.html) | COOK 묶음 — cook · bake · boil · fry · steam. "굽다·삶다·끓이다·찌다" | HOW 버튼 → 열 → 매체 → 감자 띠(말 안 함·오븐·끓는 물·기름·수증기) / 질문 흐름 + MAKE로 가는 문 | |
| 72 | [72-clean.html](72-clean.html) | CLEAN 묶음 — clean · wash · wipe · scrub · sweep. "닦다·씻다·청소하다" | HOW 버튼 → 교실 바닥(말 안 함·물걸레·마른 천·솔로 문지름·빗자루) / 질문 흐름 + FIX로 가는 문 | |
| 73 | [73-fill.html](73-fill.html) | FILL 묶음 — fill · load · pack · stuff · refill. "그릇과 내용물, 어느 쪽이 목적어" | HOW 버튼 → 상자와 채움 막대(가득·트럭으로·떠날 준비·빈틈 꽉꽉·비운 걸 다시) / 질문 흐름 + EMPTY로 가는 문 | |
| 74 | [74-achieve.html](74-achieve.html) | ACHIEVE 묶음 — achieve · accomplish · attain · reach. "성공했나?" | HOW 버튼 → 모금 막대와 $500 선(합계 달성·맡은 일 체크·다섯 달 막대·온도계가 선에 닿음) / 질문 흐름 + FAIL로 가는 문 | |
| 75 | [75-connect.html](75-connect.html) | CONNECT 묶음 — connect · attach · plug in · link · hook up. "꽂았다 ≠ 켰다" | HOW 버튼 → 경로 종류 띠(말 안 함·붙음·전기·신호·전기+신호) / 질문 흐름 + DISCONNECT로 가는 문 | |
| 76 | [76-count.html](76-count.html) | COUNT 묶음 — count · tally · recount · count out · enumerate. "몇 개? 얼마나?" | HOW 버튼 → 의자 두 줄과 알게 된 것 띠(14개·바른 표시·다시 12·열 개 따로·어느 의자) / 질문 흐름 + MEASURE로 가는 문 | |

01~76 모두 0번(왜 존재하나)과 4·5번(목적어 자리, 경향 한 줄)을 갖췄다. 0번은 묶음 페이지(01·03·05·06·08~76)와 07에서 그림, 02·04에서 표다. 6번(질문 흐름)은 묶음 페이지인 01·03·05·06·08~76와 07에 있다. 02는 묶음 페이지가 아니라 여러 묶음의 구동사를 모은 페이지라 1~3번과 6번 대신 방향 나침반과 진짜·반쯤·비유 표시를 쓴다.

## 다음 후보

- **commit 노트** — 07 COMMIT 페이지를 노트보다 먼저 만들었다. 발음·형태·다섯 갈래를 사전으로 확인해 노트를 만들고, promise 노트의 "commit to future action"과 경계를 맞춘다
- **resolve/ 노트 묶음** — 05 RESOLVE 페이지를 노트보다 먼저 만들었다. `_family.md`와 resolve · settle · sort out · clear up · work out 노트(발음·형태·TARGET 조건)를 만들고 페이지의 "확인할 것"을 정리한다

- 나머지 묶음(3개) — 자주 쓰는 동사부터 아래 "생성기로 만들기" 방식으로 세 개씩 차례로. 다음: draw · hide · measure

## 생성기로 만들기 (08부터)

08부터는 `tools/build.py`가 페이지를 만든다. 결과는 지금처럼 HTML 한 파일이다.

- 원본: `tools/pages/NN-이름.html` — 본문 글, 표, 맨 위 그림 코드, 데이터(TOP · EXIST · SCENES · FLOW · SLOTS)만 적는다.
- 자리표시 `{{PRON}}` `{{TOP|…}}` `{{EXIST}}` `{{SCENES|…}}` `{{FLOW|…}}` `{{SLOTS|…}}`를 쓰면 표준 칸이 들어간다. 쓰는 법은 `tools/build.py` 맨 위 설명.
- 발음 줄은 `<!-- pron: 폴더/노트.md, … -->`에 적은 노트의 Pronunciation (US) 줄에서 자동으로 뽑는다.
- 공통 CSS·함수는 `tools/base.css` · `lib.js` · `boot.js`. 여기를 고치면 생성기로 만든 페이지 전부에 들어간다(01~07은 손으로 만든 페이지라 따로).
- 만들기: `python tools/build.py 08` (이름 일부) · 전부 `python tools/build.py`. 만든 파일(`concepts/NN-이름.html`)은 고치지 말고 원본을 고친다.

목록 화면: [index.html](index.html)
