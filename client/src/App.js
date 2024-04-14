
import 'bootstrap/dist/css/bootstrap.min.css'

import './pages/questions.css'
import './assets/css/colors.css'
import Quesrions from './pages/Quesrions';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Outlet/>
    </div>
  );
}

export default App;
