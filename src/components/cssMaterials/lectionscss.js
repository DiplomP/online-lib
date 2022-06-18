
import React, {useState} from "react";
import DocViewer from "../doc";
import './index.css';

function Lectionscss() {
	const [firstLection, setFirstLection] = useState(false);
	const [secondLection, setSecondLection] = useState(false);
	const [thirdLection, setThirdLection] = useState(false);
	const [fourLection, setFourLection] = useState(false);
	const [fiveLection, setFiveLection] = useState(false);
	const [sixLection, setSixLection] = useState(false);
	const [sevenLection, setSevenLection] = useState(false);
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
	}

	return (
	<div className={noneLection ? "css-content" : "css-content-1"}>
		<h2 className='h1-css'>Лекционный материал по CSS</h2>
	<div className="material-lections-css">
		<span className={firstLection ? "lections-span-css-active" : "lections-span-css"} onClick={activeFirst}>Лекция №1</span>
		<span className={secondLection ? "lections-span-css-active" : "lections-span-css"} onClick={activeSecond}>Лекция №2</span>
		<span className={thirdLection ? "lections-span-css-active" : "lections-span-css"} onClick={activeThird}>Лекция №3</span>	
		<span className={fourLection ? "lections-span-css-active" : "lections-span-css"} onClick={activeFour}>Лекция №4</span>	
		<span className={fiveLection ? "lections-span-css-active" : "lections-span-css"} onClick={activeFive}>Лекция №5</span>	
		<span className={sixLection ? "lections-span-css-active" : "lections-span-css"} onClick={activeSix}>Лекция №6</span>	
		<span className={sevenLection ? "lections-span-css-active" : "lections-span-css"} onClick={activeSeven}>Лекция №7</span>
		<div className="default-css"><span className={noneLection ? "none-css" : "default-css"} onClick={activeFive}><DocViewer source={
			firstLection ? "d/1T4YOHYfHpbb3MhotgZMAyMs0gQqSADN8fTkzGH0vax4/edit?usp=sharing" : 
			secondLection ? "d/1UidrDtfyg_LMxPkEbFyB7I6u307bU0WazqppLwLj3Uc/edit?usp=sharing" : 
			thirdLection ? "d/1Ssdna3qwRKQVghziG0ZOTGnuraKptmYlMGD3aKtGM8Q/edit?usp=sharing" :
			fourLection ? "d/1aD8dihS3sG2VIncd4qEZLeJPXsUi9Yh1BTk_pi4RXLY/edit?usp=sharing" :
			fiveLection ? "d/10s2_A_R00XSpJDejgJFKZ2GqWdnTbygzkx8-WP6TUrU/edit?usp=sharing" :
			sixLection ? "d/1ZM12V_RupiIIlixQUJ77GFDNYOJHRT9cu7R_eGSG3tA/edit?usp=sharing" :
			sevenLection ? "d/1v_L5veJ3qjaFuOhYjQcRch5zOijYNYUat9BEZPF53HU/edit?usp=sharing" : ""} /></span>
		</div>
	</div>
    </div>
	)
  }
  
  export default Lectionscss