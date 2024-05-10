import React from 'react'
import "./Landing.css"
const Landing = () => {
    return (
        <>
            {/* <div id="nav">
                <img src="logo.png" alt="" />
                <div id="nav-part2">
                    <h4>Home</h4>
                    <h4> Next Launch </h4>
                    <h4> Starlink </h4>
                    <h4>Twitter</h4>
                </div>
                <div id="nav-part3">
                    <div id="circle"></div>
                </div>
            </div> */}
            <div id="nav">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HwjZa6iA-1UEWwDqlkfdefwahAwZ3rM9ZZO4vsOPEQ&s" alt=""/>
                    <div id="nav-part2">
                        <h4>Home</h4>
                        <h4>Work</h4>
                        <h4>Studio</h4>
                        <h4>Contact</h4>
                    </div>
                    <div id="nav-part3">
                        <div id="circle"></div>
                    </div>
            </div>
            <div class="main">
                <div class="page1">
                    <h2>Mission Mars</h2>
                    <h2>Mission Starlink</h2>
                </div>
            </div>
        </>
    )
}

export default Landing