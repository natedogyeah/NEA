const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('databaseNEA.db')
var express = require('express')
var socket = require('socket.io');
var app = express();
app.use(express.static('public'))
var server = app.listen(3000, function() {
    console.log('server running')
})

var io = socket(server)
io.on('connection', connected)

function connected(socket){
    console.log(socket.id + 'has connected')
    socket.on('insert', function(data){
        insertHighScore(data)
    })
    socket.on('request', function(data){
        getScores(data)
    })
}

function getScores(){
    let sql = "SELECT * FROM Highscores ORDER BY score DESC;";
    db.all(sql,function(err,rows){
        if(err){
            console.log("ERROR" + err)
        }
        else{
            console.log(rows)
            sendData = 
            {
                Name: rows.Name,
                Score: rows.Score
            }
            io.emit('sendscores', rows);
        }
    })
}

function insertHighScore(data){
    let sql = "INSERT INTO Highscores (Name, Score) VALUES('" + data.coins + "','" + data.name + "');";
    db.all(sql,function(err, rows){
        if (err){
            console.log(err)
        }else{
            console.log("success")
        }
    })
}