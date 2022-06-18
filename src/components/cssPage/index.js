import './index.css';
import React from "react";
import { Link } from "react-router-dom";
// import DocViewer from "../doc";

function cssPage() {
	return (
		<div className='css-content'>
			<h2 className='h1-css'>CSS-таблица стилей</h2>
			<div className='material-css'>
			<Link className='links-css' to="/css/lections">Лекции</Link>
			<Link className='links-css' to="/css/videos">Видео-уроки</Link>
			<Link className='links-css' to="/css/presentations">Презентация</Link>
			<Link className='links-css' to="/css/practice">Практические задания</Link>
			<Link className='links-css' to="/css/testcss">Тестовые задания</Link>
			</div>
			{/* <h2>Sample Doc file:<DocViewer source="d/15UqZAi-XkLN5pxH5WmZCxKyqE1rp0A92gg-wsljdw0I/edit?usp=sharing" /></h2> */}
			</div>
		)
	  }
  
  export default cssPage