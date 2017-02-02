var previousPosition = window.pageYOffset || document.documentElement.scrollTop;
var scrollFlag = false;
window.onscroll = function() {
    changeHeaderSize()
}

function changeHeaderSize() {
    var currentPosition = window.pageYOffset || document.documentElement.scrollTop; //offset is the one doing shit
    var header = document.getElementById("jumboDiv");
    if (previousPosition < currentPosition && !scrollFlag) {
        console.log('scrolling down');
        header.className += " changeOnDownScroll";
        scrollFlag = true;
    } else if(previousPosition > currentPosition && scrollFlag){
        scrollFlag = false
        header.className = "jumbotron";
        console.log('scrolling up');
    }

    previousPosition = currentPosition;

}

