# VS Code에서 Markdown Preview를 기본으로 열기

모든 `.md` 파일을 원문 편집기 대신 렌더링된 **Markdown Preview**로 열고 싶을 때 사용하는 설정이다.

## 현재 프로젝트에서만 적용

1. VS Code에서 `Ctrl + Shift + P`를 누른다.
2. `Preferences: Open Workspace Settings (JSON)`을 실행한다.
3. 다음 설정을 추가하고 저장한다.

```json
{
  "workbench.editorAssociations": {
    "*.md": "vscode.markdown.preview.editor"
  }
}
```

기존 `settings.json`에 다른 설정이 있다면 파일 전체를 교체하지 말고, `workbench.editorAssociations` 항목만 합친다.

## 모든 프로젝트에서 적용

`Ctrl + Shift + P`에서 `Preferences: Open User Settings (JSON)`을 실행한 뒤 같은 설정을 추가한다.

## 특정 파일만 원문으로 편집

1. 열린 Markdown 파일의 탭에서 마우스 오른쪽 버튼을 누른다.
2. `Reopen Editor With...`를 선택한다.
3. `Text Editor`를 선택한다.

## 단축키

- `Ctrl + Shift + V`: Markdown Preview 열기 또는 전환
- `Ctrl + K`, 그다음 `V`: Preview를 옆쪽에 열기

## 기본 Preview 설정 해제

`settings.json`에서 다음 연결을 제거한다.

```json
"*.md": "vscode.markdown.preview.editor"
```

그러면 `.md` 파일이 다시 기본 Text Editor로 열린다.
