
        //makes a function return a promise
        function fun(x) {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(x);
              }, 2000);
            });
          }
          
          async function f1() {
            var x = await fun(10);
            console.log(x); // 10
          }
          
          f1();