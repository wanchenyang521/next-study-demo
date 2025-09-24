"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = () => {
    const pathName = usePathname()

    const navLinks = [
        { href: '/performance', label: 'performance' },
        { href: '/reliability', label: 'reliability' },
        { href: '/scale', label: 'scale' }
    ];

    return (
        <div className="absolute w-full z-10">
            <div className=" mx-auto flex justify-between container text-white p-8">
                <Link className="text-3xl font-bold" href='/'>Home</Link>
                <div className="flex gap-4 text-2xl font-bold">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            className={pathName === link.href ? 'text-yellow-400' : 'hover:text-gray-300'}
                            href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;