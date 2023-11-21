import React, { useEffect, useState } from 'react';
import EventCard from '../../components/events/EventCard';
import axios from 'axios';
import { EventResponse } from '../../types/EventResponse';



const Events: React.FC = () => {
  const [events, setEvents] = useState<EventResponse[]>([]);

  useEffect(() => {
    axios.get<EventResponse[]>('http://localhost:3001/events')
      .then((response) => {
        if (response.status === 200) {
          setEvents(response.data); 
        }
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};

export default Events;
