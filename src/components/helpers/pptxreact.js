import React from "react";

const DocIframe4 = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     <iframe 
	  title="slides"
		 src="https://ppt-online.org/360550"  width="100%" height="630" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" >Это внедренный файл <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> на платформе <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.</iframe>
    </div>
  );
};

export default DocIframe4;