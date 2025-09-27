'use client'
import React, {useState} from 'react';
import {Button} from "antd";
import ServerComponent from "../components/server-component";
const ClientComponent = ({children}: {children: React.ReactNode}) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            {children}
            ==
           <Button onClick={() => setCount(count + 1)}>{count}</Button>
        </div>
    );
};

export default ClientComponent;