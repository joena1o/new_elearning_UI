import {Grid,Box, CircularProgress} from '@mui/material';
import { Feed } from '../Components/Feed';
import { ResourceFeed } from '../Components/ResourceFeed';
import {useState} from 'react';
import axios from 'axios';
import { conn } from '../util/conn';
import { useEffect } from 'react';

export const ResourceLayout = ()=>{


    useEffect(()=>{

        getResource();

    });


    const [resource, setResource] = useState([]);

    const [isloading, setStatus] = useState(true);


    const token = window.localStorage.getItem('token');


    const config = {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token)
          }
    };


    const getResource = async () =>{

        await axios.get(conn+"/api/resources", config).then((value)=>{

            

            if(value.statusText==="OK"){

                setResource((value.data));
                setStatus(false);
            }else{
                setStatus(false);
            }


        })

    }

    return(

        <div className="resource-layout" style={{padding:"20px", width:"100%"}}>


                <Grid container direction='row' sx={{flexGrow:"1", width:"100%"}}>




                    {
                        (isloading)?(
                            <Box sx={{width:"100%", height:"59vh", display:"inline-flex", alignItems:"center", justifyContent:"center"}}>
                    <CircularProgress color="warning" />
                    </Box>
                        ):(

                        
                                resource.map((value, key)=>(
        
                                    <Grid item lg={4} md={6} sm={6} xs={12} sx={{width:"90%", marginBottom:"10px"}}>
        
                                    <ResourceFeed data={value} key={key} />
             
                                 </Grid>
             
        
                                ))
                            

                        )


                    }


                
                    
                
                   


                   


                </Grid>


        </div>

    );

}