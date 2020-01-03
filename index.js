const express=require('express');
const bodyParser=require('body-parser')
const todo = require('./todo/todo');
const app = express();
app.use(bodyParser.json());
const port=3000;

app.get('/',function(req,res){
    todo.getTodo()
    .then(todos=>{
    res.json(todos);
})
})
app.post('/create',function(req,res){
  todo.addTodo(req.body)
  .then(data=>{
  res.json(data);
});
})
app.put('/edit/:id',function(req,res){
    const todos=todo.editTodo(req.params.id,req.body.name,req.body.description);
    res.json(todos);
})
   /* app.get('/add', function(req,res){
        const todos = todo.addTodo({id:3, name:"todo4", description:"todo4 desc"});
        res.json(todos);

app.delete('/delete/:id',function(req,res){
    const id=req.params.id;
    const todos=todo.deleteTodo(id);
    res.json(todos);*/
app.listen(port, function(){
    console.log(`example app listening on port ${port}!`)
})