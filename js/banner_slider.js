$(function () {
  const eleWidth = $(".frame ul li").innerWidth();
  let state = false;
  let playOn = false;
  let direction = "left";
  let bannerAuto; //setinterval 함수 멈추기 위해 변수 사용, 변수 사용 안하는 경우 더 많음

  //브라우저는 화면상의 상태, 배치, 형태등을 모르므로 상태변수를 잘 만들어야함
  //ex) 버튼 클릭했다. 이미지 하나 넘겨라. 멈춰라

  function play() {
    if (!playOn) {
      playOn = true;
      bannerAuto = setInterval(function () {
        if (direction === "left") {
          $(".prev").click();
        } else {
          $(".next").click();
        }
      }, 2000);
    } // 모든 기본값은 트루, !playOn = playOn이 false

    if (playOn) {
      $(".frame li a").mouseover(function () {
        stop();
      }); //플레이 된 상태에서 마우스 올리면 스탑하게
    }
  } //play!!

  function stop() {
    if (playOn) {
      playOn = false;
      clearInterval(bannerAuto);
    } //내가 원하는 함수만 멈출 수 있도록 변수 사용

    $("frame li a").mouseout(function () {
      play();
    });

    $("frame li a").click(function () {
      location.href;
    });
  } //stop!!

  function left() {
    stop();
    direction = "left";
    $(".frame ul").animate({left: eleWidth * -1}, 500, function () {
      //왼쪽으로 -220나가자 마자 첫번째를 마지막으로 붙여야함
      $(this).children("li:first").insertAfter($(this).children("li:last"));
      //첫번째 자식을 인서트 애프터 뒤 = li의 마지막 자식 뒤에 삽입해라
      $(this).css("left", 0);
      state = false;
      play();
    }); // 왼쪽버튼 한 번 클릭했을때 실행되는 모듈
  } //left

  function right() {
    stop();
    direction = "right";
    $(".frame ul li:last").insertBefore($(".frame ul li:first"));
    //마지막 자식을 첫번째 자식 전에 삽입
    $(".frame ul").css("left", eleWidth * -1);
    $(".frame ul").animate({left: 0}, 500, function () {
      state = false;
      play();
    });
  } //right

  $(".prev").click(function () {
    if (!state) {
      state = true;
      left();
    }
  }); //prev_btn_click_event

  $(".next").click(function () {
    if (!state) {
      state = true;
      right();
    }
  }); //next_btn_click_event

  $(".stop").click(function () {
    stop();
  }); //stop_btn_click_event

  $(".play").click(function () {
    play(0);
  }); //play_btn_click_event

  $(".play").click();
  //초기 강제 자동실행(이벤트실행)
  
}); //jQuery_function
