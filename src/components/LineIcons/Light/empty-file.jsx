import React from 'react';

function EmptyFile(props) {
	const title = props.title || "empty file";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.5 0h-37C12.2 0 11 1.2 11 2.5v44.8c0 1.3.5 2.4 1.4 3.3l14 12.4c.7.7 1.7 1 2.7 1h21.4c1.3 0 2.5-1.2 2.5-2.5v-59C52.9 1.2 51.8 0 50.5 0zm-36 48.4h13.2v11.8L14.5 48.4zM49.9 61H30.7V47.6c0-1.2-1-2.2-2.2-2.2H14.1V3H50v58z"/>
	</g>
</svg>
	);
};

export default EmptyFile;