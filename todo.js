let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let checkBtn=document.querySelector('.check');
let del=document.querySelector('.butt');


addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    if(inputField.value==""){
        alert('contenu vide')
    }else{
        paragraph.innerText = inputField.value;
        toDoContainer.innerHTML=`<li> <div class="item"><input class="check" type="checkbox"/> <span id="text"> ${paragraph.innerText} </span> <button class="butt" > Delete</button> </div></li>`;
        inputField.value = "";}
    })

checkBtn.addEventListener('click', function(){
    var paragraph=toDoContainer.innerHTML;
    paragraph.style.textDecoration = "line-through";
})
del.addEventListener('click', function(){
    var paragraph=toDoContainer.innerHTML;
    toDoContainer.removeChild(paragraph);
})

