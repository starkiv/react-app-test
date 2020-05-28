import React from "react";
import './App.css'

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/fitness-logo-maker/fitness-logo-template-with-an-abstract-energetic-human-illustration-2457a-1024x1024.png"
                    alt=""/>
            </header>
            <nav className='nav'>
                <div>Profile</div>
                <div>Message</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src="https://specials-images.forbesimg.com/imageserve/5ebed2cc142a910006474ad8/960x0.jpg?fit=scale"
                        alt=""/>
                </div>
                <div>
                    ava + desc
                </div>
                <div>
                    My posts
                    <div>
                        New posts
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 1
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default App;