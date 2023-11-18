fonction set_str()
{
  expérience = document.getElementById("experiment-00");
  text_chain = prompt("Entrez une chaîne : ");
  // console.log(experiment.innerHTML);
  // expérience.innerHTML = text_chain;

  expérience.src = "à propos de : blanc" ;

// Définit le nouveau HTML de l'iframe
  experience.contentWindow.document.open();
  experience.contentWindow.document.write(text_chain);
  experience.contentWindow.document.close();


  // expérience.innerText = text_chain;

}

fonction somme_valeurs()
{
  une = 42 ;
  b = 7609 ;
  résultat = a + b ;
  alert("le résultat est : " + résultat);
}

fonction calc_moyenne()
{
  note_math = 11 ;
  note_hg = 9 ;
  note_francais= 16;
  moyenne = (note_francais + note_math + note_hg) /3;
  alert("La moyenne est de " + moyenne);
}

fonction check_sold()
{
  budget = 2333,334 ;
  achats = 2333,334 ;
  si(achats <= budget)
  {
    alert("Vous pouvez tout acheter avec le budget que vous avez, il vous laissera avec " + (budget - achats) + " €")
  }
  si(achats > budget)
  {
    alert("On ne peut pas tout acheter avec le budget qu'on a, il faut " + math.abs(budget - achats) + " € de plus")
  }
}


fonction get_ttc()
{

  prix = prompt("Donnez-moi un prix : ");
  alert("Votre prix ttc est à 20% tva soit " + prix * 0,80);
}

fonction get_ttc_v2()
{
  expérience = document.getElementById("experiment-00");
  expérience.src = "à propos de : blanc" ;
  prix = prompt("Donnez-moi un prix : ");
  tva = prompt("Donnez-moi un % tva : ");
  alert("Votre prix ttc est de " + Math.ceil(prix * ( 1 - (tva/100))));
}

fonction get_ttc_v3()
{
  expérience = document.getElementById("experiment-00");
  expérience.src = "à propos de : blanc" ;
  experience.contentWindow.document.open();
  prix = prompt("Donnez-moi un prix : ");
  tva = prompt("Donnez-moi un % tva : ");
  ttc = Math.ceil(prix * ( 1 - (tva/100)));
  si( ttc > 100)
  {
    experience.contentWindow.document.body.style.color = "rouge";
  }
  autre
  {
    experience.contentWindow.document.body.style.color = "vert";
  }
  experience.contentWindow.document.write(ttc);
  experience.contentWindow.document.close();
}


fonction send_to_f7()
{
  expérience = document.getElementById("experiment-00");
  expérience.src = "à propos de : blanc" ;
  experience.setAttribute("src","other/f7.html");

}


fonction times_10()
{
  pour(i = 0; i <= 1000; i+=10)
  {
    expérience = document.getElementById("experiment-00");
    expérience.src = "à propos de : blanc" ;
    console.log(`${i} est un multiplicateur de 10`);

  }
}


fonction request_age()
{
  age = prompt("Quel âge as-tu ?")
  si (âge >= 18)
  {
    alert('Vous êtes Majeur !')
  }
  autre
  {
    alert('Vous êtes mineur !')
  }

}


fonction give_postal_code()
{
  cp = 77 000 ;
  tandis que (cp <= 77999)
  {
    console.log(cp)
    cp++;
  }
}

fonction give_mult_5()
{
  expérience = document.getElementById("experiment-00");
  n = 5 ;
  html_content = '';
  pour(i = 0; i <= 10; i++)
  {
    html_content += `${n} x ${i} = ${n * i} <br>`
  }
  expérience.src = "à propos de : blanc" ;

// Définit le nouveau HTML de l'iframe
  experience.contentWindow.document.open();
  experience.contentWindow.document.write(html_content);
  experience.contentWindow.document.close();
}



fonction log_some_nums()
{
  expérience = document.getElementById("experiment-00");
  html_content = '';
  pour(i = 1; i <= 5; i++)
  {
    pour(j = 1; j <= i; j++)
    {
      html_content += je;
    }
    html_content += '<br>';
  }
  expérience.src = "à propos de : blanc" ;

// Définit le nouveau HTML de l'iframe
  experience.contentWindow.document.open();
  experience.contentWindow.document.write(html_content);
  experience.contentWindow.document.close();
}


fonction jusqu'à_20()
{
  expérience = document.getElementById("experiment-00");
  variable_de_mon_choix = 0;
  expérience.src = "à propos de : blanc" ;

// Définit le nouveau HTML de l'iframe
  experience.contentWindow.document.open();


  while (variable_de_mon_choix < 20)
  {
    experience.contentWindow.document.write(variable_de_mon_choix + "<br>");
    variable_de_mon_choix+=2;
  }
  experience.contentWindow.document.close();
}


fonction build_table()
{
  expérience = document.getElementById("experiment-00");
  expérience.src = "à propos de : blanc" ;
  tableau = '<table style="border: 1px solid black;">';
  colonne = 2 ;
  ligne = 5 ;

  pour(i = 1; i <= ligne; i++)
  {
    tableau += '<tr>';
    pour(j = 1; j <= colonne; j++)
    {
      tableau += '<td style="border: 1px solid black;">je suis un texte sans importance</td>'
    }
    tableau += '</tr>';
  }
  tableau += '</table>';


  experience.contentWindow.document.open();
  experience.contentWindow.document.write(tableau);
  experience.contentWindow.document.close();


}

fonction build_table_v2()
{
  expérience = document.getElementById("experiment-00");
  expérience.src = "à propos de : blanc" ;
  tableau = '<table style="border: 1px solid black;">';
  column = prompt("Combien de colonnes voulez-vous ?");
  row = prompt("Combien de lignes voulez-vous ?");

  pour(i = 1; i <= ligne; i++)
  {
    tableau += '<tr>';
    pour(j = 1; j <= colonne; j++)
    {
      tableau += '<td style="border: 1px solid black;">je suis un texte sans importance</td>'
    }
    tableau += '</tr>';
  }
  tableau += '</table>';


  experience.contentWindow.document.open();
  experience.contentWindow.document.write(tableau);
  experience.contentWindow.document.close();


}

fonction get_random()
{
  expérience = document.getElementById("experiment-00");
  expérience.src = "à propos de : blanc" ;
  html_content = '<ul>';
  nombres_aléatoires = 10 ;
  pour (i = 1; i <= random_nums; i++)
  {
    html_content += '<li>' + Math.floor(Math.random() * 100) + '</li>';
  }
  html_content += '</ul>';

  experience.contentWindow.document.open();
  experience.contentWindow.document.write(html_content);
  experience.contentWindow.document.close();
}

fonction get_random_v2()
{
  expérience = document.getElementById("experiment-00");
  expérience.src = "à propos de : blanc" ;
  html_content = '<ul>';
  nombres_aléatoires = 10 ;
  pour (i = 1; i <= random_nums; i++)
  {
    aléatoire = Math.random(10);

    si (aléatoire == 10)
    {
      console.log(`${random} était ce que nous recherchions !`);
    }
    html_content += '<li>' + aléatoire + '</li>';
  }
  html_content += '</ul>';

  experience.contentWindow.document.open();
  experience.contentWindow.document.write(html_content);
  experience.contentWindow.document.close();
}


fonction get_random_v3()
{
  expérience = document.getElementById("experiment-00");
  expérience.src = "à propos de : blanc" ;
  html_content = '<ul>';
  nombres_aléatoires = 10 ;
  cptr_10 = 0 ;
  pour (i = 1; i <= random_nums; i++)
  {
    aléatoire = Math.floor(Math.random() * 11);

    si (aléatoire == 10)
    {
      console.log(`${random} était ce que nous recherchions !`);
      cptr_10++;
    }
    html_content += '<li>' + aléatoire + '</li>';
  }
  html_content += `</ul> <br>10 ont été vus ${cptr_10} fois`;

  experience.contentWindow.document.open();
  experience.contentWindow.document.write(html_content);
  experience.contentWindow.document.close();
}


fonction set_random_bgcolor()
{
  expérience = document.getElementById("experiment-00");
  expérience.src = "à propos de : blanc" ;
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  couleur = `rgb(${r}, ${g}, ${b})`;

  experience.style.backgroundColor = couleur;
}


fonction go_to_bonus()
{
  expérience = document.getElementById("experiment-00");
  expérience.src = "à propos de : blanc" ;
  experience.setAttribute("src","other/SuiteMission8.html");
}
