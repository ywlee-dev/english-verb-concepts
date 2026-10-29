# DRAG — pull something along a surface

## 0. Sound & Forms

- **Pronunciation (US):** /dræɡ/ [드랙] — 한 음절; /æ/는 `bag`의 모음이다.
- **Forms:** `drag` — `dragged` — `dragged`; 마지막 `g`를 겹쳐 쓴다.
- **시제와 결과:** `I dragged the box across the warehouse floor this morning.` → `I have dragged the box across the floor. It is by the door now.` 바닥에 닿은 채 끈 HOW가 보인다.

## 1. Sense

- 이번 의미: 대상을 끄는 힘으로 표면을 따라 이동시키다.
- 대표 문장: `I dragged the box across the floor.`

## 언제 이 말을 꺼낼까?

무거운 상자를 들 수 없어 바닥에 붙인 채 문 쪽으로 당긴다. TARGET은 상자·가방·의자처럼 끄는 힘을 받으며 표면을 따라 움직일 수 있는 것이다. `DRAG = 위치가 달라지는 기본 사건 + 표면에 닿은 채 끄는 HOW`. 들고 가는 `carry`와 대비된다. `I dragged the box across the floor.` 최근 끌어서 옮긴 물건을 넣어 말해 보자.

## 2. Real Scene

사람이 바닥 위 상자를 잡고 당긴다. 상자는 바닥과 접촉한 상태로 원래 위치에서 다른 위치까지 이동한다.

## 3. Result Verb

- 후보: `MOVE`
- 핵심 Result: TARGET의 위치가 달라진다.
- 판정 근거: `drag the box`에서 끄는 방식과 표면 접촉을 지워도 `move the box`라는 위치 변화가 남는다.

## 4. Targets

- a box
- a chair
- a heavy bag
- a file icon on a screen

## 5. Common Target Condition

> 끄는 힘이나 그에 대응하는 입력을 받아 한 위치에서 다른 위치로 옮겨질 수 있는 대상

화면의 아이콘은 바닥과 물리적으로 접촉하지 않지만, 사용자의 연속적인 포인터 동작을 따라 위치가 변한다는 구조를 공유한다.

## 6. Target Compatibility Test

| 동일 TARGET | Result Verb 표현 | Specific Verb 표현 | 자연스러움 | Result 보존 |
|---|---|---|---|---|
| the box | move the box | drag the box | 둘 다 자연스러움 | 위치 변화 유지 |
| the chair | move the chair | drag the chair | 둘 다 자연스러움 | 위치 변화 유지 |
| the icon | move the icon | drag the icon | 둘 다 자연스러움 | 화면상 위치 변화 유지 |

따라서 이 의미에서 `MOVE`는 적절한 Result Verb다.

## 7. Preconditions

- 이동시킬 TARGET이 존재한다.
- TARGET에 끄는 힘 또는 연속적인 이동 입력을 전달할 수 있다.
- TARGET이 이동할 수 있는 경로나 공간이 있다.

## 8. BEFORE → HOW → AFTER

```text
BEFORE

📦 A

사람이 상자에 끄는 힘을 계속 가함
상자가 바닥과 접촉한 채 힘의 방향을 따라 이동함

   ─────────── DRAG ───────────→

AFTER

                              📦 B
```

## 9. Result + HOW

```text
MOVE
+ 끄는 힘을 받아 표면과 접촉한 채 이동
= DRAG
```

## 10. HOW Family

| Verb | Shared Result | Distinctive HOW | Same-target example |
|---|---|---|---|
| MOVE | 위치 변화 | 방식 미지정 | move the box |
| DRAG | 위치 변화 | 끄는 힘을 받아 접촉한 채 이동 | drag the box |
| SLIDE | 위치 변화 | 표면을 따라 미끄러져 이동 | slide the box |

`roll the box`는 상자의 형태와 문맥상 실제로 굴릴 수 있을 때만 자연스럽다.

## 11. Sentence Expansion

`I dragged the box across the floor to the door.`

```text
drag(
  target = the_box,
  path = across_the_floor,
  destination = the_door
)
```

- `across the floor`: 이동이 펼쳐지는 PATH
- `to the door`: 이동의 DESTINATION

## 12. Minimal Contrast

- `I moved the box.` — 위치 변화만 말하며 방식은 열어 둔다.
- `I dragged the box.` — 같은 위치 변화에 끄는 방식이 추가된다.
- 장면 차이: `DRAG`는 이동을 일으킨 HOW를 더 구체적으로 보여준다.

## 13. Scene Scenario
- **PLACE:** 엘리베이터가 없는 창고 바닥
- **SITUATION:** 무거운 box를 출입문까지 옮겨야 하지만 혼자 들어 올리기 어렵다.
- **PURPOSE:** 들어 올리지 않고 box의 위치를 바꾼다.
- **WHY THIS HOW?:** TARGET이 무겁고 바닥은 연속된 경로를 제공하므로 접촉한 채 끄는 `DRAG`가 선택된다.
- **ACTION → RESULT:** 손잡이를 잡아 지속적으로 당기고, box가 바닥과 마찰하며 문 쪽으로 이동한다.
