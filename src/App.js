import React from "react";
import Employees from "./pages/Employees";
import Form from "./components/Form";
import Nav from "./Nav";
import GroupedTeamMembers from "./pages/GroupedTeamMembers";
import Error from "./pages/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./Footer";

function App() {
  // useEffect(() => {
  //   localStorage.setItem("activeTeam", activeTeam);
  // }, [activeTeam]);
  // useEffect(() => {
  //   localStorage.setItem("employees", JSON.stringify(employees));
  // }, [employees]);

  return (
    <main>
      <BrowserRouter>
        <Nav />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Form />
                <Employees />
              </>
            }
          />
          <Route path="/groupedteammembers" element={<GroupedTeamMembers />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
