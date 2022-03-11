
function deleteNum(){
    document.getElementById('result').value = '';
}
function calc(num){
    document.getElementById('result').value +=num ; 
}

function answer(){
    const inputNum =document.getElementById('result').value;
    const evaluated = eval(inputNum);
    document.getElementById('result').value  = evaluated;
}