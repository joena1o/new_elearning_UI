import { Feed } from "../Components/Feed";
import { useNavigate } from "react-router";
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import {GiBookshelf} from 'react-icons/gi';
import {BsQuestion} from 'react-icons/bs';
import { Box } from "@mui/material";
import { useEffect } from "react";


export const HomeFeed =()=>{


    // useEffect(()=>{

    //   HomeFeedData().then((res)=>{
    //     console.log(res);
    //   });

    // }, []);


    return(

        <div className="home-feed" style={{width:"100%"}}>
          
      

      <span style={{display:"inline-flex", width:"100%", justifyContent:"center", padding:"10px"}}>

        <Box sx={{display:{sm:"none",xs:"none",lg:"block", md:"block"}, color:"grey"}}>
        <TimelineItem sx={{height:"100%"}}>
      <TimelineSeparator sx={{padding:"0 20px",fontSize:"22px"}} >
          <TimelineDot  sx={{backgroundColor:"transparent", color:"black"}}>
          <GiBookshelf  />
            </TimelineDot>
          <TimelineConnector  sx={{backgroundColor:"#e9e9e6"}} />
        </TimelineSeparator>
        </TimelineItem>
        </Box>


        <Feed />


      </span>


     

      

        

        

      




      



        </div>

    );

}