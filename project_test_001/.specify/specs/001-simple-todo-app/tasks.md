# タスク: シンプル Todo アプリ (Feature: 001-simple-todo-app)

このファイルは `/speckit.tasks` によって生成されました。
全てのタスクは `[ ] [TaskID] [P?] [Story?] Description` の形式に従う必要があります。

## フェーズ 1: セットアップ (プロジェクト初期化)

- [x] T001 プロジェクト初期化 (Vite + React + TS) `Run: npm create vite@latest .`
- [x] T002 Tailwind CSS のインストールと設定 `src/index.css`, `tailwind.config.js`
- [x] T003 依存関係のインストール (lucide-react) `package.json`
- [x] T004 テスト環境のセットアップ (Vitest + React Testing Library) `vitest.config.ts`, `tests/setup.ts`
- [x] T005 [P] ディレクトリ構造の作成 `src/components`, `src/hooks`, `src/types`, `tests/unit`, `tests/integration`

## フェーズ 2: 基盤実装 (共通コンポーネント・ロジック)

- [x] T006 [P] 型定義の作成 (Task 型) `src/types/index.ts`
- [x] T007 [P] LocalStorage フックの実装 `src/hooks/useLocalStorage.ts`
- [x] T008 [P] useLocalStorage のユニットテスト作成 `tests/unit/hooks/useLocalStorage.test.ts`
- [x] T009 アプリケーションの基本レイアウト実装 (タイトル、コンテナ) `src/App.tsx`

## フェーズ 3: ユーザーストーリー 1 - タスクの追加 (P1)

_ゴール: ユーザーがテキストを入力してタスクをリストに追加できる_

- [x] T010 [P] [US1] AddTaskForm コンポーネントの作成 `src/components/AddTaskForm.tsx`
- [x] T011 [P] [US1] 基本的な TaskItem コンポーネントの作成 (テキスト表示のみ) `src/components/TaskItem.tsx`
- [x] T012 [P] [US1] TaskList コンポーネントの作成 `src/components/TaskList.tsx`
- [x] T013 [US1] App コンポーネントにタスク追加ロジックとリスト表示を実装 `src/App.tsx`
- [x] T014 [US1] タスク追加機能の統合テスト作成 `tests/integration/AddTask.test.tsx`

## フェーズ 4: ユーザーストーリー 2 - タスクの完了 (P1)

_ゴール: ユーザーがタスクを完了/未完了に切り替えられる_

- [ ] T015 [US2] TaskItem に完了切り替え機能 (チェックボックスとスタイル) を追加 `src/components/TaskItem.tsx`
- [ ] T016 [US2] App コンポーネントに完了状態切り替えロジックを実装 `src/App.tsx`
- [ ] T017 [US2] タスク完了機能の統合テスト作成 `tests/integration/CompleteTask.test.tsx`

## フェーズ 5: ユーザーストーリー 3 - データの保存 (P1)

_ゴール: ブラウザを閉じてもデータが保持される_

- [ ] T018 [US3] App コンポーネントの状態管理に useLocalStorage を統合 `src/App.tsx`
- [ ] T019 [US3] データの永続化を手動検証 (ブラウザリロードテスト)

## フェーズ 6: ユーザーストーリー 4 - タスクの削除 (P2)

_ゴール: ユーザーがタスクを削除できる_

- [ ] T020 [US4] TaskItem に削除ボタンを追加 `src/components/TaskItem.tsx`
- [ ] T021 [US4] App コンポーネントに削除ロジックを実装 `src/App.tsx`
- [ ] T022 [US4] タスク削除機能の統合テスト作成 `tests/integration/DeleteTask.test.tsx`

## フェーズ 7: 仕上げ & 非機能要件

- [ ] T023 [P] 全体的なスタイリングの調整 (Tailwind CSS) `src/index.css`, `src/App.tsx`
- [ ] T024 [P] エッジケースの検証 (長いテキスト、空文字など)
- [ ] T025 README の作成 `README.md`
- [ ] T026 最終動作確認

## 依存関係グラフ

1. Setup -> Foundation
2. Foundation -> US1
3. US1 -> US2 (Completion builds on Item/List)
4. US2 -> US3 (Persistence works on existing state)
5. US2 -> US4 (Delete modifies existing list)

## 実装戦略

1. **MVP**: T001-T019 (US1, US2, US3) を優先して実装します。
2. **増分**: 各フェーズ完了ごとにコミットし、動作確認を行います。
3. **テスト**: コンポーネント作成時に基本的なレンダリングテストを行うことを推奨します。
