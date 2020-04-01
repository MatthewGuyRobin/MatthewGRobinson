import React from 'react'
import chuck from '../img/SpaceXScreenShot.png'

export default function Skills() {
    return (
        <div className="api-container">
            <h3 className="react-text title">SpaceX API</h3>
            <div className="screenshot">
                <img className="image" src={chuck} alt="chucknorrisscreenshot" />
                <p>On this project using the React library I have created a button so that on click a new Chuck Norris joke is generated. Created a state with an array called data that is empty. This has been done so that when the function componentDidMount is run it fetches one joke from the url, changes this to json data and we use setState to update the value in the empty array.</p>
            </div>
        </div>
    )
}
