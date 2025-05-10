import React from 'react';
// import '../styles/global.css';
import profileImage from '../assets/profile-image.png';

const Home = () => {
    return (
        <div>
            <header id="hero">
                <section className="header-container">
                    <img className="profile-image" src={profileImage} alt="Profile" />
                    <h1>Hi I'm Kadu</h1>

                    <div className="content-text">
                        <h2>Building digital</h2>
                        <h2>products, brands, and experience.</h2>

                        <p>
                            A Frontend Developer and Visual Designer with experience in web
                            design, brand identity and product design.
                        </p>
                    </div>
                    <a
                        href="https://github.com/CommunityPro/portfolio-html"
                        className="btn btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Connect With Me
                    </a>
                </section>
            </header>

            {/* Projects */}
            <section id="projects" className="project-container container">
                <div className="division"></div>
                <div className="content-text">
                    <h2>Projects</h2>
                    <p>Check out some of my personal and paid projects</p>
                </div>

                <article className="project">
                    {/* Project 1 */}
                    <div className="card">
                        <div className="project-info">
                            <div className="project-bio">
                                <h3>Project One</h3>
                                <p>React, Redux, SASS</p>
                            </div>
                            <div className="project-link">
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="card">
                        <div className="project-info">
                            <div className="project-bio">
                                <h3>Project Two</h3>
                                <p>React, Redux, SASS</p>
                            </div>
                            <div className="project-link">
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="card">
                        <div className="project-info">
                            <div className="project-bio">
                                <h3>Project Three</h3>
                                <p>React, Redux, SASS</p>
                            </div>
                            <div className="project-link">
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="card">
                        <div className="project-info">
                            <div className="project-bio">
                                <h3>Project Four</h3>
                                <p>React, Redux, SASS</p>
                            </div>
                            <div className="project-link">
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Project 5 */}
                    <div className="card">
                        <div className="project-info">
                            <div className="project-bio">
                                <h3>Project Five</h3>
                                <p>React, Redux, SASS</p>
                            </div>
                            <div className="project-link">
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Project 6 */}
                    <div className="card">
                        <div className="project-info">
                            <div className="project-bio">
                                <h3>Project Six</h3>
                                <p>React, Redux, SASS</p>
                            </div>
                            <div className="project-link">
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i></a>
                            </div>
                        </div>
                    </div>
                </article>

                <a href="#" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    See More <i className="fas fa-arrow-right"></i>
                </a>
            </section>
            <script src="js/script.js"></script>
        </div>
    );
}

export default Home;
