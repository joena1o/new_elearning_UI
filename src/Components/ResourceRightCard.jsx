import { Card, Grid, Avatar, Button, Box} from '@mui/material';
import {FiUser} from 'react-icons/fi'

export const ResourceRightCard = (props) => {

    return (

        <div className="resource-right-card">

            <Card variant="outlined" sx={{width:"90%",padding:"20px", margin:"20px 0px"}}>

                <Box >

                    <div style={{ width: "100%", paddingLeft: "5%", fontSize: "14px" }}>
                        <span style={{margin:"20px 0"}}><b>{props.data.courseCode}</b></span><br></br>
                        <span>{props.data.courseTitle}</span><br></br><br></br>
                        <p>Department: {props.data.department}</p>
                        <p>Lecturer: {props.data.lecturename}</p>
                    </div>

                    <div className='card-foot' style={{ textAlign: "end", fontSize: "14px" }}>
                        <Button variant="text" color='primary'>Join</Button>
                    </div>

                </Box>

            </Card>

        </div>

    );

}