const express=require('express');
const todo=require('./todo/todo');
todo.addTodo

const app=express();

const port=3000
app.get('/', function(req,res){
    const todos=[
        {name:"todo1",description:"todo1 desc"},
        {name:"todo2",description:"todo2 desc"},          
        {name:"todo3",description:"todo3 desc"},

    ]
    res.send(JSON.stringify(todos));

})
app.listen(port,function(){
    console.log(`example app listening on port ${port}!`)
})