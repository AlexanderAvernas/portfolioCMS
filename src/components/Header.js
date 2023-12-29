import * as React from "react"
import useNavigation from "../hooks/use-navigation";
import '../css/main.css'

function Header() {

    const navigationData = useNavigation();

    return (
        <header className="headerContainer">
          <nav className="headerUlContainer">
            <ul className="headerLinkContainer">
              {navigationData.map(({ node }) => (
                <li key={node.url}>
                  <a className="headerLink" href={node.url}>{node.template}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      )
    }

    export default Header
