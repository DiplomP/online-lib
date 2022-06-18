import React from "react";

const DocIframe = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    <div>
      <embed type="application/pdf"
	  	title="file"
      width="100%"
      height="600px"
		src={'https://docs.google.com/document/' + src +'&embedded=true'} />
    </div>
  );
};

export default DocIframe;