import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/homePage/index'
import HTML from './components/htmlPage/index'
import CSS from './components/cssPage/index'
import JS from './components/jsPage/index'
import React from './components/reactPage/index'
import Header from './components/header/index'
import Footer from './components/footer/index'
import Sidebar from './components/sidebar/index'
import Lections from './components/jsMaterials/lections'
import Lectionshtml from './components/htmlMaterials/lectionshtml'
import Presentationhtml from './components/htmlMaterials/presentaitionhtml'
import Presentationjs from './components/jsMaterials/presentaition'
import Lectionscss from './components/cssMaterials/lectionscss'
import Lectionsreact from './components/reactMaterials/lectionsreact'
import Videos from './components/jsMaterials/video'
import Videoshtml from './components/htmlMaterials/videohtml'
import Videoscss from './components/cssMaterials/videocss'
import Videosreact from './components/reactMaterials/videoreact'
import Presentationcss from './components/cssMaterials/presentaitioncss'
import Presentationreact from './components/reactMaterials/presentaitionreact'
import Lectionshtml5 from './components/htmlMaterials/practicehtml'
import Practice from './components/jsMaterials/practice'
import Practicereact from './components/reactMaterials/practicereact'
import Practicecss from './components/cssMaterials/practicecss'
import AboutPage from './components/about';
import Testhtml5 from './components/htmlMaterials/test';
import TestCss from './components/cssMaterials/testcss';
import TestJS from './components/jsMaterials/testjs';
import Testreact from './components/reactMaterials/testreact';

function App() {
  return (
  <Router>
    <div className='container'>
  <div className='header'>
  <Header/>
  </div>
 
  <div className='content'>
  <div className='sidebar'>
<Sidebar/>
  </div>
  <div className='dashboard'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/html' element={<HTML/>}/>
      <Route path='/html/lections' element={<Lectionshtml/>}/>
      <Route path='/html/presentations' element={<Presentationhtml/>}/>
      <Route path='/html/videos' element={<Videoshtml/>}/>
      <Route path='/html/practice' element={<Lectionshtml5/>}/>
      <Route path='/html/test' element={<Testhtml5/>}/>
      <Route path='/css' element={<CSS/>}/>
      <Route path='/css/lections' element={<Lectionscss/>}/>
      <Route path='/css/videos' element={<Videoscss/>}/>
      <Route path='/css/presentations' element={<Presentationcss/>}/>
      <Route path='/css/practice' element={<Practicecss/>}/>
      <Route path='/css/testcss' element={<TestCss/>}/>
      <Route path='/js' element={<JS/>}/>
      <Route path='/js/lections' element={<Lections/>}/>
      <Route path='/js/videos' element={<Videos/>}/>
      <Route path='/js/presentations' element={<Presentationjs/>}/>
      <Route path='/js/practice' element={<Practice/>}/>
      <Route path='/js/testjs' element={<TestJS/>}/>
      <Route path='/react' element={<React/>}/>
      <Route path='/react/lections' element={<Lectionsreact/>}/>
      <Route path='/react/videos' element={<Videosreact/>}/>
      <Route path='/react/presentations' element={<Presentationreact/>}/>
      <Route path='/react/practice' element={<Practicereact/>}/>
      <Route path='/react/testreact' element={<Testreact/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    </div> 
  </div> 
  <div className='footer'>
  <Footer/>
  </div>
  </div>
  </Router>
  );
}

export default App;
