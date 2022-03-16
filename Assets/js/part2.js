

//les selecteurs en JS
//a partir de id ,class,name , ou balise ou selecteur css
//getElementById
console.log('text');
//selectionner un element grace a son identifiant

var html = document.getElementById("html") 
//selectionner un element grace a sa classe 
var section=document.getElementsByClassName("section")
//selecteur par par l'attribut name
var email= document.getElementsByName("email")
//selectionner un element a partir de sa balise 
var input= document.getElementsByTagName("input")
//selectionner tous les element qui ont  section comme class a partir des selecteur css
var cssSelecteur=document.querySelectorAll("section")
console.log(cssSelecteur);
 // pour recuperer le premier element avec id  comme attribut
 var idr=document.querySelector("#css")
  // pour recuperer le premier element ave class comme attribut
 var classr =document.querySelector(".section")

 //LA manipulation des element d'un document web
 //manipulationdes atttributs (class devient className et for devient htmlFor)
var formLine=document.querySelector(".form-line")



//autre maniere pour recupere les attribut avec getAttribut et setAttribut
var avecGet=formLine.getAttribute("class")
var avecGet=formLine.getAttribute("id")

 // pour modifier l'attibut
 var avecGet=formLine.getAttribute("class")
 avecGet="leilaclacce"
 //var avecSet=formLine.setAttribute("nomDe lattribut a modifier","la nouvelle valeur")
// comment manipuler le contenu d'un element innerhtml
var article=document.querySelectorAll(".article")
//pour afficher le text de l'article ave les code html
 article[0].innerHTML
 //pour afficher le text de l'article sans les code html
 article[0].textContent
  //  pour modifier le contenu de l'article 
  //article[0].innerHTML="<h3>voici le modification</h3>"
  //article[0].textContent="voici le modification2"
console.log(article);
 //la conversion camelback
 //font-size => fontSize
  // pour acceder au propriete css et les manipuler
  article[0].style.color="red"
  article[0].style.fontSize="2,1rem"
  article[0].style.border="2px solid red"
  article[0].style.backgroundColor="blue"
  // pour verifier les valeur de style 

window.getComputedStyle(article[0]).border