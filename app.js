let inp = document.querySelector("input");
let lis = document.querySelectorAll("li");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
   let li = document.createElement("li");
   li.innerText = inp.value;

   let delBtn = document.createElement("button");
   delBtn.innerText = "delete";
   delBtn.classList.add("delete");
   li.appendChild(delBtn);
   
   
    ul.appendChild(li);

    inp.value = '';
    
});

ul.addEventListener("click",function(event){
   if(event.target.nodeName=='BUTTON'){
    let listItem = event.target.parentElement;
    listItem.remove();
   }
})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
  
// delBtn.addEventListener("click",function(){
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
// }
// )
// }
