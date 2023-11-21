function set_str()
{
  experiment = document.getElementById("experiment-00");
  text_chain = prompt("Entrez a string: ");
  // console.log(experiment.innerHTML);
  // experiment.innerHTML = text_chain;

  experiment.src = "about:blank";

// Set the iframe's new HTML
  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(text_chain);
  experiment.contentWindow.document.close();


  // experiment.innerText = text_chain;

}

function sum_values()
{
  a = 42;
  b = 7609;
  result = a + b;
  alert("the result is: " + result);
}

function calc_moyenne()
{
  note_math = 11;
  note_hg = 9;
  note_francais= 16;
  moyenne =  (note_francais + note_math + note_hg) /3;
  alert("La moyenne est de " + moyenne);
}

function check_sold()
{
  budget = 2333.334;
  achats = 2333.334;
  if(achats <= budget)
  {
    alert("You can buy everything with the budget you have, it will let you with " + (budget - achats) + " €")
  }
  if(achats > budget)
  {
    alert("You can't buy everything with the budget you have, you need  " + math.abs(budget - achats) + " € more")
  }
}


function get_ttc()
{

  prix = prompt("Give me a price: ");
  alert("Your ttc price is with 20% tva is " + prix * 0.80);
}

function get_ttc_v2()
{
  experiment = document.getElementById("experiment-00");
  experiment.src = "about:blank";
  prix = prompt("Give me a price: ");
  tva = prompt("Give me a tva %: ");
  alert("Your ttc price is " + Math.ceil(prix * ( 1 - (tva/100))));
}

function get_ttc_v3()
{
  experiment = document.getElementById("experiment-00");
  experiment.src = "about:blank";
  experiment.contentWindow.document.open();
  prix = prompt("Give me a price: ");
  tva = prompt("Give me a tva %: ");
  ttc = Math.ceil(prix * ( 1 - (tva/100)));
  if( ttc > 100)
  {
    experiment.contentWindow.document.body.style.color = "red";
  }
  else
  {
    experiment.contentWindow.document.body.style.color = "green";
  }
  experiment.contentWindow.document.write(ttc);
  experiment.contentWindow.document.close();
}


function send_to_f7()
{
  experiment = document.getElementById("experiment-00");
  experiment.src = "about:blank";
  experiment.setAttribute("src","other/f7.html");

}


function times_10()
{
  for(i = 0; i <= 1000; i+=10)
  {
    experiment = document.getElementById("experiment-00");
    experiment.src = "about:blank";
    console.log(`${i} is a multiplier of 10`);

  }
}


function ask_age()
{
  age = prompt("How old are you?")
  if (age >= 18)
  {
    alert('Vous etes Majeur!')
  }
  else
  {
    alert('Vous etes mineur!')
  }

}


function give_postal_code()
{
  cp = 77000;
  while (cp <= 77999)
  {
    console.log(cp)
    cp++;
  }
}

function give_mult_5()
{
  experiment = document.getElementById("experiment-00");
  n = 5;
  html_content = '';
  for(i = 0; i <= 10; i++)
  {
    html_content += `${n} x ${i} = ${n * i} <br>`
  }
  experiment.src = "about:blank";

// Set the iframe's new HTML
  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(html_content);
  experiment.contentWindow.document.close();
}



function log_some_nums()
{
  experiment = document.getElementById("experiment-00");
  html_content = '';
  for(i = 1; i <= 5; i++)
  {
    for(j = 1; j <= i; j++)
    {
      html_content += i;
    }
    html_content += '<br>';
  }
  experiment.src = "about:blank";

// Set the iframe's new HTML
  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(html_content);
  experiment.contentWindow.document.close();
}


function until_20()
{
  experiment = document.getElementById("experiment-00");
  variable_de_mon_choix = 0;
  experiment.src = "about:blank";

// Set the iframe's new HTML
  experiment.contentWindow.document.open();


  while (variable_de_mon_choix < 20)
  {
    experiment.contentWindow.document.write(variable_de_mon_choix + "<br>");
    variable_de_mon_choix+=2;
  }
  experiment.contentWindow.document.close();
}


function build_table()
{
  experiment = document.getElementById("experiment-00");
  experiment.src = "about:blank";
  tableau = '<table style="border: 1px solid black;">';
  column = 2;
  row = 5;

  for(i = 1; i <= row; i++)
  {
    tableau += '<tr>';
    for(j = 1; j <= column; j++)
    {
      tableau += '<td style="border: 1px solid black;">je suis un texte sans importance</td>'
    }
    tableau += '</tr>';
  }
  tableau += '</table>';


  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(tableau);
  experiment.contentWindow.document.close();


}

function build_table_v2()
{
  experiment = document.getElementById("experiment-00");
  experiment.src = "about:blank";
  tableau = '<table style="border: 1px solid black;">';
  column = prompt("How many columns do you want ?");
  row = prompt("How many rows do you want ?");

  for(i = 1; i <= row; i++)
  {
    tableau += '<tr>';
    for(j = 1; j <= column; j++)
    {
      tableau += '<td style="border: 1px solid black;">je suis un texte sans importance</td>'
    }
    tableau += '</tr>';
  }
  tableau += '</table>';


  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(tableau);
  experiment.contentWindow.document.close();


}

function get_random()
{
  experiment = document.getElementById("experiment-00");
  experiment.src = "about:blank";
  html_content = '<ul>';
  random_nums = 10;
  for(i = 1; i <= random_nums; i++)
  {
    html_content += '<li>' + Math.floor(Math.random() * 100) + '</li>';
  }
  html_content += '</ul>';

  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(html_content);
  experiment.contentWindow.document.close();
}

function get_random_v2()
{
  experiment = document.getElementById("experiment-00");
  experiment.src = "about:blank";
  html_content = '<ul>';
  random_nums = 10;
  for(i = 1; i <= random_nums; i++)
  {
    random = Math.random(10);

    if (random == 10)
    {
      console.log(`${random} was what we were looking for!`);
    }
    html_content += '<li>' + random + '</li>';
  }
  html_content += '</ul>';

  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(html_content);
  experiment.contentWindow.document.close();
}


function get_random_v3()
{
  experiment = document.getElementById("experiment-00");
  experiment.src = "about:blank";
  html_content = '<ul>';
  random_nums = 10;
  cptr_10 = 0;
  for(i = 1; i <= random_nums; i++)
  {
    random = Math.floor(Math.random() * 11);

    if (random == 10)
    {
      console.log(`${random} was what we were looking for!`);
      cptr_10++;
    }
    html_content += '<li>' + random + '</li>';
  }
  html_content += `</ul> <br>10 was seen ${cptr_10} times`;

  experiment.contentWindow.document.open();
  experiment.contentWindow.document.write(html_content);
  experiment.contentWindow.document.close();
}


function set_random_bgcolor()
{
  experiment = document.getElementById("experiment-00");
  experiment.src = "about:blank";
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  color = `rgb(${r}, ${g}, ${b})`;

  experiment.style.backgroundColor = color;
}


function go_to_bonus()
{
  experiment = document.getElementById("experiment-00");
  experiment.src = "about:blank";
  experiment.setAttribute("src","other/SuiteMission8.html");
}
