/**
 * Created by Kristoffer on 2017-02-25.
 */

window.onload = function() {
    var form = document.getElementById("jokeForm");
    form.onsubmit = callServer;
}

function callServer() {
    var answer = document.getElementById("answerField").value;
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/checkAnswer/"+ answer,
        success: checkAnswer

    })
    return false;
}

function checkAnswer(respons) {
    console.log(respons)
    if(respons == "wrong"){
        return false;
    }else {
        addContacts(respons)
    }
}

function addContacts(response) {
    removeQuestion()
    var parent = document.getElementById("contactInfo");
    var email = document.createElement("H2");
    email.textContent = response
    parent.appendChild(email);
}

function removeQuestion() {
    var questionDiv = document.getElementById("jokeDiv");
    questionDiv.remove();
}

