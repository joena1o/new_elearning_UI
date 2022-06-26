import { Avatar, Box, Card, Grid, CardMedia} from "@mui/material";

export const ResourceFeed = () => {

    return (

        <Box sx={{width:"100%"}}>

            <Card variant='outlined' sx={{ padding: "10px", width:"100%" }}>


                <CardMedia
                    sx={{marginBottom:"20px"}}
                    component="img"
                    height="140"
                    image="https://imgs.search.brave.com/zqTiqsDixqo0dUMEKGIMcOspGG_78BTW2ogimEgs4LQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/SGYxM3RkckVVYWhv/aXhIblNqaHRBSGFG/aiZwaWQ9QXBp"
                    alt="green iguana"
                />


                <Grid container direction='row' spacing={7} sx={{ alignItems: "flex-start", justifyContent: "flex-start", textAlign: "start" }}>

                    <Grid item sx={{width:"18%", display:{md:"none",lg:'block',sm:"none",xs:"none"}}}>
                        <Avatar>H</Avatar>
                    </Grid>

                    <Grid item sx={{width:{md:"100%", lg:"79%", sm:"100%", xs:"100%"}}}>

                        <p><b>Joe Doe</b></p>
                        <p><small>Electrical / Electronics Engineering</small></p>

                        <div>
                            <p>EEE202</p>
                            <p>Description of the book is supposed to be shown here</p>
                        </div>


                    </Grid>

                </Grid>


            </Card>

        </Box>

    );


}