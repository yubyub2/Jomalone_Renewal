import cologneList from "./cologne_data.js";

const Cologne = document.querySelector('.cologne_product')
 
for(let i=0; i<cologneList.length;i++){

  const cologneDiv = document.createElement('div')
  const cologneDetail = document.createElement('a')
  const cologneImg = document.createElement('img')
  const cologneName = document.createElement('p')
  const cologneNameText = document.createTextNode(cologneList[i].name)
  const cologneNameKor = document.createElement('p')
  const cologneNameKorText = document.createTextNode(cologneList[i].korName)
  const colognePrice = document.createElement('p')
  const colognePriceTxt = document.createTextNode(cologneList[i].price)
  const prevBtn = document.createElement('div')
  const prevTxt = document.createTextNode('미리보기')

  cologneDiv.setAttribute('id',cologneList[i].id)
  cologneDiv.setAttribute('class','cologne_box')
  cologneDiv.appendChild(cologneDetail)
  cologneImg.setAttribute('src',cologneList[i].src)
  cologneDetail.appendChild(cologneImg)
  cologneDetail.setAttribute('href','../detail/detail.html')
  cologneImg.setAttribute('class', 'src')
  cologneName.appendChild(cologneNameText)
  cologneDetail.appendChild(cologneName)
  cologneName.setAttribute('class','name')
  cologneNameKor.appendChild(cologneNameKorText)
  cologneNameKor.setAttribute('class', 'korName')
  cologneDetail.appendChild(cologneNameKor)
  colognePrice.appendChild(colognePriceTxt)
  colognePrice.setAttribute('class','price')
  cologneDetail.appendChild(colognePrice)
  Cologne.appendChild(cologneDiv)
  cologneDiv.appendChild(prevBtn)
  prevBtn.setAttribute('id',cologneList[i].prev)
  prevBtn.appendChild(prevTxt)
  prevBtn.setAttribute('class', 'prev')

}
/* ------------------------------ */
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


/* 제품별 팝업 */

document.addEventListener('DOMContentLoaded', () => {

  for (let i = 0; i <= 13; i++) {
    const preview = document.querySelectorAll('.prev');
    const pop = document.querySelector(`.pop${i}`);
    const shadow = document.querySelector('.bg');

    preview[i].addEventListener("click", function () {
      pop.style.display = 'block';
      shadow.style.display = 'block';
    });

    pop.querySelector('.close').addEventListener("click", function () {
      pop.style.display = 'none';
      shadow.style.display = 'none';
    });
  }
});


/* pagination color*/

document.addEventListener('DOMContentLoaded', () => {
  const click = document.querySelectorAll('.pageNum li');

  for (let i = 0; i < click.length; i++) {
    click[i].addEventListener('click', () => {
      const clickedLi = document.querySelector('.click');
      clickedLi.classList.remove('click');
      click[i].classList.add('click');
    });
  }
});

/* sort */
const originalCologneList = [...cologneList];

$('#original').on('click', function(){
  for(let i = 0; i < cologneList.length; i++){
    // 원래의 cologneList 배열을 사용하여 원래 값으로 복원합니다.
    $(".price").eq(i).html(originalCologneList[i].price);
    $(".korName").eq(i).html(originalCologneList[i].korName);
    $(".name").eq(i).html(originalCologneList[i].name);
    $(".src").eq(i).attr("src",`${originalCologneList[i].src}`);
  }
});

/* 높은 가격순 */
$('#highPrice').on('click', function(){
  cologneList.sort(function(a, b){
    return b.price - a.price; // 오름차순으로 가격(price) 정렬
  });

  for(let i = 0; i < cologneList.length; i++){
    $(".price").eq(i).html(cologneList[i].price); // 수정된 선택자 '.price' 사용
    $(".korName").eq(i).html(cologneList[i].korName);
    $(".name").eq(i).html(cologneList[i].name);
    $(".src").eq(i).attr("src",`${cologneList[i].src}`)
  }
});

/* 낮은 가격순 */
$('#lowPrice').on('click', function(){
  cologneList.sort(function(a, b){
    return a.price - b.price; // 내림차순으로 가격(price) 정렬
  });

  for(let i = 0; i < cologneList.length; i++){
    $(".price").eq(i).html(cologneList[i].price); // 수정된 선택자 '.price' 사용
    $(".korName").eq(i).html(cologneList[i].korName);
    $(".name").eq(i).html(cologneList[i].name);
    $(".src").eq(i).attr("src",`${cologneList[i].src}`)
    
  }
});

/* 가나다순 */
$('#sortAbc').on('click', function(){
  cologneList.sort(function(a, b){
   if(a.korName < b.korName) return -1;
   else if(a.korName == b.korName) return 0;
   else return 1;
  });

  for(let i = 0; i < cologneList.length; i++){
    $(".price").eq(i).html(cologneList[i].price); // 수정된 선택자 '.price' 사용
    $(".korName").eq(i).html(cologneList[i].korName);
    $(".name").eq(i).html(cologneList[i].name);
    $(".src").eq(i).attr("src",`${cologneList[i].src}`)
    
  }
});

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

/* 페이지네이션 */

