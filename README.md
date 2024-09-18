# ヤマレコ日記フィルタ

ユーザーIDに基づいてヤマレコの日記をフィルタリングする Tampermonkey スクリプトです。

スクリプト中の `blacklist` にユーザIDを登録することで、特定のユーザーによって投稿された日記を非表示にできます。

## 特徴
- ブラックリストに登録されたユーザーの日記を自動的に非表示にします。
- 対象ユーザーのニックネームが変更されても引き続き動作します。
- シンプルで軽量です。

## インストール方法
1. ブラウザー拡張機能の [Tampermonkey](https://www.tampermonkey.net/) をインストールしてください。
2. Chrome の場合、拡張機能の管理画面の「デベロッパーモード」をONにしてください。
3. Tampermonkey のダッシュボードから新規スクリプトを開き、userscript.js の内容をコピー＆ペーストしてください。
4. スクリプト中の `blacklist` 配列変数の値を編集し、対象ユーザーの ID を指定してください。

## 設定例

初期値では、ユーザー ID 123 と 456 と 789 が指定されています。

この部分を書き換えてください。

```javascript
const blacklist = [123, '456', 789];
```

ユーザー ID は、プロフィールページ URL の「NNNN」の部分です。

https://www.yamareco.com/modules/yamareco/userinfo-NNNN-prof.html

## 使い方
1. ブラウザーで [ヤマレコの日記ページ](https://www.yamareco.com/modules/diary/diarylist_summary.php) を開きます。
2. スクリプトが発動し、指定されたユーザーの日記が自動的に非表示になります。
