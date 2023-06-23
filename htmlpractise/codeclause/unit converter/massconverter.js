var input2 = document.getElementById('input2');
var result2 = document.getElementById('result2');
var inputtype2 = document.getElementById('inputtype2');
var resulttype2 = document.getElementById('resulttype2');
var inputtypeValue2,resulttypeValue2;

input2.addEventListener("keyup" ,myresult );
inputtype2.addEventListener("change",myresult);
resulttype2.addEventListener("change",myresult);

inputtypeValue2 = inputtype2.value;
resulttypeValue2 = resulttype2.value;

function myresult(){
    
     inputtypeValue2 = inputtype2.value;
    resulttypeValue2 = resulttype2.value;

    // gram to all conversion
    if(inputtypeValue2 === "gram" && resulttypeValue2 === "gram"){
        result2.value = input2.value;
    }
    else if(inputtypeValue2 === "gram" && resulttypeValue2 === "milligram"){
        result2.value = Number(input2.value)*1000;
    }
    else if(inputtypeValue2 === "gram" && resulttypeValue2 === "centigram"){
        result2.value = Number(input2.value)*100;
    }
    else if(inputtypeValue2 === "gram" && resulttypeValue2 === "killogram"){
        result2.value = Number(input2.value)*0.001;
    }

    // milligram to all conversion
    if(inputtypeValue2 === "milligram" && resulttypeValue2 === "gram"){
        result2.value = Number(input2.value)*0.001;
    }
    else if(inputtypeValue2 === "milligram" && resulttypeValue2 === "milligram"){
        result2.value = input2.value;
    }
    else if(inputtypeValue2 === "milligram" && resulttypeValue2 === "centigram"){
        result2.value = Number(input2.value)*0.01;
    }
    else if(inputtypeValue2 === "milligram" && resulttypeValue2 === "killogram"){
        result2.value = Number(input2.value)*0.000001;
    }

    // killogram to all conversion
    if(inputtypeValue2 === "killogram" && resulttypeValue2 === "gram"){
        result2.value = Number(input2.value)*1000;
    }
    else if(inputtypeValue2 === "killogram" && resulttypeValue2 === "milligram"){
        result2.value = Number(input2.value)*1000000;
    }
    else if(inputtypeValue2 === "killogram" && resulttypeValue2 === "centigram"){
        result2.value = Number(input.value)*100000;
    }
    else if(inputtypeValue2 === "killogram" && resulttypeValue2 === "killogram"){
        result2.value = input2.value;
    }

    // centigram to all conversion
    if(inputtypeValue2 === "centigram" && resulttypeValue2 === "gram"){
        result2.value = Number(input2.value)*0.01;
    }
    else if(inputtypeValue2 === "centigram" && resulttypeValue2 === "milligram"){
        result2.value = Number(input2.value)*10;
    }
    else if(inputtypeValue2 === "centigram" && resulttypeValue2 === "centigram"){
        result2.value = input2.value;
    }
    else if(inputtypeValue2 === "centigram" && resulttypeValue2 === "killogram"){
        result2.value = Number(input2.value)*0.00001;
    }
}
