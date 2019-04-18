import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      dropdownOpen: false
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleNavbar() {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const { collapsed } = this.state;
    const { user, resetMe } = this.props;
    return (
      <Container>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            React Crud
          </NavbarBrand>
          <Nav className="d-none d-md-flex navbar">
            <NavItem>
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </NavItem>
            {user.token ? (
              <React.Fragment>
                <NavItem>
                  <NavLink className="nav-link" to="/admin" exact>
                    Admin
                  </NavLink>
                </NavItem>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} nav>
                  <DropdownToggle tag="a" href="#" className="nav-link" caret>
                    {user.username}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Perfil</DropdownItem>
                    <DropdownItem tag="a" className="nav-link" href="#" onClick={resetMe}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </React.Fragment>
            ) : (
              <NavItem>
                <NavLink className="nav-link" to="/login" exact>
                  Login
                </NavLink>
              </NavItem>
            )}
          </Nav>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2 d-md-none" />
          <Collapse isOpen={collapsed} navbar>
            <Nav
              className="ml-auto"
              style={{ backgroundColor: '#e9ecef', padding: 10, marginTop: 10, marginBottom: 10 }}
              navbar
            >
              <NavItem>
                <NavLink className="nav-link" to="/" exact>
                  Home
                </NavLink>
              </NavItem>
              {user.token ? (
                <React.Fragment>
                  <NavItem>
                    <NavLink className="nav-link" to="/admin" exact>
                      Admin
                    </NavLink>
                  </NavItem>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} nav>
                    <DropdownToggle tag="a" href="#" className="nav-link" caret>
                      {user.username}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Perfil</DropdownItem>
                      <DropdownItem tag="a" className="nav-link" href="#" onClick={resetMe}>
                        Sair
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </React.Fragment>
              ) : (
                <NavItem>
                  <NavLink className="nav-link" to="/login" exact>
                    Login
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}
