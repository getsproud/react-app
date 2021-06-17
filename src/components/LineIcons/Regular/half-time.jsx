import React from 'react';

function HalfTime(props) {
	const title = props.title || "half time";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M32 15c-9.4 0-17 7.6-17 17s7.6 17 17 17c1 0 1.8-.8 1.8-1.8V16.8c0-1-.8-1.8-1.8-1.8zm-1.7 30.4c-6.6-.9-11.7-6.5-11.7-13.4 0-6.8 5.1-12.5 11.7-13.4v26.8z"/>
	</g>
</svg>
	);
};

export default HalfTime;