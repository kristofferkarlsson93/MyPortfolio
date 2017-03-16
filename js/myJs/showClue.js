
function showClue() {
    var link = document.getElementById("giveClue");
    link.style.display = "none";
    var parent = document.getElementById("jokeDiv");
    var paragraph = document.createElement("p");
    var clue = document.createTextNode("Nisse's father... Nisse is also a son of his father! :)");
    paragraph.appendChild(clue);
    parent.appendChild(paragraph);
}