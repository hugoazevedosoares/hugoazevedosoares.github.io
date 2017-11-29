var time = 700;

$('document').ready(function() {
  //Fade all page in
  //$('.box').fadeIn(2000);

  //Fade text by text in
  $('#name').animate({
    opacity: 1
  }, 900, function() {
    showStudent();
  });

});

var showStudent = function() {
  $('#student').animate({
    opacity: 1
  }, time, function() {
    showJob();
  });
  $('#student i').animate({
    opacity: 1
  }, time);
}

var showJob = function() {
  $('#job').animate({
    opacity: 1
  }, time, function() {
    showHobby();
  });
  $('#job i').animate({
    opacity: 1
  }, time);
}

var showHobby = function() {
  $('#hobby').animate({
    opacity: 1
  }, time, function() {
    showContact();
  });
  $('#hobby i').animate({
    opacity: 1
  }, time);
}

var showContact = function() {
  $('#contact').animate({
    opacity: 1
  }, time);
  $('#contact i').animate({
    opacity: 1
  }, time);
}
