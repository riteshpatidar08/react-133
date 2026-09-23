import React from 'react';
import { Link } from 'react-router-dom';

function EventsPage({events}) {

  return (
    <div>
      <h2>Upcoming Events</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {events.map((event) => (
          <Link
          to={`/events/${event.title}/${event.id}`}
            style={{ border: '2px solid blue', padding: '20px' }}
            key={event.id}
          >
            <h3>{event.title}</h3>
            <p>Location : {event.location}</p>
            <p>Event date : {event.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;


//NOTE useParams() hook; /events/:tittle/:id   = 