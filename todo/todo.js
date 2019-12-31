
    const todos =
        {name:"todo1",description:"todo1 desc"},
        {name:"todo2",description:"todo2 desc"},          
        {name:"todo3",description:"todo3 desc"},

    ]
    function addTodo(todo){
        todos.push({name:"todo4",description:"todo$ desc"});
        return todos;
}
function getTodo()
return todos;
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
exports.deleteTodo=deleteTodo;
exports.name=name;