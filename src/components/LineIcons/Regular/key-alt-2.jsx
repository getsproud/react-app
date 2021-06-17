import React from 'react';

function KeyAlt2(props) {
	const title = props.title || "key alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.8 32.4V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v5.1h-7.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h7.7v20.8c-7.6.9-13.5 7.3-13.5 15.1 0 8.4 6.8 15.2 15.2 15.2S47.2 56 47.2 47.6c0-7.9-5.9-14.3-13.4-15.2zM32 59.3c-6.5 0-11.7-5.3-11.7-11.7S25.5 35.8 32 35.8c6.5 0 11.7 5.3 11.7 11.7S38.5 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default KeyAlt2;