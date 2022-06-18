import './index.css';
import React from "react";
import { Link } from "react-router-dom";
// import DocViewer from "../doc";

function jsPage() {
	return (
	<div className='js-content'>
		<h2 className='h1-js'>JS-язык сценариев</h2>
		<div className='material-js-home'>
			<Link className='links-js' to="/js/lections">Лекции</Link>
			<Link className='links-js' to="/js/videos">Видео-уроки</Link>
			<Link className='links-js' to="/js/presentations">Презентация</Link>
			<Link className='links-js' to="/js/practice">Практические задания</Link>
			<Link className='links-js' to="/js/testjs">Тестовые задания</Link>
		</div>
		{/* <h2>Sample Doc file:<DocViewer source="d/15UqZAi-XkLN5pxH5WmZCxKyqE1rp0A92gg-wsljdw0I/edit?usp=sharing" /></h2> */}
    	</div>
	)
  }
  
  export default jsPage