import { LecturerDisplayView } from "../Components/LectureVideoView";
import {Box, Grid} from '@mui/material';
import { StudentDisplayView } from "../Components/StudentDisplayView";

export const LectureDisplayLayout = ()=>{

    return(


        <div className="lecture-display-layout" style={{width:"100%"}}>

           <LecturerDisplayView />

          

        </div>






    );

}