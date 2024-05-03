import React, { useEffect, useState } from "react";
import { getLeaderboard } from '../../utils';
import { DataGrid } from '@mui/x-data-grid';
import { Header } from "../../components";

const Leaderboard = () => {

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

  if(loading){
    return <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-main-bg'></div>
    </div>
  }

  console.log(data);

  const columns = [
    { field: 'id', headerName: 'Posición', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'nombre', headerName: 'Nombre', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'apellido1', headerName: 'Apellido', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'pais', headerName: 'País', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'total_puntos_semana', headerName: 'Puntos Totales Semana', flex: 1, align: 'center', headerAlign: 'center' }
  ];

  return (
    <div className="h-full w-full overflow-auto font-sans text-base p-5">
      <Header title="Leaderboard" subtitle=" Mejores puntajes de Neoris Quest " />
      <h2 className="mb-5 mt-10 text-lg">¡Ve quién está en la cima y sube en el ranking!</h2>
      <div className="h-full w-full overflow-auto">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Leaderboard;