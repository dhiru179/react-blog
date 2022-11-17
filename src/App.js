import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// import Alert from './Blog/component/Alert';
import Home from './Blog/Home';
// import About from './Blog/pages/About';
import PostList from './Blog/pages/PostList';
// import Contact from './Blog/pages/Contact';
import Post from './Blog/pages/Post';
import Nav from './Blog/templates/Nav';
import Error404 from './Blog/pages/Error404';



function App() {
  const [mode, setMode] = useState("dark");
  // const [alert, setAlert] = useState(null);
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
  // const showAlert = (type, message) => {
  //   setAlert({
  //     type: type,
  //     msg: message
  //   })
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500)
  // }
  return (

    <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(10)}
      />
      <Nav logo="EduTechInfo" mode={mode} toggleMode={toggle} />
      {/* <Alert alert={alert} /> */}

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/blog" element={<PostList progress={setProgress} />} />
        <Route exact path="/blog/:slug" element={<Post progress={setProgress}/>} />
        {/* <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} /> */}
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
