var result = document.getElementById("result");

function display(num){

    result.value += num;
}

function calculate(){
    var final_number = result.value;
    var final_result = eval(final_number);
    result.value = final_result;
}

function clrs(){
    result.value = "";
}
function dle(){
    result.value = result.value.slice(0,-1);
}