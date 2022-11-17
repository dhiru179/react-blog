import React, {useEffect } from 'react';
// import { Link, Outlet } from "react-router-dom";
import img from './image/landing.jpg';
import Footer from './templates/Footer';
import { Seo } from './helper/Seo';


export default function Home() {
  useEffect(() => {
    Seo({
      title: 'EduTechInfo',
      metaDescription: 'With some meta description'
    });
    return () => {
      Seo({
        title: 'EduTechInfo',
        metaDescription: 'With some meta description'
      });
    }
  }, []);
  
  return (
    <>
      <div className='text-light d-flex align-items-center justify-content-center' style={{ minHeight: "calc(100vh - 56px)" }}>

        <img src={img} alt="..." style={{ objectFit: "cover", backgroundRepeat: "no-repeat", position: 'absolute', top: "56px", height: "calc(100vh - 56px)", zIndex: "-26", width: "100%" }} />
        <div className='mb-5 col-xs-12 col-sm-12 col-md-8 col-xl-8 col-md-offset-2 col-xl-offset-2'>
          <div className="p-3 mb-3">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum praesentium rem quos recusandae maxime qui voluptatem, adipisci molestias possimus beatae modi iure expedita aspernatur animi minima et sunt repudiandae est.</p>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <button className='btn btn-outline-warning  mx-3'>Explore</button>
            <button className='btn btn-outline-danger  mx-3'>Explore</button>
          </div>
        </div>
      </div>
      <div className='container py-3'>
        <div className="shadow p-3 mb-3 mt-3 bg-body rounded text-center">
          <span className="h4"><strong>Top Topics</strong></span>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center">

          <div className="card bg-light  mb-3 mx-2" style={{ maxWidth: "18rem" }}>
            <div className="card-body">
              <div className='card-title'><strong>Html</strong></div>
              <p className="card-text">
                The <strong>Html</strong> is used to create webpage for websites.
              </p>
              <div className='d-flex justify-content-end'>
                <button className='btn btn-dark btn-sm'>Visits Here...</button>
              </div>
            </div>
          </div>
          <div className="card bg-light  mb-3 mx-2" style={{ maxWidth: "18rem" }}>
            <div className="card-body">
              <div className='card-title'><strong>Css</strong></div>
              <p className="card-text">
                The <strong>Css</strong>(Cascading Style Sheets) is used for desing web pages.
              </p>
              <div className='d-flex justify-content-end'>
                <button className='btn btn-dark btn-sm'>Visits Here...</button>
              </div>
            </div>
          </div>

          <div className="card bg-light  mb-3 mx-2" style={{ maxWidth: "18rem" }}>
            <div className="card-body">
              <div className='card-title'><strong>Javascript</strong></div>
              <p className="card-text">
                The <strong>JavaScript</strong> is manuplate in frontend and server side.
              </p>
              <div className='d-flex justify-content-end'>
                <button className='btn btn-dark btn-sm'>Visits Here...</button>
              </div>
            </div>
          </div>

          <div className="card bg-light  mb-3 mx-2" style={{ maxWidth: "18rem" }}>
            <div className="card-body">
              <div className='card-title'><strong>Php</strong></div>
              <p className="card-text">
                The <strong>Php</strong> is a server side scripting language.
              </p>
              <div className='d-flex justify-content-end'>
                <button className='btn btn-dark btn-sm'>Visits Here...</button>
              </div>
            </div>
          </div>

          <div className="card bg-light  mb-3 mx-2" style={{ maxWidth: "18rem" }}>
            <div className="card-body">
              <div className='card-title'><strong>Techinfo</strong></div>
              <p className="card-text">
                Here, we discuss in bloging about new technology,bugs related issue.
              </p>
              <div className='d-flex justify-content-end'>
                <button className='btn btn-dark btn-sm'>Visits Here...</button>
              </div>
            </div>
          </div>

          <div className="card bg-light mb-3 mx-2" style={{ maxWidth: "18rem" }}>
            <div className="card-body">
              <div className='card-title'><strong>General</strong></div>
              <p className="card-text">
                Here, we discuss about how to easy used in daily life issues.
              </p>
              <div className='d-flex justify-content-end'>
                <button className='btn btn-dark btn-sm'>Visits Here...</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>

  )
}
