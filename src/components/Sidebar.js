import React, { Component } from "react";
import '../App.css';
import { Link } from "react-scroll";
import Navbar from './Navbar';


// function Sidebar() {
//     return (
//         <div className="Sidebar">
//             Side Bar
//         </div>
//     )
// }
class Sidebar extends Component {
    render() {
      return (
        <div className="Sidebar">
          <div className="Navbar">
            <Link>
            <Navbar />
            </Link>
            </div>                   
          
        </div>
      );
    }
  }

export default Sidebar




    
