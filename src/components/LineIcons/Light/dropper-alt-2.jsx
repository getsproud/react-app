import React from 'react';

function DropperAlt2(props) {
	const title = props.title || "dropper alt 2";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M41.5 9.3h-3.3V6.2c0-1.7-.6-3.2-1.8-4.4C35.2.7 33.7 0 32 0c-3.4 0-6.2 2.8-6.2 6.2v3.1h-3.3c-1.9 0-3.5 1.6-3.5 3.5v5.3c0 1.9 1.6 3.5 3.5 3.5h3.3v36.2c0 3.4 2.8 6.2 6.2 6.2s6.2-2.8 6.2-6.2V21.6h3.3c1.9 0 3.5-1.6 3.5-3.5v-5.3c0-2-1.5-3.5-3.5-3.5zM28.8 6.2C28.8 4.4 30.2 3 32 3c.9 0 1.7.3 2.3.9.6.6.9 1.4.9 2.3v3.1h-6.4V6.2zm6.4 51.6c0 1.8-1.4 3.2-3.2 3.2s-3.2-1.4-3.2-3.2V21.6h6.4v36.2zM42 18.1c0 .3-.2.5-.5.5h-19c-.3 0-.5-.2-.5-.5v-5.3c0-.3.2-.5.5-.5h19.1c.3 0 .5.2.5.5v5.3z"/>
	</g>
</svg>
	);
};

export default DropperAlt2;