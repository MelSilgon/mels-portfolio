import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"
import "../css/style.css"
import { Helmet } from "react-helmet"
import useNavigation from "../hooks/useNavigation"
import useSiteMetadata from "../hooks/useSiteMetadata"

const Layout = ({ children }) => {
  //import use hooks
  const navigation = useNavigation()
  const siteMetaData = useSiteMetadata()

  return (
    <div class="layout-container">
      {/* Site's Meta data, goes to HEAD */}
      <Helmet>
        <title>{siteMetaData.title}</title>
        <meta name="description" content={siteMetaData.description} />
      </Helmet>

      <header>
        {/* NAVBAR */}
        <Navbar className="navbar-container" expand="lg">
          <Navbar.Brand>
            <Link to="/">{siteMetaData.title}</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              {navigation.map(edge => {
                return (
                  <Nav.Item key={edge.node.id}>
                    {edge.node.url !== "/404" && (
                      <Nav.Link as={Link} to={edge.node.url}>
                        {edge.node.title}
                      </Nav.Link>
                    )}
                  </Nav.Item>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      {/* MAIN */}
      <Container style={{ flex: 1 }}>{children}</Container>

      {/* FOOTER */}
      <footer>
        © {new Date().getFullYear()} {siteMetaData.author}
      </footer>
    </div>
  )
}

export default Layout
