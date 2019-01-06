import React from "react";
import Person from "./Person";

const PersonList = () => {
  const people = [
    {
      img: 1,
      name: "suman",
      job: "teacher"
    },
    {
      img: 2,
      name: "mohini",
      job: "chemist"
    },
    {
      img: 3,
      name: "bhavani",
      job: "developer"
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.
      </Person>
      <Person person={people[2]} />
    </section>
  );
};

export default PersonList;
