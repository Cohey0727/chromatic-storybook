# VRT検証

## コマンド

| コマンド | 内容 |
| --- | --- |
| dev | 開発サーバーを起動する |
| build | TypeScriptのビルドを行い、その後Viteでプロダクションビルドを実行する |
| lint | TypeScriptとTypeScript React（.tsと.tsx）ファイルに対してESLintを実行し、未使用の無効化ディレクティブを報告し、警告の最大数を0に設定する |
| preview | ビルドされたプロダクションバージョンをプレビューする |
| storycap | localhost:6006で起動しているStorybookのスクリーンショットを撮影する |
| build-storybook | Storybookの静的ビルドを実行する |
| sb:dev | 開発モードでStorybookを起動し、ポート6006で提供する |
| sb:build | pnpmを使用してStorybookをビルドする |
| sb:serve | ビルドされたStorybookの静的ファイルをポート6006で提供する |
| reg:build | reg-suitを実行し、ビジュアルリグレッションテストを行う |
| reg:serve | .regディレクトリの内容をポート7070で提供する |
