import { Grid, Box } from "@mui/material";
import { SideBar } from "../Components/Sidebar";
import { LectureCenterLayout } from "./LectureCenterLayout";
import { LectureChatLayout } from "./LectureChatLayout";

export const LectureLayout = ()=>{

    return(

        <Box sx={{width:"100vw"}}>
            <Grid container direction='row' >
                <Grid item lg={1} md={1} sm ={2} xs={2} sx={{display:{sm:"block",lg:"block",md:"block", xs:"block"}}}>
                    <SideBar />
                </Grid>
                <Grid item lg={8} md={7} sm={10} xs={10}>
                <LectureCenterLayout />
                </Grid>
                <Grid item lg={3} md={2}  sx={{display:{sm:"none",lg:"block",md:"block", xs:"none"}}}>
                <LectureChatLayout />
                </Grid>
            </Grid>

        </Box>

    );

}