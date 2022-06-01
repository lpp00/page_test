jQuery(document).ready(function(){
    //헤더메뉴
    $(".hero_btn").click(function() {
        $(".hero").fadeOut();
        $("html,body").scrollTop(0);
    });
    if($(window).width()<768){
        $(".menu_btn").click(function() {
        $(".header_nav_wrap").addClass('on');
        $(".overlay").fadeIn();
    });
    $(".overlay").click(function() {
        $(".header_nav_wrap").removeClass('on');
        $(".overlay").fadeOut();
    });
    };
    setInterval(function(){
        $(".banner_wrap").delay("2500");
        $(".banner_wrap").animate({marginLeft:"-100%"},300);
                $(".banner_wrap").delay("2500");
        $(".banner_wrap").animate({marginLeft:"-200%"},300);
                $(".banner_wrap").delay("2500");
        $(".banner_wrap").animate({marginLeft:"0px"},300);
    });
    if($(window).width()>768){
//        드롭다운 메뉴 빠그라지는거 고정 어케하는지
        
    }
});