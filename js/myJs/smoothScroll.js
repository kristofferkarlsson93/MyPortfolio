/**
 * Created by Kristoffer on 2017-01-25.
 */

$(document).ready(function() {
    $(".menuItem").click(function(event) {
        var $link = $(this).attr("href");  //Takes the link
        console.log($($link).offset().left)
        console.log("andra: " + $("#mainContent").scrollLeft());
        $("#mainContent").animate({ //animates the scrolling
            //Find current scroll position and add that.

            scrollLeft: $("#mainContent").scrollLeft() + $($link).offset().left
        }, 500);
        event.preventDefault();
    });
});

// kolla denna
//http://www.queness.com/post/356/create-a-vertical-horizontal-and-diagonal-sliding-content-website-with-jquery
//https://tympanus.net/codrops/2010/06/02/smooth-vertical-or-horizontal-page-scrolling-with-jquery/
//Fix bug with the numbers