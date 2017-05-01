var express = require('express');
var router = express.Router();
var connection = require('../mysqlConnection'); //add database

connection.connect();

router.get('/', function (req, res, next) {
	var query = 'SELECT * FROM boards';
    connection.query(query, function(err, rows){
    	console.log(rows);
    	res.render('todolist', {
    		title: 'My ToDoList',
    		message: 'This is your to-do-list.',
    		boardList: rows
    	});
    });
});

router.post('/', function(req, res, next){
	var task = req.body.task;
	console.log(task);
	var query = 'INSERT INTO boards (title, status) VALUES ("' + task + '", ' + '"' + 0 + '")';
	connection.query(query, function(err, rows){
		res.redirect('/todolist');
	});
});

router.put(':id', function(req, res, next){
	console.log('/checked');
});

module.exports = router;