
import React, {useState} from "react";
import ReactPlayer from 'react-player'
import './index.css';

function Videoshtml() {
	const [firstVideo, setFirstVideo] = useState(false);
	const [secondVideo, setSecondVideo] = useState(false);
	const [thirdVideo, setThirdVideo] = useState(false);
	const [noneVideo, setNoneVideo] = useState(true);
	const [nonerVideo, setNonerVideo] = useState(false);
	const [fourVideo, setFourVideo] = useState(false);
	const [fiveVideo, setFiveVideo] = useState(false);
	const [sixVideo, setSixVideo] = useState(false);
	const [sevenVideo, setSevenVideo] = useState(false);
	const [eightVideo, setEightVideo] = useState(false);
	const [nineVideo, setNineVideo] = useState(false);
	const [tenVideo, setTenVideo] = useState(false);

	const activeFirst = () =>{
		setFirstVideo(true);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
	}

	const activeSecond = () =>{
		setFirstVideo(false);
		setSecondVideo(true);
		setThirdVideo(false);
		setNoneVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
	}

	const activeThird = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(true);
		setNoneVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
	}

	const activeNoner = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
		setNonerVideo(true);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
	}

	const activeFour = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
		setNonerVideo(false);
		setFourVideo(true);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
	}

	const activeFive = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(true);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
	}

	const activeSix = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(true);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
	}

	const activeSeven = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(true);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
	}

	const activeEight = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(true);
		setNineVideo(false);
		setTenVideo(false);
	}

	const activeNine = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(true);
		setTenVideo(false);
	}

	const activeTen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(true);
	}


	return (
	<div className={noneVideo ? 'html-content' : "html-content-activ"}>
		<h2 className='h1-html'>Видео-уроки по HTML</h2>
		<div className="material-video-html-html">
		<span className={firstVideo ? "lections-span-video-html-active" : "lections-span-video-html"} onClick={activeFirst}>Видео урок№1</span>
		<span className={secondVideo ? "lections-span-video-html-active" : "lections-span-video-html"} onClick={activeSecond}>Видео урок№2</span>
		<span className={thirdVideo ? "lections-span-video-html-active" : "lections-span-video-html"} onClick={activeThird}>Видео урок№3</span>	
		<span className={nonerVideo ? "lections-span-video-html-active" : "lections-span-video-html"} onClick={activeNoner}>Видео урок№4</span>	
		<span className={fourVideo ? "lections-span-video-html-active" : "lections-span-video-html"} onClick={activeFour}>Видео урок№5</span>	
		<span className={fiveVideo ? "lections-span-video-html-active" : "lections-span-video-html"} onClick={activeFive}>Видео урок№6</span>	
		<span className={sixVideo ? "lections-span-video-html-active" : "lections-span-video-html"} onClick={activeSix}>Видео урок№7</span>
		<span className={sevenVideo ? "lections-span-video-html-active" : "lections-span-video-html"} onClick={activeSeven}> Видео урок№8</span>
		<span className={eightVideo ? "lections-span-video-html-active" : "lections-span-video-html"} onClick={activeEight}>Видео урок№9</span>	
		<span className={nineVideo ? "lections-span-video-html-active" : "lections-span-video-html"} onClick={activeNine}>Видео урок№10</span>	
		<span className={tenVideo ? "lections-span-video-html-active" : "lections-span-video-html"} onClick={activeTen}>Видео урок№11</span>
		<ReactPlayer className={"" ? "none" : "default-video"} height="95%" width="100%" url={
			firstVideo ? "https://www.youtube.com/watch?v=8mK5aY5YOCc&list=PLY4rE9dstrJyeZlPWoKJr1xKVVnG4w-Hc" : 
			secondVideo ? "https://www.youtube.com/watch?v=oBKaXB9CMMo" : 
			thirdVideo ? "https://www.youtube.com/watch?v=fgeANjiWwKg" : 
			nonerVideo ? "https://www.youtube.com/watch?v=BYnpSIdqXt8" :
			fourVideo ? "https://www.youtube.com/watch?v=ydxgOZG0BUI" :
			fiveVideo ? "https://www.youtube.com/watch?v=nF0X9PRVOsA" :
			sixVideo ? "https://www.youtube.com/watch?v=nxtV-PwYkjU" :
			sevenVideo ? "https://www.youtube.com/watch?v=jZR8m9djWXs" :
			eightVideo ? "https://www.youtube.com/watch?v=abWbB4RYFYM" :
			nineVideo ? "https://www.youtube.com/watch?v=x55mwoVJ_IE" :
			tenVideo ? "https://www.youtube.com/watch?v=LOphfrzuxtc" : ""} />
	</div>
    </div>
	)
	}
  
  export default Videoshtml