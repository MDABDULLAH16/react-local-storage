import React, { useEffect, useState } from "react";
import Person from "../Person/Person";
import { getTotalSalary } from "../../utilities/fakeDb";

const Persons = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  const total = getTotalSalary(members);
  return (
    <div>
      <h1>Hello Local Storages Members:{members.length}</h1>
      <h1>Member Salary:{total}</h1>
      {members.map((member) => (
        <Person member={member} key={member.id}></Person>
      ))}
    </div>
  );
};

export default Persons;
