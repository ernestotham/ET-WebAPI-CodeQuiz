var highscoresGoBackBTN = document.getElementById("goBackBtn");
var highscoresClearScoresBTN = document.getElementById("ClearHScoresBtn");
var highscoresOLEl = document.getElementById("orderlist");

highscoresOLEl.style = "list-style-type:none"

highscoresClearScoresBTN.addEventListener("click", function() {


    CleanLocalStorage()

})


highscoresGoBackBTN.addEventListener("click", function() {

    window.location.replace("../index.html");


})


function CleanLocalStorage() {
    localStorage.setItem("results", "")
    window.location.replace("../highscores.html");
}

function BuildResultsTable() {

    resultsObj = JSON.parse(getScores())
    row = 0;
    resultsObj.forEach(arrayRsl => {
        var li = document.createElement('li')
        li.innerText = row + 1 + ". " + arrayRsl.initials + " - " + arrayRsl.score
        li.classList.add("listItem")
        if (row % 2 === 0)
            li.style.cssText = 'background-color:rgb(230,230,250)'
        else {
            li.style.cssText = 'background-color:rgb(216,191,216)'
        }
        highscoresOLEl.appendChild(li)
        row++
    });

}


BuildResultsTable()