import React from 'react';
import { useParams } from 'react-router-dom';
function EventsDetailPage() {
  const { title, id } = useParams();
  console.log(title, id);

  // axios.get('http://localhost:8000/events/:id')
  return <div>event detail page</div>;
}

export default EventsDetailPage;






//GIT AND GITHUB DIFFERENCE   //NOTE versioning 
//why we use git 

//version control system 
// local 
// distributed 