var bSubmmit = document.querySelector(".save");
bSubmmit.addEventListener("click", function(createNote) {

    var insertContent = document.getElementById("content");
    var text = document.querySelector(".inputText");

    var divNote = document.createElement("div");
    divNote.setAttribute("id", "divNote");
    divNote.classList.add("divNote");
    document.body.appendChild(divNote);
    insertContent.appendChild(divNote);

    var edit = document.createElement("button");
    edit.classList.add("edit");
    edit.setAttribute("id", "edit");
    edit.textContent = "Editar"
    edit.addEventListener("click", edtNote);
    document.body.appendChild(edit);
    insertContent.appendChild(edit);
    
    var del = document.createElement("button");
    del.addEventListener("click", delNote);
    del.classList.add("del");
    del.textContent = "Apagar";
    document.body.appendChild(del);
    insertContent.appendChild(del);
   
    var note = document.createElement("p");
    note.setAttribute("id", "note")
    note.classList.add("note");
    document.body.appendChild(note);
    insertContent.appendChild(note);
    note.textContent = text.value;

    //divNote is a div created to append the text and the button
    divNote.appendChild(del);
    divNote.appendChild(edit);
    divNote.appendChild(note);

    //here I append the colors into notes, was created IDs with differents index to do it
    var color = document.getElementById("color").value;
    document.bgColor = color;

        var addId = document.getElementsByClassName("divNote"); 
             for (var i = 0; i < addId.length; i++) 
             addId[i].id = "divNote" + (i + 1);
        var addId = document.getElementsByClassName("note"); 
             for (var i = 0; i < addId.length; i++) 
             addId[i].id = "note" + (i + 1);
    
    //plz, don't do it :(         
    document.getElementById("note" + i).style.backgroundColor = color;
    document.getElementById("divNote" + i).style.backgroundColor = color;

    if (text.value == ""){
        alert("Preencha o campo");
        divNote.remove();
        return false;
    }
});

//try understand
function delNote(e) {
    var note;
    if(e.target.hasChildNodes()) {
        note = e.target.parentNode;
    } else {
        note = e.target.parentNode.parentNode;   
    }
    
    var confirmation = confirm("Você deseja realmente excluir?");

    if (confirmation == true) { 
        note.remove();
    } else {
        //nothing
    }
}

function edtNote(e) {

}


