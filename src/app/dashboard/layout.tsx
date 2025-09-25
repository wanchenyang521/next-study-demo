"use client"
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import { Button } from "antd";
 function Layout({children,}: Readonly<{ children: React.ReactNode; }>) {
     const [count, setCount] = useState(0)
     const pathName = usePathname()

     return (
        <div className="border-2 border-dashed border-black p-4">
            <div className="flex items-center gap-4 text-pink-200" >
                <Link className={pathName === '/dashboard/about' ? 'text-black' :''} href='/dashboard/about'>About</Link>
                <Link className={pathName === '/dashboard/settings' ? 'text-black' :''} href='/dashboard/settings'>Setting</Link>
            </div>
            <div>{count}</div>
            <Button onClick={() => {setCount(count + 1)}}>add</Button>
            {children}
        </div>
    );
}


export default Layout;