import React, { useMemo } from "react";
import male from "../../assets/images/male-avatar.png";
import female from "../../assets/images/female-avatar.png";
import david from "../../assets/images/team/David.png";
import modupe from "../../assets/images/team/Modupe.png";
import kome from "../../assets/images/team/Kome.png";
import saheed from "../../assets/images/team/saheed.png";
import "./Team.css";

const TEAM_MEMBERS = [
  {
    id: "oghenekome-ogbe",
    imgSrc: kome,
    name: "Oghenekome Ogbe",
    role: "R.M Energy & FIs",
    department: "Business Development",
  },
  {
    id: "modupe-onoshokun",
    imgSrc: modupe,
    name: "Modupeola Onoshokun",
    role: "R.M Corporates",
    department: "Business Development",
  },
  {
    id: "monisola-olabanji",
    imgSrc: female,
    name: "Monisola Olabanji",
    role: "R.M SMEs & Retails",
    department: "Business Development",
  },
  {
    id: "ogechi-stanley-duru",
    imgSrc: female,
    name: "Ogechi Stanley-Duru",
    role: "Ticketing Officer",
    department: "Operations",
  },
  {
    id: "aliyah-surajudeen",
    imgSrc: female,
    name: "Aliyah Surajudeen",
    role: "Ticketing Officer",
    department: "Operations",
  },
  {
    id: "saheed-omitogun",
    imgSrc: saheed,
    name: "Saheed Omitogun",
    role: "Accounts Officer",
    department: "Finance.",
  },
  {
    id: "susam-samson",
    imgSrc: male,
    name: "Susam Samson",
    role: "Admin Officer",
    department: "Administration",
  },
  {
    id: "david-edet",
    imgSrc: david,
    name: "David Edet",
    role: "IT Support Officer",
    department: "Information Technology",
  },
];

/**
 * TeamMemberCard - Displays individual team member information
 * @component
 */
const TeamMemberCard = React.memo(({ member }) => {
  return (
    <div className="team-member-card-wrapper">
      <article className="team-member-card" data-member-id={member.id}>
        {/* Image Container */}
        <div className="team-member-image">
          <img
            src={member.imgSrc}
            alt={member.name}
            className="team-member-photo"
            loading="lazy"
            title={member.name}
          />
          <div className="team-member-overlay" />
        </div>

        {/* Content Container */}
        <div className="team-member-content">
          <header className="team-member-header">
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
          </header>

          <footer className="team-member-footer">
            <span className="team-member-department">{member.department}</span>
          </footer>
        </div>
      </article>
    </div>
  );
});

TeamMemberCard.displayName = "TeamMemberCard";

/**
 * SectionHeader - Displays section title
 * @component
 */
const SectionHeader = () => (
  <div className="team-section-header" data-aos="fade-up">
    <div className="team-header-content">
      <h2 className="team-section-title">Other Team Members</h2>
    </div>
  </div>
);

/**
 * TeamGrid - Container for team member cards
 * @component
 */
const TeamGrid = ({ members }) => (
  <div className="team-grid-wrapper" data-aos="zoom-in">
    <div className="team-grid">
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  </div>
);

/**
 * OtherTeamMembers - Displays team members list with organized layout
 * @component
 */
const OtherTeamMembers = () => {
  const teamMembers = useMemo(() => TEAM_MEMBERS, []);

  return (
    <section
      className="management-team-section"
      aria-label="Team Members"
    >
      <div className="team-container">
        <SectionHeader />
        <TeamGrid members={teamMembers} />
      </div>
    </section>
  );
};

export default OtherTeamMembers;
