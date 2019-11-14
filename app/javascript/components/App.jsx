import React from "react";
import Routes from "../routes/Index";

export default props => <>{Routes}</>;


// In the App.jsx file, you imported React and the route files you just created.
//  You then exported a component that renders the routes within fragments.
//   This component will be rendered at the entry point of the aplication,
//    thereby making the routes available whenever the application is loaded.

// A common pattern in React is for a component to return multiple elements.
//  Fragments let you group a list of children without adding extra nodes to the DOM

// render() {
//   return (
//     <React.Fragment>
//       <ChildA />
//       <ChildB />
//       <ChildC />
//     </React.Fragment>
//   );
// }
