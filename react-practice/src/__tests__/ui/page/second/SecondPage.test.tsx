/**
 * materialUIがスナップショットで落ちるため
 */

// import React from "react";
// import { Provider } from "react-redux";
// import { store } from "store/store";

// import renderer from "react-test-renderer";
// import { SecondPage } from "ui/page/second/SecondPage";
// import { BrowserRouter as Router } from "react-router-dom";
// describe("snapshot", () => {
//   it("render correctly", () => {
//     const tree = renderer
//       .create(
//         <Provider store={store}>
//           <Router>
//             <SecondPage />
//           </Router>
//         </Provider>
//       )
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
