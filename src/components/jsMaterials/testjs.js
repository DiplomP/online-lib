import React, {useState} from "react";
import './index.css';

function TestJS() {
	const [firstTest, setFirstTest] = useState(false);
	const [noneTest, setNoneTest] = useState(true);
	const activeFirst = () =>{
		setFirstTest(true);
		setNoneTest(false);
	}

	return (
	<div className='js-content-test'>
		<h2 className='h1-js-lections'>Тестовый материал по JavaScript</h2>
		<div>
		<span className={firstTest ? "test-span-js-active" : "test-span-js"} onClick={activeFirst}>Начать тест</span>
		<div className="test-js"><iframe title="testsjs" className={noneTest ? "none-test-js" : "test-active-js"} src="https://docs.google.com/forms/d/e/1FAIpQLScs4QQiRburmV3kUlLWRyJEgXrKj6qiTn_TjFtu7URMDvoOHQ/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
	</div>
	</div>
    </div>
	)
  }
  
  export default TestJS