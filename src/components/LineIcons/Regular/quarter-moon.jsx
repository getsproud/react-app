import React from 'react';

function QuarterMoon(props) {
	const title = props.title || "quarter moon";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm-1.7 26.5L6.4 41.2c-1-2.8-1.6-5.8-1.6-8.9L30.3 18v9.8zm0 31.4c-5.4-.3-10.5-2.3-14.6-5.4l14.6-8.2v13.6zm0-54.4v9.1L5 28.2C6.8 15.5 17.3 5.6 30.3 4.8zM7.8 44.4l22.5-12.7v9.8l-17.4 9.8c-2.1-1.9-3.8-4.3-5.1-6.9zm26 14.8V4.8C48 5.7 59.3 17.6 59.3 32c0 14.4-11.3 26.3-25.5 27.2z"/>
	</g>
</svg>
	);
};

export default QuarterMoon;