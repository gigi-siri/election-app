import React, { useState, useEffect } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Card from "../../components/card";
import { GetVoterByStudentId, SaveVoter } from "../../services/voters";
import { useNavigate, useParams } from "react-router-dom";

const EditVoter = () => {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [state, setState] = useState({
    studentId: "",
    studentName: "",
    email: "",
    telephone: "",
    password: "",
  });

  useEffect(() => {
    const LoadStudent = async () => {
      const student = await GetVoterByStudentId(studentId);
      const voter = student.data;
      setState((prevState) => {
        return {
          ...prevState,
          studentId: voter.studentId,
          studentName: voter.studentName,
          email: voter.email,
          password: voter.password,
          telephone: voter.telephone,
        };
      });
    };
    LoadStudent();
  }, [studentId]);

  const handleClick = async () => {
    // console.log(state);
    // const res = await SaveVoter(state);
    // console.log(res);
    navigate("/voters");
  };

  return (
    <Card title="Student Information">
      <form>
        <Input
          name="studentId"
          id="studentId"
          type="text"
          title="Student ID"
          value={state.studentId}
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
          value={state.studentName}
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
          value={state.email}
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
          value={state.telephone}
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
          value={state.password}
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, password: e.target.value };
            });
          }}
        />

        <Button type="button" title="Update" onClick={handleClick} />
      </form>
    </Card>
  );
};

export default EditVoter;
