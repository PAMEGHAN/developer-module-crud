import React , {useContext, useEffect, useState} from 'react'

export default function EditResponseForm(props){
     const [feedresponse,setFeedResponse] =useState(props.currentFeedResponse)

     console.log(JSON.stringify(feedresponse)+"from edit form")

     const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setFeedResponse({...feedresponse,[name]:value});
     }

     console.log(JSON.stringify(feedresponse)+"from handle form")

     const submitHandler=(event)=>{event.preventDefault();
       props.updateResponse(feedresponse.respId,feedresponse);
    }

    console.log(JSON.stringify(feedresponse)+"from submit form")

   

     return (
        <form onSubmit={submitHandler}>
         
<label>RespId</label>
<h1>{props.currentFeedResponse.respId}</h1>


<label>Answer</label>
<input 
type='text'
name='answer'
value={feedresponse.answer}
onChange={handleInputChange}/>


<label>Accuracy</label>
<input 
type='text'
name='accuracy'
value={feedresponse.accuracy}
onChange={handleInputChange}/>


<label>ResponseDateTime</label>
<input 
type='datetime-local'
name='responsDateTime'
value={feedresponse.responseDateTime}
onChange={handleInputChange}/>

{/*<label>DevId</label>
<input 
type='text'
name='devId'
value={response.devId}
onChange={handleInputChange}/>

<label>FeedId</label>
<input 
type='text'
name='feedId'
value={response.feedId}
     onChange={handleInputChange}/>*/}


<button>Update Response</button>
<button onClick={()=>props.setEditing1(false)} 
className="button muted-button">Cancel</button></form>


   )




}