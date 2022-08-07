import { Card, Avatar, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

import solidity from '../../Assets/solidity.pdf';
import {useEffect} from 'react';
import { conn } from '../../util/conn';


export const BookView = () => {


    const location = useLocation();

    console.log(location.state.book.attach);

    return (

        <div className="book-view">

            <iframe src={location.state.book.attach} width="100%" style={{height:"86vh"}}> </iframe>

        </div>


    );

}