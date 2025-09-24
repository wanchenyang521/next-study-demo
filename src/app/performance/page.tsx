import React from 'react';
import Hero from "@/components/Hero";
export const metadata: Metadata = {
    title: 'performance',
}

const Page = () => {
    return (
        <Hero imgUrl="https://images.unsplash.com/photo-1518837695005-2083093ee35b" content="performance"></Hero>
    );
};

export default Page;