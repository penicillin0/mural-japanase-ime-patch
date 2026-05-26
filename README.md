# mural-japanase-ime-patch

Mural (https://app.mural.co/) で付箋を編集中、IME の変換候補を Tab キーで選択しようとすると、Mural の Tab ショートカットが反応して新しい付箋が生成されてしまう問題をパッチ的に直す Chrome 拡張機能です。

IME 変換中 (composition 中) の Tab キーイベントを、キャプチャフェーズで捕まえて Mural のハンドラに伝播させないことで回避します。変換中以外の Tab は通常どおり動作します。

## インストール方法

1. Chrome で `chrome://extensions` を開く
2. 右上の「デベロッパーモード」を ON にする
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. このリポジトリのフォルダを選択

## ファイル構成

- `manifest.json` — 拡張機能のマニフェスト (Manifest V3)
- `content.js` — `app.mural.co` で動作するコンテンツスクリプト
