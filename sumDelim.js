


// Takes 2 arguments
//--------------------------------------------------------
result = splitSum("3:4:5:1", ":");
console.log(result); // 13
result = splitSum("-1$-5$5$-4", "$");
console.log(result); // -5

function splitSum(string, delim){
  console.log("arguments: ", arguments);
  delim = arguments[1];
  string = string.split(""+delim+"");
  var total = 0;
  string.forEach(function(s){
    s = s*1;
    console.log("s: ", s);
    total += s;
  });
  console.log("string: ", string);
  console.log("delim: ", delim);
  // string.reduce(function(acc, curr){
  //   return acc + curr;
  // });
  return total;
}
