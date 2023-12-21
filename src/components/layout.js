import * as React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"
import useNavigation from "../hooks/useNavigation"

const Layout = ({ children }) => {
  const navigation = useNavigation()

  return (
    <>
      <header>
        <Link to="/">Gatsby ITHS-starter</Link>
        <nav>
          <ul>
            {navigation.map(edge => {
              return (
                <li key={edge.node.id}>
                  <p>
                    <Link to={edge.node.url}>{edge.node.title}</Link>
                  </p>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
