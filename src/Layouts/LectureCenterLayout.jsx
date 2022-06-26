import { Grid } from "@mui/material";
import { AttendanceLayout } from "./AttendanceLayout";
import { LectureDisplayLayout } from "./LectureDisplayLayout";

export const LectureCenterLayout = ()=>{

    return(

        <div className="lecture-center-layout" style={{height: "90vh", overflowY:"scroll"}}>


            <Grid container>

                <Grid item lg={3}>
                    <AttendanceLayout />
                </Grid>

                <Grid item lg={9}>

                    <LectureDisplayLayout />

                </Grid>

            </Grid>
           


        </div>

    );

} 
