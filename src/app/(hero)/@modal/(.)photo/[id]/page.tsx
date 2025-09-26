import React from 'react';
import Modal from '@/components/Modal';
import { getImageById } from '@/data/mockImageData';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        id: string;
    };
}

const PhotoModal = ({ params }: PageProps) => {
    const imageId = parseInt(params.id);
    const imageData = getImageById(imageId);

    if (!imageData) {
        notFound();
    }

    return (
        <Modal>
            <div className="bg-white rounded-lg overflow-hidden max-w-6xl">
                <div className="relative">
                    <img
                        src={imageData.imageUrl}
                        alt={imageData.title}
                        className="w-full h-auto max-h-[80vh] object-contain bg-black"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                        <div className="text-white">
                            <span className="inline-block bg-white bg-opacity-20 backdrop-blur text-white text-sm px-3 py-1 rounded-full mb-2">
                                {imageData.category}
                            </span>
                            <h2 className="text-3xl font-bold mb-2">{imageData.title}</h2>
                            <p className="text-gray-200 mb-4">{imageData.description}</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                    <span className="text-gray-400">Dq</span>
                                    <p className="font-medium">{imageData.photographer}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400">�</span>
                                    <p className="font-medium">{imageData.date}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400">0�</span>
                                    <p className="font-medium">{imageData.location}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400">�:</span>
                                    <p className="font-medium">{imageData.camera}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default PhotoModal;