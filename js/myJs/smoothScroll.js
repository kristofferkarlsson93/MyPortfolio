/**
 * Created by Kristoffer on 2017-01-25.
 */
$(document).ready(function() {

    $(".menuItem").click(function(event) {

        var $link = $(this).attr("href");



        $("#mainContent").animate({
            scrollLeft: $("#mainContent").scrollLeft() + $($link).offset().left
        }, 500);

        $("#mainContent").scrollTop(0);

        $("#mainContent").animate({
            scrollTop: 0
        }, 500);

        event.preventDefault();


    });
});
