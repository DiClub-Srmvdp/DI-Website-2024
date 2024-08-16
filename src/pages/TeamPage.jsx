import React from "react";

const heads = [
  {
    name: "Dr S Prasanna Devi",
    title: "Head of Department",
    description: "Guiding the way, one department at a time.",
    imgSrc: "/assets/img/team/hod.jpg",
  },
  {
    name: "Dr Golda Dilip",
    title: "Faculty-Incharge",
    description: "Nurturing minds, shaping futures.",
    imgSrc: "/assets/img/team/golda mam.jpg",
  },
  {
    name: "Bhavishya S M",
    title: "President",
    description: "Leading with vision, making dreams reality.",
    imgSrc: "/assets/img/team/bhavishya.jpg",
  },
  {
    name: "Niresha D",
    title: "Vice-President",
    description: "Supporting the president, shaping the future.",
    imgSrc: "/assets/img/team/niresha.jpg",
  },
  {
    name: "Kamlesh J V K",
    title: "Secretary",
    description: "Organizing chaos, one task at a time.",
    imgSrc: "/assets/img/team/kamleshjvk.jpg",
  },
  {
    name: "Srinivasan S",
    title: "Treasurer",
    description: "Balancing the books, securing the future.",
    imgSrc: "/assets/img/team/srinivasan.jpg",
  },
  {
    name: "Viraj Patel",
    title: "Technical Head",
    description: "Pioneering innovation, mastering technology.",
    imgSrc: "/assets/img/team/viraj.jpg",
  },
  // {
  //   name: "Vishwajith S",
  //   title: "Design Head",
  //   description: "Designing the future, one pixel at a time.",
  //   imgSrc: "/assets/img/team/vishwajith.jpg",
  // },
  {
    name: "Ganesh Kumar",
    title: "Head of Logistics & Operations",
    description: "Seamless execution, behind the scenes.",
    imgSrc: "/assets/img/team/ganesh.jpg",
  },
  {
    name: "Ashwath Amudhan C A",
    title: "Head of Outreach",
    description: "Building bridges, one story at a time.",
    imgSrc: "/assets/img/team/ashwath.jpg",
  },
  {
    name: "Mahaalakshmi M",
    title: "Head of Working Committee",
    description: "Efficiency in action, excellence in results.",
    imgSrc: "/assets/img/team/mahaalakshmi.jpg",
  },
  {
    name: "Aditi Walunj",
    title: "Head of Content & Social Media",
    description: "Crafting stories, one word at a time.",
    imgSrc: "/assets/img/team/aditi.png",
  },
  {
    name: "Nivetha K",
    title: "People Officer",
    description: "Empowering the team, amplifying the voice.",
    imgSrc: "/assets/img/team/nivetha.jpg",
  },
  {
    name: "Kanishk J",
    title: "Head of Resource Management",
    description: "Sourcing the best, for the best.",
    imgSrc: "/assets/img/team/kanishk.jpg",
  },
];

const jointHeads = [
  {
    name: "Mognapriya",
    title: "Joint Treasurer",
    imgSrc: "/assets/img/team/mognapriya.jpg",
  },
  {
    name: "Lalith Abishek",
    title: "Joint Technical Head",
    imgSrc: "/assets/img/team/lalith.jpg",
  },
  {
    name: "Venkat G",
    title: "Joint Head of Design",
    imgSrc: "/assets/img/team/venkat.jpg",
  },
  {
    name: "Hemachandru",
    title: "Joint Head of Logistics & Operations",
    imgSrc: "/assets/img/team/hemachandru.png",
  },
  {
    name: "Kirthika",
    title: "Joint Head of Outreach",
    imgSrc: "/assets/img/team/kirthika.jpg",
  },
  {
    name: "Sowmya G",
    title: "Joint Head of Working Committee",
    imgSrc: "/assets/img/team/sowmya.jpg",
  },
  {
    name: "T N Shreya",
    title: "Joint Head of Content & Social Media",
    imgSrc: "/assets/img/team/shreya.jpg",
  },
  {
    name: "Mridulla",
    title: "Joint People Officer",
    imgSrc: "/assets/img/team/mridulla.jpg",
  },
  {
    name: "Manoj kumar",
    title: "Joint Head of Resource Management",
    imgSrc: "/assets/img/team/manoj.jpg",
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
          {jointHeads.map((member, index) => (
            <TeamMember key={index} idx={index+1} name={member.name} title={member.title} description={member.description} imgSrc={member.imgSrc} />
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
          <div className="team-position mt-4">
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
