import React from "react";
import {FlexBetween, Header, Map, UserProfileCards, UserStatCards, Bar} from "../../components";
import {Box, Button } from "@mui/material";
import Card from '@mui/material/Card';
import {Leaderboard} from "..";
import { useNavigate } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import {useStateContext} from "../../contexts/ContextProvider";



const Home = ({firstName, lastName, country, position}) => {
  const [open, setOpen] = React.useState(false);
  const {data, loading } = useStateContext();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if(loading){
    return <div>Loading...</div>;
  }

  console.log(data);

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
            <VideogameAssetIcon sx={{ mr: "10px" }} />
            Continue Game
          </Button>
          <Dialog fullWidth maxWidth="xl" open={open} onClose={handleClose}>
            <DialogTitle sx={{ fontSize: '2rem', textAlign: 'center', fontWeight: 'bold' }}>World View</DialogTitle>
            <DialogContent style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Map />
            </DialogContent>
          </Dialog>
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
            <Card className="w-full h-full p-3"><Bar /></Card>
        </div>
      </div>
    </Box>    
  );
};

export default Home