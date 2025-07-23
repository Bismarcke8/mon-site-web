/*EXERCICE1
let a= 120;
let b= 20;
var somme =a+b;
alert(a+"+"+b+"="+somme);

EXERCICE2
var math=parseInt(prompt("Entrez la cote sur20 en math"));
var Anglais=parseInt(prompt("Entrez la cote sur20 en Anglais"));
var Fr=parseInt(prompt("Entrez la cote sur20 en Fr"));
var programmation=parseInt(prompt("Entrez la cote sur20 en programmation"));
var physique=parseInt(prompt("Entrez la cote sur20 en physique"));

var moyenne = (math+Anglais+Fr+programmation+physique)/5;

if (moyenne>=14){
    alert("Vous avaez la moyenne de"+moyenne+"(Distinction)");
}
else if (moyenne<=12){
     alert("Vous avaez la moyenne de"+moyenne+"(Satisfaction)");

}
else{
     alert("Vous avaez la moyenne de"+moyenne+"(Ajoiurné)");
}

EXERCICE3
let age =parseInt(prompt("Entrez la cote votre age"));

if(age>=18){
    alert("vous etes majeur");
}
else if(age<18){
    alert("vous etes mineur");
}
else{
    alert("Erreur")
}
*/

//CARRE

<script>
    function surfaceCarre()
    {

          constcote=parseFloat(document.getElementById("carreCote").value);
          constsurface=cote*cote;
          document.getElementById("resultcarre").innerHTML = "surface :"+surface+ " unitescarre";
        
    }
</script>
   