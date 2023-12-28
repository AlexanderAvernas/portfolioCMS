import * as React from "react"
import useNavigation from "../hooks/use-navigation";

function Header() {

    const navigationData = useNavigation();

    return (
        <header>
          <nav>
            <ul>
              {navigationData.map(({ node }) => (
                <li key={node.url}>
                  <a href={node.url}>{node.template}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      )
    }

    export default Header
