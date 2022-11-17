import React, { useState, useEffect } from 'react';
import BlogPost from '../helper/PostData';
import RightSide from '../templates/RightSide';
import { Link } from "react-router-dom";
import Footer from '../templates/Footer';
import { Seo } from '../helper/Seo';

export default function PostList(props) {
  const [currentProgress, setCurrentProgress] = useState(10);
  const [post, setPost] = useState([]);

  props.progress(currentProgress)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setPost(BlogPost());
    Seo({
      title: 'This is my title only shown on this page',
      // metaDescription: 'With some meta description'
    });
    window.addEventListener('scroll', (e) => {
      setCurrentProgress(window.scrollY * 100 / (document.body.scrollHeight - window.innerHeight));
    });
    return () => {
      // Anything in here is fired on component unmount.
      window.addEventListener('scroll', (e) => {
        setCurrentProgress(window.scrollY * 100 / (document.body.scrollHeight - window.innerHeight));
      });
      Seo({
        title: 'This is my title only shown on this page',
        // metaDescription: 'With some meta description'
      });
    }
  }, []);


  return (
    <div>
      <div className="navbar bg-light border-bottom d-flex justify-content-center align-items-center">
        <div className="d-flex px-3" style={{ overflowX: "auto" }}>
          <Link to={'#'} className="btn btn-light btn-sm mx-2 border border-dark disabled">Php</Link>
          <Link to={'#'} className="btn btn-light btn-sm mx-2 border border-dark disabled">JavaScript</Link>
          <Link to={'#'} className="btn btn-light btn-sm mx-2 border border-dark disabled">Css</Link>
          <Link to={'#'} className="btn btn-light btn-sm mx-2 border border-dark disabled">Html</Link>
          <Link to={'#'} className="btn btn-light btn-sm mx-2 border border-dark disabled">Techinfo</Link>
          <Link to={'#'} className="btn btn-light btn-sm mx-2 border border-dark disabled ">General </Link>
        </div>
      </div>
      <div className="container pt-1">
        <div className="row justify-content-between col-xs-12 col-sm-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">

          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
            {post.map((element, index) => {
              var stripedHtmlpost = element.post.replace(/<[^>]+>/g, '');
              return (
                <div key={index} className="card mb-3" style={{ maxWidth: '640px', overflow: 'hidden' }}>
                  <div className="row g-0">
                    <div className="col-md-4 bg-dark">
                      <img src={element.image} className="img-fluid rounded-start" alt="..." style={{ objectFit: 'cover', height: '100%' }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body mb-2" style={{ height: '199px' }}>
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text" style={{ textOverflow: 'ellipsis', overflow: 'hidden', height: '99px', width: '100%' }}>
                          {stripedHtmlpost.slice(0, 193)}
                        </p>
                        <div className="d-flex justify-content-between align-items-center ">
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                          <Link to={`${element.slug}`} state={{ myPost: element }} className="btn btn-sm btn-dark"> Read more...</Link>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className='mb-3'>&nbsp;</div>
          </div>
          {window.innerWidth > 767 ?
            (<div className="col-md-4 col-lg-4 col-xl-4 card p-3" style={{ height: "100vh" }}>
              <RightSide />
            </div>)
            : ('')
          }
        </div>
      </div>
      <Footer />

    </div>
  )
}
