//main logic script
var container = document.querySelector(".bodycontent");
var StartContainer = document.querySelector("#Startcontainer");
var QuestionContainer = document.querySelector("#Qcontainer");
var AllDoneContainer = document.querySelector("#AllDonecontainer");
var answerContainer = document.querySelector("#Qanswer")
var Trackanswer = ""
var isLastQuestion = false

var Questions = ["Inside which HTML element do we put the JavaScript?",
    "What is the correct JavaScript syntax to change the content of the HTML element below?",
    "How do you write \"Hello World\" in an alert box?",
    "How do you create a function in JavaScript?",
    "How to write an IF statement in JavaScript?"
];
var AnswersQ1 = ["<js>", "<script>", "<scripting>", "<javascript>"];
// var CorrectAnsQ1 = "<script>"

var AnswersQ2 = ["#demo.innerHTML = \"Hello World!\";",
    "document.getElement(\"p\").innerHTML = \"Hello World!\";",
    "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
    "document.getElementByName(\"p\").innerHTML = \"Hello World!"
];
// var CorrectAnsQ2 = "document.getElementById(\"demo\").innerHTML = \"Hello World!\";";

var AnswersQ3 = ["alert(\"Hello World\");",
    "alertBox(\"Hello World\");",
    "msg(\"Hello World\");",
    "msgBox(\"Hello World\");"
];
// var CorrectAnsQ3 = "alertBox(\"Hello World\");";

var AnswersQ4 = ["function myFunction() {}",
    "function:myFunction {}",
    "function = myFunction {}",
    "function=>() {}"
];
// var CorrectAnsQ4 = "function myFunction() {}";

var AnswersQ5 = ["if i == 5 then",
    "if i = 5",
    "if(i == 5)",
    "if i =5 then"
];
// var CorrectAnsQ5 = "if(i == 5)";

var answers = [AnswersQ1, AnswersQ2, AnswersQ3, AnswersQ4, AnswersQ5]
var correctAns = ["<script>",
    "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
    "alertBox(\"Hello World\");",
    "function myFunction() {}",
    "if(i == 5)"
]




container.getAttribute("")
QuestionContainer.style.display = 'none';
AllDoneContainer.style.display = 'none';
answerContainer.style.display = 'none';
var stateEvent = Event.target;

var Buttons = document.addEventListener("click", function(event) {
    var targetBTN = event.target
    console.log(event)
    console.log(targetBTN)
    console.log(event.target.id)
    console.log(event.target.className)

    if (event.target.id === "startBtn") {
        startQuiz();


    }

    if (event.target.className === "Qbtn") {
        console.log(Qnumber + ' ' + event.target.outerText)
        var answer4CQ = validateQuestion(Qnumber, event.target.outerText)
        console.log(answer4CQ)
        document.getElementById("answer").textContent = answer4CQ
        Qnumber++;
        Trackanswer = answer4CQ;
        startNextQuestion();

    }

    if (event.target.id === "submit") {
        event.preventDefault();
        setScore()
        window.location.replace("../highscores.html");


    }




});