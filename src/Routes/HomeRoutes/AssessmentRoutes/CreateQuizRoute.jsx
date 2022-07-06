import { Box, Card, Button } from "@mui/material";

export const CreateQuizRoute = ()=>{

    return(

        <div className='create-route-quiz'>


            <Box className="header">

                Assessment Question

            </Box>


            <Box className="form-box" sx={{padding:"10px 40px"}}>


                <Box sx={{width:"100%", display:"inline-flex", justifyContent:"space-between"}}>

                    <p>Course title goes here</p>

                    <p>Question 1 out of 20</p>

                </Box>


                <hr></hr>

                <Box  sx={{padding:"20px"}}>


                    <form className="form-group">

                        <input type="text" className="form-control" style={{height:"100px"}} placeholder="Type Instruction here or hint" />
                        <input type="text" className="form-control" style={{height:"150px"}} placeholder="Type Question here" />

                        <label style={{textAlign:"start"}}>Options</label><br></br>

                        <Box sx={{display:"inline-flex", justifyContent:"space-evenly", width:"100%"}}>
                            <Box sx={{width:"90%"}}>
                            <input type="text" style={{height:"60px"}} className="form-control" placeholder="Option A" />
                            </Box>
                            <Box sx={{display:"inline-flex",alignItems:"center"}}>
                            <input type="radio" name="answer" />
                            </Box>
                        </Box>

                        <Box sx={{display:"inline-flex", justifyContent:"space-evenly", width:"100%"}}>
                            <Box sx={{width:"90%"}}>
                            <input type="text" style={{height:"60px"}} className="form-control" placeholder="Option B" />
                            </Box>
                            <Box sx={{display:"inline-flex",alignItems:"center"}}>
                            <input type="radio" name="answer" />
                            </Box>
                        </Box>

                        <Box sx={{display:"inline-flex", justifyContent:"space-evenly", width:"100%"}}>
                            <Box sx={{width:"90%"}}>
                            <input type="text" style={{height:"60px"}} className="form-control" placeholder="Option C" />
                            </Box>
                            <Box sx={{display:"inline-flex",alignItems:"center"}}>
                            <input type="radio" name="answer" />
                            </Box>
                        </Box>

                        <Box sx={{display:"inline-flex", justifyContent:"space-evenly", width:"100%"}}>
                            <Box sx={{width:"90%"}}>
                            <input type="text" style={{height:"60px"}} className="form-control" placeholder="Option D" />
                            </Box>
                            <Box sx={{display:"inline-flex",alignItems:"center"}}>
                            <input type="radio" name="answer" />
                            </Box>
                        </Box>

                        <Box sx={{display:"inline-flex", justifyContent:"space-evenly", width:"100%"}}>
                            <Box sx={{width:"90%"}}>
                            <input type="text" style={{height:"60px"}} className="form-control" placeholder="Option E" />
                            </Box>
                            <Box sx={{display:"inline-flex",alignItems:"center"}}>
                            <input type="radio" name="answer" />
                            </Box>
                        </Box>

                    <hr></hr>

                        <Box sx={{display:"inline-flex",justifyContent:"space-between", width:"100%", marginTop:"30px"}}>

                            <Box>
                            <Button variant="outlined" color="warning">
                                Prev Question
                            </Button>
                            </Box>

                            <Box>
                            <Button variant="outlined" color="warning">
                                Next Question
                            </Button>
                            </Box>

                        </Box>
                        

                    </form>



                </Box>



            </Box>

            

        </div>

    );

}