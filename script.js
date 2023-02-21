
// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const idFrom = document.querySelector('#from');
const spanTeg = document.querySelector('span');
//console.log(idFrom);
//console.log(spanTeg);
idFrom.addEventListener('keydown', (e) => {
    spanTeg.innerText = spanTeg.innerText + e.key;
});







// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const msbtn = document.querySelector('.messageBtn');
const messageEl = document.querySelector('.message');

msbtn.addEventListener('click', (e) => {

    messageEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    messageEl.style.visibility = 'visible';


});



// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
const forminputs = document.querySelector('form');
const inputsArea = forminputs.querySelectorAll('.form-control');
const buttonSubmit = forminputs.querySelector('button');


buttonSubmit.addEventListener('click', (e) => {
    console.log(inputsArea.value);
    e.preventDefault();
        inputsArea.forEach(element => {
            if (element.value === '')
            {
                console.log('Выберите значения во всех полях...');
                element.classList.add('error');
                element.style.border = '0.1em solid red';
            }
            else
            {
                element.classList.remove('error');
                //console.log('Данные "типа" отправлены!!!');
                element.style.border = '0.001em solid Black';
            }
        });
});


inputsArea.forEach(element => {
    
    element.addEventListener('keydown', (e) => {
       
        // if (element.value != '')
        // {
            element.style.border = '0.001em solid Black';
            element.classList.remove('error');
        // }
      
    });
});
