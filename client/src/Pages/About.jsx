import React from 'react';
import Navbar from '../Components/Navbar';
import FounderCard from '../Components/FounderCard'; // Assuming FounderCard component is defined elsewhere

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                <h1>Our Founders</h1>
                <div className="founder-cards-container">
                    <FounderCard
                        name="Harsh Mangal"
                        story="Meet Harsh, a college student studying in a city far from home. Harsh faced the challenge of navigating the urban jungle without access to a car, relying on unreliable public transportation and costly rideshares. Frustrated by the limitations on his mobility, Harsh decided to take matters into his own hands. Leveraging his passion for technology and entrepreneurship, Harsh taught himself web development and launched a car-sharing platform specifically tailored to students like himself. Through his website, Harsh not only found a cost-effective solution to his transportation woes but also empowered his fellow students to share rides and split costs, easing the burden on everyone's wallets."
                        imageUrl="https://i.ibb.co/fpBnw1h/IMG-5313-1.jpg"
                    />
                    <FounderCard
                        name="Aryaman Sharma"
                        story="Aryaman grew up in a rural town whise access to transportation was limited, hindering his ability to pursue extracurricular activities and part-time jobs. Determined to create opportunities for hisself and his peers, Aryaman delved into the world of coding and website development. Inspired by the sharing economy model, Aryaman created a platform that connected students in rural areas with local drivers willing to offer rides at affordable rates. Through his innovative solution, Aryaman not only improved his own access to transportation but also fostered a sense of community among students in remote areas, enabling them to support each othis in their endeavors."
                        imageUrl="https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/396857698_816108983864133_2615183504471013097_n.jpg?ccb=11-4&oh=01_Q5AaIAcsPq8iw8G1l_MVRxRhCemP7skFEPs2tAtQUTB2XLuh&oe=662F5424&_nc_sid=e6ed6c&_nc_cat=106"
                    />
                    <FounderCard
                        name="Alice Johnson"
                        story="David, a college student and devoted family member, faced the challenge of balancing his studies with his responsibilities at home. Living in a suburban neighborhood with limited public transit options, David struggled to fulfill his family's transportation needs on a tight budget. Motivated by his desire to ease the burden on his family and fellow students facing similar challenges, David embarked on a mission to create a carpooling platform exclusively for students and their families. Through his website, David not only provided a practical solution for transportation but also strengthened the sense of community among students, enabling them to support each other in achieving their academic and personal goals."
                        imageUrl="https://via.placeholder.com/150"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
