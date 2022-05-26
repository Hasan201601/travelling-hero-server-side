import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="pb-5">
            <Navbar collapseOnSelect expand="lg" className="nav-bar fw-bolder" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand>Travelling Hero</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="ms-auto d-flex align-items-center justify-content-center">
                            <NavLink className="ms-4 nav-item text-decoration-none text-white" to="/home">Home</NavLink>
                            <NavLink className="ms-4 nav-item text-decoration-none text-white" to="/about">About</NavLink>
                            <NavLink className="ms-4 nav-item text-decoration-none text-white" to="/contact">Contact</NavLink>

                            {
                                !user.email ? <NavLink className="ms-4 text-decoration-none nav-item text-white" to="/login">Login</NavLink>
                                    :
                                    <>
                                        <NavLink className="ms-4  text-decoration-none nav-item  text-white" to="/orders">My Orders</NavLink>
                                        <NavLink className="ms-4 text-decoration-none nav-item text-white" to="/manageorders">Manage all Orders</NavLink>
                                        <NavLink className="ms-4 text-decoration-none nav-item text-white" to="/addservice">Add A New Service</NavLink>
                                        <Navbar.Text className='mx-2 name'>{user.displayName}</Navbar.Text>
                                        <button className="btn-regular btn-regular-md" variant="info" onClick={logOut}>LogOut</button>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;