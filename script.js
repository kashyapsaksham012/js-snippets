var store; 
var score = 0; 

function increaseScore(){
    score += 10; 
}

function makeBubble(){ 
        var clutter = "";

    for(var i =0; i<=95; i++){
    clutter +=  `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;

    }
    // ${Math.floor((Math.random)*10)}
    document.querySelector("#pbtm").innerHTML= clutter;
}

var timer = 60;
function makeTimer(){
  var time = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent=timer;
        }
        else{
            clearInterval(time);
        }
    },1000)
} 

  
function newHit(){
    store = Math.floor(Math.random()*10);
    document.querySelector("#hitKaro").textContent=store;
}

    document.querySelector("#storeScore").addEventListener("click",function(dets){
        var clickedNumber = Number(dets.target.textContent);
        if(clickedNumber == newHit){
            increaseScore(); 
            newHit(); 
            makeBubble();
        }
    })
 


newHit();
makeTimer();
makeBubble(); 