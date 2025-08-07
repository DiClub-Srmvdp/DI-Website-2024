import React from "react";

const heads = [
  {
    name: "Dr Golda Dilip",
    title: "Head of Department",
    
    imgSrc: "/assets/img/team/golda mam.jpg",
  },
  {
    name: "Ms.M.Indumathy",
    title: "Faculty-Incharge",
    
    imgSrc: "/assets/img/team/ms.m.indumathy.jpeg",
  },
  {
    name: "Dr.M.Kiruthiga Devi",
    title: "Faculty-Incharge",
    
    imgSrc: "/assets/img/team/KiruthigaDeviMam.webp",
  },
  {
    name: "K V Mognapriya",
    title: "President",
    description: "Leads with vision, dedication, and an unwavering commitment to excellence.",
    imgSrc: "/assets/img/team/President.jpeg",
  },
  {
    name: "Sowmya G",
    title: "Vice-President",
    description: "Ensures structure and precision while fostering a collaborative environment.",
    imgSrc: "/assets/img/team/VicePresident.jpeg",
  },
  {
    name: "Kirthika Hariram",
    title: "Secretary",
    description: "Coordinates activities with diligence and ensures smooth operations.",
    imgSrc: "/assets/img/team/kirthika.jpg",
  },
  {
    name: "Sowmya G",
    title: "Treasurer",
    description: "Maintains financial accuracy with responsibility and strategic planning.",
    imgSrc: "/assets/img/team/VicePresident.jpeg",
  },
  {
    name: "Dev Mehta",
    title: "Joint Treasurer",
    description: "Supports financial operations with insight, discipline, and diligence.",
    imgSrc: "/assets/img/team/Dev Mehta.jpeg",
  },
  {
    name: "Lalith Abhishek G",
    title: "Technical Head",
    description: "Delivers technical solutions with clarity, depth, and precision.",
    imgSrc: "/assets/img/team/lalith.jpeg",
  },
  {
    name: "Y Sai Dheeraj",
    title: "Joint Technical Head",
    description: "Approaches every task with quiet determination and strong problem-solving.",
    imgSrc: "/assets/img/team/SaiDheeraj.png",
  },
  {
  name: "Saranya Purushothaman",
  title: "Design Head",
  description: "Applies design expertise to enhance visual identity and brand coherence.",
  imgSrc: "/assets/img/team/SaranyaPurushothaman.jpeg",
  },
  {
    name: "M Jaiaakash",
    title: "Joint Head of Design",
    description: "Executes design strategies with creativity, skill, and precision.",
    imgSrc: "/assets/img/team/JaiAakash.jpeg",
  },
  {
    name: "Hemachandru",
    title: "Head of Logistics & Operations",
    description: "Manages logistics with hands-on execution and strong commitment.",
    imgSrc: "/assets/img/team/hemachandru.png",
  },
  {
    name: "Paarivalavan S",
    title: "Joint Head of Logistics & Operations",
    description: "Ensures smooth operations with speed, adaptability, and reliability.",
    imgSrc: "/assets/img/team/paarivalavan.jpeg",
  },
  {
    name: "Kirthika Hariram",
    title: "Head of PR & Outreach",
    description: "Builds meaningful connections and ensures impactful outreach.",
    imgSrc: "/assets/img/team/kirthika.jpg",
  },
  {
    name: "Labana Milendra",
    title: "Joint Head of PR & Outreach",
    description: "Drives engagement with energy, communication, and strategic networking.",
    imgSrc: "/assets/img/team/LabanaMilendra.jpeg",
  },
  {
    name: "Ashwath Maadev M",
    title: "Head of Working Committee",
    description: "Proactively secures resources and ensures operational readiness.",
    imgSrc: "/assets/img/team/ashwath.jpeg",
  },
  {
    name: "Sahithyaa Krishna Kumar",
    title: "Joint Head of Working Committee",
    description: "Ensures timely completion of tasks through coordination and responsibility",
    imgSrc: "/assets/img/team/Sahityaa.jpeg",
  },
  {
    name: "Jalanika R R",
    title: "Head of Content & Social Media",
    description: "Leads content with creativity, punctuality, and consistent quality.",
    imgSrc: "/assets/img/team/jalanika.jpeg",
  },
  {
    name: "Charu Nethra R",
    title: "Joint Head of Content & Social Media",
    description: "Brings creativity and clarity to every communication she handles.",
    imgSrc: "/assets/img/team/Charu Nethra.jpg",
  },
  {
    name: "B Manoj Kumar",
    title: "People Officer",
    description: "Supports team cohesion and resolves challenges with initiative and confidence.",
    imgSrc: "/assets/img/team/manoj.jpg",
  },
  {
    name: "Sarvesh S",
    title: "Joint People Officer",
    description: "Bridges communication and encourages open, effective teamwork.",
    imgSrc: "/assets/img/team/sarvesh.jpeg",
  },
  {
    name: "Ashwath Maadev M",
    title: "Head of Resource Management",
    description: "Ensures resource allocation and management with strategic foresight.",
    imgSrc: "/assets/img/team/ashwath.jpeg",
  },
  {
    name: "Vignesh Murali",
    title: "Joint Head of Resource Management",
    description: "Manages resources with a focus on efficiency and strategic planning.",
    imgSrc: "/assets/img/team/vigneshmurali.jpeg",
  },
  {
    name: "Vijay T S",
    title: "Head of Visual Media",
    description: "Documents every moment with dedication and technical excellence.",
    imgSrc: "/assets/img/team/vijay.jpeg",
  },
  {
    name:"G P Deepti Varsha",
    title: "Joint Head of Visual Media",
    description: "Supports media documentation with calm efficiency and artistic focus.",
    imgSrc: "/assets/img/team/DeeptiVarsha.jpeg",
  }
];

export default function TeamPage() {
  return (
    <main>
      <section className="di-banner"></section>
      <section className="team-wrapper">
        <div className="team-title my-4 pt-5">
          <h1>
            <span>T</span>eam
          </h1>
          <p>The powers that be</p>
        </div>
        <div className="team-body">
          {heads.map((member, index) => (
            <TeamMember key={index} idx={index} name={member.name} title={member.title} description={member.description} imgSrc={member.imgSrc} />
          ))}
        </div>
      </section>
    </main>
  );
}

const TeamMember = ({ name, title, description, imgSrc, idx }) => {
  const isLeft = idx % 2 === 0;
  return (
    <div className="row mb-5" data-aos="fade-up" data-aos-duration="1000" key={idx}>
      <div className={`team-text col-12 col-md-6 ${isLeft ? `order-1` : "order-1 order-md-0"}`}>
        <div className="team-name mt-4 mt-md-0">
          <h2>{name}</h2>
          <h5>{title}</h5>
        </div>
        {description && (
          <div className="team-position">
            <p>{description}</p>
          </div>
        )}
      </div>
      <div className={`team-imagebox col-12 col-md-6 ${isLeft ? "order-0" : "order-0 order-md-1"}`}>
        <div className="team-image">
          <img src={imgSrc} alt={name} />
        </div>
      </div>
    </div>
  );
};
