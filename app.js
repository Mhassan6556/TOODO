var list = document.getElementById("List")

function addtodo(){
    
var todo_item =document.getElementById("todo-item")
    
var li =document.createElement('li')
    li.setAttribute("class","lii")
    
var litext =document.createTextNode(todo_item.value)
    li.appendChild(litext)

///////// Create Delete Button
 
var delbtn = document.createElement("button")
 
var deltext = document.createTextNode("Delete ")
 delbtn.setAttribute("class","btn")
 delbtn.setAttribute("onclick","deleteItem(this) ")
 delbtn.appendChild(deltext)

//////// Create Edit Button

var editbtn = document.createElement("button")
 
var edittext = document.createTextNode("Edit ")
 editbtn.appendChild(edittext)
 editbtn.setAttribute("class","green")
 editbtn.setAttribute("onclick","editItem(this) ")

 li.appendChild(delbtn)
 li.appendChild(editbtn)
 list.appendChild(li)
    todo_item.value= ""
     
} 
function deleteItem(e){
    e.parentNode.remove()
}
function editItem(e){
var val =e.parentNode.firstChild.nodeValue; 
var editvalue = prompt("enter edit value",val)
    e.parentNode.firstChild.nodeValue=editvalue  
}

function deleteAll(){
    List.innerHTML =""
}