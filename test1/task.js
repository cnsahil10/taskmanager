//getting-elements=>
    
let userinput=document.querySelector("#userinput");
let addbtn=document.querySelector("#addbtn");
let activetask=document.querySelector("#activetask");
let removebtn=document.querySelector("#remove");
let clearbtn=document.querySelector("#clear");
//adding-tasks=>

    addbtn.addEventListener("click",()=>{
        if(userinput.value==""){
            alert("give some tasks");
            // console.log("working");
        }
        else{
          let newtask=document.createElement("p");
          let container=document.getElementById("content");
          let div1=document.createElement("div");
          let taskbox=document.createElement("div");
          
          div1.style.display="flex";
          div1.style.flexDirection="column"
          newtask.style.display="inline";
          newtask.innerHTML=userinput.value;
          taskbox.appendChild(newtask);  //=> appending the newtasks to the tasbox div.

          //creating a checkbox input element.

          let rmbtn=document.createElement("input");
          rmbtn.type="checkbox";
          rmbtn.style.display="inline";
          taskbox.appendChild(rmbtn);  //=> appending the checkboxes to their respective tasks.
          taskbox.style.padding="15px";

          //removing the checked tasks.

          removebtn.addEventListener("click",()=>{
           if(rmbtn.checked==true){
            div1.removeChild(taskbox);
           }
        })
        //clearing all the tasks.
        clearbtn.addEventListener("click",()=>{
            div1.remove();
         })

          div1.appendChild(taskbox);
          container.appendChild(div1);
     }
        
    })
    
   


