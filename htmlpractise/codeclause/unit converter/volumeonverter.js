var input3 = document.getElementById('input3');
var result3 = document.getElementById('result3');
var inputtype3 = document.getElementById('inputtype3');
var resulttype3 = document.getElementById('resulttype3');
var inputtypeValue3,resulttypeValue3;

input3.addEventListener("keyup" ,myresult );
inputtype3.addEventListener("change",myresult);
resulttype3.addEventListener("change",myresult);

inputtypeValue3 = inputtype3.value;
resulttypeValue3 = resulttype3.value;

function myresult(){
    
    inputtypeValue3 = inputtype3.value;
    resulttypeValue3 = resulttype3.value;

    // litter to all conversion
    if(inputtypeValue3 === "litter" && resulttypeValue3 === "litter"){
        result3.value = input3.value;
    }
    else if(inputtypeValue3 === "litter" && resulttypeValue3 === "millil"){
        result3.value = Number(input3.value)*1000;
    }
    else if(inputtypeValue3 === "litter" && resulttypeValue3 === "centil"){
        result3.value = Number(input3.value)*100;
    }
    else if(inputtypeValue3 === "litter" && resulttypeValue3 === "killol"){
        result3.value = Number(input3.value)*0.001;
    }

    // millilitter to all conversion
    if(inputtypeValue3 === "millil" && resulttypeValue3 === "litter"){
        result3.value = Number(input3.value)*0.001;
    }
    else if(inputtypeValue3 === "millil" && resulttypeValue3 === "millil"){
        result3.value = input3.value;
    }
    else if(inputtypeValue3 === "millil" && resulttypeValue3 === "centil"){
        result3.value = Number(input3.value)*0.1;
    }
    else if(inputtypeValue3 === "millil" && resulttypeValue3 === "killol"){
        result3.value = Number(input3.value)*1000000;
    }

    // centilitter to all conversion
    if(inputtypeValue3 === "centil" && resulttypeValue3 === "litter"){
        result3.value = Number(input3.value)*0.01;
    }
    else if(inputtypeValue3 === "centil" && resulttypeValue3 === "millil"){
        result3.value = Number(input3.value)*10;
    }
    else if(inputtypeValue3 === "centil" && resulttypeValue3 === "centil"){
        result3.value = input3.value;
    }
    else if(inputtypeValue3 === "centil" && resulttypeValue3 === "killol"){
        result3.value = Number(input3.value)*0.00001;
    }

    // killolitter to all conversion
    if(inputtypeValue3 === "killol" && resulttypeValue3 === "litter"){
        result3.value = Number(input3.value)*1000;
    }
    else if(inputtypeValue3 === "killol" && resulttypeValue3 === "millil"){
        result3.value = Number(input3.value)*100000;
    }
    else if(inputtypeValue3 === "killol" && resulttypeValue3 === "centil"){
        result3.value = Number(input3.value)*100000;
    }
    else if(inputtypeValue3 === "killol" && resulttypeValue3 === "killol"){
        result3.value = input3.value;
    }
}