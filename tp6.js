function calcul_moyenne(){
    var n1= prompt("donner la première note:");
    var n2= prompt("donner la deuxième note");
    var n3= prompt("donner le derniere note:");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write("voici la somme: "+somme+ "<br>");
    var moyenne= somme/3;

    document.write("voici la moyenne: "+moyenne+"<br>");

    if (moyenne<10)
    document.write("vous etes redoublant");
    else
    document.write("vous etes admis");

}

function test_age(){
    var a1= prompt("donner votre age");

    if(a1<18)
    document.write("vous etes mineur");
    else
    document.write("vous etes majeur");
}

function simple_affichage(){
    let name = prompt ("donner votre prénom")
    let familyname = prompt ("donner votre nom")

    document.write('<div style="margin:Auto; width:300px; border:2px solid blue; ">')
    document.write('bonjour+ abdou + coulibaly');
    document.write('</div>');

}
