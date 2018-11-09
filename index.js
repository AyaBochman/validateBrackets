const DOM = function (){

return{
    input: document.getElementById("brInput")
  
}

}();

const dic = { '{': '}', '[': ']', '(': ')' };

let val = '{[]}';

const validateBrackets = () => {
    let stack = [];
    let val = DOM.input.value;
    for (i = 0; i < val.length; i++) {
        if(val[i] in dic){
            stack.push(dic[val[i]]);
        }else{
            if(val[i] == stack.slice(-1).pop()){
                stack.pop();
            }else{
                console.log("Invalid");
                // return false;
            }
            console.log("Valid");
            // return true;
           
        }
      
    }
  
}

