import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {
  let btnname = "Login";
  const [btnnameReact, setbtnnamReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Abouts us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="Login"
            onClick={() => {
              // setbtnnamReact  ("Logout");
              btnnameReact === "Login"
                ? setbtnnamReact("Logout")
                : setbtnnamReact("Login");
            }}
          >
            {btnnameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
