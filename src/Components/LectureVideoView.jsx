import { Card, Box, Grid } from "@mui/material";
import VideoCall from "./LectureComponents/VideoCall";
import { useState } from "react";
import { useEffect } from "react";

export const LecturerDisplayView = (props) => {

    const [inCall, setInCall] = useState(true);

   

         console.log(props.data.data.createdBy);



    return (

        <div className="lecture-display-layout" style={{width:"100%"}}>

        <Box p={2} className="lecturer-display-view">

            <Card variant="outlined" sx={{  width:"100%" }}> 

            <VideoCall setInCall={setInCall} datasets = {props.data.data} />

            {/* {props.data.map((value)=>
                    <p>{value.createdBy}</p>
            )} */}

            

            </Card>


        </Box>

        </div>




    );

}