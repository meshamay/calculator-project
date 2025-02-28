const num1 = document.getElementById("num1").addEventListener('click', evaluate);
const num2 = document.getElementById("num2").addEventListener('click', evaluate1);
const num3 = document.getElementById("num3").addEventListener('click', evaluate2);
const num4 = document.getElementById("num4").addEventListener('click', evaluate3);
const num5 = document.getElementById("num5").addEventListener('click', evaluate4);
const num6 = document.getElementById("num6").addEventListener('click', evaluate5);
const num7 = document.getElementById("num7").addEventListener('click', evaluate6);
const num8 = document.getElementById("num8").addEventListener('click', evaluate7);
const num9 = document.getElementById("num9").addEventListener('click', evaluate8);
const num10 = document.getElementById("num10").addEventListener('click', evaluate9);

const Inputelement = document.getElementById('display');

const ac = document.getElementById("operator").addEventListener('click', erasefunc);
const dele = document.getElementById("operator1").addEventListener('click', deletefunc);
const remainder = document.getElementById("operator2").addEventListener('click', remainderfunc);
const divided = document.getElementById("operator3").addEventListener('click', dividedfunc);
const times = document.getElementById("operator4").addEventListener('click', operand);
const add = document.getElementById("operator6").addEventListener('click', addfunc);
const minus = document.getElementById("operator5").addEventListener('click', minusfunc);
const equal = document.getElementById("operator Equalbtn").addEventListener('click', equalfunc);
const dot = document.getElementById("num11").addEventListener('click', dotfunc);

let store = [];

function evaluate () {
    const val = "1";
    store.push(val);
    Inputelement.innerHTML =("");
}

function evaluate1() {
    const val = "2";
    store.push(val);
    console.log(store);
    Inputelement.innerHTML = store.join("");
}

function evaluate2() {
    const val = "3";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function evaluate3() {
    const val = "4";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function evaluate4() {
    const val = "5";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function evaluate5() {
    const val = "6";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function evaluate6() {
    const val = "7";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function evaluate7() {
    const val = "8";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function evaluate8() {
    const val = "9";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function evaluate9() {
    const val = "0";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function erasefunc() {
    store.length = 0;
    Inputelement.innerHTML = store.join("");
}

function deletefunc() {
    store.length = 0;
    Inputelement.innerHTML = store.join("");
}

function remainderfunc() {
    const val = "%";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function operand() {
    const val = "*";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function dividedfunc() {
    const val = "/";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function addfunc() {
    const val = "+";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function minusfunc() {
    const val = "-";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function dotfunc() {
    const val = ".";
    store.push(val);
    Inputelement.innerHTML = store.join("");
}

function equalfunc() {
    const resultcalc = store.join("");
    const result = eval(resultcalc);
    Inputelement.innerHTML = result;
}
