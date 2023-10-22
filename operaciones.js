
function factorial(n){
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}


function pasitos(n){
    var texto = n + " = ";
    var resultado = 1;
    var texto = n + "! = ";
    for (var i = n; i > 1; i--) {
        resultado *= i;
        texto += i + " × ";
    }
    texto += "1 = " + resultado;
    return texto;
}


function permutacionNormal(){
    // n!/(n-k)!
    var n = parseInt(document.getElementById("n").value);
    var k = parseInt(document.getElementById("k").value);
    var area_result = document.getElementById("area_resultado");
    var explicacion = "";
    var numerador;
    var denominador;
    var resultado;
    var proceso_n;
    var proceso_n_k;
    if(!n || !k || isNaN(n) || isNaN(k) || !Number.isInteger(parseFloat(n)) || !Number.isInteger(parseFloat(k))){
        alert("Por favor, intente de nuevo con datos validos");
    }
    else{
        if(n < 0 || k < 0 || ((n-k) < 0)){
            alert("Asegurese que los numeros sean mayores a 0 y que n sea mayor a k")
        }
        else{
            numerador = factorial(n);
            denominador = factorial((n-k));
            resultado = numerador/denominador;
            proceso_n = pasitos(n);
            proceso_n_k = pasitos((n-k));
            explicacion = "Formula a utilizar: \nn! / (n-k)! \n \nReemplazando datos:";
            explicacion = explicacion + "\n" + n + "! / (" + n + " - " + k + ")! = " + resultado + "\n" + numerador + " / " + " " + denominador + " = " + resultado;
            explicacion = explicacion + "\n\nDebido a que: \n" + proceso_n + "\n" + proceso_n_k;
            area_result.value = explicacion;
            console.log(explicacion);
        }
    }
}

function combinatorio(){
    // n!/(n-k)*k!
    var n = document.getElementById("n").value;
    var k = document.getElementById("k").value;
    var area_result = document.getElementById("area_resultado");
    var explicacion = "";
    var numerador;
    var denominador;
    var denominador2;
    var resultado;
    var proceso_n;
    var proceso_n_k;
    var proceso_k;
    if(!n || !k || isNaN(n) || isNaN(k) || !Number.isInteger(parseFloat(n)) || !Number.isInteger(parseFloat(k))){
        area_result.value = "";
        alert("Por favor, intente de nuevo con datos validos");
    }
    else{
        if (n < 0 || k < 0 || ((n-k) < 0)){
            alert("Asegurese que los numeros sean mayores a 0 y que n sea mayor a k")
        }
        else{
            numerador = factorial(n);
            denominador = factorial((n-k));
            denominador2 = factorial(k);
            resultado = numerador/(denominador*denominador2);
            proceso_n = pasitos(n);
            proceso_n_k = pasitos((n-k));
            proceso_k = pasitos(k);
            explicacion = "Formula a utilizar: \nn! / ((n-k)! * k!) \n \nReemplazando datos:";
            explicacion = explicacion + "\n" + n + "! / (" + n + " - " + k + ")! * " + k + "!  = " + resultado + "\n" + numerador + " / " + " " + denominador + " * " + denominador2 + " = " + resultado;
            explicacion = explicacion + "\n\nDebido a que: \n" + proceso_n + "\n" + proceso_n_k + "\n" + proceso_k;
            area_result.value = explicacion;
            console.log(explicacion);
        }
    }
}

function permutacionRepetida(){

    var elementos = document.getElementById('elementos').value.split(',').map(item => parseFloat(item.trim()));

    if (elementos.length < 2 || elementos.length > 4) {
        alert('La cantidad de elementos debe estar entre 2 y 4.');
        return;
    }else if(elementos.some(isNaN)){
        alert('Se ha introducido una cantidad de forma errada')
        return;
    }

    var n = 0;

    for(let i = 0; i < elementos.length; i++){
        n += elementos[i];}
    
    var area_result = document.getElementById("area_resultado");

    var fact_n = factorial(n);
    var a = factorial(elementos[0]);
    var b = factorial(elementos[1]);
    var c = factorial(elementos[2]);
    var d = factorial(elementos[3]);

    if (elementos.length == 2){

        var resultado = fact_n / (a*b);
        
        explicacion = "Formula a utilizar: \nn! / a! * b!";
        explicacion = explicacion + "\n \nReemplazando datos: \n" + n + "! = " + fact_n + "\n";
        explicacion = explicacion + elementos[0] + "! = " + a + "\n" + elementos[1] + "! = " + b + "\n \nFinalizando asi: \n";
        explicacion = explicacion + fact_n + "/ (" + a + "*" + b + ") = " + resultado;

    }else if(elementos.length == 3){

        var resultado = fact_n / (a*b*c);

        explicacion = "Formula a utilizar: \nn! / a! * b! * c!";
        explicacion = explicacion + "\n \nReemplazando datos: \n" + n + "! = " + fact_n + "\n";
        explicacion = explicacion + elementos[0] + "! = " + a + "\n" + elementos[1] + "! = " + b + "\n" + elementos[2] + "! = " + c +"\n \nFinalizando asi: \n";
        explicacion = explicacion + fact_n + "/ (" + a + "*" + b + "*" + c + ") = " + resultado;


    }else if(elementos.length == 4){

        var resultado = fact_n / (a*b*c*d);

        explicacion = "Formula a utilizar: \nn! / a! * b! * c! * d!";
        explicacion = explicacion + "\n \nReemplazando datos: \n" + n + "! = " + fact_n + "\n";
        explicacion = explicacion + elementos[0] + "! = " + a + "\n" + elementos[1] + "! = " + b + "\n" + elementos[2] + "! = " + c + "\n" + elementos[3] + "! = " + d +"\n \nFinalizando asi: \n";
        explicacion = explicacion + fact_n + "/ (" + a + "*" + b + "*" + c + "*" + d + ") = " + resultado;

    }

    area_result.value = explicacion;
}

function permutacionCircular(){

    var n = document.getElementById("n").value;

    if(isNaN(n) || !Number.isInteger(parseFloat(n))){
        alert("Por favor, intente de nuevo con datos validos");
    }
    else{
        if(n < 0 ){
            alert("'n' no puede ser menor a 0")
        }else{
            var n_circular = factorial(n-1);
            var area_result = document.getElementById("area_resultado");
            explicacion = "Formula a utilizar: (n-1)! \n \nReemplazando datos:";
            explicacion = explicacion + "\n(" + n + "-1)! \n \nFinalizando asi: \n";
            explicacion = explicacion + (n-1) + "! = " + n_circular;  

            area_result.value = explicacion;
            console.log(explicacion);

        }

    }
}    