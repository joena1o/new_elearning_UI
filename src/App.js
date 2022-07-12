import './App.css';
import './Styles/landing.css';
import './Styles/Layouts.css';
import './Components.css';
import './Styles/Routes.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Routes/LandingPageRoute';
import LoginRoute from './Routes/LoginRoute';
import HomeRoute from './Routes/HomeRoute';
import { LectureRoute } from './Routes/LectureRoute';
import { WhiteBoard } from './Routes/WhiteBoard';
import { StudentAssessment } from './Routes/HomeRoutes/AssessmentRoutes/StudentAssessment/studentassessment';


function App() {
  return (
    <div className="App">

      <BrowserRouter>


        <Routes>

          <Route path='/' element={<LandingPage />} />

          <Route path='/login' element={<LoginRoute />} />

          <Route path='/home/*' element={<HomeRoute />}  />


          <Route path='/lecture/*' element={<LectureRoute />} />

          <Route path='/whiteboard' element={<WhiteBoard />}  />

          <Route path='/assessment' element={<StudentAssessment />} />

        

        </Routes>



      </BrowserRouter>




    </div>
  );
}

export default App;
