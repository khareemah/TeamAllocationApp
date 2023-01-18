import React, { useContext, useState } from "react";
import people from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || people
  );
  const [activeTeam, setActiveTeam] = useState(
    localStorage.getItem("activeTeam") || "TeamB"
  );
  const handleCardClick = (id) => {
    const newEmployees = employees.map((employee) => {
      if (employee.id === id) {
        if (employee.teamName === activeTeam) {
          employee.teamName = "";
        } else {
          employee.teamName = activeTeam;
        }
      }
      return employee;
    });
    setEmployees(newEmployees);
    localStorage.setItem("employees", JSON.stringify(newEmployees));
  };

  const teamCount = employees.filter((item) => item.teamName === activeTeam);

  const handleFormChange = (e) => {
    const newActiveTeam = e.target.value;
    setActiveTeam(newActiveTeam);
    localStorage.setItem("activeTeam", newActiveTeam);
  };
  return (
    <AppContext.Provider
      value={{
        employees,
        handleCardClick,
        activeTeam,
        teamCount,
        handleFormChange,
        setActiveTeam,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
