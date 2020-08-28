function person(name) {
    this.name = name;
}
undefined
let xo = {
    name: 'xo'
}

let myPerson = person.bind(xo);

console.log( person.prototype)

console.log(myPerson.prototype )

let instance = new myPerson();

console.log(instance instanceof myPerson)

console.log(instance instanceof person)

console.log(instance.__proto__ === myPerson.prototype)


function person() {
    this.name = 'xo';
  }
  const obj = {
    name: 'tt'
  };
  const bindPerson = person.bind(obj);
  person.prototype.getName = function() {
    return this.name;
  }
  const instance = new bindPerson();
  console.log(instance.getName());