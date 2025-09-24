"use client"
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";

function Template({children,}: Readonly<{ children: React.ReactNode; }>) {
    const [count, setCount] = useState(0)
    return (
        <div className="border-2 border-dashed border-black p-4">
            <div>{count}</div>
            <button onClick={() => {setCount(count + 1)}}>add</button>
            {children}
        </div>
    );
}
export default Template;