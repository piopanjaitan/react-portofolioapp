import React, { Component } from 'react';
import { Link } from "react-scroll";

class Navbar extends Component {
    state = {};
    render() {
        return (
            <div className="navbar">
                <Link
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={230}
                >Main</Link>

                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >About</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Contact</Link>
            </div>
        );
    }
}

export default Navbar;