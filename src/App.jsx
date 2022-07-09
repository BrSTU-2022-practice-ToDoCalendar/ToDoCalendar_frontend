import { Route, Routes } from 'react-router';

import 'toastr/build/toastr.min.css';
import './consts/colors.css';
import './App.css';

import HomeRedirect from './pages/Home/HomeRedirect';
import Home from './pages/Home/Home';
import SignInPage from './components/SignPage/SignInPage';
import SignUpPage from './components/SignPage/SignUpPage';
import Task from './pages/Task/Task';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/:year/:month/:date" element={<Home />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/task" element={<Task />} />
      <Route path="/task/:task_id" element={<Task />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
