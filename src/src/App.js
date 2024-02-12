

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Myprofile from "./components/Myprofile";
import Guestuser from "./components/Guestuser";
import Employeedetails from "./components/Employeedetails";
import Recruitment from "./components/Recruitment";
import Training from "./components/Training";
import LoginCard from "./Login/LoginCard";
import Navbar from "./Login/Navbar";
import Login from "./Login/Login";
import Viewtraining from "./components/Viewtraining";
import Recruitmentview from "./components/Recruitmentview";
import Employeeview from "./components/Employeeview";
import GuestView from "./components/GuestView";
import Leavemanagement from "./Employeeside/Leave/Leavemanagement";
import Grievances from "./Employeeside/Grievance/Grievances";
import Rulesr from "./Employeeside/Rules/Rulesr";
import Homee from "./Employeeside/Homee";
import Profile from "./Employeeside/Profile/Profile";
import Performance from "./Employeeside/Performance/Performance";
import Registerform from "./Guestside/Registerform";
import Aptitude from "./Guestside/Aptitude";
import Logine from "./Employeeside/Logine";
import Calender from "./Guestside/Calender";

function App() {
  return (
    <div>
      <BrowserRouter>
      
       <Routes>
       <Route path='/'element={<Navbar/>}></Route>
       <Route path='/login' element={<LoginCard/>} />
       <Route path='/adlogin'element={<Login method="get"/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/Myprofile' element={<Myprofile/>}></Route>
       <Route path='/Guestuser' element={<Guestuser/>}></Route>
       <Route path='/Employeedetails' element={<Employeedetails/>}></Route>
       <Route path='/Recruitment' element={<Recruitment/>}></Route>
       <Route path='/Training' element={<Training/>}></Route>
       <Route path="/TrainingView" element={<Viewtraining/>}></Route>
       <Route path="/recruitmentview" element={<Recruitmentview/>}></Route>
       <Route path="/Employeeview" element={<Employeeview/>}></Route>
       <Route path="/GuestView" element={<GuestView/>}></Route>
       <Route path="/leave" element={<Leavemanagement/>} ></Route>
       <Route path="/Grievance" element={<Grievances/>} ></Route>
       <Route path="/eprofile" element={<Profile/>}></Route>
       <Route path="/rules" element={<Rulesr/>} ></Route>
       <Route path='/homee' element={<Homee/>}></Route>
       <Route path='/profile' element={<Profile/>}></Route>
       <Route path='/myper' element={<Performance/>}></Route>
       <Route path="/register" element={<Registerform/>}></Route>
       <Route path="/aptitude" element={<Aptitude/>}></Route>
       <Route path="/employeelogin" element={<Logine/>}></Route>
       <Route path="/calender" element={<Calender/>}></Route>
      </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;