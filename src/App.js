import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { useState,useEffect } from 'react';
import apiClient from './http-common'
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import AddDeveloperForm from './components/AddDeveloperForm';
import DeveloperList from './components/DeveloperList'
import EditDeveloperForm from './components/EditDeveloperForm'
import User from "./components/User";
import UserLogin from "./components/UserLogin";
import Home from "./components/Home";
import Register from "./components/Register";
import Admin from "./components/Admin";
import AdminController from "./components/AdminController";
import AdminLogin from "./components/AdminLogin";
import UserController from "./components/UserController";
import Login from "./components/Login";
import Layout from "./components/Layout";
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import NavBar from "./components/NavBarComponent";
import ButtonDisplay from "./components/ButtonDisplay";
import LinkPage from "./components/LinkPage";
import Unauthorized from "./components/Unauthorized";
import AddFeedForm from "./components/AddFeedForm";
import EditFeedForm from "./components/EditFeedForm";
import FeedList from "./components/FeedList";
import AddResponseForm from "./components/AddResponseForm";
import EditResponseForm from "./components/EditResponseForm";
import ResponseList from "./components/ResponseList";
import DeveloperController from "./components/DeveloperController";
import DeveloperLogin from "./components/DeveloperLogin";
import Developer from "./components/Developer";
import LogoutAdmin from "./components/LogoutAdmin";
import LogoutUser from "./components/LogoutUser";
import LogoutDeveloper from "./components/LogoutDeveloper";



const Roles={
  'User':1,
  'Admin':2
}
function App() {
  
const [developers,setDevelopers]=useState([]);

    //when App component gets loaded , a call to api will render the products list as a response
    //which we are setting to the products
    useEffect(()=>{apiClient.get('/getAllDevelopers').then((response)=>{
      setDevelopers(response.data);
    })},[])

    
const [editing1,setEditing1]=useState(false);


const initialFormState = {
  devId:0,
  developerName:'',
  memberSince:'',
  skillLevel:'',
  email:'',
  totalFeeds:0,
  reputation:0,
  isVerified:true,
  isBlocked:false,
  users:{
   userId:0
  }
  



}



const [currentDeveloper,setCurrentDeveloper] = useState(initialFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
async function addDeveloper(developer){
  try{
  const response=await apiClient.post('/developer',developer);
  localStorage.setItem('developerDetails',response.data)
    setDevelopers([...developers,response.data]);
    console.log(developers);
    
  }catch(err){
    console.log(err)
  }
  
}


  const editDeveloper=(developer)=>{

    setEditing1(true);
      setCurrentDeveloper
      ({devId:developer.devId,developerName:developer.developerName,
      email:developer.email,skillLevel:developer.skillLevel,totalFeeds:developer.totalFeeds})
     
  }
  
  const updateDeveloper = (devId,updatedDeveloper)=>{
  
    setEditing1(false);
    apiClient.put(`/updateDeveloper/${devId}`,updatedDeveloper).then((response)=>
    {
  
      console.log('Developer updated');
      setDevelopers(developers.map((developer)=>
    (developer.devId === devId ? updatedDeveloper : developer)));
    })
    
  }
  
  
  const [feeds,setFeeds]=useState([]);
  
      
      useEffect(()=>{apiClient.get('/getAllFeeds').then((response)=>{
        setFeeds(response.data);
      })},[])
   
      
  const [editing2,setEditing2]=useState(false);
  
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

  const [currentFeed,setCurrentFeed]  = useState(initialFeedFormState);
  
     
  async function addFeed(feed){
    try{
    const response=await apiClient.post('/addFeed',feed);
      setFeeds([...feeds,response.data]);
      console.log(feeds);
      
    }catch(err){
      //console.log(err)
    }
    
  }
  
  
  
  async function deleteFeed(feedId){
    await apiClient.delete(`/deleteFeed/${feedId}`);
      setFeeds(feeds.filter((feed)=>feed.feedId !== feedId));
    } 
    
    const editFeed=(feed)=>{
  
      setEditing2(true);
        setCurrentFeed
        ({ feedId:feed.feedId, query:feed.query , relevance:feed.relevance ,topic:feed.topic , totalComments:feed.totalComments })
          
    }
    
    const updateFeed = (feedId,updatedFeed)=>{
    
      setEditing2(false);
      apiClient.put(`/updateFeed/${feedId}`,updatedFeed).then((response)=>
      {
    
        console.log('Feed updated');
        setFeeds(feeds.map((feed)=>
      (feed.feedId === feedId ? updatedFeed : feed)));
      })
      
    }

    const [feedresponses,setFeedResponses]=useState([]);
    
    useEffect(()=>{apiClient.get('/getAllResponse').then((response)=>{
      setFeedResponses(response.data);
    })},[])
    const [editing3,setEditing3]=useState(false);
    const [feedId,setFeedId]=useState(0);
const initialResponseFormState = {
  respId:0,
  answer:'',
  accuracy:0,
  responseDateTime:'',
  dev:{ 
    devId:0
 },
 feed:{
    feedId:0
  }
   
  
  
}
const [currentFeedResponse,setCurrentFeedResponse]  =useState(initialResponseFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
 const  addResponse=async (feedresponse)=>{
  try{
    
    console.log(feedId+"in the add response of app.js");
  const response=await apiClient.post('/addResponse',feedresponse);
     setFeedResponses([...feedresponses,response.data]);
    console.log(feedresponses);
    
  }catch(err){
    //console.log(err)
  }
  
}
const  addResponseF= (feedresponse)=>{

  setFeedId(feedresponse.feedId);
}




async function deleteResponse(respId){
  await apiClient.delete(`/deleteResponse/${respId}`);
setFeedResponses(feedresponses.filter((feedresponse)=>feedresponse.respId !== respId));
  }
  
  const editResponse=(feedresponse)=>{

    setEditing3(true);
      setCurrentFeedResponse
      ({respId:feedresponse.respId,answer:feedresponse.answer,responseDateTime:feedresponse.responseDateTime,accuracy:feedresponse.accuracy})
     
  }
  
  const updateResponse = (respId,updatedresponse)=>{
  
    setEditing3(false);
    apiClient.put(`/updateResponse/${respId}`,updatedresponse).then((response)=>
    {
  
      console.log('response updated');
      setFeedResponses(feedresponses.map((feedresponse)=>
    (feedresponse.respId === respId ? updatedresponse : feedresponses)));
    })
  }
  
  
  return (<div  className="bg_image">
    
    <div className='container'>
    <h1>Developer Community Application</h1>
  
    <div className='flex-row'>
      <div className='flex-large'>
        {editing1 ? (
        <div>
          <h2>Edit Developer Form </h2>
          <EditDeveloperForm
           setEditing1={setEditing1}
           currentDeveloper={currentDeveloper}
           updateDeveloper={updateDeveloper}
           /><br/>
           </div>):(

    <BrowserRouter>
     <NavBar/> 
      <Routes>
      <Route path = '/' element={<Layout/>}/>
      <Route index element={<Home/>}/>
      <Route path = "user"element={<User/>}/>
      
      <Route path = "userlogin"element={<UserLogin/>}/>
      <Route path = "developerlogin"element={<DeveloperLogin/>}/>
      <Route path = "userController"element={<UserController/>}/>
      <Route path = "developerController"element={<DeveloperController/>}/>
      <Route path = "adminController"element={<AdminController/>}/>
      <Route path = "register"element={<Register/>}/>
      <Route path = "login"element={<Login/>}/>
      <Route path = "admin"element={<Admin/>}/>
      <Route path = "developer" element={<Developer/>}/>
      <Route path = "adminLogin"element={<AdminLogin/>}/>
      <Route path='AboutUs' element={<AboutUs/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
      <Route path="DeveloperList" element={<DeveloperList/>}></Route>
      <Route path="ResponseList" element={<ResponseList/>}></Route>
      <Route path="FeedList" element={<FeedList/>}></Route>
      <Route path="ButtonDisplay" element={<ButtonDisplay/>}></Route>
      <Route path="linkpage" element={<LinkPage />} />
      <Route path="logoutAdmin" element={<LogoutAdmin />} />
      <Route path="logoutUser" element={<LogoutUser />} />
      <Route path="logoutDeveloper" element={<LogoutDeveloper />} />

        <Route path="unauthorized" element={<Unauthorized />} />
        {/* <Route path='/' element={<DeveloperList 
         developerData={developers} 
         editDeveloper={editDeveloper}
         />} ></Route> */}
         
          <Route exact path="/developer" element={<AddDeveloperForm addDeveloper={addDeveloper}/>} />
         
         <Route path='/getAllDevelopers' element={<DeveloperList 
          developerData={developers} 
         editDeveloper={editDeveloper}
          />}>

         </Route>
         <Route path='/updateDeveloper/:devId' element={<EditDeveloperForm 
          setEditing1={setEditing1}
          currentDeveloper={currentDeveloper}
          updateDeveloper={updateDeveloper}/> }></Route>
        
         <Route exact path="/addFeed" element={<AddFeedForm addFeed={addFeed}/>} />
           
           <Route path='/getAllFeeds' element={<FeedList 
           feedData={feeds} 
           editFeed={editFeed}
           deleteFeed={deleteFeed}
           addResponseF={addResponseF}
            />}>
          
           </Route>
           <Route path="/updateFeed/:feedId" element={<EditFeedForm 
           
           setEditing2={setEditing2}
         currentFeed={currentFeed}
         updateFeed={updateFeed}/> }></Route>

           <Route exact path="/addResponse" element={<AddResponseForm addResponse={addResponse} feedId={feedId}/>} />
         
         <Route path='/getAllResponse' element={<ResponseList 
    feedresponsesData={feedresponses} 
         editResponse={editResponse}
         deleteResponse={deleteResponse}
          />}>

         </Route>
         <Route path="/updateResponse/:respId" element={<EditResponseForm
         setEditing3={setEditing3}
         currentFeedResponse={currentFeedResponse}
         updateResponse={updateResponse} /> }></Route>


        </Routes>
      
    
    </BrowserRouter>
    )}</div></div></div></div>
)}

export default App;