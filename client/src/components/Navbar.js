// import "./navbar.css";
import Container from 'react-bootstrap/Container';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Navbar = ()=> {

  return (
<BootstrapNavbar className="bg-body-tertiary">
<Container>
  <BootstrapNavbar.Brand href="/" className='title'>Blog</BootstrapNavbar.Brand>
  <BootstrapNavbar.Toggle />
  <BootstrapNavbar.Collapse className="justify-content-end">
    <BootstrapNavbar.Text>
    <Button className="no-underline-button">
              <Link to="/form">New Blog</Link>
            </Button>
    </BootstrapNavbar.Text>
  </BootstrapNavbar.Collapse>
</Container>
</BootstrapNavbar>
  );
};

export default Navbar;
