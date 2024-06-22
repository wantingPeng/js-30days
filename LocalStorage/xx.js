
//first listen add item, when i enter or click it the value of <input type="text"> will be tacken by .Arts
const addItems=document.querySelector('.addItems')
const text=document.querySelector('[type="text"]')
const Arts=document.querySelector('.Arts')
const reset= document.querySelector('#resetButton')


//console.log(text)
addItems.addEventListener('submit',submit)
ValueList =localStorage.getItem("items").split(',')

console.log(ValueList)
/*  reset.addEventListener('click',function(){
 localStorage.clear()})   */

function submit(e){

  e.preventDefault();

  //console.log(e.target)
  //console.log(text.value)
 //Arts.innerHTML +=` <li>${text.value}</li>` 
 ValueList.push(` <li><input type='checkbox' > <label>${text.value}</label></li>`)
 Arts.innerHTML=ValueList.join('');
 localStorage.setItem("items", ValueList);

 addItems.reset()
 //localStorage key-value pairs the value must be String
 //console.log(typeof(localStorage.getItem("items")))//[" <li><input type='checkbox' > <label>gg</label></li>"," <li><input type='checkbox' > <label>hh</label></li>"]
 //console.log(localStorage.getItem("items").split(','))
}
