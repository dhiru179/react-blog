import React from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

export default function Post(props) {
  const location = useLocation();
  const { myPost } = location.state
  console.log(myPost.post);
  return (
    <div className="card text-bg-light mb-3">
      <div className="card-header">{myPost.title}</div>
      <div className="card-body">
        {parse(myPost.post)}
        {/* <h5 className="card-title">Light card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
    </div>
  )
}
