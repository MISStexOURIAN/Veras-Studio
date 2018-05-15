var open = $(".menuButton");
var menu = $("#hiddenMenu");

open.click(function() {
    menu.toggleClass('openMenu');
});


/*Thanks to https://codepen.io/vineethtr/pen/PqaPox for this form's functionality!*/
$('.form-control').focusout(function() {
    $('.form-group').removeClass('focus');
});

$('.form-control').focus(function() {
    $(this).closest('.form-group').addClass('focus');
});

$('.form-control').keyup(function() {
    if($(this).val().length > 0){
        $(this).closest('.form-group').addClass('filled');
    }

    else{
        $(this).closest('.form-group').removeClass('filled');
    }
});

var $formControl = $('.form-control');
var values = {};
var validate =    $formControl.each(function() {
    if($(this).val().length > 0){
        $(this).closest('.form-group').addClass('filled');
    }
    else{
        $(this).closest('.form-group').removeClass('filled');
    }
});
  
