
//first listen add item, when i enter or click it the value of <input type="text"> will be tacken by .Arts
const addItems=document.querySelector('.addItems')
const text=document.querySelector('[type="text"]')
const Arts=document.querySelector('.Arts')
const reset= document.querySelector('#resetButton')


//console.log(text)
addItems.addEventListener('submit',xx)
Arts.addEventListener('click',check)
// when i click the <li>area i hope the icon got changed 
//and get spired from css. the point is the state of checked 
//but because we alternative the content checkbox to a icon, we need to add the state checked manually 
ValueList =localStorage.getItem("items")?localStorage.getItem("items").split(','):[]

function check(e){
//console.log(this)
//console.log(e)
//console.log(e.target)
console.log(e.target)
e.target.matches('input')
}

styleArtsList()

// Initialize the list on page load
/* document.addEventListener('DOMContentLoaded', initializeList);
function initializeList(){
if (ValueList.length>0){
 
  Arts.innerHTML=html;
}  else {Arts.innerHTML= `<li>loading..........</li>`}
}
 */
reset.addEventListener('click',function(){
  Arts.innerHTML= `<li>loading..........</li>`
  localStorage.clear("items")
  ValueList=[]
})  

/* function submit(e){
  e.preventDefault()
 ValueList.push(` <li><input type='checkbox' id='1' > <label for='1' >${text.value}</label></li>`)

 //console.log(ValueList)

 Arts.innerHTML=ValueList.join('');
 localStorage.setItem("items", ValueList);
 // the weakness of this methode is,: save the html with no checked valeu, 
 //cause right now, we just add items, and the click event occurs later. 
 //it's impossible to add the varible checked later in js, cause it's already in localstorage, 
 //so we need to see state of check as a varible like ${text.value}
 addItems.reset()
} */



// here we store the whole html in local then use ValueList to get the html and then just put it in Arts.innerHTML
 // actually whole html west the space, usually only keep value, and treat value as varible in html
 
 

 function xx(e){
  e.preventDefault()

  ValueList.push(text.value)
 
  localStorage.setItem("items", ValueList);
 
  styleArtsList()
 
  addItems.reset()
}
function styleArtsList(){
let html=ValueList.map(value=>(`<li><input type='checkbox' > <label>${value}</label></li>`)).join('')
Arts.innerHTML=html;
console.log(html)}