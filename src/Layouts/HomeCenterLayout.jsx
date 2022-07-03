import {Box} from '@mui/material';
import { Departments } from '../Components/Departments';
import { HomeFeed } from './HomeFeed';
import { Route, Routes} from 'react-router-dom';
import {LectureRoute} from '../Routes/HomeRoutes/LectureRoute';
import { ResourceRoute } from '../Routes/HomeRoutes/ResourceRoute';
import { PastQA } from '../Routes/HomeRoutes/PastQA';
import { AssessmentRoute } from '../Routes/HomeRoutes/AssessmentRoute';
import { BookView } from '../Routes/HomeRoutes/bookView';
import { CourseRoute } from '../Routes/HomeRoutes/CourseRoute';

export const HomeCenterLayout = ()=>{

    return(

        <div className="main-layout" style={{height: "90vh", overflowY:"scroll"}}>


            <Box  sx={{height: "90vh", borderRight:'1px solid #d1d1d1' }}>



            <Routes>

            <Route exact path='/' element={<>

                <Departments />
                <HomeFeed />


            </>}>
            
            </Route>

            <Route path='lecture'  element={<LectureRoute />} />
 

            <Route path='resource' element={<ResourceRoute />} />


            <Route path='bookview' element={<BookView />} />

            <Route path='Quiz' element={<AssessmentRoute  />} />

            <Route path='course' element={<CourseRoute />}  />



          

            </Routes>




               
                    

            </Box>

            

        </div>

    );

}