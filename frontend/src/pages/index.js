import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Voters from "./voters";
import AddVoter from "./voters/add";
import VoterList from "./voters/list";

import Candidates from "./candidates/index";
import AddCandidates from "./candidates/add";
import CandidateList from "./candidates/list";

import Positions from "./positions";
import AddPositions from "./positions/add";
import PositionsList from "./positions/list";
import EditVoter from "./voters/edit";

const MainApp = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route index element={<Dashboard />} />

        <Route path="voters" element={<Voters />}>
          <Route index element={<VoterList />} />
          <Route path="add" element={<AddVoter />} />
          <Route path="edit/:studentId" element={<EditVoter />} />
          <Route path="list" element={<VoterList />} />
        </Route>

        <Route path="candidates" element={<Candidates />}>
          <Route path="add" element={<AddCandidates />} />
          <Route path="list" element={<CandidateList />} />
        </Route>

        <Route path="positions" element={<Positions />}>
          <Route path="add" element={<AddPositions />} />
          <Route path="list" element={<PositionsList />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainApp;
