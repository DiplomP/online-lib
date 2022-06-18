import './index.css';
import React from "react";
import { Link } from "react-router-dom";
// import DocViewer from "../doc";

function reactPage() {
	return (
	<div className="react-content">
		<h2 className="h1-react">React-библиотека JavaScript</h2>
		<div className='material-react'>
			<Link className='links-react' to="/react/lections">Лекции</Link>
			<Link className='links-react' to="/react/videos">Видео-уроки</Link>
			<Link className='links-react' to="/react/presentations">Презентация</Link>
			<Link className='links-react' to="/react/practice">Практические задания</Link>
			<Link className='links-react' to="/react/testreact">Тестовые задания</Link>
			</div>
			{/* <h2>Sample Doc file:<DocViewer source="d/15UqZAi-XkLN5pxH5WmZCxKyqE1rp0A92gg-wsljdw0I/edit?usp=sharing" /></h2> */}
	</div>
	)
  }
  
  export default reactPage