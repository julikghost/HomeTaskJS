//converting function 
function convertKmToMiles(km) {
    return km * 0.621371;
  };

  function sumInput() {

    let arr= [];//initialize empty array
  
    while (true) {
  
      let value = prompt("Enter numbers one by one. Click Cancel to stop entering", 0);
  
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break; // isFinite converts the argument to a number and checks that it is not NaN/Infinity/Infinity. Number.isFinite(value) checks if the argument is a number, and if so, checks that it is not NaN/Infinity/Infinity.
  
      arr.push(+value); //add item at the end of the array.
    }
  
    let sum = 0; 
    for (let number of arr) {
      sum += number;
    } // выполняет цикл, который работает с последовательностью элементов, взятых из массива
    return sum;
  }
  allert(sumInput());