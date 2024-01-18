const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");
const deleteBtn = document.getElementById("deleteBtn");
const updateBtn = document.getElementById("updateBtn");
let todo;

function add(){
    // if(inp.value){
    //     todo.push(inp.value);

    // }
    addLocal();
    inp.value= "";
    displayItems();
    
   
}

function deleteItem(index){
    todo=JSON.parse(localStorage.getItem("todo"));
   todo.splice(index, 1 ,);
   localStorage.setItem("todo" , JSON.stringify(todo));

  displayItems();



}

function updateItem(index){
    todo=JSON.parse(localStorage.getItem("todo"));
    let item = todo[index];
    inp.value = item;
    updateBtn.style.display = "block";
    btn.style.display = "none";
    updateBtn.addEventListener("click",()=>{
        todo[index]=inp.value;
        inp.value="";
        updateBtn.style.display = "none";
        btn.style.display = "block";
        localStorage.setItem("todo" , JSON.stringify(todo));

        displayItems();
       
    })

}

function displayItems(){

    let list = "";
    todo=JSON.parse(localStorage.getItem("todo"));

   for(let index in todo){
  list += ` <li class="list-group-item"> 
        ${todo[index]}   <span onclick={deleteItem(${index})} id="deleteBtn"><i class="fa-solid fa-trash"></i></span> 
                                  <span onclick={updateItem(${index})}> <i class="fa-regular fa-pen-to-square"></i></span>
  </li>`
   }

   ul.innerHTML= list;

}

function addLocal(){


   if(localStorage.getItem("todo") === null){
    todo=[];
   }else{
    todo=JSON.parse(localStorage.getItem("todo"));


   }
   todo.push(inp.value);

   localStorage.setItem("todo" , JSON.stringify(todo));
}

btn.addEventListener("click" , add);


