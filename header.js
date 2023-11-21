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