import { Route, Routes } from 'react-router';

import 'toastr/build/toastr.min.css';
import './consts/colors.css';
import './App.css';

import HomeRedirectPage from './components/HomePages/HomeRedirectPage/HomeRedirectPage';
import HomeYearPage from './components/HomePages/HomeYearPage/HomeYearPage';
import HomeMonthPage from './components/HomePages/HomeMonthPage/HomeMonthPage';
import HomeDatePage from './components/HomePages/HomeDatePage/HomeDatePage';
import SignInPage from './components/SignPage/SignInPage';
import SignUpPage from './components/SignPage/SignUpPage';
import TaskPage from './components/TaskPage/TaskPage';
import Error404Page from './components/Error404Page/Error404Page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirectPage />} />
      <Route path="/:year" element={<HomeYearPage />} />
      <Route path="/:year/:month" element={<HomeMonthPage />} />
      <Route path="/:year/:month/:date" element={<HomeDatePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/task" element={<TaskPage />} />
      <Route path="/task/:taskId" element={<TaskPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}

export default App;
