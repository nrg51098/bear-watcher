
const printToDom=(selector, domString)=>{
    document.querySelector(selector).innerHTML = domString;
}

export default {printToDom};