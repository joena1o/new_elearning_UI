import { Card, Grid, Avatar, Box } from "@mui/material";
import { VscPreview } from 'react-icons/vsc';
import { useNavigate } from "react-router";
import solidity from '../Assets/solidity.pdf#toolbar=0';

export const Feed = (props) => {

    const navigate = useNavigate();

    return (



        <Box className="feed" sx={{ width: { md: "75%", sm: "82%", lg: "67%", xs: "94%" } }} >
            <Card onClick={() => navigate(`bookview`, { state: { book: props.data } })} variant='outlined'>


                <div className="header">

                    <Grid container sx={{ justifyContent: "space-around", width: "100%" }} p={{ lg: 4, md: 3, sm: 3, xs: 3 }} spacing={{ md: 2, lg: 2 }}>

                        <Grid item lg={1} md={2} sm={2} xs={2} sx={{ alignItems: "center", justifyContent: "flex-end", width: "80%" }}>

                            <Avatar sx={{ width: { xl: 56, lg: 75, sm: 56, xs: 56 }, height: { xl: 56, lg: 75, sm: 56, xs: 56 }, backgroundColor: "antiquewhite", color: "black", fontWeight: "bold" }}>H</Avatar>

                        </Grid>

                        <Grid lg={1} xl={0}>

                        </Grid>



                        <Grid item lg={10} md={10} sm={10} xs={10} sx={{ alignItems: "center", textAlign: "start" }}>

                            <Box sx={{ width: { xs: "95%", md: "96%", sm: "95%", lg: "100%", xl: "  100%" }, fontSize: "14px", paddingLeft: { xs: "12%", md: "10%", sm: "10%", lg: "1%", xl: "1%" } }}>
                                <b>Joe Doe</b><br></br>
                                <p style={{ color: "#CE7248", margin:"8px 0px" }}><> {props.data.department}</></p>


                                <hr></hr>

                                <div className='card-bod'>
                                    <p><b>{props.data.title}</b></p>
                                    <p><> {(props.data.description).substring(0, 120)}...</></p><br></br>
                                </div>
                            </Box>

                            <iframe title='pdf' src={solidity} width="100%" height="200px" scrolling="no"  style={{overflow:"hidden"}} ></iframe>

                        
                            <br></br>
                            <hr></hr>
                            <br></br>

                            {/* <hr></hr> */}


                            <div className="card-foo" style={{ margin: "20px 0px", padding: "0 20px", width: "100%", textAlign: "end", fontSize: "15px", }}>
                                <VscPreview style={{ fontSize: '17px', marginRight: "10px" }} />  <span>Reviews</span>
                            </div>



                        </Grid>

                    </Grid>

                </div>



            </Card>

        </Box>


    );

}