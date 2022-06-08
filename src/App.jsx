import { Route, Routes } from "react-router";

import SingIn from "./pages/SingIn/SingIn";
import SingOut from "./pages/SingOut/SingOut";
import ViewFrame from "./pages/ViewFrame/VIewFrame";
import GeneralFrame from "./pages/GeneralFrame/GeneralFrame";
import EditFrame from "./pages/EditFrame/EditFrame";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="/sing-out" element={<SingOut />} />
        <Route path="/view-frame" element={<ViewFrame />} />
        <Route path="/general-frame" element={<GeneralFrame />} />
        <Route path="/edit-frame" element={<EditFrame />} />
        <Route element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
