// Code goes here

var result;

//--------------------------------------------------------
// 1. argsSum()
// Takes N arguments, and should work on any number of arguments
//--------------------------------------------------------

console.log(result); // 18
// result = argsSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1);
// console.log(result); // 14

function argsSum(input){
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
        console.log(arguments[i]);
        console.log('total', total);
        
    }
    
  // input = '' + input;
  // console.log('input', input);
  // input.split(",");
  // var total = 0;
  // input.forEach(function(i){
  //   total += i;
  // });
  // input.reduce(function(acc,curr){
  //   return acc + curr;
  // });
  console.log('input', input);
}


console.log(argsSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1));