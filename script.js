$(document).ready(function () {
    $('p#currentDay').append(moment().format('dddd, MMM Do'))
})

// 9am
$('#saveBtn1').on('click', function () {
    $('input#9am').css('background', 'green');
});

// 10am


