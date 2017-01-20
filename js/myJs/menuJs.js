/**
 * Created by Kristoffer on 2017-01-20.
 */

$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})