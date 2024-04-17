import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import '../styles/tailwind.css';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to my personal profile</h1>
        <Image src="/images/profile.jpg" alt="Profile Picture" width={200} height={200} />
        <p className="mt-4">Hello! I'm John Doe, a web developer based in New York. I specialize in building high-quality websites and applications.</p>
        <div className="mt-6">
          <Link href="/about">
            <a className="text-blue-500 hover:underline">Learn more about me</a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}