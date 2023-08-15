// Selects element by id
var timeEl = document.getElementById("Counter");
var timerLabelEl = document.getElementById("timerLabel");
var startButtonEl = document.getElementById("startButton");
var mainEl = document.getElementById("mainMessage");
var mainSubEl = document.getElementById("mainSubMessage");
var optionsListEl = document.getElementById("answerOptions");

var secondsLeft = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var PlayerName = "";

init();

function init() {
    
  var startBtn = document.createElement("button");
  startBtn.setAttribute("Id","startButton");
  startBtn.textContent = "Start Quiz";

  document.getElementById("mainMessage").textContent="Coding Quiz Challenge";
  document.getElementById("mainSubMessage").textContent="Try to answer the following code related questions within the time limit.  Keep in mind that the incorrect answers will penalize your scoretime by ten seconds!";
  
}

optionsListEl.addEventListener("click", function(event) {

  event.preventDefault();
  var optionSelected = event.target;
  console.log(optionSelected.textContent);
  // DEBUG:
  // console.log(optionSelected);

  // if selected option is the correct one
  // add to correctAnswers
  // otherwise, add to wrongAnswers and set
  // secondsLeft - 10 (player loses 10sec)
  //
  switch (optionSelected.getAttribute("id")) {
    case "option1":
      console.log("option1");
      // if questionAsked.answer = option1
      //    correctAnswers++
      // else 
      //    incorrectAnswers++
      //
    case "option2":
      console.log("option2");
    case "option3":
      console.log("option3");
    case "option4":
      console.log("option3");
  }
  }
)

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
  var optionA = document.createElement("li");
  var optionB = document.createElement("li");
  var optionC = document.createElement("li");
  var optionD = document.createElement("li");

  questionEl.textContent = "This is question 1";

  descEl.textContent = "";

  optionA.textContent = "option 1";
  optionA.setAttribute("id","option1");
  optionsListEl.appendChild(optionA);

  optionB.textContent = "option 2";
  optionB.setAttribute("id","option2");
  optionsListEl.appendChild(optionB);

  optionC.textContent = "option 3";
  optionC.setAttribute("id","option3");
  optionsListEl.appendChild(optionC);

  optionD.textContent = "option 4";
  optionD.setAttribute("id","option4");
  optionsListEl.appendChild(optionD);

  // document.querySelectorAll("li").setAttribute()
  // document.body.append(document.createElement("div"));


}

function startQuiz() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timeEl.textContent = "Time left: "+secondsLeft;

    if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Game over, call function to do scores
        showScores();
    }

    secondsLeft--;

    }, 1000);
}