import React from "react";
import { useGlobalContext } from "../context";

const Header = () => {
  const { activeTeam, teamCount } = useGlobalContext();

  return (
    <>
      <h1>Team Allocation</h1>
      <h3>
        {activeTeam} has {teamCount.length} team{" "}
        {teamCount > 1 ? "memebers" : "member"}
      </h3>
    </>
  );
};

export default Header;
