import React from 'react'
import Navbar from './Navbar'
import linkedin from '../img/linkedin.png';
import github from '../img/GitHub.png';
import code from '../img/codenation.png';
import ReactDisplay from './ReactDisplay';
import Achievements from './Achievements'


export default function Links() {
    return (
        <div>
            <div className="headerlinks flex flex-row-reverse headerandtitlefont text-6xl">Achievements</div>
            <br/>
            <Navbar />
            <br></br>
            <div className="linkcontainer">
                <a href="https://www.linkedin.com/in/matthew-robinson-280b161a0/"><img className="imagelink" src={linkedin} alt="linkedin" /> </a> <a href="https://github.com/MatthewGuyRobin"><img className="imagegit" src={github} alt="github" /> </a> <a href="https://wearecodenation.com/"><img className="imagecode" src={code} alt="codenation" /> </a>
            </div>
            <div>
                <ReactDisplay/>
                <Achievements/>
            </div>
        </div>
    )
}
