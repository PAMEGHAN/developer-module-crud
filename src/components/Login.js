import { Dropdown } from "react-bootstrap";


function Login (){

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
        <Dropdown>
          <Dropdown.Toggle variant = "success" id="dropdown-basic">
           Role
          </Dropdown.Toggle>

          <Dropdown.Menu><br/>
            <br/><br/><Dropdown.Item href = "userLogin">User</Dropdown.Item><br/><br/>
            <Dropdown.Item href = "adminLogin">Admin</Dropdown.Item><br/><br/>
            <Dropdown.Item href = "developerLogin">Developer</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
  
    </div>
  )

}

export default Login;