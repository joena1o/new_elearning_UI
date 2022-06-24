import { Avatar, Box, Card, Grid, CardMedia} from "@mui/material";

export const ResourceFeed = () => {

    return (

        <Box>

            <Card variant='outlined' sx={{ padding: "20px" }}>


                <CardMedia
                    sx={{marginBottom:"20px"}}
                    component="img"
                    height="140"
                    image="https://imgs.search.brave.com/zqTiqsDixqo0dUMEKGIMcOspGG_78BTW2ogimEgs4LQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/SGYxM3RkckVVYWhv/aXhIblNqaHRBSGFG/aiZwaWQ9QXBp"
                    alt="green iguana"
                />


                <Grid container direction='row' spacing={2} sx={{ alignItems: "flex-start", justifyContent: "flex-start", textAlign: "start" }}>

                    <Grid item>
                        <Avatar >H</Avatar>
                    </Grid>

                    <Grid item>

                        <p>Joe Doe</p>
                        <p>Department</p>

                    </Grid>

                </Grid>


            </Card>

        </Box>

    );


}