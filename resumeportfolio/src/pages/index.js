import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UpworkLogo } from "@/assets/UpworkIcon";
import { FiverrLogo } from "@/assets/FiverrLogo";

const reviews = [
  {
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ead61367f279a82e617f85982d9b728f-1605271709863/3fe747bd-af31-40e7-a432-8ca9d4b71bf1.png",
    name: "Dibe84",
    review:
      "Coder2(my username on fiverr) did a great job! He understood the requirements perfectly and delivered super quickly. Thanks a lot",
  },
  {
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/960b6b7b608cff1ad48eee84e329d983-1198986541664599469898/JPEG_20221001_014428_5149239765728611381.jpg",
    name: "santiagolest804",
    review: `I recently had the pleasure of working with ebraheem on the Fiverr platform, and I must say that I am
    thoroughly impressed with the level of expertise and professionalism he brought to the table. Our company,
    Arpitools, had been struggling with a forgot password issue for our mobile app, and ebraheem was able to
    quickly diagnose and resolve the problem for us. His communication throughout the process was excellent,
    keeping us updated on his progress and ensuring that we were satisfied with the end result. He also went
    above and beyond by offering additional suggestions to improve the overall functionality of our app.
    I would highly recommend ebraheem to anyone in need of technical support`,
  },
  {
    img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/960b6b7b608cff1ad48eee84e329d983-1198986541664599469898/JPEG_20221001_014428_5149239765728611381.jpg",
    name: "santiagolest804",
    review: `Ebraheem did an excellent job. We are going to be working with him again on several other projects and improvement to be made in this one as well.`,
  },
  {
    img: "https://www.upwork.com/profile-portraits/c1f0J7fgjK1Xu2DRMqdxTCKFk6VOYeSN7chL5eHav9OjAdk-1UV4y1Ks5HdjgWBp_q",
    name: "Upwork Client",
    review: `I would like to thank Ebraheem for his awesome job. He does not get upset, annoyed for any of my silly
    questions. He is very kind and he got so much of patience. He understood the requirement well and he delivers
    before time. He took ample time to explain the code and very much helpful even after the contract ended.
    I would definitely consider him for my next project, also i would recommend him for any of my friends for any
    python projects. He never pushes to pay money ahead or upfront, he is very much professional and had good
    ethics in him.`,
  },
];

const previousExperience = [
  {
    name: "Makro Pro - SR Full Stack Developer(MERN) - Full Time - Remote",
    duration: "April 2023 - March 2024 (Contract)",
    points: [
      "Led the development of web and mobile projects, enhancing user engagement by 20%.",
      "Delivered high-quality code that met and exceeded project requirements, reducing bugs by 20% and improving performance.",
      "Implemented best practices for code quality and maintainability, reducing technical debt by 30% over 7 years of professional experience.",
      "Facilitated effective communication with team members and stakeholders, improving project workflow efficiency by 25%.",
      "Successfully met and exceeded project deadlines, ensuring timely delivery of all phases, contributing to client satisfaction.",
      "Adapted to changing project requirements, increasing project flexibility and reducing delays.",
      "Researched and integrated the latest technologies and trends, boosting development efficiency by 15%.",
      "Engineered robust, scalable, and user-friendly applications, leading to a 25% increase in user satisfaction.",
      "Contributed to the overall project success as a reliable team member, enhancing team cohesion and project outcomes.",
    ],
  },
  {
    name: "Elixir - SR MERN Stack Developer (MERN) - Full Time - Remote",
    duration: "January 2022 - February 2023",
    points: [
      "Converted UI design mockups to React JS, enhancing user interface quality and performance.",
      "Collaborated with the CTO to finalize requirements for new modules, ensuring alignment with business goals.",
      "Seamlessly integrated React JS components with backend APIs, improving application efficiency and user experience.",
      "Developed robust REST APIs, enhancing data interchange efficiency and reducing latency by 15%.",
      "Developed comprehensive unit tests for frontend and backend, ensuring 95% code coverage and reducing bugs.",
      "Mentored junior developers, fostering a collaborative environment and enhancing team productivity.",
      "Analyzed the current system and implemented end-to-end automation test cases, improving testing efficiency by 30%.",
      "Actively involved in the complete DevOps cycle, improving deployment efficiency and system reliability.",
    ],
  },
  {
    name: "10Pearls - SR Software ENG - Full Time - Remote",
    duration: "October 2020 - January 2022",
    points: [
      "Analyzed business requirements and developed new functionalities, added new features to existing functionalities, and resolved issues in previously developed features, enhancing system performance and user satisfaction.",
      "Successfully migrated features from a legacy monolithic architecture to microservices using Node.js and React, reducing system complexity and improving scalability.",
      "Led feature development and bug fixing, increasing system stability and user satisfaction.",
      "Reviewed and tracked peer developers' work, ensuring code quality and adherence to best practices.",
      "Developed REST APIs to expose data to the web client, improving data accessibility and user experience.",
      "Collaborated with UX engineers to re-theme the old application using HTML and CSS, enhancing visual appeal and user experience.",
      "Worked as part of an international team, conducting regular meetings with offshore client teams, including technical and business stakeholders, ensuring project alignment and progress.",
      "Introduced and implemented the NX tool for monorepo, streamlining code management and improving development efficiency.",
      "Developed unit and integration test cases, achieving at least 95% code coverage and ensuring robust application functionality.",
    ],
  },
  {
    name: "IngenioEC – Full Stack Developer - Full Time - Remote",
    duration: "June 2020 - October 2020",
    points: [
      "Conducted daily sync-up calls with the manager and lead to discuss status updates and identify new tasks, ensuring clear communication and project progress.",
      "Collaborated on frontend development with React, complementing REST API changes and new features, enhancing application performance and user interface.",
      "Managed Heroku servers and automated deployments upon changes to the master branch, ensuring smooth and efficient updates.",
      "Implemented real-time data fetching and display using socket.io, improving user experience and data timeliness.",
      "Led end-to-end development of the initial application versions, ensuring robust and scalable solutions.",
      "Reviewed code and mentored developers, fostering a collaborative and high-performing team environment.",
      "Led feature development and general bug fixing, enhancing application functionality and stability.",
    ],
  },
  {
    name: "WfeedBack Full Stack Developer - Full Time - Remote",
    duration: "January 2020 - July 2020",
    points: [
      "Conducted bi-weekly sync-up calls with the client to discuss status updates and identify new tasks, ensuring project alignment and progress.",
      "Developed APIs, UI, and API documentation using Postman, enhancing system functionality and documentation quality.",
      "Managed Heroku servers and automated deployments upon changes to the master branch, ensuring continuous integration and delivery.",
      "Developed features to collect real-time reviews using socket.io, improving user feedback collection and analysis.",
      "Implemented offline review collection and database updates once the app was online, ensuring data consistency and availability.",
      "Led the development and deployment of the entire web app, delivering a complete and functional solution.",
      "Despite leading development and deployment, the project was unfortunately discontinued due to the COVID-19 situation in Brazil.",
    ],
  },
  {
    name: "CARE – Full Stack Developer - Full Time - Remote",
    duration: "July 2019 - January 2020",
    points: [
      "Conducted daily sync-up calls with the client to discuss status updates and identify new tasks, ensuring clear communication and project progress.",
      "Led backend and frontend feature development and bug-fixing, enhancing system functionality and user experience.",
      "Managed deployment on the client's VPN, ensuring secure and efficient application delivery.",
    ],
  },
  {
    name: "DSS Tech – Full Stack Developer - Full Time - Remote",
    duration: "August 2017 - July 2019",
    points: [
      "Collaborated with development team members to analyze potential system solutions based on evolving client requirements, delivering tailored and effective solutions.",
      "Monitored and managed multiple databases, including MySQL, Neo4j, and Elastic Search, ensuring data integrity and availability.",
      "Developed, tested, deployed, and maintained various microservices using RabbitMQ and gRPC, improving system scalability and performance.",
      "Engineered multiple web scrapers for sites without APIs, ensuring data retrieval and processing.",
      "Retrieved and processed data from various public sites daily, ensuring timely and accurate data availability.",
      "Executed automated tasks using Python and Selenium, increasing efficiency and reducing manual workload.",
      "Successfully migrated the codebase from Python 2 to Python 3, enhancing system compatibility and performance.",
    ],
  },

  // {
  //   name: "Elixir- Senior Full Stack MERN Developer - Full Time - Hybrid",
  //   duration: "2022 - 2023",
  //   points: [
  //     "Worked on enterprise level saas application, and develop new features using React",
  //     "Work within the Product Development team, to an Agile methodology.",
  //     "Troubleshoot and fix issues in different environments",
  //     "Development of reusable components for different web applications",
  //     "Code reviews, mentoring, team building",
  //     "Wrote End-to-End test case using puppeteer",
  //     "Tech Stack => React + Puppeteer + JIRA + Git",
  //   ],
  // },
  // {
  //   name: "10Pearls- Senior Full Stack MERN Developer - Full Time - Remote",
  //   duration: "2020 - 2022",
  //   points: [
  //     "Migration of existing Monolith webapp to microservices architecture",
  //     "Client communication and requirement gathering for new features",
  //     "Worked with different clients based in US remotely",
  //     "Planning, assignment and tracking of tasks for team members",
  //     "Wrote Unit and Integration Tests for APIs",
  //     "Work in different micro-services to develop new features",
  //     "Wrote REST-ful services for new features",
  //     "Wrote End-to-End test case using cypress",
  //     "Tech Stack => React + Node + Cypress + MYSQL + JIRA + Git",
  //   ],
  // },
  // {
  //   name: "Agency- Full Stack MERN Developer - Full Time - Contract - Remote",
  //   duration: "2019 — 2020",
  //   points: [
  //     "Developed and provided support 5 different web applications",
  //     "Integrate different 3rd party services as per business needs",
  //     "Deploy applications in AWS Cloud and test in different environments",
  //     "Communicate with Project Manager and Client to gather requirements",
  //     "Design and develop application workflows end-to-end, with high-scalability in mind",
  //     "Code reviews, mentoring, team building",
  //     "Tech Stack => React + Node + Mongo + Express + Git",
  //   ],
  // },
  // {
  //   name: "DSS - Backend Developer - Full Time - Onsite",
  //   duration: "2017 — 2019",
  //   points: [
  //     "Learn and adopt new frameworks, tools and technologies mainly in Python and Node",
  //     "Moving existing web projects and scripts to different hosting platforms if needed",
  //     "Designing and development of new services in existing web app",
  //     "Provide support for projects that are already in production",
  //     "Develop RESTful APIs using Node,Express and connect it with rabbitMQ that initiates python scripts",
  //     "Tech Stack => Python + Node + MYSQL + Express + RabbitMQ + + Git",
  //   ],
  // },
];

const skills = [
  {
    name: "React",
    percentage: "85%",
  },
  {
    name: "Node (Express)",
    percentage: "83%",
  },
  {
    name: "Databases",
    percentage: "80%",
  },
  {
    name: "Python",
    percentage: "70%",
  },
  {
    name: "Web 3.0",
    percentage: "40%",
  },
];

const certs = [
  {
    title: "Explore App Development with the MERN Stack",
    subTitle: "Linkedin Certification",
    image: "cert-11.png",
    link: "./1.pdf",
  },
  {
    title: "React: Testing and Debugging",
    subTitle: "Linkedin Certification",
    image: "cert-13.png",
    link: "https://www.linkedin.com/learning/certificates/4bed58835c05dceadffbee685872a30a9786145f5829722e1e6f2c74521e3b41",
  },
  {
    title: "React.js Essential Training (2020)",
    subTitle: "Linkedin Certification",
    image: "cert-15.png",
    link: "https://www.linkedin.com/learning/certificates/557a0c7a7aa4a88e12a8cf3c8032b623e9a2a4b53716ab4fb047cbd99278bb89",
  },
  {
    title:
      "Learning Full-Stack JavaScript Development: MongoDB, Node, and React (2016)",
    subTitle: "Linkedin Certification",
    image: "cert-14.png",
    link: "https://www.linkedin.com/learning/certificates/d79beae87f71609f7989555ea5631112ce6db9e674b79b8db45c2d54d713ef7e",
  },
  {
    title: "Node.js: Testing and Code Quality",
    subTitle: "Linkedin Certification",
    image: "cert-12.png",
    link: "https://www.linkedin.com/learning/certificates/86152b9cbeee914bedcecd83411fb17fe218c590b38b711daf94f938d79ef3b1",
  },
  {
    title: "Advanced NodeJs",
    subTitle: "Udemy Certification",
    image: "cert-6.jpg",
    link: "https://www.udemy.com/certificate/UC-ec599ec6-6261-4315-bff0-55da7f3fbfad/",
  },
  {
    title: "Python",
    subTitle: "Google Certification",
    image: "cert-1.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/G3RNTWEMN7CW",
  },
  {
    title: "Github",
    subTitle: "Google Certification",
    image: "cert-2.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/6RC9HXJF528T",
  },
  {
    title: "Cloud Mangement",
    subTitle: "Google Certification",
    image: "cert-4.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/35bz5chfyrks",
  },
];
const webapps = [
  {
    title: "Ecommerce Using Next + Node + Strapi + Paypal",
    subTitle: "Web App Sample",
    image: "app3.png",
    link: "https://youtu.be/qfj3a6gHvD0",
  },
  {
    title: "CrowdFunding (web 3.0)",
    subTitle: "Web App Sample",
    image: "app2.png",
    link: "https://63fca85380789205357ee8ef--eloquent-mousse-74968b.netlify.app/",
  },
  {
    title: "Ecommerce",
    subTitle: "Web App Sample",
    image: "app1.png",
    link: "https://gorgeous-sunshine-ec47d3.netlify.app/",
  },
];

const defaultFormData = {
  fullname: "",
  email: "",
  message: "",
};

const SLCK = "https://hooks.slack.com/services/";
let SURL = SLCK + "T01614FTCD9/B04RGPW63QU/sKKWWB2WLzjkGItS2NNW3Rp4";

export default function Home() {
  const [activePage, setActivePage] = useState("about");
  const [showInfo, setShowInfo] = useState(false);
  const [openSelectBox, setOpenSelectBox] = useState(false);
  const [reviewModal, setReviewModal] = useState(null);
  const [formData, setFormData] = useState({ ...defaultFormData });
  const [activePortfolioTab, setActivePortfolioTab] = useState("ALL");
  const [samples, setSamples] = useState([...webapps, ...certs]);

  useEffect(() => {
    if (activePortfolioTab === "ALL") setSamples([...webapps, ...certs]);
    if (activePortfolioTab === "WEB") setSamples([...webapps]);
    if (activePortfolioTab === "CERT") setSamples([...certs]);
  }, [activePortfolioTab]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch(SURL, {
        method: "POST",
        body: JSON.stringify({
          text: `Fullname: ${formData.fullname}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        }),
      });
      setFormData({ ...defaultFormData });
    } catch (error) {}
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          async
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Head>
      <main>
        <aside className={`sidebar ${showInfo ? "active" : ""}`}>
          <div className="sidebar-info">
            <figure className="avatar-box">
              <Image src="/pic.jpg" alt="M Ebraheem Ijaz" width="80" />
            </figure>
            <div className="info-content">
              <h1 className="name" title="M Ebraheem Ijaz">
                M Ebraheem Ijaz
              </h1>
              <p className="title">Full Stack developer (MERN)</p>
            </div>

            <button
              className="info_more-btn"
              onClick={() => {
                setShowInfo(!showInfo);
              }}
            >
              <span>Show Contacts</span>
              <ion-icon
                name="chevron-down"
                role="img"
                className="md hydrated"
                aria-label="chevron down"
              ></ion-icon>
            </button>
          </div>

          <div className="sidebar-info_more">
            <div className="separator"></div>
            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon
                    name="mail-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="mail outline"
                  ></ion-icon>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Email</p>
                  <a
                    href="mailto:ebraheemijaz913@gmail.com"
                    className="contact-link"
                  >
                    ebraheemijaz913@gmail.com
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon
                    name="phone-portrait-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="phone portrait outline"
                  ></ion-icon>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Phone</p>
                  <a href="tel:+923137518866" className="contact-link">
                    +92-313-7518866
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon
                    name="location-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="location outline"
                  ></ion-icon>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Location</p>
                  <address>Rawalpindi, Punjab, Pakistan</address>
                </div>
              </li>
            </ul>

            <div className="separator"></div>
            <ul className="social-list">
              <li className="social-item">
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.linkedin.com/in/ebraheem-ijaz-0a685a122/"
                  className="social-link"
                >
                  <ion-icon
                    name="logo-linkedin"
                    role="img"
                    className="md hydrated"
                    aria-label="linkedin"
                  ></ion-icon>
                </a>
              </li>
              <li className="social-item">
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.upwork.com/freelancers/~011a9306f4d36f0027"
                  style={{
                    width: "1em",
                    height: "1em",
                  }}
                  className="social-link"
                >
                  <div className="icon-inner">
                    <UpworkLogo />
                  </div>
                </a>
              </li>
              <li className="social-item">
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.fiverr.com/coder2"
                  style={{
                    width: "1em",
                    height: "1em",
                  }}
                  className="social-link"
                >
                  <div className="icon-inner">
                    <FiverrLogo />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="main-content">
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <button
                  className={`navbar-link ${
                    activePage === "about" ? "active" : ""
                  }`}
                  onClick={() => setActivePage("about")}
                >
                  About
                </button>
              </li>
              <li className="navbar-item">
                <button
                  className={`navbar-link ${
                    activePage === "resume" ? "active" : ""
                  }`}
                  onClick={() => setActivePage("resume")}
                >
                  Resume
                </button>
              </li>
              <li className="navbar-item">
                <button
                  className={`navbar-link ${
                    activePage === "portfolio" ? "active" : ""
                  }`}
                  onClick={() => setActivePage("portfolio")}
                >
                  Portfolio
                </button>
              </li>
              <li className="navbar-item">
                <button
                  className={`navbar-link ${
                    activePage === "contact" ? "active" : ""
                  }`}
                  onClick={() => setActivePage("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          <article
            className={`about ${activePage === "about" ? "active" : ""}`}
          >
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
              <p>
                My name is Ebraheem, I am a senior full stack developer having
                experience more than 5 years, and I love what I do.
              </p>
              <p>
                I started my career as a web developer for a small startup in
                based in Islamabd, where I learned the fundamentals of web
                development mostly worked on backend side. From there, I moved
                onto larger projects that involved more complex programming
                languages and frameworks includes both frontend and backend. As
                my skills grew, so did my confidence in myself and my ability to
                deliver high-quality code.
              </p>
              <p>
                Nowadays, I am completely working as a freelancer, where I help
                clients with their web development needs. My job is completely
                changing every day—but one thing stays constant: delivering
                quality code. I believe in quality work, commitment to
                delivering on time and within budget, and always giving my
                clients the best experience possible.
              </p>
            </section>
            <section className="service">
              <h3 className="h3 service-title">What i am doing</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="service-icon-box"></div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">
                      Full Stack development (React +Node)
                    </h4>

                    <p className="service-item-text">
                      I can help you in web development at any stage from
                      development to deployment.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon-box"></div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">
                      BlockChain (learning phase)
                    </h4>

                    <p className="service-item-text">
                      As a side hobby, i am looking into this this new tech
                      Blockhain
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section className="testimonials">
              <h3 className="h3 testimonials-title">Testimonials</h3>
              <ul className="testimonials-list has-scrollbar">
                {reviews.map((each, index) => (
                  <li
                    className="testimonials-item"
                    key={index}
                    onClick={() => {
                      setReviewModal(reviews[index]);
                    }}
                  >
                    <div className="content-card" data-testimonials-item="">
                      <figure className="testimonials-avatar-box">
                        {/* <Image src={`${each.img}`} width="60" /> */}
                        <img src={`${each.img}`} width="60" />
                      </figure>

                      <h4 className="h4 testimonials-item-title">
                        {each.name}
                      </h4>

                      <div className="testimonials-text">
                        <p>{each.review}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <div className={`modal-container ${reviewModal ? "active" : ""}`}>
              <div
                className={`overlay ${reviewModal ? "active" : ""}`}
                onClick={() => setReviewModal(null)}
              ></div>
              <section className="testimonials-modal">
                <button
                  className="modal-close-btn"
                  onClick={() => setReviewModal(null)}
                >
                  <ion-icon
                    name="close-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="close outline"
                  ></ion-icon>
                </button>
                <div className="modal-img-wrapper">
                  <figure className="modal-avatar-box"></figure>
                </div>

                <div className="modal-content">
                  <h4 className="h3 modal-title">{reviewModal?.name}</h4>
                  <div>
                    <p>{reviewModal?.review}</p>
                  </div>
                </div>
              </section>
            </div>
            <section className="clients">
              <h3 className="h3 clients-title">Clients</h3>
              <ul className="clients-list has-scrollbar">
                <li className="clients-item">
                  <a
                    href="https://arpitools.com/"
                    rel="noreferrer"
                    target={"_blank"}
                  >
                    <Image
                      src="/client1.png"
                      alt="client logo"
                      style={{ width: 75 }}
                    />
                    {/* <img  /> */}
                  </a>
                </li>
              </ul>
            </section>
          </article>

          <article
            className={`resume ${activePage === "resume" ? "active" : ""}`}
          >
            <header>
              <h2 className="h2 article-title">Resume</h2>
            </header>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon
                    name="book-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="book outline"
                  ></ion-icon>
                </div>

                <h3 className="h3">Education</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    COMSATS University Islamabd
                  </h4>
                  <span>2013 — 2017</span>
                  <p className="timeline-text">
                    Completed Bachelor in Computer Science
                  </p>
                </li>
              </ol>
            </section>

            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon
                    name="book-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="book outline"
                  ></ion-icon>
                </div>
                <h3 className="h3">Experience</h3>
              </div>
              <ol className="timeline-list">
                {previousExperience.map((each, index) => (
                  <li className="timeline-item" key={index}>
                    <h4 className="h4 timeline-item-title">{each.name}</h4>
                    <span>{each.duration}</span>
                    <p className="timeline-text" style={{ maxWidth: "100%" }}>
                      <ul>
                        {each.points.map((eachPoint, index) => (
                          <li key={index}>{eachPoint}</li>
                        ))}
                      </ul>
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="skill">
              <h3 className="h3 skills-title">My skills</h3>
              <ul className="skills-list content-card">
                {skills.map((each, index) => (
                  <li className="skills-item" key={index}>
                    <div className="title-wrapper">
                      <h5 className="h5">{each.name}</h5>
                      <data value="80">{each.percentage}</data>
                    </div>
                    <div className="skill-progress-bg">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${each.percentage || "0%"}` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <article
            className={`portfolio ${
              activePage === "portfolio" ? "active" : ""
            }`}
          >
            <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <section className="projects">
              <ul className="filter-list">
                <li className="filter-item">
                  <button
                    onClick={() => setActivePortfolioTab("ALL")}
                    className={`${
                      activePortfolioTab === "ALL" ? "active" : ""
                    }`}
                  >
                    All
                  </button>
                </li>
                <li className="filter-item">
                  <button
                    onClick={() => setActivePortfolioTab("WEB")}
                    className={`${
                      activePortfolioTab === "WEB" ? "active" : ""
                    }`}
                  >
                    Web Apps
                  </button>
                </li>
                <li className="filter-item">
                  <button
                    onClick={() => setActivePortfolioTab("CERT")}
                    className={`${
                      activePortfolioTab === "CERT" ? "active" : ""
                    }`}
                  >
                    Certification
                  </button>
                </li>
              </ul>
              <div
                className="filter-select-box"
                onClick={() => setOpenSelectBox(!openSelectBox)}
              >
                <button
                  className={`filter-select ${openSelectBox ? "active" : ""}`}
                >
                  <div className="select-value">
                    {activePortfolioTab === "ALL" && <>All</>}
                    {activePortfolioTab === "WEB" && <>Web Apps</>}
                    {activePortfolioTab === "CERT" && <>Certification</>}
                  </div>
                  <div className="select-icon">
                    <ion-icon
                      name="chevron-down"
                      role="img"
                      className="md hydrated"
                      aria-label="chevron down"
                    ></ion-icon>
                  </div>
                </button>
                <ul className="select-list">
                  <li className="select-item">
                    <button
                      onClick={() => setActivePortfolioTab("ALL")}
                      className={`${
                        activePortfolioTab === "ALL" ? "active" : ""
                      }`}
                    >
                      All
                    </button>
                  </li>
                  <li className="select-item">
                    <button
                      onClick={() => setActivePortfolioTab("WEB")}
                      className={`${
                        activePortfolioTab === "WEB" ? "active" : ""
                      }`}
                    >
                      Web Apps
                    </button>
                  </li>
                  <li className="select-item">
                    <button
                      onClick={() => setActivePortfolioTab("CERT")}
                      className={`${
                        activePortfolioTab === "CERT" ? "active" : ""
                      }`}
                    >
                      Certification
                    </button>
                  </li>
                </ul>
              </div>

              <ul className="project-list">
                {samples.map((each, index) => (
                  <li className="project-item  active" key={index}>
                    <a href={each.link} rel="noreferrer" target={"_blank"}>
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon
                            name="eye-outline"
                            role="img"
                            className="md hydrated"
                            aria-label="eye outline"
                          ></ion-icon>
                        </div>
                        {/* <img src={each.image} /> */}
                        <Image
                          src={`/${each.image}`}
                          loading="lazy"
                          alt={each.title}
                          width={100}
                          height={100}
                        />
                      </figure>
                      <h3 className="project-title">{each.title}</h3>
                      <p className="project-category">{each.subTitle}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <article
            className={`contact ${activePage === "contact" ? "active" : ""}`}
          >
            <header>
              <h2 className="h2 article-title">Contact</h2>
            </header>
            <section className="contact-form">
              <h3 className="h3 form-title">Contact Form</h3>
              <form onSubmit={handleSubmit} className="form">
                <div className="input-wrapper">
                  <input
                    onChange={(e) => {
                      setFormData({ ...formData, fullname: e.target.value });
                    }}
                    value={formData.fullname}
                    type="text"
                    name="fullname"
                    className="form-input"
                    placeholder="Full name"
                    required
                  />
                  <input
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    value={formData.email}
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Email address"
                    required
                  />
                </div>
                <textarea
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                  }}
                  value={formData.message}
                  name="message"
                  className="form-input"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button className="form-btn" type="submit">
                  <ion-icon
                    name="paper-plane"
                    role="img"
                    className="md hydrated"
                    aria-label="paper plane"
                  ></ion-icon>
                  <span>Send Message</span>
                </button>
              </form>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
