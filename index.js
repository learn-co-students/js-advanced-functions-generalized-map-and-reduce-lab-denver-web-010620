// Add your functions here
const map = function(arr, func) {
   let result = [];
   for(let i = 0; i < arr.length; i++) {
      result.push(func(arr[i]));    
   }
   return result;
}

const reduce = function(arr, func, start=0) {
   let result = start;
   for(let i = 0; i < arr.length; i++) {
      result = func(arr[i], result);
      console.log(result);    
   }
   return result;
}