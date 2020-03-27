import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div className="header">
            <div className="flex flex-row-reverse headerandtitlefont text-6xl">Matthew Guy Robinson</div>
            <h2 className="flex flex-row-reverse headerandtitlefont text-5xl">Junior Developer</h2>
            <br></br>
            <br></br>
            <Navbar/>
        </div>
    )
}
