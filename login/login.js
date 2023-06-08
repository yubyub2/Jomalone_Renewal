
$(window).on('load', function () {
  setFlowBanner();  
})

function setFlowBanner(){
  const $wrap = $('.rolling');
  const $list = $('.rolling .list');
  let wrapWidth = $wrap.width();
  let listWidth = $list.width();
  const speed = 70; //1초에 몇픽셀 이동하는지 설정

  //리스트 복제
  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct()

  //배너 실행 함수
  function flowBannerAct() {
      //무한 반복을 위해 리스트를 복제 후 배너에 추가
      if (listWidth < wrapWidth) {
          const listCount = Math.ceil(wrapWidth * 2 / listWidth);
          for (let i = 2; i < listCount; i++) {
              $clone = $clone.clone();
              $wrap.append($clone);
          }
      }
      $wrap.find('.list').css({ 'animation': `${listWidth / speed}s linear infinite flowRolling` }); 
  } 

  $('.banner_exit').on("click", function(){
    $('.rolling_ex').css('display','none');
  });}
/* rolling_banner */



$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() >= 900){
      $('header').addClass('fixed')
      $('.header_ex').css('background-color','#FCF9EE');
      $('.logo').css('color','#222');
      $('.menu').css('color','#222');
      $('.gi img').css('filter','invert(100%)');
      
    } else{
      $('header').removeClass('fixed')
    }
  })
  })
 


/* 아이디 비밀번호 확인하는 쿼리 짜기~ */
function login(){
  let id = 'yubin'
  let pw = '1234'
  let user_id = document.getElementById("idform").value
  let user_pw = document.getElementById("pwform").value

  if (user_id == id) {
    if (user_pw == pw) {
      window.location.href = '../index.html';
      /* 나중에 index.html로 연결하기 */
    } else {
      alert('비밀번호를 다시 확인해주세요.');
    }
  } else {
    alert('아이디를 다시 확인해주세요.');
  }
}

/* 아이디 저장 색 바뀌기버튼 */
$(document).ready(function(){
  $('.idsave').on('click',function(){
      $('.idsave').toggleClass('active');
      if($('.idsave').hasClass('active')){
        $('.idsaveimg').css('filter','invert(0%)');
        $('.check').css('background-color','#fff');
      }else{
        $('.idsaveimg').css('filter','invert(100%)');
        $('.check').css('background-color','#E6E6E6');
      }
  });
});


/*idlength */
function idlength() {
  const input = document.getElementById('idform');
  const label = document.querySelector('.idtyping');
  
  if (input.value.length >= 4) {
    label.style.display = 'none';
  } else {
    label.style.display = 'inline';
  }
}


/* pwlength */
function pwlength() {
  const input = document.getElementById('pwform');
  const label = document.querySelector('.pwtyping');
  
  if (input.value.length >= 3) {
    label.style.display = 'none';
  } else {
    label.style.display = 'inline';
  }
}

/* 비회원 주문 팝업 */
function pop_up(){
  $('.nomember').on("click", function(){
    $('.popup').css('display','block');
    $('.shadow').css('display','block');
  });

  $('.close').on("click", function(){
    $('.popup').css('display','none');
    $('.shadow').css('display','none');
  });
}


  /* search */
  $(function(){
    $('.gnb_i3').on("click",function(){
      $('.search_ex').css('top','0');
    });
  
    $('.exit').on("click", function(){
      $('.search_ex').css('top','-400px');
    });

    $('item__contents').mouseover(function(){
      $('contents__menu').css('display', 'block')
    })
  })
/* //search */