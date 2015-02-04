//#1
function getSum (a, b) {
  return a + b;
}

//#2
function getMax (a, b, c) {
  var max = a;
  
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  
  return max;
}

//#3
function getMaxElem (arr) {
  var max = arr[0];
  
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}

//#4
function getIndexMinElem (arr) {
  var min = arr[0], index = 0;
  
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  
  return index;
} 

//#5
function toCopyArr (arr) {
  var copyArr = [];  
  
  for (var i = 0; i < arr.length; i++) {
    copyArr[i] = arr[i];    
  }
  
  return copyArr;
}

//#6
// direction: > 0 asc, <= 0 desc
function sortArr (arr, direction) {  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      var temp = arr[j];
      if (direction > 0 && arr[j] > arr[j + 1] ) {
        arr[j] = arr[j +1];
        arr[j + 1] = temp;
      } else if (direction <= 0 && arr[j] < arr[j + 1]) {
        arr[j] = arr[j +1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}