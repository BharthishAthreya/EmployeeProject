import AppBar from "@material-ui/core/AppBar";
import React from "react";
import "./App.css";
import { EmployeeForm } from "./components/EmployeeForm/EmployeeForm";
import "./components/AppBar/AppBar.css";

function App() {
  return (
    <div className="App">
      <AppBar className="app-bar" position="static">
        Welcome to job seeking portal
      </AppBar>
      <EmployeeForm className="employee-form" />
    </div>
  );
}

export default App;
