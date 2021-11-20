//quiz helper functions

var Qnumber = 0;
var Qtag = document.getElementById("question");
var Qbuttons = document.querySelectorAll(".Qbtn");
var scoreEl = document.getElementById("score");
var timerCountEl = document.getElementById("counter");
var timerCount = 90


function startQuiz() {
    StartContainer.style.display = 'none';
    QuestionContainer.style.display = 'block';
    startTimer();
    startNextQuestion();



}


function validateQuestion(Qnum, respond) {

    return (correctAns[Qnum] == respond) ? "Correct" : "Incorrect"

}


function startNextQuestion() {

    if (timerCount > 0 && Qnumber < Questions.length) {
        Qtag.textContent = Questions[Qnumber];

        questionAns = 0;
        for (var questionAns = 0; questionAns < Qbuttons.length; questionAns++) {


            answerContainer.style.display = 'block';
            Qbuttons[questionAns].textContent = answers[Qnumber][questionAns]
            console.log(Qbuttons[questionAns])
            console.log(answers[Qnumber][questionAns])
            displayAnswer()

        }

    } //end if
    else {
        isLastQuestion = true;
        QuestionContainer.style.display = 'none';
        AllDonecontainer.style.display = 'block';
        answerContainer.style.display = 'block';
        displayAnswer()

    } //end else


}

function displayAnswer() {

    setTimeout(() => {
        answerContainer.style.display = 'none';
    }, 680);

}


function QuizCompleted() {

}


function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerCountEl.textContent = timerCount;
        console.log("timer: " + timerCount)
        if (timerCount >= 0) {

            console.log("value of answer: " + Trackanswer)
            if (Trackanswer === "Incorrect") {

                console.log("10 seconds taken off. Answer was incorrect")
                timerCount = timerCount - 10;
                timerCountEl.textContent = timerCount;
                Trackanswer = ""
            } //end inner if

        } //end if


        if (isLastQuestion || timerCount === 0) {
            console.log("is this the last questions: " + isLastQuestion)
            console.log("Current timer: " + timerCount)
                // Clears interval
            clearInterval(timer);
            scoreEl.textContent = timerCount;
            QuestionContainer.style.display = 'none';
            AllDonecontainer.style.display = 'block';

        } //end if
    }, 1000);

} //end startTimer Function


function setScore() {
    TotalTbl = []
    var currentScores = getScores();
    console.log(currentScores)

    var intialsTB = document.getElementById("textbox").value

    console.log(intialsTB)

    var NewScore = new Object();
    NewScore.initials = intialsTB;
    NewScore.score = timerCount;

    console.log(NewScore)

    // debugger
    //check local storage results variable is empty : add
    if (currentScores.length === 0) {
        TotalTbl.push(NewScore)
        console.log(JSON.stringify(TotalTbl))

        localStorage.setItem("results", JSON.stringify(TotalTbl))
        console.log("inside if - end")
    }

    //local storage results not empty : append
    else {
        console.log("inside else")
        newArr = JSON.parse(currentScores)
        newArr.push(NewScore)
        TotalTbl = newArr
        console.log(TotalTbl)
        localStorage.setItem("results", JSON.stringify(TotalTbl))
    }

}

function getScores() {
    var scoreResults = localStorage.getItem('results') || []
    return scoreResults
}