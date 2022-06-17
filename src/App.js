import './App.css';
import './Styles/components.css';
import './Styles/Layouts.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashHomeRoute from './Routes/dashhomeRoutes';
import LectureRoutes from './Routes/LectureRoute';
import ResourceRoute from './Routes/ResourceRoute';
import BookRoute from './Routes/BookRoute';

function App() {
  return (
    <div className="App">

      <BrowserRouter>


        <Routes>

          <Route path='/' element={<DashHomeRoute />} />

          <Route path='/lecture' element={<LectureRoutes />} />

          <Route path='/resource' element={<ResourceRoute/>} />

          <Route path='/book' element={<BookRoute />} />

        </Routes>



      </BrowserRouter>




    </div>
  );
}

export default App;
