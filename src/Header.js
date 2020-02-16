import React, {useState} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);

  const toogle = () => {
    setOpen(!open);
  }

  return (
    <Navbar color='light' light expand='md'>
      <NavbarBrand tag={Link} to='/'>Minhas Séries</NavbarBrand>
      <NavbarToggler onClick={toogle} />
      <Collapse isOpen={open} navbar>
          <Nav className='ml-auto' navbar>
              <NavItem>
                  <NavLink tag={Link} to="/generos">Genêros</NavLink>
              </NavItem>
          </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header;