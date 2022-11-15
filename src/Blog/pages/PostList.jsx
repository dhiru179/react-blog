import React, { useState, useEffect } from 'react';
import BlogPost from '../BLogPostData';
import { Link } from "react-router-dom";

export default function PostList() {

  const [post, setPost] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // const post = BlogPost();
    setPost(BlogPost());
    // console.log(post)
  }, []);
  console.log(post);
  return (
    <>
      {post.map((element, index) => {
        var stripedHtmlpost = element.post.replace(/<[^>]+>/g, '');
        return (
          <div key={index} className="card mb-3" style={{ maxWidth: '640px', overflow: 'hidden' }}>
            <div className="row g-0">
              <div className="col-md-4 bg-dark">
                <img src={element.image} className="img-fluid rounded-start" alt="..." style={{ objectFit: 'cover', height: '100%' }} />
              </div>
              <div className="col-md-8">
                <div className="card-body" style={{height:'199px'}}>
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text" style={{ textOverflow: 'ellipsis', overflow: 'hidden', height: '99px', width: '100%' }}>

                    {stripedHtmlpost.slice(0, 193)}

                    <Link to={`${element.slug}`} state={{myPost: element}} className="text-primary" style={{ textDecoration: 'none' }}>more...</Link>
                  </p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
