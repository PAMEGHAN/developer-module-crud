    import React ,{useState,useEffect, useContext}from 'react'
    import { useSelector,useDispatch } from 'react-redux'
    import {Link, useNavigate} from 'react-router-dom'
    import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';
    import CardContent from '@mui/material/CardContent';
    import {retrieveDevelopers,}from '../actions/developers'
    import { Grid } from '@mui/material';
import DeveloperContext from '../context/AuthProvider';

    
    export default function DeveloperList(props){
      //we have dispatched the actioncreator retrieveProducts
      //in the component loading time once only
        const dispatch=useDispatch();
        
        const{devId,setDevId}=useContext(DeveloperContext);

        const [currentDeveloper,setCurrentDeveloper]=useState({});
        const [currentIndex,setCurrentIndex]=useState(-1);
        //this products array will hold the state of products 
        const developers = useSelector((state)=>state.developers);
         
    
        useEffect(()=>{
            dispatch(retrieveDevelopers());
          },[]);
    
        
        const refreshData=()=>{
            setCurrentDeveloper(null);
            setCurrentIndex(-1);
        }
     
    
        const setActiveDeveloper = (developer,index)=>{
            setCurrentDeveloper(developer);
            setCurrentIndex(index);
    
        }
    
        //any other method
        //for sorting
        //for searching 
    const nav=useNavigate();

    const clickHandler=(developer)=>{
        setCurrentDeveloper(developer);
        setDevId(developer.devId);
        console.log(devId+"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    }
    
    return(<div className ='container mr-5 '>
             
         <div className='card-deck'>
      {/* <div className='card text-center'> */}
      <div className='col  mb-2'>
                   <div className='card h-100'>
      
          <h4 className='card-title'>All Developers</h4>
         {/*  <p className='card-text'><strong></strong></p> */}
    
          
      <Grid 
       
      container
       spacing={2}
       direction="row"
       justify="flex-start"
       alignItems="flex-start" style={{margin :'.35rem' , margin :'.5rem' ,margin :'.1rem'}}
       
       >
      { developers?.length > 0 ? (
      developers.map((developer)=>(
    <Grid key={developer.devId}>
      <Card style={{ width: '18rem',margin :"2rem" ,backgroundColor:"black",color:"white" }}>
          {/* <Card.Img variant="top" src= {car1} width="80px" height='180' /> */}
    
          <Card.Body>
            <Card.Title>Developer</Card.Title>
            <Card.Text>
            
    
        <CardContent>
    
    
               DevId:{developer.devId}
               <br/><br/>
               developerName :{developer.developerName}<br/>
               email:{developer.email}<br/>
               memberSince :{developer.memberSince}<br/>
               totalFeeds :{developer.totalFeeds}<br/>
               reputation:{developer.reputation}<br/>
               {/* isBlocked:{developer.isBlocked}<br/>
               isVerified:{developer.isVerified}<br/> */}
               skillLevel: {developer.skillLevel}<br/><br/>
              
                <div>
                <button 
            
            onClick={()=>{props.editDeveloper(developer)}}
            className="button muted-button">
                <Link to={"/updateDeveloper/:id"} className="nav-link"></Link>Edit</button>
    
              </div>
               </CardContent></Card.Text></Card.Body></Card></Grid>))):( 
                <CardContent>
                  No Developers
                </CardContent>
               )}
            
            
            
        </Grid>
        </div>
                </div>
        </div>
        </div>
      
    
    )
    }