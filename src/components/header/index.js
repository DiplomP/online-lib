import { Link } from "react-router-dom";
import './index.css';

function header() {
	return (
		<div className="header-content">
			<div>
				<img className="img-header" src="https://www.timeless-education.com/wp-content/uploads/2016/08/htmlcssjs-1.png" alt="header"/>
			</div>
			<Link className="header-link" to="/">
			<span className="header-text-1">Web-technology</span><br/>
			<span className="header-text-2">Электронный обучающий учебник</span>
			</Link>
		</div>
	
	)
  }
  
  export default header