import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex justify-between p-5 bg-blue-500">
            <Link href="/">
                <a className="text-white text-lg">Home</a>
            </Link>
            <nav>
                <ul className="flex space-x-5">
                    <li>
                        <Link href="/about">
                            <a className="text-white text-lg">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a className="text-white text-lg">Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;