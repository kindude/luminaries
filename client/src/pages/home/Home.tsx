import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DemoCarousel from '../../components/carousel';
import ReviewCard from '../../components/components/ReviewCard';
import axios from 'axios';
import { Book } from '../../types/Book';
import { Review } from '../../types/Review';


const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);


  useEffect(() => {
    axios.get('http://localhost:3001/books/') 
      .then((response) => {
        if (response.status === 200) {
          setBooks(response.data.conditions); 
          console.log(books);
        }
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);


  useEffect(() => {
    axios.get<Review[]>('http://localhost:3001/reviews/latest')
      .then((response) => {
        if (response.status === 200) {
          setReviews(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  return (
    <div className="min-h-full w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="border-b-r border-gray-500 mx-auto p-8 bg-gray-300 min-w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Literary Luminaries Book Club</h1>
        <p className="text-gray-700 text-center mb-6">
          Explore the world of literature, discuss your favorite books, and enjoy the company of fellow book lovers.
        </p>
        <div className="text-center">
          <Link
            to="/about"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue inline-block mx-auto"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-1/2 p-4">
          <DemoCarousel books={books}/>
        </div>
        <div className="w-1/2 p-4">
          <ReviewCard reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default Home;
