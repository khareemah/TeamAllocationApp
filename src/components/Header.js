import React from "react";
import { useGlobalContext } from "../context";

const Header = () => {
  const { activeTeam, teamCount } = useGlobalContext();

  return (
    <>
      <h3>Team Allocation</h3>
      <h4>
        {activeTeam} has {teamCount.length} team{" "}
        {teamCount > 1 ? "memebers" : "member"}
      </h4>
    </>
  );
};

export default Header;
