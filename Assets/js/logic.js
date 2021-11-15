//main logic script
var container = document.querySelector(".bodycontent");
var StartContainer = document.querySelector("#Startcontiner");
var QuestionContainer = document.querySelector("#Qcontainer");
var AllDoneContainer = document.querySelector("#AllDonecontainer");

var Questions = [];
var Answers = [];

container.getAttribute("")
QuestionContainer.style.display = 'none';
AllDoneContainer.style.display = 'none';
var stateEvent = Event.target;

var Buttons = document.addEventListener("click", function(event){
    var targetBTN = event.target
    console.log(targetBTN)
    console.log(event.target.id)

    if(event.target.id === "startBtn"){
        StartContainer.style.display = 'none';
        QuestionContainer.style.display = 'block';


    }
    


  


});





