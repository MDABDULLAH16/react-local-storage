import React from "react";
import "./Person.css";
import { fakeDb, removeFromDb } from "../../utilities/fakeDb";

const Person = (props) => {
  const { id, name, job, salary } = props.member;

  const addToCard = (id) => {
    fakeDb(id);
  };

  const removeFromCart = (id) => {
    removeFromDb(id);
  };
  return (
    <div className="person">
      <p>Id: {id}</p>
      <h2>Name: {name}</h2>
      <h3>Job: {job}</h3>
      <h3>Salary: {salary}</h3>
      <button onClick={() => addToCard(id)}>Add TO card</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
};

export default Person;
