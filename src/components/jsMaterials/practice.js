import React, {useState} from "react";
import DocViewer from "../doc";
import './index.css';

function Practice() {
	const [firstLection, setFirstLection] = useState(false);
	const [secondLection, setSecondLection] = useState(false);
	const [thirdLection, setThirdLection] = useState(false);
	const [fourLection, setFourLection] = useState(false);
	const [fiveLection, setFiveLection] = useState(false);
	const [sixLection, setSixLection] = useState(false);
	const [noneLection, setNoneLection] = useState(true);

	const activeFirst = () =>{
		setFirstLection(true);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(false);
	}

	const activeSecond = () =>{
		setFirstLection(false);
		setSecondLection(true);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(false);
	}

	const activeThird = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(true);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(false);
	}

	const activeFour = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(true);
		setFiveLection(false);
		setSixLection(false);
	}

	const activeFive = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(true);
		setSixLection(false);
	}

	const activeSix = () =>{
		setFirstLection(false);
		setSecondLection(false);
		setThirdLection(false);
		setNoneLection(false);
		setFourLection(false);
		setFiveLection(false);
		setSixLection(true);
	}


	return (
	<div className={noneLection ? "js-content-lections" : "js-content-lections-1"}>
		<h2 className='h1-js-lections'>Практичекий материал по JavaScript</h2>
	<div className="material-practica-js">
	<span className={firstLection ? "lections-span-pract-js-active" : "lections-span-pract-js"} onClick={activeFirst}>Практическая работа №1 </span>
		<span className={secondLection ? "lections-span-pract-js-active" : "lections-span-pract-js"} onClick={activeSecond}>Практическая работа №2</span>
		<span className={thirdLection ? "lections-span-pract-js-active" : "lections-span-pract-js"} onClick={activeThird}>Практическая работа №3</span>	
		<span className={fourLection ? "lections-span-pract-js-active" : "lections-span-pract-js"} onClick={activeFour}>Практическая работа №4</span>	
		<span className={fiveLection ? "lections-span-pract-js-active" : "lections-span-pract-js"} onClick={activeFive}>Практическая работа №5</span>	
		<span className={sixLection ? "lections-span-pract-js-active" : "lections-span-pract-js"} onClick={activeSix}>Практическая работа №6</span>	
		<div className="default-js"><span className={noneLection ? "none-html" : "default"}><DocViewer source={
			firstLection ? "d/1UbwvXr3eU77L3Uu20SWRX-r55Q6JqH7xo96HocsThE0/edit?usp=sharing" : 
			secondLection ? "d/1XNB1Z-78SOl4_Dwri3w_MUsRdqu-Emhu7Ggb4J0S7Ds/edit?usp=sharing" : 
			thirdLection ? "d/1emzyMSPknDms-tZbNEMgHkpvzgDBLFpEm9Ve0A3HOBU/edit?usp=sharing" :
			fourLection ? "d/1-gIyWvlfEtHwinXIl0Rf3XLHWGi21OspIXFY4B2eXIA/edit?usp=sharing" :
			fiveLection ? "d/1u_0eYE2SKCIY7O1BJd47tefYIN7B3DkOcr_eTyBgLK4/edit?usp=sharing" :
			sixLection ? "d/1f_L6WOvJcK0zWluOFIqTKg624XWDeoYBs4BZGXqb6pw/edit?usp=sharing" : ""} /></span>
		</div>
	</div>
    </div>
	)
  }
  
  export default Practice