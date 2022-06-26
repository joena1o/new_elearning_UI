import { Box, Button, Grid } from "@mui/material";

export const LectureChatLayout = ()=>{

    return(

        <div className="lecture-chat-layout" style={{height:"90vh"}}>


            <Box className='chat-header' sx={{padding:"20px",  height:"10vh"}}>

                Lecture Chat<hr></hr>

            </Box>


            <div className="lecture-chat-area" style={{height:"70vh",
             overflowY:"scroll"}}>


            </div>

            <Grid container direction='horizontal'  className="lecture-chat-field" sx={{height:"10vh",
            padding:"10px 10px"}}>

                <Grid item lg={9} className="lecture-chat-text">
                    <textarea className='form-control' placeholder='Type message here'>

                    </textarea>
                </Grid>

                <Grid item lg={3} className="lecture-chat-button">
                
                <Button variant="outlined">Send</Button>

                </Grid>



            </Grid>






        </div>


    );

}