import React, { useEffect, useState } from "react";
import { getLeaderboard } from '../../utils';

const Leaderboard = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const dashboardData = await getLeaderboard();
      setData(dashboardData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log('useEffect');
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      Leaderboard
      <button onClick={fetchData}>prueba</button>
    </div>
  );
};

export default Leaderboard;
