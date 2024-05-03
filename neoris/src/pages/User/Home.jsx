import React from "react";
import {FlexBetween, Header, UserProfileCards, UserStatCards, Bar, Leaderboard} from "../../components";
import {Box, Button } from "@mui/material";
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';

import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import {useStateContext} from "../../contexts/ContextProvider";



const Home = ({firstName, lastName, country, position}) => {
  const [open, setOpen] = React.useState(false);
  const {data, loading } = useStateContext();

  const navigate = useNavigate();

  const handleClickOpen = () => {
    navigate('/game');
  };

  if(loading){
    return <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-main-bg'></div>
    </div>
  }

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
            <VideogameAssetIcon sx={{ mr: "10px" }} />
            Continuar Juego
          </Button>
        </Box>
      </FlexBetween>
      <div className="grid grid-cols-1 gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 pt-6">
        <div className=" col-span-1 xs:col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 h-[50vh]">
          <UserProfileCards firstName={firstName} lastName={lastName} country={country} position={position} />
        </div>
        
        <div className=" col-span-2 xs:col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 h-[50vh]">
          <UserStatCards data={data}/>
        </div>

      </div>
      
      <div className="grid grid-cols-1 gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 pt-6">
        <div className=" col-span-1 xs:col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 h-[50vh]">
            <Card className="w-full h-full p-3">
              <Leaderboard condition={"true"}/>
            </Card>
        </div>
        
        <div className=" col-span-2 xs:col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 h-[50vh]">
            <Card className="w-full h-full p-3"><Bar data={data}/></Card>
        </div>
      </div>
    </Box>    
  );
};

export default Home