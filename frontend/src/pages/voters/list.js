import React, { useEffect, useState } from "react";
import { DeleteVoter, GetVoters } from "../../services/voters";
import { HeaderSmall } from "../../components/header";
import { useNavigate } from "react-router-dom";

const VoterList = () => {
  const navigate = useNavigate();
  const [voters, setVoters] = useState([]);
  useEffect(() => {
    LoadVoters();
    return () => {};
  }, []);
  const LoadVoters = async () => {
    const response = await GetVoters();
    setVoters(response.data.voters);
  };
  const handleDelete = async (studentId) => {
    const res = await DeleteVoter(studentId);
    console.log(res);
    if (res.status === 204) {
      await LoadVoters();
    }
  };
  return (
    <div>
      <HeaderSmall title="Voter List" />
      <table
        className="table-bordered"
        style={{ margin: "20px auto", width: "850px" }}
      >
        <thead>
          <tr>
            <th scope="col">StudentID</th>
            <th scope="col">Student Name</th>
            <th scope="col">Email</th>
            <th scope="col">Telephone</th>
            <th scope="col">Exempt</th>
          </tr>
        </thead>
        <tbody>
          {voters?.map((voter, idx) => {
            return (
              <tr key={idx}>
                <td>{voter?.studentId}</td>
                <td>{voter?.studentName}</td>
                <td>{voter?.email}</td>
                <td>{voter?.telephone}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(voter?.studentId)}
                  >
                    Delete
                  </button>
                </td>{" "}
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => navigate(`edit/${voter?.studentId}`)}
                  >
                    Edit
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

export default VoterList;
