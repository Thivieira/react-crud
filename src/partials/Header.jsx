import React from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import test from './Header.css';


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false,
    };
  }

  toggleNavbar() {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  }

  render() {
    const { collapsed } = this.state;
    console.log(test);
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">React Crud</NavbarBrand>
          <Nav className="d-none d-md-flex navbar d-flex">
            <NavItem>
              <NavLink className="nav-link" style={test} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2 d-md-none" />
          <Collapse isOpen={collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
