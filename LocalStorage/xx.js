
//first listen add item, when i enter or click it the value of <input type="text"> will be tacken by .Arts
const addItems=document.querySelector('.addItems')
const text=document.querySelector('[type="text"]')
const Arts=document.querySelector('.Arts')
const reset= document.querySelector('#resetButton')


//console.log(text)
addItems.addEventListener('submit',xx)
//ValueList =localStorage.getItem("items")?localStorage.getItem("items").split(','):[]

 reset.addEventListener('click',function(){
  Arts.innerHTML= `<li>loading..........</li>`
 localStorage.clear()})   

/* function submit(e){
  e.preventDefault()
 ValueList.push(` <li><input type='checkbox' > <label>${text.value}</label></li>`)
 console.log(ValueList)

 Arts.innerHTML=ValueList.join('');
 localStorage.setItem("items", ValueList);

 addItems.reset()
}
 */

// here we store the whole html in local then use ValueList to get the html and then just put it in Arts.innerHTML
 // actually whole html west the space, usually only keep value, and treat value as varible in html
 
 ValueList=[]
 function xx(e){
  e.preventDefault()

  ValueList.push(text.value)
  console.log(ValueList)
  localStorage.setItem("items", ValueList);
  ValueList =localStorage.getItem("items")?localStorage.getItem("items").split(','):[]
  console.log(ValueList)
  Arts.innerHTML=ValueList.map(value=>(`<li><input type='checkbox' > <label>${value}</label></li>`)).join('')
  console.log( Arts.innerHTML)

 }