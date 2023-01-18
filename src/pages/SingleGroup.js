import React, { useState } from "react";
import { useGlobalContext } from "../context";
import Team from "./Team";

const SingleGroup = ({ team, members }) => {
  const { setActiveTeam } = useGlobalContext();
  const [showInfo, setShowInfo] = useState(false);
  function handleteamClick(e) {
    setShowInfo(!showInfo);
    setActiveTeam(e.currentTarget.textContent);
  }
  return (
    <div>
      <h1 onClick={handleteamClick} className="title">
        {team}
      </h1>
      <>{showInfo && <Team members={members} />}</>
    </div>
  );
};

export default SingleGroup;
