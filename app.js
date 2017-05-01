var express = require('express');
var bodyParser = require('body-parser');
 
// express の実態 Application を生成
var app = express();
app.use(bodyParser.urlencoded({extended: true}));

// リンク設定
var todolist = require('./routes/todolist');
 
// テンプレートエンジンを EJS に設定
app.set('views', './views');
app.set('view engine', 'ejs');
 
// 静的ファイルは無条件に公開
app.use('/public', express.static('public'));
 
// ルーティング設定
app.use('/', require('./routes/index.js'));

// リンク設定
app.use('/todolist', todolist);
 
// サーバーをポート 3000 で起動
//app.listen(3000);
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

// アプリケーション開始ログ
console.log('Server running at http://localhost:3000');
