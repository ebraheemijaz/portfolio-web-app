import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { UpworkLogo } from '@/assets/UpworkIcon';
import { FiverrLogo } from '@/assets/FiverrLogo';

const reviews = [
  {
    img: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ead61367f279a82e617f85982d9b728f-1605271709863/3fe747bd-af31-40e7-a432-8ca9d4b71bf1.png',
    name: 'Dibe84',
    review: 'Coder2(my username on fiverr) did a great job! He understood the requirements perfectly and delivered super quickly. Thanks a lot'
  },
  {
    img: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/960b6b7b608cff1ad48eee84e329d983-1198986541664599469898/JPEG_20221001_014428_5149239765728611381.jpg',
    name: 'santiagolest804',
    review: `I recently had the pleasure of working with ebraheem on the Fiverr platform, and I must say that I am
    thoroughly impressed with the level of expertise and professionalism he brought to the table. Our company,
    Arpitools, had been struggling with a forgot password issue for our mobile app, and ebraheem was able to
    quickly diagnose and resolve the problem for us. His communication throughout the process was excellent,
    keeping us updated on his progress and ensuring that we were satisfied with the end result. He also went
    above and beyond by offering additional suggestions to improve the overall functionality of our app.
    I would highly recommend ebraheem to anyone in need of technical support`,
  },
  {
    img: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/960b6b7b608cff1ad48eee84e329d983-1198986541664599469898/JPEG_20221001_014428_5149239765728611381.jpg',
    name: 'santiagolest804',
    review: `Ebraheem did an excellent job. We are going to be working with him again on several other projects and improvement to be made in this one as well.`,
  },
  {
    img: 'https://www.upwork.com/profile-portraits/c1f0J7fgjK1Xu2DRMqdxTCKFk6VOYeSN7chL5eHav9OjAdk-1UV4y1Ks5HdjgWBp_q',
    name: 'Upwork Client',
    review: `I would like to thank Ebraheem for his awesome job. He does not get upset, annoyed for any of my silly
    questions. He is very kind and he got so much of patience. He understood the requirement well and he delivers
    before time. He took ample time to explain the code and very much helpful even after the contract ended.
    I would definitely consider him for my next project, also i would recommend him for any of my friends for any
    python projects. He never pushes to pay money ahead or upfront, he is very much professional and had good
    ethics in him.`
  },
]

const previousExperience = [
  {
    name: 'Elixir- Senior Full Stack MERN Developer - Full Time - Hybrid',
    duration: '2022 - 2023',
    points: [
      'Worked on enterprise level saas application, and develop new features using React',
      'Work within the Product Development team, to an Agile methodology.',
      'Troubleshoot and fix issues in different environments',
      'Development of reusable components for different web applications',
      'Code reviews, mentoring, team building',
      'Wrote End-to-End test case using puppeteer',
      'Tech Stack => React + Puppeteer + JIRA + Git'
    ]
  },
  {
    name: '10Pearls- Senior Full Stack MERN Developer - Full Time - Remote',
    duration: '2020 - 2022',
    points: [
      'Migration of existing Monolith webapp to microservices architecture',
      'Client communication and requirement gathering for new features',
      'Worked with different clients based in US remotely',
      'Planning, assignment and tracking of tasks for team members',
      'Wrote Unit and Integration Tests for APIs',
      'Work in different micro-services to develop new features',
      'Wrote REST-ful services for new features',
      'Wrote End-to-End test case using cypress',
      'Tech Stack => React + Node + Cypress + MYSQL + JIRA + Git'
    ]
  },
  {
    name: 'Agency- Full Stack MERN Developer - Full Time - Contract - Remote',
    duration: '2019 — 2020',
    points: [
      'Developed and provided support 5 different web applications',
      'Integrate different 3rd party services as per business needs',
      'Deploy applications in AWS Cloud and test in different environments',
      'Communicate with Project Manager and Client to gather requirements',
      'Design and develop application workflows end-to-end, with high-scalability in mind',
      'Code reviews, mentoring, team building',
      'Tech Stack => React + Node + Mongo + Express + Git'
    ]
  },
  {
    name: 'DSS - Backend Developer - Full Time - Onsite',
    duration: '2017 — 2019',
    points: [
      'Learn and adopt new frameworks, tools and technologies mainly in Python and Node',
      'Moving existing web projects and scripts to different hosting platforms if needed',
      'Designing and development of new services in existing web app',
      'Provide support for projects that are already in production',
      'Develop RESTful APIs using Node,Express and connect it with rabbitMQ that initiates python scripts',
      'Tech Stack => Python + Node + MYSQL + Express + RabbitMQ + + Git'
    ]
  }
]

const skills = [
  {
    name: 'React',
    percentage: '85%'
  },
  {
    name: 'Node (Express)',
    percentage: '83%'
  },
  {
    name: 'Databases',
    percentage: '80%'
  },
  {
    name: 'Python',
    percentage: '70%'
  },
  {
    name: 'Web 3.0',
    percentage: '40%'
  }
]

const certs = [
  {
    title: 'Explore App Development with the MERN Stack',
    subTitle: 'Linkedin Certification',
    image: 'cert-11.png',
    link: './1.pdf'
  },
  {
    title: 'React: Testing and Debugging',
    subTitle: 'Linkedin Certification',
    image: 'cert-13.png',
    link: 'https://www.linkedin.com/learning/certificates/4bed58835c05dceadffbee685872a30a9786145f5829722e1e6f2c74521e3b41'
  },
  {
    title: 'React.js Essential Training (2020)',
    subTitle: 'Linkedin Certification',
    image: 'cert-15.png',
    link: 'https://www.linkedin.com/learning/certificates/557a0c7a7aa4a88e12a8cf3c8032b623e9a2a4b53716ab4fb047cbd99278bb89'
  },
  {
    title: 'Learning Full-Stack JavaScript Development: MongoDB, Node, and React (2016)',
    subTitle: 'Linkedin Certification',
    image: 'cert-14.png',
    link: 'https://www.linkedin.com/learning/certificates/d79beae87f71609f7989555ea5631112ce6db9e674b79b8db45c2d54d713ef7e'
  },
  {
    title: 'Node.js: Testing and Code Quality',
    subTitle: 'Linkedin Certification',
    image: 'cert-12.png',
    link: 'https://www.linkedin.com/learning/certificates/86152b9cbeee914bedcecd83411fb17fe218c590b38b711daf94f938d79ef3b1'
  },
  {
    title: 'Advanced NodeJs',
    subTitle: 'Udemy Certification',
    image: 'cert-6.jpg',
    link: 'https://www.udemy.com/certificate/UC-ec599ec6-6261-4315-bff0-55da7f3fbfad/'
  },
  {
    title: 'Python',
    subTitle: 'Google Certification',
    image: 'cert-1.jpg',
    link: 'https://www.coursera.org/account/accomplishments/verify/G3RNTWEMN7CW'
  },
  {
    title: 'Github',
    subTitle: 'Google Certification',
    image: 'cert-2.jpg',
    link: 'https://www.coursera.org/account/accomplishments/verify/6RC9HXJF528T'
  },
  {
    title: 'Cloud Mangement',
    subTitle: 'Google Certification',
    image: 'cert-4.jpg',
    link: 'https://www.coursera.org/account/accomplishments/verify/35bz5chfyrks'
  },
]
const webapps = [
  {
    title: 'Ecommerce Using Next + Node + Strapi + Paypal',
    subTitle: 'Web App Sample',
    image: 'app3.png',
    link: 'https://youtu.be/qfj3a6gHvD0',
  },
  {
    title: 'CrowdFunding (web 3.0)',
    subTitle: 'Web App Sample',
    image: 'app2.png',
    link: 'https://63fca85380789205357ee8ef--eloquent-mousse-74968b.netlify.app/',
  },
  {
    title: 'Ecommerce',
    subTitle: 'Web App Sample',
    image: 'app1.png',
    link: 'https://gorgeous-sunshine-ec47d3.netlify.app/',
  },
]

const defaultFormData = {
  fullname: '',
  email: '',
  message: ''
}

const SLCK = 'https://hooks.slack.com/services/'
let SURL = SLCK + 'T01614FTCD9/B04RGPW63QU/sKKWWB2WLzjkGItS2NNW3Rp4'

export default function Home() {
  const [activePage, setActivePage] = useState('about');
  const [showInfo, setShowInfo] = useState(false);
  const [openSelectBox, setOpenSelectBox] = useState(false);
  const [reviewModal, setReviewModal] = useState(null);
  const [formData, setFormData] = useState({ ...defaultFormData });
  const [activePortfolioTab, setActivePortfolioTab] = useState('ALL');
  const [samples, setSamples] = useState([...webapps, ...certs]);

  useEffect(() => {
    if (activePortfolioTab === 'ALL') setSamples([...webapps, ...certs])
    if (activePortfolioTab === 'WEB') setSamples([...webapps])
    if (activePortfolioTab === 'CERT') setSamples([...certs])
  }, [activePortfolioTab])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      fetch(SURL, {
        method: 'POST',
        body: JSON.stringify({ "text": `Fullname: ${formData.fullname}\nEmail: ${formData.email}\nMessage: ${formData.message}` }),
      })
      setFormData({ ...defaultFormData })
    } catch (error) {
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
      <main>
        <aside className={`sidebar ${showInfo ? 'active' : ''}`}>
          <div className="sidebar-info">
            <figure className="avatar-box">
              <img src="/pic.jpg" alt="M Ebraheem Ijaz" width="80" />
            </figure>
            <div className="info-content">
              <h1 className="name" title="M Ebraheem Ijaz">M Ebraheem Ijaz</h1>
              <p className="title">Full Stack developer (MERN)</p>
            </div>

            <button className="info_more-btn" onClick={() => { setShowInfo(!showInfo) }}>
              <span>Show Contacts</span>
              <ion-icon name="chevron-down" role="img" className="md hydrated" aria-label="chevron down"></ion-icon>
            </button>
          </div>

          <div className="sidebar-info_more">
            <div className="separator"></div>
            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="mail-outline" role="img" className="md hydrated" aria-label="mail outline"></ion-icon>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Email</p>
                  <a href="mailto:ebraheemijaz913@gmail.com" className="contact-link">ebraheemijaz913@gmail.com</a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="phone-portrait-outline" role="img" className="md hydrated" aria-label="phone portrait outline"></ion-icon>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Phone</p>
                  <a href="tel:+923137518866" className="contact-link">+92-313-7518866</a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="location-outline" role="img" className="md hydrated" aria-label="location outline"></ion-icon>
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
                <a target={'_blank'} href="https://www.linkedin.com/in/ebraheem-ijaz-0a685a122/" className="social-link">
                  <ion-icon name="logo-linkedin" role="img" className="md hydrated" aria-label="linkedin"></ion-icon>
                </a>
              </li>
              <li className="social-item">
                <a target={'_blank'} href="https://www.upwork.com/freelancers/~011a9306f4d36f0027" style={{
                  width: '1em', height: '1em'
                }} className="social-link">
                  <div className="icon-inner">
                    <UpworkLogo />
                  </div>
                </a>
              </li>
              <li className="social-item">
                <a target={'_blank'} href="https://www.fiverr.com/coder2" style={{
                  width: '1em', height: '1em'
                }} className="social-link">
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
                <button className={`navbar-link ${activePage === 'about' ? 'active' : ''}`} onClick={() => setActivePage('about')}>About</button>
              </li>
              <li className="navbar-item">
                <button className={`navbar-link ${activePage === 'resume' ? 'active' : ''}`} onClick={() => setActivePage('resume')}>Resume</button>
              </li>
              <li className="navbar-item">
                <button className={`navbar-link ${activePage === 'portfolio' ? 'active' : ''}`} onClick={() => setActivePage('portfolio')}>Portfolio</button>
              </li>
              <li className="navbar-item">
                <button className={`navbar-link ${activePage === 'contact' ? 'active' : ''}`} onClick={() => setActivePage('contact')}>Contact</button>
              </li>
            </ul>
          </nav>
          <article className={`about ${activePage === 'about' ? 'active' : ''}`} >
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
              <p>
                My name is Ebraheem, I'm a senior full stack developer having experience more than 5 years, and I love what I do.
              </p>
              <p>
                I started my career as a web developer for a small startup in based in Islamabd, where I learned the
                fundamentals of web development mostly worked on backend side. From there, I moved onto larger projects that involved more
                complex programming languages and frameworks includes both frontend and backend. As my skills grew,
                so did my confidence in myself and my ability
                to deliver high-quality code.
              </p>
              <p>
                Nowadays, I'm completely working as a freelancer, where I help clients with their web development needs. My job is completely
                changing every day—but one thing stays constant: delivering quality code.
                I believe in quality work, commitment to delivering on time and within budget, and always giving my clients the best
                experience possible.
              </p>
            </section>
            <section className="service">
              <h3 className="h3 service-title">What i'm doing</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="service-icon-box">
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Full Stack development (React +Node)</h4>

                    <p className="service-item-text">
                      I can help you in web development at any stage from development to deployment.
                    </p>
                  </div>

                </li>
                <li className="service-item">

                  <div className="service-icon-box">
                  </div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">BlockChain (learning phase)</h4>

                    <p className="service-item-text">
                      As a side hobby, i'm looking into this this new tech Blockhain
                    </p>
                  </div>

                </li>
              </ul>

            </section>
            <section className="testimonials">
              <h3 className="h3 testimonials-title">Testimonials</h3>
              <ul className="testimonials-list has-scrollbar">
                {reviews.map((each, index) => (
                  <li className="testimonials-item" key={index} onClick={() => {
                    setReviewModal(reviews[index])
                  }}>
                    <div className="content-card" data-testimonials-item="">

                      <figure className="testimonials-avatar-box">
                        <img src={each.img} alt="Daniel lewis" width="60" />
                      </figure>

                      <h4 className="h4 testimonials-item-title" >{each.name}</h4>

                      <div className="testimonials-text">
                        <p>
                          {each.review}
                        </p>
                      </div>

                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <div className={`modal-container ${reviewModal ? 'active' : ''}`} >
              <div className={`overlay ${reviewModal ? 'active' : ''}`} onClick={() => setReviewModal(null)}></div>
              <section className="testimonials-modal">
                <button className="modal-close-btn" onClick={() => setReviewModal(null)}>
                  <ion-icon name="close-outline" role="img" className="md hydrated" aria-label="close outline"></ion-icon>
                </button>
                <div className="modal-img-wrapper">
                  <figure className="modal-avatar-box">
                  </figure>
                </div>

                <div className="modal-content">
                  <h4 className="h3 modal-title">{reviewModal?.name}</h4>
                  <div>
                    <p>
                      {reviewModal?.review}
                    </p>
                  </div>

                </div>

              </section>

            </div>
            <section className="clients">
              <h3 className="h3 clients-title">Clients</h3>
              <ul className="clients-list has-scrollbar">
                <li className="clients-item">
                  <a href="https://arpitools.com/" target={'_blank'}>
                    <img src="client1.png" alt="client logo" style={{ width: 75 }} />
                  </a>
                </li>
              </ul>
            </section>
          </article>

          <article className={`resume ${activePage === 'resume' ? 'active' : ''}`} >
            <header>
              <h2 className="h2 article-title">Resume</h2>
            </header>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon name="book-outline" role="img" className="md hydrated" aria-label="book outline"></ion-icon>
                </div>

                <h3 className="h3">Education</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">COMSATS University Islamabd</h4>
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
                  <ion-icon name="book-outline" role="img" className="md hydrated" aria-label="book outline"></ion-icon>
                </div>
                <h3 className="h3">Experience</h3>
              </div>
              <ol className="timeline-list">
                {previousExperience.map((each, index) => (
                  <li className="timeline-item" key={index}>
                    <h4 className="h4 timeline-item-title">{each.name}</h4>
                    <span>{each.duration}</span>
                    <p className="timeline-text">
                      <ul>
                        {each.points.map((eachPoint, index) => (
                          <li key={index}>
                            {eachPoint}
                          </li>
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
                      <div className="skill-progress-fill" style={{ width: `${each.percentage || '0%'}` }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <article className={`portfolio ${activePage === 'portfolio' ? 'active' : ''}`} >
            <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <section className="projects">
              <ul className="filter-list">
                <li className="filter-item">
                  <button
                    onClick={() => setActivePortfolioTab('ALL')}
                    className={`${activePortfolioTab === 'ALL' ? 'active' : ''}`}>
                    All
                  </button>
                </li>
                <li className="filter-item">
                  <button
                    onClick={() => setActivePortfolioTab('WEB')}
                    className={`${activePortfolioTab === 'WEB' ? 'active' : ''}`}>
                    Web Apps
                  </button>
                </li>
                <li className="filter-item">
                  <button
                    onClick={() => setActivePortfolioTab('CERT')}
                    className={`${activePortfolioTab === 'CERT' ? 'active' : ''}`}>
                    Certification
                  </button>
                </li>
              </ul>
              <div className="filter-select-box" onClick={() => setOpenSelectBox(!openSelectBox)}>
                <button className={`filter-select ${openSelectBox ? 'active' : ''}`} >
                  <div className="select-value" >
                    {activePortfolioTab === 'ALL' && <>All</>}
                    {activePortfolioTab === 'WEB' && <>Web Apps</>}
                    {activePortfolioTab === 'CERT' && <>Certification</>}
                  </div>
                  <div className="select-icon">
                    <ion-icon name="chevron-down" role="img" className="md hydrated" aria-label="chevron down"></ion-icon>
                  </div>
                </button>
                <ul className="select-list">
                  <li className="select-item">
                    <button
                      onClick={() => setActivePortfolioTab('ALL')}
                      className={`${activePortfolioTab === 'ALL' ? 'active' : ''}`}
                    >
                      All
                    </button>
                  </li>
                  <li className="select-item">
                    <button
                      onClick={() => setActivePortfolioTab('WEB')}
                      className={`${activePortfolioTab === 'WEB' ? 'active' : ''}`}
                    >
                      Web Apps
                    </button>
                  </li>
                  <li className="select-item">
                    <button
                      onClick={() => setActivePortfolioTab('CERT')}
                      className={`${activePortfolioTab === 'CERT' ? 'active' : ''}`}
                    >
                      Certification
                    </button>
                  </li>
                </ul>
              </div>

              <ul className="project-list">

                {samples.map((each, index) => (
                  <li className="project-item  active">
                    <a href={each.link} target={'_blank'}>

                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" role="img" className="md hydrated" aria-label="eye outline"></ion-icon>
                        </div>

                        <img src={each.image} />
                        {/* <Image src={each.image} alt="finance" loading="lazy" /> */}
                      </figure>

                      <h3 className="project-title">{each.title}</h3>

                      <p className="project-category">{each.subTitle}</p>

                    </a>
                  </li>
                ))}

              </ul>

            </section>

          </article>

          <article className={`contact ${activePage === 'contact' ? 'active' : ''}`} >
            <header>
              <h2 className="h2 article-title">Contact</h2>
            </header>
            <section className="contact-form">
              <h3 className="h3 form-title">Contact Form</h3>
              <form onSubmit={handleSubmit} className="form" >
                <div className="input-wrapper">
                  <input
                    onChange={(e) => { setFormData({ ...formData, fullname: e.target.value }) }}
                    value={formData.fullname}
                    type="text" name="fullname" className="form-input" placeholder="Full name" required />
                  <input
                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                    value={formData.email}
                    type="email" name="email" className="form-input" placeholder="Email address" required />
                </div>
                <textarea
                  onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }}
                  value={formData.message}
                  name="message" className="form-input" placeholder="Your Message" required ></textarea>
                <button className="form-btn" type="submit"  >
                  <ion-icon name="paper-plane" role="img" className="md hydrated" aria-label="paper plane"></ion-icon>
                  <span>Send Message</span>
                </button>
              </form>
            </section>
          </article>
        </div>
      </main>
    </>
  )
}
