$(function(){

  let current = 0;
  let timer;
  const imgs = $("img");
  let indicators = [];
  // console.log(imgs);

  // indicator = 이미지 갯수 만큼 생성
  for(let i = 0; i < imgs.length; i ++){
    indicators = `<a href = '#' value="${i}"></a>`;
    $(".indicator").append(indicators);
  }
  
  // slide 실행 함수
  function slider(eq){
    $(".img-box").animate({left : -100 * eq + "%"}, 200);
    current = eq;

    $(".indicator").find("a").removeClass("active");
    $(".indicator").find("a").eq(current).addClass("active");
  }

  // slide 자동 실행 함수
  function autoPlay(){
    timer = setInterval(function(){
      let slideIdx = (current + 1) % imgs.length;
      slider(slideIdx);
    }, 3000);
    $(".indicator").find("a").eq(0).addClass("active");
  }

  // slide 멈춤 함수
  function stopSlider(){
    clearInterval(timer);
  }

  // ------------------------------------------------------------------------------- ↑ 함수 정의 / ↓ 함수 실행

  // 네비게이션 클릭 > slide 기능 실행 
  $("button").click(function(){
    // html 내 button은 두 개만 있으므로 if로 분기를 2개 나눈다
    if($(this).hasClass("prev")){
      if(current == 0){
        return false;
      } else {
        slider(current - 1);
      }
    } else {
      if(current >= imgs.length - 1){
        return false;
      } else {
        slider(current + 1);
      }
    }
  });

  // 이미지에 마우스 오버 > 자동 slide 멈춤
  $(".img-box").on("mouseenter", function(){
    stopSlider();
  }); 

  // 이미지에서 마우스 아웃> 자동 slide 시작
  $(".img-box").on("mouseleave", function(){
    autoPlay();
  });

  $(".indicator a").click(function(){
    let indicatorIdx = $(this).attr("value");
    
    slider(indicatorIdx);
  });

});