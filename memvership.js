//join-us
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

//전체영역
function imperfect() {
    alert("준비중입니다");
}