import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const FilterMovie = ({ search, setSearch }) => {

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown    title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="Moviess">serie</NavDropdown.Item>
                <NavDropdown.Item href="gyf">movie</NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={(search)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar></div>
  )
}

export default FilterMovie