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
    <article className="single-group">
      <h4 onClick={handleteamClick} className="title">
        {team}
      </h4>
      <>{showInfo && <Team members={members} />}</>
    </article>
  );
};

export default SingleGroup;
