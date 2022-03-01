var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function listLength(){
   return item.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input. value =  "";
    
    
    function crossOut() {
        li.classList.toggle("done");
    }
    
    li.addEventListener("click",crossOut);
    
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("x"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click",deleteListItem);
    
    function deleteListItem(){
        li.classList.add("delete")
    }
    
    }
