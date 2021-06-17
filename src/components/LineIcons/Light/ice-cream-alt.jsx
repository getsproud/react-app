import React from 'react';

function IceCreamAlt(props) {
	const title = props.title || "ice cream alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32.4 0h-.7C24.7 0 19 5.7 19 12.7v28.8c0 .8.7 1.5 1.5 1.5h6.3v19.5c0 .8.7 1.5 1.5 1.5h7.6c.8 0 1.5-.7 1.5-1.5V43h6.3c.8 0 1.5-.7 1.5-1.5V12.7C45.1 5.7 39.4 0 32.4 0zm1.9 61h-4.6V43h4.6v18zm7.8-21H21.9V12.7c0-5.3 4.4-9.7 9.7-9.7h.7c5.3 0 9.7 4.4 9.7 9.7V40z"/>
	</g>
</svg>
	);
};

export default IceCreamAlt;