import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Book } from '../types/Book';
import { Link } from 'react-router-dom';

interface Propts{
    books: Book[]
}

const DemoCarousel: React.FC<Propts> = ({books}) => {

    const legendStyle: React.CSSProperties = {
        left: '0',
        right: '0',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '8px',
    };
    console.log(books);

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Best Books of the Month</h2>
            <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
            >
            {books.map((book: Book, index: number) => (
                <div key={index} className="relative w-80 h-5/6 mx-auto">
                    <img src={book.cover_url} alt={`Book ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                    <p style={legendStyle} className="mt-5"><Link to = {"/books/" + book.id }>{book.title}</Link></p>
                </div>
            ))}
            </Carousel>
        </div>
    );
};

export default DemoCarousel;
