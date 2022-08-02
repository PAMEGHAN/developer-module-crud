import React,{useEffect, useState} from 'react'
//import { useDispatch } from 'react-redux';
//import { addResponse } from '../actions/response';

export default function AddResponseForm(props){
   const [feedId,setFeedId]=useState(0);
   const [devId,setDevId]=useState(0);
   const fId=props.feedId;
   const dId=localStorage.getItem('devId');
   useEffect(()=>{
      setFeedId(fId);
      setDevId(dId);
   },[feedId,devId]);

//const dispatch=useDispatch();
   
   console.log(feedId+"*****************")
   console.log(devId+"******************")
const initialResponseFormState = {
   respId:0,
   answer:'',
   accuracy:0,
   responseDateTime:'',
   dev:{ 
      devId:devId
   },
   feed:{
      feedId:feedId
    },
}
 /* 
   const initialFeedFormState={

   feedId:0
}

const initialDevFormState={

   devId:0
}
 */



/* const [feed, setFeed] =useState(initialFeedFormState);
const handleFeedIdChange=(event)=>{
   const{name,value}= event.target;
   setFeed({...feed,[name]:value});
   setFeedResponse({...feedresponse,...feed}); 
} */
 
/* const [dev, setDev] =useState(initialDevFormState);
const handleDevIdChange=(event)=>{
   const{name,value}= event.target;
   setDev({...dev,[name]:value});
   setFeedResponse({...feedresponse,...dev}); 
}  */
const [feedresponse,setFeedResponse]=useState(initialResponseFormState);

const handleInputChange = (event)=>{
   const {name,value} =event.target;
   setFeedResponse({...feedresponse,[name]:value});
   
}

/* useEffect(()=>{
   setFeedResponse({...feedresponse,feed})},[feed])
 
   useEffect(()=>{
      setFeedResponse({...feedresponse,dev})},[dev])
 */
      
 const submitHandler=(event)=>{event.preventDefault();
console.log(JSON.stringify(feedresponse)+'from addresponseform');
//props.addResponse(feedresponse);
setFeedResponse(initialResponseFormState); 

   


}
return (<>

   <form onSubmit={submitHandler}>
   <div class="container">  

<label>Answer</label>
<input 
type='text'
name='answer'
value={feedresponse.answer}
onChange={handleInputChange}/>
<br></br>

<label>accuracy</label>
<input 
type='number'
name='accuracy'
value={feedresponse.accuracy}
onChange={handleInputChange}/>
<br></br>

<label>responseDateTime</label>
<input 
type='datetime-local'
name='responseDateTime'
value={feedresponse.responseDateTime}
onChange={handleInputChange}/>
<br></br>

{/* 
 <label>DevId</label>
<input 
type='number'
name='devId'
value={feedresponse.dev.devId}
/>
<br></br>


<label>FeedId</label>
<input 
type='number'
name='feedId'
value={feedresponse.feed.feedId}
/>
 */}


</div>
<button type = 'submit'>Add New Response</button>

</form>


</>
)


}


