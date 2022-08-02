import React,{useEffect, useState} from 'react'


export default function AddDeveloperForm(props){
   
//const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */
   

const initialFormState = {
   devId:0,
   developerName:'',
  memberSince:'',
   skillLevel:'',
   email:'',
   password:'',
   totalFeeds:0,
   reputation:0,
   isVerified:false,
   isBlocked:false,
   users:{
      userId:0
   }
   
}

  const initialUserFormState={
    userId:0
}

const [users, setUsers] =useState(initialUserFormState);
const handleUserIdChange=(event)=>{
    const{name,value}= event.target;
    setUsers({...users,[name]:value});
    setDeveloper({...developer,...users});
    
}  
 
const [developer,setDeveloper]=useState(initialFormState);

const handleInputChange = (event)=>{
   //console.log(event.target.value);
   const {name,value} =event.target;
  
   setDeveloper({...developer,[name]:value});
  // console.log('aaaaaaaaa'+developer);
  // console.log(JSON.stringify(developer)+'from adddevloperform')

}

  useEffect(()=>{
    setDeveloper({...developer,users})
    //console.log(JSON.stringify(developer)+'from adddevloperform')
},[users]) 

/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}
const handleNameChange = (event)=>{
   setName(event.target.value)
}
const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}
const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
   var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
developer.memberSince=today
console.log(today)

console.log(JSON.stringify(developer)+'from adddevloperform')
props.addDeveloper(developer);
//dispatch(addDeveloper(developer));
setDeveloper(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

<label>DevId</label>
<input 
type='number'
name='devId'
value={developer.devId}
onChange={handleInputChange}/>

<label>userId</label>
<input 
type='number'
name='userId'
value={users.userId}
onChange={handleUserIdChange}/> 

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

<label>Password</label>
<input 
type='password'
name='password'
value={developer.password}
onChange={handleInputChange}/>


<label>skillLevel</label>
<select name="skillLevel" id="skillLevel" onChange={handleInputChange}>
<option value=" "> </option>
   <option value="Excellent">Excellent</option>
   <option value="veryGood">veryGood</option>
   <option value="good">good</option>
   <option value="Average">Average</option>
   <option value="poor">poor</option>
{/* <input 
type='text'
name='skillLevel'
value={developer.skillLevel}
onChange={handleInputChange}/> */}</select><br/><br/>


<label>totalFeeds</label>
<input 
type='number'
name='totalFeeds'
value={developer.totalFeeds}
onChange={handleInputChange}/>


{/* <label>memberSince</label>
<input 
type='date'
name='membersince'
value={developer.memberSince}
onChange={handleInputChange}/>
 */}

<label>isVerified</label>
<input 
type='boolean'
name='isVerified'
value={developer.isVerified}
onChange={handleInputChange}/>


<label>isBlocked</label>
<input 
type='boolean'
name='isBlocked'
value={developer.isBlocked}
onChange={handleInputChange}/><br/>

<label>reputation</label>
<input 
type='number'
name='reputation'
value={developer.reputation}
onChange={handleInputChange}/> 

<button type='submit'>Add New Developer</button>

</form>


</>
)


}