// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
//
// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )
//
// Hello.defaultProps = {
//   name: 'David'
// }
//
// Hello.propTypes = {
//   name: PropTypes.string
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })

import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});

// In this code snippet, you imported React, the render method from ReactDOM, Bootstrap, jQuery, Popper.js,
//  and your App component. Using ReactDOM’s render method, you rendered your App component in a div element,
//   which was appended to the body of the page. Whenever the application is loaded,
//    React will render the content of the App component inside the div element on the page.
