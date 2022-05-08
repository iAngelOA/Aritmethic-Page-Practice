function myFunction() {
    var x,y,suma,resta,texts,textr;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    if (isNaN(x) || isNaN(y)) {
        text = "Es necesario introducir dos números válidos";
    } else {
        suma = parseFloat(x) + parseFloat(y);
        texts = suma;
        resta = parseFloat(x) - parseFloat(y);
        textr = resta;
        producto = parseFloat(x) * parseFloat(y);
        textm = producto;
        division = parseFloat(x) / parseFloat(y);
        textd = division;
    }
    document.getElementById("sumando").innerHTML = texts;
    document.getElementById("restando").innerHTML = textr;
    document.getElementById("multiplicando").innerHTML = textm;
    document.getElementById("dividiendo").innerHTML = textd;
}