import React, { useEffect, useState } from "react";
import Person from "../Person/Person";

const Persons = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div>
      <h1>Hello Local Storages:{members.length}</h1>
      {members.map((member) => (
        <Person member={member} key={member.id}></Person>
      ))}
    </div>
  );
};

export default Persons;
