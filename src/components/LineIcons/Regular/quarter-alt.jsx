import React from 'react';

function QuarterAlt(props) {
	const title = props.title || "quarter alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M32 15.2c-9.3 0-16.8 7.5-16.8 16.8 0 1 .8 1.8 1.8 1.8h15c1 0 1.8-.8 1.8-1.8V17c0-1-.8-1.8-1.8-1.8zm-1.7 15.1H18.8c.8-5.9 5.5-10.6 11.4-11.4v11.4z"/>
	</g>
</svg>
	);
};

export default QuarterAlt;