import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-400 p-4 text-white w-full">
            <div className="container mx-auto text-center">
                <p>&copy; 2023 Literary Luminaries. All rights reserved.</p>
                <p>Contact: contact@bookclub.com</p>
            </div>
        </div>
    );
};

export default Footer;