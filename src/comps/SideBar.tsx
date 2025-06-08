//Navigation Bar for the Webpage

import type { FC } from "react"
import {Link} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'



//Interfaces define the structure of and types an object uses.
interface TitleProps {
}

const SideBar: FC<TitleProps> = () => {
  return (
  <>


<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
  <Link to="/">Recipe Cards</Link> <br></br>
<Link to="/PageTwo">Add or Edit Recipe</Link> <br></br>
<Link to="/PageThree">Settings</Link> <br></br>

  </a>
</nav>




  </>
  )
}



export default SideBar