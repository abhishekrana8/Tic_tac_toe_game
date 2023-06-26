const boxes = document.querySelectorAll(".box");
const gameinfo = document.querySelector("[gameinfo]");
const newgame = document.querySelector(".new");


let currentplayer;
let gameGrid;

const winnig = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function init(){
    currentplayer = "X";
    gameGrid = ["","","","","","","","",""];
    newgame.classList.remove("active");
    gameinfo.innerText = `Current  Player - ${currentplayer}`;
    boxes.forEach((box,index)=>{
        box.innerText = "";
        boxes[index].style.pointerEvents ="all";
        box.classList = `box box${index+1}`;

    })

}

init();

newgame.addEventListener("click",init);


boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })
});

function handleClick(index){
    if(gameGrid[index] ==="")
    {
        boxes[index].innerHTML = currentplayer;
        gameGrid[index] = currentplayer;
        boxes[index].style.pointerEvents ="none";
        swap();
        checkGameOver();
    }
}

function swap(){
    if(currentplayer==="X")
    {
        currentplayer = "0";
    }

    else{
        currentplayer = "X";
    }

    gameinfo.innerText = `Current  Player - ${currentplayer}`;
}


function checkGameOver(){

    let answer ="";
    winnig.forEach((position)=>
    {
        if((gameGrid[position[0]] != ""  || gameGrid[position[1]] != "" || gameGrid[position[2]] != "") 
        && (gameGrid[position[0]] === gameGrid[position[1]]) &&  (gameGrid[position[1]] == gameGrid[position[2]]) ){

            if(gameGrid[position[0]] == "X")
            answer = "X";

            else
            answer = "0";

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");

            boxes.forEach((box)=>{
                box.style.pointerEvents ="none";
            })

        }


    })

    if(answer!= "")
    {

        gameinfo.innerText = `Winner  Player - ${answer}`;
        newgame.classList.add("active");
        return;
        
    }

   let fill = 0;

   gameGrid.forEach((box)=>{
    if(box!="")
    fill++;
   });

   if(fill=== 9)
   {
    gameinfo.innerText = "Game Tied !!!";
    newgame.classList.add("active");

   }

    

};