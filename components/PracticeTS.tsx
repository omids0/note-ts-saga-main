import React from "react";

export default function PracticeTS() {
  interface Calc {
    subtract(first: number, second: number): any;
  }

  let Calculator: Calc = {
    subtract(first: number, second: number) {
      return first - second;
    },
  };

  //functions
  function add(a: number, b: number) {
    return a + b;
  }

  console.log(add(1, 1));

  function display(id: number, name: string) {
    console.log("Id = " + id + ", Name = " + name);
  }
  console.log(display(101, "Rohit Sharma"));

  //interface
  interface Student {
    name: string;
    code: number;
  }
  let student: Student = {
    name: "omid",
    code: 742,
  };
  console.log(student);

  let personel: [string, number] = ["omid", 42];

  let empTuple = ["JavaTpoint", 101, "Abhishek"];
  //Passing tuples in function
  function displayTuples(tuple_values: any[]) {
    for (let i = 0; i < empTuple.length; i++) {
      console.log(empTuple[i]);
    }
  }
  //Calling tuple in function
  displayTuples(empTuple);

  //numbers
  let myNumber: number = 12345;

  enum Direction {
    up = 2,
    down,
    left,
    right,
  }

  console.log(Direction.down);

  function getPersonalData(
    id: number,
    firstName: string,
    lastName?: string
  ): string {
    return `${firstName}, Your id is ${id}`;
  }

  console.log(getPersonalData(20, "omid"));

  interface OS {
    name: String;
    build: number;
  }

  let osVersion = (detailes: OS): void => {
    console.log(`${detailes.name} build is ${detailes.build}`);
  };
  osVersion({ name: "Windows 11", build: 11256 });

  function getItem<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
  }
  console.log(getItem<number>([4, 5, 6]));

  //interface
  interface People {
    name: string;
    age: number;
  }
  interface Celebrity extends People {
    profession: string;
  }
  function printName<T extends Celebrity>(theInput: T): void {
    console.log(
      `Name: ${theInput.name} \nAge: ${theInput.age} \nProfession: ${theInput.profession}`
    );
  }
  let player: Celebrity = {
    name: "Rohit Sharma",
    age: 30,
    profession: "Cricket Player",
  };
  printName(player);

  function identity<T = number>(arg: T): T {
    return arg;
  }

  const testArg = identity(12);

  return <div>Practice TS</div>;
}
