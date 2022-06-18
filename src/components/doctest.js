import React from "react";

const DocItest = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    <div>
      <embed type="application/pdf"
	  	title="file"
      width="100%"
      height="610px"
		src={'https://docs.google.com/forms/' + src +'&embedded=true'} />
    </div>
  );
};

export default DocItest;