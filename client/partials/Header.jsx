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
      collapsed: false
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
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
                <NavItem>
                  <NavLink className="nav-link" to="/profile" exact>
                    {user.username}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a className="nav-link" href="#" onClick={resetMe}>
                    Sair
                  </a>
                </NavItem>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <NavItem>
                  <NavLink className="nav-link" to="/register" exact>
                    Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/login" exact>
                    Login
                  </NavLink>
                </NavItem>
              </React.Fragment>
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
                  <NavItem>
                    <NavLink className="nav-link" to="/perfil" exact>
                      {user.username}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <a className="nav-link" href="#" onClick={resetMe}>
                      Sair
                    </a>
                  </NavItem>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <NavItem>
                    <NavLink className="nav-link" to="/register" exact>
                      Register
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/login" exact>
                      Login
                    </NavLink>
                  </NavItem>
                </React.Fragment>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}
