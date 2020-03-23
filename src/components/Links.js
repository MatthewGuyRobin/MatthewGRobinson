import React from 'react'
import Navbar from './Navbar'
import linkedin from '../img/linkedin.png';
import github from '../img/GitHub.png';
import code from '../img/codenation.png';


export default function Links() {
    return (
        <div>
        <div className="headerlinks flex flex-row-reverse headerandtitlefont text-6xl">Links</div>
        <br/>
        <Navbar/>
        <div>
            <img className="imagelink" src={linkedin} alt="linkedinimage" /> <img className="imagegit" src={github} alt="github"/> <img className="imagecode" src={code} alt="codenation"/>
        
        </div>
        </div>
    )
}
