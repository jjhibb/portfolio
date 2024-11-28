$(function(){
  AOS.init();

  $(window).scroll(function(){
    let st = $(this).scrollTop();
    if(st>=1){
      $('header').addClass('on');
    }
  })

  $('nav').hover(function(){
    $('nav ul').stop().slideDown().css('display','flex');
  },function(){
    $('nav ul').stop().slideUp();
  })
});

document.addEventListener("DOMContentLoaded", () => {
  const keywordSection = document.querySelector("#keyword");
  const circleWrap = document.querySelector(".circle_wrap");

  let stage = 0;

  window.addEventListener("scroll", () => {
    const rect = keywordSection.getBoundingClientRect();

    // 첫 번째 애니메이션: 중앙 원이 퍼지고 3개로 나뉨
    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      if (stage === 0) {
        circleWrap.classList.add("active");
        stage = 1;
      }
    } 

    // 두 번째 애니메이션: 3개의 원이 다시 합쳐짐
    else if (rect.top < 0 && stage === 1) {
      circleWrap.classList.add("merged");
      stage = 2;
    }
  });
});



