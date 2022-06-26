import { Box, Card } from "@mui/material";
import {BsMicMute} from 'react-icons/bs';

export const StudentDisplayView = ()=>{

    return(

        <Box className="student-display-view" sx={{width:"100%", display:"inline-flex",justifyContent:"center", margin:"10px 0"}}>

            <Card variant="outlined" sx={{width:"90%",height:"140px",display:"inline-flex",
            justifyContent:"flex-end",alignItems:"flex-end",width:"100%", padding:"20px", fontSize:"20px"}}>

                <BsMicMute />

            </Card>

        </Box>

    );

} 