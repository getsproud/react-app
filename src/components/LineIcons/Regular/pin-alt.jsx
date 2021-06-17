import React from 'react';

function PinAlt(props) {
	const title = props.title || "pin alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.1 35.1l-6.8-10.9V7c0-3.2-2.6-5.8-5.8-5.8h-21c-3.2 0-5.8 2.6-5.8 5.8v17.1l-6.8 11c-.9 1.4-.9 3.2-.1 4.6.8 1.5 2.3 2.4 4 2.4h12.5l5 19.3c.2.8.9 1.3 1.7 1.3s1.5-.5 1.7-1.3l5-19.3h12.5c1.7 0 3.2-.9 4-2.4s.8-3.2-.1-4.6zM19.3 7c0-1.2 1-2.3 2.3-2.3h21c1.2 0 2.3 1 2.3 2.3v15.9H19.3V7zM32 54l-3.1-11.9H35L32 54zm20.1-16c-.1.2-.4.6-1 .6H12.8c-.6 0-.9-.4-1-.6s-.3-.6 0-1.1l6.6-10.5h27.1l6.6 10.5c.3.5.1 1 0 1.1z"/>
	</g>
</svg>
	);
};

export default PinAlt;