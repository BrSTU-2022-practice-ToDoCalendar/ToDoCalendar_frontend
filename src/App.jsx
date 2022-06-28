import { Route, Routes } from 'react-router';

import './env.css';
import './App.css';

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Task from './pages/Task/Task';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/task" element={<Task />} />
      <Route path="/task/:task_id" element={<Task />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
