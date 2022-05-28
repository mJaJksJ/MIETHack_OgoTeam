import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import DormitoryScheme from "./DormitoryScheme/DormitoryScheme";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar color="primary" className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" dark>
          <Container>
            <NavbarBrand tag={Link} to="/main">Студгородок МИЭТ</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/students">Студенты</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/rooms">Комнаты</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/contacts">Контакты</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/scheme">Схема</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}