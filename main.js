//表單 輸入錯誤監聽
let infoForm = document.getElementById('info_form');
console.log(infoForm.nodeName);
let content = document.querySelectorAll('.info_form_items');
console.log(content[0].value);
let icons = document.querySelectorAll('.error-icon');
console.log(icons[1].className);
let warm = document.querySelectorAll('.error-warm');
console.log(warm[2].textContent);

infoForm.addEventListener('submit',(e) => {
    let content = document.querySelectorAll('.info_form_items');
    let icons = document.querySelectorAll('.error-icon');
    let warm = document.querySelectorAll('.error-warm');

    for(let i = 0; i < content.length; i ++) {
        if(content[i].value === '') {
            e.preventDefault();
            content[i].style.borderColor = 'hsl(0, 100%, 74%)';
            icons[i].classList.add('show');
            warm[i].classList.add('show');
        }
    }  
});



