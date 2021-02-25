const tasks = document.querySelector('.inputs');
tasks.addEventListener('click', function(event){
    if (tasks.children.length == '1' ) {
        document.querySelector('.lastSec').style.visibility = 'visible';
       }
    if(event.target.type == 'checkbox' && event.target.checked && tasks.children.length > "1"){
        tasks.removeChild(event.target.parentElement);
    }
})
const newTask = document.querySelector('.inputText');
const addTask = document.querySelector('.but');
const closeButton = document.querySelector('.closeBut');
const closeButton1 = document.querySelector('.closeBut1');

addTask.addEventListener('click', function(){
    if(newTask.value == ""){
        document.querySelector('.last').style.visibility = 'visible';
    }
    let value = newTask.value;
    if(value){
        addElem(value);
    }
    newTask.value = '';
})


function addElem(value){
    let newElem = 
    `<div class="inputStyle">
        <input type="checkbox">
        <span>${value}</span>
     </div>`;
     tasks.insertAdjacentHTML('afterbegin', newElem);
}
console.log(closeButton);
closeButton.addEventListener('click', function(){
    document.querySelector('.last').style.visibility = 'hidden';
})
closeButton1.addEventListener('click', function(){
    document.querySelector('.lastSec').style.visibility = 'hidden';
})