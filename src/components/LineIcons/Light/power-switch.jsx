import React from 'react';

function PowerSwitch(props) {
	const title = props.title || "power switch";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44.2 16.5c-.7-.4-1.6-.1-2 .6-.4.7-.1 1.6.6 2 7.1 3.9 11.6 11.4 11.6 19.5C54.3 51 44.3 61 32 61 19.7 61 9.7 51 9.7 38.7c0-8 4.3-15.4 11.3-19.4.7-.4 1-1.3.6-2s-1.3-1-2-.6c-7.9 4.5-12.8 12.9-12.8 22C6.7 52.7 18.1 64 32 64c13.9 0 25.3-11.3 25.3-25.3 0-9.2-5-17.7-13.1-22.2z"/>
		<path d="M31.7 32.2c.8 0 1.5-.7 1.5-1.5V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v29.2c0 .8.6 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default PowerSwitch;