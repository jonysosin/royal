var scrollY = 0;
$(document).ready(function(e) {
        scrollY = $(window).scrollTop();

    $(window).scroll(function(e){
        scrollY = $(window).scrollTop();
        checkSectionScroll();
        console.log(scrollY);
    });
});

function checkSectionScroll() {
    var elements = $('.js-section');

    $('.main-nav a').removeClass('active');

    for(var i = 0; i < elements.length; i ++) {
        $element = $(elements[i]);

        from = $element.offset().top;
        to = from + $element.height();

        if (scrollY + 106 >= from && scrollY <= to + 106) {
            $("a[href='#" + $element.attr('id') +"']").addClass('active');
            return;
        }
    }
    var ofsset = $('#service').offset().top;

    //switch (scrollY) {
    //    case scrollY >
    //}
}