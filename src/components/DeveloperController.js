import {Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';
import viewdev from '../images/viewdev.jpg';
import adddev from '../images/adddev.jpg';
import viewfeed from '../images/viewfeed.jpg';
import {Button} from 'react-bootstrap';
const DeveloperController=()=>{
   
  
  
    return(<div>
    <table>
      {/* <div class="col">
         <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
          <Card.Img varient='top' src={adddev} width='290' hieght='180'/>
          <Card.Link href="/developer">
            <Card.Title>Add developer</Card.Title>
          </Card.Link>
         </Card>
          </div> */}
          <div class="col">
         <Card style={{width:'20rem',margin:'2rem',backgroundColor:'#aed2cd'}}>
          <Card.Img varient='top' src={viewfeed} width='290' hieght='180'/>
          <Card.Link href="/getAllFeeds">
            <Card.Title>All Feeds</Card.Title>
          </Card.Link>
         </Card>
          </div>
          </table>
          <button>< Link to={'/logoutDeveloper'}>Logout</Link>

          </button>
          </div>
    )
}

export default DeveloperController;