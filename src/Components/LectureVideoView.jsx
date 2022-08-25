import { Card, Box, Grid } from "@mui/material";
import VideoCall from "./LectureComponents/VideoCall";
import { useState } from "react";
import { useEffect } from "react";

export const LecturerDisplayView = (props) => {

    const [inCall, setInCall] = useState(true);


    return (

        <div className="lecture-display-layout" style={{width:"100%"}}>

        <Box p={2} className="lecturer-display-view">

            <div  style={{  width:"100%" }}> 

            <VideoCall uid={props.uid} token={props.token} setInCall={setInCall} datasets = {props.data.data} />

            </div>


        </Box>

        </div>




    );

}