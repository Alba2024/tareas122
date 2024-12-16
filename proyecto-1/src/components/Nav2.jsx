import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


function Navegar(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink ><Link to="/">Enlace paguno</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink to ="/Navegador.jsx">Enlace pagdos
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navegar;