let button=document.querySelector("button");
let liste=document.querySelector("ul");
let input=document.querySelector("input");

button.addEventListener("click",addToDo);
let i=0;
function addToDo(){
    if (input.value==""){
        alert("input is empty, write something");
        return;}
    else{
    let li=document.createElement("li");
    li.id="to-do-"+i;
    i++;
    let span=document.createElement("span");
    let spanimg=document.createElement("span");
    span.innerHTML=input.value;
    let checkbox=document.createElement("input");
    checkbox.type="checkbox";
    let button=document.createElement("button");
    button.innerText="delete this task";
    button.addEventListener("click",deleteToDo);
    checkbox.addEventListener("change",check);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    liste.appendChild(li);
    }
}

function isInputempty(){
    if (input.value==""){
        return true;
    }
    return false;
}

input.addEventListener("keypress",function(e){
    if (e.key=="Enter"){
        addToDo();
    }
});

function deleteToDo(e){
    let id=e.target.parentElement.id;
    let elementToDelete=document.getElementById(id);
    elementToDelete.remove();
}
function check(e){
    if (e.target.checked==true){
        e.target.parentElement.querySelector("span").style.textDecoration="line-through";
    }
    else{
        e.target.parentElement.querySelector("span").style.textDecoration="";
    }
}

