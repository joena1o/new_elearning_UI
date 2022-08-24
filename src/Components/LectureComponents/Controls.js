import { useState } from "react";
import { useClient } from "./settings";
import { Grid, Button } from "@mui/material";
import {BsCameraVideoOff, BsCameraVideo} from 'react-icons/bs';
import {MdOutlineExitToApp, MdScreenShare} from 'react-icons/md';
import {AiOutlineAudioMuted, AiOutlineAudio} from 'react-icons/ai';
import { useNavigate } from "react-router";


export default function Controls(props) {
  const client = useClient();

  const navigate = useNavigate();

  const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
    navigate("/home");
  };

  return (
    <>
    <Grid container  style={{width:"100%", marginBottom:"10px", padding:"20px", backgroundColor:"white",  fontSize:(!props.small)?"30px":"20px", justifyContent:"space-evenly"}}>
      <Grid item lg={3}>
        <Button
          color={trackState.audio ? "warning" : "secondary"}
          onClick={() => mute("audio")}
        >
          {trackState.audio ? <AiOutlineAudio style={{fontSize:(!props.small)?"30px":"20px"}} /> : <AiOutlineAudioMuted style={{fontSize:(!props.small)?"30px":"20px"}} />}
        </Button>
      </Grid>
      
      {(!props.small) && <Grid item lg={3}>
      <Button color='warning'>
        <MdScreenShare style={{fontSize:(!props.small)?"30px":"20px",}} />
      </Button>
      </Grid>}

      <Grid item lg={3}>
        <Button
        color="warning"
          onClick={() => mute("video")}
        >
          {trackState.video ? 
          <BsCameraVideo style={{fontSize:(!props.small)?"30px":"20px",}} /> : 
          <BsCameraVideoOff style={{fontSize:(!props.small)?"30px":"20px",}} />}
        </Button>
      </Grid>
      <Grid item lg={3}>
        <Button
        color="warning"
          onClick={() => leaveChannel()}
        >
          <MdOutlineExitToApp style={{fontSize:(!props.small)?"30px":"20px",}} />
        </Button>
      </Grid>
    </Grid>

    {/* <hr /> */}
    </>
  );
}
