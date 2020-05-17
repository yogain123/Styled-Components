import React from "react";
import { H1 } from "../styledd";

function Demo(props) {
  return (
    <>
      <H1>This is From Side Component</H1>
      {props.children}
    </>
  );
}

export default Demo;
