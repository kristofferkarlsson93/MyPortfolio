/**
 * Created by Kristoffer on 2017-01-25.
 */

$(document).ready(function() {
    $(".menuItem").click(function(event) {
        var link = $(this).attr("href");
        console.log($(link).offset().left);
        $("html, body, #mainContent").stop().animate({
          scrollLeft: $(link).offset().left
        });
        event.preventDefault();
    });
});

//Fix bug with the numbers