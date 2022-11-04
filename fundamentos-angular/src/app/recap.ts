import { NgIfContext } from "@angular/common";

const username: string | number = 'eraluis';

const sum = (a: number, b:  number) => {
  return a + b;
}

sum(1, 3);

class Person {
  private age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

class Person2 {
  constructor(private age: number, public lastName: string) {}
}

const pedro = new Person(41, 'Pedro');
pedro.lastName
//pedro.age

const simon = new Person2(45, 'Simón');
simon.lastName
//simon.age


