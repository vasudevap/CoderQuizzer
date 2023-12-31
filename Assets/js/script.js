// Selects element by id
var timeEl = document.getElementById("Counter");
var timerLabelEl = document.getElementById("timerLabel");
var mainEl = document.getElementById("mainMessage");
var mainSubEl = document.getElementById("mainSubMessage");
var optionsListEl = document.getElementById("answerOptions");
var startButtonEl = document.getElementById("startButton");
var viewHSEl = document.getElementById("viewHSLink");

var secondsLeft = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var PlayerName = "";
var questionCount = 0;
var hSLeaderboardLine = [];

//show the game start page
function init() {
  if (document.getElementById("startbutton") === null) {
    // console.log("no button present - creating one")
    var startBtn = document.createElement("button");
    startBtn.setAttribute("Id", "startButton");
    startBtn.textContent = "Start Quiz";
    document.getElementById("main").appendChild(startBtn);
  }
  document.getElementById("mainMessage").textContent = "Coding Quiz Challenge";
  document.getElementById("mainSubMessage").textContent = "Try to answer the following code related questions within the time limit.  Keep in mind that the incorrect answers will penalize your scoretime by ten seconds!";

}
//when start button pressed
startButtonEl.addEventListener("click", function (event) {
  event.preventDefault();
  secondsLeft = 30;
  formatScreenForQuiz();
})
//remove the start button
function formatScreenForQuiz() {
  var startBtn = document.getElementById("startButton");
  startBtn.remove();
  startQuiz();
}
//start timer
function startQuiz() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    timeEl.textContent = "Time left: " + secondsLeft;

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Game over, call function to do scores
      showAllDonePage();
      timeEl.textContent = "Time Left: 0";
    } else {
      showQuestions();
      secondsLeft--;
      // console.log("Seconds Left:"+secondsLeft);  
    }

  }, 1000);
}
//all quiz questions
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
//show the quiz questions
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

  while (ulEl.children.length > 0) {
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
//get response
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
    if (document.getElementById("quizFeedback") != null) {
      document.getElementById("quizFeedback").textContent = "CORRECT!";
    } else {
      var feedbackSection = document.createElement("div");
      feedbackSection.setAttribute("id", "quizFeedback");
      feedbackSection.textContent = "CORRECT!"
      document.getElementById("main").appendChild(feedbackSection);
    }
  } else {
    // console.log("wrong!");
    wrongAnswers++;
    secondsLeft = secondsLeft - 10;
    if (document.querySelector("#quizFeedback") != null) {
      document.getElementById("quizFeedback").textContent = "WRONG!";
    } else {
      var feedbackSection = document.createElement("div");
      feedbackSection.setAttribute("id", "quizFeedback");
      feedbackSection.textContent = "WRONG!"
      document.getElementById("main").appendChild(feedbackSection);
    }
  }
  questionCount = questionCount + 6;

  if (questionCount + 5 > quizzQuestion.length) {
    questionCount = 0;
  }

  showQuestions();
}
)
// when timer done, show All Done page
function showAllDonePage() {
  
  var thisScore = correctAnswers - wrongAnswers;
  
  document.getElementById("mainMessage").textContent = "All done!";

  if (thisScore>=0) {
    document.getElementById("mainSubMessage").textContent = "Your final score is " + thisScore + ".";
  } else {
    document.getElementById("mainSubMessage").textContent = "Your final score is -" + Math.abs(thisScore) + ".";
  }


  for (var i = 0; i < 4; i++) {
    // console.log("removing " + i);
    optionsListEl.children[0].remove();
  }

  document.getElementById("quizFeedback").remove();

  var initialsInput = document.createElement("form");
  initialsInput.setAttribute("id", "inputTextForm");

  initialsInput.appendChild(document.createElement("label"));
  initialsInput.children[0].setAttribute("id", "initialsInputLabel");
  initialsInput.children[0].setAttribute("for", "initials");
  initialsInput.children[0].textContent = "Enter Initials:";
  initialsInput.children[0].setAttribute("style", "padding:10px;");

  initialsInput.appendChild(document.createElement("input"));
  initialsInput.children[1].setAttribute("id", "initialsInput");
  initialsInput.children[1].setAttribute("name", "initials");
  initialsInput.children[1].setAttribute("type", "text");
  initialsInput.children[1].setAttribute("maxlength", "20");
  initialsInput.children[1].setAttribute("size", "10");

  initialsInput.appendChild(document.createElement("button"));
  initialsInput.children[2].setAttribute("id", "initialsInputBtn");
  initialsInput.children[2].setAttribute("name", "initialsInuptBtn");
  initialsInput.children[2].textContent = "Submit";
  initialsInput.children[2].setAttribute("style", "background-color: blueviolet; color: antiquewhite; border 1px; border-width: 2px; border-radius: 10%; margin:10px;");

  document.getElementById("main").appendChild(initialsInput);

}

// document.getElementById("InitialsInputBtn").addEventListener("click", function(){
//   console.log("button pressed");
//   confirm("here now");
// })


// when View Highscores is clicked
viewHSEl.addEventListener("click", function (event) {
  event.preventDefault();
  // showHighScores();
})
//format and show highscore display 
function showHighScores() {

  //var hSLeaderboardLines = JSON.parse(localStorage.getItem("hSLeaderboardLine"));

  document.getElementById("quizFeedback").remove();

  if (hSLeaderboardLines !== null) {

    var hSleaderboardCanvas = document.createElement("div");
    hSleaderboardCanvas.setAttribute("id", "hSleaderboardCanvas");

    mainEl.textContent = "Highscores";

    // for i to stored counts
    for (var i = 0; i < hSLeaderboardLines.length; i++) {

      hSleaderboardCanvas.appendChild(document.createElement("label"));
      hSleaderboardCanvas.children[i].textContent = i + ". " + hSLeaderboardLines.initials + " - " + hSLeaderboardLines.score;
      hSleaderboardCanvas.children[i].setAttribute("style", "padding:5px; background-color:pink;");

    }

    initialsInput.appendChild(document.createElement("button"));
    initialsInput.children[1].setAttribute("id", "GoBackBtn");
    initialsInput.children[1].setAttribute("name", "GoBack");
    initialsInput.children[1].textContent = "Go Back";
    initialsInput.children[1].setAttribute("style", "background-color: blueviolet; color: antiquewhite; border 1px; border-width: 2px; border-radius: 10%; margin:10px;");

    initialsInput.appendChild(document.createElement("button"));
    initialsInput.children[2].setAttribute("id", "Clear Highscores");
    initialsInput.children[2].setAttribute("name", "clearHSBtn");
    initialsInput.children[2].textContent = "Clear Highscores";
    initialsInput.children[2].setAttribute("style", "background-color: blueviolet; color: antiquewhite; border 1px; border-width: 2px; border-radius: 10%; margin:10px;");


    document.getElementById("main").appendChild(initialsInput);
  }
}
//clear highscore page and then call showhighscores to show it
function clearHighscores(){
  // put code to clear highscores by clearing local storage
  // get object array of 
}
