import './App.css';
import './Styles/landing.css';
import './Styles/Layouts.css';
import './Styles/Components.css';
import './Styles/Routes.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Routes/LandingPageRoute';
import LoginRoute from './Routes/LoginRoute';
import HomeRoute from './Routes/HomeRoute';
import { LectureRoute } from './Routes/LectureRoute';

function App() {
  return (
    <div className="App">

      <BrowserRouter>


        <Routes>

          <Route path='/' element={<LandingPage />} />

          <Route path='/login' element={<LoginRoute />} />

          <Route path='/home/*' element={<HomeRoute />}  />


          <Route path='/lecture/*' element={<LectureRoute />} />

        

        </Routes>



      </BrowserRouter>




    </div>
  );
}

export default App;
