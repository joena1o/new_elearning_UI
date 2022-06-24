import { Card, Grid, Avatar,Box } from "@mui/material";
import {VscPreview} from 'react-icons/vsc';
import { useNavigate } from "react-router";

export const Feed = () => {

    const navigate = useNavigate();

    return (

        <Box className="feed" sx={{width:{md:"75%", sm:"80%", lg:"64%", xs:"90%"}}} onClick={()=>navigate("bookview")}>
            <Card variant='outlined'>


                <div className="header">

                    <Grid container sx={{justifyContent:"flex-start", width:"100%"}} p={{lg:6, md:3, sm:5, xs:2}} spacing={{ md: 2, lg: 2 }}>

                        <Grid item lg={1} md={2} sm={2} xs={2}  sx={{alignItems:"center", justifyContent:"flex-end", width:"90%"}}>

                            <Avatar sx={{ width: {xl:56, lg:50, sm:56, xs:56}, height:{xl:56, lg:50, sm:56, xs:56} }}>H</Avatar>

                        </Grid>



                        <Grid item lg={11} md={10} sm={10} xs={10} sx={{alignItems:"center", textAlign:"start"}}>

                            <Box sx={{width: {xs:"85%",md:"90%", sm:"90%", lg:"93%", xl:"90%"},fontSize:"14px", paddingLeft:{xs:"15%",md:"10%", sm:"10%", lg:"7%", xl:"10%"}}}>
                                Joe Doe<br></br>
                                <p>Biotechnology</p><br></br>

                                <div className='card-bod'>
                                     The title of this book actually goes here
                                </div>

                                <div className="card-foo" style={{margin:"20px 0px", width:"100%", textAlign:"end", fontSize:"15px", }}>
                                  <VscPreview style={{fontSize:'17px',marginRight:"10px"}} />  <span>Reviews</span>
                                </div>
 
                            </Box>

                            

                           

                        </Grid>

                    </Grid>

                </div>



            </Card>

        </Box>


    );

}