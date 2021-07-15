import React, { Component } from 'react'
import logo from '../../presente.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar className="myNavBar" bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
                    <Container >
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Black Friday
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <FontAwesomeIcon 
                                icon={faBars} 
                                style={{color:"#fff"}}
                            />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className='anchors text-center' href="#promos">Promoções</Nav.Link>
                                <Nav.Link className='anchors text-center' href="#email">Newsletter</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
