import React from 'react'; 
import coverImage from '../../assets/cover/coding.jpeg';

function About() {
    return(
        <section className="my-5">
            <img src={coverImage} className="my-2" style={{ height: "300px", width: "700px" }} alt="cover" />
            <p>Hello, and welcome to my page! I am a junior developer and have experience with the front end and back end of applications!
                My goal is to make individuals and companies webiste dreams come true! I have extensive knowledge with HTML, CSS, Bootstrap, 
                JavaScript, MERN stack, and I am always looking to improve my skills and learn more about programming languages.
            </p>
            <br/> 
            <p>I have a degree in Psychology and three years of teaching experience that I use to my advantage designing web applications. I apply
                my previous background helps me design web applications with users in mind on the front end, and web developers on the back end.
            </p>
            <br/>
            <p>Enjoy my website! Feel free to reach out to me!</p>
            <ul>
                <li><a href="https://www.linkedin.com/in/yussel-panecatl-b21ab4188/">LinkedIn</a></li>
                <li><a href="https://github.com/panecatl">GitHub</a></li>
            </ul>
        </section>
    );
}

export default About;