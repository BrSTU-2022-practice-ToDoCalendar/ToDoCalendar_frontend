import {Route, Routes} from "react-router";
import "./App.css";
import SingIn from "./pages/SingIn/SingIn";
import SingUp from "./pages/SingUp/SingUp";
import ViewFrame from "./pages/ViewFrame/VIewFrame";
import GeneralFrame from "./pages/GeneralFrame/GeneralFrame";
import EditFrame from "./pages/EditFrame/EditFrame";
import Error404 from "./pages/Error404/Error404";

function App() {
    return (
        <Routes>
            <Route path="/" element={<SingIn/>}/>
            <Route path="/sing-in" element={<SingIn/>}/>
            <Route path="/sing-up" element={<SingUp/>}/>
            <Route path="/view-frame" element={<ViewFrame/>}/>
            <Route path="/general-frame" element={<GeneralFrame/>}/>
            <Route path="/edit-frame" element={<EditFrame/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    );
}

export default App;
