//------------ What is simon say Game-------------------->
let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red","yellow", "green", "purple"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false ){
        console.log("Game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){//Here button take as an argument , to change there color for flash
    btn.classList.add("flash");
    setTimeout( function () {
        btn.classList.remove("flash");
    },  250);
}

function userFlash(btn) {
  //Here button take as an argument , to change there color for flash
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    //choose random button
    let randIndx = Math.floor(Math.random() * 4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);//here dot(part of string )but we use a variable randColor so put it in $
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randbtn);
    // we add(push ) the randcolor in gameseq array
    gameSeq.push(randColor);
    console.log(gameSeq);//for hint to see what is order
    gameFlash(randBtn);
}

function checkAns(idx){
    //console.log("curr level : ", level);
    if( userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(), 1000);
        }
    }
    else{
        //h2.innerText = `Game Over! Your score was ${level} \n Press any key to start again.`;
        h2.innerHTML = `Game Over! Your score was <b> ${level} </b> <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    //console.log(this);
    let btn = this;//this shows us which no. button clicked.
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length -1); 
}

let allBtns = document.querySelectorAll('.btn');
for ( btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
