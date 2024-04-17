import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="container mx-auto px-4">
            <Header />
            <main className="mt-10">
                <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"></textarea>
                    </div>
                    <button type="submit" className="mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Submit</button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;