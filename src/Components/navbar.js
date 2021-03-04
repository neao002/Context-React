import React, { Component } from "react";
import { ThemeContext } from "./context/context";
import { AuthContext } from "./context/authcontext";

class Navbar extends Component {
  // static contextType = ThemeContext;

  render() {
    // console.log(this.context);

    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isAuthenticated, toggle } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <div>{isAuthenticated ? "Logged in" : "logged Out"}</div>
                  <button onClick={toggle}>Change Value</button>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
