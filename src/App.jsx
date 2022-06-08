import { Route, Routes } from 'react-router';

import SingIn from "./pages/SingIn/SingIn";
import SingOut from "./pages/SingOut/SingOut";
import ViewFrame from "./pages/ViewFrame/VIewFrame";
import GeneralFrame from "./pages/GeneralFrame/GeneralFrame";
import EditFrame from "./pages/EditFrame/EditFrame";
import Error404 from "./pages/Error404/Error404"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Error404/>} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="/sing-out" element={<SingOut/>} />
        <Route path="/sing-out" element={<ViewFrame/>} />
        <Route path="/sing-out" element={<GeneralFrame/>} />
        <Route path="/sing-out" element={<EditFrame />} />
        <Route element={<Error404/>} />
      </Routes>
    </div>
  );
}

export default App;
