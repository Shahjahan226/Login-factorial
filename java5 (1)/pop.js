    function factorial  (num) {
        if(num < 0){
            return -1;


        }
        else if(num == 0){
            return 1;
        }
        else {
            return num*(factorial(num - 1));
        }

    }


    console.log(factorial(929));
    function go()
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1*num2;

    Function


    