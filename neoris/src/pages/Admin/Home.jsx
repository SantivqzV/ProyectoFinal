import React, { useEffect } from "react";
import {FlexBetween, CourseCardsRender, Header, Map, Pie, SimpleLineChart} from "../../components";
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

  if(loading){
    return <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-main-bg'></div>
    </div>
  }

  let nuevosUsuarios = 0;
  let usuarios = 0;
  let curso = 0;
  let cursosPopulares
  let totalUsuarios = 0;
  let labelUsuarios = '';
  let labelCurso = '';
  let totalNuevosUsuarios = 0;
  let labelNuevosUsuarios = '';
  let nombreCursoMasPopular = '';
  let usoAplicacionPorHoraDia = [];

  try{
    nuevosUsuarios = data?.nuevos_usuarios;
    usuarios = data?.total_usuarios;
    curso = data?.curso_mas_popular;
    cursosPopulares = data?.cursos_populares;
    totalUsuarios = usuarios[0].total_usuarios;
    labelUsuarios = usuarios[0].pais ? usuarios[0].pais : 'Global';
    labelCurso = curso[0].pais ? curso[0].pais : 'Global';
    totalNuevosUsuarios = nuevosUsuarios[0].cantidad_nuevos_usuarios;
    labelNuevosUsuarios = nuevosUsuarios[0].pais ? nuevosUsuarios[0].pais : 'Global';
    nombreCursoMasPopular = curso[0].nombre_curso ? curso[0].nombre_curso : 'Global';
    usoAplicacionPorHoraDia = data?.uso_aplicacion_por_hora_dia;

    if(data){
      return (
        <Box m="1.5rem 2.5rem">
          <FlexBetween>
            <Header title="Dashboard" subtitle="Bienvenido a tu dashboard"/>
            
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
          <CourseCardsRender 
            totalUsuarios={totalUsuarios}
            labelUsuarios={labelUsuarios}
            labelCurso={labelCurso}
            totalNuevosUsuarios={totalNuevosUsuarios}
            labelNuevosUsuarios={labelNuevosUsuarios}
            nombreCursoMasPopular={nombreCursoMasPopular}
            className="p-20" />
          <div className="grid grid-cols-1 gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 pt-6">
            <div className=" col-span-1 xs:col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 h-[60vh]">
              {data ? (
                <Pie cursosPopulares={cursosPopulares}/>
              ): null}
              
            </div>
            <div className=" col-span-2 xs:col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 h-[60vh]">
              <SimpleLineChart data={usoAplicacionPorHoraDia} />
            </div>
          </div>
        </Box>
    
    // grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3
        
      );
    }  

  } catch (error) {
    window.location.reload();
    console.error(error);
  }

};

export default Home

