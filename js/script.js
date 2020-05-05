$(function() {
    $("#navbarToggle").blur(function(event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 991) {
            $("#navbarNav").collapse('hide');
        }
    });
});

// (function(global) {
//     var dc = {};
//     var homeHtml = ;

//     global.$dc = dc;

// })(window);