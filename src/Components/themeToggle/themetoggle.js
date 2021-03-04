import React, { Component } from "react";
import { ThemeContext } from "../context/context";

class Themetoggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toggle the Theme</button>;
  }
}

export default Themetoggle;
