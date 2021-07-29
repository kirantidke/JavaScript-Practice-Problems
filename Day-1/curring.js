
        /*functoin without curring
        function volume(length, width, height) {
      return length * width * height;
   }
   document.write((volume(11,2,3)));
        */

/*        //curring
        function volume(length) {
            return function (width) {
                return function (height) {
                    return height * width * length;
                }
            }
        }
       console.log(volume(11)(2)(3));
    */

       function multiply(a, b, c) {

        return a * b * c;
    }
    
    function multiplyCurring(a) {
    
        return function (b) {
            return function (c)  {
                return a * b * c
            }
        }
    }
    
    let result = multiply(1, 2, 3);
    console.log(result);
    
    let firstVar = multiplyCurring(1);
    let secondVar = firstVar(2);

    let secondResult = secondVar(3);
    console.log(secondResult);
    
    let thirdResult = multiplyCurring(1)(2)(3);
    console.log(thirdResult);