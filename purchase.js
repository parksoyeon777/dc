//amande

//이미지 변경
const container = document.getElementById("imageContainer");
function change_img(image) {
    container.src = image.src;
}

// 하트
// const로 만들면 작동안해요.

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

//버튼

function btn(){
    alert("로그인하세요");
}
