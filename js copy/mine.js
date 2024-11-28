/* 마우스 커서 ???????*/
const cursor = document.querySelector("#main nav");

cursor.addEventListener("mouseover", () => {
  document.body.style.cursor = "url(../img/cursor_link.png), auto";
});

cursor.addEventListener("mouseout", () => {
  document.body.style.cursor = "url(../img/cursor.png), auto";
});

$(function(){
    $('#project_intro').on('scroll',function(){
        if($('#main').scrollTop()>=1080){
        $('#project_intro').css('fontSize','600px')
        } else {
        $('#project_intro').css('fontSize','300px')
        }
    })
    $('.page').on('wheel',function(e){
        let nav;
        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
            nav = $(this).prev();
        }else{
            nav = $(this).next();
        }

        if(nav.length){
            let moveTop = nav.offset().top;
        $('html,body').stop().animate({
            scrollTop: moveTop
        },1400,'easeOutBounce');
        } 
    });
});