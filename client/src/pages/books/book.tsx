import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EventResponse } from '../../types/EventResponse';
import axios from 'axios';
import { Book } from '../../types/Book';

const MyBook: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    axios.get(`http://localhost:3001/books/` + bookId) 
      .then((response) => {
        if (response.status === 200) {
          setBook(response.data.conditions);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  if (!book) {
    return <div className="text-center mt-8">Book not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 mb-8 p-8 bg-white rounded-md shadow-md">
      <div className="flex justify-center items-center mb-6">
        {book.cover_url && <img src={book.cover_url} alt={`${book.title} Cover`} className="rounded-md shadow-md" style={{ maxWidth: '200px', maxHeight: '300px' }} />}
      </div>
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-600 mb-2">Author: {book.author}</p>
      <p className="text-gray-800 leading-relaxed">Description: {book.description}</p>
    </div>
  );
};

export default MyBook;
