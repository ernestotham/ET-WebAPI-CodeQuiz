//quiz helper functions

var Qnumber = 0;
var Qtag = document.getElementById("question");
var Qbuttons = document.querySelectorAll(".Qbtn");
var scoreEl = document.getElementById("score");
var timerCountEl = document.getElementById("counter");
var timerCount = 90

function startQuiz(){
      StartContainer.style.display = 'none';
      QuestionContainer.style.display = 'block';
      startTimer();
      startNextQuestion();
      


}


function validateQuestion(Qnum, respond){
    
    if(correctAns[Qnum] === respond){
        return "Correct"
    }
    else { 

        return "Incorrect"}
    
    
}


function startNextQuestion(){

    if(timerCount > 0 && Qnumber < Questions.length){
        Qtag.textContent = Questions[Qnumber];
        
        questionAns = 0;
        for(var questionAns=0; questionAns < Qbuttons.length ; questionAns++){

            Qbuttons[questionAns].textContent = answers[Qnumber][questionAns]
            console.log(Qbuttons[questionAns])
                console.log(answers[Qnumber][questionAns])
                
        }
       
    }//end if

    else{
        isLastQuestion = true;
        QuestionContainer.style.display = 'none';
        AllDonecontainer.style.display = 'block';
        
    }//end else
    
   
}

function QuizCompleted(){

}


function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerCountEl.textContent = timerCount;
      console.log("timer: " +timerCount)
      if(timerCount >=0){
        
            console.log("value of answer: "+Trackanswer)
            if(Trackanswer ==="Incorrect"){
                
                console.log("10 seconds taken off. Answer was incorrect")
                timerCount = timerCount -10;
                timerCountEl.textContent = timerCount;
                Trackanswer = ""
            }//end inner if

        }//end if

        
      if (isLastQuestion || timerCount === 0) {
        console.log("is this the last questions: "+isLastQuestion)
        console.log("Current timer: "+timerCount)
        // Clears interval
        clearInterval(timer);
        scoreEl.textContent = timerCount;
        QuestionContainer.style.display = 'none';
        AllDonecontainer.style.display = 'block';
        
      }//end if
    }, 1000);

  }//end startTimer Function


 function setScore(){
 var intialsTB = document.getElementById("initials")
 var array = {"initials":intialsTB,"score":timerCount}
 localStorage.setItem("results",JSON.stringify(array))

 }

 function getScore(){
    var scoreresults = localStorage.getItem("results")
    return JSON.parse(scoreresults)
 }