//Methodolologie
// creer un object
//object contenant des functions listeneur
var listenerFunction={
//definir un attribut et une function anonime
h2click: function(Event){
     // afficher un popon (quelque chod se dans le navigateur)
    /* console.log(this);
     //this nous renseigne sur lelement dont on click
     this.style.color ="red"
     
     if (this.style.background && this.style.background=="pink") {

        this.style.background="green"
    

     }else{
        this.style.background="pink"

     }*/
     //window.alert("Click detecter sur la balise H2")
     //affichage dasn la console
      console.log("Click detecter sur la balise H2");
//les Event il a beaucoup de type  c'est un object qui est detecter des lors que l'evenenemnt est detecter
    
//le  event.target fais l ameme chose que le this 
var element=Event.target
console.log(element);


if (element&& element.style.color=="pink") {

    element.style.color="green"


 }else{
    element.style.color="pink"

 }

},
bacgroundArticle:function(){
    
      if (this && this.style.backgroundColor=='yellow') 
      {
          this.style.backgroundColor= 'blue'
          this.style.color= 'black'
          
      }else{
        this.style.backgroundColor= 'yellow'
        this.style.color= 'white'

      }
   
       }

}
//function des mise en place des abonements
var setupListeners=()=>
{
    
    var h2 = document.querySelector('section#html h2')
    h2.onclick=listenerFunction.h2click;
   // h2.addEventListener('click',listenerFunction.h2click)
    
    //cibler les sections 
    var sections=document.getElementsByClassName("section")
    for (let index = 0; index < sections.length; index++) {
        const section= sections[index];
        console.log(index)
       // section.addEventListener('click',listenerFunction.bacgroundArticle)
        section.onclick=listenerFunction.bacgroundArticle  
    }
    
}

  

