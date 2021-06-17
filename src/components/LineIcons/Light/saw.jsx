import React from 'react';

function Saw(props) {
	const title = props.title || "saw";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 11.1c-.8 0-1.5.7-1.5 1.5V25H3V12.6c0-.8-.7-1.5-1.5-1.5S0 11.8 0 12.6v38.8c0 .8.7 1.5 1.5 1.5S3 52.2 3 51.4v-7.7L6.6 47c.6.5 1.4.5 2 0l5.1-4.6 5.1 4.6c.6.5 1.4.5 2 0l5.1-4.6L31 47c.3.3.6.4 1 .4s.7-.1 1-.4l5.1-4.6 5.1 4.6c.6.5 1.4.5 2 0l5.1-4.6 5.1 4.6c.6.5 1.4.5 2 0l3.6-3.3v7.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V12.6c0-.8-.7-1.5-1.5-1.5zm-6.1 32.7l-5.1-4.6c-.6-.5-1.4-.5-2 0l-5.1 4.6-5.1-4.6c-.6-.5-1.4-.5-2 0L32 43.8l-5.1-4.6c-.6-.5-1.4-.5-2 0l-5.1 4.6-5.1-4.6c-.6-.5-1.4-.5-2 0l-5.1 4.6L3 39.7V28h58v11.7l-4.6 4.1z"/>
	</g>
</svg>
	);
};

export default Saw;