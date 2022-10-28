import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  SetupSuccessScreen,
  EnterUserDetails,
  SelectAccountType,
  SetWorkspaceDetails,
} from "./pages";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<EnterUserDetails />}></Route>
        <Route
          path="/set-workspace-details"
          element={<SetWorkspaceDetails />}
        ></Route>
        <Route
          path="/select-account-type"
          element={<SelectAccountType />}
        ></Route>
        <Route path="/setup-success" element={<SetupSuccessScreen />}></Route>
      </Routes>
    </Router>
  );
};

export default Routers;
