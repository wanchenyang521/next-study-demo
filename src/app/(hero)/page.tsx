import React from 'react';
import ImageCard from "@/components/ImageCard";
import {Metadata} from "next";
import { mockImageData } from '@/data/mockImageData';

export const metadata: Metadata = {
    title: 'Home',
}

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">图片展示</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockImageData.map((image) => (
                        <ImageCard
                            key={image.id}
                            id={image.id}
                            title={image.title}
                            imageUrl={image.imageUrl}
                            description={image.description}
                            category={image.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};



Page.propTypes = {

};

export default Page;