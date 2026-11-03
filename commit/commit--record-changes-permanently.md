# COMMIT — record changes permanently

## 0. Sound & Forms

- **Pronunciation (US):** /kəˈmɪt/ [커**밋**] — 둘째 음절 강세다. `committed` /kəˈmɪt.ɪd/ [커**미**티드].
- **Forms:** `commit` — `committed` — `committed`; 강세가 뒤 음절에 있어 `t`를 겹친다(`committing`도 같음).
- **시제와 결과:** `Mina committed the changes to the park app on Monday.` → `Mina has committed the changes. The fix is part of the project history now.` 넘겨 확정한 사건과 지금 기록에 남아 있는 상태를 구별한다.

- **Sense:** 고친 코드나 데이터 변경을 저장소·데이터베이스의 기록으로 넘겨 확정하다.
- **Example:** `Mina committed the changes to the park app.`
- **Target Condition:** 아직 내 작업 공간에 있어 바꿀 수 있는 코드 변경·트랜잭션
- **Precondition:** 넘길 변경을 골라 두었다(`git add`, 트랜잭션 안의 변경).

## 언제 이 말을 꺼낼까?

Mina가 공원 안내 앱의 지도 버그를 고쳤다. 저장(save)만 하면 파일을 덮어쓸 뿐이다. 메시지를 달아 프로젝트 기록에 새 고리로 남긴다. **변경을 기록으로 넘겨 확정하면** `commit`이다.

- **TARGET:** the changes, a fix, a file, a transaction. 받는 곳은 저장소(`commit to the repository`)·데이터베이스.
- **BASIC/RESULT + HOW:** 넘겨서 되돌릴 수 없게 묶음 + **TARGET이 코드 변경** = 기록 확정. 확정된 고리는 고치지 않고, 되돌릴 때도 `git revert`로 **되돌리는 새 고리**를 단다. 데이터베이스의 `COMMIT`도 같다(확정 전이면 `ROLLBACK`).
- **선택 경계:** `save`는 선을 넘지 않고 덮어쓴다. `push`는 이미 commit한 기록을 팀 저장소로 보내는 다른 단계다.
- **한 문장:** `I committed the changes. I'll push them after lunch.`
- **내 장면:** 작업을 "이 상태로 확정"하고 메시지를 단 순간을 떠올려 보자.

## Scene Scenario

- **PLACE:** 공원 봉사팀의 앱 개발 노트북
- **SITUATION / PROBLEM:** 지도에서 새 화장실 위치가 틀리게 나온다.
- **PURPOSE:** 고친 내용을 나중에 찾아볼 수 있는 확정 기록으로 남긴다.
- **WHY THIS HOW?:** 덮어쓰기가 아니라 번호와 메시지가 붙은 기록으로 넘기므로 `COMMIT`이다.
- **ACTION → RESULT:** `git commit -m "Fix restroom location"` — 기록 사슬에 새 고리가 생긴다.

```text
COMMIT + 코드 변경 (the changes) = 기록 확정
```

## Minimal Contrast

파일을 `save`하면 옛 모습이 사라지고, 변경을 `commit`하면 옛 모습과 새 모습이 기록에 함께 남는다.
