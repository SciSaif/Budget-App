const trash = document.querySelector('.fa-trash');
const li = document.querySelector('li');
const addBox = document.querySelector('.add-box');
const addBoxOpt = document.querySelector('.add-box-opt');

function hideitem() {

    li.classList.add('animateli');
    setTimeout(function(){
    li.remove(li);
    },300)

}

trash.addEventListener('click', hideitem)

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