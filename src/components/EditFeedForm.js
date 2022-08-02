import React , {useContext, useEffect, useState} from 'react'

export default function EditFeedForm(props){
     const [feed,setFeed] =useState(props.currentFeed)

    console.log(JSON.stringify(feed)+"from edit form")
     const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setFeed({...feed,[name]:value});
     }
console.log(JSON.stringify(feed)+"from handle form")

     const submitHandler=(event)=>{event.preventDefault();
       props.updateFeed(feed.feedId,feed);
    }

console.log(JSON.stringify(feed)+"from submit form")
   

     return (
        <form onSubmit={submitHandler}>
         
<label>FeedId </label>
<h1>{props.currentFeed.feedId}</h1>

{/* <label>FeedDateTime</label>
<input 
type='datetime-local'
name='feedDateTime'
value={feed.feedDateTime}
onChange={handleInputChange}/>
<br/> */}

<label>Query :</label>
<input 
type='text'
name='query'
value={feed.query}
onChange={handleInputChange}/>
<br/>

<label>Relevance : </label>
<input 
type='number'
name='relevance'
value={feed.relevance}
onChange={handleInputChange}/><br/>

<label>Topic : </label>
<input 
type='text'
name='topic'
value={feed.topic}
onChange={handleInputChange}/><br/>

<label>TotalComments : </label>
<input 
type='number'
name='totalComments'
value={feed.totalComments}
onChange={handleInputChange}/><br/>

{/* <label>DevId</label>
<input 
type='number'
name='devId'
value={feed.devId}
onChange={handleInputChange}/> */}


<button>Update Feed</button>
<button onClick={()=>props.setEditing1(false)} 
className="button muted-button">Cancel</button></form>


   )




}