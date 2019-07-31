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
const exName = document.querySelector('.ex-name');
const exAmt = document.querySelector('.ex-amt');
const budgetDisplay = document.querySelector('.budget');
const expenseDisplay = document.querySelector('.expense');
const balanceDisplay = document.querySelector('.balance');
const list = document.querySelector('ul');
const emptyList = document.querySelector('.empty-list');
const displayBox = document.querySelector('.display-box');


var id = 1, store = [];


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



// Credits display
setTimeout(()=>{
    saif.classList.add('invisible')
},3000)


//---load data from local storage---

loadData();
function loadData(){
    var getstore =  JSON.parse(localStorage.getItem("storeExpense"));
    // console.log(getstore);
    if (getstore !== null) {
        
      getstore.forEach(elem => {
        //   console.log(elem);
          if (elem.trash===true) {
              return;
          }else{
              store.push(elem);
              
          }
    
      });

    //   console.log(store);

      //---load and display budget---
      if (store.length !== 0) {
          
      budgetDisplay.innerHTML = store[0].Budget;
      balanceDisplay.innerHTML = store[0].Budget;

      //---load and display, expenses, and balance---
      //   console.log(store);
      
      let expensee=0;

      store.forEach(elem => {
        var item = `
                     <li>
                       <i class="fas fa-trash fa-3x" id="${elem.ID}" job="delete"></i>
                       <p class="ex-name" job="edit" id="${elem.ID}">${elem.ExpenseName}</p>
                       <p class="ex-amt" job="edit" id="${elem.ID}">${elem.ExpenseAmt}</p>
                     </li>
                   `;
        list.insertAdjacentHTML("beforeend", item);

        expensee += Number(elem.ExpenseAmt);
        expenseDisplay.innerHTML = Number(expensee);
        
        balanceDisplay.innerHTML -= elem.ExpenseAmt;
        // console.log(id);
        
        //---updating id---
        if (elem.ID>= id) {
            id = elem.ID;
        }

      });

     id++;
    //  console.log(id);
    }
    }else return;
};


function hideitem() {
    li.classList.add('animateli');
    setTimeout(function(){
    li.remove(li);
    },300)

}

if (trash !== null) {
    trash.addEventListener('click', hideitem)
    
}

// if list it empty 
function listEmpty() {
    if (!list.innerHTML.includes("<li>")) {
        // console.log('in if');
        emptyList.classList.remove("invisible")
        addBox.classList.add("empty-list-animation")
        
    }
}
listEmpty();



function openDisplay() {
    if (addBoxOpt.classList.contains('animate-add-box-open')) {
        addBoxOpt.classList.replace('animate-add-box-open','animate-add-box-close')
        addBoxOpt.classList.add('invisible');
        listEmpty();

    }else
    {

        addBoxOpt.classList.remove('invisible')
        addBoxOpt.classList.add('animate-add-box-open')
        addBoxOpt.classList.replace('animate-add-box-close','animate-add-box-open')
        console.log('in event listener');
        emptyList.classList.add("invisible")
        addBox.classList.remove("empty-list-animation")
    }
}

addBox.addEventListener('click', openDisplay)

function changeBudget() {
    changeBudgetInput.classList.toggle('width-80vw');
    changeBudgetLabel.classList.toggle('width-0');
    changeBudgetBtn.classList.toggle('width-20vw');
    changeBudgetBtnArrow.classList.toggle('rotate-90');

    
    if (changeBudgetInput.value !== "") {
        // update budget 
        const budget = Number(changeBudgetInput.value);
        budgetDisplay.innerHTML = budget;

        // update balance
        const expense = Number(expenseDisplay.innerHTML);
        balanceDisplay.innerHTML = budget - expense;

        changeBudgetInput.value = "";

        //---store current budget to local storage---
        store.forEach(elem => {
            elem.Budget = budget;
        });
        console.log(store);
        
        localStorage.setItem("storeExpense", JSON.stringify(store));
        
    }else return
    
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
        const expenseName =  expenseNameVal.value;
        const expenseAmt = Number(expenseAmtVal.value);

        //---update expense---
        let temp = Number(expenseDisplay.innerHTML) + expenseAmt;
        expenseDisplay.innerHTML = temp;
        //---update balance---
        let temp2 = Number(balanceDisplay.innerHTML) - expenseAmt;
        balanceDisplay.innerHTML = temp2;

        var item = `
                    <li>
                    <i class="fas fa-trash fa-3x" id="${id}" job="delete"></i>
                    <p class="ex-name" job="edit" id="${id}">${expenseName}</p>
                    <p class="ex-amt" job="edit" id="${id}">${expenseAmt}</p>
                    </li>
                   `;
        list.insertAdjacentHTML("beforeend", item);
        
        //---store in local storage---
    
        store.push({
            "ExpenseName" : expenseName,
            "ExpenseAmt" : expenseAmt,
            "ID" : id,
            "trash" : false,
            "Budget" : Number(budgetDisplay.innerHTML)
        });
        // console.log(store);
        
        localStorage.setItem("storeExpense", JSON.stringify(store));
    
        id++;

        
        addExpenseBtn.innerHTML = `<p>Expense Added Successfully!</P>`
        setTimeout(() => {
            addExpenseBtn.innerHTML = btnText;
        },2000);
    }

} 

addExpenseBtn.addEventListener('click', addExpense)

function deleteExpense(element) {
    const elementIdNo = element.attributes.id.value;
    // console.log(elementIdNo);
    
    const expenseToDelete = Number(element.parentNode.querySelector('.ex-amt').innerHTML);
    // console.log(expenseToDelete);
    temp = Number(expenseDisplay.innerHTML) - expenseToDelete;
    expenseDisplay.innerHTML = temp;
    temp2 = Number(balanceDisplay.innerHTML) + expenseToDelete;
    balanceDisplay.innerHTML = temp2;
    
    element.parentNode.remove(element);
    listEmpty();


    //---set trash to true in local storage---
    var getstore = JSON.parse(localStorage.getItem("storeExpense"));
    // console.log(getstore);
    var index = getstore.findIndex((elem) => {
        return elem.ID == elementIdNo;
    })
    // console.log(index);
    getstore[index].trash = true;
    // console.log(getstore);
    store = getstore;
    localStorage.setItem("storeExpense", JSON.stringify(getstore));
}

function editExpense(element) {
    const expenseToEdit = Number(element.parentNode.querySelector('.ex-amt').innerHTML);
    const name = element.parentNode.querySelector('.ex-name').innerHTML;
    
    openDisplay();
    expenseNameVal.value = name;
    expenseAmtVal.value = expenseToEdit;
    expenseAmtVal.focus();
    expenseAmtVal.select();

    deleteExpense(element);
    
}

//---target dynamically created elements and edit or delete them---
list.addEventListener('click', function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;
    if (elementJob == "delete") {
        deleteExpense(element);
    }else if (elementJob == "edit") {
        editExpense(element);
    } 
});


expenseAmtVal.addEventListener("focus", () =>{
    console.log('yes');
    displayBox.classList.add("invisible");
    
});
expenseAmtVal.addEventListener("focusout", ()=> {
    displayBox.classList.remove("invisible");
   
});
expenseNameVal.addEventListener("focus", () =>{
    console.log('yes');
    displayBox.classList.add("invisible");
    
});
expenseNameVal.addEventListener("focusout", ()=> {
    displayBox.classList.remove("invisible");
   
});







