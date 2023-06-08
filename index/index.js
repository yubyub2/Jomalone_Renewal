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
/* //rolling_banner */


/* header */
$('.header').hover(function(){
  $('.header_ex').css('background-color','#FCF9EE');
  $('.logo').css('color','#222');
  $('.menu').css('color','#222');
  $('.gi img').css('filter','invert(100%)');
},
  function(){
    $('.header_ex').css('background-color','transparent');
    $('.logo').css('color','white');
    $('.menu').css('color','white');
    $('.gi img').css('filter','invert(0)');
  });
}
/* //header */
  
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

  
  /* section2 */
  $(function(){
    $('.txt01').mouseover(function(){
      $('.img').removeClass('on')
      $('.img:nth-child(1)').addClass('on')
      $('.black').removeClass('hidden')
      $('.black:nth-child(1)').addClass('hidden')
      $('.txt p:nth-child(1)').css('margin-top', '520px')
      $('.txt01 p:nth-child(1)').css('margin-top', '300px')
    })

    $('.txt02').mouseover(function(){
      $('.img').removeClass('on')
      $('.img:nth-child(2)').addClass('on')
      $('.black').removeClass('hidden')
      $('.black:nth-child(2)').addClass('hidden')
      $('.txt p:nth-child(1)').css('margin-top', '520px')
      $('.txt02 p:nth-child(1)').css('margin-top', '510px')
      $('.txt01 p:nth-child(1)').css('margin-top', '300px')
    })

    $('.txt03').mouseover(function(){
      $('.img').removeClass('on')
      $('.img:nth-child(3)').addClass('on')
      $('.black').removeClass('hidden')
      $('.black:nth-child(3)').addClass('hidden')
      $('.txt p:nth-child(1)').css('margin-top', '520px')
      $('.txt03 p:nth-child(1)').css('margin-top', '510px')
      $('.txt01 p:nth-child(1)').css('margin-top', '300px')
    })

    $('.txt04').mouseover(function(){
      $('.img').removeClass('on')
      $('.img:nth-child(4)').addClass('on')
      $('.black').removeClass('hidden')
      $('.black:nth-child(4)').addClass('hidden')
      $('.txt p:nth-child(1)').css('margin-top', '520px')
      $('.txt04 p:nth-child(1)').css('margin-top', '510px')
      $('.txt01 p:nth-child(1)').css('margin-top', '300px')
    })
  }) 
/*   $(function(){
    for (let i = 1; i <= 4; i++) {
      $(`.txt0${i}`).mouseover(function(){
        $('.img').removeClass('on');
        $(`.img:nth-child(${i})`).addClass('on');
        $('.black').removeClass('hidden');
        $(`.black:nth-child(${i})`).addClass('hidden');
        $('.txt p:nth-child(1)').css('margin-top', '520px');
        $(`.txt0${i} p:nth-child(1)`).css('margin-top', '510px');
        for (let j = 1; j <= 4; j++) {
          if (j !== i) {
            $(`.txt0${j} p:nth-child(1)`).css('margin-top', '510px');
          }
        }
      });
    }
  });

  $(function(){
    $('.txt01').mouseover(function(){
      $('.img').removeClass('on')
      $('.img:nth-child(1)').addClass('on')
      $('.black').removeClass('hidden')
      $('.black:nth-child(1)').addClass('hidden')
      $('.txt p:nth-child(1)').css('margin-top', '300px')
      $('.txt01 p:nth-child(1)').css('margin-top', '0px')
    })}) */

  /* //section2 */

/* section4 */
$(function(){
  $('.start_btn').on('click', function(){
    $('.que01').css('top', '0')
    $('.section4').css('height', '600px')
  })
  $('.anw1').on('click', function(){
    $('.que02').css('top', '0')
    $('.section4').css('height', '600px')
  })
  $('.anw2').on('click', function(){
    $('.que03').css('top', '0')
  })
  $('.anw3').on('click', function(){
    $('.result').css('top', '0')
  })
})
/* //section4 */

/* section5 */

document.addEventListener('DOMContentLoaded', function() {
  const themeButtons = document.querySelectorAll('.quick_bar ul li');
  const sections = document.querySelectorAll('.sec5');

  for (let i = 0; i < themeButtons.length; i++) {
    themeButtons[i].addEventListener('click', function() {
      const theme = themeButtons[i];
      const sectionId = `sec5_0${i + 1}`;

      themeButtons.forEach(item => item.classList.remove('click'));
      theme.classList.add('click');

      sections.forEach(section => section.classList.remove('block'));
      document.getElementById(sectionId).classList.add('block');
    });
  }
});

/* //section5 */

/* section6 */
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop : true,   // 슬라이드 반복 여부
  loopAdditionalSlides : 1,
  rewind: true,
  centeredslied:true,
  
});


/* sns pop_up */

document.addEventListener('DOMContentLoaded', () => {
  function toggleSNS(snsClass) {
    $(snsClass).toggle();
  }

  for (let i = 1; i <= 8; i++) {
    const slideSelector = `.section6 .swiper-slide:nth-child(${i})`;
    const snsClass = `.sns0${i}`;

    $(slideSelector).on("click", function () {
      toggleSNS(snsClass);
    });

    $(snsClass).find('.close').on("click", function () {
      toggleSNS(snsClass);
    });
  }
});
/* //section6 */

document.addEventListener('DOMContentLoaded', function() {
  for (let i = 1; i <= 6; i++) {
    const preview = document.querySelector('.preview0' + i);
    const pop = document.querySelector('.pop0' + i);

    preview.addEventListener("click", function() {
      pop.style.display = 'block';
    });

    pop.querySelector('.close').addEventListener("click", function() {
      pop.style.display = 'none';
    });
  }
});


/* //best_item */

document.addEventListener('DOMContentLoaded', () => {

  for (let i = 1; i <= 4; i++) {
    const newPrev = `.prev0${i}`;
    const newPop = `.sec1_pop0${i}`;

    $(newPrev).on("click", function () {
      $(newPop).css('display', 'block')
    });

    $(newPop).find('.close').on("click", function () {
      $(newPop).css('display', 'none')
    });
  }
});



/* // new release */


/* topBtn */

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

/* //topBtn */

/* header고정 */


