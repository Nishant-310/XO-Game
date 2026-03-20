let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let head=document.querySelector("h1");
let turn0=true;
// winning condtions
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];


boxes.forEach(box=>{
     box.addEventListener("click",()=>{
       
        if(turn0){
            

            box.innerText="O";
             box.classList.add("o");
            turn0=false;
        }
        else{
           

            box.innerText="X";
             box.classList.add("x");
            turn0=true;
        }
        
        checkWinner();
        
     })
     resetBtn.addEventListener("click",()=>{
    box.innerText=" ";
        head.innerText="Tic Tac Toe Game";
        enable();

})
})
const disable=()=>{
    for(let box of boxes){
       box.disabled=true;
    }
}

const enable=()=>{
    for(let box of boxes){
       box.disabled=false;
    }
}
const checkWinner=()=>{
   for(let pattern of winPatterns){
    let pos1=boxes[pattern[0]].innerText;
   let pos2=boxes[pattern[1]].innerText;
   let pos3=boxes[pattern[2]].innerText;
  
   if(pos1 !=""&& pos2 != ""&& pos3 !=""){
    if(pos1=== pos2 && pos2=== pos3){
        
        head.innerText=pos1 +" is Winner!";
         disable();
         return ;

}

        
    }
   
   }
    // check for draw
let draw = true;
for(let box of boxes){
    if(box.innerText === "") draw = false;
}
if(draw && !head.innerText.includes("Winner")){
    head.innerText = "Draw!";
}


}


