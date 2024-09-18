// ==UserScript==
// @name         ヤマレコ日記フィルタ
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  ブラックリストに登録したユーザーの日記を非表示にするスクリプト（ユーザー番号対応）
// @author       Bunatree
// @match        https://www.yamareco.com/modules/diary/*
// @grant        none
// ==/UserScript==

(function() {

  'use strict';

  // ユーザー番号でブラックリストを指定します。
  // ユーザー番号は、プロフィールページURLの「NNNN」の部分です。
  // https://www.yamareco.com/modules/yamareco/userinfo-NNNN-prof.html
  // 数値でも文字列でもOKです。
  const blacklist = [123, '456', 789];

  // ブラックリスト内のすべての要素を文字列に変換
  const blacklistStr = blacklist.map(String);

  // 日記コーナーの全ての日記を取得
  const diaryElms = document.querySelectorAll('#diary_list .block');

  // 各日記をループ処理
  diaryElms.forEach((diarySingleElm) => {
      // 投稿者のプロフィールページへのリンクを取得
      const userLink = diarySingleElm.querySelector('.right .ft a');
      if (userLink) {
          // リンクからユーザー番号を抽出（userinfo-NNNN-prof.html の NNNN 部分）
          const userHref = userLink.getAttribute('href');
          const userIdMatch = userHref.match(/userinfo-(\d+)-prof\.html/);

          // ユーザー番号が取得できた場合、ブラックリストと照合
          if (userIdMatch) {
              // 正規表現で抽出したユーザー番号
              const userId = userIdMatch[1];
              // リンクのテキストからユーザー名を取得
              const userName = userLink.textContent.trim();
              if (blacklistStr.includes(userId)) {
                  // 日記を非表示にする
                  console.log(`Found a diary authored by the user ${userName} (id: ${userId}). Hide it!`);
                  diarySingleElm.style.display = 'none';
              }
          }
      }
  });
})();
