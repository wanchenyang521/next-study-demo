'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="text-center space-y-6 p-8">
                <h1 className="text-9xl font-bold text-white opacity-20">404</h1>
                <h2 className="text-4xl font-bold text-white">Page Not Found</h2>
                <p className="text-gray-400 text-lg max-w-md mx-auto">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <div className="flex gap-4 justify-center pt-4">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}