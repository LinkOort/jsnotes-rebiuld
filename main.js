function createNote() {
    var noteTemplate = document.createElement("div")
    noteTemplate.setAttribute("id", "sample")
    document.querySelector('.noteArea').appendChild(noteTemplate)
}

function divtoappendButtons() {
    var div = document.createElement("div")
    div.setAttribute("id", "buttonarea")
    document.getElementById("sample").appendChild(div)
}

function delButton() {
    var btcreate = document.createElement("button")
    btcreate.textContent = "Apagar"
    btcreate.classList.add("btdel")
    document.getElementById("buttonarea").appendChild(btcreate)
}

function editButton() {
    var btcreate = document.createElement("button")
    btcreate.textContent = "Editar"
    btcreate.classList.add("btedit")
    document.getElementById("buttonarea").appendChild(btcreate)
}

function appendText() {

}

function editNote() {

}

function deleteNote() {

}

function darkMode() {
    //background color, navbar color
    var colors = ['#292534', '#242338']
    document.body.style.background = colors[0]
    document.querySelector('.top').style.background = colors[1]
    document.querySelector('.darkMode').textContent = "Default Color"
}

function defaultColor() {
    //background color, navbar color
    var colors = ['#fff1ff', '#9A93F2']
    document.body.style.background = colors[0];
    document.querySelector('.top').style.background = colors[1]
    document.querySelector('.darkMode').textContent = "Dark Mode"    
}

document.querySelector('.save').addEventListener("click", function() {
    createNote()
    divtoappendButtons()
    delButton()
    editButton()
})

document.querySelector('.darkMode').addEventListener("click", function() {
    var check = "Dark Mode"
    if (document.querySelector('.darkMode').textContent == check) {
        darkMode()
    } else {
        defaultColor()
    }
})
