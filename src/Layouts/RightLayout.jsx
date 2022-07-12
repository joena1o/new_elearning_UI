
import {Box} from '@mui/material';
import { ResourceRightCard } from '../Components/ResourceRightCard';
import axios from 'axios';
import { conn } from '../util/conn';
import { useEffect, useState } from 'react';
import { Loader } from '../Components/Loader';

export const RightLayout = () => {


    const token = window.localStorage.getItem("token");

  const config = {
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(token)
      }
  };


    useEffect(()=>{

        fetchResource();

    });


    const [resources, setResource] = useState([]);


    const fetchResource = async ()=>{

        axios.get(conn+"/api/LectureRoom",config).then((value)=>{

    

            if(value.status == "200" || value.status == 200){

                setResource(value.data);

            }



        });

    } 

    return (


        <div class='right-layout' style={{height: "90vh", overflowY:"scroll"}}>

            

            <Box sx={{borderRight: '1px solid #d1d1d1', height:"90vh"}}>


        
                <div className='header'>

                    <b>Join Lectures</b>

                </div>


               {
               
               (resources!==[])?(<div>
                    
                    {
                        (resources).map((value)=>
                        
                        <ResourceRightCard data={value} />

                        )
                    }

                </div>):(<Loader /> )


                }

                

        

                
                

            </Box>



        </div>


    );

}