
  // first we need to fetch the data from url
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  //fetch(endpoint).then(Response=>console.log(Response.json()))
//now we need to transfer the data to local storage
let Array1=[];
//fetch(endpoint).then(Response=>{ console.log(typeof(Response.json()))})//it's object!!!!!!!!!
//fetch(endpoint).then(Response=>Response.json()).then(data=>console.log(data))//now it's data array(1000)
data = fetch(endpoint).then(Response=>Response.json()).then(data=>{Array1=data})
// now we get the data in array1 we need ues filter() and regexp to match the input
function filter(search){
  const regex = new RegExp(search,'gi')
 return Array1.filter(object=>object.city.match(regex))
}
//third step, add listener on input element, 
//const input=document.querySelector('input')
const input = document.querySelector('input')
const suggestions=document.querySelector('.suggestions')
const resetSuggestions=suggestions
const content=Array.from(document.querySelectorAll('ul.suggestions > li'))

//console.log(content.map(li=>li.outerHTML))

input.addEventListener('keyup',display
  //function(event){  console.log(event.key)  ;console.log(this.value);  console.log('ss')
)

// now we need to consider, when we pressdown the enter, we are suppose to see the result immerdiately, but
//func(filter) just return a object ,there are no html no css, so it's impossible diaplay on the sceen, so here
//we need to add another function to fix the above problems.
function display(){
  if (this.value===''){
    
    resetSuggestions.innerHTML=content.map(li=>li.outerHTML).join('')
   }   
  else{
  targetObj=filter(this.value);
  //get the city name form object in array
  let result=targetObj.map(object=>{
    const targetWord= new RegExp(this.value, 'gi');
    const hlWord=`<span class='hl'>${this.value}</span>`;
    return `<li><span>${ object.city.replace(targetWord,hlWord)}</span>
      <span>${object.population}</span></li>`
 
    }).join('');
    resetSuggestions.innerHTML=result
  
}

}
