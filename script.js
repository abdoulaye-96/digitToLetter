const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const errorEl = document.getElementById("error");

let errorTime;
let resultTime;
function myFunction() {

    if(inputEl.value>0){
        resultEl.innerText = inputEl.toString();
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
        resultEl.innerText = "";
        inputEl.value = "";
        },10000)

    }else{
        errorEl.innerText = "please write a number";
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
        errorEl.innerText = "";
        inputEl.value = "";
        },2000)
    }
}

inputEl.addEventListener("input", myFunction);
