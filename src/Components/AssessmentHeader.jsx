import { Box, Button } from "@mui/material";

export const AssessmentHeader = ()=>{


    return(

        <Box className="assessment-header">

            <div className="header-label">
                Assessments
            </div>

            <div>
                <Button variant="outlined">Create Assessment</Button>
            </div>

        </Box>

    );


}