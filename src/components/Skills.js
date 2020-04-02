import React from 'react'
import spacex from '../img/SpaceXScreenShot.png'

export default function Skills() {
    return (
        <div className="api-container">
            <h3 className="react-text title">SpaceX API</h3>
            <div className="screenshot">
                <img className="image" src={spacex} alt="spacexformapi" />
                <p>This is a project in which on user input the details of spaceX missions past and future are displayed. This has been done by using Express, Handle-bars & bodyParser. Using Express I was able to obtain the information from the API & then show details of the flight that had been requested using Handle bars. </p>
            </div>
        </div>
    )
}
