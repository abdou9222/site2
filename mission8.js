function fo0(){
    let test = prompt("merci d'inscrire une chaine de caractères?");
    document.body.innerHTML = test;
}
function fo1(){
    let a = 42;
    let b = 7569;
    let result = a+ b;
    alert(result);
}
function fon2(){
    let note_maths = 11;
    let note_français = 9;
    let note_hg = 16;
    let moyenne = (note_maths + note_français + note_hg)/3;
    alert('la moyenne est de ' +moyenne);
}
function fon3(){
    let budget = 1553.89;
    let achats = 1554.76;
    if(budget >= achats){
        alert('Le budget('+budget+'€) permet de payer tous les achats'+achats +'€)');
    }
    else {
        alert('Le budget('+budget+'€) ne permet pas de payer tous les achats'+achats +'€)');
    }
}
function fon4(){
    let ht = prompt("Montat HT?");
    let ttc = ht * 1.2;
    document.body.innerText = ttc;
}
function fon5(){
    let ht = prompt("Montant HT?");
    let taux_tva = prompt("Taux de TVA?");
    let taux_tva_calcul = (taux_tva /100)+1;
    let ttc = ht * taux_tva_calcul;
    document.body.innerText = ttc;
}
function fon6(){
    let ht = prompt("Montaant HT?");
    let taux_tva = prompt("Taux de TVA?");
    let taux_tva_calcul = (taux_tva /100)+1;
    if(ttc > 100){
        document.body.innerHTML = '<h1 style="color: red">'+ttc+'</h1>';
    }
    else {
        document.body.innerHTML = '<h1 style="color: green">'+ttc+'</h1>';
    }
}

function fon7(){
    document.getElementById('cocktail').innerText = 'Long Island Iced Tea';
}

function fon8(){
    for(let i = 10;i <= 1000;i+=10) {
        console.log(i);
     }
}

function fon9(){
    let age = prompt("Quel est votre âge ?");
    if(age >= 18) {
    alert('Vous êtes majeur !');
    } else {
    alert('Vous êtes mineur !');
}
}

function fon10(){
    let cp = 77000;
    while(cp <= 77999) {
   console.log(cp);
   cp++;
}
}


function fon11(){
let n = 5;
let html = '';
for(let i = 1;i <= 10;i++) {
   html = html + n + ' x ' + i + ' = ' + (n * i) + ' <br />';
}
document.body.innerHTML = html;
}



function fon12(){
    let html = '';
for(let i = 1;i <= 5;i++) {
   for(let k = 1;k <= i;k++) {
      html = html + i;
   }
   html = html + '<br />';
}
document.body.innerHTML = html;
}


function fon13(){
    let html = '';
let k = 0;

while(k <= 20) {
   html = html + k + '<br />';
   k = k + 2;
}
document.body.innerHTML = html;
}


function fon14(){
    let tableau = '<table>';
let lignes = 5;
let colonnes = 3;

for(let i = 1;i <= lignes;i++) {
   tableau = tableau + '<tr>';
   for(let k = 1;k <= colonnes;k++) {
      tableau = tableau + '<td>yolo</td>';
   }
   tableau = tableau + '</tr>';
}
tableau = tableau + '</table>';
document.body.innerHTML = tableau;
}

function fon15(){
    let lignes = prompt("Nombre de lignes ?");
let colonnes = prompt("Nombre de colonnes ?");
let tableau = '<table>';

for(let i = 1;i <= lignes;i++) {
   tableau = tableau + '<tr>';
   for(let k = 1;k <= colonnes;k++) {
      tableau = tableau + '<td>yolo</td>';
   }
   tableau = tableau + '</tr>';
}
tableau = tableau + '</table>';
document.body.innerHTML = tableau;
}

function fon16(){
    let html = '<ul>';
let nalea = 10;
for(let i = 0;i < nalea;i++) {
   html = html + '<li>' + Math.floor(Math.random() * 100) + '</li>';
}
html = html + '</ul>';
document.body.innerHTML = html;
}

function fon17(){
    let html = '<ul>';
let nalea = 10;
for(let i = 0;i < nalea;i++) {
   let tmp = Math.floor(Math.random() * 11);
   if(tmp == 10) {
      console.log('Le nombre 10 fait parti du tirage.');
   }
   html = html + '<li>' + tmp + '</li>';
}
html = html + '</ul>';
document.body.innerHTML = html;
}

function fon18{
    let html = '<ul>';
let nalea = 10;
let nalea10 = 0;
for(let i = 0;i < nalea;i++) {
   let tmp = Math.floor(Math.random() * 11);
   if(tmp == 10) {
      nalea10++;
   }
   html = html + '<li>' + tmp + '</li>';
}
html = html + '</ul>';
html = html + '<p>Il y a eu ' + nalea10 + ' tirages de 10.</p>'
document.body.innerHTML = html;
}

function fon19{
    let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let color = "rgb(" + r + ", " + g + ", " + b + ")";
document.body.style.background = color
}

function fon20{
    let html = '';
let nalea = 12;
for(let i = 0;i < nalea;i++) {
   let tmp = Math.floor(Math.random() * 1024);
   html = html + '<img src="https://picsum.photos/id/' + tmp + '/350/350" />';
}
document.body.innerHTML = html;
}