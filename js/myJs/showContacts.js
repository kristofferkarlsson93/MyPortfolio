/**
 * Created by Kristoffer on 2017-02-25.
 */

function callServer() {
    var answer = document.getElementById("answerField").value;
    if(answer.length == 0) {
        setError();
        return false;
    }
    console.log(answer);
    /*$.ajax({
        type: "GET",
        url: "http://karlssonkristoffer.com/answer/checkAnswer"+ answer,
        success: checkAnswer
    });*/
    checkAnswer(answer);
    return false;
}

function checkAnswer(respons) {
    console.log(respons)
    if(respons == "wrong"){
        setError();
        return false;
    }else if(respons == "nisse" || respons == "Nisse"){
        addContacts(respons);
    }else {
        setError();
    }
}

function addContacts(response) {
    removeQuestion();
    var parent = document.getElementById("contactInfo");
    var email = document.createElement("H5");
    var phone = document.createElement("H5");
    email.textContent = "kristoffer.karlsson93@hotmail.com";
    phone.textContent = "070-287 12 36";
    parent.appendChild(email);
    parent.appendChild(phone);
}

function removeQuestion() {
    var questionDiv = document.getElementById("jokeDiv");
    questionDiv.remove();
}

function setError() {
    var field = document.getElementById("answerField");
    field.style.backgroundColor = "#ffb3b3";
    field.value = "";
    field.placeholder = "Wrong answer. Try again! Check clue for help";
}