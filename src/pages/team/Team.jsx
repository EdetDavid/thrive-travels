import React from "react";
import img4 from "../../assets/images/team1.png";
import img5 from "../../assets/images/team2.png";
import "./Team.css";

const managementTeam = [
  { imgSrc: img4, name: "Alice Johnson", role: "CEO", bio: "Leads the company with a focus on innovation and long-term strategy." },
  { imgSrc: img5, name: "Bob Brown", role: "CTO", bio: "Leads product engineering and technology strategy." },
  { imgSrc: img4, name: "Carol White", role: "CFO", bio: "Oversees financial planning and investor relations." },
  { imgSrc: img5, name: "David Green", role: "COO", bio: "Runs operations and ensures delivery excellence." },
];

const ManagementTeam = () => {
  return (
    <section className="management-team-section">
      <div className="container">
        <header className="management-header">
          <h2 className="management-title">Management Team</h2>
          <p className="management-subtitle">Experienced leadership driving business performance.</p>
        </header>

        <div className="management-grid">
          {managementTeam.map((m, i) => (
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

export default ManagementTeam;
