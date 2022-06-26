import { Card, Box, Grid } from "@mui/material";
import { FiMic } from 'react-icons/fi';
import { TbShare } from 'react-icons/tb';
import { BsCameraVideo } from 'react-icons/bs';
import { TiPencil } from 'react-icons/ti';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { VscBroadcast } from 'react-icons/vsc';

export const LecturerDisplayView = () => {

    return (

        <Box p={3} className="lecturer-display-view">

            <Card variant="outlined" sx={{ height: "400px" }}> 

            </Card>


            <Box className='video-controllers' sx={{
                fontSize: "25px", justifyContent: "space-evenly", display: "inline-flex",
                padding: "20px", color:"red", backgroundColor:"lightgrey",
                width: "100%"
            }}>


                <VscBroadcast />
                <FiMic />
                <TbShare />
                <BsCameraVideo />
                <TiPencil />
                <AiOutlineCloseCircle />


            </Box>


            


        </Box>




    );

}