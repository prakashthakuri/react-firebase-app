import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "./firebase/auth";
import { useSession } from "./firebase/UserProvider";

  function Header() {
  const history = useHistory();
  const {user} = useSession()

  const logoutUser = async () => {
    await logout();
    history.push("/login"); // Redirects to Singup page after calling logout function
  };
  return (
    <header>
      <h2>The Grid</h2>
     { !!user && <button className="ui secondary button logout" onClick={logoutUser}>
        LOGOUT
      </button>}
    </header>
  );
}

export default Header;
