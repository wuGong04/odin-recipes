var ingredientList = document.getElementsByClassName('ingredients-item-name'); 
var ingrStr = ''; 
for( let i = 0; i < ingredientList.length; i++){
    ingrStr += '<li> '+ ingredientList[i].innerText + ' </li>\t\n'; 
}
console.log(ingrStr);

//code to extract steps
//xpath //ul[@class='instructions-section']//div[@class='paragraph']/p
//code to use
var stepList = document.evaluate("//ul[@class='instructions-section']//div[@class='paragraph']/p", document, null, XPathResult.ANY_TYPE, null);

var steps = stepList.iterateNext();
var list = "";
while (steps) {
  list += "<li>" + steps.innerText + "</li>" + "\n\n" ;
  steps = stepList.iterateNext();
}
console.log(list);