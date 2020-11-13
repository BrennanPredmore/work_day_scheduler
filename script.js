$(document).ready(function () {
  $('p#currentDay').append(moment().format('dddd, MMM Do'));

  // current hour from moment.js formatted to 9am, 10am, ect
  var currentHour = moment().format('ha');

  var timeArr = $('input'); // selecting all the inputs
  for (i = 0; i < timeArr.length; i++) {
    var hour = $(timeArr[i]).attr('id');
    var task = localStorage.getItem('item' + hour); // content remains after refreshing page
    $(timeArr[i]).val(task);
    var differnce = moment(hour, 'ha').diff(moment(currentHour, 'ha'), 'hours');
    if (differnce < 0) {
      $(timeArr[i]).css('background', '#d3d3d3');
    } else if (differnce === 0) {
      $(timeArr[i]).css('background', 'red');
    } else {
      $(timeArr[i]).css('background', 'green');
    }
  }

  // 9am
  $('#saveBtn9am').on('click', function () {
    $('input#9am').addClass('firstClick');

    // Set Local storage
    var itemInput = $('#9am').val();
    localStorage.setItem('item9am', itemInput);

    $('#saveBtn9am').on('click', function () {
      $('input#9am').addClass('secondClick');

      // Remove Local Storage
      localStorage.removeItem('item9am');
    });

    // Remove text from input with garbage can
    $('#trashBtn9am').on('click', function () {
      $('input#9am').val('').removeClass();
    });
  });

  // 10am
  $('#saveBtn10am').on('click', function () {
    $('input#10am').addClass('firstClick');

    // Set Local Storage
    var itemInput = $('#10am').val();
    localStorage.setItem('item10am', itemInput);

    $('#saveBtn10am').on('click', function () {
      $('input#10am').addClass('secondClick');
      // Remove Local Storage
      localStorage.removeItem('item10am');
    });

    // Remove text from input with garbage can
    $('#trashBtn10am').on('click', function () {
      $('input#10am').val('').removeClass();
    });
  });

  // 11am
  $('#saveBtn11am').on('click', function () {
    $('input#11am').addClass('firstClick');

    // Set Local Storage
    var itemInput = $('#11am').val();
    localStorage.setItem('item11am', itemInput);

    $('#saveBtn11am').on('click', function () {
      $('input#11am').addClass('secondClick');
      //Remove Local Storage
      localStorage.removeItem('item11am');
    });

    // Remove text from input with garbage can
    $('#trashBtn11am').on('click', function () {
      $('input#11am').val('').removeClass();
    });
  });

  // 12pm
  $('#saveBtn12pm').on('click', function () {
    $('input#12pm').addClass('firstClick');

    // Set Local Storage
    var itemInput = $('#12pm').val();
    localStorage.setItem('item12pm', itemInput);

    $('#saveBtn12pm').on('click', function () {
      $('input#12pm').addClass('secondClick');
      //Remove Local Storage
      localStorage.removeItem('item12pm');
    });

    // Remove text from input with garbage can
    $('#trashBtn12pm').on('click', function () {
      $('input#12pm').val('').removeClass();
    });
  });

  // 1pm
  $('#saveBtn1pm').on('click', function () {
    $('input#1pm').addClass('firstClick');

    // Set Local Storage
    var itemInput = $('#1pm').val();
    localStorage.setItem('item1pm', itemInput);

    $('#saveBtn1pm').on('click', function () {
      $('input#1pm').addClass('secondClick');
      // Remove Local Storage
      localStorage.removeItem('item1pm');
    });

    // Remove text from input with garbage can
    $('#trashBtn1pm').on('click', function () {
      $('input#1pm').val('').removeClass();
    });
  });

  // 2pm
  $('#saveBtn2pm').on('click', function () {
    $('input#2pm').addClass('firstClick');

    // Set Local Storage
    var itemInput = $('#2pm').val();
    localStorage.setItem('item2pm', itemInput);

    $('#saveBtn2pm').on('click', function () {
      $('input#2pm').addClass('secondClick');
      // Remove Local Storage
      localStorage.removeItem('item2pm');
    });

    // Remove text from input with garbage can
    $('#trashBtn2pm').on('click', function () {
      $('input#2pm').val('').removeClass();
    });
  });

  // 3pm
  $('#saveBtn3pm').on('click', function () {
    $('input#3pm').addClass('firstClick');

    // Set Local Storage
    var itemInput = $('#3pm').val();
    localStorage.setItem('item3pm', itemInput);

    $('#saveBtn3pm').on('click', function () {
      $('input#3pm').addClass('secondClick');
      // Remove Local Storage
      localStorage.removeItem('item3pm');
    });

    // Remove text from input with garbage can
    $('#trashBtn3pm').on('click', function () {
      $('input#3pm').val('').removeClass();
    });
  });

  // 4pm
  $('#saveBtn4pm').on('click', function () {
    $('input#4pm').addClass('firstClick');

    // Set Local Storage
    var itemInput = $('#4pm').val();
    localStorage.setItem('item4pm', itemInput);

    $('#saveBtn4pm').on('click', function () {
      $('input#4pm').addClass('secondClick');
      // Remove Local Storage
      localStorage.removeItem('item4pm');
    });

    // Remove text from input with garbage can
    $('#trashBtn4pm').on('click', function () {
      $('input#4pm').val('').removeClass();
    });
  });

  // 5pm
  $('#saveBtn5pm').on('click', function () {
    $('input#5pm').addClass('firstClick');

    // Set Local Storage
    var itemInput = $('#5pm').val();
    localStorage.setItem('item5pm', itemInput);

    $('#saveBtn5pm').on('click', function () {
      $('input#5pm').addClass('secondClick');
      // Remove Local Storage
      localStorage.removeItem('item5pm');
    });

    // Remove text from input with garbage can
    $('#trashBtn5pm').on('click', function () {
      $('input#5pm').val('').removeClass();
    });
  });
});
