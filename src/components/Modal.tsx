'use client';

import React, { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
    children: React.ReactNode;
    onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    const router = useRouter();

    const handleClose = useCallback(() => {
        if (onClose) {
            onClose();
        } else {
            router.back();
        }
    }, [router, onClose]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [handleClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
                onClick={handleClose}
            />
            <div className="relative z-10 max-w-7xl max-h-[90vh] mx-4 overflow-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-20 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all"
                    aria-label="Close modal"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;