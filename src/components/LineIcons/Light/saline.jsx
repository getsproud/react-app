import React from 'react';

function Saline(props) {
	const title = props.title || "saline";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.1 0H14.9c-.8 0-1.5.7-1.5 1.5v34.9c0 .5.3 1.1.8 1.3l16.3 9v15.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V46.7l16.3-9c.5-.3.8-.8.8-1.3V1.5c0-.8-.7-1.5-1.5-1.5zm-1.5 3v6.9H16.4V3h31.2zM32 44.1l-15.6-8.6V12.9h31.2v22.6L32 44.1z"/>
	</g>
</svg>
	);
};

export default Saline;