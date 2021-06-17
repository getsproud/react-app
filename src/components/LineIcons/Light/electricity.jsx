import React from 'react';

function Electricity(props) {
	const title = props.title || "electricity";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.7 50.5L33.2 11.7c-.6-.7-1.8-.7-2.4 0L.3 50.5c-.4.5-.4 1.1-.2 1.6.3.5.8.8 1.3.8h61c.6 0 1.1-.3 1.3-.8.4-.6.3-1.2 0-1.6zm-59.1-.6L32 15l27.4 34.9H4.6z"/>
		<path d="M28.2 35.3c0 .4.2.8.5 1.1l3.4 3.3-3.4 3.3c-.6.6-.6 1.5 0 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l4.6-4.4c.3-.3.5-.7.5-1.1s-.2-.8-.5-1.1L32 35.3l3.4-3.3c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-4.6 4.4c-.3.2-.5.6-.5 1z"/>
	</g>
</svg>
	);
};

export default Electricity;