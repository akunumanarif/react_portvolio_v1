import './topBar.scss'
import {Person, Mail} from "@material-ui/icons"

export default function TopBar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topBar " + (menuOpen && "active")} >
            <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">lybra.inc</a>
            <div className="itemContainer">
                <Person className="icon"/>
                <span>+62 888 888 223</span>
            </div>
            <div className="itemContainer">
                <Mail className="icon"/>
                <span>numanarif87@gmail.com</span>
            </div>
          </div>
          
          <div className="right">
              <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
              </div>
          </div>
          </div>
        </div>
    )
}
