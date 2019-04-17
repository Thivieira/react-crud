import React from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false
    };
  }

  toggleNavbar() {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  }

  componentDidMount() {
    console.log('HEADER isAuthenticated (header componentDidMount)', this.props.isAuthenticated);
  }

  render() {
    const { collapsed } = this.state;
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
            {this.props.isAuthenticated ? (
              <React.Fragment>
                <NavItem>
                  <NavLink className="nav-link" to="/admin" exact>
                    Admin
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a className="nav-link" href="#" onClick={this.props.resetMe}>
                    Logout
                  </a>
                </NavItem>
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
              <NavItem>
                <NavLink className="nav-link" to="/login" exact>
                  Login
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}
