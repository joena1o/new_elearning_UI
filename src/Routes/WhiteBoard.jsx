import { Grid, Box } from "@mui/material";
import { SideBar } from "../Components/Sidebar";
import { WhiteLeft } from "../Components/WhiteBoardLeft";
import { WhiteBoardSidebar } from "../Components/WhiteboardSidebar";
import { WhiteBoardLayout } from "../Layouts/WhiteBoardLayout";


export const WhiteBoard = ()=>{

    return(

        <Box sx={{width:"100vw"}}>
            <Grid container direction='row' >
                <Grid item lg={1} md={1} sm ={2} xs={2} sx={{display:{sm:"block",lg:"block",md:"block", xs:"none"}}}>
                    <WhiteLeft />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={12}>
                <WhiteBoardLayout />
                </Grid>
                <Grid item lg={1} md={1}  sx={{display:{sm:"none",lg:"block",md:"block", xs:"none"}}}>
                    <WhiteBoardSidebar />
                </Grid>
            </Grid>

        </Box>

    );

}