
import React, {useState} from "react";
import ReactPlayer from 'react-player'
import './index.css';

function Videoscss() {
	const [firstVideo, setFirstVideo] = useState(false);
	const [secondVideo, setSecondVideo] = useState(false);
	const [thirdVideo, setThirdVideo] = useState(false);
	const [nonerVideo, setNonerVideo] = useState(false);
	const [fourVideo, setFourVideo] = useState(false);
	const [fiveVideo, setFiveVideo] = useState(false);
	const [sixVideo, setSixVideo] = useState(false);
	const [sevenVideo, setSevenVideo] = useState(false);
	const [eightVideo, setEightVideo] = useState(false);
	const [nineVideo, setNineVideo] = useState(false);
	const [tenVideo, setTenVideo] = useState(false);
	const [elevenVideo, seteElevenVideo] = useState(false);
	const [twelveVideo, setTwelveVideo] = useState(false);
	const [thirteenVideo, setThirteenVideo] = useState(false);
	const [fifteenVideo, setFifteenVideo] = useState(false);
	const [sixteenVideo, setSixteenVideo] = useState(false);
	const [seventeenVideo, setSeventeenVideo] = useState(false);

	const activeFirst = () =>{
		setFirstVideo(true);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeSecond = () =>{
		setFirstVideo(false);
		setSecondVideo(true);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeThird = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(true);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeNoner = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(true);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeFour = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(true);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeFive = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(true);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeSix = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(true);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeSeven = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(true);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeEight = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(true);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeNine = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(true);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeTen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(true);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeEleven = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(true);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeTwelve = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(true);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeThirteen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(true);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeFifteen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(true);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeSixteen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(true);
		setSeventeenVideo(false);
	}

	const activeSeventeen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNonerVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(false);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(true);
	}

	return (
	<div className="css-content-video">
		<h2 className='h1-css'>Видео-уроки по CSS</h2>
		<div className="material-video-css">
		<span className={firstVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeFirst}>Видео урок№1</span>
		<span className={thirdVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeThird}>Видео урок№2</span>	
		<span className={secondVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeSecond}>Видео урок№3</span>
		<span className={nonerVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeNoner}>Видео урок№4</span>	
		<span className={fourVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeFour}>Видео урок№5</span>	
		<span className={fiveVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeFive}>Видео урок№6</span>	
		<span className={sixVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeSix}>Видео урок№7</span>
		<span className={sevenVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeSeven}>Видео урок№8</span>
		<span className={eightVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeEight}>Видео урок№9</span>	
		<span className={nineVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeNine}>Видео урок№10</span>	
		<span className={tenVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeTen}>Видео урок№11</span>	
		<span className={elevenVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeEleven}>Видео урок№12</span>	
		<span className={twelveVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeTwelve}>Видео урок№13</span>
		<span className={thirteenVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeThirteen}>Видео урок№14</span>
		<span className={fifteenVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeFifteen}>Видео урок№15</span>
		<span className={sixteenVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeSixteen}>Видео урок№16</span>
		<span className={seventeenVideo ? "lections-span-video-css-active" : "lections-span-video-css"} onClick={activeSeventeen}>Видео урок№17</span> 
		<ReactPlayer className={"" ? "none" : "default-video"} height="95%" width="100%" url={
			firstVideo ? "https://www.youtube.com/watch?v=Fw679JPOo0w&list=PL0lO_mIqDDFXoN83I4uVez8rIB25O4rk0" : 
			secondVideo ? "https://www.youtube.com/watch?v=Dy3xNaSvacE" :
			thirdVideo ? "https://www.youtube.com/watch?v=THkRKsJL4Ac" : 
			nonerVideo ? "https://www.youtube.com/watch?v=VlWE8eCz5dE":
			fourVideo ? "https://www.youtube.com/watch?v=ziJwJdJXNtU" :
			fiveVideo ? "https://www.youtube.com/watch?v=XhtbLygCpcs" :
			sixVideo ? "https://www.youtube.com/watch?v=ois3wNS7ZdQ" :
			sevenVideo ? "https://www.youtube.com/watch?v=4dOZkj4VwSM" :
			eightVideo ? "https://www.youtube.com/watch?v=J38NyKcuyXo" :
			nineVideo ? "https://www.youtube.com/watch?v=mFO1mEZn4dw" :
			tenVideo ? "https://www.youtube.com/watch?v=1OU7iL8mFE0" :
			elevenVideo ? "https://www.youtube.com/watch?v=jfJ4Dn37Q6k" :
			twelveVideo ? "https://www.youtube.com/watch?v=U-dtG9yNxuo" :
			thirteenVideo ? "https://www.youtube.com/watch?v=C7u291bannE" :
			fifteenVideo ? "https://www.youtube.com/watch?v=7SKEvxh9e2k" :
			sixteenVideo ? "https://www.youtube.com/watch?v=p9UdfYguhn8" :
			seventeenVideo ? "https://www.youtube.com/watch?v=InZoAQfws4Q" : ""} />
	</div>
    </div>
	)
	}
  
  export default Videoscss