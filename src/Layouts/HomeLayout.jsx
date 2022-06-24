import { Grid, Box } from "@mui/material";
import { SideBar } from "../Components/Sidebar";
import { MainLayout } from "./MainLayout";
import {RightLayout} from './RightLayout';

export const HomeLayout = ()=>{

    return(

        <Box sx={{width:"100vw"}}>
            <Grid container direction='row' >
                <Grid item lg={1} md={1} sm ={2} xs={2} sx={{display:{sm:"block",lg:"block",md:"block", xs:"block"}}}>
                    <SideBar />
                </Grid>
                <Grid item lg={8} md={7} sm={10} xs={10}>
                <MainLayout />
                </Grid>
                <Grid item lg={3} md={4}  sx={{display:{sm:"none",lg:"block",md:"block", xs:"none"}}}>
                <RightLayout />
                </Grid>
            </Grid>

        </Box>

    );

}