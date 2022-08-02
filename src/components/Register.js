import { Dropdown } from "react-bootstrap";


function Register (){

  return(
        <Dropdown>
          <Dropdown.Toggle variant = "success" id="dropdown-basic">
           Role 
          </Dropdown.Toggle>

          <Dropdown.Menu><br/>
            <br/><br/><Dropdown.Item href = "user">User</Dropdown.Item><br/>
            <Dropdown.Item href = "admin">Admin</Dropdown.Item><br/>
            <Dropdown.Item href = "developer">Developer</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
  
    
  )

}

export default Register;