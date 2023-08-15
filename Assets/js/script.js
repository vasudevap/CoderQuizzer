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
        showScores();
    }

    secondsLeft--;

    }, 1000);
}

startButtonEl.addEventListener("click", function(event) {
    secondsLeft=3;
    formatScreenForQuiz();
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
  var startBtn = document.getElementById("startButton");
  startBtn.remove();
  showQuestions();
  startQuiz();
}

function showScores() {
  var mainMessageEl = document.getElementById("mainMessage");
  var mainSubMessageEl = document.getElementById("mainSubMessage");
  var optionsListEl = document.getElementById("answerOptions");
  for(var i=0;i<4;i++) {
    console.log("removing "+i);
    optionsListEl.children[0].remove();
  }
  mainMessageEl.textContent = "Here is the score";
  mainSubMessageEl.textContent = "You scored 100% - Congratulations!";
}

function showQuestions (){

  var questionEl = document.getElementById("mainMessage");
  var descEl = document.getElementById("mainSubMessage");
  var optionA = document.createElement("li", "class=");
  var optionB = document.createElement("li");
  var optionC = document.createElement("li");
  var optionD = document.createElement("li");
  var optionsListEl = document.getElementById("answerOptions");
  questionEl.textContent = "This is question 1";
  descEl.textContent = "";
  optionA.textContent = "option 1";
  optionsListEl.append(optionA);
  optionB.textContent = "option 2";
  optionsListEl.append(optionB);
  optionC.textContent = "option 3";
  optionsListEl.append(optionC);
  optionD.textContent = "option 4";
  optionsListEl.append(optionD);
  // document.querySelectorAll("li").setAttribute()
  // document.body.append(document.createElement("div"));


}

function init() {
    mainSubEl.textContent = "Try to answer the following code related questions within the time limit.  Keep in mind that the incorrect answers will penalize your scoretime by ten seconds!";
    startButtonEl.textContent = "Start Quiz";
    mainEl.textContent="Coding Quiz Challenge";

}

init();

