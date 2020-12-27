////////////////Global Variables////////////////
///////// Home Page/////////
var buttonBegin = document.querySelector("#begin");
var h1El = document.getElementById("#h1");
var h3El = document.getElementById("#h3");
///////// Timer/////////
var t = 120;
var quizTimer = document.createElement("p");

///////// Quiz/////////
var buttonEl1 = document.createElement("button");
var buttonEl2 = document.createElement("button");
var buttonEl3 = document.createElement("button");
var buttonEl4 = document.createElement("button");
///////// End Quiz/////////
var submit = document.createElement("button");
var nameP = document.createElement("p");
var h2E1 = document.createElement("h2");
///////// Score/////////
var highScore = document.querySelector("#high")
var j = 0;
var input = document.createElement("input");
var ul = document.createElement("ul");
var highScoreL = [];
var score  = 0;
var playAgain = document.createElement("button");
var clear = document.createElement("button");
var i = 0;
var war = document.createElement("p");
var inQuiz = false;


///////////////// Questions////////////////////
var question1 = {
    question: "Commonly used data types DO NOT include: ",
    Ans1: "strings",
    Ans2: "booleans",
    Ans3: "alerts",
    Ans4: "numbers",
};

var question2 = {
    question: "The condition in an if/else statement is enclosed within _______. ",
    Ans1: "quotes",
    Ans2: "curly brackets",
    Ans3: "parenthesis",
    Ans4: "square brackets",
};

var question3 = {
    question: "Arrays in JavaScript can be used to store _______.",
    Ans1: "numbers and strings",
    Ans2: "other arrays",
    Ans3: "booleans",
    Ans4: "all of the above",
};

var question4 = {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    Ans1: "commas",
    Ans2: "curly brackets",
    Ans3: "quotes",
    Ans4: "parenthesis",
};

var question5 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    Ans1: "JavaScript",
    Ans2: "terminal/bash",
    Ans3: "for loops",
    Ans4: "console.log",
};

///////////////// Array of Questions and Answers////////////////////
var questions = [question1, question2, question3, question4, question5];
var answersC = [ "alerts", "parenthesis", "all of the above","quotes","console.log"]


///////////////// Quiz Function////////////////////
function addQuestions() {
    
    quizTimer.setAttribute("style", "fontSize: 50px; margin: 0; float: right;")
    quizTimer.setAttribute("id", "time");
    document.body.prepend(quizTimer);
    //////// Timer/////////
    t = 120;
        var sTime = setInterval(function tCounter(){
            if (t !=0){ 
                t = t-1;
                quizTimer.textContent = "Timer: " + t;
                return t;
            } else {
                quizTimer.remove();
                endQuiz();
                clearInterval(sTime);            
            }
        }, 1000);
    
        //////// Add Questions/////////
        h2E1.textContent = String(questions[i].question);
        h2E1.setAttribute("style", "fontSize: 150px; margin-top: 10%; margin-left: 25%; margin-right: 25%; color: black;");
        document.body.appendChild(h2E1);

        buttonEl1.textContent = String(questions[i].Ans1);
        buttonEl1.setAttribute("style", "margin-left: 25%; margin-right: 50%")
        document.body.appendChild(buttonEl1);

        buttonEl2.textContent = String(questions[i].Ans2);
        buttonEl2.setAttribute("style", "margin-left: 25%; margin-right: 50%")
        document.body.appendChild(buttonEl2);

        buttonEl3.textContent = String(questions[i].Ans3);
        buttonEl3.setAttribute("style", "margin-left: 25%; margin-right: 50%")
        document.body.appendChild(buttonEl3);

        buttonEl4.textContent = String(questions[i].Ans4);
        buttonEl4.setAttribute("style", "margin-left: 25%; margin-right: 50%")
        document.body.appendChild(buttonEl4);

        buttonEl1.addEventListener("click", newQ1);
        buttonEl2.addEventListener("click", newQ2);
        buttonEl3.addEventListener("click", newQ3);
        buttonEl4.addEventListener("click", newQ4);

        inQuiz = true;
        
        //////// New Questions/////////
        function newQ1(){
            console.log("run");

            if (buttonEl1.textContent === answersC[i]){
                j = 10 + j;
                war.textContent = "Correct!"
                war.setAttribute("style", "font-style: italic; margin-left: 25%")
                document.body.appendChild(war);
                fillNewQ();
            } else {
                war.textContent = "Wrong!"
                war.setAttribute("style", "font-style: italic; margin-left: 25%")
                document.body.appendChild(war);
                fillNewQ();
                t = t - 10;
                fillNewQ();
            }
        }
        function newQ2(){
            console.log("run");

            if (buttonEl2.textContent === answersC[i]){
                j = 10 + j;
                war.textContent = "Correct!"
                war.setAttribute("style", "font-style: italic; margin-left: 25%")
                document.body.appendChild(war);
                fillNewQ ();
            } else {
                t = t - 10;
                war.textContent = "Wrong!"
                war.setAttribute("style", "font-style: italic; margin-left: 25%")
                document.body.appendChild(war);
                fillNewQ ();
            }
        }
        function newQ3(){
            console.log("run");

            if (buttonEl3.textContent === answersC[i]){
                j = 10 + j;
                war.textContent = "Correct!"
                war.setAttribute("style", "font-style: italic; margin-left: 25%")
                document.body.appendChild(war);
                fillNewQ ();
            } else {
                t = t - 10;
                war.textContent = "Wrong!"
                war.setAttribute("style", "font-style: italic; margin-left: 25%")
                document.body.appendChild(war);
                fillNewQ ();
            }
        }
        function newQ4(){
            console.log("run");
            if (buttonEl4.textContent === answersC[i]){
                j = 10 + j;
                war.textContent = "Correct!"
                war.setAttribute("style", "font-style: italic; margin-left: 25%")
                document.body.appendChild(war);
                fillNewQ ();
            } else {
                t = t - 10;
                war.textContent = "Wrong!"
                war.setAttribute("style", "font-style: italic; margin-left: 25%")
                document.body.appendChild(war);
                fillNewQ ();
            }
        }

        function fillNewQ () {
            console.log(i);
            i++;
            if(i >= 5) {
                quizTimer.remove();
                clearInterval(sTime);            
                endQuiz();
            } else {
                h2E1.textContent = String(questions[i].question);
                buttonEl1.textContent = String(questions[i].Ans1);
                buttonEl2.textContent = String(questions[i].Ans2);
                buttonEl3.textContent = String(questions[i].Ans3);
                buttonEl4.textContent = String(questions[i].Ans4);
            }
            console.log(i);
        }
}
//////When quiz questions end///////////////
function endQuiz(){
    h2E1.textContent = "All Done!";
    h2E1.setAttribute("style", "font-size: 35px; margin-left: 25%; margin-top: 10%; margin-bottom: 0;");
    buttonEl1.remove();
    buttonEl2.remove();
    buttonEl3.remove();
    buttonEl4.remove();
    war.remove();
    
    score =  t + j;  

    nameP.textContent = "Your score was " + score + "! Submit your name below:";
    nameP.setAttribute("style", "margin-left: 25%;");
    document.body.appendChild(nameP);

    input.setAttribute("type","text");
    input.setAttribute("id", "input");
    input.setAttribute("style", "margin-left: 25%;");
    document.body.appendChild(input);

    submit.textContent = "Submit";
    submit.setAttribute("style", "margin-left: 25%; margin-right: 70%")
    document.body.appendChild(submit);
}


//////////////////// High Scores///////////////////////////

init();

function highScores(event) {
    event.preventDefault();

    h2E1.textContent = "High Scores"
    nameP.remove();
    submit.remove();
    input.remove();

    var highscoreText = input.value.trim() + "   " + score;

    if (highscoreText === ""){
        return;
    }

    highScoreL.push(highscoreText);
    input.value = "";

    storedScores();

    ul.innerHTML = "";
    h2E1.append(ul);

    render();

    playAgain.textContent = "Play Again";
    playAgain.setAttribute("style", "margin-left: 25%;")
    document.body.appendChild(playAgain);

    clear.textContent = "Clear Scores";
    clear.setAttribute("style", "margin-left: 5%;")
    document.body.appendChild(clear);
}

/////////High Score Page from clicking High Score////////
function highScorePage(event){
    h2E1.textContent = "High Scores"
    h2E1.setAttribute("style", "font-size: 35px; margin-left: 25%; margin-top: 10%; margin-bottom: 0;");
    document.body.appendChild(h2E1);

    if (inQuiz === true){
        highScore.remove();
        quizTimer.remove();
        buttonEl4.remove();
        buttonEl2.remove();
        buttonEl3.remove();
        buttonEl1.remove();
        war.remove();
    } else {
        highScore.remove();
        h1.remove(); 
        h3.remove(); 
        buttonBegin.remove(); 
    }

    event.preventDefault();
   
    var highscoreText = input.value.trim() + "   " + score;

    if (highscoreText === ""){
        return;
    }

    highScoreL.push(highscoreText);
    input.value = "";

    storedScores();

    ul.innerHTML = "";
    h2E1.append(ul);

    render();

    playAgain.textContent = "Play Again";
    playAgain.setAttribute("style", "margin-left: 25%;")
    document.body.appendChild(playAgain);

    clear.textContent = "Clear Scores";
    clear.setAttribute("style", "margin-left: 5%;")
    document.body.appendChild(clear);
}

/////////Saving Scores////////

function render() {
    for (var k = 0; k < highScoreL.length; k++) {
    var scores = highScoreL[k];
    var li = document.createElement("li");
    li.textContent = scores;
    li.setAttribute("data-index", k);
    ul.appendChild(li);        
    }
}
function init(){
    var storedScores = JSON.parse(localStorage.getItem("highScoreL"));

    if (storedScores !== null){
        highScoreL = storedScores;
    }

    render();
}

function storedScores (){
    localStorage.setItem("highScoreL", JSON.stringify(highScoreL));
}

/////////////Clear button/////////////////
clear.addEventListener("click", function(event){
    var element = event.target;
        if (element.matches("button") === true){
            highScoreL = [ ];
            ul.remove();
            storedScores();
            render();
        }
})


///////////////// Main Function////////////////////

function startQuiz() {
        h1.remove(); 
        h3.remove(); 
        buttonBegin.remove();
    addQuestions();
};

///////////////// Click////////////////////
buttonBegin.addEventListener("click", startQuiz);

highScore.addEventListener("click", highScorePage);

submit.addEventListener("click", highScores);

playAgain.addEventListener("click", function(){
    location.reload();
});