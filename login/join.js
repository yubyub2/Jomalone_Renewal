
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
  });
/* rolling_banner */



$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() >= 2000){
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
  

 }

 /* form_input length에 따른 label */

 /* id_form */

 function idlength() {
  const input = document.getElementById('id');
  const label = document.querySelector('.idlabel');
  
  if (input.value.length >= 4) {
    label.style.display = 'none';
  } else {
    label.style.display = 'inline';
  }
}

/* pw_form */
function pwlength() {
  const input = document.getElementById('pw');
  const label = document.querySelector('.pwlabel');
  
  if (input.value.length >= 4) {
    label.style.display = 'none';
  } else {
    label.style.display = 'inline';
  }
}
/* //1번 pw */

function pw2length() {
  const input = document.getElementById('pw2');
  const label = document.querySelector('.pw2_label');
  
  if (input.value.length >= 4) {
    label.style.display = 'none';
  } else {
    label.style.display = 'inline';
  }
}
/* //2번 pw */

document.addEventListener('DOMContentLoaded', () => {
  const inputpw = document.getElementById('pw');
  const inputpw2 = document.getElementById('pw2');
    
  inputpw2.addEventListener('change', checkPw)

  function checkPw() {
  inputpw2.addEventListener('input', checkPw)
    if(inputpw.value == inputpw2.value){
      $('.pwalert2').css('display', 'inline');
      $('.pwalert').css('display', 'none');
    }
    else{
      $('.pwalert').css('display', 'inline');
      $('.pwalert2').css('display', 'none');
    }}
  })
/* // pw_chk_alert */

/* -----------------------------------------------pw */

/* name */

function namelength() {
  const input = document.getElementById('name');
  const label = document.querySelector('.namelabel');
  
  if (input.value.length >= 2) {
    label.style.display = 'none';
  } else {
    label.style.display = 'inline';
  }
}

/* phone */

function moveTel() {
  const telSecond = document.getElementById('phone2')
  const telThird = document.getElementById('phone3')

  if(telSecond.value.length >= 4){
    telThird.focus()
  }
}

/* addr */

function addrlength() {
  const input = document.getElementById('addr');
  const label = document.querySelector('.addrlabel');
  
  if (input.value.length >= 2) {
    label.style.display = 'none';
  } else {
    label.style.display = 'inline';
  }
}

/* birth */
function birthlength() {
  const input = document.getElementById('yymmdd');
  const label = document.querySelector('.birthlabel');
  
  if (input.value.length >= 6) {
    label.style.display = 'none';
  } else {
    label.style.display = 'inline';
  }
}


/* 약관동의 */
document.addEventListener('DOMContentLoaded', () => {

  const allChks = document.getElementById('whole_check')
  const chkEls = document.querySelectorAll('.checkel')
  const chk01 = document.getElementById('check01') 
  const chk02 = document.getElementById('check02') 
  const chk03 = document.getElementById('check03')

  allChks.addEventListener('click', totalChk)
  chk01.addEventListener('click', eachcheck)
  chk02.addEventListener('click', eachcheck)
  chk03.addEventListener('click', eachcheck)
  allChks.addEventListener('click', eachcheck)

  function totalChk(){
    if(allChks.checked === true){
      chkEls.forEach((chkEl) => {
        //각각의 요소라는 뜻으로 s를 안붙인걸로 사용
        chkEl.checked = true
        //각각의 요소가 트루일때는 각각의 값에 true를 주는 것 
      })
    } else{
      chkEls.forEach((chkEl) => {
        chkEl.checked = false
      })
    }
  
  }
  /* 전체동의체크 */

  function eachcheck(){
    if(chk01.checked && chk02.checked && chk03.checked){
      allChks.checked = true
    } else{
      allChks.checked = false
    }
  }
  /* 개별 다 체크되면 전체 체크 아니면 해제 */
})



$(function(){
  
  $('.agr1').on('click', function(){
    $('.agrCon1').toggle('fast');
  if ($('.arrow01').css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
    $('.arrow01').css('transform', 'scaleY(-1)');
  } else {
    $('.arrow01').css('transform', 'scaleY(1)');
  }
});

$('.agr2').on('click', function(){
  $('.agrCon2').toggle('fast');
if ($('.arrow02').css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
  $('.arrow02').css('transform', 'scaleY(-1)');
} else {
  $('.arrow02').css('transform', 'scaleY(1)');
}
});

$('.agr3').on('click', function(){
  $('.agrCon3').toggle('fast');
if ($('.arrow03').css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
  $('.arrow03').css('transform', 'scaleY(-1)');
} else {
  $('.arrow03').css('transform', 'scaleY(1)');
}
});

  });
  /* arrow클릭시 클릭하면 반대로 뒤집는거 */

/* //약관동의 체크 */






/* 조건과 필수약관 모두 동의시 다음 페이지로 넘어가게 */
/* 아니면 못 넘어가고 입력안한 input으로 넘어가거나
약관 동의 안하면 alert뜨게 */

$(function(){
  $('.complete').on("click", function(event){

    if($('#id').val()==""){
      $('#id').focus();
      event.preventDefault(); // 페이지 이동 막기
      return;
    }
    if($('#pw').val()==""){
      $('#pw').focus();
      event.preventDefault(); 
      return;
    }
    if($('#pw2').val()==""){
      $('#pw2').focus();
      event.preventDefault(); 
      return;
    }
    if($('#name').val()==""){
      $('#name').focus();
      event.preventDefault(); 
      return;
    }
    if($('#phone2').val()==""){
      $('#phone2').focus();
      event.preventDefault(); 
      return;
    }
    if($('#phone3').val()==""){
      $('#phone3').focus();
      event.preventDefault(); 
      return;
    }
    if($('#whole_check').is(':checked')==false){
      alert('필수약관에 동의 해주세요');
      event.preventDefault(); 
      return;
    }

    location.href="../joined/joinend.html";
  });
});



/* TOP Btn */
const topBtn = document.querySelector('.top_btn')

window.addEventListener('scroll', () => {
  if(window.scrollY > 200){
    gsap.to(topBtn, 0.3, {
      opacity:1
    })
    } else{
    gsap.to(topBtn, 0.3, {
      opacity:0
    })
  }
})
topBtn.addEventListener('click', () => {
  gsap.to(window, 0.5, {
    scrollTo:0
  })
})





