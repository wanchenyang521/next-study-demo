import React from 'react';
import Image from "next/image";
import { Button, Flex } from 'antd';
interface HeroProps {
    imgUrl: string;
    content: string;
}

const Hero: React.FC<HeroProps> = ({imgUrl, content}) => {
    return (
        <div className="relative h-screen w-full">

            <div className="absolute inset-0">
                <Image
                    src={imgUrl}
                    alt="Background image"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
            </div>
            <div className="relative text-white flex items-center justify-center h-full">
                <h1 className="text-4xl font-bold">{content}</h1>
                <Button>Default Button</Button>
            </div>
        </div>
    );
};


export default Hero;