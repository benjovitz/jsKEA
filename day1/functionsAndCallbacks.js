
function add(n1, n2){
   return n1 +n2;
}
const sub = function(n1,n2){
  return n1 - n2
} 

function mul (n1,n2){
    return n1*n2;
}

//Callback example
const cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};
//opgave 4
console.log(cb(2,2,mul));

//opgave 5
console.log(cb(4,2,(num1,num2)=>num1/num2))

