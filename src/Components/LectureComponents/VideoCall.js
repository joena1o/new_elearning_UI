import { useState, useEffect } from "react";
// import {
//   config,
//   useClient,
//   useMicrophoneAndCameraTracks,
//   channelName,
// } from "./settings.js";
import { CircularProgress, Grid } from "@mui/material";
import Video from "./Video";
import Controls from "./Controls";
import { useParams } from "react-router-dom";
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";



export default function VideoCall(props) {
  // const { setInCall } = props;


 
  console.log("This is the token ", props.token);
  console.log("This is the passcode ", props.datasets.passcode);

  // alert(props.token);

  const appId = "ba0c7397a38640cca781bc8dbcd73063";
  const token  = props.token;
  // const token = null;
   const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
   const useClient = createClient(config);
   const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
   const channelName = props.datasets.passcode;

  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  const [loading, setStatus] = useState(true);

  const user = useParams();


  console.log((props.datasets.passcode));


  useEffect(() => {
    let init = async (name) => {


      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return [...prevUsers, user];
          });
        }
        if (mediaType === "audio") {
          user.audioTrack.play();
        }
      });

      client.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "audio") {
          if (user.audioTrack) user.audioTrack.stop();
        }
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        }
      });

      client.on("user-left", (user) => {
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });

      try {
        await client.join(config.appId, props.datasets.passcode, props.token, props.uid);
      } catch (error) {
        console.log(error);
      }

      await client.publish([tracks[0], tracks[1]]);
      //await client.publish([tracks[1]]);

      setStart(true);
    }

    if (ready && tracks) {
      try {
         init(channelName);
         setStatus(false);
      } catch (error) {
        console.log(` this is the issue $error`);
      }
    }
  }, [client, ready, tracks]);

  return (
    <Grid container direction="column">
      
      <Grid item style={{ height: "95%" }}>
        {start && tracks && <Video tracks={tracks} users={users} user={props.datasets.createdBy} setStart={setStart} setInCall={props.setInCall} />}
        {loading && <CircularProgress />}
      </Grid>
      <Grid item style={{ height: "10%" }}>
        {ready && tracks && (
          // <Controls tracks={tracks} setStart={setStart} setInCall={props.setInCall} />
           <></>
        )}
      </Grid>
    </Grid>
  );
}
