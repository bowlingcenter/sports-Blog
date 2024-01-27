import { Outlet } from "react-router-dom"
import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import Header from "../components/Header";

function Root (props){
    return(
        <>
          <Header/>
          <Outlet/>  
        </>
    )
}

export default Root