import { Feed } from "../Components/Feed";
import { useNavigate } from "react-router";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {GiBookshelf} from 'react-icons/gi';
import {BsQuestion} from 'react-icons/bs';
import { Box } from "@mui/material";

export const HomeFeed =()=>{

    return(

        <div className="home-feed" style={{width:"100%"}}>


            {/* <Feed />
            <Feed />
            <Feed />
            <Feed />
            <Feed />
            <Feed /> */}


{/* <span style={{display:"inline-flex", width:"100%", alignItems:"center", justifyContent:"center", padding:"10px"}}>

<Box sx={{display:{sm:"block",xs:"none",lg:"block", md:"block"}}}>
<TimelineItem sx={{height:"100%"}}>
<TimelineSeparator sx={{padding:"0 20px",fontSize:"22px"}} >
  <TimelineDot  variant="outlined" color="success">
  <GiBookshelf  />
    </TimelineDot>
  <TimelineConnector  sx={{backgroundColor:"#e9e9e6"}} />
</TimelineSeparator>
</TimelineItem>
</Box>


<p>Home</p>


</span> */}


      

      <span style={{display:"inline-flex", width:"100%", justifyContent:"center", padding:"10px"}}>

        <Box sx={{display:{sm:"block",xs:"none",lg:"block", md:"block"}}}>
        <TimelineItem sx={{height:"100%"}}>
      <TimelineSeparator sx={{padding:"0 20px",fontSize:"22px"}} >
          <TimelineDot  variant="outlined" color="success">
          <GiBookshelf  />
            </TimelineDot>
          <TimelineConnector  sx={{backgroundColor:"#e9e9e6"}} />
        </TimelineSeparator>
        </TimelineItem>
        </Box>


        <Feed />


      </span>


      <span style={{display:"inline-flex", width:"100%", justifyContent:"center", padding:"10px"}}>

        <Box sx={{display:{sm:"block",xs:"none",lg:"block", md:"block"}}}>
            <TimelineItem sx={{height:"100%"}}>
            <TimelineSeparator sx={{padding:"0 20px",fontSize:"24px"}}>
            <TimelineDot  variant="outlined" color="success">
          <BsQuestion  />
            </TimelineDot>
          <TimelineConnector sx={{backgroundColor:"#e9e9e6"}} />
        </TimelineSeparator>
        </TimelineItem>

        </Box>


        <Feed />
        


      </span>


      <span style={{display:"inline-flex", width:"100%", justifyContent:"center", padding:"10px"}}>

        <Box sx={{display:{sm:"block",xs:"none",lg:"block", md:"block"}}}>
            <TimelineItem sx={{height:"100%"}}>
            <TimelineSeparator sx={{padding:"0 20px",fontSize:"24px"}}>
            <TimelineDot  variant="outlined" color="success">
          <GiBookshelf  />
            </TimelineDot>
            
          <TimelineConnector sx={{backgroundColor:"#e9e9e6"}} />
        </TimelineSeparator>
        </TimelineItem>

        </Box>


        <Feed />
        


      </span>

      

        

        

      




      



        </div>

    );

}