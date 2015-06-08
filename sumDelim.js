
// Takes 2 arguments
//--------------------------------------------------------
result = splitSum("3:4:5:1", ":");
console.log(result); // 13


function splitSum(string, delim){
  console.log("arguments: ", arguments);
  delim = arguments[1];
  string = string.split(""+delim+"");
  var total = 0;
 string = string.map(function(s){
   return s = s*1;
    // total += s;
  });
  
   return string.reduce(function(acc, curr){
    return acc + curr;
  });
  return string;
}
