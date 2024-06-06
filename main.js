//表單 輸入錯誤監聽
let items = document.querySelectorAll('.info_form_items');
let icons = document.querySelectorAll('.icon');
let errors = document.querySelectorAll('.error');
let forms = document.getElementById('info_form');

/*forms.addEventListener('submit',function(e) {
    items.forEach(function(item,index) {
        if(!item.value) {
            e.preventDefault();
            icons[index].classList.add("show");
            errors[index].classList.add("show");
        } else {
            icons[index].classList.remove("show");
            errors[index].classList.remove("show");
        }
    });   
});*/


