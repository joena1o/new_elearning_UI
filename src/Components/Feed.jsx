import { Card, Grid, Avatar, Box, CardMedia } from "@mui/material";
import { VscPreview } from 'react-icons/vsc';
import { useNavigate } from "react-router";

export const Feed = (props) => {

    const navigate = useNavigate();

    return (

        

        <Box  className="feed" sx={{ width: { md: "75%", sm: "82%", lg: "67%", xs: "94%" } }} >
            <Card  onClick={()=>navigate(`bookview`, { state: { book: props.data } } )} variant='outlined'>


                <div className="header">

                    <Grid container sx={{ justifyContent: "flex-start", width: "100%" }} p={{ lg: 4, md: 3, sm: 3, xs: 3 }} spacing={{ md: 2, lg: 2 }}>

                        <Grid item lg={1} md={2} sm={2} xs={2} sx={{ alignItems: "center", justifyContent: "flex-end", width: "90%" }}>

                            <Avatar sx={{ width: { xl: 56, lg: 50, sm: 56, xs: 56 }, height: { xl: 56, lg: 50, sm: 56, xs: 56 }, backgroundColor: "antiquewhite", color: "black", fontWeight: "bold" }}>H</Avatar>

                        </Grid>



                        <Grid item lg={11} md={10} sm={10} xs={10} sx={{ alignItems: "center", textAlign: "start" }}>

                            <Box sx={{ width: { xs: "95%", md: "96%", sm: "95%", lg: "70%", xl: "96%" }, fontSize: "14px", paddingLeft: { xs: "12%", md: "10%", sm: "10%", lg: "7%", xl: "10%" } }}>
                                Joe Doe<br></br>
                                <p><small> {props.data.department}</small></p>
                               

                                <hr></hr>

                                <div className='card-bod'>
                                    <p>{props.data.title}</p>
                                    <p><small> {(props.data.description)}</small></p><br></br>
                                </div>








                            </Box>


                            <CardMedia
                                sx={{ margin: "30px 0 0 0" }}
                                component="img"
                                height="170"
                                image="https://imgs.search.brave.com/zqTiqsDixqo0dUMEKGIMcOspGG_78BTW2ogimEgs4LQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/SGYxM3RkckVVYWhv/aXhIblNqaHRBSGFG/aiZwaWQ9QXBp"
                                alt="green iguana"
                            />
                            <Box  sx={{marginBottom:"30px", padding:"10px 15px", fontSize:"14px", backgroundColor:"#d1d1d1", width:"100%", display:"inline-flex",
                            flexDirection:{xs:"column", lg:"row", md:"row",sm:"row"},
                            justifyContent:"space-between"}}>

                                <Box>
                                    No of Pages: 86 
                                </Box>

                                <Box>
                                    Size: 181kb
                                </Box>

                            </Box>
                            <br></br>

                            {/* <hr></hr> */}


                            <div className="card-foo" style={{ margin: "20px 0px", padding:"0 20px", width: "100%", textAlign: "end", fontSize: "15px", }}>
                                <VscPreview style={{ fontSize: '17px', marginRight: "10px" }} />  <span>Reviews</span>
                            </div>



                        </Grid>

                    </Grid>

                </div>



            </Card>

        </Box>


    );

}