import React from 'react';

function Pyramid(props) {
	const title = props.title || "pyramid";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.7 53.6l-30.4-45c-.6-.8-1.9-.8-2.5 0L.4 53.6c-.4.5-.4 1.1-.2 1.6.3.5.8.8 1.4.8h60.9c.6 0 1.1-.3 1.3-.8.2-.5.2-1.1-.1-1.6zM19.3 30.9h25.4l7 10.4H12.3l7-10.4zM32 12.2l10.6 15.7H21.4L32 12.2zM4.4 53l5.9-8.7h43.5l5.9 8.7H4.4z"/>
	</g>
</svg>
	);
};

export default Pyramid;