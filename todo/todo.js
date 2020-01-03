    const db=require('../db');

    let todos = [
    ]      
    function addTodo(todo){
     const newTodo =new db.Todo(todo);
     return newTodo.save();
}
    function editTodo(id,name,description){
    let todo=todos.find(function(todo){
        return todo.id==id;
});
todo.name=name;
todo.description= description;
return todos;
}
function getTodo(){
    //db.Todo.find()
    //.then(data=> {
        //console.log(data);
        return db.Todo.find({});
    
   // return todos;
}
function deleteTodo(id){
    todos=todos.filter(function(todo){
        return todo.id!=id;
    });
    return todos;
}

var name="todo"
exports.addTodo=addTodo;
exports.getTodo=getTodo;
exports.editTodo=editTodo;
exports.deleteTodo=deleteTodo;
exports.name=name;