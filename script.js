function btn() {
    alert("로그인하세요");
}
    
function imperfect() {
    alert("준비중입니다");
}

// 인크루드
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

// 헤더 영역 - 검색
const seachBoxs = document.querySelector("#seachBox");

function searchBut() {
    if (seachBoxs.style.display === "none") {
        seachBoxs.style.display = "block"
    } else {
        seachBoxs.style.display = "none"
    }
}

// 헤더 영역 - 햄버거 버튼

const gnbs = document.querySelector("#gnb");
const hamburgers = document.querySelector("#hamburger");
const searchs = document.querySelector("#search");

function screen() {
    if (window.innerWidth >= 1366) {
        gnbs.style.display = "block";
    } else {
        gnbs.style.display = "none";
    }
}

window.addEventListener('resize', screen);

function openClose() {
    if (gnbs.style.display == "none") {
        gnbs.style.display = "block";
        hamburgers.classList.add('active');
        document.body.style.overflow = "hidden";
        searchs.style.display = "none"
    } else {
        gnbs.style.display = "none";
        hamburgers.classList.remove('active');
        document.body.style.overflow = "scroll";
        searchs.style.display = "block"
    }
}

// 푸터 영역 - 옵션

function selects() {
    if (document.querySelector("#optioned").style.display == "none") {
        document.querySelector("#optioned").style.display = "block"
        document.querySelector("#direction").classList.add('active');
    } else {
        document.querySelector("#optioned").style.display = "none"
        document.querySelector("#direction").classList.remove('active');
    }
}

// 맴버십 영역 - join-us
// 출저 - https://cruella-de-vil.tistory.com/67

document.addEventListener('DOMContentLoaded', () => {
    const ckTag = document.getElementById('id_a')
    const evtBtnTag1 = document.getElementById('id_b')
    const evtBtnTag2 = document.getElementById('id_c')
    const evtBtnTag3 = document.getElementById('id_d')
    
    ckTag.addEventListener('click', (event) => {

        const chckValue = event.currentTarget.checked;

        evtBtnTag1.checked = chckValue
        evtBtnTag2.checked = chckValue
        evtBtnTag3.checked = chckValue

    })

    evtBtnTag1.addEventListener('click', (event) => {
        if(event.currentTarget.checked == false){
            ckTag.checked = false;
        }
    })

    evtBtnTag2.addEventListener('click', (event) => {
        if(event.currentTarget.checked == false){
            ckTag.checked = false;
        }
    })

    evtBtnTag3.addEventListener('click', (event) => {
        if(event.currentTarget.checked == false){
            ckTag.checked = false;
        }
    })

})

// purchase 영역 - 하트
// 주의 사항, const로 만들면 작동을 안함. 무조건 let으로!

let isClicked = false;

function heartBtn(heart) {
if (isClicked) {
    heart.style.objectPosition = "top";
    isClicked = false;
} else {
    heart.style.objectPosition = "bottom";
    isClicked = true;
}
}