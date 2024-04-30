import React, { useEffect } from "react";
import {FlexBetween, Header, Map, CourseCards, Pie, SimpleLineChart} from "../../components";
import {Box, Button } from "@mui/material";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import PublicIcon from '@mui/icons-material/Public';
import { getAdminDashboard } from "../../utils";

import { useStateContext } from "../../contexts/ContextProvider";

const Home = () => {

  const [open, setOpen] = React.useState(false);
  const { data, loading} = useStateContext();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  ////
  const nuevosUsuarios = data?.nuevos_usuarios;
  const usuarios = data?.total_usuarios;
  const curso = data?.curso_mas_popular;
  const totalUsuarios = usuarios[0].total_usuarios;
  const labelUsuarios = usuarios[0].pais ? usuarios[0].pais : 'Global';
  const labelCurso = curso[0].pais ? curso[0].pais : 'Global';
  const totalNuevosUsuarios = nuevosUsuarios[0].cantidad_nuevos_usuarios;
  const labelNuevosUsuarios = nuevosUsuarios[0].pais ? nuevosUsuarios[0].pais : 'Global';
  const nombreCursoMasPopular = curso[0].nombre_curso ? curso[0].nombre_curso : 'Global';
  ////

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Dashboard" subtitle="Welcome to your dashboard"/>
        
        <Box>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={handleClickOpen}
          >
            <PublicIcon sx={{ mr: "10px" }} />
            Open Map
          </Button>
          <Dialog fullWidth maxWidth="xl" open={open} onClose={handleClose}>
            <DialogTitle sx={{ fontSize: '2rem', textAlign: 'center', fontWeight: 'bold' }}>World View</DialogTitle>
            <DialogContent style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Map />
            </DialogContent>
          </Dialog>
        </Box>
      </FlexBetween>
      <CourseCards 
        totalUsuarios={totalUsuarios}
        labelUsuarios={labelUsuarios}
        labelCurso={labelCurso}
        totalNuevosUsuarios={totalNuevosUsuarios}
        labelNuevosUsuarios={labelNuevosUsuarios}
        nombreCursoMasPopular={nombreCursoMasPopular}
        className="p-20" />
      <div className="grid grid-cols-1 gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 pt-6">
        <div className=" col-span-1 xs:col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 h-[60vh]">
          <Pie />
        </div>
        <div className=" col-span-2 xs:col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 h-[60vh]">
          <SimpleLineChart />
        </div>
      </div>
    </Box>

// grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3
    
  );
};

export default Home