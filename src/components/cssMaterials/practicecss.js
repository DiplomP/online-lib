import React, {useState} from "react";
import DocViewer from "../doc";
import './index.css';

function Practicecss() {
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
	const [elevenLection, seteElevenLection] = useState(false);
	const [twelveLection, setTwelveLection] = useState(false);
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
		seteElevenLection(false);
		setTwelveLection(false);
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
		seteElevenLection(false);
		setTwelveLection(false);
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
		seteElevenLection(false);
		setTwelveLection(false);
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
		seteElevenLection(false);
		setTwelveLection(false);
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
		seteElevenLection(false);
		setTwelveLection(false);
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
		seteElevenLection(false);
		setTwelveLection(false);
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
		seteElevenLection(false);
		setTwelveLection(false);
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
		seteElevenLection(false);
		setTwelveLection(false);
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
		seteElevenLection(false);
		setTwelveLection(false);
	}

	const activeEleven = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(false);
		setSevenLection(false);
		setEightLection(false);
		setTenLection(false);
		seteElevenLection(true);
		setTwelveLection(false);
	}

	const activeTwelve = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(false);
		setSevenLection(false);
		setEightLection(false);
		setTenLection(false);
		seteElevenLection(false);
		setTwelveLection(true);
	}


	
	return (
	<div className={noneLection ? "css-content" : "css-content-1"}>
		<h2 className='h1-react'>Практичекий материал по CSS</h2>
	<div className="material-practica-css">
		<span className={firstLection ? "lections-span-pract-css-active" : "lections-span-pract-css"} onClick={activeFirst}>Практическая работа №1 </span>
		<span className={secondLection ? "lections-span-pract-css-active" : "lections-span-pract-css"} onClick={activeSecond}>Практическая работа №2</span>
		<span className={thirdLection ? "lections-span-pract-css-active" : "lections-span-pract-css"} onClick={activeThird}>Практическая работа №3</span>	
		<span className={fourLection ? "lections-span-pract-css-active" : "lections-span-pract-css"} onClick={activeFour}>Практическая работа №4</span>	
		<span className={fiveLection ? "lections-span-pract-css-active" : "lections-span-pract-css"} onClick={activeFive}>Практическая работа №5</span>	
		<span className={sixLection ? "lections-span-pract-css-active" : "lections-span-pract-css"} onClick={activeSix}>Практическая работа №6</span>	
		<span className={sevenLection ? "lections-span-pract-css-active" : "lections-span-pract-css"} onClick={activeSeven}>Практическая работа №7</span>
		<span className={eightLection ? "lections-span-pract-css-active" : "lections-span-pract-css"} onClick={activeEight}>Практическая работа №8</span>
		<span className={tenLection ? "lections-span-pract-css-active" : "lections-span-pract-css"} onClick={activeTen}>Практическая работа №9</span>
		<span className={elevenLection ? "lections-span-pract-css-active" : "lections-span-pract-css"} onClick={activeEleven}>Практическая работа №10</span>
		<span className={twelveLection ? "lections-span-pract-css-active" : "lections-span-pract-css"} onClick={activeTwelve}>Практическая работа №11</span>
		<div className="default-pract"><span className={noneLection ? "none-html" : "default"}><DocViewer source={
			firstLection ? "d/1LcExuTWqWHTKPUPNvAcA4MUl94VuzIm3-GogpCP38qo/edit?usp=sharing" : 
			secondLection ? "d/1GgIux235zmkiLHtBeFwkgqKQ5mcQhcBG8VkOsXw_QbY/edit?usp=sharing" : 
			thirdLection ? "d/1yatHTFdV8HyeALxoKln0VH2qysm0ZGrR7Y3YVdSCW0s/edit?usp=sharing" :
			fourLection ? "d/10KINZmcach4BJdHbe-GdvTCvwlefQCg-L9HW8aztfmc/edit?usp=sharing" :
			fiveLection ? "d/1GOf7qBq-py_JvlwvY8hEmXhBevzebeZfK6XEn_obBdM/edit?usp=sharing" :
			sixLection ? "d/1Oz4Ggyl_FzpTtsUCSPMaBbsLXVV0-KCJ91EkMn6pBFo/edit?usp=sharing" :
			sevenLection ? "d/1aVEKfHbLGUsrYVI_XaWwZG8V3kOq3CGqQ-MpuzXlZUU/edit?usp=sharing" :
			eightLection ? "d/1BQzZEj6JZmtgr8sCsKLGw-612M3163EopHOYqpyiLC0/edit?usp=sharing" :
			tenLection ? "d/1VjGsRa2fyno-WL6TgOBV8V34zoiLz5DniJNcmB1Gl88/edit?usp=sharing" :
			elevenLection ? "d/1EWrmezANrqugPh6O9zq2sbcGy3LnZ0nwFSVVlhQ6mvs/edit?usp=sharing" :
			twelveLection ? "d/1GqwIQIWDXCkuyByx1AHO9RAMHMUB4SxloBmQgBeqgLI/edit?usp=sharing" : ""} /></span>
		</div>
	</div>
    </div>
	)
  }
  
  export default Practicecss