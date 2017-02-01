/**
 * Created by Kristoffer on 2017-01-25.
 */

$(document).ready(function() {
    $(".menuItem").click(function(event) {
        var $link = $(this).attr("href");  //Takes the link
        $("#mainContent").animate({ //animates the scrolling
            scrollLeft: $("#mainContent").scrollLeft() + $($link).offset().left
        }, 500);
        event.preventDefault();
    });
});
