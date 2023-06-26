import React, { useState } from "react";
import Input from "../../components/input";
import Card from "../../components/card";
import Button from "../../components/button";
import { SaveCandidates } from "../../services/candidates";

const AddCandidates = () => {
  const [state, setState] = useState({
    candidateId: "",
    candidateName: "",
    telephone: "",
    profile: "",
    position: "",
  });

  const handleClick = async (e) => {
    e.preventDefault();
    // console.log(state);
    const res = await SaveCandidates(state);
    console.log(res);
  };

  return (
    <div>
      <form>
        <Card title="Add Candidates">
          <Input
            name="candidateId"
            type="text"
            id="candidateId"
            title="Candidate ID"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, candidateId: e.target.value };
              });
            }}
          />
          <Input
            name="candidateName"
            type="text"
            id="candidateName"
            title="Candidate Name"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, candidateName: e.target.value };
              });
            }}
          />
          <Input
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
            name="profile"
            id="profile"
            type="file"
            title="Profile"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, profile: e.target.value };
              });
            }}
          />
          <Input
            name="PostionName"
            id="positionName"
            type="text"
            title="Position"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, position: e.target.value };
              });
            }}
          />

          <Button
            type="submit"
            title="Submit"
            onClick={(e) => {
              handleClick(e);
            }}
          />
        </Card>
      </form>
    </div>
  );
};

export default AddCandidates;
