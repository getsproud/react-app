import React from 'react';

function EyeAlt(props) {
	const title = props.title || "eye alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.6 31C63 30.4 49.3 15 32 15S1 30.4.4 31c-.5.6-.5 1.4 0 2 .6.6 14.3 16 31.6 16s31-15.4 31.6-16c.5-.6.5-1.4 0-2zM32 46C18.5 46 6.9 35.3 3.6 32 6.9 28.6 18.5 18 32 18c13.5 0 25.1 10.7 28.4 14-3.3 3.4-14.9 14-28.4 14z"/>
		<path d="M32 24.9c-3.9 0-7.1 3.2-7.1 7.1 0 3.9 3.2 7.1 7.1 7.1 3.9 0 7.1-3.2 7.1-7.1 0-3.9-3.2-7.1-7.1-7.1zm0 11.2c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1z"/>
	</g>
</svg>
	);
};

export default EyeAlt;