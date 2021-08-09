import React from 'react';
import { Link } from "react-router-dom";
import ProcastLogo from '../images/procastLogo.png';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as GrIcons from 'react-icons/gr';


const Navbar = (props) => {

    return (
        <div>
            <div className='navbar' style={{ width: "20%", paddingTop: '20px' }}>
                <img src={ProcastLogo} style={{ width: "100%", padding: "1% 1% 1% 6%" }} />
                <Link to='/loggedinhomepage'><AiIcons.AiFillHome />&nbsp;&nbsp;Home</Link>
                <Link to='/notes'><BsIcons.BsFillStopwatchFill />&nbsp;&nbsp;Timer</Link>
                <Link to='/tracking'><BsIcons.BsGraphUp />&nbsp;&nbsp;Tracking</Link>
                <Link to='/todolist'><BiIcons.BiNote />&nbsp;&nbsp;To - Do List</Link>
                <Link to='/projects'><FaIcons.FaClipboard />&nbsp;&nbsp;Projects</Link>
                <Link to='/notes'><CgIcons.CgNotes />&nbsp;&nbsp;Notes</Link>

                <div style={{ position: "absolute", bottom: "0", width: "100%", height: "25%", textAlign: "center" }}>
                    <a href='#section'><BiIcons.BiUser />&nbsp;&nbsp;Lucy Zhu</a><br /><br />
                    <a href='#section'><FiIcons.FiSettings />&nbsp;&nbsp;Settings</a><br /><br />
                    <a href='#section'><GrIcons.GrLogout />&nbsp;&nbsp;Log Out</a>
                </div>
            </div>


        </div>

    );
};

export default Navbar;
