
import React, {useState} from "react";
import ReactPlayer from 'react-player'
import './index.css';

function Videos() {
	const [firstVideo, setFirstVideo] = useState(false);
	const [secondVideo, setSecondVideo] = useState(false);
	const [thirdVideo, setThirdVideo] = useState(false);
	const [noneVideo, setNoneVideo] = useState(true);
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
	const [fourteenVideo, setFourteenVideo] = useState(false);
	const [fifteenVideo, setFifteenVideo] = useState(false);
	const [sixteenVideo, setSixteenVideo] = useState(false);
	const [seventeenVideo, setSeventeenVideo] = useState(false);

	const activeFirst = () =>{
		setFirstVideo(true);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeSecond = () =>{
		setFirstVideo(false);
		setSecondVideo(true);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeThird = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(true);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeFour = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeFive = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeSix = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeSeven = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeEight = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeNine = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeTen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeEleven = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeTwelve = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeThirteen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeFourteen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(true);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeFifteen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(true);
		setSixteenVideo(false);
		setSeventeenVideo(false);
	}

	const activeSixteen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(true);
		setSeventeenVideo(false);
	}

	const activeSeventeen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
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
		setFourteenVideo(false);
		setFifteenVideo(false);
		setSixteenVideo(false);
		setSeventeenVideo(true);
	}

	return (
	<div className={noneVideo ? "js-content-lections" : "js-content-lections-1"}>
		<h2 className='h1-js-lections'>Видео-уроки по JavaScript</h2>
		<div className="video-js-content">
		<span className={firstVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeFirst}>Видео урок№1</span>
		<span className={secondVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeSecond}>Видео урок№2</span>
		<span className={thirdVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeThird}>Видео урок№3</span>	
		<span className={fourVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeFour}>Видео урок№4</span>	
		<span className={fiveVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeFive}>Видео урок№5</span>	
		<span className={sixVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeSix}>Видео урок№6</span>	
		<span className={sevenVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeSeven}>Видео урок№7</span>
		<span className={eightVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeEight}>Видео урок№8</span>
		<span className={nineVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeNine}>Видео урок№9</span>	
		<span className={tenVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeTen}>Видео урок№10</span>	
		<span className={elevenVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeEleven}>Видео урок№11</span>	
		<span className={twelveVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeTwelve}>Видео урок№12</span>	
		<span className={thirteenVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeThirteen}>Видео урок№13</span>
		<span className={fourteenVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeFourteen}>Видео урок№14</span>
		<span className={fifteenVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeFifteen}>Видео урок№15</span>
		<span className={sixteenVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeSixteen}>Видео урок№16</span>
		<span className={seventeenVideo ? "lections-span-video-js-active" : "lections-span-video-js"} onClick={activeSeventeen}>Видео урок№17</span> 
		<ReactPlayer className={"" ? "none" : "default-js"} height="460px" width="100%" url={
			firstVideo ? "https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT" : 
			secondVideo ? "https://www.youtube.com/watch?v=UGapN-hrekw" : 
			thirdVideo ? "https://www.youtube.com/watch?v=pahO5XjnfLA" : 
			fourVideo ? "https://www.youtube.com/watch?v=vIZs5tH-HGQ&t=289s" :
			fiveVideo ? "https://www.youtube.com/watch?v=1idOY3C1gYU" :
			sixVideo ? "https://www.youtube.com/watch?v=cS6nTVNzOPw" :
			sevenVideo ? "https://www.youtube.com/watch?v=uLY9GXGMXaA" :
			eightVideo ? "https://www.youtube.com/watch?v=SHiUyM_fFME" :
			nineVideo ? "https://www.youtube.com/watch?v=np08WdS9OXg" :
			tenVideo ? "https://www.youtube.com/watch?v=mSbyhHfxs04" :
			elevenVideo ? "https://www.youtube.com/watch?v=7wtbNNiOh30" :
			twelveVideo ? "https://www.youtube.com/watch?v=nEabP9CYCAQ" :
			thirteenVideo ? "https://www.youtube.com/watch?v=mbcP3Oc0PjU" :
			fourteenVideo ? "https://www.youtube.com/watch?v=eKCD9djJQKc" :
			fifteenVideo ? "https://www.youtube.com/watch?v=SGeQ-U0G7dE" :
			sixteenVideo ? "https://www.youtube.com/watch?v=wWYokY0Pt2M" :
			seventeenVideo ? "https://www.youtube.com/watch?v=3-bZ7gLVSzo" : ""} />
	</div>
    </div>
	)
	}
  
  export default Videos