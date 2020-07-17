var bsave = document.querySelector('.save')
bsave.addEventListener("click", function() {
    createNote()
    delButton()
}) 
function createNote() {
    var noteTemplate = document.createElement("div");
    noteTemplate.setAttribute("id", "sample");
    document.querySelector('.noteArea').appendChild(noteTemplate);
}
function divtoappendButtons() {
    var div = document.createElement("div");
    div.setAttribute("id", "buttonarea");
    document.getElementById("sample").appendChild(div);
}
function delButton() {
    var btcreate = document.createElement("button");
    btcreate.textContent = "Apagar"
    btcreate.classList.add("btdel");
    document.getElementById("buttonarea").appendChild(btcreate);
}
function editButton() {
    var btcreate = document.createElement("button");
    btcreate.textContent = "Editar"
    btcreate.classList.add("btedit");
    document.getElementById("buttonarea").appendChild(btcreate);
}

function appendText() {
    
}

function editNote() {

}

function deleteNote() {

}

function darkMode() {
   
}