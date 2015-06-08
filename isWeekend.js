// 4. isTodayAWeekend()
// Takes no arguments
//--------------------------------------------------------
result = isTodayAWeekend();
console.log(result);
// It will return true if today is Saturday or Sunday, otherwise, false

function isTodayAWeekend(){
  
 var date = new Date();
 var day = date.getDay();

  console.log('day: ', day);
  
  if (day === 0 || day === 6){
    return true;
  }  else {
    return false;
  }
  
}