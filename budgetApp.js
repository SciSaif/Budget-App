const trash = document.querySelector('.fa-trash');
const li = document.querySelector('li');
const addBox = document.querySelector('.add-box');
const addBoxOpt = document.querySelector('.add-box-opt');

trash.addEventListener('click', () =>{
    li.classList.add('animateli');
    setTimeout(function(){
    li.classList.remove('animateli');
    li.classList.add('invisible');
    
    },500)
})

function openDisplay() {
    if (addBoxOpt.classList.contains('animate-add-box-open')) {
        addBoxOpt.classList.replace('animate-add-box-open','animate-add-box-close')
    }else
    {
        addBoxOpt.classList.add('animate-add-box-open')
        addBoxOpt.classList.replace('animate-add-box-close','animate-add-box-open')
    }
}

addBox.addEventListener('click', openDisplay)