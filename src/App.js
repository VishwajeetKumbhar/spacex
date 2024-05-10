
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import MissionDetails from './Components/MissionDetails';
import Hello from './Components/Hello';
function App() {

  return (
    <div >
      <Landing />
      <Routes>
        <Route exat path='/' element={<Hello />} />
        <Route path='/details/:id' element={<MissionDetails />} />
      </Routes>
    </div>
  );
}

export default App;
