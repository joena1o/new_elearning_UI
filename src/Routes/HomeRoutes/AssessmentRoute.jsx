import {Button,  Box, Modal, Typography } from '@mui/material';
import { useState } from "react";
import { AssessmentHeader } from '../../Components/AssessmentHeader';
import { CreateQuizRoute } from './AssessmentRoutes/CreateQuizRoute';
import { Assessment } from './AssessmentRoutes/Assessments';
import { Route, Routes } from 'react-router';


export const AssessmentRoute = () => {
   
    const user = window.localStorage.getItem("user_type");

    return (


        <div className="assessment-route" style={{width:"100%"}}>


            {/* <Assessment /> */}


            <Routes>

                

                <Route exact path='/' element={<Assessment />} />

                <Route path='setquiz' element={<CreateQuizRoute />} />

            </Routes>


            



            
            


        </div>




    );


}