//les commentaire JS sur une ligne

/*les commentaires sur
 plusieur ligne
*/
//les instructions qui afficvhe test 1
console.log("test 1");
//declaration des variables en js
var age;
var name
//affectation de valeur
name='Hello \"world\"'
//affichage des variable

console.log(name);
//definir une constante
const TVA=20
//typeof permet de connaitre les type des variables
typeof(name)
 //les boolean true ou false
var bool=true
var bool=false
//les operateurs arithmetiques +_* ** % / ++ _ _ 
var nb1=45
var nb2=34
sum =nb1+nb2
 console.log(sum);
div=nb1/2
mod=nb2%5
expo=nb1**2
//les operateur d'affectation = += -= ..
// les operateurs de comparaison == !=  < > <= >=
//les operateurs logiques && || !nonlogique
//les oparateur de concatenation +
/*age=25
var hello="Bonjour monsieur ou madame"
var secondeName="TATA"
var nameSeconde= "TOTO"
var concat= hello+" "+secondeName+" "+nameSeconde+" vous avez "+age+" ans"
console.log(concat);

//les structure conditionnelle if

 if (age>=23 ){
      console.log("merci vous etes majeur");

 }else if ( age=25){
     console.log("vous etes mineur grand");
 }else{
     console.log("vous ets mineur");

 }
 // switch case
 //prompt() la fonction pour faire ecrire une valeur
 //parseInt() pour convertir une chaine de caractere en number
  var taille=prompt();
  taille=parseInt(taille)
  console.log("le type de taille"+typeof(taille));  
 switch (taille) {
     case 158:
         console.log("ok vous etes de taille moyenne");
         break;
 
    case 170:
         console.log("ok vous etes  de garnde taille");
         break;
    case 155:
         console.log("ohh vous avez une tres grande taille ");
         break;
    default:
         console.log("desoler on a rien trouver");
         break;


 }
// les boucle while et for 
for (var i=0;i<5;i++) {
    console.log("merci"+i);
    
}
var j=0;
while (j<5) {
console.log("ok while merci"+j);
j++;}
    */

//do while
/*
do {
    var index=prompt("entrer la valeur:index")
    index=parseInt(prompt())
    
} while (index<3);
*/
//table de multiplicationd de 3
/* for (i=1; i<11;i++){
 console.log("3 *"+i+"="+3*i);
 
}
var nbre=0

  while (nbre<11) {
    console.log("5 *"+nbre+"="+5*nbre)
      nbre++
      
  }*/
  // la boucle do while
  var nbre2=0
   do {
   
    console.log(`3 x ${nbre2}= ${nbre2*3}`);
     nbre2++  
   } while (nbre2<11);



   //les tableaux permet de sauvegarder plusieur information
   var fruit=["orange","banane"]
   var names=['alice','mondesir','leila','fatim','ami']
   var firstName =[...names,'nocolas','awa','marlene']

   //les fonctions

   //les fonctions predefinir en js
   /* parseInt ("45")
        parseFloat("45.45")*/
    //Pour creer les fonction

    var say_thanks=()=> {
        console.log("welcome to my class");
        console.log("thanks you");
    
    
    }
     var tableMulplication=( ) =>{
        for (let i = 1; i <10; i++) 
        {   for (let index = 0; index < 11; index++) {
            console.log(`${i} x ${index} =${index*i}`);
            
        }}

     }
     // 2 eme methode


     function tablee(nobre,limit){
        console.log("nombre"+nobre);
        console.log("limit"+limit);
        if (limit && typeof(limit)==="number") {
            
        }else{
           var  limit=12
        }
        if (nobre && typeof(nobre)==="number"){
            for (let i = 1; i <=limit; i++) 
        {


        console.log(`${nobre} x ${i} =${i*nobre}`);
        }
    }
        else{
            console.log("le parametre doit etre un nobre");
        }
     }
      var perimetre=(nbre2)=>{
          if (nbre2 && typeof(nbre2)==="number")
          {
              return nbre2*nbre2
          }else{


              return null
          }
          console.log("merci");
      }
      //retrun permet de retourner une valeur 



   
//les objets js et les methodes
//creation des object
 var cart={
     _id:87654,
     name:"leilal"

 }
 var car =new Object()
 //ajout de propriete a l'object
 car._id=34534345
 car.name="rangeRover"
 car.year=2020
 car.vitesse=123

//creation d'un object
 var cart2={...cart,_id:9876556,vitesse:34,year:22021}
//object
 var personne={

    firstName:"amy",
    lastname:"karamoko",
    email:"ami@gmail.com",
    tel:"23456789",
    adreese:{
        numRue:"25Rue des developpeur",
        code:98000,
        country:"canada"

    },
    //
    fullname:function(){
       return this.firstName+" "+this.lastname

    },
    hello:function(){
return "hello welcome"+this.fullname()
    }
 }
 //creation object  qui prend en compte les autres objects
  var personne2={


    ...personne,
    lastname:"leila",
  }


//les cas d'utilisation des objects

//var say_hello=(object)=>{
//console.log(`hello ${object.firstName}`);
//}

var say_hello=({firstName})=>{
    console.log(`hello ${firstName}`);
    }
    //pour copier le contenu d'une fonction dans une autre 
    var newPersonn=personne2
    //ou
    var newPersonn={...personne2}
    




