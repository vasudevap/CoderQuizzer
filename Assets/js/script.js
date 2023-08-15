// Selects element by id
var timeEl = document.getElementById("Counter");
var timerLabelEl = document.getElementById("timerLabel");
var startButtonEl = document.getElementById("startButton");
var mainEl = document.getElementById("mainMessage");
var mainSubEl = document.getElementById("mainSubMessage");

var secondsLeft = 0;

var quizCard = {

}

function startQuiz() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timeEl.textContent = "Time left: "+secondsLeft;

    if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Game over, call function to do scores
        getScoring();
    }

    formatScreenForQuiz();
    secondsLeft--;

    }, 1000);
}

startButtonEl.addEventListener("click", function(event) {
    secondsLeft=3;
    startQuiz();
})

// Function to create and append colorsplosion image
function getScoring() {
  timeEl.textContent = " ";
//   var pEl = document.createElement("p");
//   pEl.textContent = "Game Over - here is your score";
  mainEl.textContent="Game Over - here is your score";
//   mainEl.appendChild(pEl);

}

function formatScreenForQuiz() {

}
// startQuiz();
function init() {
    mainSubEl.textContent = "Try to answer the following code related questions within the time limit.  Keep in mind that the incorrect answers will penalize your scoretime by ten seconds!";
    startButtonEl.textContent = "Start Quiz";
    mainEl.textContent="Coding Quiz Challenge";

}

init();

