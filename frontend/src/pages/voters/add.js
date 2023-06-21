import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Card from "../../components/card";
import { SaveVoter } from "../../services/voters";

const AddVoter = () => {
  const [state, setState] = useState({
    studentId: "",
    studentName: "",
    email: "",
    telephone: "",
    password: "",
  });

  const handleClick = async () => {
    const res = await SaveVoter(state);
    console.log(res);
    if (res.status === 201) {
      alert("Voter Saved!");
    }
  };

  return (
    <Card title="Student Information">
      <form>
        <Input
          name="studentId"
          id="studentId"
          type="text"
          title="Student ID"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, studentId: e.target.value };
            });
          }}
        />
        <Input
          label="studentName"
          name="studentName"
          id="studentName"
          type="text"
          title="Student Name"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, studentName: e.target.value };
            });
          }}
        />

        <Input
          label="email"
          name="email"
          id="email"
          type="email"
          title="Email"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, email: e.target.value };
            });
          }}
        />

        <Input
          label="telephone"
          name="telephone"
          id="telephone"
          type="tel"
          title="Telephone"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, telephone: e.target.value };
            });
          }}
        />

        <Input
          label="password"
          name="password"
          id="password"
          type="password"
          title="Password"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, password: e.target.value };
            });
          }}
        />

        <Button type="button" title="Submit" onClick={handleClick} />
      </form>
    </Card>
  );
};

export default AddVoter;
