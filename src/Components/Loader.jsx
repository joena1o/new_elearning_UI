import Lottie from "lottie-react";
import groovyWalkAnimation from "../Assets/99678-loading.json";
import {Box, CircularProgress} from '@mui/material';


export const Loader = ()=>{

    const defaultOptions = {
        loop: true,
        autoplay: true, 
      };

    return(


        <Box sx={{width:"100%", height:"59vh", display:"inline-flex", alignItems:"center", justifyContent:"center"}}>
        <CircularProgress />
        </Box>

    );

}