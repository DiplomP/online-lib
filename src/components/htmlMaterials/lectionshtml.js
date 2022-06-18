
import React, {useState} from "react";
import DocViewer from "../doc";
import './index.css';

function Lectionshtml() {
	const [firstLection, setFirstLection] = useState(false);
	const [secondLection, setSecondLection] = useState(false);
	const [thirdLection, setThirdLection] = useState(false);
	const [fourLection, setFourLection] = useState(false);
	const [fiveLection, setFiveLection] = useState(false);
	const [sixLection, setSixLection] = useState(false);
	const [sevenLection, setSevenLection] = useState(false);
	const [eightLection, setEightLection] = useState(false);
	const [noneLection, setNoneLection] = useState(true);
	const activeFirst = () =>{
		setFirstLection(true);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(false);
		setSevenLection(false);
		setEightLection(false);
	}

	const activeSecond = () =>{
		setFirstLection(false);
		setSecondLection(true);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(false);
		setSevenLection(false);
		setEightLection(false);
	}

	const activeThird = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(true);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(false);
		setSevenLection(false);
		setEightLection(false);
	}

	const activeFour = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(true);
		setFiveLection(false);
		setSixLection(false);
		setSevenLection(false);
		setEightLection(false);
	}

	const activeFive = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(true);
		setSixLection(false);
		setSevenLection(false);
		setEightLection(false);
	}

	const activeSix = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(true);
		setSevenLection(false);
		setEightLection(false);
	}

	const activeSeven = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(false);
		setSevenLection(true);
		setEightLection(false);
	}

	const activeEight = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(false);
		setSevenLection(false);
		setEightLection(true);
	}


	return (
	<div className={noneLection ? 'html-content' : 'html-content-activ'}>
		<h3 className='h3-html'>Лекционный материал по HTML</h3>
	<div className="material-lections-html">
		<span className={firstLection ? "lections-span-html-active" : "lections-span-html"} onClick={activeFirst}>Лекция №1</span>
		<span className={secondLection ? "lections-span-html-active" : "lections-span-html"} onClick={activeSecond}>Лекция №2</span>
		<span className={thirdLection ? "lections-span-html-active" : "lections-span-html"} onClick={activeThird}>Лекция №3</span>	
		<span className={fourLection ? "lections-span-html-active" : "lections-span-html"} onClick={activeFour}>Лекция №4</span>	
		<span className={fiveLection ? "lections-span-html-active" : "lections-span-html"} onClick={activeFive}>Лекция №5</span>	
		<span className={sixLection ? "lections-span-html-active" : "lections-span-html"} onClick={activeSix}>Лекция №6</span>	
		<span className={sevenLection ? "lections-span-html-active" : "lections-span-html"} onClick={activeSeven}>Лекция №7</span>
		<span className={eightLection ? "lections-span-html-active" : "lections-span-html"} onClick={activeEight}>Лекция №8</span>
		<div className="lect"><span className={noneLection ? "none-html" : "default"}><DocViewer source={
			firstLection ? "d/1wrrOdifd2bY7atWq_tQSijzQ0ofZTPvyPGgi7Is6yhg/edit?usp=sharing" : 
			secondLection ? "d/1f87jYNAOrFwykjbhgME3Uk7jmA1lekFVRWnqDXtQZEM/edit?usp=sharing" : 
			thirdLection ? "d/1WjaMYBJkPLlPO8QT7fVztNt6-1fNCSmd8qvKfK5BNok/edit?usp=sharing" :
			fourLection ? "d/1MFfsNxvc3XNhxSFpjnaCpHlYZFkiOsSVsE5BHchBF78/edit?usp=sharing" :
			fiveLection ? "d/1cfKiOUhrN-msxTX9jKJij57oeFPIp6zHDEaDsFzMdC4/edit?usp=sharing" :
			sixLection ? "d/1v72r0VqMNmW6Go80COvwzMiQd6KI6tuS4PoReC2H5MI/edit?usp=sharing" :
			sevenLection ? "d/1TMMP281iesKl9JJ2UgJtyVtaTMZTDfBQMtNPoBFqrz0/edit?usp=sharing" :
			eightLection ? "d/1Is3XnFCWl3ALs3N0MPP8W-YumqSxhbR3sC50ninWMso/edit?usp=sharing" : ""} /></span>
		</div>
	</div>
    </div>
	)
  }
  
  export default Lectionshtml