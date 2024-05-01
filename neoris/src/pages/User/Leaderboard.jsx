import React, { useEffect, useState } from "react";
import { getLeaderboard } from '../../utils';
import { DataGrid } from '@mui/x-data-grid';

const Leaderboard = ({condition}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const dashboardData = await getLeaderboard();
      const dataWithIds = dashboardData.map((item, index) => ({ ...item, id: index + 1}));
      setData(dataWithIds);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  let columns =[];

  if(condition == "true"){
    columns = [
      { field: 'id', headerName: 'Posición', width: 100 },
      { field: 'nombre', headerName: 'Nombre', width: 100 },
      { field: 'apellido1', headerName: 'Apellido', width: 100 },
      { field: 'pais', headerName: 'País', width: 100 },
      { field: 'total_puntos_semana', headerName: 'Puntos', width: 100 }
    ];
  } else{
    columns = [
      { field: 'id', headerName: 'Posición', width: 150 },
      { field: 'nombre', headerName: 'Nombre', width: 150 },
      { field: 'apellido1', headerName: 'Apellido', width: 150 },
      { field: 'pais', headerName: 'País', width: 150 },
      { field: 'total_puntos_semana', headerName: 'Total Puntos Semana', width: 200 }
    ];
  }


  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
    </div>
    </div>
  );
};

export default Leaderboard;