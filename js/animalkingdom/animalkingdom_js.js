function remaindTime(){
    var now = new Date();
    var end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),18,00,00);
    var open = new Date(now.getFullYear(),now.getMonth(),now.getDate(),17,10,00);
    var allday = new Date(now.getFullYear(),now.getMonth(),now.getDate(),41,30,00);
    
    var nt = now.getTime();
    var ot = open.getTime();
    var et = end.getTime();
    var ad = allday.getTime();
    
    if(nt<ot){
        $(".time_count").fadeIn();
        $("p.time_title").html("방송 시작까지");
        sec = parseInt(ot-nt)/1000;
        day = parseInt(sec/60/60/24);
        sec = (sec - (day * 60 * 60 * 24));
        hour = parseInt(sec/60/60);
        sec = (sec - (hour*60*60));
        min = parseInt(sec/60);
        sec = parseInt(sec-(min*60));
        if(hour<10){hour="0"+hour;}
        if(min<10){min="0"+min;}
        if(sec<10){sec="0"+sec;}
        $(".hours").html(hour);
        $(".minutes").html(min);
        $(".seconds").html(sec);
        } else {
            $(".time_count").fadeIn();
            $("p.time_title").html("방송 시작까지");
            sec =parseInt(ad - nt) / 1000;
            day  = parseInt(sec/60/60/24);
            sec = (sec - (day * 60 * 60 * 24));
        hour = parseInt(sec/60/60);
        sec = (sec - (hour*60*60));
        min = parseInt(sec/60);
        sec = parseInt(sec-(min*60));
        if(hour<10){hour="0"+hour;}
        if(min<10){min="0"+min;}
        if(sec<10){sec="0"+sec;}
        $(".hours").html(hour);
        $(".minutes").html(min);
        $(".seconds").html(sec);
    }
}
setInterval(remaindTime,1000);