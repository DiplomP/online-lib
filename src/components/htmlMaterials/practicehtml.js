import React, {useState} from "react";
import DocViewer from "../doc";
import './index.css';

function Lectionshtml5() {
	const [firstLection, setFirstLection] = useState(false);
	const [secondLection, setSecondLection] = useState(false);
	const [thirdLection, setThirdLection] = useState(false);
	const [fourLection, setFourLection] = useState(false);
	const [fiveLection, setFiveLection] = useState(false);
	const [sixLection, setSixLection] = useState(false);
	const [sevenLection, setSevenLection] = useState(false);
	const [eightLection, setEightLection] = useState(false);
	const [noneLection, setNoneLection] = useState(true);
	const [tenLection, setTenLection] = useState(false);
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
		setTenLection(false);
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
		setTenLection(false);
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
		setTenLection(false);
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
		setTenLection(false);
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
		setTenLection(false);
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
		setTenLection(false);
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
		setTenLection(false);
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
		setTenLection(false);
	}

	const activeTen = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(false);
		setSevenLection(false);
		setEightLection(false);
		setTenLection(true);
	}


	return (
	<div className={noneLection ? 'html-content' : 'html-content-activ'}>
		<h2 className='h1-html'>Практический материал по HTML</h2>
	<div className="material-practica-html">
		<span className={firstLection ? "lections-pract-active" : "lections-pract"} onClick={activeFirst}>Практическая работа №1 </span>
		<span className={secondLection ? "lections-pract-active" : "lections-pract"} onClick={activeSecond}>Практическая работа №2</span>
		<span className={thirdLection ? "lections-pract-active" : "lections-pract"} onClick={activeThird}>Практическая работа №3</span>	
		<span className={fourLection ? "lections-pract-active" : "lections-pract"} onClick={activeFour}>Практическая работа №4</span>	
		<span className={fiveLection ? "lections-pract-active" : "lections-pract"} onClick={activeFive}>Практическая работа №5</span>	
		<span className={sixLection ? "lections-pract-active" : "lections-pract"} onClick={activeSix}>Практическая работа №6</span>	
		<span className={sevenLection ? "lections-pract-active" : "lections-pract"} onClick={activeSeven}>Практическая работа №7</span>
		<span className={eightLection ? "lections-pract-active" : "lections-pract"} onClick={activeEight}>Практическая работа №8</span>
		<span className={tenLection ? "lections-pract-active" : "lections-pract"} onClick={activeTen}>Практическая работа №9</span>
		<div className="pract"><span className={noneLection ? "none-html" : "default"}><DocViewer source={
			firstLection ? "d/1LcExuTWqWHTKPUPNvAcA4MUl94VuzIm3-GogpCP38qo/edit?usp=sharing" : 
			secondLection ? "d/1GgIux235zmkiLHtBeFwkgqKQ5mcQhcBG8VkOsXw_QbY/edit?usp=sharing" : 
			thirdLection ? "d/1yatHTFdV8HyeALxoKln0VH2qysm0ZGrR7Y3YVdSCW0s/edit?usp=sharing" :
			fourLection ? "d/10KINZmcach4BJdHbe-GdvTCvwlefQCg-L9HW8aztfmc/edit?usp=sharing" :
			fiveLection ? "d/1GOf7qBq-py_JvlwvY8hEmXhBevzebeZfK6XEn_obBdM/edit?usp=sharing" :
			sixLection ? "d/1Oz4Ggyl_FzpTtsUCSPMaBbsLXVV0-KCJ91EkMn6pBFo/edit?usp=sharing" :
			sevenLection ? "d/1aVEKfHbLGUsrYVI_XaWwZG8V3kOq3CGqQ-MpuzXlZUU/edit?usp=sharing" :
			eightLection ? "d/1BQzZEj6JZmtgr8sCsKLGw-612M3163EopHOYqpyiLC0/edit?usp=sharing" :
			tenLection ? "d/1VjGsRa2fyno-WL6TgOBV8V34zoiLz5DniJNcmB1Gl88/edit?usp=sharing" : ""} /></span>
		</div>
	</div>
    </div>
	)
  }
  
  export default Lectionshtml5