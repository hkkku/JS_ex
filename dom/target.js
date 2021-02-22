// 초기화 변수
let count = 0;
let playing = false;
let timer;

// DOM 변수 = $ > document에서 가져온 변수
const $start = document.querySelector("#start");
const $score = document.querySelector("#score");
const $target = document.querySelector("#target");

let abc = Math.floor(Math.random() * 600);
//floor -> 소수점x
console.log(abc);

function moveTarget(){
  let x = Math.floor(Math.random() * 500);
  let y = Math.floor(Math.random() * 500);

  $target.style.left = x + 'px';
  $target.style.top = y + 'px';
  //JavaScript에서는 단위를 붙인다.
}

function gameStart(){
  if(playing == false){
    playing = true;
    endGame();
    timer = setInterval(function(){
      moveTarget();
    }, 1000);
  }

}

function endGame(){
  setTimeout(function(){
    playing = false;
    clearInterval(timer);
    alert('Game Over');
  }, 5000);
}



$start.addEventListener('click', function(){
  gameStart();
});

$target.addEventListener('click', function(){
  if(playing == true){
    count ++;
    $score.textContent = count;
  }
});
