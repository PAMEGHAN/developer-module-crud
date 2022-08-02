import { useNavigate } from "react-router-dom";

import '../App.css'

const LogoutDeveloper=()=>{
    const nav=useNavigate();
    localStorage.removeItem('developerDetails');
    nav('/')
}
export default LogoutDeveloper;