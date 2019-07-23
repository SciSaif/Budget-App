const trash = document.querySelector('.fa-trash');
const li = document.querySelector('li');
const addBox = document.querySelector('.add-box');
const addBoxOpt = document.querySelector('.add-box-opt');
const saif = document.querySelector('.saif');
const bodyb = document.querySelector('body');
const changeBudgetInput = document.querySelector('.budget-change-val');
const changeBudgetBtn = document.querySelector('.change-budget-btn');
const changeBudgetLabel = document.querySelector('.change-budget-label');
const changeBudgetBtnArrow = document.querySelector('.fa-arrow-right');
const expenseNameVal = document.querySelector('.expense-name-val');
const expenseAmtVal = document.querySelector('.expense-amt-val');
const addExpenseBtn = document.querySelector('.add-expense-btn');
const addExpenseBtn = document.querySelector('.ex-name');
const addExpenseBtn = document.querySelector('.ex-amt');
const addExpenseBtn = document.querySelector('.add-expense-btn');
const addExpenseBtn = document.querySelector('.add-expense-btn');




//change the background colour
const colours = ["#1ee9df", "#087e78", "#074ac7", "#074ac7", "#0f45a8", "#a80f9b", "#a80f4f", "#d31c1c", "#04c96d", "#faf", "#05e736", "#854532"];
let random = Math.floor(Math.random()*colours.length);
const color = colours[random];


//change the chrome header colour 
HeaderColor(color);
function HeaderColor(headColor) {
    var x = document.createElement("META");
    x.setAttribute("name", "theme-color");
    x.setAttribute("content", headColor);
    document.head.appendChild(x);
}


document.documentElement.style.setProperty("--base", color);



//Credits display
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
        addBoxOpt.classList.add('invisible');
    }else
    {

        addBoxOpt.classList.remove('invisible')
        addBoxOpt.classList.add('animate-add-box-open')
        addBoxOpt.classList.replace('animate-add-box-close','animate-add-box-open')
    }
}

addBox.addEventListener('click', openDisplay)

function changeBudget() {
    changeBudgetInput.classList.toggle('width-80vw');
    changeBudgetLabel.classList.toggle('width-0');
    changeBudgetBtn.classList.toggle('width-20vw');
    changeBudgetBtnArrow.classList.toggle('rotate-90');
}

changeBudgetBtn.addEventListener('click', changeBudget);


//when add expense btn is clicked

function addExpense() {
    const btnText = addExpenseBtn.innerHTML;
    if (expenseNameVal.value == "" || expenseAmtVal.value == "") {
        addExpenseBtn.innerHTML = `<p>!!</P>`
        addExpenseBtn.firstChild.classList.add('exAnimation')
        setTimeout(() => {
            addExpenseBtn.innerHTML = btnText;
        },2000);
    }else {
        addExpenseBtn.innerHTML = `<p>Expense Added Successfully!</P>`
        setTimeout(() => {
            addExpenseBtn.innerHTML = btnText;
        },2000);
    }
} 

addExpenseBtn.addEventListener('click', addExpense)