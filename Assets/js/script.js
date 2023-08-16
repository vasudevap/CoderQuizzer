// Selects element by id
var timeEl = document.getElementById("Counter");
var timerLabelEl = document.getElementById("timerLabel");
var mainEl = document.getElementById("mainMessage");
var mainSubEl = document.getElementById("mainSubMessage");
var optionsListEl = document.getElementById("answerOptions");
var startButtonEl = document.getElementById("startButton");

var secondsLeft = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var PlayerName = "";
var questionCount = 0;

init();

function init() {
  if (document.querySelectorAll("button").length > 0) {
    // console.log("button already there");
  } else {
    // console.log("no button present - creating one")
    var startBtn = document.createElement("button");
    startBtn.setAttribute("Id", "startButton");
    startBtn.textContent = "Start Quiz";
    document.getElementById("main").appendChild(startBtn);
  }
  document.getElementById("mainMessage").textContent = "Coding Quiz Challenge";
  document.getElementById("mainSubMessage").textContent = "Try to answer the following code related questions within the time limit.  Keep in mind that the incorrect answers will penalize your scoretime by ten seconds!";

}

startButtonEl.addEventListener("click", function (event) {
  secondsLeft = 30;
  formatScreenForQuiz();
})



function formatScreenForQuiz() {
  var startBtn = document.getElementById("startButton");
  startBtn.remove();
  startQuiz();
}


function startQuiz() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    timeEl.textContent = "Time left: " + secondsLeft;

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Game over, call function to do scores
      showScores();
    } else {
      showQuestions();
      secondsLeft--;
      // console.log("Seconds Left:"+secondsLeft);  
    }
    
  }, 1000);
}

var quizzQuestion = [
  "Commonly used data types DO NOT include:",
  "strings",
  "booleans",
  "alerts",
  "numbers",
  "option3",
  "The condition in an if / else statement is enclosed within _____.",
  "quotes",
  "curly brackets",
  "parentheses",
  "square brackets",
  "option3",
  "Array in JavaScript can be used to store _____.",
  "numbers and strings",
  "other arrays",
  "booleans",
  "all of the above",
  "option4",
  "String values must be enclosed within ______ when being assigned to variables.",
  "commas",
  "curly brackets",
  "quotes",
  "parentheses",
  "option3",
  "A very useful tool used during development and debugging for printing content to the debugger is:",
  "JavaScript",
  "terminal/bash",
  "for loops",
  "console log",
  "option4"
];


function showQuestions() {

  var questionEl = document.getElementById("mainMessage");
  var descEl = document.getElementById("mainSubMessage");
  var ulEl = document.getElementById("answerOptions");
  var optionA = document.createElement("li");
  var optionB = document.createElement("li");
  var optionC = document.createElement("li");
  var optionD = document.createElement("li");

  questionEl.textContent = quizzQuestion[questionCount];

  descEl.textContent = "";

  while (ulEl.children.length>0) {
    ulEl.children[0].remove();
  }
  
  optionA.textContent = quizzQuestion[questionCount + 1];
  optionA.setAttribute("id", "option1");
  optionsListEl.appendChild(optionA);

  optionB.textContent = quizzQuestion[questionCount + 2];
  optionB.setAttribute("id", "option2");
  optionsListEl.appendChild(optionB);

  optionC.textContent = quizzQuestion[questionCount + 3];
  optionC.setAttribute("id", "option3");
  optionsListEl.appendChild(optionC);

  optionD.textContent = quizzQuestion[questionCount + 4];
  optionD.setAttribute("id", "option4");
  optionsListEl.appendChild(optionD);

  // document.querySelectorAll("li").setAttribute()
  // document.body.append(document.createElement("div"));

}

optionsListEl.addEventListener("click", function (event) {

  event.preventDefault();
  var optionSelected = event.target;
  // console.log(optionSelected.textContent);
  // DEBUG:
  // console.log(optionSelected);

  // if selected option is the correct one
  // add to correctAnswers
  // otherwise, add to wrongAnswers and set
  // secondsLeft - 10 (player loses 10sec)
  //
  if (quizzQuestion[questionCount + 5] === optionSelected.getAttribute("id")) {
    // console.log("correct!" +quizzQuestion[questionCount+5]+" "+optionSelected.getAttribute("id"));
    correctAnswers++;
    if (document.getElementById("quizFeedback")!=null) {
      document.getElementById("quizFeedback").textContent = "CORRECT!"
    } else {
      var feedbackSection = document.createElement("div");
      feedbackSection.setAttribute("id","quizFeedback");
      feedbackSection.textContent = "CORRECT!"
      document.getElementById("main").appendChild(feedbackSection);
    }
  } else {
    // console.log("wrong!");
    wrongAnswers++;
    secondsLeft=secondsLeft-10;
    if (document.querySelector("#quizFeedback")!=null) {
      document.getElementById("quizFeedback").textContent = "WRONG!";
    } else {
      var feedbackSection = document.createElement("div");
      feedbackSection.setAttribute("id","quizFeedback");
      feedbackSection.textContent = "WRONG!"
      document.getElementById("main").appendChild(feedbackSection);
    }
  }
  questionCount = questionCount + 6;

  if (questionCount+5>quizzQuestion.length) {
    questionCount = 0;
  }
  showQuestions();
}
)

function showScores() {
  // var mainMessageEl = document.getElementById("mainMessage");
  // var mainSubMessageEl = document.getElementById("mainSubMessage");

  document.getElementById("mainMessage").textContent = "Here is the score";
  document.getElementById("mainSubMessage").textContent = "You scored " + correctAnswers + " correct and " + wrongAnswers + " wrong";

  for (var i = 0; i < 4; i++) {
    // console.log("removing " + i);
    optionsListEl.children[0].remove();
  }
  // mainMessageEl.textContent = "Here is the score";
  // mainSubMessageEl.textContent = "You scored " + correctAnswers + " correct and " + wrongAnswers + " wrong";
  document.getElementById("quizFeedback").remove();


}