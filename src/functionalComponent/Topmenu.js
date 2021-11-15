import React from 'react'
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { Form, Nav, Navbar, NavDropdown, Button, FormControl } from 'react-bootstrap'


function Topmenu() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Search Job</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                    <Nav>

                        <Nav.Link href="#deets">
                            <span><TextsmsOutlinedIcon /></span>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <span><NotificationsNoneOutlinedIcon /></span>
                        </Nav.Link>
                        <NavDropdown title="Super Admin" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Topmenu
