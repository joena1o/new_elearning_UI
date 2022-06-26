import { Grid,Box, Avatar } from "@mui/material";

export const AttendanceCard = ()=>{

    return(

        <Box className="attendance-card" sx={{width:"100%"}}>

            <Grid p={3} spacing={3} container direction='row' sx={{alignItems:"center"}}>

                <Grid item >
                    <Avatar sx={{backgroundColor:"antiquewhite", color:"black"}}>E</Avatar>
                </Grid>

                <Grid item sx={{fontSize:"15px"}}>
                    EEE/17U/1000
                </Grid>


            </Grid>


        </Box>

    );

}