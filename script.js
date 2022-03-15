
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector (".inputField button");
const to_do_list= document.querySelector (".to_do_list");
const deleteAllBtn = document.querySelector (".footer button");

inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.value;
    if (userEnteredValue.trim() !=0 ) {
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}

showTasks ();

addBtn.onclick = ()=>{
    let userEnteredValue = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New To-Do");
    if(getLocalStorageData == null) {
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push (userEnteredValue);
    localStorage.setItem("New To-Do", JSON.stringify(listArray));
    showTasks();
    addBtn.classList.remove("active");
}

function showTasks () {
    let getLocalStorageData = localStorage.getItem("New To-Do");
    if(getLocalStorageData ==null) {
        listArray = [];
    }else{
        deleteAllBtn.classList.add("active");
    }
    let newLiTag = "";
    listArray.array.forEach((element, index) => {
        newLiTag += <li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span>
    </li>
    });
    to_do_list.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask (index) {
    let getLocalStorageData = localStorage.getItem("New To-Do");
    listArray = JSON.parse (getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New To-Do", JSON.stringify(listArray));
    showTasks();
}
deleteAllBtn.onclick = ()=>{
    listArray = [];
    localStorage.setItem("New To-Do", JSON.stringify(listArray));
    showTasks();
}