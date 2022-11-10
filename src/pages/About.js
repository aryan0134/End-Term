import React from 'react'
import './About.css'
import aboutpic from './aboutpic2.png' 
import pic2 from './pic2.jpeg'

function About() {
  return (
    <>
        <div className="logo1">
            <img src={aboutpic} />
        </div>
        <div className="developer">
            <div className="pic">
                <img src={pic2} />
            </div>
            <div className="para">
                <p>
                Hi! I am Aryan Sindhu, Welcome to my Playstation website. I'm Btech student from Computer Science Department. I was born and raised in Chandigarh, and has always been a fan of playstation.
                Currently, I am doing B.E. in Computer Science from Chitkara University. I am a front-end developer. After graduation I want to pursue higher education by doing masters in USA.
                This is my playstation store which will help you find amazing video games equipments and will make playstation shopping easy!
                </p>
            </div>
        </div>
    </>
  )
}

export default About