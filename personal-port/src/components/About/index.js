import React from 'react'; 
import coverImage from '../../assets/cover/coding.jpeg';

function About() {
    return(
        <section className="my-5">
            <h1 id="about">Yussel Panecatl</h1>
            <img src={coverImage} className="my-2" style={{ height: "300px", width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;