let Id = 1;
let todoState: todo[] = [];
let oldTodoState: todo[] = [];

interface todo {
    id: number,
    title: string,
    description: string,
    completed: boolean
}

function addTodo(){
    const title = (document.getElementById("title") as HTMLInputElement).value
    const description = (document.getElementById("description") as HTMLInputElement).value
    todoState.push({
        id: Id++,
        title,
        description,
        completed: false
    })
    updateState();
}

function removeTodo(todo: todo){
    const element = document.getElementById(String(todo.id));
    element?.parentElement?.removeChild(element)
}

function updateTodo(oldTodo: todo, newTodo: todo){
    const element = document.getElementById(String(oldTodo.id));
    if(element !== null){
        element.children[0].innerHTML= newTodo.title;
        element.children[1].innerHTML= newTodo.description;
        element.children[2].innerHTML= newTodo.completed ? "Mark as done" : "Done";
    }
}

function updateState(){
    const added : todo[]  = [];
    const deleted : todo[] = [];
    const updated : todo[] = [];

    for(let i = 0; i< todoState.length; i++){
        const todo = todoState[i];
        let ind = oldTodoState.findIndex( elt => elt.id == todo.id);
        if (ind == -1){
            added.push(todo);
        }
        else{
            if(todo == oldTodoState[ind])
                deleted.push(todo)
            else
                updated.push(todo)
        }
    }

}