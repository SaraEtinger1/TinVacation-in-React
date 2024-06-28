import { Link } from "react-router-dom";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { showUser } from "../features/user/userSlice";

const NavBar = () => {
  let dispatch = useDispatch();

  const save = (e) => {
    e.preventDefault();
    dispatch(showUser())
  }

  return (
    <nav className="navbar">
      <div className="nav-item">
        <from onSubmit={save}>
          <label>מייל :</label>
          <input type="email" /> <br />
          <label> סיסמה:</label>
          <input type="text" />
          <input type="submit" value="התחברות"/>
        </from>
      </div>
      <div className="nav-item">
        <Link to="basket" className="nav-link">לסל</Link>
      </div>
      <div className="nav-item">
        <Link to="list" className="nav-link">לרשימה</Link>
      </div>
      <div className="nav-item">
        <Link to="user" className="nav-link">למשתמשים</Link>
      </div>
    </nav>
  );
}

export default NavBar;