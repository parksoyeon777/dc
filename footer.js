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