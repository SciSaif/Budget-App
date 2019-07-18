const trash = document.querySelector('.fa-trash');
const li = document.querySelector('li');
const addBox = document.querySelector('.add-box');
const addBoxOpt = document.querySelector('.add-box-opt');
const saif = document.querySelector('.saif');
const bodyb = document.querySelector('body');

const colours = ["#1ee9df", "#087e78", "#074ac7", "#074ac7", "#0f45a8", "#a80f9b", "#a80f4f", "#d31c1c", "#04c96d", "#fafafa", "#05e736", "#b6e705"];
let random = Math.floor(Math.random()*colours.length);
const color = colours[random];
var colorLine = `linear-gradient(to right,rgb(36, 35, 35), ${color})`;
bodyb.style.background = colorLine;


// setTimeout(()=>{
//     saif.classList.add('invisible')
// },3000)

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
        addBoxOpt.classList.add('invisible')
    }else
    {

        addBoxOpt.classList.remove('invisible')
        addBoxOpt.classList.add('animate-add-box-open')
        addBoxOpt.classList.replace('animate-add-box-close','animate-add-box-open')
    }
}

addBox.addEventListener('click', openDisplay)