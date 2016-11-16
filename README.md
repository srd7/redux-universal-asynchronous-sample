# redux-universal-asynchronous-sample

Qiitaネタ。
解説は Qiita を読んでください。

Reduxをベースとし、非同期通信でのデータ処理を含んだSPAを作成する方法  
http://qiita.com/srd7/items/ae1b9f4d84a1aa070f3b

## 概要
クライアントおよびサーバーサイドを Redux で universal(isomorphic)に作成。
はじめのリクエスト時に非同期でデータを取得し、初期HTMLに反映させる。

## 動かし方

```
npm install
npm run dev
```

## 作成環境
Node.js v7.1.0
