import React,{useState,useEffect} from 'react'

//import { useDispatch } from 'react-redux';
//import { addFeed } from '../actions/feeds';

export default function AddFeedForm(props){
   
//const dispatch=useDispatch();
  
const initialFeedFormState = {
    feedId:0,
    feedDateTime:'',
    query:'',
    relevance:0,
    topic:'',
    totalComments:0,
    dev:{
      devId:0
    } 

}


const initialDevFormState={
             
   devId: 0
 

}
const [dev,setDev]=useState(initialDevFormState);
const handleDevIdChange=(event)=>{
 const {name,value}=event.target;
 setDev({...dev,[name]:value});
 setFeed({...feed,...dev});
}
  

const [feed,setFeed]=useState(initialFeedFormState);


const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setFeed({...feed,[name]:value});
}
 

 useEffect(()=>{
   setFeed({...feed,dev})},[dev]) 

   const submitHandler=(event)=>{event.preventDefault();
      
       
      

console.log(JSON.stringify(feed)+'from addfeedform');
       props.addFeed(feed);
       setFeed(initialFeedFormState);
       



//const submitHandler=(event)=>{event.preventDefault();
/* if( !feed.feedDateTime || !feed.query || !feed.relevance|| !feed.topic ||!feed.totalComments|| feed.devId ) return; */
 //console.log(JSON.stringify(feed)+'from addFeedform')

// props.addFeed(feed);
//dispatch(addFeed(feed));
//setFeed(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>
   <div class="container">  
<label>FeedId : </label>
<input 
type='number'
name='feedId'
value={feed.feedId}
onChange={handleInputChange}/>
<br></br>

 <label>FeedDateTime : </label>
<input 
type='datetime-local'
name='feedDateTime'
value={feed.feedDateTime}
onChange={handleInputChange}/>
<br></br> 

<label>Query :</label>
<input 
type='text'
name='query'
value={feed.query}
onChange={handleInputChange}/>
<br></br>

<label>Relevance : </label>
<input 
type='number'
name='relevance'
value={feed.relevance}
onChange={handleInputChange}/>
<br></br>

<label>Topic : </label>
<input 
type='text'
name='topic'
value={feed.topic}
onChange={handleInputChange}/>
<br></br>

<label>TotalComments : </label>
<input 
type='number'
name='totalComments'
value={feed.totalComments}
onChange={handleInputChange}/>
<br></br>

<label>DevId :</label>
<input 
type='number'
name='devId'
value={dev.devId}
onChange={handleDevIdChange}/>
<br></br>

</div>
<button type = 'submit'>Add New Feed</button>

</form>


</>
)


}