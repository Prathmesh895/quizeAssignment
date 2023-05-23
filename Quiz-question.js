const statement= document.getElementById("statement")
const optionbutton= document.querySelector("option")

const fact={
    statement:"question1",
    option:[1/22,3/22,2/91,2/77],
    answer:[0]
}
statement.textContent=fact.statement;
optionbutton.textContent=fact.option[0];
