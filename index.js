const express=require('express');
const app = express();
const todo = require('./todo/todo');
todo.addTodo("todo")

const port=3000
app.get('/', function(req,res){
    const todos= todo.getTodo();
    res.json(todos);
})
    app.get('/add',function(req,res){
        const todos=todo.addTodo({id:3,name:"todo4",description:"todo4 desc"});
        res.json(todos)
})
app.get('/login',function(req,res){
    res.send("Login Page");

})
app.get('/delete',function(req,res){
    console.log(req.query.id,"id");
    const todos=todo.deleteTodo(req.query.id);
    res.json(todos);
})
app.listen(port,function(){
    console.log(`example app listening on port ${port}!`)
})