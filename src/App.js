import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Routes from './Routes';
import './App.css';

class App extends Component {
    render() {
	return (
	    <div className="App">
              <Navbar fixedBottom fluid collapseOnSelect>
		<Navbar.Header>
		  <Navbar.Brand>
		    <Link to="/">Karen Gu</Link>
		  </Navbar.Brand>
		  <Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
		  <Nav pullRight>
		    <LinkContainer to="/resume">
		      <NavItem>Resume</NavItem>
		    </LinkContainer>
		    <LinkContainer to="/photos">
		      <NavItem>Photos</NavItem>
		    </LinkContainer>
		    <LinkContainer to="/projects">
		      <NavItem>Projects</NavItem>
		    </LinkContainer>
		  </Nav>
		</Navbar.Collapse>
	      </Navbar>
	      <Routes />
	    </div>
	);
    }
}

export default App;
