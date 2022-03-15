// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 4, 6, 3, 5, 1, 3, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var livesLeft = 3;
var timeleft = 5;
var timer;
var numButtons = 6;

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  livesLeft = 3;
  for (let i = 0; i < pattern.length; i++) {
    pattern[i] = Math.ceil(Math.random() * 6);
  }
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("livesLeftBtn").innerHTML = "Lives: " + livesLeft;
  playClueSequence(110);
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  console.log(timer);
  clearInterval(timer);
  for(let i=1;i<=numButtons;i++) {
    document.getElementById("audio"+i).playbackRate = 1;
  }
}

function playTone(btn,len){ 
  document.getElementById("img"+btn).classList.remove("hidden");
  let audioTag = document.getElementById("audio"+btn);
  audioTag.playbackRate = 1000/len;
  audioTag.load();
  audioTag.play();
  tonePlaying = true
  setTimeout(function(){
    stopTone(btn);
    document.getElementById("img"+btn).classList.add("hidden");
  },len)
}
function startTone(btn){
  let audio = document.getElementById("audio"+btn);
  if(!audio.ended) {
    audio.pause();
    audio.load();
  }
  
  tonePlaying = true
  document.getElementById("audio"+btn).play();
  document.getElementById("img"+btn).classList.remove("hidden");
  
}
function stopTone(btn){
  tonePlaying = false
  document.getElementById("img"+btn).classList.add("hidden");
}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(speed) {
  for(let i=1;i<=numButtons;i++) {
    document.getElementById("button"+i).setAttribute("disabled", "true");
  }
  if(timer) {
    clearInterval(timer);
  }
  document.getElementById("countdown").innerHTML = "Timer: " + 5;
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
  clueHoldTime = clueHoldTime - speed;
  setTimeout(countdown, delay - (cluePauseTime + clueHoldTime) +0);
  
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Great job! You won.");
}

function guess(btn){
  //console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }
      else{
        progress++;
        playClueSequence(110);
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    livesLeft--;
    document.getElementById("livesLeftBtn").innerHTML = "Lives: " + livesLeft;
    if (livesLeft == 0) {
      loseGame();
    }
    else {
      playClueSequence(0);
    }
  }
}

function countdown() {
  for(let i=1;i<=numButtons;i++) {
    document.getElementById("button"+i).removeAttribute("disabled");
  }
  console.log("monkey" + timer);
  timeleft = 5;
  if (timer) {
    console.log("destroyed");
    clearInterval(timer);
  }
  timer = setInterval(function(){
    if(!gamePlaying){
      clearInterval(timer);
    }
    else {
      if(timeleft <= 0){
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "Timer: 0";
      stopGame();
      setTimeout(alert, 1, "Time's up. You lost.");
      } 
      else {
        document.getElementById("countdown").innerHTML = "Timer: " + timeleft;
      }
      timeleft -= 1;
    }
  }, 1000);
}