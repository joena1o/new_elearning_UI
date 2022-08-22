import { Card, Box, Grid } from "@mui/material";
import { FiMic } from 'react-icons/fi';
import { TbShare } from 'react-icons/tb';
import { BsCameraVideo } from 'react-icons/bs';
import { TiPencil } from 'react-icons/ti';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { VscBroadcast } from 'react-icons/vsc';
import VideoCall from "./LectureComponents/VideoCall";
import { StudentDisplayView } from "./StudentDisplayView";
import { useState } from "react";

export const LecturerDisplayView = () => {

    const [inCall, setInCall] = useState(true);

    return (

        <Box p={3} className="lecturer-display-view">

            <Card variant="outlined" sx={{  width:"100%" }}> 

            <VideoCall setInCall={setInCall} />

            </Card>


        </Box>




    );

}