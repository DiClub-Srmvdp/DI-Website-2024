import React from "react";

const teamData = [
  {
    name: "Dr S Prasanna Devi",
    title: "Head of Department",
    description: "Guiding the way, one department at a time.",
    imgSrc: "/assets/img/team/transparent-hod.jpg",
  },
  {
    name: "Mrs M Indumathy",
    title: "Faculty-Incharge",
    description: "Nurturing minds, shaping futures.",
    imgSrc: "/assets/img/team/transparent-indumathy maam.jpg",
  },
  {
    name: "Mrs D Punitha",
    title: "Faculty Coordinator",
    description: "Connecting knowledge with passion.",
    imgSrc: "/assets/img/team/transparent-punita maam.jpg",
  },
  {
    name: "Ashish Tarun R",
    title: "President",
    description: "Leading with vision, making dreams reality.",
    imgSrc: "/assets/img/team/transparent-Ashish Tarun R.png",
  },
  {
    name: "Mayuri Mahimaa Balaji",
    title: "Vice-President",
    description: "Supporting the president, shaping the future.",
    imgSrc: "/assets/img/team/transparent-mayuri.png",
  },
  {
    name: "Yahool Perumal E",
    title: "Secretary",
    description: "Organizing chaos, one task at a time.",
    imgSrc: "/assets/img/team/transparent-yahool.png",
  },
  {
    name: "Priyadharshini B",
    title: "Public Relations Officer",
    description: "Building bridges, one story at a time.",
    imgSrc: "/assets/img/team/transparent-priya.png",
  },
  {
    name: "Sruthi S",
    title: "Treasurer",
    description: "Balancing the books, securing the future.",
    imgSrc: "/assets/img/team/transparent-sruthi.png",
  },
  {
    name: "J V K Kamlesh",
    title: "Joint Secretary",
    description: "Supporting the team, doubling the impact.",
    imgSrc: "/assets/img/team/transparent-kamlesh.png",
  },
  {
    name: "Niresha D",
    title: "Head of Operations",
    description: "Efficiency in action, excellence in results.",
    imgSrc: "/assets/img/team/transparent-niresha.png",
  },
  {
    name: "Atheeq Rahman",
    title: "Technical Head",
    description: "Pioneering innovation, mastering technology.",
    imgSrc: "/assets/img/team/transparent-atheeq.png",
  },
  {
    name: "Bhavishya S M",
    title: "Design Head",
    description: "Designing the future, one pixel at a time.",
    imgSrc: "/assets/img/team/transparent-bhavishya.png",
  },
  {
    name: "Jawahar V",
    title: "Creative Head",
    description: "Imagination knows no boundaries.",
    imgSrc: "/assets/img/team/transparent-jawahar.png",
  },
  {
    name: "Madhumitha",
    title: "Joint Technical Head",
    description: "Collaborating for technical excellence.",
    imgSrc: "/assets/img/team/transparent-madhu.png",
  },
  {
    name: "Sarayu K",
    title: "Social Media Head",
    description: "Connecting, engaging, and inspiring.",
    imgSrc: "/assets/img/team/transparent-sarayu.png",
  },
  {
    name: "Mahalakshmi",
    title: "Head of Logistics",
    description: "Seamless execution, behind the scenes.",
    imgSrc: "/assets/img/team/transparent-maha.png",
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
          {teamData.map((member, index) => (
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
        <div className="team-position mt-4">
          <p>{description}</p>
        </div>
      </div>
      <div className={`team-imagebox col-12 col-md-6 ${isLeft ? "order-0" : "order-0 order-md-1"}`}>
        <div className="team-image">
          <img src={imgSrc} alt={name} />
        </div>
      </div>
    </div>
  );
};
