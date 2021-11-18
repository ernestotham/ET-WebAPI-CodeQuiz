//quiz helper functions

var Qnumber = 0;
var Qtag = document.getElementById("question");
var Qbuttons = document.querySelectorAll(".Qbtn");
var timer = 90

function startQuiz(){
      StartContainer.style.display = 'none';
      QuestionContainer.style.display = 'block';
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

    if(timer > 0 && Qnumber < Questions.length){
        Qtag.textContent = Questions[Qnumber];
        
        questionAns = 0;
        for(var questionAns=0; questionAns < Qbuttons.length ; questionAns++){

            Qbuttons[questionAns].textContent = answers[Qnumber][questionAns]
            console.log(Qbuttons[questionAns])
                console.log(answers[Qnumber][questionAns])
                
        }
        
       
        


    }

    else{

        QuestionContainer.style.display = 'none';
        AllDonecontainer.style.display = 'block';
     

    }
    
   
}