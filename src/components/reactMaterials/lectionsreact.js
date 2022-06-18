
import React, {useState} from "react";
import DocViewer from "../doc";
import './index.css';

function Lectionsreact() {
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
	<div  className={noneLection ? "react-content" : "react-content-1"}>
		<h2 className='h1-react'>Лекционный материал по REACT</h2>
	<div className="material-lections-react">
		<span className={firstLection ? "lections-span-react-active" : "lections-span-react"} onClick={activeFirst}>Лекция №1</span>
		<span className={secondLection ? "lections-span-react-active" : "lections-span-react"} onClick={activeSecond}>Лекция №2</span>
		<span className={thirdLection ? "lections-span-react-active" : "lections-span-react"} onClick={activeThird}>Лекция №3</span>	
		<span className={fourLection ? "lections-span-react-active" : "lections-span-react"} onClick={activeFour}>Лекция №4</span>	
		<span className={fiveLection ? "lections-span-react-active" : "lections-span-react"} onClick={activeFive}>Лекция №5</span>	
		<span className={sixLection ? "lections-span-react-active" : "lections-span-react"} onClick={activeSix}>Лекция №6</span>	
		<span className={sevenLection ? "lections-span-react-active" : "lections-span-react"} onClick={activeSeven}>Лекция №7</span>
		<span className={eightLection ? "lections-span-react-active" : "lections-span-react"} onClick={activeEight}>Лекция №8</span>
		<div className="default"><span className={noneLection ? "none" : "default"}><DocViewer source={
			firstLection ? "d/11-_fKezvlqyhOmOyIiy9yxQ9frKG5nudKvZVtHxvw0c/edit#heading=h.o41hyjpv3lox" : 
			secondLection ? "d/1fTVL38574ixfSQ3N0gHGQKj9GDkO-W-pIMP5ImNqpI4/edit?usp=sharing" : 
			thirdLection ? "d/1usD5p_hPZ8Lqt_ANSv_-CEr5bySblMeseqIfEP7Tr7w/edit?usp=sharing" :
			fourLection ? "d/1mDfAVQXtxk5kG6c18oDqHwew38rsA4lhPTMJFrftXfM/edit?usp=sharing" :
			fiveLection ? "d/1jYW7gOvL4rrX1pj_xya7mZFVyL3tmdoyXfQbUzkAV0Q/edit?usp=sharing" :
			sixLection ? "d/1Rl4hymJOrLHTom831ZLAca8FEkrm0fT7D7XDCpXePLo/edit?usp=sharing" :
			sevenLection ? "d/1upbs-9q8tghdDfmyR4hAILQbNJxuFyiyfMOP8_mNwCA/edit?usp=sharing" :
			eightLection ? "d/1OBMMfzJ_jv5Os4bwzKAC6Ao6DR_ilwodwRUaGiYPhvU/edit?usp=sharing" : ""} /></span>
		</div>
	</div>
    </div>
	)
  }
  
  export default Lectionsreact