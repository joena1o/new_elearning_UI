import { Grid, Box } from "@mui/material";
import { SideBar } from "../Components/Sidebar";
import { HomeCenterLayout } from "./HomeCenterLayout";
import {RightLayout} from './RightLayout';
import {Route,Routes} from 'react-router-dom';
import { ResourceRightLayout } from "./ResourceRightLayout";

export const HomeLayout = ()=>{

    return(

        <Box sx={{width:"100vw"}}>
            <Grid container direction='row' >
                <Grid item lg={1} md={1} sm ={2} xs={2} sx={{display:{sm:"block",lg:"block",md:"block", xs:"none"}}}>
                    <SideBar />
                </Grid>
                <Grid item lg={8} md={7} sm={10} xs={12}>
                <HomeCenterLayout />
                </Grid>
                <Grid item lg={3} md={4}  sx={{display:{sm:"none",lg:"block",md:"block", xs:"none"}}}>
                
                <Routes>
                    <Route path="/" element={<RightLayout />} />
                    <Route path='resource' element={<ResourceRightLayout />} />
                    <Route path="lecture" element={<RightLayout />} />
                    <Route path="profile" element={<RightLayout />} />
                    <Route path='quiz' element={<RightLayout />} />
                    <Route path='bookview' element={<ResourceRightLayout />} />
                    <Route path="course" element={<RightLayout />} />
                    
                </Routes>


                
                
                </Grid>
            </Grid>

        </Box>

    );

}