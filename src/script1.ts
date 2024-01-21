let globalId = 1;

function createChild(title: string, description: string, id: number){
    const child = document.createElement("div");
    child.setAttribute("id", String(id))
    const firstParent = document.createElement("div")
    firstParent.innerHTML= title;
    const secondParent = document.createElement("div")
    secondParent.innerHTML= description;
    const thirdParent = document.createElement("button")
    thirdParent.innerHTML= "Mark as done";
    thirdParent.setAttribute("onclick", `markAsDone(${id})`);
    child.appendChild(firstParent);
    child.appendChild(secondParent);
    child.appendChild(thirdParent);
    return child;
}
function markAsDone(todoId: number){
    const parent = document.getElementById(String(todoId));
    //@ts-ignore
    parent.children[2].innerHTML = "Done!"
}

function addTodo1(){
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const description = (document.getElementById("description") as HTMLInputElement).value;
    const parent = document.getElementById("todos");

    parent?.appendChild(createChild(title, description, globalId++))

}