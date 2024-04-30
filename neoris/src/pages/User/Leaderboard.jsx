import React, { useEffect, useState } from "react";
import { getLeaderboard } from '../../utils';
import { DataGrid } from '@mui/x-data-grid';

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
  // example data = [
  //   {
  //     id_usuario: 'f76271b9-5d8f-48fb-aa73-90cb5d33fb3f',
  //     nombre: 'Adrian',
  //     apellido1: 'Galvan',
  //     pais: 'mexico',
  //     total_puntos_semana: 380
  //   }, .... ]

  const columns = [
    { field: 'id_usuario', headerName: 'ID Usuario', width: 200 },
    { field: 'nombre', headerName: 'Nombre', width: 150 },
    { field: 'apellido1', headerName: 'Apellido', width: 150 },
    { field: 'pais', headerName: 'País', width: 150 },
    { field: 'total_puntos_semana', headerName: 'Total Puntos Semana', width: 200 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        //loading={data.length === 0} 
        pageSize={5} 
      />
      <button onClick={fetchData}>Actualizar datos</button>
    </div>
  );
};

export default Leaderboard;