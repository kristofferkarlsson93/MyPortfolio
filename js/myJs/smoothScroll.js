/**
 * Created by Kristoffer on 2017-01-25.
 */

$(document).ready(function() {
    $(".menuItem").click(function(event) {

        //On bigscreen-devices.
        if ($(window).width() > 768) {
            console.log($(window).width())
            var $link = $(this).attr("href");
            $("#mainContent").animate({
                scrollLeft: $("#mainContent").scrollLeft() + $($link).offset().left
            }, 500);
            event.preventDefault();
        }

        //On smaller screens.
        else {
            var $link = $(this).attr("href");  //Takes the link
            $("#mainContent").animate({ //animates the scrolling
                scrollTop: $("#mainContent").scrollTop() + $($link).offset().top
            }, 500);
            event.preventDefault();
        }
    });
});
