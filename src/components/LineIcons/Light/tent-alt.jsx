import React from 'react';

function TentAlt(props) {
	const title = props.title || "tent alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.4 53.6h-2.3L33.9 18.5l6.5-8.8c.5-.7.4-1.6-.3-2.1-.6-.4-1.6-.3-2.1.4l-6 8-6-8c-.5-.7-1.4-.8-2.1-.3s-.8 1.4-.3 2.1l6.5 8.7L3.9 53.6H1.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h60.8c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5zM32 21l24.4 32.6H39.1l-3.8-13c-.2-.6-.8-1.1-1.4-1.1h-3.7c-.7 0-1.3.4-1.4 1.1l-3.8 13H7.6L32 21zm-4 32.6l3.2-11.1h1.5L36 53.6h-8z"/>
	</g>
</svg>
	);
};

export default TentAlt;