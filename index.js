const DOM = function (){

return{
    input: document.getElementById("brInput")
  
}

}();

const dic = { '{': '}', '[': ']', '(': ')' };



const validateBrackets = () => {
    let stack = [];
    let result = "valid";
    let val = DOM.input.value;
    for (i = 0; i < val.length; i++) {
        if(val[i] in dic){
            stack.push(dic[val[i]]);
        }else{
            if(val[i] == stack.pop()){
               continue;
            }else{
                result = "invalid";
            }   
        }
    }
    if(stack.length != 0){
        result = "invalid";
    }
    console.log(result);
}

