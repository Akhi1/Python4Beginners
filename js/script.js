$(document).ready( function(){

    collapsible_menu();

});

function collapsible_menu() {

    $('.collapsible-menu').each(function (i, e) {
        $(e).on('click', 'li', function (e) {
            $(this).children('ul').slideToggle();
        });

    });

}
