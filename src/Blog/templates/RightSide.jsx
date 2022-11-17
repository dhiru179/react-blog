import React from 'react';
import { Link } from "react-router-dom";

export default function RightSide() {
  return (
    <>
      <div className="border mb-3 p-3 w-100 overflow-hidden">
        adv
      </div>
      <div className="border mb-3 p-3 w-100 d-none">
        <input type="search" className='form-control' placeholder='search' />
      </div>
      <div className="border mb-3 p-3 w-100 d-none">
        <div className="list-group">
          <span className="list-group-item bg-light text-dark text-center" aria-current="true">
            <strong>Trending</strong>
          </span>
          <Link to={"#"} className="list-group-item ">A second link item</Link>
          <Link to={"#"} className="list-group-item ">A third link item</Link>
          <Link to={"#"} className="list-group-item ">A fourth link item</Link>
          <Link to={"#"} className="list-group-item ">A disabled link item</Link>
        </div>
      </div>
      
    </>

  )
}
