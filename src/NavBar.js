import React from 'react';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from './aw.png';

export default function NavBar() {
    return(
        <>
        <Router>
            <div>
                <nav className="navbar is-success" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                            <img src={Logo} width="50" height="90" />
                        </a>
                    </div>
                    <div id="pageSelection" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/" className="navbar-item">
                                Home
                            </Link>
                            <Link to="/about" className="navbar-item">
                                About
                            </Link>
                            <Link to="/projects" className="navbar-item">
                                Projects
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a className="button is-link" role="button" href="#https://github.com/xgreenspace">
                                            <span class="icon">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                            </span>
                                            <span>LinkedIn</span>
                                        </a>
                                    </p>
                                    <p className="controll">
                                        <a className="button is-black" role="button" href="#https://www.linkedin.com/in/amariawest/">
                                            <span class="icon">
                                            <FontAwesomeIcon icon={faGithub} />
                                            </span>
                                            <span>GitHub</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/projects">Projects</Link>
                    </li>
                </ul> */}
                </nav>
                <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/">
                    <Home />
                </Route>

                </Switch>
            </div>
        </Router>
        </>
    );
}