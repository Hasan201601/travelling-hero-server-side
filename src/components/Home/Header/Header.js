import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar className="nav-bar" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink className="ms-4 py-2 text-decoration-none text-white" to="/home">Home</NavLink>
                        <NavLink className="ms-4 py-2 text-decoration-none text-white" to="/about">About</NavLink>
                        <NavLink className="ms-4 py-2 text-decoration-none text-white" to="/orders">My Orders</NavLink>
                        <NavLink className="ms-4 py-2 text-decoration-none text-white" to="/manageorders">Manage all Orders</NavLink>
                        <NavLink className="ms-4 py-2 text-decoration-none text-white" to="/addservice">Add A New Service</NavLink>
                        {
                            !user.email ? <NavLink className="ms-4 text-decoration-none text-white py-2" to="/login">Login</NavLink> : <Button className="m-0 ms-2" variant="info" onClick={logOut}>LogOut</Button>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;