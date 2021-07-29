
        function display(some) {
            document.getElementById("demo").innerHTML = some;
        }

        function calculte(num1, num2, myCallback) {
            let sum = num1 + num2;
            myCallback(sum);
        }

        calculate(5, 5, myDisplayer);

