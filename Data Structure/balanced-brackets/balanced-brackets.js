/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    // Write your code here
    let result = 'YES';
    let stack = [];
    s.split("").forEach(val => {
        switch(val){
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            case '(':
                stack.push(')');
                break;
            default:
                let test = stack.pop();
                if(val !== test){
                    result = 'NO'
                }
        }
    })
    
    if(stack.length){
        result = 'NO'
    }
    
    return result
}