import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import RightSide from '../templates/RightSide';
import Footer from '../templates/Footer';
import { Seo } from '../helper/Seo';

export default function Post(props) {
  const [currentProgress, setCurrentProgress] = useState(10);
  const location = useLocation();
  const { myPost } = location.state

  props.progress(currentProgress)

  useEffect(() => {
    Seo({
      title: myPost.title,
      metaDescription: myPost.metaDescription
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
        title: myPost.title,
        metaDescription: myPost.metaDescription
      });
    }
  }, [myPost.title,myPost.metaDescription]);

  return (
    <>
      <div className="container pt-3">
        <div className="row justify-content-between">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
            <div className="card text-dark mb-3 overflow-hidden">
              <div className="card-header">{myPost.title}</div>
              <div className="card-body">
                {parse(myPost.post)}
              </div>
            </div>
            <div className='mb-3'>&nbsp;</div>
          </div>

          {window.innerWidth > 767 ?
            (<div className="col-md-3 col-lg-3 col-xl-3 card p-3" style={{ height: "90vh" }}>
              <RightSide />
            </div>)
            : ('')
          }
        </div>
      </div>


      <Footer />

    </>

  )
}
