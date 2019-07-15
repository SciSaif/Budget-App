const trash = document.querySelector('.fa-trash');
const li = document.querySelector('li');

trash.addEventListener('click', () =>{
    li.classList.add('animateli');
    setTimeout(function(){
    li.classList.remove('animateli');
    li.classList.add('invisible');
    
    },500)
})