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

//헤더 영역

//검색버튼
const seachBoxs = document.querySelector("#seachBox");

function searchBut() {
    if (seachBoxs.style.display === "none") {
        seachBoxs.style.display = "block"
    } else {
        seachBoxs.style.display = "none"
    }
}

//햄버거 버튼

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

function btn(){
alert("로그인하세요");
}

function imperfect(){
alert("준비중입니다");
}

// 푸터 영역

// 옵션
const options = document.querySelector("#optioned")
const directions = document.querySelector("#direction");

function selects() {
    if (options.style.display == "none") {
        options.style.display = "block"
        directions.classList.add('active');
    } else {
        options.style.display = "none"
        directions.classList.remove('active');
    }
}

// 클릭시
function btn(){
    alert("로그인하세요");
}

function imperfect(){
    alert("준비중입니다");
}