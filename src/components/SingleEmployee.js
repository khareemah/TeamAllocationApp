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
        activeTeam === teamName ? "employee active-employee" : "employee"
      }
    >
      <img
        src={gender === "female" ? femaleProfile : maleProfile}
        alt={fullName}
      />
      <div className="employee-info">
        <p>
          <span>Name</span>: {fullName}
        </p>
        <p>
          <span>Designation</span>: {designation}
        </p>
      </div>
    </article>
  );
};

export default SingleEmployee;
