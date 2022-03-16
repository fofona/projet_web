
//document css model
//les noeuds sont de types node 
 var elementNode=(name)=>{
    if (name && typeof(name)==="string") {
        return document.createElement(name)
          
      }else{
        return null
      }   

 }

 var textNode=(name)=>{
    if (name && typeof(name )==="string") {
        return document.createTextNode(name)
          
      }else{
        return null
      }

 }
var ul=elementNode("ul")

for (let index = 1; index <9; index++) {
    let li=elementNode("li");
    li.style.fontSize="2.5rem"
    li.style.color="pink"
    let text=textNode("Element javascript N*"+index)
    li.appendChild(text)
    ul.appendChild(li)
   
    
}
//console.log(ul);
document.getElementById("app").appendChild(ul)