import React, { Component } from 'react';
// import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { Navbar, Nav, Form } from 'react-bootstrap'
// import { Link } from "react-router-dom";
// import HomeIcon from '@material-ui/icons/Home';
// import ChatIcon from '@material-ui/icons/Chat';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import helloSuperstarLogo from '../../images/HelloSuperStarLogo.png';
import accountImg from '../../images/navbar/account.jpg'
import '../CSS/Navbar/navbar.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <>
                <Navbar className='navbar-bg' expand="lg" sticky="top">
                    <div className="container">
                        <Navbar.Brand href="#" >
                            <img  src={helloSuperstarLogo} alt="hello superstar logo" height='60px' />
                        </Navbar.Brand>
                        <Form className='form-width-change'>
                                <div className="form-group has-search">
                                    <span className="fa fa-search form-control-feedback"></span>
                                    <input type="text" className="form-control search-design" placeholder="Search Superstar" />
                                </div>
                            </Form>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">

                           
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                navbarScroll
                            >
                                <Nav.Link href="#action1" className='navbar-link-hover'>

                                    <i class="fa fa-home circle-icon" />
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <i class="fa fa-comment circle-icon" />

                                </Nav.Link>
                                <Nav.Link href="#action1">

                                    <i class="fa fa-bell circle-icon" />
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <i class="fa fa-store circle-icon" />
                                </Nav.Link>

                                <Nav.Link href="#action2">
                                    <img src={accountImg} className='img-fluid account-create' alt='account create ' />
                                </Nav.Link>

                                <Nav.Link href="#action2">
                                   <select name="" id="" className='language-select'>
                                       <option value="0" className='bg-dark'>EN</option>
                                       <option value="0" className='bg-dark'>BN</option>
                                       <option value="0" className='bg-dark'>HN</option>
                                   </select>
                                </Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </div>
                </Navbar>


















                {/* <Navbar  className='navbar-bg' expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand to="/">
                            <img src={helloSuperstarLogo} alt="hello super star logo img" height='40px' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="justify-content-end" style={{ width: "100%" }}>
                                <NavItem>
                                    <Link to="/" className="nav-link"><HomeIcon /></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/chat" className="nav-link "><ChatIcon /></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/notification" className="nav-link "><NotificationsActiveIcon /></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/shopping" className="nav-link"><ShoppingCartIcon /></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/signup" className="nav-link">Sign Up</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar> */}
            </>
        )
    }

}

export default Navigation;