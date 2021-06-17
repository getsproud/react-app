import React from 'react';

function Download(props) {
	const title = props.title || "download";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 47.1c-.8 0-1.5.7-1.5 1.5V61H3V48.6c0-.8-.7-1.5-1.5-1.5S0 47.8 0 48.6v13C0 63 1.3 64 2.9 64h58.2c1.6 0 2.9-1 2.9-2.4v-13c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M29 43.5c.8.8 1.9 1.2 3 1.2s2.1-.4 3-1.2l8.1-7.8c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-7.4 7.2V1.5C33.5.7 32.8 0 32 0s-1.5.7-1.5 1.5v39.3l-7.4-7.2c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l8 7.8z"/>
	</g>
</svg>
	);
};

export default Download;