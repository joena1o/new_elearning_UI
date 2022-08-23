import { useState, useEffect } from "react";
import {
  config,
  useClient,
  useMicrophoneAndCameraTracks,
  channelName,
} from "./settings.js";
import { CircularProgress, Grid } from "@mui/material";
import Video from "./Video";
import Controls from "./Controls";

export default function VideoCall(props) {
  // const { setInCall } = props;
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  const [loading, setStatus] = useState(true);

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
        await client.join(config.appId, name, config.token, null);
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