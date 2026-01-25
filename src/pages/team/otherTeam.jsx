import React from "react";
import male from "../../assets/images/male-avatar.png";
import female from "../../assets/images/female-avatar.png";
import david from "../../assets/images/team/David.png"
import modupe from "../../assets/images/team/Modupe.png"
import kome from "../../assets/images/team/Kome.png"
import "./Team.css";

const managementMembers = [
  {
    imgSrc: kome,
    name: "Oghenekome Ogbe",
    role: "R.M Energy & FIs",
    bio: "Leads the company with a focus on innovation and long-term strategy.",
  },
  {
    imgSrc: modupe,
    name: "Modupeola Onoshokun",
    role: "R.M Corporates",
    bio: "Leads product engineering and technology strategy.",
  },
  {
    imgSrc: female,
    name: "Monisola Olabanji",
    role: "R.M SMEs & Retails",
    bio: "Oversees financial planning and investor relations.",
  },
  {
    imgSrc: female,
    name: "Ogechi Stanley-Duru",
    role: "Ticketing Officer",
    bio: "Runs operations and ensures delivery excellence.",
  },
  {
    imgSrc: male,
    name: "Saheed Omitogun",
    role: "Accounts Officer",
    bio: "Runs operations and ensures delivery excellence.",
  },
  {
    imgSrc: male,
    name: "Susam Samson",
    role: "Accounts Officer",
    bio: "Runs operations and ensures delivery excellence.",
  },
  {
    imgSrc: david,
    name: "David Edet",
    role: "IT Support Officer",
    bio: "Runs operations and ensures delivery excellence.",
  },
];

const OtherTeamMembers = () => {
  return (
    <section className="management-team-section">
      <div className="container">
        <header className="management-header">
          <h2 className="management-title">Other Team Members</h2>
          <p className="management-subtitle">
            Experienced leadership driving business performance.
          </p>
        </header>

        <div className="management-grid">
          {managementMembers.map((m, i) => (
            <article className="management-card" key={i} tabIndex={0}>
              <div className="card-media">
                <img src={m.imgSrc} alt={m.name} className="card-photo" />
              </div>
              <div className="card-body">
                <h3 className="card-name">{m.name}</h3>
                <p className="card-role">{m.role}</p>
                <p className="card-bio">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherTeamMembers;
