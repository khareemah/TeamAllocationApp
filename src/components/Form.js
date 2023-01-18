import React from "react";
import { useGlobalContext } from "../context";

const Form = () => {
  const { handleFormChange, activeTeam } = useGlobalContext();
  return (
    <form>
      <select value={activeTeam} onChange={handleFormChange}>
        <option value="TeamA">Team A</option>
        <option value="TeamB">Team B</option>
        <option value="TeamC">Team C</option>
        <option value="TeamD">Team D</option>
      </select>
    </form>
  );
};

export default Form;
