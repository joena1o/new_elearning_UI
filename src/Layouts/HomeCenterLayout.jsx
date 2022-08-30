import {Box} from '@mui/material';

import { HomeFeed } from './HomeFeed';
import { Route, Routes} from 'react-router-dom';
import {LectureRoute} from '../Routes/HomeRoutes/LectureRoute';
import { ResourceRoute } from '../Routes/HomeRoutes/ResourceRoute';
import { PastQA } from '../Routes/HomeRoutes/PastQA';
import { AssessmentRoute } from '../Routes/HomeRoutes/AssessmentRoute';
import { BookView } from '../Routes/HomeRoutes/bookView';
import { CourseRoute } from '../Routes/HomeRoutes/CourseRoute';
import { ProfileRoute } from '../Routes/HomeRoutes/ProfileRoute';
import { CourseGroup } from '../Routes/HomeRoutes/CourseRoutes/CourseGroup';

export const HomeCenterLayout = ()=>{

    return(

        <div className="main-layout" style={{height: "90vh", overflowY:"scroll"}}>


            <Box  sx={{height: "90vh" }}>



            <Routes>

            <Route exact path='/' element={<>

                
                <HomeFeed course={false} />


            </>}>
            
            </Route>

            <Route path='lecture'  element={<LectureRoute />} />
 
            <Route path='profile' element={<ProfileRoute />}  />


            <Route path='resource' element={<ResourceRoute />} />


            <Route path='bookview' element={<BookView />} />

            <Route path='quiz/*' element={<AssessmentRoute  />} />

            <Route path='course' element={<CourseRoute />}  />

            <Route path="courseview" element={<CourseGroup />} />



          

            </Routes>




               
                    

            </Box>

            

        </div>

    );

}