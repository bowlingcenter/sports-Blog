import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';


function Header(props){
    return(
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='gap-1 gap-lg-5 '>
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="#will">Link</Nav.Link>
                   <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">
                     Another action
                   </NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">
                      Separated link
                   </NavDropdown.Item>
                   </NavDropdown>
                 </Nav>
                 
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ms-auto'>
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="#will">Link</Nav.Link>
                   <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">
                     Another action
                   </NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">
                      Separated link
                   </NavDropdown.Item>
                   </NavDropdown>
                 </Nav>
                 
                </Navbar.Collapse>
                
             </Container>
            </Navbar>
        </header>
    )
}

export default Header