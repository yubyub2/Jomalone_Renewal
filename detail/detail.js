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

/* select */

const label = document.querySelector('.label');
const options = document.querySelectorAll('.optionItem');
const handleSelect = (item) => {
  label.parentNode.classList.remove('active');
  label.innerHTML = item.textContent;
}
//클릭한 옵션의 텍스트를 라벨 안에 넣기

options.forEach(option => {
  option.addEventListener('click', () => handleSelect(option))
})
//옵션 클릭시 클릭한 옵션 넘기기

label.addEventListener('click', () => {
  if(label.parentNode.classList.contains('active')) {
    label.parentNode.classList.remove('active');
  } else {
    label.parentNode.classList.add('active');
  }
})
//라벨 클릭시 옵션을 열림/닫힘 .active로 컨트롤


/* 수량count */
function count(type)  {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');
  // 현재 화면에 표시된 값
  let number = resultElement.innerText;
  // 더하기/빼기
  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus')  {
    number = parseInt(number) - 1;
  }
  // 결과 출력
  resultElement.innerText = number;
}
/* //수량count */

/* 수량에 따른 값 계산 */

document.getElementById('100ml').addEventListener('click', function() {
  document.querySelector('#item_price').innerText = "₩218,000";
  updateNumber();
});

document.getElementById('50ml').addEventListener('click', function() {
  document.querySelector('#item_price').innerText = "₩155,000";
  updateNumber();
});

document.getElementById('30ml').addEventListener('click', function() {
  document.querySelector('#item_price').innerText = "₩110,000";
  updateNumber();
});

/* ml를 선택하면 가격이 바뀌게 */

function updateNumber() {
  let resultValue = parseFloat(document.querySelector('#result').innerText);
  let priceValue = parseFloat(document.querySelector('#item_price').innerText.replace(/[^\d.]/g, ''));
  /* (/[^\d.]/g, '')  ->  숫자와 점(.)을 제외한 모든 문자를 제거한 값,  */
  let numberValue = resultValue * priceValue;
  document.querySelector('.number').innerText = numberValue.toLocaleString();
}

function count(action) {
  let resultElement = document.getElementById('result');
  let resultValue = parseInt(resultElement.innerText);

  if (action === "plus") {
    resultValue += 1;
  } else if (action === "minus" && resultValue > 1) {
    resultValue -= 1;
  }

  resultElement.innerText = resultValue;
  updateNumber();
}

/* //수량에 따른 값 계산 */

/* 장바구니 팝업 관련 */
document.addEventListener('DOMContentLoaded', function() {

    const addcart = document.querySelector('.addcart');
    const add = document.querySelector('.add');
    const alert = document.querySelector('.alert');
    const close = document.querySelector('.close');
    const cart_in = document.querySelector('.cart_in');

    addcart.addEventListener("click", function() {
      cart_in.style.top = '0px';
    });

    add.addEventListener("click", function() {
      alert.style.opacity = '1';
    });

    close.addEventListener("click", function() {
      cart_in.style.top = '-900px';
    });
  
});

/* 선택한 값에 따라 장바구니 팝업 안에 값 바꾸기 */
document.getElementById('100ml').addEventListener('click', function() {
  document.querySelector('.ml').innerText = "100ml";
});
document.getElementById('50ml').addEventListener('click', function() {
  document.querySelector('.ml').innerText = "50ml";
});
document.getElementById('30ml').addEventListener('click', function() {
  document.querySelector('.ml').innerText = "30ml";
});

/* //장바구니 팝업 관련 */


/* 아코디언 메뉴 */
const buttons = document.querySelectorAll('.button');

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.preventDefault();

    this.parentNode.classList.toggle('on');
  });
});
/* //아코디언 메뉴 */

/* top */

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


/* review_swiper */
const swiper = new Swiper('.review_img .swiper', {
  loop: false, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
});

/* //review_swiper */


/* review보이게 하는거 */
const revClick = document.querySelector('.revClick');
const reviewForm = document.querySelector('.review_form');

revClick.addEventListener('click', function() {
  if (reviewForm.style.display !== 'block') {
    reviewForm.style.display = 'block';
  } else {
    reviewForm.style.display = 'none';
  }
});


/* add review */
document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('.add_btn').addEventListener('click', function() {
    const textRev = document.querySelector('.textRev');
    const photo_review = document.querySelector('.photo_review');
    const fileInput = document.getElementById('newImg');
    const file = fileInput.files[0];

    let newDiv = document.createElement('div');
    let newText = document.createTextNode(textRev.value);
    newDiv.appendChild(newText);

    let newImgBox = document.createElement('div');
    let newDate = document.createElement('div');
    let img = document.createElement('img');

    newDiv.setAttribute('class', 'txt_box');
    newDiv.appendChild(newImgBox);
    newImgBox.setAttribute('class', 'img_box');
    newImgBox.appendChild(img);
    img.setAttribute('id', 'preview');

    // 파일 선택 여부 확인 후 이미지 업데이트
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        img.setAttribute('src', e.target.result);
      };
      reader.readAsDataURL(file);
    }

    document.body.appendChild(newDiv);

    newDiv.appendChild(newDate)
    newDate.setAttribute('class', 'date_box')
    newDate.setAttribute('id', 'current_date')
    document.getElementById("current_date").innerHTML = today;

    //* remove review */
    const newSpan = document.createElement('span')
    const spanText = document.createTextNode('X')
    newSpan.setAttribute('class', 'delete')

    newSpan.appendChild(spanText)
    newDiv.appendChild(newSpan)

    //autofocus 및 이전 내용 삭제
    photo_review.insertBefore(newDiv, photo_review.children[0])
    textRev.value = '';
    textRev.focus();
 


    /* ------------------요기까지가 추가되는 것 */

    let delBtn = document.querySelectorAll('.delete')
    
    for(let i=0; i<delBtn.length; i++){
      delBtn[i].addEventListener('click', function(){
        if(delBtn[i].parentNode.parentNode){
          this.parentNode.parentNode.removeChild(this.parentNode)
        }
      })
    }

  })//add_btn_click_event

})


/* 오늘 날짜 yyyy-mm-dd형식으로 */
const date = new Date();
const year = date.getFullYear();
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const day = ('0' + (date.getDate())).slice(-2);
const today = `${year}-${month}-${day}`;
console.log(today)

 //리뷰 추가 끝!
 


