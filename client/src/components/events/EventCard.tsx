import React from 'react';
import { Link } from 'react-router-dom';
import { Lecturer } from '../../types/Lecturer';

interface Props {
  id: number;
  name: string;
  description: string;
  date: string; 
  venue: string;
  createdAt: Date; 
  updatedAt: Date; 
  userId: number;
  lecturer: Lecturer;
}

const EventCard: React.FC<Props> = (props) => {

  const eventDate = new Date(props.date);

  const formattedDate = eventDate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
      <header className="text-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <h3>{formattedDate}</h3>
      </header>
      <main className="p-4">
        <p className="text-gray-700">{props.description}</p>
      </main>
      <footer className="p-4">
        <Link to={`/events/${props.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Learn More
        </Link>
      </footer>
    </div>
  );
};

export default EventCard;
