import React from "react";

const Team = ({ members }) => {
  return (
    <article>
      {members.map((member) => {
        return (
          <div key={member.id} className="team-members">
            <p>{member.fullName}</p>
            <p>{member.designation}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Team;
