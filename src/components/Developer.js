/* import { useEffect,useState } from "react";
import {Link} from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axiosInstance from "../http-common";

function Developer(){
const DEVELOPER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@!%]).{8,20}$/;
const EMAIL_REGEX=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const REPUTATION_REGEX=/[0-9]/;
const TOTALFEEDS_REGEX=/[0-9]/;
const REGISTER_URL = '/developer';

const [developerName,setDeveloperName]=useState('')
const [validName,setValidName]=useState(false);

const [password,setPassword] = useState('');
const[validPassword,setValidPassword]=useState(false);

const [matchPassword,setMatchPassword] = useState('');
const [validMatch, setValidMatch] = useState(false);

const [email,setEmail]=useState('');
const [validEmail,setValidEmail]= useState(false);

const [matchEmail,setMatchEmail] = useState('');
const [validEmailMatch, setValidEmailMatch] = useState(false);


const [reputation,setReptation]=useState('');
const [validReputation,setValidReputation]=useState(false);

const [matchReputation,setReputation] = useState('');
const [validReputationMatch, setValidReputationMatch] = useState(false);

const [totalFeeds,setTotalFeeds]=useState('');
const [validTotalFeeds,setValidTotalFeeds]=useState(false);

const [matchTotalFeeds,setTotalFeeds] = useState('');
const [validTotalFeedsMatch, setValidTotalFeedsMatch] = useState(false);

const [skillLevel,setSkillLevel]=useState('');
const [validSkillLevel,setValidSkillLevel]=useState(false);

const [errMsg,setErrMsg]=useState('');
const [success,setSuccess] = useState(false);


useEffect(()=>{
    setValidName(DEVELOPER_REGEX.test(developerName));

},[developerName])

useEffect(()=>{
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password=== matchPassword)
},[password,matchPassword]);

useEffect(()=>{
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password=== matchPassword)
},[password,matchPassword]);

useEffect(()=>{
    setValidEmail(EMAIL_REGEX.test(email));
    setValidMatch(email=== matchEmail)
},[email,matchEmail]);

useEffect(()=>{
    setValidReputation(REPUTATION_REGEX.test(reputation));
    setValidMatch(reputation=== matchReputation)
},[reputation,matchReputation]);

useEffect(()=>{
    setValidTotalFeeds(TOTALFEEDS_REGEX.test(totalFeeds));
    setValidMatch(totalFeeds=== matchTotalFeeds)
},[totalFeeds,matchTotalFeeds]);

useEffect(()=>{
    setErrMsg('');
},[developerName,password,matchPassword])

const handleSubmit =async (e)=>{
    e.preventDefault();
    const v1 = DEVELOPER_REGEX.test(developerName);
    const v2 = PWD_REGEX.test(password);
   
    if(!v1 || !v2){
      setErrMsg("Invalid Entry");
      return;
    }
  try{
    
  const response = await axiosInstance.post(REGISTER_URL,
    JSON.stringify({ developerName, password }),
    setSuccess(true),
    {
        headers: { 'Content-Type': 'application/json' }

    }
);
console.log(response?.data);
const token  = response?.data.token;
        const roles=response?.data.roles;
        
        localStorage.setItem('developerDetails',JSON.stringify(response.data))
  }
  catch(err){
      if (!err?.response) {
          setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
          setErrMsg('Username Taken');
      } else {
          setErrMsg('Registration Failed')
      }
    
  }

  }

  return(

        

    <>
    {success ? (
        <section>

           <h1>Success!</h1>
           <p>
            <Link to = "/developerLogin">Login In</Link>
           </p>


        </section>
    ):(
        <section>
             
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="developerName">DeveloperName
          <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
           <FontAwesomeIcon icon={faTimes} className={validName || !developerName ? "hide" : "invalid"} />
          </label>
          <input 
          type='text'
          id='developerName'
          
          autoComplete='off'
          onChange={(e)=>setDeveloperName(e.target.value)}
         
          value={developerName}
       
          />
          
          
          <label>Password
          <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
          </label>
          <input 
          type='password'
          id='password'
          onChange={(e)=>setPassword(e.target.value)}
         
          value={password}/>



                       <label>Confirm Password
                       <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
                           <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"} />
                       </label>
                       <input
                       type='password'
                       id='confirmpwd'
                       value={matchPassword}
                       onChange={(e)=>setMatchPassword(e.target.value)}
                       
                       />

<label htmlFor="email">Email
          <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
           <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
          </label>
          <input 
          type='text'
          id='email'
          
          autoComplete='off'
          onChange={(e)=>setEmail(e.target.value)}
         
          value={email}
       
          />

<label htmlFor="reputation">Reputation
          <FontAwesomeIcon icon={faCheck} className={validReputation ? "valid" : "hide"} />
           <FontAwesomeIcon icon={faTimes} className={validReputation || !email ? "hide" : "invalid"} />
          </label>
          <input 
          type='number'
          id='reputation'
          
          autoComplete='off'
          onChange={(e)=>setReptation(e.target.value)}
         
          value={reputation}
       
          />

<label htmlFor="totalFeeds">Total Feeds
          <FontAwesomeIcon icon={faCheck} className={validTotalFeeds? "valid" : "hide"} />
           <FontAwesomeIcon icon={faTimes} className={validTotalFeeds || !totalFeeds ? "hide" : "invalid"} />
          </label>
          <input 
          type='number'
          id='totalFeeds'
          
          autoComplete='off'
          onChange={(e)=>setTotalFeeds(e.target.value)}
         
          value={totalFeeds}
       
          />

<label htmlFor="skillLevel">skillLevel
          <FontAwesomeIcon icon={faCheck} className={validSkillLevel ? "valid" : "hide"} />
           <FontAwesomeIcon icon={faTimes} className={validSkillLevel || !skillLevel ? "hide" : "invalid"} />
          </label>
          <input 
          type='text'
          id='skillLevel'
          
          autoComplete='off'
          onChange={(e)=>setSkillLevel(e.target.value)}
         
          value={skillLevel}
       
          />




                       
                       <button >Register</button>
        



        </form>
             <p>
               Already registered?<br/>
               <Link to ="/developerlogin">Login In</Link>
             </p>


    </section>

       )}
       
       
       
       
       
       </>





       )
 



}
export default Developer;
 */