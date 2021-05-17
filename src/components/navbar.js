import React from "react";
import "./navbar.css";
import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <ul className="horizontal">
                <li>
                    <NavLink to="/" exact activeClassName="underline">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" exact activeClassName="underline">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/about" exact activeClassName="underline">About</NavLink>
                </li>
                <li>
                    <a href="https://github.com/n0033/" target="_blank" rel="noreferrer" className="lock">
                        {/* change icon when hovered */}
                        <span className="icon-lock">
                            <IconContext.Provider value={{ className: 'github-icon' }}>
                                <div>
                                <AiFillGithub />
                                </div>
                            </IconContext.Provider></span>
                        <span className="icon-unlock">
                            <IconContext.Provider value={{ className: 'github-icon' }}>
                                <div>
                                    <VscGithub />
                                </div>
                            </IconContext.Provider>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
