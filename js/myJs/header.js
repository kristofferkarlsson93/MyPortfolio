window.onload = function () {
    var menu = document.getElementById("menuDiv");
    menu.onclick = changeHeight;
}

function changeHeight() {
    var header = document.getElementById("jumboContent");
    header.style.height="10px";
    header.style.fontSize = "50%";
    var text = document.getElementById("headerText");
    text.verticalAlign = "middle";
    checkHeaderClick();
}

function checkHeaderClick() {
    var header = document.getElementById("jumboDiv");
    header.onclick = resetJumbo;
}

function resetJumbo() {
    alert("Herejk");
    var header = document.getElementById("jumboDiv");
    header.style.height = "100%";
}