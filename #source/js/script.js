document.querySelector('.wrapper').classList.add('loaded');

//call back

if ($('.popup-callback-bg').length) {

    let popupCallbackBackground = document.querySelector('.popup-callback-bg');
    let popupCallbackOpenBtns = document.querySelectorAll('.popup-callback-open-btn');
    let popupCallback = popupCallbackBackground.querySelector('.popup-callback');
    let popupCallbackCloseBtn = popupCallbackBackground.querySelector('.popup-callback__close');
    const popupCallbackForm = document.getElementById('popupCallbackForm');

    popupCallbackForm.addEventListener('submit', event => {
        event.preventDefault();
        formSend(popupCallbackForm);
    });

    popupCallbackOpenBtns.forEach(button => {
        button.addEventListener('click', () => {
            popupCallbackBackground.classList.add('popup-callback-bg-visible');
        });
    })

    popupCallbackBackground.addEventListener('click', (event) => {
        if (event.target === popupCallbackBackground) {
            popupCallbackBackground.classList.remove('popup-callback-bg-visible');
        }
    });

    popupCallbackCloseBtn.addEventListener('click', () => {
        popupCallbackBackground.classList.remove('popup-callback-bg-visible');
    });
}
//estimate

if ($('.popup-callback-bg-estimate').length) {

    let popupEstimateBackground = document.querySelector('.popup-callback-bg-estimate');
    let popupEstimateOpenBtns = document.querySelectorAll('.popup-callback-estimate-open-btn');
    let popupEstimate = popupEstimateBackground.querySelector('.popup-callback');
    let popupEstimateCloseBtn = popupEstimateBackground.querySelector('.popup-callback__close');
    const popupEstimateForm = document.getElementById('popupEstimateForm');

    popupEstimateForm.addEventListener('submit', event => {
        event.preventDefault();
        formSend(popupEstimateForm);
    });

    popupEstimateOpenBtns.forEach(button => {
        button.addEventListener('click', () => {
            popupEstimateBackground.classList.add('popup-callback-bg-visible');
        });
    })

    popupEstimateBackground.addEventListener('click', (event) => {
        if (event.target === popupEstimateBackground) {
            popupEstimateBackground.classList.remove('popup-callback-bg-visible');
        }
    });

    popupEstimateCloseBtn.addEventListener('click', () => {
        popupEstimateBackground.classList.remove('popup-callback-bg-visible');
    });
}

//project
if ($('.popup-project-bg').length) {
    let popupProjectBackground = document.querySelector('.popup-project-bg');
    let popupProjectOpenBtns = document.querySelectorAll('.popup-project-open-btn');
    let popupProject = popupProjectBackground.querySelector('.popup-project');
    let popupProjectCloseBtn = popupProjectBackground.querySelector('.popup-project__close');
    const popupProjectForm = document.getElementById('popupProjectForm');

    popupProjectForm.addEventListener('submit', event => {
        event.preventDefault();
        formSend(popupProjectForm);
    });

    popupProjectOpenBtns.forEach(button => {
        button.addEventListener('click', () => {
            popupProjectBackground.classList.add('popup-project-bg-visible');
        });
    })

    popupProjectBackground.addEventListener('click', (event) => {
        if (event.target === popupProjectBackground) {
            popupProjectBackground.classList.remove('popup-project-bg-visible');
        }
    });

    popupProjectCloseBtn.addEventListener('click', () => {
        popupProjectBackground.classList.remove('popup-project-bg-visible');
    });
}

// validation

async function formSend(form) {
    let error = formValidate(form);

    if (error === 0) {

    }
}

function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        input.classList.remove('_error');

        if (input.classList.contains('_phone')) {
            if (input.value.length < 18) {
                input.classList.add('_error');
                error++;
            }
        } else {
            if (input.value.length < 3 || input.value.length > 32) {
                input.classList.add('_error');
                error++;
            }
        }
    }
    return error;
}

//phone mask

function mask(event) {
    let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type === "blur") {
        if (this.value.length === 2) this.value = ""
    }
}

let phones = document.querySelectorAll("._phone");
phones.forEach(phone => phone.addEventListener("input", mask, false));
phones.forEach(phone => phone.addEventListener("focus", mask, false));
phones.forEach(phone => phone.addEventListener("blur", mask, false));

//sticky-header

myScroll();

window.onscroll = function() {
    myScroll();
}

function _scroll(block, b, c){
    const d = document.querySelector(block);
    let e = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200;
    if(b == 'slideDown'){
        if(e){
            d.style.top = '0';
        }
        else{
            d.style.top = c;

        }
    }
    else if(b == 'slideUp'){
        if(e){
            d.style.bottom = '0';
        }
        else{
            d.style.bottom = c;
        }
    }
    else if(b == 'slideLeft'){
        if(e){
            d.style.left = '0';
        }
        else{
            d.style.left = c;
        }
    }
    else{
        if(e){
            d.style.right = '0';
        }
        else{
            d.style.right = c;
        }
    }
}

function myScroll() {
    _scroll('.header-sticky', 'slideDown', '-100%');
}

if (document.querySelectorAll('.catalog__list')) {
    let lists = document.querySelectorAll('.catalog__list');
    lists.forEach(list => {
        let links = list.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                let chosenLink = list.querySelector('.catalog__link-active');
                if (chosenLink) {
                    chosenLink.classList.remove('catalog__link-active');
                }
                link.classList.add('catalog__link-active');
            })
        })
    })
}