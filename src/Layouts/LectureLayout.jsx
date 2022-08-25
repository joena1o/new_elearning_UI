import { Grid, Box } from "@mui/material";
import { SideBar } from "../Components/Sidebar";
import { LectureChatLayout } from "./LectureChatLayout";
import { AttendanceLayout } from "./AttendanceLayout";
import { LecturerDisplayView } from "../Components/LectureVideoView";

export const LectureLayout = (props) => {

    return (

        <Box sx={{ width: "100vw" }}>
            <Grid container direction='row' >
                <Grid item lg={1} md={1} sm={2} xs={2} sx={{ display: { sm: "block", lg: "block", md: "block", xs: "block" } }}>
                    <SideBar />
                </Grid>
                <Grid item lg={8} md={7} sm={10} xs={10}>
                    <div className="lecture-center-layout" style={{ height: "90vh", overflowY: "scroll" }}>


                        <Grid container>

                            <Grid item lg={3}>
                                <AttendanceLayout />
                            </Grid>

                            <Grid item lg={9}>

                            <LecturerDisplayView  data={props.data} token={props.token} uid={props.uid} />


                            </Grid>

                        </Grid>



                    </div>
                </Grid>
                <Grid item lg={3} md={2} sx={{ display: { sm: "none", lg: "block", md: "block", xs: "none" } }}>
                    <LectureChatLayout />
                </Grid>
            </Grid>

        </Box>

    );

}