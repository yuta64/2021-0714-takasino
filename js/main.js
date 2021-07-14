const array = [2, 4, 7, 5, 4, 3, 8];
const filterArray = array.filter(function (ele, pos) {
  return array.indexOf(ele)==pos
})

console.log(filterArray);


function leapYear(year) {
  if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let resultYear = 2021;
if (leapYear(resultYear)) {
  console.log(resultYear + "はうるう年");
} else {
  console.log(resultYear + "はうるう年でない");
}






