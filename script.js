$(document).ready(function () {
    $('p#currentDay').append(moment().format('dddd, MMM Do'))

    // current hour from moment.js formatted to 9am, 10am, ect
    var currentHour = moment().format('ha');

    var timeArr = $('input'); // selecting all the inputs
   for(i = 0; i < timeArr.length; i++){
     var hour = $(timeArr[i]).attr('id')
     var task = localStorage.getItem('item' + hour) // content remains after refreshing page 
     $(timeArr[i]).val(task)
     var differnce = moment(hour, 'ha').diff(moment(currentHour, 'ha'),'hours');
     if(differnce < 0){
         $(timeArr[i]).css('background', '#d3d3d3')
     }
     else if(differnce === 0){
        $(timeArr[i]).css('background', 'red')
     }
     else {
        $(timeArr[i]).css('background', 'green')
     }
   }
    

// 9am

$('#saveBtn9am').on('click', function () {
    $('input#9am').css('border', '5px solid black');

    // Set Local storage
    var itemInput = $('#9am').val();
    localStorage.setItem('item9am', (itemInput));


    $('#saveBtn9am').on('click', function () {
        $('input#9am').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item9am');
                $('input#9am').val('');
    });

    // Remove text from input
    $('saveBtn9am').on('click', function() {
        $('input#9am').val('');
    })
   

});


// 10am
$('#saveBtn10am').on('click', function () {
    $('input#10am').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#10am').val();
    localStorage.setItem('item10am', (itemInput));
    
    $('#saveBtn10am').on('click', function () {
        $('input#10am').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item10am');
    });

});


// 11am
$('#saveBtn11am').on('click', function () {
    $('input#11am').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#11am').val();
    localStorage.setItem('item11am', (itemInput));

    $('#saveBtn11am').on('click', function () {
        $('input#11am').css('opacity', '0.5');
        //Remove Local Storage
        localStorage.removeItem('item11am');
    });

});


// 12pm
$('#saveBtn12pm').on('click', function () {
    $('input#12pm').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#12pm').val();
    localStorage.setItem('item12pm', (itemInput));

    $('#saveBtn12pm').on('click', function () {
        $('input#12pm').css('opacity', '0.5');
        //Remove Local Storage
        localStorage.removeItem('item12pm');
    });

});


// 1pm
$('#saveBtn1pm').on('click', function () {
    $('input#1pm').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#1pm').val();
    localStorage.setItem('item1pm', (itemInput));

    $('#saveBtn1pm').on('click', function () {
        $('input#1pm').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item1pm');

    });

});


// 2pm
$('#saveBtn2pm').on('click', function () {
    $('input#2pm').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#2pm').val();
    localStorage.setItem('item2pm', (itemInput));

    $('#saveBtn2pm').on('click', function () {
        $('input#2pm').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item2pm');
    });

});


// 3pm
$('#saveBtn3pm').on('click', function () {
    $('input#3pm').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#3pm').val();
    localStorage.setItem('item3pm', (itemInput));

    $('#saveBtn3pm').on('click', function () {
        $('input#3pm').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item3pm');

    });

});


// 4pm
$('#saveBtn4pm').on('click', function () {
    $('input#4pm').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#4pm').val();
    localStorage.setItem('item4pm', (itemInput));

    $('#saveBtn4pm').on('click', function () {
        $('input#4pm').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item4pm');
    });

});

// 5pm
$('#saveBtn5pm').on('click', function () {
    $('input#5pm').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#5pm').val();
    localStorage.setItem('item5pm', (itemInput));

    $('#saveBtn5pm').on('click', function () {
        $('input#5pm').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item5pm');
    });

});

})