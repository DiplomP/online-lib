
import React, {useState} from "react";
import ReactPlayer from 'react-player'
import './index.css';

function Videosreact() {
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
	const [fifteenVideo, setFifteenVideo] = useState(false);
	const [fourteenVideo, setFourteenVideo] = useState(false);

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
		setFifteenVideo(false);
		setFourteenVideo(false);
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
		setFifteenVideo(false);
		setFourteenVideo(false);
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
		setFifteenVideo(false);
		setFourteenVideo(false);
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
		setFifteenVideo(false);
		setFourteenVideo(false);
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
		setFifteenVideo(false);
		setFourteenVideo(false);
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
		setFifteenVideo(false);
		setFourteenVideo(false);
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
		setFifteenVideo(false);
		setFourteenVideo(false);
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
		setFifteenVideo(false);
		setFourteenVideo(false);
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
		setFifteenVideo(false);
		setFourteenVideo(false);
	}

	const activeTen = () =>{
		setFirstVideo(false);
		setSecondVideo(false);
		setThirdVideo(false);
		setNoneVideo(false);
		setFourVideo(false);
		setFiveVideo(false);
		setSixVideo(false);
		setNoneVideo(false);
		setSevenVideo(false);
		setEightVideo(false);
		setNineVideo(false);
		setTenVideo(true);
		seteElevenVideo(false);
		setTwelveVideo(false);
		setThirteenVideo(false);
		setFifteenVideo(false);
		setFourteenVideo(false);
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
		setFifteenVideo(false);
		setFourteenVideo(false);
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
		setFifteenVideo(false);
		setFourteenVideo(false);
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
		setFifteenVideo(false);
		setFourteenVideo(false);
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
		setFifteenVideo(true);
		setFourteenVideo(false);
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
	}

	return (
	<div className={noneVideo ? "react-content" : "react-content-1"}>
		<h2 className='h1-react'>Видео-уроки по REACT</h2>
		<div className="material-video-react">
		<span className={firstVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeFirst}>Видео урок№1</span>
		<span className={secondVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeSecond}>Видео урок№2</span>
		<span className={thirdVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeThird}>Видео урок№3</span>	
		<span className={fourVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeFour}>Видео урок№4</span>	
		<span className={fiveVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeFive}>Видео урок№5</span>	
		<span className={sixVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeSix}>Видео урок№6</span>
		<span className={sevenVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeSeven}>Видео урок№7</span>
		<span className={eightVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeEight}>Видео урок№8</span>
		<span className={nineVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeNine}>Видео урок№9</span>
		<span className={tenVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeTen}>Видео урок№10</span>	
		<span className={elevenVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeEleven}>Видео урок№11</span>	
		<span className={twelveVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeTwelve}>Видео урок№12</span>	
		<span className={thirteenVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeThirteen}>Видео урок№13</span>
		<span className={fourteenVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeFourteen}>Видео урок№14</span>
		<span className={fifteenVideo ? "lections-span-video-react-active" : "lections-span-video-react"} onClick={activeFifteen}>Видео урок№15</span>
		<ReactPlayer className={"" ? "none" : "default-react"} height="95%" width="100%" url={
			firstVideo ? "https://www.youtube.com/watch?v=ftrn50AJa2w&list=PL0lO_mIqDDFWhkCEMnLsBP51K7o78dbAJ" : 
			secondVideo ? "https://www.youtube.com/watch?v=d8xnYqiP3ZM" : 
			thirdVideo ? "https://www.youtube.com/watch?v=yUL4fW4mpS8" : 
			fourVideo ? "https://www.youtube.com/watch?v=vwsG0VhDfcM":
			fiveVideo ? "https://www.youtube.com/watch?v=QuI_iLJ7gNs" :
			sixVideo ? "https://www.youtube.com/watch?v=9sMBba8BcGA" :
			sevenVideo ? "https://www.youtube.com/watch?v=sbCgQJQNZKs" :
			eightVideo ? "https://www.youtube.com/watch?v=F0f3iov79q4" :
			nineVideo ? "https://www.youtube.com/watch?v=A152d1_CpRE" :
			tenVideo ? "https://www.youtube.com/watch?v=dsOPKYHTarM" :
			elevenVideo ? "https://www.youtube.com/watch?v=MVNrPpRBUdg" :
			twelveVideo ? "https://www.youtube.com/watch?v=Lvd3wQ4hyvI" :
			thirteenVideo ? "https://www.youtube.com/watch?v=G6dsNP39znI" :
			fourteenVideo ? "https://www.youtube.com/watch?v=nsTyd-Z_Tlw" :
			fifteenVideo ? "https://www.youtube.com/watch?v=c8GZD2Uep0s" :
			noneVideo ? "" : ""} />
	</div>
    </div>
	)
	}
  
  export default Videosreact