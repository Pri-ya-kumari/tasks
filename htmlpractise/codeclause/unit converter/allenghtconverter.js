var input = document.getElementById('input');
var result = document.getElementById('result');
var inputtype = document.getElementById('inputtype');
var resulttype = document.getElementById('resulttype');
var inputtypeValue,resulttypeValue;

input.addEventListener("keyup" ,myresult );
inputtype.addEventListener("change",myresult);
resulttype.addEventListener("change",myresult);

inputtypeValue = inputtype.value;
resulttypeValue = resulttype.value;

function myresult(){
   
    inputtypeValue = inputtype.value;
    resulttypeValue = resulttype.value;

    // meter to all conversion
    if(inputtypeValue === "meter" && resulttypeValue === "meter"){
        result.value = input.value;
    }
    else if(inputtypeValue === "meter" && resulttypeValue === "kilometer"){
        result.value = Number(input.value)*0.001;
    }
    else if(inputtypeValue === "meter" && resulttypeValue === "centimeter"){
        result.value = Number(input.value)*100;
    }
    else if(inputtypeValue === "meter" && resulttypeValue === "milli meter"){
        result.value = Number(input.value)*1000;
    }
    else if(inputtypeValue === "meter" && resulttypeValue === "deci meter"){
        result.value = Number(input.value)*10;
    }
    else if(inputtypeValue === "meter" && resulttypeValue === "deca meter"){
        result.value = Number(input.value)*0.1;
    }
    else if(inputtypeValue === "meter" && resulttypeValue === "hecto meter"){
        result.value = Number(input.value)*0.001;
    }
    else if(inputtypeValue === "meter" && resulttypeValue === "inch"){
        result.value = Number(input.value)*39.3701;
    }
    else if(inputtypeValue === "meter" && resulttypeValue === "foot"){
        result.value = Number(input.value)*3.28084;
    }
    // kilometer to all conversion

    if(inputtypeValue === "kilometer" && resulttypeValue === "meter"){
        result.value = Number(input.value)*1000;
    }
    else if(inputtypeValue === "kilometer" && resulttypeValue === "kilometer"){
        result.value = input.value;
    }
    else if(inputtypeValue === "kilometer" && resulttypeValue === "centimeter"){
        result.value = Number(input.value)*10000;
    }
    else if(inputtypeValue === "kilometer" && resulttypeValue === "millimeter"){
        result.value = Number(input.value)*1000000;
    }
    else if(inputtypeValue === "kilometer" && resulttypeValue === "deci meter"){
        result.value = Number(input.value)*10000;
    }
    else if(inputtypeValue === "kilometer" && resulttypeValue === "deca meter"){
        result.value = Number(input.value)*100;
    }
    else if(inputtypeValue === "kilometer" && resulttypeValue === "hecto meter"){
        result.value = Number(input.value)*10;
    }
    else if(inputtypeValue === "kilometer" && resulttypeValue === "inch"){
        result.value = Number(input.value)*39370.1;
    }
    else if(inputtypeValue === "kilometer" && resulttypeValue === "foot"){
        result.value = Number(input.value)*3280.84;
    }
    // centimeter to all conversion

    if(inputtypeValue === "centimeter" && resulttypeValue === "kilometer"){
        result.value = Number(input.value)*0.0001;
    }
    else if(inputtypeValue === "centimeter" && resulttypeValue === "centimeter"){
        result.value = Number(input.value)*10000;
    }
    else if(inputtypeValue === "centimeter" && resulttypeValue === "milli meter"){
        result.value = Number(input.value)*10;
    }
    else if(inputtypeValue === "centimeter" && resulttypeValue === "deci meter"){
        result.value = Number(input.value)*0.1;
    }
    else if(inputtypeValue === "centimeter" && resulttypeValue === "deca meter"){
        result.value = Number(input.value)*0.001;
    }
    else if(inputtypeValue === "centimeter" && resulttypeValue === "hecto meter"){
        result.value = Number(input.value)*0.0001;
    }
    else if(inputtypeValue === "centimeter" && resulttypeValue === "inch"){
        result.value = Number(input.value)*0.393701;
    }
    else if(inputtypeValue === "centimeter" && resulttypeValue === "foot"){
        result.value = Number(input.value)*0.0328084;
    }

    // all mili to conversion
    if(inputtypeValue === "milli meter" && resulttypeValue === "meter"){
        result.value = Number(input.value)*0.001;
    }
    else if(inputtypeValue === "milli meter" && resulttypeValue === "killometer"){
        result.value = Number(input.value)*0.000001;
    }
    else if(inputtypeValue === "milli meter" && resulttypeValue === "centiometer"){
        result.value = Number(input.value)*0.1;
    }
    else if(inputtypeValue === "milli meter" && resulttypeValue === "milliometer"){
        result.value = input.value;
    }
    else if(inputtypeValue === "milli meter" && resulttypeValue === "deci meter"){
        result.value = Number(input.value)*0.01;
    }
    else if(inputtypeValue === "milli meter" && resulttypeValue === "deca meter"){
        result.value = Number(input.value)*0.0001;
    }
    else if(inputtypeValue === "milli meter" && resulttypeValue === "hecto meter"){
        result.value = Number(input.value)*0.00001;
    }
    else if(inputtypeValue === "milli meter" && resulttypeValue === "inch"){
        result.value = Number(input.value)*0.0393701;
    }
    else if(inputtypeValue === "milli meter" && resulttypeValue === "foot"){
        result.value = Number(input.value)*0.00328084;
    }

    // all deci to conversion
    if(inputtypeValue === "deci meter" && resulttypeValue === "meter"){
        result.value = Number(input.value)*0.1;
    }
    else if(inputtypeValue === "deci meter" && resulttypeValue === "killometer"){
        result.value = Number(input.value)*0.0001;
    }
    else if(inputtypeValue === "deci meter" && resulttypeValue === "centiometer"){
        result.value = Number(input.value)*10;
    }
    else if(inputtypeValue === "deci meter" && resulttypeValue === "milliometer"){
        result.value = Number(input.value)*100;
    }
    else if(inputtypeValue === "deci meter" && resulttypeValue === "deci meter"){
        result.value = input.value;
    }
    else if(inputtypeValue === "deci meter" && resulttypeValue === "deca meter"){
        result.value = Number(input.value)*0.01;
    }
    else if(inputtypeValue === "deci meter" && resulttypeValue === "hecto meter"){
        result.value = Number(input.value)*0.001;
    }
    else if(inputtypeValue === "deci meter" && resulttypeValue === "inch"){
        result.value = Number(input.value)*3.93701;
    }
    else if(inputtypeValue === "deci meter" && resulttypeValue === "foot"){
        result.value = Number(input.value)*0.328084;
    }

    // all deca to conversion
    if(inputtypeValue === "deca meter" && resulttypeValue === "meter"){
        result.value = Number(input.value)*10;
    }
    else if(inputtypeValue === "deca meter" && resulttypeValue === "killometer"){
        result.value = Number(input.value)*0.01;
    }
    else if(inputtypeValue === "deca meter" && resulttypeValue === "centiometer"){
        result.value = Number(input.value)*1000;
    }
    else if(inputtypeValue === "deca meter" && resulttypeValue === "milliometer"){
        result.value = Number(input.value)*10000;
    }
    else if(inputtypeValue === "deca meter" && resulttypeValue === "deci meter"){
        result.value = Number(input.value)*100;
    }
    else if(inputtypeValue === "deca meter" && resulttypeValue === "deca meter"){
        result.value = input.value;
    }
    else if(inputtypeValue === "deca meter" && resulttypeValue === "hecto meter"){
        result.value = Number(input.value)*0.1;
    }
    else if(inputtypeValue === "deca meter" && resulttypeValue === "inch"){
        result.value = Number(input.value)*393.701;
    }
    else if(inputtypeValue === "deca meter" && resulttypeValue === "foot"){
        result.value = Number(input.value)*32.8084;
    }

    // all hecto to conversion
    if(inputtypeValue === "hecto meter" && resulttypeValue === "meter"){
        result.value = Number(input.value)*100;
    }
    else if(inputtypeValue === "hecto meter" && resulttypeValue === "killometer"){
        result.value = Number(input.value)*0.1;
    }
    else if(inputtypeValue === "hecto meter" && resulttypeValue === "centiometer"){
        result.value = Number(input.value)*10000;
    }
    else if(inputtypeValue === "hecto meter" && resulttypeValue === "milliometer"){
        result.value = Number(input.value)*100000;
    }
    else if(inputtypeValue === "hecto meter" && resulttypeValue === "deci meter"){
        result.value = Number(input.value)*1000;
    }
    else if(inputtypeValue === "hecto meter" && resulttypeValue === "deca meter"){
        result.value = Number(input.value)*10;
    }
    else if(inputtypeValue === "hecto meter" && resulttypeValue === "hecto meter"){
        result.value = input.value;
    }
    else if(inputtypeValue === "hecto meter" && resulttypeValue === "inch"){
        result.value = Number(input.value)*3937.01;
    }
    else if(inputtypeValue === "hecto meter" && resulttypeValue === "foot"){
        result.value = Number(input.value)*328.084;
    }

    // all inch to conversion
    if(inputtypeValue === "inch" && resulttypeValue === "meter"){
        result.value = Number(input.value)*0.0254;
    }
    else if(inputtypeValue === "inch" && resulttypeValue === "killometer"){
        result.value = Number(input.value)*25.98;
    }
    else if(inputtypeValue === "inch" && resulttypeValue === "centiometer"){
        result.value = Number(input.value)*2.54;
    }
    else if(inputtypeValue === "inch" && resulttypeValue === "milliometer"){
        result.value = Number(input.value)*25.4;
    }
    else if(inputtypeValue === "inch" && resulttypeValue === "deci meter"){
        result.value = Number(input.value)*0.254;
    }
    else if(inputtypeValue === "inch" && resulttypeValue === "deca meter"){
        result.value = Number(input.value)*0.00254;
    }
    else if(inputtypeValue === "inch" && resulttypeValue === "hecto meter"){
        result.value = Number(input.value)*0.000254;
    }
    else if(inputtypeValue === "inch" && resulttypeValue === "inch"){
        result.value = input.value;
    }
    else if(inputtypeValue === "inch" && resulttypeValue === "foot"){
        result.value = Number(input.value)*0.0833333;
    }


    // all foot to conversion
    if(inputtypeValue === "foot" && resulttypeValue === "meter"){
        result.value = Number(input.value)*0.3048;
    }
    else if(inputtypeValue === "foot" && resulttypeValue === "killometer"){
        result.value = Number(input.value)*0.0003048;
    }
    else if(inputtypeValue === "foot" && resulttypeValue === "centiometer"){
        result.value = Number(input.value)*30.48;
    }
    else if(inputtypeValue === "foot" && resulttypeValue === "milliometer"){
        result.value = Number(input.value)*304.8;
    }
    else if(inputtypeValue === "foot" && resulttypeValue === "deci meter"){
        result.value = Number(input.value)*3.048;
    }
    else if(inputtypeValue === "foot" && resulttypeValue === "deca meter"){
        result.value = Number(input.value)*0.03048;
    }
    else if(inputtypeValue === "foot" && resulttypeValue === "hecto meter"){
        result.value = Number(input.value)*0.003048;
    }
    else if(inputtypeValue === "foot" && resulttypeValue === "inch"){
        result.value = Number(input.value)*12;
    }
    else if(inputtypeValue === "foot" && resulttypeValue === "foot"){
        result.value = input.value;
    }
}