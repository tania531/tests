//--------------------------------------------------------
// 5. Array.map
//--------------------------------------------------------

// Fill in the array below to make the output of the map the word "CODING"
var array = ["C","O","D","I","N","G"];
var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var result = ' ';
function arrayMap(key, array){
  
  
  var result = '';
  console.log('array', array); // CODING
  result = array.map(function(e) { return key[e/2]; }).join('');
  GetChar(e);
  return result;
}

function GetChar (event){
            var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
            alert ("The Unicode character code is: " + chCode);
        }

result = arrayMap(key, array);
console.log("result: ", result);