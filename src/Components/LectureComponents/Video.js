import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid, Box } from "@mui/material";
import { useState, useEffect } from "react";
import Controls from "./Controls";

export default function Video(props) {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);

  const user = window.localStorage.getItem("reg");

  useEffect(() => {

    console.log(props.user===user);
  }, [users, tracks]);


  //console.log("Users Entered:" +JSON.stringify(users));
  

  return (
    <>
     {/* {(user===props.user) && */}
     
     <Grid container >
        <Grid item style={{ width: "100%" }}>
          <AgoraVideoPlayer
            videoTrack={tracks[1]}
            style={{ height: "400px", width: "100%" }}
          />
        </Grid>
      </Grid>
      
      {<Controls tracks={tracks} setStart={props.setStart} setInCall={props.setInCall} /> }


      <Box className='students' p={3} spacing={1} >

        <Grid container spacing={2}>

          {users.length > 0 &&
            users.map((user) => {
              if (user.videoTrack) {
                return (
                  <Grid item lg={3}>
                    <AgoraVideoPlayer
                      videoTrack={user.videoTrack}
                      key={user.uid}
                      style={{ height: "200px", width: "100%" }}
                    />
                  </Grid>
                );
              } else return null;
            })}




        </Grid>


      </Box>

    </>
  );
}
