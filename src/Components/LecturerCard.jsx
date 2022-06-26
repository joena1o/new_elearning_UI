
import { Card, Grid, Avatar, Button, Box} from '@mui/material';
import {FiUser} from 'react-icons/fi'


export const LecturerCard = () => {


    return (

        <div className="lecturer-card">

           
           
            <Card variant="outlined" sx={{width:"90%", alignItems:"center", padding:"10px", margin:"10px 0px", justifyContent:"space-evenly"}}>

                <Grid container p={2} spacing={{md:2,lg:2}} sx={{width:'100%'}}>

                    <Grid item  lg={3} md={3}>
                    
                    <Avatar sx={{width:54, height:54, fontSize:"27px", backgroundColor:"antiquewhite", color:"black"}}> <FiUser /></Avatar>

                    </Grid>

                


                    <Grid item lg={9} md={9} sx={{flexGrow:"1"}}>

                       <div style={{width:"100%", paddingLeft:"5%", fontSize:"14px"}}>
                        Lecture Name<br></br>
                        <p>Department</p><br></br>
                       </div>

                       <div className='card-foot' style={{textAlign:"end", fontSize:"14px"}}>
                        <Button variant="text" color='primary'>Connect</Button>
                       </div>
                       
                    </Grid>
                    
                </Grid>
    

            </Card>

            



        </div>

    );

}