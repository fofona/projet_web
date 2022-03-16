/*
//les evenements js: click, keyup, mouseover
//les ebvenement de changement d'etat: change, focus
//element de chrgenement 

//Abonnement des evement ave AddEvenListener 
 // on selectionne l'element 
 var h2 = document.querySelector('section#html h2')
 // definir la function
  var listenerFunction=()=>{
      // afficher un popon (quelque chod se dans le navigateur)
      window.alert("Click detecter sur la balise H2")
      //affichage dasn la console
       console.log("Click detecter sur la balise H2");
        //comment se desabonner un element removeEventLister
 h2.removeEventListener('click',listenerFunction)
  }
  //ecouter l'abonnement
  //click une fois
 h2.addEventListener('click',listenerFunction)
  //click deux fois
// h2.addEventListener('dblclick',listenerFunction)
*/

//charger  le contenu d'une page 
//=()=> c'est la creation d'une funtion
//oload eprmet de detecter un evement 
window.onload=()=>{

    setupListeners();
   


}
//document.addEventListener('click',listenerFunction)==
//document.onclick= listenerFunction;

//le this et le event
//event( pernd en compte : type,clientX,pageX,pageU , screen y,target,key,timestamp,)

//le this est disponioble dans l function listerner 
