import React, {useState} from "react";
import DocViewer from "../doc";
import './index.css';

function Lections() {
	const [firstLection, setFirstLection] = useState(false);
	const [secondLection, setSecondLection] = useState(false);
	const [thirdLection, setThirdLection] = useState(false);
	const [fourLection, setFourLection] = useState(false);
	const [fiveLection, setFiveLection] = useState(false);
	const [noneLection, setNoneLection] = useState(true);

	const activeFirst = () =>{
		setFirstLection(true);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);

	}

	const activeSecond = () =>{
		setFirstLection(false);
		setSecondLection(true);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
	}

	const activeThird = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(true);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
	}

	const activeFour = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(true);
		setFiveLection(false);
	}

	const activeFive = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(true);
	}

	return (
	<div className={noneLection ? "js-content-lections" : "js-content-lections-1"}>
		<h2 className='h1-js-lections'>Лекционный материал по JavaScript</h2>
	<div className="material-lections-js">
		<span className={firstLection ? "lections-span-js-active" : "lections-span-js"} onClick={activeFirst}>Лекция №1</span>
		<span className={secondLection ? "lections-span-js-active" : "lections-span-js"} onClick={activeSecond}>Лекция №2</span>
		<span className={thirdLection ? "lections-span-js-active" : "lections-span-js"} onClick={activeThird}>Лекция №3</span>	
		<span className={fourLection ? "lections-span-js-active" : "lections-span-js"} onClick={activeFour}>Лекция №4</span>	
		<span className={fiveLection ? "lections-span-js-active" : "lections-span-js"} onClick={activeFive}>Лекция №5</span>
		<div className="default-lections"><span className={noneLection ? "none-html" : "default"}><DocViewer source={
			firstLection ? "d/1vpVR4VjQbxrKhoYSE-QY_HTMI0IUj83kJ8tIjoEjNUA/edit?usp=sharing" : 
			secondLection ? "d/1eCPGJoJqDCseQeI14G-2kJ8zaGozbYbcEenRFkGDq6o/edit?usp=sharing" : 
			thirdLection ? "d/1K5NGppmwECRS6pb_HxMPyyqcqDcNn44TB5FgW7sQlzA/edit?usp=sharing" :
			fourLection ? "d/1EJpFR5uxbmbljYUj7wq2ffMi7jmcPVCp3h7GYkAWAkc/edit?usp=sharing" :
			fiveLection ? "d/1KAFHuMlHa-38JAOEonqu9YgKqDOYWlH2d0I_T7gFY1E/edit?usp=sharing" : ""} /></span>
		</div>
	</div>
    </div>
	)
  }
  
  export default Lections