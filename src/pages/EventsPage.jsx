import React from 'react';
import { Link } from 'react-router-dom';

function EventsPage() {
  const eventsData = [
    {
      id: 1,
      title: 'Morning Yoga',
      location: 'Jaipur',
      startData: '23-09-2026',
    },
    { id: 2, title: 'Marathon', location: 'Jaipur', startData: '24-09-2026' },
    {
      id: 3,
      title: 'Diwali Party',
      location: 'Jaipur',
      startData: '6-11-2026',
    },
  ];
  return (
    <div>
      <h2>Upcoming Events</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {eventsData.map((event) => (
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
