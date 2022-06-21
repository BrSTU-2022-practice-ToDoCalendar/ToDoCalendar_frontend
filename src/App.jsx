import { Route, Routes } from 'react-router';

import './env.css';
import './App.css';

import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ViewFrame from './pages/ViewFrame/VIewFrame';
import GeneralFrame from './pages/GeneralFrame/GeneralFrame';
import EditFrame from './pages/EditFrame/EditFrame';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <Routes>
      <Route path='/' element={<GeneralFrame />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/view-frame' element={<ViewFrame />} />
      <Route path='/edit-frame' element={<EditFrame />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

export default App;
