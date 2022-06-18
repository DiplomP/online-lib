import './index.css';
import React from "react";
import { Link } from "react-router-dom";
// import DocViewer from "../doc";

function htmlPage() {
	return (
	<div className='html-content'>
		<h2 className='h1-html'>HTML-язык разметки</h2>
		<div className='material-html'>
		<Link className='pages-links' to="/html/lections">Лекции</Link>
		<Link className='pages-links' to="/html/videos">Видео-уроки</Link>
		<Link className='pages-links' to="/html/presentations">Презентация</Link>
		<Link className='pages-links' to="/html/practice">Практические задания</Link>
		<Link className='pages-links' to="/html/test">Тестовые задания</Link>
		</div>
		{/* <h2>Sample Doc file:<DocViewer source="d/15UqZAi-XkLN5pxH5WmZCxKyqE1rp0A92gg-wsljdw0I/edit?usp=sharing" /></h2> */}
    	</div>
	)
  }
  
  export default htmlPage