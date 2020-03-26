import React from 'react'
import Screenshot from '../img/reactTwitter.png';
import Code from '../img/CodeScreenShot.png';

export default function ReactDisplay() {
    return (
        <div className="outside">
            <h3 className="title react-text">React - Twitter Clone Project</h3>
            <div className="sceenshot">
                <img className="image" src={Screenshot} alt="twitter-clone-screen-shot" />
                <p className="react-text" >This was my first group project with React, I was working with Eric and Kirsty. We started this project by breaking down the twitter home page on paper. We had chosen to break the website into three sections, the navbar on the left, the main center column and the third section on the right which included Trends, Who to Follow etc.</p>
                <p className="react-text" >I was responsible for the third column, I started by creating the search bar this included CSS and importing an image. The Trends section required more detail as there is written content. For the trends section there are two components that make this section. One component has props this holds the keys which is passed through the second component that uses .map function to go through each key in the state.</p>
                <img className="image" src={Code} alt="twitter-clone-code-screen-shot"/>
            </div>
        </div>
    )
}
