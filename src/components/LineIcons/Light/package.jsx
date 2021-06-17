import React from 'react';

function Package(props) {
	const title = props.title || "package";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.8 20.7L58.7 4.8C58 2.7 56 1.3 53.8 1.3h-43C8.6 1.3 6.7 2.6 6 4.6l-5.7 16c-.2.5-.3 1.1-.3 1.7v35.4c0 2.8 2.3 5.1 5.1 5.1h53.8c2.8 0 5.1-2.3 5.1-5.1V22.2c0-.5-.1-1-.2-1.5zm-8-15l4.6 14.5H33.5V4.3h20.3c.9 0 1.7.5 2 1.4zm-47-.1c.3-.8 1.1-1.4 2-1.4h19.7v15.9H3.6L8.8 5.6zm50.1 54.1H5.1c-1.2 0-2.1-.9-2.1-2.1V23.2h58v34.5c0 1.1-.9 2-2.1 2z"/>
	</g>
</svg>
	);
};

export default Package;