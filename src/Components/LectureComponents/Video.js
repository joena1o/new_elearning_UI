import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid, Box } from "@mui/material";
import { useState, useEffect } from "react";
import Controls from "./Controls";

export default function Video(props) {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);

  const user = window.localStorage.getItem("reg");

  useEffect(() => {

    // users.filter((user)=>user.id==props.uid)

  }, [users, tracks]);





  return (
    <>
      {/* {(user===props.user) && */}

      {props.uid == 1 && <Grid container >
        <Grid item style={{ width: "100%" }}>
          <AgoraVideoPlayer
            videoTrack={tracks[1]}
            style={{ height: "400px", width: "100%" }}
          />
        </Grid>
      </Grid>

      }

      {props.uid == 1 && <Controls tracks={tracks} setStart={props.setStart} setInCall={props.setInCall} />}


      <Box className='students' p={3} spacing={1} >


        <Grid container spacing={2}>

        {props.uid != 1 &&  <Grid item lg={3}>
            <AgoraVideoPlayer
              videoTrack={tracks[1]}
              key={props.uid}
              style={{ height: "200px", width: "100%" }}
            />
          </Grid> }

        </Grid>

        <Grid container spacing={2}>


       

          {users.length > 0 &&
            users.map((user) => {
              if (user.videoTrack && props.uid != user.uid){
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
