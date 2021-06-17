import React from 'react';

function Archive(props) {
	const title = props.title || "archive";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.7 2.8H4.3C1.9 2.8 0 4.7 0 7v8.3c0 2.4 1.9 4.3 4.3 4.3h1.3V57c0 2.4 1.9 4.3 4.3 4.3h44.4c2.4 0 4.3-1.9 4.3-4.3V19.6h1.3c2.4 0 4.3-1.9 4.3-4.3V7c-.2-2.3-2.1-4.2-4.5-4.2zM55.5 57c0 .7-.6 1.3-1.3 1.3H9.8c-.7 0-1.3-.6-1.3-1.3V19.6h46.9V57zM61 15.4c0 .7-.6 1.3-1.3 1.3H4.3c-.7 0-1.3-.6-1.3-1.3V7c0-.7.6-1.3 1.3-1.3h55.5c.6.1 1.2.6 1.2 1.3v8.4z"/>
		<path d="M21.9 44.6h20.2c1.4 0 2.5-1.1 2.5-2.5V33c0-1.4-1.1-2.5-2.5-2.5H21.9c-1.4 0-2.5 1.1-2.5 2.5v9.1c0 1.4 1.1 2.5 2.5 2.5zm.5-11.1h19.2v8.1H22.4v-8.1z"/>
	</g>
</svg>
	);
};

export default Archive;