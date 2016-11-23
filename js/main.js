$('document').ready(function() {
  $('.box').fadeIn(2000);

/*  $('#name').animate({opacity:1},900, function() {
    showStudent();
  });  
  $('#contact').animate({opacity:1},900, function() {
    showCell();
  });
  */  
});

var showCell = function() {
    $('#cell').animate({opacity:1},700, function() {
        showBar();
    });
}

var showBar = function() {
    $('#bar').animate({opacity:1},700, function() {
        showEmail();
    });
}

var showEmail = function() {
    $('#email').animate({opacity:1},700);
}

var showStudent = function() {
    $('#student').animate({opacity:1},700, function() {
        showJob();
    });
}

var showJob = function() {
    $('#job').animate({opacity:1},700, function() {
        showHobby();
    });
}

var showHobby = function() {
    $('#hobby').animate({opacity:1},700);
}