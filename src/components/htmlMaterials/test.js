import React, {useState} from "react";
import './index.css';

function Testhtml5() {
	const [firstTest, setFirstTest] = useState(false);
	const [noneTest, setNoneTest] = useState(true);
	const activeFirst = () =>{
		setFirstTest(true);
		setNoneTest(false);
	}

	return (
	<div className='html-content-test'>
		<h2 className='h1-html'>Тестовый материал по HTML</h2>
	<div className="material-test-html">
		<span className={firstTest ? "lections-test-active" : "lections-html"} onClick={activeFirst}>Тестовая работа</span>
		<div className="test-html">
			<iframe title="testshtml" className={noneTest ? "none-test-html" : ""} src="https://docs.google.com/forms/d/e/1FAIpQLSd2WIayemlgUNfDIM3PYDL5bZsFAJCUOVWv1PHxUnIkqW7cNQ/viewform?embedded=true" width="100%" height="100%" frameborder="0">Загрузка…</iframe>
		</div>
	</div>
    </div>
	)
  }
  
  export default Testhtml5