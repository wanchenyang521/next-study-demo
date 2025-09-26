import React from 'react';
import Link from 'next/link';
import { getImageById } from '@/data/mockImageData';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        id: string;
    };
}

const Page = ({ params }: PageProps) => {
    const imageId = parseInt(params.id);
    const imageData = getImageById(imageId);

    if (!imageData) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    返回首页
                </Link>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="lg:flex">
                        <div className="lg:w-2/3">
                            <img
                                src={imageData.imageUrl}
                                alt={imageData.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="lg:w-1/3 p-8">
                            <div className="mb-4">
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                    {imageData.category}
                                </span>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {imageData.title}
                            </h1>

                            <p className="text-gray-600 mb-6">
                                {imageData.description}
                            </p>

                            <div className="border-t pt-6 space-y-4">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="text-gray-700">摄影师: {imageData.photographer}</span>
                                </div>

                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-700">拍摄日期: {imageData.date}</span>
                                </div>

                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-700">拍摄地点: {imageData.location}</span>
                                </div>

                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-700">相机: {imageData.camera}</span>
                                </div>
                            </div>

                            <div className="border-t pt-6 mt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">详细介绍</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {imageData.details}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;