import React from "react";

const DocIframe3 = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     <iframe 
	  title="slides"
		 src="http://player.myshared.ru/4/193471/"  width="100%" height="750" frameborder="0">Это внедренный файл <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> на платформе <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.</iframe>
    </div>
  );
};



export default DocIframe3;