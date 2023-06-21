import React, { useEffect, useState } from "react";
import { DeleteVoter, GetVoters } from "../../services/voters";

const VoterList = () => {
  const [voters, setVoters] = useState([]);
  useEffect(() => {
    LoadVoters();
    return () => {};
  }, []);
  const LoadVoters = async () => {
    const response = await GetVoters();
    // console.log(response);
    setVoters(response.data.voters);
  };
  const handleDelete = async (studentId) => {
    const res = await DeleteVoter(studentId);
    console.log(res);
    if (res.status === 201) {
      await LoadVoters();
    }
    alert(res.data.message);
  };
  return (
    <div>
      VoterList
      <table>
        <thead>
          <tr>
            <th>StudentID</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Telephone</th>
          </tr>
        </thead>
        <tbody>
          {voters?.map((voter, idx) => (
            <tr key={idx}>
              <td>{voter?.studentId}</td>
              <td>{voter?.studentName}</td>
              <td>{voter?.email}</td>
              <td>{voter?.telephone}</td>
              <td>
                <span onClick={() => handleDelete(voter?.studentId)}>
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VoterList;
