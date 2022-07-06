import {Avatar, Box,Card, Button} from '@mui/material';

export const ProfileRoute = ()=>{

    return (

        <div className="profile_route">


            <Box p={5}>

                <Card variant="outlined" sx={{display:"inline-flex", justifyContent:"center", width:"100%", flexDirection:"column", alignItems:"center", padding:"40px"}}>

                        <Avatar sx={{width:"85px", height:"85px", marginBottom:"20px"}}>
                            H
                        </Avatar>

                        <Box>
                            <p>Joe Doe</p>
                            <p>Department: Electrical Electronics Engineering</p>
                            <p>EEE/17U/0700</p>
                            <hr></hr>

                            <p><Button variant="outlined">Edit Profile</Button></p>
                        </Box>

                </Card>

            </Box>
            

        </div>

    );

}