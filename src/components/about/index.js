import './index.css';
import React from "react";
// import DocViewer from "../doc";

function aboutPage() {
	return (
	<div className="about-content">
		<h1 className="h1-about">Редакторы</h1>
		<div className='material-about'>
			<div className="content-about">
				<a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer"><p className='text'>Sublime Text</p></a>
			</div>
			<div className="content-about-2">
				<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><p className='text2'>Visual Studio Code</p></a>
			</div>
			<div className="content-about-3">
				<a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer"><p className='text'>WebStorm</p></a>
			</div>
			<div className="content-about-4">
				<a href="https://atom.io/" target="_blank" rel="noopener noreferrer"><p className='text2'>Atom</p></a>
			</div>
		</div>
	</div>
	)
  }
  
  export default aboutPage