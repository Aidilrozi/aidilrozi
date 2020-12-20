import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Col,
  Row
} from 'reactstrap';
import styles from '../style/style.css'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"  className={styles.font}>Mohamad Aidilrozi</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>

          </Nav>
          
          <NavLink href="#projects"><NavbarText>Projects</NavbarText></NavLink>
          <NavLink href="#projects"><NavbarText>Showcase</NavbarText></NavLink>
          <NavLink href="#projects"><NavbarText>Contact</NavbarText></NavLink>
          
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;