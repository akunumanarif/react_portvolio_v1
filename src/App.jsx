import "./app.scss"
import TopBar from './components/topbar/TopBar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contacs from './components/contacs/Contacs'
import { useState } from "react"
import Menu from "./components/menu/menu"


function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        
        
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contacs/>
      </div>
    </div>
  );
}

export default App;
