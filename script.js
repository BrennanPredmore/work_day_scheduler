$(document).ready(function () {
    $('p#currentDay').append(moment().format('dddd, MMM Do'))
})


// 9am
$('#saveBtn1').on('click', function () {
    $('input#9am').css('background', 'green');

    // Set Local storage
    var itemInput = $('#9am').val();
    localStorage.setItem('item9am', JSON.stringify(itemInput));


    $('#saveBtn1').on('click', function () {
        $('input#9am').css('background', 'red');
        // Remove Local Storage
        localStorage.removeItem('item9am');
    });

    // Remove text from input
    $('saveBtn1').on('click', function(){
        $('#9am').text('');
    })
   

});


// 10am
$('#saveBtn2').on('click', function () {
    $('input#10am').css('background', 'green');

    // Set Local Storage
    var itemInput = $('#10am').val();
    localStorage.setItem('item10am', JSON.stringify(itemInput));
    
    $('#saveBtn2').on('click', function () {
        $('input#10am').css('background', 'red');
        // Remove Local Storage
        localStorage.removeItem('item10am');
    });

});


// 11am
$('#saveBtn3').on('click', function () {
    $('input#11am').css('background', 'green');

    // Set Local Storage
    var itemInput = $('#11am').val();
    localStorage.setItem('item11am', JSON.stringify(itemInput));

    $('#saveBtn3').on('click', function () {
        $('input#11am').css('background', 'red');
        //Remove Local Storage
        localStorage.removeItem('item11am');
    });

});


// 12pm
$('#saveBtn4').on('click', function () {
    $('input#12pm').css('background', 'green');

    // Set Local Storage
    var itemInput = $('#12pm').val();
    localStorage.setItem('item12pm', JSON.stringify(itemInput));

    $('#saveBtn4').on('click', function () {
        $('input#12pm').css('background', 'red');
        //Remove Local Storage
        localStorage.removeItem('item12pm');
    });

});


// 1pm
$('#saveBtn5').on('click', function () {
    $('input#1pm').css('background', 'green');

    // Set Local Storage
    var itemInput = $('#1pm').val();
    localStorage.setItem('item1pm', JSON.stringify(itemInput));

    $('#saveBtn5').on('click', function () {
        $('input#1pm').css('background', 'red');
        // Remove Local Storage
        localStorage.removeItem('item1pm');

    });

});


// 2pm
$('#saveBtn6').on('click', function () {
    $('input#2pm').css('background', 'green');

    // Set Local Storage
    var itemInput = $('#2pm').val();
    localStorage.setItem('item2pm', JSON.stringify(itemInput));

    $('#saveBtn6').on('click', function () {
        $('input#2pm').css('background', 'red');
        // Remove Local Storage
        localStorage.removeItem('item2pm');
    });

});


// 3pm
$('#saveBtn7').on('click', function () {
    $('input#3pm').css('background', 'green');

    // Set Local Storage
    var itemInput = $('#3pm').val();
    localStorage.setItem('item3pm', JSON.stringify(itemInput));

    $('#saveBtn7').on('click', function () {
        $('input#3pm').css('background', 'red');
        // Remove Local Storage
        localStorage.removeItem('item3pm');

    });

});


// 4pm
$('#saveBtn8').on('click', function () {
    $('input#4pm').css('background', 'green');

    // Set Local Storage
    var itemInput = $('#4pm').val();
    localStorage.setItem('item4pm', JSON.stringify(itemInput));

    $('#saveBtn8').on('click', function () {
        $('input#4pm').css('background', 'red');
        // Remove Local Storage
        localStorage.removeItem('item4pm');
    });

});

// 5pm
$('#saveBtn9').on('click', function () {
    $('input#5pm').css('background', 'green');

    // Set Local Storage
    var itemInput = $('#5pm').val();
    localStorage.setItem('item5pm', JSON.stringify(itemInput));

    $('#saveBtn9').on('click', function () {
        $('input#5pm').css('background', 'red');
        // Remove Local Storage
        localStorage.removeItem('item5pm');
    });

});

