import { LecturerDisplayView } from "../Components/LectureVideoView";
import {Box, Grid} from '@mui/material';
import { StudentDisplayView } from "../Components/StudentDisplayView";

export const LectureDisplayLayout = ()=>{

    return(


        <div className="lecture-display-layout" style={{width:"100%"}}>

           <LecturerDisplayView />

           <Box className='students' p={3} spacing={1} >

                <Grid container>

                    <Grid item lg={3}>
                      <StudentDisplayView />
                    </Grid>

                    <Grid item lg={3}>
                    <StudentDisplayView />
                    </Grid>

                    <Grid item lg={3}>
                    <StudentDisplayView />
                    </Grid>

                    <Grid item lg={3}>
                    <StudentDisplayView />
                    </Grid>

                    <Grid item lg={3}>
                      <StudentDisplayView />
                    </Grid>

                    <Grid item lg={3}>
                    <StudentDisplayView />
                    </Grid>

                    <Grid item lg={3}>
                    <StudentDisplayView />
                    </Grid>

                    <Grid item lg={3}>
                    <StudentDisplayView />
                    </Grid>

                </Grid>


            </Box>

        </div>






    );

}