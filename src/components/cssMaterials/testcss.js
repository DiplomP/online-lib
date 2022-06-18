import React, {useState} from "react";
import './index.css';

function TestCss() {
	const [firstTest1, setFirstTest1] = useState(false);
	const [noneTest1, setNoneTest1] = useState(true);
	const activeFirst1 = () =>{
		setFirstTest1(true);
		setNoneTest1(false);
	}

	return (
	<div className='css-content-test'>
		<h2 className='h1-css'>Тестовый материал по Css</h2>
	<div className="material-test-css">
		<span className={firstTest1 ? "test-span-css-active" :"test-span-css"} onClick={activeFirst1}>Начать тест</span>
		<div className="default-test"><iframe title="testscss" className={noneTest1 ? "none-test-css" : "test-active"} src="https://docs.google.com/forms/d/e/1FAIpQLSeI2zayWDkpXCUj78iQ3ud12rR91P9244m1cYkE6FvLxYzILg/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
		</div>
	</div>
    </div>
	)
  }
  
  export default TestCss