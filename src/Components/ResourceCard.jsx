
import { Card, Grid, Avatar} from '@mui/material';
import {FiUser} from 'react-icons/fi'


export const ResourceCard = () => {


    return (

        <div className="resource-card">

           
           
            <Card variant="outlined" sx={{width:"90%", alignItems:"center", padding:"10px", margin:"10px 0px", justifyContent:"space-evenly"}}>

                <Grid container p={2} spacing={{md:2,lg:1}} sx={{width:'100%'}}>

                    <Grid item  lg={3} md={3}>
                    
                    <Avatar sx={{width:54, height:54, fontSize:"27px", backgroundColor:"antiquewhite", color:"black"}}> <FiUser /></Avatar>

                    </Grid>

                


                    <Grid item lg={9} md={9} sx={{flexGrow:"1"}}>

                       <div style={{width:"100%", paddingLeft:"5%", fontSize:"14px"}}>
                        Joe Doe<br></br>
                        <small>Department</small>
                        <p><small>21/07/22</small></p>
                        

                        <p>Book title goes here</p>
                        <p>Description goes here, all the time</p>
                       </div>

                       
                       
                    </Grid>
                    
                </Grid>
    

            </Card>

            



        </div>

    );

}