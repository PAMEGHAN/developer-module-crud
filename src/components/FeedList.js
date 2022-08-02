
import React ,{useState,useEffect}from 'react'
    import { useSelector,useDispatch } from 'react-redux'
    import {Link} from 'react-router-dom'
    import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';
    import CardContent from '@mui/material/CardContent';
    import {retrieveFeeds,}from '../actions/feeds'
    import { Grid } from '@mui/material';


    
    export default function FeedList(props){
      //we have dispatched the actioncreator retrieveProducts
      //in the component loading time once only
        const dispatch=useDispatch();
        
        
        const [currentFeed,setCurrentFeed]=useState({});
        const [currentIndex,setCurrentIndex]=useState(-1);
        //this products array will hold the state of products 
        const feeds = useSelector((state)=>state.feeds);

         
    
        useEffect(()=>{
            dispatch(retrieveFeeds());
          },[]);
    
        
        const refreshData=()=>{
            setCurrentFeed(null);
            setCurrentIndex(-1);
        }
     
    
        const setActiveFeed = (feed,index)=>{
            setCurrentFeed(feed);
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
      
          <h4 className='card-title'>All Feeds</h4>
         {/*  <p className='card-text'><strong></strong></p> */}
    
          
      <Grid 
       
      container
       spacing={2}
       direction="row"
       justify="flex-start"
       alignItems="flex-start" style={{margin :'.35rem' , margin :'.5rem' ,margin :'.1rem'}}
       
       >
      { feeds?.length > 0 ? (
      feeds.map((feed)=>(
    <Grid key={feed.feedId}>
      <Card style={{ width: '18rem',margin :"2rem" ,backgroundColor:"black",color:"white" }}>
          {/* <Card.Img variant="top" src= {car1} width="80px" height='180' /> */}
    
          <Card.Body>
            <Card.Title>Feed </Card.Title>
            <Card.Text>
            
    
        <CardContent>
    
               feedId:{feed.feedId} 
               <br/><br/>
               feedDateTime:{feed.feedDateTime}<br/>
              Query:{feed.query}<br/>
               Relevance:{feed.relevance}<br/>
              Topic:{feed.topic}<br/>
              TotalComments:{feed.totalComments}<br/>
              
                <div>
                <button 
            
            onClick={()=>{props.editFeed(feed)}}
            className="button muted-button">
                <Link to={"/updateFeed/:feedId"} className="nav-link">Edit</Link></button><br/>

          <button 
            
            onClick={()=>{props.deleteFeed(feed)}}
            className="button muted-button">Delete</button>

            
        <button 
            
            onClick={()=>{props.addResponseF(feed);console.log(feed)}}
            className="button">
                addResponseF
                </button>

                <button 
            
            onClick={()=>{props.addResponse(feed);console.log(feed)}}
            className="button muted-button">
                <Link to ='/addResponse'>
                Response</Link>
                </button>
                <button 
            
            onClick={()=>{props.getAllResponse(feed)}}
            className="button muted-button">
                <Link to ='/getAllResponse'>
                All Response</Link>
                </button>
                
              </div>
              
               </CardContent></Card.Text></Card.Body></Card></Grid>))):( 
                <CardContent>
                  No Feeds
                </CardContent>
               )}
            
            
            
        </Grid>
        </div>
                </div>
        </div>
        </div>
      
    
    )
    }