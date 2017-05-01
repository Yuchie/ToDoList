var express = require('express');
var router = express.Router();
 
// デフォルトルーティング
router.get('/', function (req, res, next) {
    res.render('index', { title: 'My ToDoList', message: 'Hello there!' });
});
 
module.exports = router;