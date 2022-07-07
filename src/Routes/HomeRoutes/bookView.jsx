import { Card, Avatar, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

import solidity from '../../Assets/solidity.pdf';
import {useEffect} from 'react';


export const BookView = () => {


    useEffect(()=>{

        //handleFile();

    });

    const location = useLocation();

    console.log(location.state.book.slug);


    // const handleFile = ()=>{

    //     var reader = new FileReader();
    //     reader.readAsDataURL(solidity);
    //     reader.onloadend = (e)=>{
    //         console.log(e.target.value);
    //     }

    // }



    return (

        <div className="book-view">


            <Card variant="outlined" sx={{ width: { lg: '75%', md: "80%", sm: "90%", xs: "100%" }, paddingTop: "30px", marginTop: { lg: "40px", md: "40px" } }}>

                <Box className='header' sx={{ alignItems: "flex-start", justifyContent: "flex-start", display: "inline-flex" }}>

                    <Box className='header-dp' sx={{ width: { sm: "0%", xs: "0%" } }}>

                        <Avatar color="warning" sx={{ width: { sm: 0, md: 45, xs: 0, lg: 60 }, height: { sm: 0, md: 45, xs: 0, lg: 60 }, fontSize: "45" }}>H</Avatar>

                    </Box>

                    <Box className='header-column' sx={{ width: { sm: "100%", xs: "100%" } }} >

                        <p><b>Joe Doe</b></p>
                        <p style={{color:"#CE7248"}}>{location.state.book.department}</p>
                        <p style={{fontStyle:"italic"}}><small>Published: {(location.state.book.createdAt).substring(0, 10)}</small></p>


                        <div className='book-detail'>
                            <small style={{fontStyle:"italic"}}>Course Title:</small> <span style={{textTransform:"uppercase", letterSpacing:"2px"}}>{location.state.book.title}</span>
                        </div>


                    </Box>

                </Box>



                <Box sx={{ padding: "30px"}}>

                   


                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">

                        <Viewer fileUrl={solidity} />
                      
                    </Worker>


                </Box>



            </Card>



        </div>


    );

}