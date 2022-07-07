import {Box,Button,Card} from '@mui/material';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../../Assets/99118-class-test.json";
import HomeNavbar from '../../../../Components/HomeNavbar';

export const StudentAssessment = ()=>{

    return(

        <Box sx={{width:"100vw", height:"100vh"}}>


            <HomeNavbar/>

            <Box p={5} sx={{width:"100vw",height:"89vh", display:"inline-flex",justifyContent:"center",alignItems:"center"}}>

                <Card variant="outlined" p={5} sx={{width:"60%",padding:"30px", textAlign:"center"}}>
                    
                  

                    <Box p={4} sx={{fontWeight:"bold",textTransform:"uppercase",letterSpacing:"2px"}}>
                        
                        <p>Login to Preview Assessment</p>

                            <Box sx={{width:"200px", height:"200px"}}>
                        <Lottie animationData={groovyWalkAnimation} />
                            </Box>

                    </Box>

                    <form className="form-group" style={{textAlign:"start"}}>
                        <label>Student ID No.</label>
                        <input className='form-control' placeholder='Enter ID NO.' />
                        <label>Password</label>
                        <input className='form-control' placeholder='Enter password' /><br></br>

                        <Button variant="outlined" color="warning">
                            Check Assessment
                        </Button>

                    </form>

                </Card>

            </Box>



        </Box>

    )

}