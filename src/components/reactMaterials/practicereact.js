import React, {useState} from "react";
import DocViewer from "../doc";
import './index.css';

function Practicereact() {
	const [firstLection, setFirstLection] = useState(false);
	const [secondLection, setSecondLection] = useState(false);
	const [thirdLection, setThirdLection] = useState(false);
	const [fourLection, setFourLection] = useState(false);
	const [fiveLection, setFiveLection] = useState(false);
	const [sixLection, setSixLection] = useState(false);
	const [sevenLection, setSevenLection] = useState(false);
	const [eightLection, setEightLection] = useState(false);
	const [noneLection, setNoneLection] = useState(true);
	const [nineLection, setNineLection] = useState(false);
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
		setNineLection(false);
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
		setNineLection(false);
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
		setNineLection(false);
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
		setNineLection(false);
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
		setNineLection(false);
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
		setNineLection(false);
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
		setNineLection(false);
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
		setNineLection(false);
	}

	const activeNine = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(false);
		setSevenLection(false);
		setEightLection(false);
		setNineLection(true);
	}
	return (
	<div className={noneLection ? "react-content" : "react-content-1"}>
		<h2 className='h1-react'>Практичекий материал по React</h2>
	<div className="material-practica-react">
	<span className={firstLection ? "lections-span-pract-react-active" : "lections-span-pract-react"} onClick={activeFirst}>Практическая работа №1 </span>
		<span className={secondLection ? "lections-span-pract-react-active" : "lections-span-pract-react"}  onClick={activeSecond}>Практическая работа №2</span>
		<span className={thirdLection ? "lections-span-pract-react-active" : "lections-span-pract-react"}  onClick={activeThird}>Практическая работа №3</span>	
		<span className={fourLection ? "lections-span-pract-react-active" : "lections-span-pract-react"}  onClick={activeFour}>Практическая работа №4</span>	
		<span className={fiveLection ? "lections-span-pract-react-active" : "lections-span-pract-react"}  onClick={activeFive}>Практическая работа №5</span>	
		<span className={sixLection ? "lections-span-pract-react-active" : "lections-span-pract-react"}  onClick={activeSix}>Практическая работа №6</span>	
		<span className={sevenLection ? "lections-span-pract-react-active" : "lections-span-pract-react"}  onClick={activeSeven}>Практическая работа №7</span>
		<span className={eightLection ? "lections-span-pract-react-active" : "lections-span-pract-react"}  onClick={activeEight}>Практическая работа №8</span>
		<span className={nineLection ? "lections-span-pract-react-active" : "lections-span-pract-react"}  onClick={activeNine}>Практическая работа №9</span>
		<div className="default-div"><span className={noneLection ? "none-html" : "default"}><DocViewer source={
			firstLection ? "d/1-HAkAVeFwh_tHw_bGmuZSvhy7em-n-jb7vzdDYclPB8/edit?usp=sharing" : 
			secondLection ? "d/1vTW74SjWLEAXjbv7Oj9rQYn5sjDa4_9k-ESxRl_IltY/edit?usp=sharing" : 
			thirdLection ? "d/1NkOVQoO6dLiYiXd-IDwR2o96kN4nMV1fGAaLYm52MDE/edit?usp=sharing" :
			fourLection ? "d/1wIbNHPdPoUMgWyANNTl-8Uln9Q4hvRxIALR7GcQPm7o/edit?usp=sharing" :
			fiveLection ? "d/19ntyvbhPe26mYCYS41IFA7yK9FEfM4HuM51hKwLDxmM/edit?usp=sharing" :
			sixLection ? "d/11MAtLccX3xS2WlPQTGgUYEeGKE9iH9FCPvxs9u0BoLw/edit?usp=sharing" :
			sevenLection ? "d/1AdxYuqHz3TuQA8RmRRTCq5i1ynAoRJxyYPxh-QQKnIo/edit?usp=sharing" :
			eightLection ? "d/1Y5yUvaVbWHGOHYmNjaaseX4x6_qVUlGF50j_0j8QJ4c/edit?usp=sharing" :
			nineLection ? "d/1Mtm_AqMbnnDtsDw0nyU1xEURJtAwrBaD53uwPPcc0Ug/edit?usp=sharing" : ""} /></span>
		</div>
	</div>
    </div>
	)
  }
 
  export default Practicereact