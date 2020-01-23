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
$('#saveBtn1').on('click', function () {
    $('input#9am').css('border', '5px solid black');

    // Set Local storage
    var itemInput = $('#9am').val();
    localStorage.setItem('item9am', (itemInput));


    $('#saveBtn1').on('click', function () {
        $('input#9am').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item9am');
    });

    // Remove text from input
    $('saveBtn1').on('click', function(){
        $('#9am').val() = "";
    })
   

});


// 10am
$('#saveBtn2').on('click', function () {
    $('input#10am').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#10am').val();
    localStorage.setItem('item10am', (itemInput));
    
    $('#saveBtn2').on('click', function () {
        $('input#10am').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item10am');
    });

});


// 11am
$('#saveBtn3').on('click', function () {
    $('input#11am').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#11am').val();
    localStorage.setItem('item11am', (itemInput));

    $('#saveBtn3').on('click', function () {
        $('input#11am').css('opacity', '0.5');
        //Remove Local Storage
        localStorage.removeItem('item11am');
    });

});


// 12pm
$('#saveBtn4').on('click', function () {
    $('input#12pm').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#12pm').val();
    localStorage.setItem('item12pm', (itemInput));

    $('#saveBtn4').on('click', function () {
        $('input#12pm').css('opacity', '0.5');
        //Remove Local Storage
        localStorage.removeItem('item12pm');
    });

});


// 1pm
$('#saveBtn5').on('click', function () {
    $('input#1pm').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#1pm').val();
    localStorage.setItem('item1pm', (itemInput));

    $('#saveBtn5').on('click', function () {
        $('input#1pm').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item1pm');

    });

});


// 2pm
$('#saveBtn6').on('click', function () {
    $('input#2pm').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#2pm').val();
    localStorage.setItem('item2pm', (itemInput));

    $('#saveBtn6').on('click', function () {
        $('input#2pm').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item2pm');
    });

});


// 3pm
$('#saveBtn7').on('click', function () {
    $('input#3pm').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#3pm').val();
    localStorage.setItem('item3pm', (itemInput));

    $('#saveBtn7').on('click', function () {
        $('input#3pm').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item3pm');

    });

});


// 4pm
$('#saveBtn8').on('click', function () {
    $('input#4pm').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#4pm').val();
    localStorage.setItem('item4pm', (itemInput));

    $('#saveBtn8').on('click', function () {
        $('input#4pm').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item4pm');
    });

});

// 5pm
$('#saveBtn9').on('click', function () {
    $('input#5pm').css('border', '5px solid black');

    // Set Local Storage
    var itemInput = $('#5pm').val();
    localStorage.setItem('item5pm', (itemInput));

    $('#saveBtn9').on('click', function () {
        $('input#5pm').css('opacity', '0.5');
        // Remove Local Storage
        localStorage.removeItem('item5pm');
    });

});

})