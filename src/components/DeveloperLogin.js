import {useRef,useState,useEffect} from 'react'

import {Link, useNavigate} from 'react-router-dom';
import apiClient from '../http-common';

const DeveloperLogin = ()=>{

    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [developerName,setDeveloperName] = useState('');
    const [password,setPassword] = useState('');
    const [errMsg,setErrMsg] = useState();

    const [success, setSuccess] = useState(false);

    useEffect(()=>{userRef.current.focus()
    },[])

    useEffect(()=>{
        setErrMsg('');
    },[developerName,password])

    const submitHandler = async (e)=>{
        e.preventDefault();
        const response = await apiClient.post(`/developerLogin`,{developerName,password});
        setSuccess(true);
        localStorage.setItem('developerDetails',JSON.stringify(response.data));
        localStorage.setItem('devId',response.data.devId);
        console.log(response);
        navigate('/developercontroller');
        
    }

    return (

        <>
          {success ? (
           <section>

           successful!!!!
           <Link to ="/developerController"></Link>

           </section>

          ):(

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
             aria-live="assertive">{errMsg}</p>
             <h1>Sign In</h1>
             <form onSubmit={submitHandler}>

            <label htmlFor='developerName'>DeveloperName</label>
            <input type='text' 
            id='developerName'
            ref={userRef}
            autoComplete="off"
            onChange={(e)=>setDeveloperName(e.target.value)}
            value={developerName}
            required
    />
       <label htmlFor='password'>Password</label>
            <input
             type='password'
            id='password'
            autoComplete="off"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            required
    /><br></br>

   <button>Login </button>
             </form>
             <p> Need an account<br/>
            
        
                <Link to="/developer">Register</Link>
                </p>
        </section>
          )
}
        </>
     )

}

export default DeveloperLogin;