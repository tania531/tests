//--------------------------------------------------------
// 5. Array.map
//--------------------------------------------------------

// Fill in the array below to make the output of the map the word "CODING"
var array = ["C","O","D","I","N","G"];
var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var result = ' ';
function arrayMap(key, array){
  var result = '';
  result = array.map(function(e) { return key[e/2]; }).join('');
  console.log(result); // CODING
  return result;
}

result = arrayMap(key);
console.log("result: ", result);