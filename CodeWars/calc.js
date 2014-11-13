var calc = function (expression) {
  var arr = expression.split("");
  var floatArr = expression.match(/\-?\d+\.\d+/g);
  for (var i = 0; i < floatArr.length; ++i) {
    arr.splice(expression.indexOf(floatArr[i]), floatArr[i].length, floatArr[i]);
  }
  
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === " ") {
      arr.splice(i, 1);
    }
  }
  
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === "-" && arr[i + 1] === "-") {
      arr.splice(i, 2, "+");
    }
  }
  
  while (arr.lastIndexOf("(") !== -1) {
    calc(arr.slice(arr.lastIndexOf("(") + 1, arr.indexOf(")", arr.lastIndexOf("("))));
    arr.splice(arr.lastIndexOf("("), 1);
    arr.splice(arr.indexOf(")", arr.lastIndexOf("(")), 1);
  }
  
  
  
};