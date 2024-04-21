
/* 
function SumNum(num1,num2) {

   
   return  num1 + num2
    }


function CallBack(value1, valu2, operation) {
    return operation(value1,valu2)
    
}

console.log(CallBack(8,8, SumNum));
 */
/* var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
 */
/* const a = 1;

function suma() {
  const b = 2;
  return suma2();
  
}

const b = 3;
const c = 1;
function suma2() {
  const c = 3;
  return a + b + c;
}
console.log(suma()); */

for (let i = 1; i <= 9; i++) {

  setTimeout(() => {
    console.log(i);

  }, 10);

}


const persona = {
  name: "alan",
  lastName: "buscaglia"
}
/* la primera opcion no funciona ya que estamos modificando una constante, donde la constante esta guardando un espacio de la memoria, y se esta modificando ese espacio de la memoria, ya que incluso se le esta quitando lastName, por el otro lado, la segunda opcion solo se le esta cambian un valor, pero su espacio en la memoria sigue siendo el mismo, debido a la naturalidad de su estructura. */
/* persona = {name:"jorge"}
persona.name = "jorge" */
console.log(persona);

let array = [1,2,3]
let arrayMapped = array.map(function (element){
  return element + 1;
}) 
let arrayReduce = array.reduce(function (acumulator, element) {
  return acumulator + element
  
})

console.log(array);
console.log(arrayReduce);

const persona2 = {
  name: "juan",
  lastName: "buscaglia"
}
Object.freeze(persona2)
persona2.name = "goku"
console.log(persona2);

const bunny = {
name: "gentleman",
tasks: ["speak", "learn"],
/* aqui la arrow function como puedes ver no tiene un scope interno, quiere decir que comparte el mismo que el que tiene su funcion de afuera, por lo tanto en el ejercicio de la consecionaria, por eso funcionaba con arrow function y no con la normal, porque la normal si necesita tener todo al alcance de su outer o inner scope */
showTasks: function () {
  this.tasks.forEach(task => {
    console.log(this.name + " " + task);
    
  });
  /*
  let name = this.name 
  this.tasks.forEach(function(task) {
    console.log(name + " " + task);
    
  });
   */
}
}

bunny.showTasks()

let prueba = "esto es simplemente una prueba"
let resultado = prueba.split(" ")/* .slice(0, 3).join(" ") */
console.log(resultado);