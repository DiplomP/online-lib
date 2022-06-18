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
	<div className='react-content-test'>
		<h2 className='h1-react'>Тестовый материал по React</h2>
	<div className="material-practica-react">
		<span className={firstTest ? "test-react-active" : "test-react"} onClick={activeFirst}>Начать тест</span>
		<div className="default">
		<iframe title="testsreact" className={noneTest ? "none-test-js" : "test-active-js"} src="https://docs.google.com/forms/d/e/1FAIpQLSdbIpy1GmRtrt8cwgaxVZZmSa-8vfg1ZuROBnrzEIuaRFVrAg/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
    	</div>
	</div>
	</div>
	)
  }
  
  export default Testhtml5