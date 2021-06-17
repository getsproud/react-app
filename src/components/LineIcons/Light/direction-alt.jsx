import React from 'react';

function DirectionAlt(props) {
	const title = props.title || "direction alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.6 27.7H36.3v-5.3h6.3c.4 0 .8-.2 1.1-.5l5.1-5.5c.5-.6.5-1.4 0-2l-5.1-5.5c-.3-.3-.7-.5-1.1-.5h-6.3V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v6.8H15.4c-.8 0-1.5.7-1.5 1.5v11.1c0 .8.7 1.5 1.5 1.5h17.9v5.3H21.4c-.4 0-.8.2-1.1.5l-5.1 5.5c-.5.6-.5 1.4 0 2l5.1 5.5c.3.3.7.5 1.1.5h11.8v20.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V41.8h12.4c.8 0 1.5-.7 1.5-1.5V29.2c0-.8-.6-1.5-1.5-1.5zM16.9 11.3h25l3.7 4-3.7 4h-25v-8zm30.2 27.5h-25l-3.7-4 3.7-4h25v8z"/>
	</g>
</svg>
	);
};

export default DirectionAlt;