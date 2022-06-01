jQuery(document).ready(function(){
    
    // index(메인페이지)
    // .info_box 열기
    $(".license_btn").click(function(){ 
        $(".info_bg,.info_box").show();
    });
    // .info_box 닫기
    $(".info_bg,.close_btn").click(function(){
        $(".info_bg,.info_box").hide();
    });
    // email 복사
    $(".email").click(function(){
        $("textarea").select();
        document.execCommand('copy');
        alert("클립보드에 복사되었습니다.");
    });
    // 게시물 개수 카운트
    $(".box1_n").text($(".post").length);
    
    // feed(서브페이지)
    // 좋아요 on-off
//    $(".like").click(function(){
//        $(this).hide();
//        $(this).next(".liked").show();
//        $(this).parents().next().show();
//    });
//    $(".liked").click(function(){
//        $(this).hide();
//        $(this).parents().next().hide();
//        $(this).prev(".like").show();
//    });
    // 더보기
    $(".post_more").click(function(){
        $(this).siblings([4]).css({
            'width':'100%',
            'max-width':'720px',
            'max-height':'inherit',
            'overflow':'inherit',
            'text-overflow':'inherit'
        });
        $(this).hide();
    });
    if($(window).width()>960){
        $(".header_search").css({'display':'block'});
    }
});