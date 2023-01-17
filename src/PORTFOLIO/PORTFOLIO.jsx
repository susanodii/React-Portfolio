import './PORTFOLIO.css'

import { AiOutlineArrowRight } from 'react-icons/ai'
import { RxDoubleArrowUp } from 'react-icons/rx'
import React, { useEffect, useState } from 'react'
//  import { Link } from 'react-router-dom'
import {
  FaBars,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { Route, Routes } from "react-router-dom"

const PORTFOLIO = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const [isMobile, setIsMobile] = useState(false)

  return (
    <div  className='body-container'>
      <header className="header-container" id="home">
        <div className="brief-introduction">
          <h1 className="introduction">
            Hello, I am <span style={{ color: '#E42E6D' }}>SUSAN ODII</span>{' '}
          </h1>
          <h1 className="my-stack-intro">I am a Frontend Developer</h1>
          <br />

          <button className="view-work">
            View My Work{' '}
            <span className="arrow-right" style={{ marginLeft: '2rem' }}>
              {' '}
              <AiOutlineArrowRight />
              {/* <img src="arrow-right-line.png" /> */}
            </span>
          </button>
        </div>
      </header>
      <nav className={isMobile? 'mobile-nav-links':'nav-section-container'}>
        <a href="#home" className="logo">
          {' '}
          SUZY
        </a>
        {/* <Link to='/home/#section1'></Link> */}
        <ul className="nav-links" />

        <a href=" #home" className="anchor-link">
          <li className="home">Home</li>
        </a>

        <a href="#About" className="anchor-link">
          <li> About</li>
        </a>
        <a href="#works" className="anchor-link">
          <li> Portfolio</li>
        </a>
        <a href="#contact-my-number" className="anchor-link">
          <li> Contact</li>
        </a>
        <button className="mobile-menu-icon">
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      <main className="general-main-container">
        {/* <section class="about-section"> 
    <h1>ABOUT</h1>
</section> */}
        <section className="section-about-section">
          <h2 className="subTopic-about-me" id="About" data-aos="fade-right">
            ABOUT SUSAN
          </h2>
          <div className="about-me-susan">
            <div className="summary-of-me">
              <p className="about-me-details">
                Susan Odii is a highly moltivated, determined and goal oriented
                individual with background knowledge of Engineering.
                Furthermore, she is a good team player and she pays attention to
                details. Susan Odii is in love with Tech and she has the
                knowledge of HTML, CSS, JavaScript and React js . <br />
                Susan is a graduate of the university of Nigeria Nsukka and her
                goal is to become a sought-after software Engineer. <br />
                Susan's hobbies are listening to good musics and studying.
              </p>
            </div>
            <div className="susu">
              <img src="susu.JPG" alt="MYSELF AND I" className="susu" />
            </div>
          </div>
        </section>
        <section className="section place-of-work-section">
          <h2 data-aos="fade-left"> WORK EXPERIENCE</h2>
          <div className="places-of-work">
            <div className="areas-of-work1">
              <h4 className="at-tiidelab">
                {' '}
                FRONTEND DEVELOPER( TRAINEE AT TIIDELAB)
              </h4>
              <p className="tiidelab-explain">
                {' '}
                Worked in a team to design and develop a Agro Tech E-commerce
                system, where buyers and sellers of agricultural products can
                transact together.{' '}
              </p>
            </div>
            <div className="areas-of-work1">
              <h4 className="at-tiidelab">
                {' '}
                FRONTEND DEVELOPER( TRAINEE AT Women Tech sters Fellowship)
              </h4>
              <p className="tiidelab-explain">
                Implemented websites, mobile applications, and landing pages
                from concept through deployment. Used markup languages like HTML
                to create user-friendly web pages.
              </p>
            </div>
          </div>
        </section>
        {/* PROJECTS SECTION */}
        <section className="section project-section" id="works">
          <h2 className="projects-title" data-aos="fade-right">
            PROJECTS
          </h2>
          <section className="project-card-wrapper">
            <div className="project-card" id="first-project">
              <img
                src="https://user-images.githubusercontent.com/81011757/211130929-6cc6c804-3899-403e-99b0-36e644c22b99.PNG"
                alt=""
                className="news-img"
                id="fisrtProject-img"
              />
              <section className="card-content">
                <h3 className="project-title">Expanding Cards</h3>
                <p className="project-brief">
                  {' '}
                  An Expanding Card for viewing different images
                </p>
              </section>
              <section className="project-links">
                <a
                  // href="https://github.com/susanodii/NEW_BLOG-WEBSITE#readme"
                  href="https://github.com/susanodii/Expanding-cards/tree/main#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={35} />
                </a>
                <a href="https://expanding-cards-js-susan-odii.netlify.app/">
                  <FaGlobe size={35} />
                </a>
              </section>
            </div>
            {/* 2 project */}
            <div className="project-card" id="second-project">
              <img
                src=" https://user-images.githubusercontent.com/81011757/178169925-2eaaa0c3-dcde-44a3-bd33-5f7af44bbf47.PNG"
                alt=""
                className="product-img"
              />
              {/* <img src="https://user-images.githubusercontent.com/81011757/178169925-2eaaa0c3-dcde-44a3-bd33-5f7af44bbf47.PNG" alt="" class="product-img"> */}
              <section className="card-content">
                <h3 className="project-title">Product Landing Page</h3>
                <p className="project-brief"> A Detergent Website</p>
              </section>
              <section className="project-links">
                <a
                  href="https://github.com/susanodii/Landing-page/tree/main "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  <FaGithub size={35} />
                </a>
                <a href="https://product-landing-page-susan.netlify.app/">
                  {' '}
                  <FaGlobe size={35} />
                </a>
              </section>
            </div>

            {/* text */}

            {/* 3 */}

            <div className="project-card" id="first-project">
              <img
                src="https://user-images.githubusercontent.com/81011757/211134189-6e62e04b-d748-4b72-9032-8d1a4023af63.PNG"
                alt=""
                className="news-img"
                id="fisrtProject-img"
              />
              <section className="card-content">
                <h3 className="project-title">TODO LIST</h3>
                <p className="project-brief"> Todo List App</p>
              </section>
              <section className="project-links">
                <a
                  // href="https://github.com/susanodii/NEW_BLOG-WEBSITE#readme"
                  href="https://github.com/susanodii/Todolist-app-using-javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={35} />
                </a>
                <a href="https://susan-odii-todolist.netlify.app/">
                  <FaGlobe size={35} />
                </a>
              </section>
            </div>
          </section>
          {/* STACK SECTION */}
          <section className="section stack-section">
            <h2 className="skill-set-header" data-aos="fade-left">
              MY TECH STACK
            </h2>
            <div className="different-stacks-used">
              <img src="html5.png" className="my-stack" alt="html"></img>
              <img src="cssss3.png" className="my-stack" alt="css"></img>
              <img src="jsImg.png" className="my-stack" alt="js"></img>
              <img src="rctImg.png" className="my-stack-rct" alt="react"></img>
              <img src="git.png" className="my-stack-rct" alt="git"></img>
            </div>
          </section>
        </section>
        {/* <section className="stack-group">
              <div className="stack-progress-wrapper">
                <label htmlFor="html-progress">HTML-progress:</label>
                <progress
                  id="html-progress"
                  className="stack-progress"
                  value={90}
                  max={100}
                >
                  {' '}
                  80%{' '}
                </progress>
              </div>
              <div className="stack-progress-wrapper">
                <label htmlFor="-progress">CSS-progress:</label>
                <progress
                  id="css-progress"
                  className="stack-progress"
                  value={70}
                  max={100}
                >
                  {' '}
                  70%{' '}
                </progress>
              </div>
              <div className="stack-progress-wrapper">
                <label htmlFor="javascript-progress">
                  JavaScript-progress:
                </label>
                <progress
                  id="javaSript-progress"
                  className="stack-progress"
                  value={40}
                  max={100}
                >
                  {' '}
                  30%{' '}
                </progress>
              </div>
              <div className="stack-progress-wrapper">
                <label htmlFor="javascript-progress">React-progress:</label>
                <progress
                  id="javaSript-progress"
                  className="stack-progress"
                  value={50}
                  max={100}
                >
                  {' '}
                  30%{' '}
                </progress>
              </div>
            </section>
            <section className="stack-group">
              <div className="stack-progress-wrapper">
                <label htmlFor="netlify-progress">Neflify-progress:</label>
                <progress
                  id="netlify-progress"
                  className="stack-progress"
                  value={60}
                  max={100}
                >
                  {' '}
                  30%{' '}
                </progress>
              </div>
              <div className="stack-progress-wrapper">
                <label htmlFor="html-progress">Github-progress:</label>
                <progress
                  id="github-progress"
                  className="stack-progress"
                  value={50}
                  max={100}
                >
                  {' '}
                  45%{' '}
                </progress>
              </div>
            </section>
          </section>
        </section> */}
      </main>
      {/* -------CONTACT---------- */}
      <footer className="footer-section">
        <section className="contact-me" id="contact-my-number">
          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill"
              />
            </svg>
          </div>
          <h2
            className="contact-header"
            id="hello-contact"
            data-aos="fade-right"
          >
            CONTACT ME
          </h2>
          <p className="a-qtn">Have a question or want to work together?</p>
          <form>
            <input
              type="text"
              // id="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              // id="email"
              name="email"
              placeholder="Email"
              required
            />
            {/* <textarea   id="message-me"
          rows="15" cols="65"  placeholder="Describe yourself here..." >  </textarea> */}
            {/* <br> */}
            <textarea
              rows={15}
              cols={65}
              placeholder="Describe yourself here..."
              defaultValue={''}
            />
            <div className="button-submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
        {/* social media */}
        <section className="social-media-contaner">
          <div className="scrool-up">
            <a href="#home">
              {' '}
              <RxDoubleArrowUp />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width={45}
                height={45}
                fill="currentColor"
                className="bi bi-arrow-up-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
              </svg> */}
            </a>
          </div>
          <div className="social-media-links">
            <div className="linkdin">
              <a href=" https://www.linkedin.com/in/susanodiifrontenddeveloper/">
                <FaLinkedin size={35} />
              </a>
            </div>
            <div className="twitter">
              <a href="https://twitter.com/SusanOdii">
                <FaTwitter size={35} />
              </a>
            </div>
            <div className="github">
              <a href="https://github.com/susanodii">
                <FaGithub size={35} />
              </a>
            </div>
          </div>
          <h6>suzy</h6>
        </section>
      </footer>
    </div>
  )
}

export default PORTFOLIO
