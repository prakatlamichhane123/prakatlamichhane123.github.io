const inputBox = document.getElementById("inputBox");
const ul = document.getElementById("ul-id");
const errorText = document.getElementById("error-text");
const items= document.getElementById("items");

function save(){
    localStorage.setItem("data",ul.innerHTML);
}

function load(){
    ul.innerHTML= localStorage.getItem("data");
}

function addTasks() {
  errorText.innerHTML=""
  if(inputBox.value.trim() !=""){  
  let li = document.createElement("li");
  let span =document.createElement("span")
  li.innerHTML = inputBox.value;
  span.innerHTML="\u00d7"
  ul.appendChild(li);
  li.appendChild(span);
  inputBox.value="";
  save();
}else{
    errorText.style.color="red";
    errorText.innerHTML="Please Enter The Task First";
    inputBox.value=""
    save();
}

}

load();
ul.addEventListener("click",function(e){
    
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
       
    }
})


