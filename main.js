let navitens = document.querySelectorAll(".navbar .nav-item");
for (let i = 0; i < navitens.length; i++) {
  navitens[i].addEventListener('click', function() {
    for (let j = 0; j < navitens.length; j++){
      navitens[j].classList.remove('active');}
    this.classList.add('active');
  });
}



let naviten = document.querySelectorAll(".navbar .icon i");
for (let i = 0; i < naviten.length; i++) {
  naviten[i].addEventListener('click', function() {
    for (let j = 0; j < naviten.length; j++){
      naviten[j].classList.remove('active');}
    this.classList.add('active');
   
  });
}


console.log(document.querySelector('.light1'))
document.querySelector('.dark1').addEventListener('click',()=>{
  document.body.classList.add('dark')
})

document.querySelector('.light1').addEventListener('click',()=>{
  document.body.classList.remove('dark')
})
if(this.class== "dark1"){
  this.classList.add('dark');

}
if(this.class== "light1"){
  this.classList.remove('dark');

}



const inputName = document.querySelector("#InputName");
const inputEmail = document.querySelector("#InputEmail");
const inputNumber = document.querySelector("#InputNumber");
const HowManyOrder = document.querySelector("#How-much");
const FoodName = document.querySelector("#Your-Order");
const inputCity = document.querySelector("#InputAddress");
const addBtn = document.querySelector(".BTNorder");
const orders =[];
const emailregx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
addBtn.addEventListener("click",(e)=>{
e.preventDefault();
const order = {
  inputName:inputName.value,
  inputEmail:inputEmail.value,
  inputNumber:inputNumber.value,
  HowManyOrder :HowManyOrder.value,
  FoodName:FoodName.value,
  inputCity:inputCity.value,
  addBtn:addBtn.value,
}

orders.push(order);
displayorders();



})

const displayorders = ()=>{
const result =orders.map( ele=>{

return `
<tr> 
<td>${ ele.inputName}</td>
<td>${ele.inputEmail}</td>
<td> ${ele .inputNumber}</td>
<td> ${ele.HowManyOrder}</td>
<td> ${ele.FoodName}</td>
<td> ${ele.inputCity}</td>

</tr>
`
}).join('');
document.querySelector(".orders").innerHTML=result;
}
inputEmail.addEventListener("input",()=>{
if(emailregx.test(inputEmail.value)){
  inputEmail.classList.add('is-valid');
  inputEmail.classList.remove('is-invalid');

}else{
  inputEmail.classList.add('is-invalid');
  inputEmail.classList.remove('is-valid');

} 




})

