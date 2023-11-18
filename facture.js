fonction calculer(){
    var a2 = document.getElementById("a2").value;
    var a3 = document.getElementById("a3").value;
    var cala = (Nombre(a2)*Nombre(a3))
    a4.value = cala;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var calb = (Nombre(b2)*Nombre(b3))
    b4.value = calb;
    var c2 = document.getElementById("c2").value;
    var c3 = document.getElementById("c3").value;
    var calc = (Nombre(c2)*Nombre(c3))
    c4.value = calc;
    var c = Nombre(cala)+Nombre(calb)+Nombre(calc)
    d1.valeur = c;
}
fonction réinitialiser(){
    window.location.reload();
}
