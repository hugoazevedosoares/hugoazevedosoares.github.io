$('document').ready(function () {
    //Fade all page in
    //$('.box').fadeIn(2000);

    //Fade text by text in
    $('#name').animate({ opacity: 1 }, 900, function () {
        showStudent();
    });
    $('#contact').animate({ opacity: 1 }, 900, function () {
        showCell();
    });
    
});

var showCell = function () {
    $('#cell').animate({ opacity: 1 }, 700, function () {
        showEmail();
    });
}

var showEmail = function () {
    $('#email').animate({ opacity: 1 }, 700, function() {
        showSocial();
    });
}

var showSocial = function () {
    $('#social').animate({ opacity: 1 }, 700);
}

var showStudent = function () {
    $('#student').animate({ opacity: 1 }, 700, function () {
        showJob();
    });
}

var showJob = function () {
    $('#job').animate({ opacity: 1 }, 700, function () {
        showHobby();
    });
}

var showHobby = function () {
    $('#hobby').animate({ opacity: 1 }, 700);
}