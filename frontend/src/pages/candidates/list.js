import React, { useEffect, useState } from "react";
import { DeleteCandidate, GetCandidates } from "../../services/candidates";
import { HeaderSmall } from "../../components/header";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    LoadCandiates();
    return () => {};
  }, []);

  const LoadCandiates = async () => {
    const response = await GetCandidates();
    setCandidates(response.data.candidates);
  };

  const handleDelete = async (candidateId) => {
    const response = await DeleteCandidate(candidateId);
    console.log(response);
    if (response.status === 204) {
      await LoadCandiates();
    }
  };

  return (
    <div>
      <HeaderSmall title="CandidateList" />
      <table
        className="table-bordered"
        style={{ margin: "20px auto", width: "850px" }}
      >
        <thead>
          <tr>
            <th>CandidateId</th>
            <th>Name</th>
            <th>Telephone</th>
            <th>Profile</th>
            <th>Position</th>
            <th>Exempt</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, idx) => {
            return (
              <tr key={idx}>
                <td>{candidate?.candidateId}</td>
                <td>{candidate?.candidateName}</td>
                <td>{candidate?.telephone}</td>
                <td>{candidate?.profile}</td>
                <td>{candidate?.position}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(candidate?.candidateId);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-success">
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateList;
