const express=require('express');
const bodyParser=require('body-parser')

const todo = require('./todo/todo');

const app = express();
app.use(bodyParser.json());

const port=3000;

app.get('/', function(req,res){
    const todos= todo.getTodo();
    res.json(todos);
})
app.post('/create',function(req,res){
    console.log(req.body);
    res.json([]);
})
    app.get('/add', function(req,res){
        const todos = todo.addTodo({id:3, name:"todo4", description:"todo4 desc"});
        res.json(todos);
})
app.get('/delete',function(req,res){
    console.log(req.query.id,"id");
    const todos=todo.deleteTodo(req.query.id);
    res.json(todos);
})
app.listen(port, function(){
    console.log(`example app listening on port ${port}!`)
})