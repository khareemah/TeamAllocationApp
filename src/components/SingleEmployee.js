import React from "react";
import { useGlobalContext } from "../context";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const SingleEmployee = ({ fullName, designation, gender, teamName, id }) => {
  const { handleCardClick, activeTeam } = useGlobalContext();
  return (
    <article
      onClick={() => handleCardClick(id)}
      className={
        activeTeam === teamName
          ? "single-employee active-employee"
          : "single-employee"
      }
    >
      <img
        src={gender === "female" ? femaleProfile : maleProfile}
        alt={fullName}
        className="img"
      />
      <footer>
        <h5>{fullName}</h5>
        <h5>{designation}</h5>
      </footer>
    </article>
  );
};

export default SingleEmployee;
