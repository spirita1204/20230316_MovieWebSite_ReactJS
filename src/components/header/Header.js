import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Link, Switch } from "react-router-dom";
import Login from "../login/Login";
import { useState } from "react";

const Header = (isAuth) => {
    console.log(isAuth+"yes");
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{ "color": 'gold' }}>
                    <FontAwesomeIcon icon={faFilm} /> Movie
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {isAuth &&(
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            )}  
                        <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
                    </Nav>
                    <Link to='/login'>
                        <Button variant="outline-info" className="me-2">Login</Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;