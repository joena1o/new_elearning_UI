import { Avatar, Box, Card, Grid, CardMedia } from "@mui/material";
import solidity from '../Assets/solidity.pdf#toolbar=0';

export const ResourceFeed = (prop) => {

    return (

        <Box sx={{ width: "96%" }}>

            <Card variant='outlined' sx={{ padding: "10px", width: "100%", textAlign: "start" }}>


                {/* <CardMedia
                    sx={{ marginBottom: "20px" }}
                    component="img"
                    height="140"
                    image="https://imgs.search.brave.com/zqTiqsDixqo0dUMEKGIMcOspGG_78BTW2ogimEgs4LQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/SGYxM3RkckVVYWhv/aXhIblNqaHRBSGFG/aiZwaWQ9QXBp"
                    alt="green iguana"
                /> */}




                <iframe src={solidity} width="100%" height="100px" style={{margin:"20px 0px"}}></iframe>
                <hr></hr>



                <div style={{ padding: "10px 10px" }}>

                    <span style={{width:"100%", overflowX:"ellipsis", textOverflow:"fade"}}>{prop.data.title}</span>
                    <p style={{textTransform:"uppercase"}}><small>{prop.data.category}</small></p>
                    <p><small>EEE202</small></p>
                </div>


                <hr style={{backgroundColor:"#CE7248"}}></hr>

                <Grid container direction='row' spacing={7} sx={{ alignItems: "flex-start", justifyContent: "flex-start", textAlign: "start", padding: "0px 10px" }}>

                    <Grid item sx={{ width: "18%", display: { md: "none", lg: 'block', sm: "none", xs: "none" } }}>
                        <Avatar>H</Avatar>
                    </Grid>

                    <Grid item sx={{ width: { md: "100%", lg: "79%", sm: "100%", xs: "100%" } }}>

                        <b>Joe Doe</b>
                        <p><small>{prop.data.department}</small></p>




                    </Grid>

                </Grid>





            </Card>

        </Box>

    );


}