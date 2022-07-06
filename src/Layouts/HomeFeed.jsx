import { Feed } from "../Components/Feed";
import { useNavigate } from "react-router";
import {BsQuestion} from 'react-icons/bs';
import { Box } from "@mui/material";
import { useEffect } from "react";
import {TimeLineComponent} from '../MuiComponents/TimeLine';
import axios from "axios";
import { conn } from "../util/conn";
import {config} from "../util/config";
import {useState} from 'react';
import {CircularProgress} from '@mui/material';
import { Loader } from "../Components/Loader";

export const HomeFeed =()=>{


  useEffect(()=>{

    FetchFeed();

  });

  const [feeds, setFeeds] = useState([]);
  const [isloading, setStatus] = useState(true);


  const FetchFeed = async ()=>{

    await axios.get(conn+"/api/resources", config).then((value)=>{

      if(value.status == "200"){
        setFeeds(value.data);
        setStatus(false);
        //console.log(value.data);
        
      }else{

      }

      

      

    })


  }


    return(

        <div className="home-feed" style={{width:"100%"}}>


          {

            (isloading)?(
             <Loader />
            ):(

              feeds.map((values, key)=>

                <span style={{display:"inline-flex", width:"100%", justifyContent:"center", padding:"10px"}}>

                <TimeLineComponent />       
        
                <Feed data={values} key={key} />
        
                </span>

              )

            )

          }
          
      

      



        {/* <span style={{display:"inline-flex", width:"100%", justifyContent:"center", padding:"10px"}}>

        <TimeLineComponent />


        <Feed />


      </span> */}


     

      

        

        

      




      



        </div>

    );

}