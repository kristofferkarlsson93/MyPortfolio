/**
 * Created by Kristoffer on 2017-02-23.
 */

$(function() {
    //Enable swiping...
    $("#mainContent").swipe( {
        //Generic swipe handler for all directions
        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
            if($(this).scrollLeft() < $(window).width() * 2){
                $("#mainContent").animate({
                    scrollLeft: $("#mainContent").scrollLeft() + $(window).width()
                })
            }


        },
        swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
            $("#mainContent").animate({
                scrollLeft: $("#mainContent").scrollLeft() - $(window).width()
            })
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:75
    });
});
