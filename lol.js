

function SumNum(num1,num2) {

   
   return  num1 + num2
    }


function CallBack(value1, valu2, operation) {
    return operation(value1,valu2)
    
}

console.log(CallBack(8,8, SumNum));


