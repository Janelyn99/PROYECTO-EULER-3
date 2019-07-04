//AUTOR: JANY(JANELYN MARBETH VERDUGA ALAVA)
//DESCRIPCION: TAREA SOBRE EL PROYECTO EULER #3
var multiplo=1;
var numero=1;
var primos= []
var final= 600851475143;
var suse= function (numero){
    if (multiplo===final){
        console.log("la suma de los numeros primos es"+multiplo);
        var maximo = primos[primos.length-1];
        console.log("El mayor factor primo del numero"+final+"es"+maximo+"."); 
    }else{
        if (final%numero===0){
             div1=(nu/2);
            if(div1%2===0 || div1%3===0 ){
            return("error")
        }else{
            console.log(numero);
            primos.push(numero);
            multiplo*=numero;
        }
    }
    numero++
    suse(numero)
}  
}
