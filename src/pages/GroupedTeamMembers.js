import React from "react";
import { useGlobalContext } from "../context";
import SingleGroup from "./SingleGroup";

const GroupedTeamMembers = () => {
  const { employees } = useGlobalContext();
  function groupTeams() {
    const allTeams = ["TeamA", "TeamB", "TeamC", "TeamD"];
    const groupedTeam = allTeams.map((team) => {
      const arr = employees.filter((employee) => {
        return employee.teamName === team;
      });
      return { team, members: arr };
    });
    return groupedTeam;
  }

  return (
    <main className="grouped-team">
      {groupTeams().map((group, index) => {
        return <SingleGroup key={index} {...group} />;
      })}
    </main>
  );
};

export default GroupedTeamMembers;
