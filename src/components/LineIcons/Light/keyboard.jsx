import React from 'react';

function Keyboard(props) {
	const title = props.title || "keyboard";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.5 11.1h-55c-2.5 0-4.5 2-4.5 4.5v32.8c0 2.5 2 4.5 4.5 4.5h55c2.5 0 4.5-2 4.5-4.5V15.6c0-2.5-2-4.5-4.5-4.5zM61 48.4c0 .8-.7 1.5-1.5 1.5h-55c-.8 0-1.5-.7-1.5-1.5V15.6c0-.8.7-1.5 1.5-1.5h55c.8 0 1.5.7 1.5 1.5v32.8z"/>
		<path d="M23.7 25.5V22c0-.6-.4-1-1-1h-3.5c-.6 0-1 .4-1 1v3.5c0 .6.4 1 1 1h3.5c.5 0 1-.5 1-1z"/>
		<path d="M23.7 33.8c0 .6.4 1 1 1h3.5c.6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1h-3.5c-.6 0-1 .4-1 1v3.5z"/>
		<path d="M34.8 33.8c0 .6.4 1 1 1h3.5c.6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1h-3.5c-.6 0-1 .4-1 1v3.5z"/>
		<path d="M30.2 26.5h3.5c.6 0 1-.4 1-1V22c0-.6-.4-1-1-1h-3.5c-.6 0-1 .4-1 1v3.5c0 .5.5 1 1 1z"/>
		<path d="M44.9 20.9h-3.5c-.6 0-1 .4-1 1v3.5c0 .6.4 1 1 1h3.5c.6 0 1-.4 1-1v-3.5c0-.5-.5-1-1-1z"/>
		<path d="M43.1 41.6H20.9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h22.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Keyboard;