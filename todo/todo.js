
    let todos = [
        {id:0,name:"todo1",description:"todo1 desc"},
        {id:1,name:"todo2",description:"todo2 desc"},          
        {id:2,name:"todo3",description:"todo3 desc"},

 ]
    function addTodo(todo){
        todos.push(todo);
        return todos;
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
    return todos;
}
function deleteTodo(id){
    todos=todos.filter(function(todo){
        return todo.id!=id;
    });
    return todos;
}
function getTodo(){
    return todos;
}
var name="todo"
exports.addTodo=addTodo;
exports.getTodo=getTodo;
exports.editTodo=editTodo;
exports.deleteTodo=deleteTodo;
exports.name=name;