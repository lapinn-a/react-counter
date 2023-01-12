import {NavLink} from 'react-router-dom'

import "../styles.css";

const Navbar = (props, children) => {
  return (
    <div>
      <h1 className={"header"}>UI/UX 4 курс</h1>
      <NavLink to='/' className="nav-button" activeClassName="active">
        Задание 1
      </NavLink>
      <NavLink to='/page2' className="nav-button" activeClassName="active">
        Задание 2
      </NavLink>
      <NavLink to='/page3' className="nav-button" activeClassName="active">
        Задание 3
      </NavLink>
      <NavLink to='/page4' className="nav-button" activeClassName="active">
        Задание 4
      </NavLink>
    </div>
  );
};

export default Navbar;