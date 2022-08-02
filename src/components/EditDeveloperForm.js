//import { faDriversLicense } from '@fortawesome/free-solid-svg-icons';
import React , {useContext, useEffect, useState} from 'react'

export default function EditDeveloperForm(props){
     const [developer,setDeveloper] =useState(props.currentDeveloper)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setDeveloper({...developer,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateDeveloper(developer.devId,developer);
    }
  
   

     return (
        <form onSubmit={submitHandler}>
         


<label>DevId</label>
<h1>{props.currentDeveloper.devId}</h1>


<label>DeveloperName</label>
<input 
type='text'
name='developerName'
value={developer.developerName}
onChange={handleInputChange}/>

<label>Email</label>
<input 
type='text'
name='email'
value={developer.email}
onChange={handleInputChange}/>

<label>skillLevel</label><br/>
<select name="skillLevel" id="skillLevel" value={developer.skillLevel}
onChange={handleInputChange}>
   <option value=" "> </option>
   <option value="Excellent">Excellent</option>
   <option value="veryGood">veryGood</option>
   <option value="good">good</option>
   <option value="Average">Average</option>
   <option value="poor">poor</option>
</select><br/><br/>

<label>TotalFeeds</label>
<input 
type='number'
name='totalFeeds'
value={developer.totalFeeds}
onChange={handleInputChange}/>

 {/* <label>totalFeeds</label>
<input 
type='number'
name='totalfeeds'
value={developer.totalFeeds}
onChange={handleInputChange}/> */}






<button>Update Developer</button>
<button onClick={()=>props.setEditing1(false)} 
className="button muted-button">Cancel</button></form>


   )




}