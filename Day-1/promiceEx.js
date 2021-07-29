/*
        let myPromise = new Promise(function (myResolve, myReject) {
            let x = 0;

            if (x == 0) {
                myResolve("OK");
            } else {
                myReject("Error");
            }
        });
        //takes two args for success and failure
        myPromise.then(
            function (value) { display(value); },
            function (error) { display(error); }
        );
   */

/*
        let myFirstPromise = new Promise((resolve, reject) => {
   
            setTimeout( function() {
              resolve("Success!")  
            }, 250)
          })
          
          myFirstPromise.then((successMessage) => {
            console.log("Yay! " + successMessage)
          });
          */
          const myPromise = new Promise((resolve, reject) => {  
            let condition;  
            
            if(condition is met) {    
                resolve("Promise is resolved successfully.");  
            } else {    
                reject("Promise is rejected");  
            }
        });