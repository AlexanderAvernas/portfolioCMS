import * as React from "react"
import useNavigation from "../hooks/use-navigation"
import "../css/main.css"

function Header() {
  //Använder en Hook där url och template hämtas vilket gör att templete-namnet visas och url används som länk till olika sidor.
  const navigationData = useNavigation()

  return (
    <div className="headerContainer">
      <nav className="headerUlContainer">
        <ul className="headerLinkContainer">
          {navigationData.map(({ node }) => (
            <li key={node.url}>
              <a className="headerLink" href={node.url}>
                {node.template}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
