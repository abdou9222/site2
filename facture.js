function calculer(){
    var a = document.getElementById(p1).Value;
    var b = document.getElementById(q1).Value;
    var c = Number(a)*Number(b);
    r1.Value = c;
    var d = document.getElementById(p2).Value;
    var e = document.getElementById(q2).Value;
    var f = Number(d)*Number(e);
    r2.Value = f;
    var g = document.getElementById(p3).Value;
    var h = document.getElementById(q3).Value;
    var i = Number(g)*Number(h);
    r3.Value = i;
    var j = Number(c)+Number(f)+Number(i)
    r4.Value = j;
}
function reinitialiser(){
    Window.location.reload();
}
