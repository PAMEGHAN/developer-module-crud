/* /* import {Link} from 'react-router-dom';
const Home = ()=>{

    return(

        <section>
         <h1>Home</h1>
         <br/>
         
         <Link to ="register">Register</Link>
         <Link to ="login">Login</Link>

        </section>
    )
}

export default Home; */

/*import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { saveDetailsInLocalStorage } from "./Login";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = async () => {
        // if used in more components, this should be in context
        // axios to /logout endpoint
        setAuth({});
     
        navigate('/linkpage');
    }
    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/developer">Go to the Developer</Link>
            <br />
            <br />
            <Link to="/addFeed">Go to the FeedBacks</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}
export default Home */




const Home = ()=>{



    return(



        <div>
        <nav class ="navbar background">
         <div align='center'>
            <h3>Please register</h3>

         <a href="register"><button >Register</button></a>

         <h3>Already Registered please Login!!!!</h3>

           <a href="login"><button>Login</button></a>



           </div>  

        
       

         </nav>

        </div>

       

    )

}



export default Home;