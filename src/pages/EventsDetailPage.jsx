import React from 'react';
import { useParams } from 'react-router-dom';
function EventsDetailPage({ events }) {
  console.log(events);
  const { title, id } = useParams();

  const data = events.find((e) => e.id === Number(id));
  console.log(data);

  // axios.get('http://localhost:8000/events/:id')
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.location}</p>
    </div>
  );
}

export default EventsDetailPage;

//GIT AND GITHUB DIFFERENCE   //NOTE versioning
//why we use git

//version control system
// local
// distributed

//NOTE dynamic routing  =>
  // /events => all data 
// /events/:id =>  single data 
  //note nested routing 
  // dashboard/services 
  // dashboard/help 
  // dashboard/settings 
