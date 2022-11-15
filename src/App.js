import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useLocation
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Alert from './Blog/component/Alert';
import Home from './Blog/Home';
import About from './Blog/pages/About';
import PostList from './Blog/pages/PostList';
import Contact from './Blog/pages/Contact';
import Post from './Blog/pages/Post';
import Nav from './Blog/templates/Nav';
import RightSide from './Blog/templates/RightSide';



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [progress, setProgress] = useState(10);
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#343a40";
    }
    else {
      setMode("light");
      document.body.style.background = "white";
    }
  }
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Nav title="Blog" mode={mode} toggleMode={toggle} />
        <Alert alert={alert} />
          <div className="container pt-3 min-vh-100">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8" style={{maxHeight:"160vh"}}>
        <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path="/blog" element={<PostList />} />
                <Route exact path="/blog/:slug" element={<Post/>} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <div className='mb-3'>&nbsp;</div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 bg-dark card p-3" style={{minHeight:"100vh"}}>
              <RightSide />
              </div>
            </div>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
