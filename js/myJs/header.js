

//http://www.virtuosoft.eu/code/bootstrap-autohidingnavbar/









/*var previousPosition = 0
var hideFlag = false;

function changeHeaderSize() {
    var currentPosition = document.getElementById("mainContent").pageYOffset; //offset is the one doing shit
    var headerText = document.getElementById("jumboDiv");
    //console.log(previousPosition);
    var position = $("#scrollable").position().top;
    console.log(position);
    if (position < 100 && !hideFlag ) {
        headerText.style.display = "none"
        console.log("hide");
        hideFlag = true;
    }else if (hideFlag && previousPosition + 30 < position) {
        headerText.style.display = "block";
        console.log("show");
        hideFlag = false;
    }
        

    /*if (previousPosition < currentPosition && !scrollFlag) {
        console.log('scrolling down');
        scrollFlag = true;
    } else if(previousPosition > currentPosition && scrollFlag){
        scrollFlag = false
        console.log('scrolling up');
    }*/

    /*previousPosition = position;

}
*/