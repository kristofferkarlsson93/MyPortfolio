/**
 * Created by Kristoffer on 2017-01-25.
 */

$(document).ready(function() {
    $(".menuItem").click(function(event) {

        //On bigscreen-devices.

        var $link = $(this).attr("href");
        console.log($(this))
        $("#mainContent").animate({
            scrollLeft: $("#mainContent").scrollLeft() + $($link).offset().left
        }, 500);
        event.preventDefault();

    });
});
