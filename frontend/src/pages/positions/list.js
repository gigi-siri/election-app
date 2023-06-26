import React, { useEffect, useState } from "react";
import { GetPositions } from "../../services/positions";
import { HeaderSmall } from "../../components/header";

const PositionsList = () => {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    LoadPositions();
    return () => {};
  }, []);
  const LoadPositions = async () => {
    const response = await GetPositions();
    setPositions(response.data.positions);
  };

  return (
    <div>
      <HeaderSmall title="Position List" />
      <table
        className="table-bordered"
        style={{ margin: "20px auto", width: "850px" }}
      >
        <thead>
          <tr>
            <th>Position Name</th>
            <th>Description</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {positions?.map((position, idx) => {
            return (
              <tr key={idx}>
                <td>{position?.positionName}</td>
                <td>{position?.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PositionsList;
