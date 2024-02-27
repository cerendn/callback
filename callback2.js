function getPositiveNums(element) {
    if (element >= 0 && !(element % 2)) {
      return true;
    }
  }

  function getNegativeNums(element) {
    if (element < 0 && element % 2) {
      return true;
    }
  }
  
  const nums = [0, 1, 2, 5, 4, 5, -6, -7, -8, 9, -10];

  function getNums(arr,callback) { //high order function
    const newArr = [];
    arr.forEach((element) => {
        if(callback(element)) {
            newArr.push(element);
        }
    });  
    return newArr; 
    }

    
