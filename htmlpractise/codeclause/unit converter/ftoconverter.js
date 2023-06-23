var input1 = document.getElementById('input1');
var result1 = document.getElementById('result1');
var inputtype1 = document.getElementById('inputtype1');
var resulttype1 = document.getElementById('resulttype1');
var inputtypeValue,resulttypeValue;

input1.addEventListener("keyup" ,myresult );
inputtype1.addEventListener("change",myresult);
resulttype1.addEventListener("change",myresult);

inputtypeValue = inputtype1.value;
resulttypeValue = resulttype1.value;


function myresult(){
    
    inputtypeValue1 = inputtype1.value;
    resulttypeValue1 = resulttype1.value;

    //  celsius to all conversion
    if(inputtypeValue1 === "celsius" && resulttypeValue1 === "celsius"){
        result1.value = input1.value;
    }
    else if(inputtypeValue1 === "celsius" && resulttypeValue1 === "farahneit"){
        result1.value = Number((input1.value)*1.8)+32;
    }
    // farahneit to all conversion
    if(inputtypeValue1 === "farahneit" && resulttypeValue1 === "celsius"){
        result1.value = Number((input1.value)-32)/1.8;
    }
    else if(inputtypeValue1 === "farahenit" && resulttypeValue1 === "farahneit"){
        result1.value = input1.value;
    }
}