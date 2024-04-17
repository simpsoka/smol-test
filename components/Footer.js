import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 text-white text-center">
            <p>© {new Date().getFullYear()} Personal Profile. All rights reserved.</p>
        </footer>
    );
};

export default Footer;