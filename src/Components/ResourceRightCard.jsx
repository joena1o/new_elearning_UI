import { Card, Grid, Avatar, Button, Box} from '@mui/material';
import {FiUser} from 'react-icons/fi'

export const ResourceRightCard = () => {

    return (

        <div className="resource-right-card">

            <Card variant="outlined" sx={{width:"90%",padding:"20px", margin:"20px 0px"}}>

                <Box >

                    <div style={{ width: "100%", paddingLeft: "5%", fontSize: "14px" }}>
                        <span style={{margin:"20px 0"}}><b>BCH405</b></span><br></br>
                        <span>Introduction to biotechnology</span><br></br><br></br>
                        <p>Department</p>
                        <p>Lecturer: Dr Joe Doe</p>
                    </div>

                    <div className='card-foot' style={{ textAlign: "end", fontSize: "14px" }}>
                        <Button variant="text" color='primary'>Join</Button>
                    </div>

                </Box>

            </Card>

        </div>

    );

}