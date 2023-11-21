import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EventResponse } from '../../types/EventResponse';
import axios from 'axios';

const Event: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<EventResponse>();

  useEffect(() => {
    axios.get<EventResponse>(`http://localhost:3001/events/` + eventId) 
      .then((response) => {
        if (response.status === 200) {
          setEvent(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching eventss:', error);
      });
  }, []);

  if (!event) {
    return <div className="text-center mt-8">Event not found</div>;
  }
  const eventDate = new Date(event.date);

  const formattedDate = eventDate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
      <p className="text-gray-700">{event.description}</p>
      <div className="mt-4">
        <p className="text-gray-600">Date: {formattedDate}</p>
        <p className="text-gray-600">Lecturer: {event.lecturer.username}</p>
      </div>
    </div>
  );
};

export default Event;
