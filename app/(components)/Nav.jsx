import { faBell, faHome, faInbox } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Bellefair } from "next/font/google"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex justify-center bg-nav p-4">
      <div className="flex justify-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon"/>
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faInbox} className="icon" />
        </Link>
      </div>
    </nav>
  )
}

export default Nav