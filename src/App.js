import React from "react";
import "./App.css";
import { Button, H1 } from "./styledd";
import { ThemeProvider } from "styled-components";
import Demo from "./side-comp/Demo";

function App() {
  const themeObj = {
    primary: "green",
    warning: "yellow",
  };
  return (
    <ThemeProvider theme={themeObj}>
      <div className="App">
        <Button activeColor="green" hoverColor="red">
          Click me
        </Button>
        <H1>Hello From Header 1</H1>
        <Demo>
          <p>This is paragraph</p>
        </Demo>
      </div>
    </ThemeProvider>
  );
}

export default App;
