let input = document.querySelector("input")

function addvalue(elementval){
    input.value += elementval

}

function clearval(){
    input.value = ""
}

function deletval(){
        input.value = input.value.slice(0,input.value.length-1)
}

function evalinput(){
    input.value = eval(input.value)
}