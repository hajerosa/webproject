

function myFunction1() {
    // document.calc.result.value :cette fonction permet de donner au champ texte une valeur cad dans le champ il y'aura une valeur visible 
   a= parseInt(document.calc.result.value);
   a++;
   

   document.calc.result.value=a;
  }
  function myFunction2() {
    // document.calc.result.value :cette fonction permet de donner au champ texte une valeur cad dans le champ il y'aura une valeur visible 
   a= parseInt(document.calc.result.value);
   
   if (a>1)
   a--;
   document.calc.result.value=a;
   
  }
