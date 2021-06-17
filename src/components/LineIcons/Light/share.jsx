import React from 'react';

function Share(props) {
	const title = props.title || "share";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M29.2 41.8c.8 0 1.5-.7 1.5-1.5V23.4c0-6.6 5.4-12.1 12.1-12.1h16.4l-7.5 5.6c-.7.5-.8 1.4-.3 2.1.3.4.7.6 1.2.6.3 0 .6-.1.9-.3l9.1-6.8c1-.7 1.5-1.7 1.5-2.8 0-1.1-.6-2.1-1.5-2.8l-9-6.6c-.7-.5-1.6-.3-2.1.3-.5.7-.3 1.6.3 2.1l7.7 5.6H42.8c-8.3 0-15.1 6.8-15.1 15.1v16.9c0 .8.7 1.5 1.5 1.5z"/>
		<path d="M62.5 38.8c-.8 0-1.5.7-1.5 1.5v18.8c0 1-.8 1.9-1.9 1.9H4.9c-1 0-1.9-.8-1.9-1.9V40.3c0-.8-.7-1.5-1.5-1.5S0 39.5 0 40.3v18.8C0 61.8 2.2 64 4.9 64h54.2c2.7 0 4.9-2.2 4.9-4.9V40.3c0-.8-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Share;