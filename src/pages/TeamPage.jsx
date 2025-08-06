import React from "react";

const heads = [
  {
    name: "Dr Golda Dilip",
    title: "Head of Department",
    description: "Guiding the way, one department at a time.",
    imgSrc: "/assets/img/team/golda mam.jpg",
  },
  {
    name: "Ms.M.Indumathy",
    title: "Faculty-Incharge",
    description: "Nurturing minds, shaping futures.",
    imgSrc: "/assets/img/team/ms.m.indumathy.jpeg",
  },
  {
    name: "Dr.M.Kiruthiga Devi",
    title: "Faculty-Incharge",
    description: "Nurturing minds, shaping futures.",
    imgSrc: "/assets/img/team/KiruthigaDeviMam.webp",
  },
  {
    name: "K V Mognapriya",
    title: "President",
    description: "Leading with vision, making dreams reality.",
    imgSrc: "/assets/img/team/President.jpeg",
  },
  {
    name: "Sowmya G",
    title: "Vice-President",
    description: "Supporting the president, shaping the future.",
    imgSrc: "/assets/img/team/VicePresident.jpeg",
  },
  {
    name: "Kirthika Hariram",
    title: "Secretary",
    description: "Organizing chaos, one task at a time.",
    imgSrc: "/assets/img/team/kirthika.jpg",
  },
  {
    name: "Sowmya G",
    title: "Treasurer",
    description: "Balancing the books, securing the future.",
    imgSrc: "/assets/img/team/VicePresident.jpeg",
  },
  {
    name: "Dev Mehta",
    title: "Joint Treasurer",
    imgSrc: "/assets/img/team/Dev Mehta.jpeg",
  },
  {
    name: "Lalith Abhishek G",
    title: "Technical Head",
    description: "Pioneering innovation, mastering technology.",
    imgSrc: "/assets/img/team/lalith.jpeg",
  },
  {
    name: "Y Sai Dheeraj",
    title: "Joint Technical Head",
    imgSrc: "/assets/img/team/SaiDheeraj.png",
  },
  {
  name: "Saranya Purushothaman",
  title: "Design Head",
  description: "Designing the future, one pixel at a time.",
  imgSrc: "/assets/img/team/SaranyaPurushothaman.jpeg",
  },
  {
    name: "M Jaiaakash",
    title: "Joint Head of Design",
    imgSrc: "/assets/img/team/JaiAakash.jpeg",
  },
  {
    name: "Hemachandru",
    title: "Head of Logistics & Operations",
    description: "Seamless execution, behind the scenes.",
    imgSrc: "/assets/img/team/hemachandru.png",
  },
  {
    name: "Paarivalavan S",
    title: "Joint Head of Logistics & Operations",
    imgSrc: "/assets/img/team/paarivalavan.jpeg",
  },
  {
    name: "Kirthika Hariram",
    title: "Head of PR & Outreach",
    description: "Building bridges, one story at a time.",
    imgSrc: "/assets/img/team/kirthika.jpg",
  },
  {
    name: "Labana Milendra",
    title: "Joint Head of PR & Outreach",
    imgSrc: "/assets/img/team/LabanaMilendra.jpeg",
  },
  {
    name: "Ashwath Maadev M",
    title: "Head of Working Committee",
    description: "Efficiency in action, excellence in results.",
    imgSrc: "/assets/img/team/ashwath.jpeg",
  },
  {
    name: "Sahithyaa Krishna Kumar",
    title: "Joint Head of Working Committee",
    imgSrc: "/assets/img/team/Sahityaa.jpeg",
  },
  {
    name: "Jalanika R R",
    title: "Head of Content & Social Media",
    description: "Crafting stories, one word at a time.",
    imgSrc: "/assets/img/team/jalanika.jpeg",
  },
  {
    name: "Charu Nethra R",
    title: "Joint Head of Content & Social Media",
    imgSrc: "/assets/img/team/Charu Nethra.jpg",
  },
  {
    name: "B Manoj Kumar",
    title: "People Officer",
    description: "Empowering the team, amplifying the voice.",
    imgSrc: "/assets/img/team/manoj.jpg",
  },
  {
    name: "Sarvesh S",
    title: "Joint People Officer",
    imgSrc: "/assets/img/team/sarvesh.jpeg",
  },
  {
    name: "Ashwath Maadev M",
    title: "Head of Resource Management",
    description: "Sourcing the best, for the best.",
    imgSrc: "/assets/img/team/ashwath.jpeg",
  },
  {
    name: "Vignesh Murali",
    title: "Joint Head of Resource Management",
    imgSrc: "/assets/img/team/vigneshmurali.jpeg",
  },
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
