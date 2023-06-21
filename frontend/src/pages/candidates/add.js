import React, { useState } from "react";
import Input from "../../components/input";
import Card from "../../components/card";
import Button from "../../components/button";

const AddCandidates = () => {
  const [state, setState] = useState({
    candidateName: "",
    telephone: "",
    profile: "",
    positions: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form>
        <Card title="Add Candidates">
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
            name="Postion"
            id="positionId"
            type="text"
            title="Position"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, positions: e.target.value };
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
