import React from 'react';
import Link from 'next/link';

interface ImageCardProps {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    category: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, title, imageUrl, description, category }) => {
    return (
        <Link href={`/photo/${id}`} className="block group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="relative h-48 w-full overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                        {category}
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ImageCard;