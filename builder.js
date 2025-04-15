class Person {
  constructor(name) {
    this.name = "";
  }
  setName(name) {
    this.name = name;
  }
}

(() => {
  let person = new Person("hello");
  person.setName("heys");
  console.log(person);
})();
