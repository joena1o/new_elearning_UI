import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import {GiBookshelf} from 'react-icons/gi';
import {SiGoogleclassroom} from 'react-icons/si';
import {Box} from '@mui/material';

export const TimeLineComponent = (props)=>{

  

    return(


      
      

        <Box sx={{display:{sm:"none",xs:"none",lg:"block", md:"block"}, color:"grey"}}>


        
        <TimelineItem sx={(props.index !== props.len-1)?{height:"96%"}:{height:"0%"}}>
        <TimelineSeparator sx={{padding:"0 20px",fontSize:"22px"}} >
          <TimelineDot  sx={{backgroundColor:"transparent", color:"black"}}>
          {(!props.lecture)?<GiBookshelf  />:<SiGoogleclassroom />}
            </TimelineDot>
          <TimelineConnector  sx={{backgroundColor:"#e9e9e6"}} />
        </TimelineSeparator>
        </TimelineItem>


        </Box>

        

    );

}