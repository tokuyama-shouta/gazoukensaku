import React from 'react'; // 4 react インポート
import ReactDOM from 'react-dom'; 
import App from './App'; 

ReactDOM.render(<App/>,document.querySelector('#root')); 

// 0 環境構築 スタート！
// 1 デフォルトのファイル消去、semantic ui cdn(index.htmlに)導入,indexjsとApp.js作成
// 2 App.js→React import→Appコンポーネントをアロー関数で作成→App エクスポート
// 3 index.js→React import ReactDOM import→App.js import
// 4 画面に出力する→ReactDOM.render(<App />,document.querySelecter('#root'));
// 5 一度 npm start
// 6 src components d 作成→Bar.js作成
// 7 Bar.js React import→Barコンポーネントをアロー関数で作成 return 
// 8 export default Bar
// 9 Bar.jsをApp.jsにimport
// 10 semantic ui formのコードをコピー→Barの中身にコピー
// 11 App.js クラスを当てるui container→直接css書く
// 12 placeholderは空 nameはserch
// 13 enterを押された時の関数を作成
// 14 中にevent.prevantDefault()を入れる
// 15 formにonSubmitで関数を呼ぶようにする
// 16 SearchBar.js useState
// 17 入力された値をuseStateで管理 キーワード設定、キーワードを変更するやつも設定
// 18 初期値は空の文字列にしておく
// 19 inputの表示する内容 value→キーワード onchange関数eventを引数
// 20 コンソールにuserが検索したキーワードが表示されるか
// 21 App.jsに関数を作成 引数にキーワード
// 22 作成した関数を<SearchBar />にpropsとして渡す
// 23 渡されたやつをpropsで受け取る
// 24 log をキーワードに変更
// 25 API key q を取得
// 26 yarn add axios (http通信を実現する)
// 27 App.js axiosをimport
// 28 関数内を修正
// 28 非同期通信 async→try{}catch{}構文
// 29 こちらから向こうに渡すパラメーターを定義
// 30 keyコピーしたやつとqのパラメーター（キーワード）
// 31 pixavaのAPIを叩く（response=await axios.get("url"),{パラメーター}）
// 32 logに表示してみよう
// 33 App.js useState
// 34 キーワード設定、キーワードを変更するやつも設定、初期値は空の配列
// 35 log ki-wa-do変更(response.data.hits);
// 36 画像を検索しても出なかった場合のif文を作成
// 37 処理はアラートで注意ぶん書く
// 38 catch 通信が失敗したことをアラーとする
// 39 component d imageList.js作成
// 40 React import コンポーネントをアロー関数で作成→ekusupo-to
// 41 map使う 引数はimage
// 42 aタグ 繊維先 image.pageURL key{image.id} 別タブで開く rel(セキュリティ)
// 42 className 
// 43 img src={image.webformatURL} alt={image.tags}
// 44 images return
// 45 app.js imageList images={images}
// 46 環境変数の導入（GitHubにAPIキーを載せることを防ぐ）
// 47 .env.local REACT_APP_PIXABAY_APIKEY='xxxxxxxxxxxxxxxxxxxxxxxxxxx'
// 48 Appjs ApiKey = props.env.変数名
// 49 keyをApiKeyに変更
// 50 一度画像検索ができるか確認
// 51 npm install --save react-masonry-components
// 52 imageList.js Masonry import
// 53 imagelist imagesをMasonryコンポーネントで囲む classをつける
// 54 logoダウンロード→srcにlogoをいれる
// 55 app.js logo import
// 56 imgタグ src{logo} alt logo className logo
// 57 src styles d →imagelist.css
// 58 css 設定 imagelist.js css import 
// 59 ui segment→kennsakuba-変更
// 60 ゴール！