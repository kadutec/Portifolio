import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                {/* Social links */}
                <div className="social">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/facebook-icon.svg" alt="Facebook" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/twitter-icon.svg" alt="Twitter" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/linkedin-icon.svg" alt="Linkedin" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/github-icon.svg" alt="GitHub" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/hashnode-icon.svg" alt="Hashnode" />
                    </a>
                </div>
                {/* Attribution */}
                <div className="attribution">
                    <a
                        href="https://github.com/CommunityPro/portfolio-html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://user-images.githubusercontent.com/62628408/157202263-9174da24-b19a-4017-9b7c-a1d26ae8f014.svg"
                            alt="attribution"
                            width="150px"
                        />
                    </a>
                </div>
                <p>Copyright &copy; Communitypro <span id="datee"></span>, All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
