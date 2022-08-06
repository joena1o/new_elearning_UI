import { Feed } from "../Components/Feed";
import { useNavigate } from "react-router";
import {BsQuestion} from 'react-icons/bs';
import { Box } from "@mui/material";
import { useEffect } from "react";
import {TimeLineComponent} from '../MuiComponents/TimeLine';
import axios from "axios";
import { conn } from "../util/conn";
import {useState} from 'react';
import {CircularProgress} from '@mui/material';
import { Loader } from "../Components/Loader";
import emptyjson from '../Assets/629-empty-box.json';
import Lottie from "lottie-react";


export const HomeFeed = (props)=>{



  const config = {
    headers: {
        'Content-type': 'application/json',
        // 'Authorization': 'Bearer ' + JSON.parse(token)
      }
  };


  useEffect(()=>{

    FetchFeed();

    
  });


  

  const [feeds, setFeeds] = useState([]);
  const [isloading, setStatus] = useState(true);

  const [rou, setRou] = useState("/api/v1/public");
  const [filter, setFilter] = useState();
  const [empty, setEmpty] = useState(false);

  const FetchFeed = async ()=>{
    (filter===null)?setRou("/api/v1/public"):setRou("/api/v1/public/"+filter);
    await axios.get(conn+rou).then((value)=>{
      
      if(value.status == "200" && value.data.length > 0){
        console.log(value.data);
        setFeeds(value.data.reverse());
        setStatus(false);  
        setEmpty(false);
        console.log(value.data[0])
        return;
      }


      if(value.data.length == 0){
        // setStatus(false);
        // setEmpty(true);
      }
        
      

    }).catch((error)=>{

    });
  }


    return(
        <div className="home-feed" style={{width:"100%", padding:"20px 0px"}}>
          {
            (isloading)?(
             <Loader />
            ):(
              (empty===false)?
              feeds.map((values, key)=>

                <span style={{display:"inline-flex", width:"100%", justifyContent:"center", padding:"10px"}}>
                <TimeLineComponent index={key} len={feeds.length} />       
        
                <Feed data={values} key={key} course={props.course}/>
        
                </span>
              ):<div style={{marginTop:"20vh"}}>
                <Lottie animationData={emptyjson} />
                <p>No public resource</p>
                </div>
            )
          }
        </div>
    );

}