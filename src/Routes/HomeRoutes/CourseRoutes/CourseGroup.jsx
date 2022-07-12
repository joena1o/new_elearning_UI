import { Box } from "@mui/material";
import { CourseCardHeader } from "../../../Components/CourseCardHeader";
import {useLocation} from 'react-router-dom';

export const CourseGroup = ()=>{

    const location = useLocation();

    return(


        <Box sx={{width:"100%"}}>

            <CourseCardHeader data={location.state.data} />



        </Box>

    );

}