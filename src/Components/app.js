import React from "react";
import BookList from "./booklist";
import Navbar from "./navbar";

import ThemeContextProvider from "./context/context";
import Themetoggle from "./themeToggle/themetoggle";
import AuthcontextProvider from "../Components/context/authcontext";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <AuthcontextProvider>
          <Navbar />
          <BookList />
          <Themetoggle />
        </AuthcontextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
