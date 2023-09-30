import React from "react";
import ReactDOM from "react-dom";

//React Element
//create react element using JSX
//JSX => ReactReact.createElement => ReactElement - jS Object => HTMLElement(render)
//camelCase is use for attributes in JSX.
//here attribute name is different than HTML. e.g. - class attribute in HTMl is className in JSX
const JSXheading = <h1 className="helloMessage">Hello from JSX</h1>;

const num = 100;
//React Components
const BodyComponent = () => (
  <p>This is body. This is paragraph about lorem ipsum. He was a great guy.</p>
);
const HeadingComponent = () => (
  <div>
    <h1>Hello from functional Component</h1>
    <BodyComponent></BodyComponent>
    <p1>{num}</p1>
    <br></br>
    <p1>{100 - 60}</p1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent></HeadingComponent>);
