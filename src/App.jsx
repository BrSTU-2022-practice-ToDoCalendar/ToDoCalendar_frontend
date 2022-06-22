import { Route, Routes } from 'react-router';

import './env.css';
import './App.css';

import Home from './pages/Home/Home';
import SingIn from './pages/SingIn/SingIn';
import SingUp from './pages/SingUp/SingUp';
import Task from './pages/Task/Task';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sing-in" element={<SingIn />} />
      <Route path="/sing-up" element={<SingUp />} />
      <Route path="/task" element={<Task />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
