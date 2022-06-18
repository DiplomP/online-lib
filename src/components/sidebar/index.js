import React, {useState} from "react";
import { Link } from "react-router-dom";
import './index.css';

const Sidebar = () => {
	const [htmlActive, setHtmlActive] = useState(false);
	const [cssActive, setCssActive] = useState(false);
	const [jsActive, setJsActive] = useState(false);
	const [homeActive, setHomeActive] = useState(false);
	const [reactActive, setReactActive] = useState(false);
	const [aboutActive, setAboutActive] = useState(false);
	const activeHtml = () =>{
		setHtmlActive(true);
		setHomeActive(false);
		setJsActive(false);
		setReactActive(false);
		setCssActive(false);
		setAboutActive(false);
	}

	const activeHome = () =>{
		setHtmlActive(false);
		setHomeActive(true);
		setJsActive(false);
		setReactActive(false);
		setCssActive(false);
		setAboutActive(false);
	}

	const activeCss = () =>{
		setHtmlActive(false);
		setHomeActive(false);
		setJsActive(false);
		setReactActive(false);
		setCssActive(true);
		setAboutActive(false);
	}

	const activeJs = () =>{
		setHtmlActive(false);
		setHomeActive(false);
		setJsActive(true);
		setReactActive(false);
		setCssActive(false);
		setAboutActive(false);
	}

	const activeReact = () =>{
		setHtmlActive(false);
		setHomeActive(false);
		setJsActive(false);
		setReactActive(true);
		setCssActive(false);
		setAboutActive(false);
	}

	const activeAbout = () =>{
		setHtmlActive(false);
		setHomeActive(false);
		setJsActive(false);
		setReactActive(false);
		setCssActive(false);
		setAboutActive(true);
	}

	return (
	
		<div className="sidebar-content">
		<Link className={homeActive ? "sidebar-links-active" : "sidebar-links"} to="/" onClick={activeHome}><span className="sidebar-span" >Главная</span></Link>
		<Link className={htmlActive ? "sidebar-links-active" : "sidebar-links"} to="/html" onClick={activeHtml}><span className="sidebar-span" >HTML-язык разметки</span></Link>
		<Link className={cssActive ? "sidebar-links-active" : "sidebar-links"} to="/css" onClick={activeCss}><span className="sidebar-span" >CSS-таблица стилей</span></Link>
		<Link className={jsActive ? "sidebar-links-active" : "sidebar-links"} to="/js" onClick={activeJs}><span className="sidebar-span">JS-язык сценариев</span></Link>
		<Link className={reactActive ? "sidebar-links-active" : "sidebar-links"} to="/react" onClick={activeReact}><span className="sidebar-span" >React-библиотека JavaScript</span></Link>
		<Link className={aboutActive ? "sidebar-links-last-active" : "sidebar-links-last"} to="/about" onClick={activeAbout}><span className="sidebar-span-last" >Редакторы</span></Link>
		</div>
	)
  }
  export default Sidebar