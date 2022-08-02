
import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardContent from '@mui/material/CardContent';
import {retrieveResponses,}from '../actions/feedresponses'
import { Grid } from '@mui/material';



export default function ResponseList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [CurrentFeedResponse,setCurrentFeedResponse]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const response = useSelector((state)=>state.feedresponses);
     

    useEffect(()=>{
        dispatch(retrieveResponses());
      },[]);

    
    const refreshData=()=>{
        setCurrentFeedResponse(null);
        setCurrentIndex(-1);
    }
 

    const setActiveFeedResponse = (feedresponses,index)=>{
        setCurrentFeedResponse(feedresponses);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 


return(<div className ='container mr-5 '>
         
     <div className='card-deck'>
  {/* <div className='card text-center'> */}
  <div className='col  mb-2'>
               <div className='card h-100'>
  
      <h4 className='card-title'>All Responses</h4>
     {/*  <p className='card-text'><strong></strong></p> */}

      
  <Grid 
   
  container
   spacing={2}
   direction="row"
   justify="flex-start"
   alignItems="flex-start" style={{margin :'.35rem' , margin :'.5rem' ,margin :'.1rem'}}
   
   >
  { response?.length > 0 ? (
  response.map((response)=>(
<Grid key={response.respId}>
  <Card style={{ width: '18rem',margin :"2rem" ,backgroundColor:"black",color:"white" }}>
      {/* <Card.Img variant="top" src= {car1} width="80px" height='180' /> */}

      <Card.Body>
        <Card.Title>Feed Response</Card.Title>
        <Card.Text>
        

    <CardContent>

           ResponseId:{response.respId} 
           <br/><br/>
           ResponseDateTime:{response.responseDateTime}<br/>
          Answer:{response.answer}<br/>
           Accuracy:{response.accuracy}<br/>
            
          
            <div>
            <button 
        
        onClick={()=>{props.editResponse(response)}}
        className="button muted-button">
          <Link to={"/updateResponse/:respId"} className="nav-link">Edit</Link></button><br/>

<button 
        
        onClick={()=>{props.deleteResponse(response)}}
        className="button muted-button">Delete</button>

          </div>
           </CardContent></Card.Text></Card.Body></Card></Grid>))):( 
            <CardContent>
              No Responses
            </CardContent>
           )}
        
        
        
    </Grid>
    </div>
            </div>
    </div>
    </div>
  

)
}