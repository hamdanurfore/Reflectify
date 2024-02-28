import React from "react";
import './style.css'


const Hero = () => {
    return (
        <>
            <section id="hero" className="bg-primary text-gray-800 py-20">
                <div className="container mx-auto text-center">
                    <h1 id="title" className=" font-bold mb-4 mt-5">A journal for the <em className='italic font-light'>future</em> you</h1>
                    <p id="subtitle" className=" mx-80 my-10 ">The productivity tool to help you keep on top of your progress, goals and everything in between, With Reflectify no task is too small to be documented and you can take it with you wherever you go</p>
                    <button className="bg-secondary hover:bg-pink-300 text-gray font-bold py-2 px-4 rounded shadow-xl">
                        Find out more
                    </button>
                    <img className="hero-img" src="src\assets\prototype.png"></img>


                </div>
            </section>
        </>
    )
}




export default Hero