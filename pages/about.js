import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import '../styles/tailwind.css';

const About = () => {
    return (
        <div className="container mx-auto px-4">
            <Header />
            <main className="mt-10">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <div className="flex">
                    <div className="w-1/2">
                        <Image src="/images/profile.jpg" alt="Profile Picture" width={500} height={500} />
                    </div>
                    <div className="w-1/2 pl-10">
                        <p className="text-lg">Hello, I'm a Full Stack Developer with a passion for coding and design. I have experience in various programming languages and frameworks, and I'm always eager to learn more and take on new challenges.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default About;