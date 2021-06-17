import React from 'react';

function Forward(props) {
	const title = props.title || "forward";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 0c-.8 0-1.5.7-1.5 1.5v28.6L11.1.9C10 .1 8.6 0 7.5.6c-1.2.6-2 1.9-2 3.2v56.4c0 1.3.7 2.6 1.9 3.2.5.3 1.1.4 1.6.4.7 0 1.4-.2 2-.6L55.4 34v28.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-61C58.5.7 57.8 0 57 0zM9.4 60.7c-.2.2-.5.1-.6 0-.1-.1-.3-.2-.3-.5V3.8c0-.3.2-.4.3-.5.1 0 .2-.1.3-.1.1 0 .2 0 .3.1L52.9 32 9.4 60.7z"/>
	</g>
</svg>
	);
};

export default Forward;