import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import viewdev from '../images/viewdev.jpg';
import adddev from '../images/adddev.jpg';
import viewfeed from '../images/viewfeed.jpg';
import addfeed from '../images/addfeed.jpg';
import viewresp from '../images/viewresp.jpg';
import addresp from '../images/addresp.jpg';
import {Button} from 'react-bootstrap';

const AdminController=()=>{
  
    return(<div>
      <table>
        <tr>

        <td>
<div class="col">
         <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
          <Card.Img varient='top' src={adddev} width='290' hieght='180'/>
          <Card.Link href="/developer">
            <Card.Title>Add Developer</Card.Title>
          </Card.Link>
         </Card>
          </div>
          </td>
          <td>
<div class="col">
         <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
          <Card.Img varient='top' src={viewdev} width='290' hieght='180'/>
          <Card.Link href="/getAllDevelopers">
            <Card.Title>All Developers</Card.Title>
          </Card.Link>
         </Card>
          </div>
          </td>
          </tr>
          <td>
<div class="col">
         <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
          <Card.Img varient='top' src={addfeed} width='290' hieght='180'/>
          <Card.Link href="/addFeed">
            <Card.Title>Add Feed</Card.Title>
          </Card.Link>
         </Card>
          </div>
          </td>
          <td>
<div class="col">
         <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
          <Card.Img varient='top' src={viewfeed} width='290' hieght='180'/>
          <Card.Link href="/getAllFeeds">
            <Card.Title>All Feeds</Card.Title>
          </Card.Link>
         </Card>
          </div>
          </td>
          <tr>
          <td>
<div class="col">
         <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
          <Card.Img varient='top' src={addresp} width='290' hieght='180'/>
          <Card.Link href="/addResponse">
            <Card.Title>Add Response</Card.Title>
          </Card.Link>
         </Card>
          </div>
          </td>
          <td>
<div class="col">
         <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
          <Card.Img varient='top' src={viewresp} width='290' hieght='180'/>
          <Card.Link href="/getAllResponse">
            <Card.Title>All Responses</Card.Title>
          </Card.Link>
         </Card>
          </div>
          </td>
          </tr>
          </table>
          <Button>< Link to={'/logoutAdmin'}>Logout</Link>

          </Button>
          </div>
    )
}

export default AdminController;